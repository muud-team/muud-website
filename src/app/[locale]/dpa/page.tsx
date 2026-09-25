import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import LegalPage, { legalMetadata } from "@/components/LegalPage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata("dpa", locale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function DpaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage doc="dpa" locale={locale} />;
}
