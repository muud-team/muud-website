"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import NewTabHint from "./NewTabHint";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  activePage?: "colegios" | "empresas" | null;
  sectionLinks?: NavLink[];
  mobileLinks?: NavLink[];
}

const DEMO_URL = "https://calendar.app.google/eM6oThKNK9euEWmg7";

export default function Nav({
  activePage = null,
  sectionLinks = [],
  mobileLinks,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const loginTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDialogElement>(null);

  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!loginOpen) return;
    function closeOnOutsideClick(e: MouseEvent) {
      if (!loginRef.current?.contains(e.target as Node)) setLoginOpen(false);
    }
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [loginOpen]);

  function onLoginKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape" && loginOpen) {
      setLoginOpen(false);
      loginTriggerRef.current?.focus();
    }
  }

  function onLoginBlur(e: FocusEvent) {
    // relatedTarget is null when focus leaves the window; keep the menu open then.
    if (e.relatedTarget && !loginRef.current?.contains(e.relatedTarget as Node)) {
      setLoginOpen(false);
    }
  }

  // showModal() provides the focus trap, Escape, inert background and focus
  // restoration on close, all natively.
  function openMobileMenu() {
    mobileMenuRef.current?.showModal();
    setMobileOpen(true);
  }

  function closeMobileMenu() {
    mobileMenuRef.current?.close();
  }

  const mobile = mobileLinks ?? sectionLinks;

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/" aria-label={t("home")}>
            <Image
              className="nav-logo"
              src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b48a7eea9e32297b833ff_Copia%20de%20Logo%20Final%20Muud%20(1).png"
              alt=""
              width={120}
              height={38}
              priority
            />
          </Link>
          <nav className="seg" aria-label={t("solutionsNav")}>
            <Link href="/colegios" className={activePage === "colegios" ? "active" : ""} aria-current={activePage === "colegios" ? "page" : undefined}>{t("schools")}</Link>
            <Link href="/empresas" className={activePage === "empresas" ? "active" : ""} aria-current={activePage === "empresas" ? "page" : undefined}>{t("business")}</Link>
          </nav>
          {sectionLinks.length > 0 && (
            <nav className="nav-links" aria-label={t("sectionsNav")}>
              {sectionLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>
          )}
          <div className="nav-actions">
            <div
              ref={loginRef}
              className={`login${loginOpen ? " open" : ""}`}
              onKeyDown={onLoginKeyDown}
              onBlur={onLoginBlur}
            >
              <button
                ref={loginTriggerRef}
                type="button"
                className="login-trigger"
                aria-expanded={loginOpen}
                aria-controls="login-menu"
                onClick={() => setLoginOpen((o) => !o)}
              >
                {t("login")}
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="login-menu" id="login-menu">
                <a href="https://school.muud.app/welcome">
                  <span className="lm-ico" aria-hidden="true" style={{ background: "rgba(84,196,232,.16)" }}>🏫</span>
                  <span>{t("loginSchool")}<small>{t("loginSchoolDescription")}</small></span>
                </a>
                <a href="https://business.muud.app">
                  <span className="lm-ico" aria-hidden="true" style={{ background: "rgba(249,139,107,.16)" }}>💼</span>
                  <span>{t("loginBusiness")}<small>{t("loginBusinessDescription")}</small></span>
                </a>
              </div>
            </div>
            <a href={DEMO_URL} className="btn btn-primary nav-demo" target="_blank" rel="noopener noreferrer">
              {t("scheduleDemo")}
              <NewTabHint />
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label={t("openMenu")}
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={openMobileMenu}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={mobileMenuRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-label={t("menuLabel")}
        onClose={() => setMobileOpen(false)}
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) closeMobileMenu();
        }}
      >
        <div className="mobile-menu-inner">
          <button type="button" className="mm-close" aria-label={t("closeMenu")} onClick={closeMobileMenu}>
            <span aria-hidden="true">✕</span>
          </button>
          <nav aria-label={t("menuLabel")} className="mm-links">
            {mobile.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMobileMenu}>{l.label}</a>
            ))}
            {activePage !== "colegios" && (
              <Link href="/colegios" onClick={closeMobileMenu}>{t("forSchools")}</Link>
            )}
            {activePage !== "empresas" && (
              <Link href="/empresas" onClick={closeMobileMenu}>{t("forBusiness")}</Link>
            )}
          </nav>
          <div className="mm-login">
            <span className="mm-login-label">{t("login")}</span>
            <a href="https://school.muud.app/welcome" className="btn btn-ghost" onClick={closeMobileMenu}>
              <span aria-hidden="true">🏫</span> {t("loginSchool")}
            </a>
            <a href="https://business.muud.app" className="btn btn-ghost" onClick={closeMobileMenu}>
              <span aria-hidden="true">💼</span> {t("loginBusiness")}
            </a>
          </div>
          <a className="btn btn-primary" href={DEMO_URL} onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">
            {t("scheduleDemo")}
            <NewTabHint />
          </a>
        </div>
      </dialog>
    </>
  );
}
