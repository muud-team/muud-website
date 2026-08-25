import { locales, defaultLocale, type Locale } from "@/i18n/config";

export const SITE_URL = "https://muud.app";

/** Open Graph expects `language_TERRITORY`, not a bare language code. */
export const OG_LOCALES: Record<Locale, string> = {
  es: "es_CL",
  en: "en_US",
  pt: "pt_BR",
};

/** BCP-47 tags used for hreflang and schema.org `inLanguage`. */
export const HREFLANG: Record<Locale, string> = {
  es: "es",
  en: "en",
  pt: "pt",
};

/** Absolute URL for a locale + path (path without leading locale, "" = home). */
export function localizedUrl(locale: string, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `${SITE_URL}/${locale}${clean ? `/${clean}` : ""}`;
}

/**
 * Canonical + full hreflang map for a page.
 *
 * Metadata is merged *shallowly* between segments, so a page that sets
 * `alternates` replaces the layout's entirely — every page must emit the
 * complete map itself or it ships without hreflang.
 */
export function alternatesFor(locale: string, path = "") {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      ...Object.fromEntries(
        locales.map((l) => [HREFLANG[l], localizedUrl(l, path)])
      ),
      "x-default": localizedUrl(defaultLocale, path),
    },
  };
}

/** Open Graph locale block: current locale plus the ones we also publish. */
export function ogLocales(locale: string) {
  const current = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: OG_LOCALES[current],
    alternateLocale: locales.filter((l) => l !== current).map((l) => OG_LOCALES[l]),
  };
}

/**
 * Full Open Graph block for a page.
 *
 * Metadata merges shallowly, so a page that sets `openGraph` drops every field
 * the layout set — including the `opengraph-image` file association. Building
 * the whole object here keeps `type`, `siteName` and the image on every page.
 *
 * `ogImagePath` defaults to the page's own path; pass another when the segment
 * has no `opengraph-image` route of its own.
 */
export function buildOpenGraph({
  locale,
  title,
  description,
  path = "",
  ogImagePath,
}: {
  locale: string;
  title: string;
  description: string;
  path?: string;
  ogImagePath?: string;
}) {
  const imageBase = localizedUrl(locale, ogImagePath ?? path);

  return {
    type: "website" as const,
    siteName: "MUUD",
    title,
    description,
    url: localizedUrl(locale, path),
    images: [
      {
        url: `${imageBase}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    ...ogLocales(locale),
  };
}
