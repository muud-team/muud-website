"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const API_BASE = "https://back.muud.app/api";

interface ContactFormProps {
  variant?: "schools" | "business" | "general";
}

type FieldName = "nombre" | "org" | "email";
type FieldErrors = Partial<Record<FieldName, string>>;

const REQUIRED_FIELDS: FieldName[] = ["nombre", "org", "email"];

export default function ContactForm({ variant = "general" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const successRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("contact.form");
  const locale = useLocale();

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function validate(form: HTMLFormElement): FieldErrors {
    const errors: FieldErrors = {};
    for (const name of REQUIRED_FIELDS) {
      const input = form.elements.namedItem(name) as HTMLInputElement;
      if (!input.value.trim()) errors[name] = t("errorRequired");
      else if (input.validity.typeMismatch) errors[name] = t("errorEmail");
    }
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;

    const errors = validate(form);
    setFieldErrors(errors);
    const firstInvalid = REQUIRED_FIELDS.find((name) => errors[name]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLInputElement).focus();
      return;
    }

    setLoading(true);
    setError(null);

    const data = new FormData(form);
    const body = {
      name: data.get("nombre") as string,
      organization: data.get("org") as string,
      email: data.get("email") as string,
      role: data.get("rol") as string,
      message: data.get("msg") as string,
      variant,
      locale,
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch {
      // Never surface server or network detail to the visitor.
      setError(t("errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  function clearFieldError(name: FieldName) {
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  const fieldProps = (name: FieldName) => ({
    id: name,
    name,
    required: true,
    "aria-invalid": fieldErrors[name] ? true : undefined,
    "aria-describedby": fieldErrors[name] ? `${name}-error` : undefined,
    onInput: () => clearFieldError(name),
  });

  const fieldError = (name: FieldName) =>
    fieldErrors[name] ? <p id={`${name}-error`} className="field-error">{fieldErrors[name]}</p> : null;

  const requiredMark = <span aria-hidden="true"> *</span>;

  const secondFieldLabel = variant === "schools"
    ? t("orgLabelSchool")
    : variant === "business"
    ? t("orgLabel")
    : t("orgLabelGeneral");

  const secondFieldPlaceholder = variant === "schools"
    ? t("orgPlaceholderSchool")
    : t("orgPlaceholder");

  const emailPlaceholder = variant === "schools"
    ? t("emailPlaceholderSchool")
    : t("emailPlaceholder");

  const messagePlaceholder = variant === "schools"
    ? t("messagePlaceholderSchool")
    : t("messagePlaceholder");

  const roles = variant === "schools"
    ? t.raw("rolesSchool")
    : variant === "business"
    ? t.raw("rolesBusiness")
    : t.raw("rolesGeneral");

  if (submitted) {
    return (
      <div className="form">
        <div className="form-ok show" role="status" tabIndex={-1} ref={successRef}>
          <div className="big" aria-hidden="true">{t("successEmoji")}</div>
          <strong>{t("successTitle")}</strong>
          <p style={{ color: "rgba(255,255,255,.8)", marginTop: 6 }}>{t("successMessage")}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <p className="form-required">{t("requiredNote")}</p>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nombre">{t("nameLabel")}{requiredMark}</label>
          <input {...fieldProps("nombre")} autoComplete="name" placeholder={t("namePlaceholder")} />
          {fieldError("nombre")}
        </div>
        <div className="field">
          <label htmlFor="org">{secondFieldLabel}{requiredMark}</label>
          <input {...fieldProps("org")} autoComplete="organization" placeholder={secondFieldPlaceholder} />
          {fieldError("org")}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">{t("emailLabel")}{requiredMark}</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" placeholder={emailPlaceholder} />
          {fieldError("email")}
        </div>
        <div className="field">
          <label htmlFor="rol">{t("roleLabel")}</label>
          <select id="rol" name="rol" autoComplete="organization-title">
            {roles.map((r: string) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="msg">{t("messageLabel")}</label>
        <textarea id="msg" name="msg" rows={3} placeholder={messagePlaceholder} aria-describedby="msg-note" />
        <p id="msg-note" className="field-note">{t("healthNote")}</p>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-primary" aria-disabled={loading}>
        {loading ? t("submitting") : t("submitButton")}
      </button>
      <p className="sr-only" role="status">{loading ? t("submitting") : ""}</p>
      <p className="form-note">{t("note")}</p>
      <p className="form-note">
        {t.rich("privacyNote", {
          link: (chunks) => <Link href="/politica-de-privacidad">{chunks}</Link>,
        })}
      </p>
    </form>
  );
}
