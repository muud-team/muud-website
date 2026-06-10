"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  secondFieldLabel?: string;
  secondFieldPlaceholder?: string;
  emailPlaceholder?: string;
  roles?: string[];
  messagePlaceholder?: string;
}

export default function ContactForm({
  secondFieldLabel = "Empresa",
  secondFieldPlaceholder = "Nombre de la empresa",
  emailPlaceholder = "tucorreo@empresa.com",
  roles = ["Recursos Humanos", "Líder / Jefatura", "Gerencia", "Colaborador/a"],
  messagePlaceholder = "Quiero una demo para mi equipo…",
}: ContactFormProps) {
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
    <form className="form" onSubmit={handleSubmit} noValidate>
      {!submitted ? (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="field">
              <label htmlFor="org">{secondFieldLabel}</label>
              <input id="org" name="org" placeholder={secondFieldPlaceholder} required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder={emailPlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="rol">Rol</label>
              <select id="rol" name="rol">
                {roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="msg">Cuéntanos qué necesitas</label>
            <textarea id="msg" name="msg" rows={3} placeholder={messagePlaceholder} />
          </div>
          <button type="submit" className="btn btn-primary">Agendar demo gratuita</button>
          <p className="form-note">Te responderemos dentro de 24 horas hábiles.</p>
        </>
      ) : (
        <div className="form-ok show">
          <div className="big">🎉</div>
          <strong>¡Gracias!</strong>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 6 }}>
            Recibimos tu solicitud. Te contactaremos muy pronto.
          </p>
        </div>
      )}
    </form>
  );
}
