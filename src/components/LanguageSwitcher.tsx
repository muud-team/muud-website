"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { locales, localeNames } from "@/i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("a11y");

  return (
    <nav className="language-switcher" aria-label={t("languageNav")}>
      {locales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && <span className="sep" aria-hidden="true">|</span>}
          <Link
            href={pathname}
            locale={locale}
            lang={locale}
            hrefLang={locale}
            className={currentLocale === locale ? "active" : ""}
            aria-current={currentLocale === locale ? "true" : undefined}
            aria-label={`${locale.toUpperCase()}, ${localeNames[locale]}`}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
