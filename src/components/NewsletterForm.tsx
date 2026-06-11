"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const API_BASE = "https://back.muud.app/api";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('newsletter.form');
  const locale = useLocale();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError(null);

    const data = new FormData(form);
    const body = {
      email: data.get("email") as string,
      locale,
    };

    try {
      const res = await fetch(`${API_BASE}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.message || `Error ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorGeneric'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="nl-form-wrap reveal" data-d="1">
      <form className="nl-form" onSubmit={handleSubmit} noValidate>
        {!submitted && (
          <>
            <input type="email" name="email" placeholder={t('placeholder')} required aria-label={t('ariaLabel')} />
            {error && <span className="nl-error" style={{ color: "#ff6b6b", fontSize: "0.85rem" }}>{error}</span>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? t('submitting') : t('submitButton')}
            </button>
          </>
        )}
        {submitted && (
          <span className="nl-ok show">{t('successMessage')}</span>
        )}
      </form>
      <p className="nl-note">{t('disclaimer')}</p>
    </div>
  );
}
