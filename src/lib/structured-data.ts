import { SITE_URL, HREFLANG, localizedUrl } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

/**
 * Stable @ids so every page references the *same* entities instead of
 * redeclaring them. Answer engines use this to resolve "MUUD" to one org.
 */
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

const LOGO_URL = `${SITE_URL}/android-chrome-512x512.png`;

const SAME_AS = [
  "https://www.instagram.com/muud.app/",
  "https://www.linkedin.com/company/muud-app/",
  "https://www.facebook.com/muud.app.latam",
  "https://apps.apple.com/cl/app/m%C3%BCud/id6455428632",
  "https://play.google.com/store/apps/details?id=app.muud",
];

const lang = (locale: string) => HREFLANG[locale as Locale] ?? "es";

export function organizationSchema(description: string) {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "MUUD",
    legalName: "MUUD SpA",
    alternateName: ["MÜUD", "MUUD App"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: LOGO_URL,
      width: 512,
      height: 512,
      caption: "MUUD",
    },
    image: { "@id": `${SITE_URL}/#logo` },
    description,
    email: "hola@muud.app",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Presidente Kennedy 5600, Of. 507",
      addressLocality: "Vitacura",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hola@muud.app",
      areaServed: ["CL", "LATAM"],
      availableLanguage: ["es", "en", "pt"],
    },
    sameAs: SAME_AS,
  };
}

export function websiteSchema(locale: string, description: string) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "MUUD",
    description,
    publisher: { "@id": ORG_ID },
    inLanguage: lang(locale),
  };
}

export function webPageSchema({
  locale,
  path,
  name,
  description,
  breadcrumbId,
}: {
  locale: string;
  path?: string;
  name: string;
  description: string;
  breadcrumbId?: string;
}) {
  const url = localizedUrl(locale, path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: lang(locale),
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };
}

/** items: [{ name, path }] — the home crumb is added automatically. */
export function breadcrumbSchema(
  locale: string,
  homeName: string,
  items: { name: string; path: string }[]
) {
  const trail = [{ name: homeName, path: "" }, ...items];
  const last = trail[trail.length - 1];
  return {
    "@type": "BreadcrumbList",
    "@id": `${localizedUrl(locale, last.path)}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: localizedUrl(locale, item.path),
    })),
  };
}

/**
 * FAQPage — the single highest-leverage schema for answer engines: it hands
 * them pre-paired questions and answers instead of prose they must summarize.
 */
export function faqSchema(
  locale: string,
  path: string,
  items: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    "@id": `${localizedUrl(locale, path)}#faq`,
    inLanguage: lang(locale),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema({
  locale,
  path,
  name,
  serviceType,
  description,
  audienceType,
}: {
  locale: string;
  path: string;
  name: string;
  serviceType: string;
  description: string;
  audienceType: string;
}) {
  const url = localizedUrl(locale, path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Place", name: "Latinoamérica" },
    ],
    audience: { "@type": "Audience", audienceType },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      availableLanguage: ["es", "en", "pt"],
    },
  };
}

/**
 * MUUD's mobile app as an entity. Kept free of `offers`/`aggregateRating` on
 * purpose — Google only demands those when the type is used as a Product-like
 * rich result, and we reference this as supporting context, not a listing.
 */
export function mobileAppSchema(description: string) {
  return {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#app`,
    name: "MÜUD",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    downloadUrl: [
      "https://apps.apple.com/cl/app/m%C3%BCud/id6455428632",
      "https://play.google.com/store/apps/details?id=app.muud",
    ],
  };
}

export function articleSchema({
  locale,
  slug,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  tags,
  wordCount,
}: {
  locale: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  tags: string[];
  wordCount: number;
}) {
  const url = localizedUrl(locale, `blog/${slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    wordCount,
    keywords: tags.join(", "),
    articleSection: tags[0],
    inLanguage: lang(locale),
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    isPartOf: { "@id": `${localizedUrl(locale, "blog")}#blog` },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#rodrigo-torres`,
      name: "Rodrigo Torres",
      jobTitle: "Cofundador",
      worksFor: { "@id": ORG_ID },
    },
    publisher: { "@id": ORG_ID },
  };
}

export function blogSchema({
  locale,
  name,
  description,
  posts,
}: {
  locale: string;
  name: string;
  description: string;
  posts: { slug: string; title: string; date: string; summary: string }[];
}) {
  const url = localizedUrl(locale, "blog");
  return {
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name,
    description,
    inLanguage: lang(locale),
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${localizedUrl(locale, `blog/${post.slug}`)}#article`,
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      url: localizedUrl(locale, `blog/${post.slug}`),
    })),
  };
}

/** Wraps entities in a single @graph — one script tag, one connected graph. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
