import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import NewTabHint from './NewTabHint';
import CookiePreferencesButton from './CookiePreferencesButton';

interface FooterProps {
  variant?: "general" | "colegios" | "empresas";
}

export default function Footer({ variant = "general" }: FooterProps) {
  const t = useTranslations('footer');
  const locale = useLocale();

  const description = variant === "empresas"
    ? t('descriptionBusiness')
    : t('description');

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image
              className="foot-logo"
              src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620c8_Logo%20MUUD%20(1).png"
              alt="MUUD"
              width={140}
              height={140}
            />
            <p>{description}</p>
            <div className="foot-socials">
              <a href="https://www.instagram.com/muud.app/" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662996d8d341aac4a3f456c2_4.png" alt="Instagram" width={20} height={20} />
              <NewTabHint /></a>
              <a href="https://www.linkedin.com/company/muud-app/" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662996d8c30fbb4b5a0b44df_5.png" alt="LinkedIn" width={20} height={20} />
              <NewTabHint /></a>
              <a href="https://www.facebook.com/muud.app.latam" target="_blank" rel="noopener noreferrer">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/662998f198f0c8cbcff2509b_Disen%CC%83o%20sin%20ti%CC%81tulo.png" alt="Facebook" width={20} height={20} />
              <NewTabHint /></a>
            </div>
          </div>
          <nav className="foot-col" aria-labelledby="foot-solutions">
            <h2 id="foot-solutions">{t('solutionsTitle')}</h2>
            <Link href="/colegios">{t('forSchools')}</Link>
            <Link href="/empresas">{t('forBusiness')}</Link>
            <Link href="/">{t('home')}</Link>
            {variant === "colegios" || variant === "general" ? (
              <a href="https://school.muud.app/welcome" target="_blank" rel="noopener noreferrer">{t('schoolLogin')}<NewTabHint /></a>
            ) : (
              <a href="https://business.muud.app" target="_blank" rel="noopener noreferrer">{t('businessLogin')}<NewTabHint /></a>
            )}
          </nav>
          <nav className="foot-col" aria-labelledby="foot-legal">
            <h2 id="foot-legal">{t('legalTitle')}</h2>
            <Link href="/terminos-y-condiciones" locale={locale}>{t('termsAndConditions')}</Link>
            <Link href="/eula" locale={locale}>{t('eula')}</Link>
            <Link href="/politica-de-privacidad" locale={locale}>{t('privacyPolicy')}</Link>
            <Link href="/dpa" locale={locale}>{t('dpa')}</Link>
            <Link href="/accesibilidad" locale={locale}>{t('accessibility')}</Link>
            <CookiePreferencesButton />
            <a href="https://forms.gle/qXwFsM4n2VEnoo5h7" target="_blank" rel="noopener noreferrer">{t('deleteAccount')}<NewTabHint /></a>
          </nav>
          <div className="foot-col">
            <h2>{t('contactTitle')}</h2>
            <div className="foot-contact">
              <Image src="/brand/location.svg" alt="" width={18} height={18} style={{ marginTop: 2 }} />
              <span>{t('address')}</span>
            </div>
            <div className="foot-contact">
              <Image src="/brand/mail.svg" alt="" width={18} height={18} style={{ marginTop: 2 }} />
              <a href="mailto:hola@muud.app" className="foot-inline">{t('email')}</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>{t('copyright')}</p>
          <LanguageSwitcher />
          <div className="foot-made">{t('madeInChile')}</div>
        </div>
      </div>
    </footer>
  );
}
