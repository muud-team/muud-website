import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { NewsSection, NewsletterSection } from "@/components/SharedSections";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.business' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/empresas",
    },
    alternates: { canonical: "/empresas" },
  };
}

const CHECK_SVG = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M5 12l4 4 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function StarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="var(--coral)"
      />
    </svg>
  );
}

export default function EmpresasPage() {
  const t = useTranslations('business');
  const tNav = useTranslations('business.navLinks');

  const NAV_LINKS = [
    { href: "#solucion", label: tNav('solution') },
    { href: "#roles", label: tNav('roles') },
    { href: "#faq", label: tNav('faq') },
    { href: "#contacto", label: tNav('contact') },
  ];

  const problems = t.raw('problems.items');
  const employeeFeatures = t.raw('solution.collaborators.features');
  const leaderFeatures = t.raw('solution.leaders.features');
  const roles = t.raw('roles.items');
  const steps = t.raw('implementation.steps');
  const stats = t.raw('stats.items');
  const faqItems = t.raw('faq.items');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MUUD",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description: "MUUD ayuda a las empresas a cuidar el bienestar emocional de sus equipos con inteligencia artificial.",
    url: "https://muud.app/empresas",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: "MUUD SpA",
      url: "https://muud.app",
    },
  };

  const renderWithHighlight = (text: string) => {
    return text
      .replace(/<highlight>/g, '<span class="hl">')
      .replace(/<\/highlight>/g, '</span>');
  };

  const renderWithStrong = (text: string) => {
    const html = text
      .replace(/<strong>/g, '<strong>')
      .replace(/<\/strong>/g, '</strong>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav activePage="empresas" sectionLinks={NAV_LINKS} />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">{t('hero.eyebrow')}</span>
              <h1 className="reveal" data-d="1" dangerouslySetInnerHTML={{ __html: renderWithHighlight(t.raw('hero.title') as string) }} />
              <p className="hero-lede reveal" data-d="2">
                {t('hero.subtitle')}
              </p>
              <div className="hero-cta reveal" data-d="3">
                <a href="https://calendar.app.google/eM6oThKNK9euEWmg7" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {t('hero.scheduleDemo')}
                </a>
                <a href="#solucion" className="btn btn-ghost">{t('hero.seeHowItWorks')}</a>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span className="stars">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </span>
                {t('hero.trustBadge')}
              </div>
            </div>
            <div className="hero-visual reveal" data-d="2">
              <div className="hero-blob" />
              <Image
                className="hero-phone"
                src="/tablet_preview_es.webp"
                alt={t('hero.phoneAlt')}
                width={480}
                height={640}
                priority
              />
              <div className="float f-emoji1">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b0c3b9fe43db2692351_emoji-1.png" alt="" width={88} height={88} />
              </div>
              <div className="float f-emoji2">
                <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b3f57ea33947ec4d65e_emoji-2.png" alt="" width={74} height={74} />
              </div>
              <Image className="float f-star f-s1" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620bc_White-Star.svg" alt="" width={26} height={26} />
              <Image className="float f-star f-s2" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620bc_White-Star.svg" alt="" width={20} height={20} />
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="desafio" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('problems.eyebrow')}</span>
              <h2>{t('problems.title')}</h2>
              <p>{t('problems.subtitle')}</p>
            </div>
            <div className="prob-grid">
              {problems.map((p: any, i: number) => (
                <article key={p.number} className="prob-card reveal" data-d={String(i + 1)}>
                  <span className="num">{p.number}</span>
                  <Image
                    className="prob-face"
                    src={`https://cdn.prod.website-files.com/64836681fe716f7bceb62090/${
                      i === 0 ? '648b410d0dd822359603da79_Flushed%20Face.png' :
                      i === 1 ? '648b40eeb63c52812b77e9ad_Angry%20Face.png' :
                      i === 2 ? '648b40e4b4ce483ba43c9dac_Pensive%20Face.png' :
                      '648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png'
                    }`}
                    alt={p.title}
                    width={62}
                    height={62}
                  />
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SPLIT 1 */}
        <section id="solucion" className="sec sec-paper">
          <div className="wrap">
            <div className="split">
              <div className="split-media reveal">
                <div className="split-ring" />
                <Image
                  className="split-phone"
                  src="/tablet_preview_es.webp"
                  alt={t('solution.collaborators.imageAlt')}
                  width={450}
                  height={600}
                />
                <div className="float f-emoji2" style={{ left: "auto", right: "-2%", bottom: "8%" }}>
                  <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b0c3b9fe43db2692351_emoji-1.png" alt="" width={74} height={74} />
                </div>
              </div>
              <div className="split-copy reveal" data-d="1">
                <span className="eyebrow">{t('solution.collaborators.eyebrow')}</span>
                <h2>{t('solution.collaborators.title')}</h2>
                <p>{t('solution.collaborators.description')}</p>
                <ul className="split-list">
                  {employeeFeatures.map((f: any, i: number) => (
                    <li key={i}>
                      <span className="ck">{CHECK_SVG}</span>
                      <div>{renderWithStrong(`<strong>${f.title}</strong> ${f.description}`)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SPLIT 2 (ink) */}
        <section className="sec sec-ink">
          <div className="wrap">
            <div className="split rev">
              <div className="split-media reveal">
                <div className="dash" style={{ marginTop: 0 }}>
                  <div className="dash-top">
                    <span className="dash-dot" style={{ background: "#FF6058" }} />
                    <span className="dash-dot" style={{ background: "#FEBC2E" }} />
                    <span className="dash-dot" style={{ background: "#28C840" }} />
                    <span className="dash-title">{t('solution.leaders.dashboard.title')}</span>
                  </div>
                  <div className="dash-body">
                    <div className="metric">
                      <div className="lab">{t('solution.leaders.dashboard.participation')}</div>
                      <div className="val" style={{ color: "var(--blue)" }}>{t('solution.leaders.dashboard.participationValue')}</div>
                      <div className="bar"><i style={{ width: "87%", background: "var(--blue)" }} /></div>
                    </div>
                    <div className="metric">
                      <div className="lab">{t('solution.leaders.dashboard.climate')}</div>
                      <div className="val" style={{ color: "#1F9D6B" }}>{t('solution.leaders.dashboard.climateValue')}</div>
                      <div className="bar"><i style={{ width: "78%", background: "#1F9D6B" }} /></div>
                    </div>
                    <div className="metric">
                      <div className="lab">{t('solution.leaders.dashboard.mood')}</div>
                      <div className="val" style={{ color: "#6B5AD0" }}>{t('solution.leaders.dashboard.moodValue')}</div>
                      <div className="bar"><i style={{ width: "78%", background: "#8E7DE8" }} /></div>
                    </div>
                    <div className="metric alert">
                      <div className="lab" style={{ color: "var(--coral-deep)" }}>{t('solution.leaders.dashboard.areas')}</div>
                      <div className="val" style={{ color: "var(--coral-deep)" }}>{t('solution.leaders.dashboard.areasValue')}</div>
                      <div className="bar"><i style={{ width: "25%", background: "var(--coral)" }} /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="split-copy reveal" data-d="1">
                <span className="eyebrow">{t('solution.leaders.eyebrow')}</span>
                <h2>{t('solution.leaders.title')}</h2>
                <p>{renderWithStrong(t.raw('solution.leaders.description') as string)}</p>
                <ul className="split-list">
                  {leaderFeatures.map((f: any, i: number) => (
                    <li key={i}>
                      <span className="ck">{CHECK_SVG}</span>
                      <div>{renderWithStrong(`<strong>${f.title}</strong> ${f.description}`)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">{t('roles.eyebrow')}</span>
              <h2>{t('roles.title')}</h2>
              <p>{t('roles.subtitle')}</p>
            </div>
            <div className="role-grid">
              {roles.map((r: any, i: number) => (
                <article key={i} className="role-card reveal" data-d={String(i + 1)}>
                  <div className="role-ico" style={{
                    background: i === 0 ? "linear-gradient(135deg,var(--sky),var(--blue))" :
                                i === 1 ? "linear-gradient(135deg,var(--coral),var(--coral-deep))" :
                                "linear-gradient(135deg,var(--lilac),#8E7DE8)"
                  }}>
                    {i === 0 && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21s-7-4.35-9.3-8.5C1 9 2.5 5.5 6 5.5c2 0 3.2 1.1 4 2.3.8-1.2 2-2.3 4-2.3 3.5 0 5 3.5 3.3 7C19 16.65 12 21 12 21z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M4 19c0-3.3 3.6-5 8-5s8 1.7 8 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="8" r="3.4" stroke="#fff" strokeWidth="2" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M5 19V9M12 19V5M19 19v-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M3 19h18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <div className="role-tag">{r.tag}</div>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('implementation.eyebrow')}</span>
              <h2>{t('implementation.title')}</h2>
              <p>{t('implementation.subtitle')}</p>
            </div>
            <div className="steps">
              {steps.map((s: any, i: number) => (
                <div key={i} className="step-item reveal" data-d={String(i + 1)}>
                  <div className="step-n">{s.number}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sec sec-ink">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('stats.eyebrow')}</span>
              <h2>{t('stats.title')}</h2>
              <p>{t('stats.subtitle')}</p>
            </div>
            <div className="stat-grid">
              {stats.map((s: any, i: number) => (
                <div key={i} className="stat reveal" data-d={String(i + 1)}>
                  <div className="big">{s.value}</div>
                  <div className="lab">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="stat-foot reveal">{t('stats.disclaimer')}</p>
          </div>
        </section>

        {/* BIG QUOTE */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="bigquote reveal">
              <p className="q">
                &ldquo;{t('quote.text')}&rdquo;
              </p>
              <div className="by">
                <Image
                  src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bbb3fa58727d47c3b42_character-muud.png"
                  alt={t('quote.imageAlt')}
                  width={54}
                  height={54}
                  style={{ objectFit: "contain", background: "rgba(84,196,232,.15)" }}
                />
                <div style={{ textAlign: "left" }}>
                  <div className="name">{t('quote.author')}</div>
                  <div className="role">{t('quote.role')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">{t('faq.eyebrow')}</span>
              <h2>{t('faq.title')}</h2>
            </div>
            <div className="faq">
              {faqItems.map((item: any, i: number) => (
                <details key={i} className="reveal">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="contacto" className="sec sec-cream cta">
          <div className="wrap">
            <div className="cta-card reveal">
              <div className="cta-blob" />
              <div className="cta-copy">
                <span className="eyebrow" style={{ color: "var(--coral)" }}>{t('cta.eyebrow')}</span>
                <h2>{t('cta.title')}</h2>
                <p className="lede">{t('cta.subtitle')}</p>
                <div className="cta-stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt={t('cta.downloadAppStore')} width={140} height={50} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt={t('cta.downloadPlayStore')} width={140} height={50} />
                  </a>
                </div>
              </div>
              <ContactForm variant="business" />
            </div>
          </div>
        </section>

        <NewsSection />
        <NewsletterSection />
      </main>

      <Footer variant="empresas" />
    </>
  );
}
