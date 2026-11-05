/**
 * Accessibility + privacy audit against a running production build.
 *
 *   npm run build && npx next start -p 9283
 *   npm run test:a11y                 # all routes, all locales, desktop + 320px
 *   A11Y_LOCALES=es npm run test:a11y # faster
 *
 * Automated rules catch roughly a third of WCAG issues. This complements manual
 * screen reader testing, it does not replace it.
 */
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:9283";
const LOCALES = (process.env.A11Y_LOCALES ?? "es,en,pt").split(",");
const ROUTES = [
  "",
  "/colegios",
  "/empresas",
  "/blog",
  "/blog/primer-mes-clases-mas-violento",
  "/accesibilidad",
  "/eula",
  "/terminos-y-condiciones",
  "/politica-de-privacidad",
  "/dpa",
];
const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "reflow-320", width: 320, height: 640 },
];
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

let failures = 0;
const fail = (where, msg) => {
  failures += 1;
  console.log(`  ✗ ${where}: ${msg}`);
};

/** Scrolls the whole page so scroll-triggered reveals settle before scanning. */
async function settle(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(900);
}

async function scanPages(browser) {
  const summary = new Map();
  const thirdParty = new Set();

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    for (const locale of LOCALES) {
      for (const route of ROUTES) {
        const url = `${BASE}/${locale}${route}`;
        const where = `${vp.name} /${locale}${route}`;
        const page = await context.newPage();
        const cspErrors = [];
        page.on("request", (r) => {
          const origin = new URL(r.url()).origin;
          if (origin !== BASE && !r.url().startsWith("data:")) thirdParty.add(origin);
        });
        page.on("console", (m) => {
          if (m.type() === "error" && /Content Security Policy/i.test(m.text())) cspErrors.push(m.text());
          if (m.type() === "log" && /consent|enabled/i.test(m.text())) fail(where, `console.log leak: ${m.text()}`);
        });

        const res = await page.goto(url, { waitUntil: "load" });
        if (!res || res.status() >= 400) {
          fail(where, `HTTP ${res?.status()}`);
          await page.close();
          continue;
        }
        await settle(page);

        const { violations, incomplete } = await new AxeBuilder({ page }).withTags(TAGS).analyze();
        for (const v of violations) {
          const key = `${v.id} [${v.impact}]`;
          const entry = summary.get(key) ?? { help: v.help, nodes: 0, sample: new Set(), pages: new Set() };
          entry.nodes += v.nodes.length;
          entry.pages.add(`/${locale}${route}`);
          v.nodes.slice(0, 2).forEach((n) => entry.sample.add(n.target.join(" ")));
          summary.set(key, entry);
          failures += 1;
        }
        // axe reports exactly 1:1 text as "incomplete", not as a violation, so
        // invisible text (white on white) would otherwise pass.
        const contrastReview = incomplete.find((i) => i.id === "color-contrast")?.nodes ?? [];
        for (const node of contrastReview) {
          if (node.any?.[0]?.data?.messageKey === "equalRatio") fail(where, `invisible text: ${node.target.join(" ")}`);
        }
        if (process.env.A11Y_VERBOSE && contrastReview.length) console.log(`  ? ${where}: ${contrastReview.length} contrast checks need review`);

        const overflow = await page.evaluate(() => {
          const vw = document.documentElement.clientWidth;
          if (document.documentElement.scrollWidth <= vw) return null;
          const offenders = [...document.querySelectorAll("body *")]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && r.right > vw + 1 && !el.closest("[data-reflow-ok], .legal-table-wrap, .mobile-menu");
            })
            .slice(0, 3)
            .map((el) => el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? `.${el.className.split(" ")[0]}` : ""));
          return `${document.documentElement.scrollWidth}px > ${vw}px (${offenders.join(", ")})`;
        });
        if (overflow) fail(where, `horizontal overflow ${overflow}`);
        cspErrors.slice(0, 2).forEach((e) => fail(where, `CSP: ${e.slice(0, 160)}`));
        await page.close();
      }
    }
    await context.close();
  }

  console.log("\nAxe violations (WCAG 2.0/2.1/2.2 A + AA):");
  if (!summary.size) console.log("  none");
  for (const [key, e] of [...summary].sort((a, b) => b[1].nodes - a[1].nodes)) {
    console.log(`  ${key} — ${e.help}: ${e.nodes} nodes on ${e.pages.size} pages\n      e.g. ${[...e.sample].slice(0, 3).join("  |  ")}`);
  }
  console.log("\nThird-party origins contacted on load (no interaction):");
  console.log(thirdParty.size ? [...thirdParty].map((o) => `  ${o}`).join("\n") : "  none");
  if (thirdParty.size) fail("privacy", "third-party requests before consent");
}

