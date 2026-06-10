"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

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
            <input type="email" placeholder="tucorreo@ejemplo.com" required aria-label="Tu correo" />
            <button type="submit" className="btn btn-primary">Suscribirme</button>
          </>
        )}
        {submitted && (
          <span className="nl-ok show">¡Listo! Te suscribiste a nuestro newsletter 🎉</span>
        )}
      </form>
      <p className="nl-note">Sin spam. Puedes darte de baja cuando quieras.</p>
    </div>
  );
}
