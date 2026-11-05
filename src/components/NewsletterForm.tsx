"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";

const API_BASE = "https://back.muud.app/api";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("newsletter.form");
  const locale = useLocale();
  const inputId = useId();
  const noteId = useId();
  const errorId = useId();

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;

    if (!input.value.trim() || input.validity.typeMismatch) {
      setFieldError(input.value.trim() ? t("errorEmail") : t("errorRequired"));
      input.focus();
      return;
    }

    setFieldError(null);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({ email: input.value, locale }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="nl-form-wrap reveal" data-d="1">
      {submitted ? (
        <p className="nl-ok show" role="status" tabIndex={-1} ref={successRef}>{t("successMessage")}</p>
      ) : (
        <form className="nl-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor={inputId} className="nl-label">{t("ariaLabel")}</label>
          <input
            id={inputId}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t("placeholder")}
            required
            aria-invalid={fieldError ? true : undefined}
            aria-describedby={fieldError ? `${errorId} ${noteId}` : noteId}
            onInput={() => setFieldError(null)}
          />
          <button type="submit" className="btn btn-primary" aria-disabled={loading}>
            {loading ? t("submitting") : t("submitButton")}
          </button>
          {fieldError && <p id={errorId} className="field-error nl-message">{fieldError}</p>}
          {error && <p className="form-error nl-message" role="alert">{error}</p>}
          <p className="sr-only" role="status">{loading ? t("submitting") : ""}</p>
        </form>
      )}
      <p className="nl-note" id={noteId}>{t("disclaimer")}</p>
    </div>
  );
}
