"use client";

import { useTranslations } from "next-intl";
import { OPEN_COOKIE_PREFERENCES_EVENT } from "@/lib/consent";

/** Lets people change or withdraw consent at any time, from every page. */
export default function CookiePreferencesButton() {
  const t = useTranslations("footer");
  return (
    <button
      type="button"
      className="foot-link-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
    >
      {t("cookiePreferences")}
    </button>
  );
}
