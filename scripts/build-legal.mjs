/**
 * Converts the legal .docx files in /docs into HTML the site can render.
 *
 *   npm run legal
 *
 * To update a document, replace the .docx in /docs (keeping the file name)
 * and run the command above. Output goes to src/content/legal/*.json and is
 * committed so reviewers can see exactly what changed on the site.
 *
 * Each .docx must start with the title (Heading 1) followed by a paragraph
 * with the "last updated" line; both are lifted into the page header.
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mammoth from "mammoth";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS_DIR = path.join(ROOT, "docs");
const OUT_DIR = path.join(ROOT, "src/content/legal");

const SOURCES = {
  terms: {
    es: "Términos (ES).docx",
    en: "Terms of Service.docx",
    pt: "Termos (PT).docx",
  },
  privacy: {
    es: "Política de Privacidad (ES).docx",
    en: "Privacy Policy.docx",
    pt: "Política de Privacidade (PT).docx",
  },
  dpa: {
    es: "DPA (ES).docx",
    en: "Data Processing Addendum.docx",
    pt: "DPA (PT).docx",
  },
};

const stripTags = (html) => html.replace(/<[^>]+>/g, "").trim();

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Turns bare URLs and e-mail addresses in text nodes into links. */
function autolink(html) {
  return html.replace(/(<a\b[^>]*>.*?<\/a>)|(>[^<]+<)/gs, (match, anchor) => {
    if (anchor) return match;
    return match
      .replace(
        /\bhttps?:\/\/[^\s<>"()]+[^\s<>"().,;:]/g,
        (url) =>
          /^https?:\/\/muud\.app(\/|$)/.test(url)
            ? `<a href="${url}">${url}</a>`
            : `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
      )
      .replace(
        /(?<![\w./@-])(?:school|business)\.muud\.app\b/g,
        (host) => `<a href="https://${host}" target="_blank" rel="noopener noreferrer">${host}</a>`
      )
      .replace(
        /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,
        (email) => `<a href="mailto:${email}">${email}</a>`
      );
  });
}

function transform(rawHtml, file) {
  let html = rawHtml;

  const h1 = html.match(/^<h1>(.*?)<\/h1>/s);
  if (!h1) throw new Error(`${file}: expected the document to start with a Heading 1 title`);
  const title = stripTags(h1[1]);
  html = html.slice(h1[0].length);

  const firstP = html.match(/^<p>(.*?)<\/p>/s);
  if (!firstP) throw new Error(`${file}: expected a "last updated" paragraph after the title`);
  const updated = stripTags(firstP[1]);
  html = html.slice(firstP[0].length);

  // Anchors on section headings so sections can be linked to (e.g. /dpa#anexo-iii).
  const seen = new Map();
  html = html.replace(/<h2>(.*?)<\/h2>/gs, (_, inner) => {
    let id = slugify(stripTags(inner)) || "section";
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n) id = `${id}-${n + 1}`;
    return `<h2 id="${id}">${inner}</h2>`;
  });

  html = html
    .replace(/<table>/g, '<div class="legal-table-wrap"><table class="legal-table">')
    .replace(/<\/table>/g, "</table></div>")
    .replace(/<p><\/p>/g, "");

  html = autolink(html);

  // Mammoth emits one long line; break after block elements for readable diffs.
  html = html.replace(/(<\/(?:p|h\d|li|tr|ul|ol|thead|tbody|table|div)>)/g, "$1\n").trim();

  return { title, updated, html };
}

await mkdir(OUT_DIR, { recursive: true });

for (const [doc, locales] of Object.entries(SOURCES)) {
  const out = {};
  for (const [locale, file] of Object.entries(locales)) {
    const { value, messages } = await mammoth.convertToHtml({ path: path.join(DOCS_DIR, file) });
    for (const m of messages) console.warn(`  ${file}: ${m.type}: ${m.message}`);
    out[locale] = transform(value, file);
  }
  const target = path.join(OUT_DIR, `${doc}.json`);
  await writeFile(target, JSON.stringify(out, null, 2) + "\n");
  console.log(`✓ ${path.relative(ROOT, target)}`);
}
