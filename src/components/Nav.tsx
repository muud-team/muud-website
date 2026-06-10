"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  activePage?: "colegios" | "empresas" | null;
  sectionLinks?: NavLink[];
  mobileLinks?: NavLink[];
}

export default function Nav({
  activePage = null,
  sectionLinks = [],
  mobileLinks,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const trigger = loginRef.current?.querySelector(".login-trigger");
    function toggle(e: Event) {
      e.stopPropagation();
      setLoginOpen((o) => !o);
    }
    function close(e: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    }
    trigger?.addEventListener("click", toggle);
    document.addEventListener("click", close);
    return () => {
      trigger?.removeEventListener("click", toggle);
      document.removeEventListener("click", close);
    };
  }, []);

  const mobile = mobileLinks ?? sectionLinks;

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <Link href="/">
            <Image
              className="nav-logo"
              src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b48a7eea9e32297b833ff_Copia%20de%20Logo%20Final%20Muud%20(1).png"
              alt="MUUD"
              width={120}
              height={38}
              priority
            />
          </Link>
          <div className="seg">
            <Link href="/colegios" className={activePage === "colegios" ? "active" : ""}>Colegios</Link>
            <Link href="/empresas" className={activePage === "empresas" ? "active" : ""}>Empresas</Link>
          </div>
          <nav className="nav-links">
            {sectionLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <div
              ref={loginRef}
              className={`login${loginOpen ? " open" : ""}`}
            >
              <button
                className="login-trigger"
                aria-haspopup="true"
                aria-expanded={loginOpen}
              >
                Iniciar sesión
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="login-menu" role="menu">
                <a href="https://school.muud.app/welcome" role="menuitem">
                  <span className="lm-ico" style={{ background: "rgba(84,196,232,.16)" }}>🏫</span>
                  <span>Colegio<small>Plataforma para instituciones</small></span>
                </a>
                <a href="https://business.muud.app" role="menuitem">
                  <span className="lm-ico" style={{ background: "rgba(249,139,107,.16)" }}>💼</span>
                  <span>Empresa<small>Bienestar para equipos</small></span>
                </a>
              </div>
            </div>
            <a href="#contacto" className="btn btn-primary" style={{ padding: "12px 22px" }}>
              Agendar demo
            </a>
            <button
              className="nav-burger"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mm-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <nav className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <button className="mm-close" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}>✕</button>
        {mobile.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
        {activePage !== "colegios" && (
          <Link href="/colegios" onClick={() => setMobileOpen(false)}>Para colegios</Link>
        )}
        {activePage !== "empresas" && (
          <Link href="/empresas" onClick={() => setMobileOpen(false)}>Para empresas</Link>
        )}
        <div className="mm-login">
          <span className="mm-login-label">Iniciar sesión</span>
          <a href="https://school.muud.app/welcome" className="btn btn-ghost" onClick={() => setMobileOpen(false)}>
            🏫 Colegio
          </a>
          <a href="https://business.muud.app" className="btn btn-ghost" onClick={() => setMobileOpen(false)}>
            💼 Empresa
          </a>
        </div>
        <a className="btn btn-primary" href="#contacto" onClick={() => setMobileOpen(false)}>
          Agendar demo
        </a>
      </nav>
    </>
  );
}
