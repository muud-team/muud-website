"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from 'next-intl';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('newsletter.form');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="nl-form-wrap reveal" data-d="1">
      <form className="nl-form" onSubmit={handleSubmit} noValidate>
        {!submitted && (
          <>
            <input type="email" placeholder={t('placeholder')} required aria-label={t('ariaLabel')} />
            <button type="submit" className="btn btn-primary">{t('submitButton')}</button>
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
