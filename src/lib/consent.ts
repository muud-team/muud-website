/**
 * Single source of truth for cookie consent. Anything that sets non-essential
 * cookies or calls a third party must check `hasConsent` first and subscribe to
 * CONSENT_CHANGED_EVENT, so a withdrawal takes effect without a reload.
 *
 * Do not load tracking on authenticated pages or on any page that could reveal
 * a person's health or wellbeing data, regardless of consent.
 */
export const CONSENT_KEY = "muud-cookie-consent";
/** Bump to ask everyone again, e.g. when a new category or vendor is added. */
export const CONSENT_VERSION = 1;
export const CONSENT_CHANGED_EVENT = "muud:consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "muud:open-cookie-preferences";

export type ConsentCategory = "analytics" | "marketing";

export type Consent = {
  version: number;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt?: string;
};

export function readConsent(): Consent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return parsed?.version === CONSENT_VERSION ? (parsed as Consent) : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: Pick<Consent, ConsentCategory>): Consent {
  const consent: Consent = {
    version: CONSENT_VERSION,
    essential: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked: the choice lasts for this page view, and nothing loads.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: consent }));
  return consent;
}

/** Denied by default: no stored decision means no consent. */
export function hasConsent(category: ConsentCategory): boolean {
  return readConsent()?.[category] === true;
}
