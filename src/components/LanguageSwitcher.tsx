"use client";

import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, localeFlags, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as Locale;

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="language-switcher">
      {locales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && <span className="sep">|</span>}
          <button
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? 'active' : ''}
            aria-label={`Switch to ${locale}`}
          >
            {locale.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
