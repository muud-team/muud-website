"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = 'muud-cookie-consent';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed);
        applyConsent(parsed);
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const applyConsent = (consentData: CookieConsent) => {
    if (consentData.analytics) {
      // Initialize analytics (Google Analytics, etc.)
      console.log('Analytics enabled');
    }
    if (consentData.marketing) {
      // Initialize marketing cookies
      console.log('Marketing enabled');
    }
  };

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
    applyConsent(consentData);
    setShowBanner(false);
    setShowCustomize(false);
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const saveCustom = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="cookie-overlay" onClick={() => showCustomize && setShowCustomize(false)} />

      <div className="cookie-banner">
        <div className="cookie-content">
          <div className="cookie-text">
            <strong>{t('title')}</strong>
            <span>{t('description')}</span>
          </div>
          <div className="cookie-actions">
            <button onClick={acceptAll} className="btn-cookie btn-accept">
              {t('acceptAll')}
            </button>
            <button onClick={rejectAll} className="btn-cookie btn-reject">
              {t('rejectAll')}
            </button>
            <button onClick={() => setShowCustomize(true)} className="btn-cookie btn-custom">
              {t('customize')}
            </button>
          </div>
        </div>
      </div>

      {showCustomize && (
        <div className="cookie-modal">
          <div className="cookie-modal-content">
            <button
              className="cookie-modal-close"
              onClick={() => setShowCustomize(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <h2>{t('customizeTitle')}</h2>
            <p>{t('customizeDescription')}</p>

            <div className="cookie-options">
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={consent.essential}
                    disabled
                  />
                  <label htmlFor="essential">
                    <strong>{t('essential')}</strong>
                  </label>
                </div>
                <p className="cookie-option-desc">{t('essentialDescription')}</p>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-header">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={consent.analytics}
                    onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  />
                  <label htmlFor="analytics">
                    <strong>{t('analytics')}</strong>
                  </label>
                </div>
                <p className="cookie-option-desc">{t('analyticsDescription')}</p>
              </div>

              <div className="cookie-option">
                <div className="cookie-option-header">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={consent.marketing}
                    onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  />
                  <label htmlFor="marketing">
                    <strong>{t('marketing')}</strong>
                  </label>
                </div>
                <p className="cookie-option-desc">{t('marketingDescription')}</p>
              </div>
            </div>

            <div className="cookie-modal-actions">
              <button onClick={saveCustom} className="btn btn-primary">
                {t('savePreferences')}
              </button>
              <a href="/privacy" className="cookie-learn-more">
                {t('learnMore')}
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .cookie-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          display: none;
        }

        .cookie-banner:has(+ * .cookie-modal) ~ .cookie-overlay,
        .cookie-modal ~ .cookie-overlay {
          display: block;
        }

        .cookie-banner {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          max-width: 420px;
          padding: 1rem;
        }

        .cookie-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cookie-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .cookie-text strong {
          font-size: 0.95rem;
          font-weight: 600;
          color: #111827;
        }

        .cookie-text span {
          font-size: 0.8rem;
          color: #6b7280;
          line-height: 1.4;
        }

        .cookie-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-cookie {
          flex: 1;
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 6px;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s;
        }

        .btn-accept {
          background: #54c4e8;
          border-color: #54c4e8;
          color: white;
        }

        .btn-accept:hover {
          background: #3ba9cc;
        }

        .btn-reject,
        .btn-custom {
          background: white;
          border-color: #e5e7eb;
          color: #374151;
        }

        .btn-reject:hover,
        .btn-custom:hover {
          background: #f9fafb;
        }

        .cookie-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
          width: 90%;
          max-width: 600px;
        }

        .cookie-modal-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .cookie-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #9ca3af;
          padding: 0.5rem;
          line-height: 1;
        }

        .cookie-modal h2 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem 0;
        }

        .cookie-modal > p {
          color: #6b7280;
          margin: 0 0 1.5rem 0;
        }

        .cookie-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .cookie-option {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
        }

        .cookie-option-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .cookie-option-header input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        .cookie-option-header input[type="checkbox"]:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .cookie-option-header label {
          cursor: pointer;
          margin: 0;
        }

        .cookie-option-desc {
          margin: 0;
          color: #6b7280;
          font-size: 0.875rem;
          padding-left: 2rem;
        }

        .cookie-modal-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .cookie-learn-more {
          color: #54c4e8;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .cookie-learn-more:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .cookie-banner {
            bottom: 0;
            right: 0;
            left: 0;
            max-width: none;
            border-radius: 12px 12px 0 0;
            padding: 0.875rem;
          }

          .cookie-text strong {
            font-size: 0.9rem;
          }

          .cookie-text span {
            font-size: 0.75rem;
          }

          .btn-cookie {
            font-size: 0.75rem;
            padding: 0.5rem;
          }

          .cookie-actions {
            flex-direction: column;
          }

          .cookie-modal {
            width: 95%;
          }

          .cookie-modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
