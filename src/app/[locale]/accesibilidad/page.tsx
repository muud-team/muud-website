import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { alternatesFor, buildOpenGraph } from "@/lib/seo";
import { graph, webPageSchema } from "@/lib/structured-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.accessibility" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: buildOpenGraph({
      locale,
      title: t("ogTitle"),
      description: t("ogDescription"),
      path: "accesibilidad",
      ogImagePath: "",
    }),
    alternates: alternatesFor(locale, "accesibilidad"),
  };
}

type Section = { heading: string; paragraphs: string[] };

export default function AccessibilityPage() {
  const t = useTranslations("accessibility");
  const tMeta = useTranslations("metadata.accessibility");
  const locale = useLocale();

  const sections = t.raw("sections") as Section[];
  const limitations = t.raw("limitations") as string[];

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: "accesibilidad",
      name: tMeta("title"),
      description: tMeta("description"),
    })
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav sectionLinks={[]} />

      <main id="top" tabIndex={-1}>
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <div className="legal-header">
              <h1>{t("title")}</h1>
              <p className="legal-updated">{t("updated")}</p>
            </div>

            <div className="legal-body">
              <p>{t("intro")}</p>
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
              <h2>{t("limitationsHeading")}</h2>
              <ul>
                {limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>{t("contactHeading")}</h2>
              <p>
                {t.rich("contactText", {
                  link: (chunks) => <a href="mailto:hola@muud.app">{chunks}</a>,
                })}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="general" />
    </>
  );
}
