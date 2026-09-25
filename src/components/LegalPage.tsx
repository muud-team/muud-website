import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { defaultLocale } from "@/i18n/config";
import { alternatesFor, buildOpenGraph } from "@/lib/seo";
import { graph, webPageSchema } from "@/lib/structured-data";
import terms from "@/content/legal/terms.json";
import privacy from "@/content/legal/privacy.json";
import dpa from "@/content/legal/dpa.json";

/**
 * Legal documents are generated from the .docx files in /docs by
 * `npm run legal` (scripts/build-legal.mjs) — edit the .docx, not the JSON.
 */
type LegalDoc = { title: string; updated: string; html: string };

const DOCUMENTS = {
  terms: { content: terms, path: "terminos-y-condiciones" },
  privacy: { content: privacy, path: "politica-de-privacidad" },
  dpa: { content: dpa, path: "dpa" },
} satisfies Record<string, { content: Record<string, LegalDoc>; path: string }>;

export type LegalDocumentKey = keyof typeof DOCUMENTS;

function getDocument(doc: LegalDocumentKey, locale: string): LegalDoc {
  const content: Record<string, LegalDoc> = DOCUMENTS[doc].content;
  const fallback = content[locale] ?? content[defaultLocale] ?? Object.values(content)[0];

  if (!fallback) {
    throw new Error(`Missing legal document content for ${doc}`);
  }

  return fallback;
}

export async function legalMetadata(doc: LegalDocumentKey, locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `metadata.${doc}` });
  const { path } = DOCUMENTS[doc];

  return {
    title: t("title"),
    description: t("description"),
    openGraph: buildOpenGraph({
      locale,
      title: t("ogTitle"),
      description: t("ogDescription"),
      path,
      ogImagePath: "",
    }),
    alternates: alternatesFor(locale, path),
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({ doc, locale }: { doc: LegalDocumentKey; locale: string }) {
  const tMeta = await getTranslations({ locale, namespace: `metadata.${doc}` });
  const { title, updated, html } = getDocument(doc, locale);

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: DOCUMENTS[doc].path,
      name: tMeta("title"),
      description: tMeta("description"),
    })
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav sectionLinks={[]} />

      <main id="top">
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <div className="legal-header">
              <h1>{title}</h1>
              <p className="legal-updated">{updated}</p>
            </div>

            <div className="legal-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
