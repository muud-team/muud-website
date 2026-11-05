import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DocumentTitle from "@/components/DocumentTitle";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound");
  return { title: t("title"), robots: { index: false, follow: true } };
}

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <>
      <DocumentTitle title={`${t("title")} | MUUD`} />
      <Nav sectionLinks={[]} />
      <main id="top" tabIndex={-1}>
        <section className="sec sec-paper" style={{ paddingTop: 160 }}>
          <div className="wrap legal-wrap">
            <h1 className="not-found-title">{t("title")}</h1>
            <p className="not-found-text">{t("message")}</p>
            <Link href="/" className="btn btn-primary">{t("home")}</Link>
          </div>
        </section>
      </main>
      <Footer variant="general" />
    </>
  );
}
