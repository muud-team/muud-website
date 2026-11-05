"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { OPEN_COOKIE_PREFERENCES_EVENT, readConsent, writeConsent } from "@/lib/consent";

type Choice = { analytics: boolean; marketing: boolean };

const DENY_ALL: Choice = { analytics: false, marketing: false };

export default function CookieBanner() {
  const t = useTranslations("cookie");
  const tCommon = useTranslations("common");
  const [showBanner, setShowBanner] = useState(false);
  const [choice, setChoice] = useState<Choice>(DENY_ALL);
  const [savedMessage, setSavedMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stored = readConsent();
    if (stored) setChoice({ analytics: stored.analytics, marketing: stored.marketing });
    else setShowBanner(true);

    function openPreferences() {
      const current = readConsent();
      if (current) setChoice({ analytics: current.analytics, marketing: current.marketing });
      dialogRef.current?.showModal();
    }
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  // The banner is fixed: reserve its height so it never covers the keyboard
  // focus when the browser scrolls a focused element into view (WCAG 2.4.11).
  useEffect(() => {
    if (!showBanner) return;
    const root = document.documentElement;
    const update = () => {
      root.style.scrollPaddingBottom = `${(bannerRef.current?.offsetHeight ?? 0) + 16}px`;
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      root.style.scrollPaddingBottom = "";
    };
  }, [showBanner]);

  function save(next: Choice) {
    writeConsent(next);
    setChoice(next);
    setShowBanner(false);
    setSavedMessage(t("saved"));
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  return (
    <>
      <p className="sr-only" role="status">{savedMessage}</p>

      {showBanner && (
        <section ref={bannerRef} className="cookie-banner" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
          <p id="cookie-title" className="cookie-title">{t("title")}</p>
          <p id="cookie-desc" className="cookie-desc">{t("description")}</p>
          <div className="cookie-actions">
            <button type="button" className="btn-cookie btn-cookie-strong" onClick={() => save({ analytics: true, marketing: true })}>
              {t("acceptAll")}
            </button>
            <button type="button" className="btn-cookie btn-cookie-strong" onClick={() => save(DENY_ALL)}>
              {t("rejectAll")}
            </button>
            <button type="button" className="btn-cookie" onClick={() => dialogRef.current?.showModal()}>
              {t("customize")}
            </button>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        className="cookie-dialog"
        aria-labelledby="cookie-dialog-title"
        aria-describedby="cookie-dialog-desc"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="cookie-dialog-inner">
          <button type="button" className="cookie-dialog-close" aria-label={tCommon("close")} onClick={() => dialogRef.current?.close()}>
            <span aria-hidden="true">✕</span>
          </button>
          <h2 id="cookie-dialog-title">{t("customizeTitle")}</h2>
          <p id="cookie-dialog-desc" className="cookie-dialog-desc">{t("customizeDescription")}</p>

          <div className="cookie-options">
            <div className="cookie-option">
              <input type="checkbox" id="cookie-essential" checked disabled readOnly aria-describedby="cookie-essential-desc" />
              <label htmlFor="cookie-essential">{t("essential")}</label>
              <p id="cookie-essential-desc">{t("essentialDescription")}</p>
            </div>
            <div className="cookie-option">
              <input
                type="checkbox"
                id="cookie-analytics"
                checked={choice.analytics}
                aria-describedby="cookie-analytics-desc"
                onChange={(e) => setChoice({ ...choice, analytics: e.target.checked })}
              />
              <label htmlFor="cookie-analytics">{t("analytics")}</label>
              <p id="cookie-analytics-desc">{t("analyticsDescription")}</p>
            </div>
            <div className="cookie-option">
              <input
                type="checkbox"
                id="cookie-marketing"
                checked={choice.marketing}
                aria-describedby="cookie-marketing-desc"
                onChange={(e) => setChoice({ ...choice, marketing: e.target.checked })}
              />
              <label htmlFor="cookie-marketing">{t("marketing")}</label>
              <p id="cookie-marketing-desc">{t("marketingDescription")}</p>
            </div>
          </div>

          <div className="cookie-dialog-actions">
            <button type="button" className="btn btn-primary" onClick={() => save(choice)}>
              {t("savePreferences")}
            </button>
            <Link href="/politica-de-privacidad" className="cookie-learn-more">{t("learnMore")}</Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
