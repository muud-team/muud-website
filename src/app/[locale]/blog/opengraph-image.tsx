import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "MUUD";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.blog" });

  return renderOgImage({
    eyebrow: "Blog",
    title: t("ogDescription"),
    description: t("description"),
  });
}
