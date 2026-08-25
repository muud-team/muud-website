import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { alternatesFor, ogLocales, SITE_URL } from '@/lib/seo';
import { graph, organizationSchema, websiteSchema, mobileAppSchema } from '@/lib/structured-data';
import JsonLd from "@/components/JsonLd";
import "../globals.css";
import RevealOnScroll from "@/components/RevealOnScroll";
import CookieBanner from "@/components/CookieBanner";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBF7F2",
  colorScheme: "light",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.default' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: "%s | MUUD",
    },
    description: t('description'),
    keywords: t('keywords').split(',').map((k) => k.trim()),
    applicationName: "MUUD",
    authors: [{ name: "MUUD SpA", url: SITE_URL }],
    creator: "MUUD SpA",
    publisher: "MUUD SpA",
    alternates: alternatesFor(locale),
    openGraph: {
      type: "website",
      siteName: "MUUD",
      ...ogLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'metadata.schema' });

  // Site-wide entities. Pages emit only their own nodes and reference these
  // by @id, so the whole site resolves to one MUUD entity.
  const siteGraph = graph(
    organizationSchema(t('organization')),
    websiteSchema(locale, t('website')),
    mobileAppSchema(t('app')),
  );

  return (
    <html
      lang={locale}
      className={`${bricolage.variable} ${jakarta.variable}`}
    >
      <body>
        <JsonLd data={siteGraph} />
        <NextIntlClientProvider messages={messages}>
          <RevealOnScroll />
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
