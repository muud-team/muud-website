"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

interface ContactFormProps {
  variant?: "schools" | "business" | "general";
}

export default function ContactForm({ variant = "general" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('contact.form');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  // Get variant-specific translations
  const secondFieldLabel = variant === "schools"
    ? t('orgLabelSchool')
    : variant === "business"
    ? t('orgLabel')
    : t('orgLabelGeneral');

  const secondFieldPlaceholder = variant === "schools"
    ? t('orgPlaceholderSchool')
    : t('orgPlaceholder');

  const emailPlaceholder = variant === "schools"
    ? t('emailPlaceholderSchool')
    : t('emailPlaceholder');

  const messagePlaceholder = variant === "schools"
    ? t('messagePlaceholderSchool')
    : t('messagePlaceholder');

  // Get roles based on variant
  const roles = variant === "schools"
    ? t.raw('rolesSchool')
    : variant === "business"
    ? t.raw('rolesBusiness')
    : t.raw('rolesGeneral');

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {!submitted ? (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">{t('nameLabel')}</label>
              <input id="nombre" name="nombre" placeholder={t('namePlaceholder')} required />
            </div>
            <div className="field">
              <label htmlFor="org">{secondFieldLabel}</label>
              <input id="org" name="org" placeholder={secondFieldPlaceholder} required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="email">{t('emailLabel')}</label>
              <input id="email" name="email" type="email" placeholder={emailPlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="rol">{t('roleLabel')}</label>
              <select id="rol" name="rol">
                {roles.map((r: string) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="msg">{t('messageLabel')}</label>
            <textarea id="msg" name="msg" rows={3} placeholder={messagePlaceholder} />
          </div>
          <button type="submit" className="btn btn-primary">{t('submitButton')}</button>
          <p className="form-note">{t('note')}</p>
        </>
      ) : (
        <div className="form-ok show">
          <div className="big">{t('successEmoji')}</div>
          <strong>{t('successTitle')}</strong>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 6 }}>
            {t('successMessage')}
          </p>
        </div>
      )}
    </form>
  );
}