/** Behaviour axe cannot see: keyboard, focus and status-message handling. */
async function behaviour(browser) {
  console.log("\nKeyboard / focus behaviour:");
  const check = (name, ok, detail = "") => (ok ? console.log(`  ✓ ${name}`) : fail(name, detail || "failed"));
  const active = (page) => page.evaluate(() => {
    const a = document.activeElement;
    return { tag: a?.tagName, cls: a?.className ?? "", id: a?.id ?? "", text: a?.textContent?.trim().slice(0, 40) ?? "", href: a?.getAttribute?.("href") ?? "" };
  });

  const desktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await desktop.addInitScript(() => localStorage.setItem("muud-cookie-consent", JSON.stringify({ version: 1, essential: true, analytics: false, marketing: false })));
  let page = await desktop.newPage();
  await page.goto(`${BASE}/es`, { waitUntil: "load" });

  await page.keyboard.press("Tab");
  let a = await active(page);
  check("first Tab reaches the skip link", /skip-link/.test(a.cls), JSON.stringify(a));
  await page.keyboard.press("Enter");
  await page.waitForTimeout(200);
  a = await active(page);
  check("skip link moves focus to <main>", a.tag === "MAIN", JSON.stringify(a));

  const trigger = page.locator(".login-trigger");
  const closedVisible = await page.locator(".login-menu a").first().isVisible();
  check("closed login menu is not reachable", !closedVisible);
  await trigger.focus();
  await page.keyboard.press("Enter");
  check("login menu opens with Enter", (await trigger.getAttribute("aria-expanded")) === "true");
  await page.keyboard.press("Escape");
  a = await active(page);
  check("Escape closes login menu and restores focus", (await trigger.getAttribute("aria-expanded")) === "false" && /login-trigger/.test(a.cls), JSON.stringify(a));

  // Empty submit: errors announced, focus on first invalid field.
  await page.locator("#contacto form button[type=submit]").click();
  await page.waitForTimeout(150);
  a = await active(page);
  const firstInvalid = await page.locator('#contacto [aria-invalid="true"]').count();
  check("invalid contact form focuses the first bad field", a.tag === "INPUT" && firstInvalid >= 3, `${JSON.stringify(a)} invalid=${firstInvalid}`);
  const described = await page.locator('#contacto input[aria-invalid="true"]').first().getAttribute("aria-describedby");
  check("field error is linked with aria-describedby", !!described && (await page.locator(`[id="${described.split(" ")[0]}"]`).count()) === 1);

  // Video facade: no YouTube iframe until asked for.
  check("no YouTube iframe before activation", (await page.locator('iframe[src*="youtube"]').count()) === 0);
  await page.close();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 780 } });
  await mobile.addInitScript(() => localStorage.setItem("muud-cookie-consent", JSON.stringify({ version: 1, essential: true, analytics: false, marketing: false })));
  page = await mobile.newPage();
  await page.goto(`${BASE}/es`, { waitUntil: "load" });
  const burger = page.locator(".nav-burger");
  check("closed mobile menu is not reachable", !(await page.locator(".mobile-menu a").first().isVisible()));
  await burger.focus();
  await page.keyboard.press("Enter");
  await page.waitForTimeout(450);
  check("burger exposes aria-expanded", (await burger.getAttribute("aria-expanded")) === "true");
  const stayedInside = [];
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press("Tab");
    // A native modal may hand focus to the browser UI (body) but never to the page behind it.
    stayedInside.push(await page.evaluate(() => document.activeElement === document.body || !!document.activeElement?.closest(".mobile-menu")));
  }
  check("focus is trapped in the open mobile menu", stayedInside.every(Boolean));
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  a = await active(page);
  check("Escape closes mobile menu and restores focus", /nav-burger/.test(a.cls), JSON.stringify(a));
  await mobile.close();

  // Cookie banner + preferences dialog.
  const fresh = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  page = await fresh.newPage();
  await page.goto(`${BASE}/en`, { waitUntil: "load" });
  await page.waitForSelector(".cookie-banner");
  await page.getByRole("button", { name: "Customize" }).click();
  await page.waitForTimeout(100);
  const dialog = page.locator(".cookie-dialog");
  check("cookie preferences open as a modal dialog", await dialog.evaluate((d) => d.tagName === "DIALOG" && d.matches(":modal")));
  await page.keyboard.press("Escape");
  await page.waitForTimeout(100);
  a = await active(page);
  check("Escape closes preferences and restores focus", /Customize/.test(a.text), JSON.stringify(a));
  await page.getByRole("button", { name: "Essential only" }).click();
  await page.waitForTimeout(100);
  check("banner closes after a choice", (await page.locator(".cookie-banner").count()) === 0);
  await page.getByRole("button", { name: "Cookie preferences" }).click();
  check("consent can be changed later from the footer", await page.locator(".cookie-dialog").evaluate((d) => d.matches(":modal")));
  await fresh.close();
  await desktop.close();

  // Form outcomes, with the API mocked so nothing reaches the real backend.
  const forms = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await forms.addInitScript(() => localStorage.setItem("muud-cookie-consent", JSON.stringify({ version: 1, essential: true, analytics: false, marketing: false })));
  page = await forms.newPage();
  let apiStatus = 500;
  await page.route("https://back.muud.app/**", (route) => route.fulfill({
    status: route.request().method() === "OPTIONS" ? 204 : apiStatus,
    headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "content-type", "content-type": "application/json" },
    body: route.request().method() === "OPTIONS" ? "" : JSON.stringify({ message: "SQL error at db-internal-host" }),
  }));
  await page.goto(`${BASE}/en`, { waitUntil: "load" });
  const contact = page.locator("#contacto");
  await contact.locator("#nombre").fill("Test Person");
  await contact.locator("#org").fill("Test School");
  await contact.locator("#email").fill("not-an-email");
  await contact.locator("button[type=submit]").click();
  a = await active(page);
  check("malformed email is reported on the email field", a.id === "email" && (await page.locator("#email-error").count()) === 1, JSON.stringify(a));
  await contact.locator("#email").fill("person@example.com");
  await contact.locator("button[type=submit]").click();
  const alert = contact.locator('[role="alert"]');
  await alert.waitFor();
  check("server errors show a generic message, without internal detail", !/SQL|db-internal/.test(await alert.textContent()));
  apiStatus = 200;
  await contact.locator("button[type=submit]").click();
  await page.waitForSelector(".form-ok");
  a = await active(page);
  check("successful submit moves focus to the confirmation", /form-ok/.test(a.cls), JSON.stringify(a));

  // Video only loads on request, from the no-cookie host, and CSP allows it.
  const frameCsp = [];
  page.on("console", (m) => { if (/Content Security Policy/i.test(m.text())) frameCsp.push(m.text()); });
  await page.locator(".press-video-play").first().click();
  const frame = page.locator('.press-video iframe').first();
  await frame.waitFor();
  check("video loads from youtube-nocookie after activation", /youtube-nocookie\.com/.test(await frame.getAttribute("src")));
  await page.waitForTimeout(800);
  check("video does not violate the CSP", frameCsp.length === 0, frameCsp[0]);
  await forms.close();

  // Unknown URLs: real 404 status, language and a descriptive title.
  const nf = await browser.newContext();
  page = await nf.newPage();
  const nfRes = await page.goto(`${BASE}/en/does-not-exist`, { waitUntil: "networkidle" });
  const nfInfo = await page.evaluate(() => ({ lang: document.documentElement.lang, title: document.title }));
  check("404 page has status, lang and title", nfRes.status() === 404 && nfInfo.lang === "en" && /not found/i.test(nfInfo.title), JSON.stringify({ status: nfRes.status(), ...nfInfo }));
  await nf.close();

  // Reduced motion: nothing keeps moving. Default: nothing moves past 5s.
  const reduced = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 800 } });
  page = await reduced.newPage();
  await page.goto(`${BASE}/es`, { waitUntil: "load" });
  const running = await page.evaluate(() => document.getAnimations().filter((x) => x.playState === "running").length);
  check("prefers-reduced-motion stops animations", running === 0, `${running} running`);
  await reduced.close();

  const normal = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  page = await normal.newPage();
  await page.goto(`${BASE}/es`, { waitUntil: "load" });
  await page.waitForTimeout(5300);
  const stillMoving = await page.evaluate(() => document.getAnimations().filter((x) => x.playState === "running" && x.effect?.getComputedTiming().iterations === Infinity).length);
  check("no infinite animation (WCAG 2.2.2)", stillMoving === 0, `${stillMoving} infinite`);
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  page = await noJs.newPage();
  await page.goto(`${BASE}/es`);
  const hidden = await page.locator(".reveal").first().evaluate((el) => getComputedStyle(el).opacity);
  check("content is visible without JavaScript", hidden === "1", `opacity ${hidden}`);
  await noJs.close();
  await normal.close();

  // Text spacing (WCAG 1.4.12): no clipped text at the required overrides.
  const spacing = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  page = await spacing.newPage();
  await page.goto(`${BASE}/es/blog`, { waitUntil: "load" });
  await page.addStyleTag({ content: "*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important} p{margin-bottom:2em!important}" });
  await settle(page);
  const clipped = await page.evaluate(() => [...document.querySelectorAll("h1,h2,h3,p,a,button,span,li")].filter((el) => {
    const cs = getComputedStyle(el);
    return cs.overflow === "hidden" && !el.matches(".sr-only") && el.scrollHeight > el.clientHeight + 1 && el.textContent.trim();
  }).length);
  check("text spacing overrides do not clip text", clipped === 0, `${clipped} clipped`);
  await spacing.close();
}

const browser = await chromium.launch();
try {
  if (!process.env.A11Y_ONLY_BEHAVIOUR) await scanPages(browser);
  await behaviour(browser).catch((e) => fail("behaviour run", e.message.split("\n")[0]));
} finally {
  await browser.close();
}
console.log(failures ? `\n${failures} problem(s) found.` : "\nAll automated checks passed.");
process.exit(failures ? 1 : 0);
