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
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/",
    },
    alternates: { canonical: "/" },
  };
}

function StarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="var(--coral)" />
    </svg>
  );
}

function renderWithHighlight(text: string) {
  return text.replace(/<highlight>/g, '<span class="hl">').replace(/<\/highlight>/g, '</span>');
}

function renderWithStrong(text: string) {
  return text.replace(/<strong>/g, '<strong>').replace(/<\/strong>/g, '</strong>');
}

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('home.navLinks');

  const NAV_LINKS = [
    { href: "#que-es", label: tNav('whatIs') },
    { href: "#como-funciona", label: tNav('howItWorks') },
    { href: "#testimonios", label: tNav('testimonials') },
    { href: "#contacto", label: tNav('contact') },
  ];

  const problems = [
    {
      num: "01",
      emoji: "648b40e4b4ce483ba43c9dac_Pensive%20Face.png",
      title: t('problems.items.0.title'),
      desc: t('problems.items.0.description'),
    },
    {
      num: "02",
      emoji: "648b40eeb63c52812b77e9ad_Angry%20Face.png",
      title: t('problems.items.1.title'),
      desc: t('problems.items.1.description'),
    },
    {
      num: "03",
      emoji: "648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png",
      title: t('problems.items.2.title'),
      desc: t('problems.items.2.description'),
    },
    {
      num: "04",
      emoji: "648b410d0dd822359603da79_Flushed%20Face.png",
      title: t('problems.items.3.title'),
      desc: t('problems.items.3.description'),
    },
  ];

  const features = [
    {
      step: "01",
      icon: "heart",
      tag: t('howItWorks.steps.0.tag'),
      tagBg: "rgba(84,196,232,.14)",
      tagColor: "var(--blue)",
      grad: "var(--sky),var(--blue)",
      title: t('howItWorks.steps.0.title'),
      desc: t('howItWorks.steps.0.description'),
    },
    {
      step: "02",
      icon: "journal",
      tag: t('howItWorks.steps.1.tag'),
      tagBg: "rgba(200,192,242,.22)",
      tagColor: "#6B5AD0",
      grad: "var(--lilac),#8E7DE8",
      title: t('howItWorks.steps.1.title'),
      desc: t('howItWorks.steps.1.description'),
    },
    {
      step: "03",
      icon: "chart",
      tag: t('howItWorks.steps.2.tag'),
      tagBg: "rgba(249,139,107,.16)",
      tagColor: "var(--coral-deep)",
      grad: "var(--coral),var(--coral-deep)",
      title: t('howItWorks.steps.2.title'),
      desc: t('howItWorks.steps.2.description'),
    },
    {
      step: "04",
      icon: "bell",
      tag: t('howItWorks.steps.3.tag'),
      tagBg: "rgba(246,180,76,.18)",
      tagColor: "#C98A1E",
      grad: "#F6B44C,var(--coral)",
      title: t('howItWorks.steps.3.title'),
      desc: t('howItWorks.steps.3.description'),
    },
  ];

  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      img: "/avatar_antonella.jpg",
    },
    {
      quote: t('testimonials.items.1.quote'),
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      img: "/avatar_paulo.jpg",
    },
    {
      quote: t('testimonials.items.2.quote'),
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      img: "/avatar_natalia.jpg",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MUUD",
    url: "https://muud.app",
    description: "Bienestar socioemocional con inteligencia artificial para colegios y empresas.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Presidente Kennedy 5600, Of. 507",
      addressLocality: "Vitacura",
      addressCountry: "CL",
    },
    sameAs: [
      "https://www.instagram.com/muud.app/",
      "https://www.linkedin.com/company/muud-app/",
      "https://www.facebook.com/muud.app.latam",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav sectionLinks={NAV_LINKS} />

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
                <div className="stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" aria-label={t('hero.downloadAppStore')}>
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt="App Store" width={140} height={50} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" aria-label={t('hero.downloadPlayStore')}>
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt="Google Play" width={140} height={50} />
                  </a>
                </div>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span className="stars">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</span>
                {t('hero.trustBadge')}
              </div>
            </div>
            <div className="hero-visual reveal" data-d="2">
              <div className="hero-blob" />
              <Image className="hero-phone" src="/tablet_preview_es.webp" alt={t('hero.phoneAlt')} width={480} height={640} priority />
              <div className="float f-emoji1"><Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b0c3b9fe43db2692351_emoji-1.png" alt="" width={88} height={88} /></div>
              <div className="float f-emoji2"><Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b3f57ea33947ec4d65e_emoji-2.png" alt="" width={74} height={74} /></div>
              <Image className="float f-star f-s1" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620bc_White-Star.svg" alt="" width={26} height={26} />
              <Image className="float f-star f-s2" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620bc_White-Star.svg" alt="" width={20} height={20} />
            </div>
          </div>
        </section>

        {/* CONTEXT STRIP */}
        <section className="context">
          <div className="wrap">
            <div className="context-card reveal">
              <Image className="star-bg" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b3_Star%201.svg" alt="" width={160} height={160} />
              <p>{t('context.text')}</p>
              <div className="ctx-media">
                <Image className="ctx-emoji" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bac38164fd8fc55ed9e_emoji-4.png" alt="" width={120} height={120} />
                <Image className="ctx-muudy" src="/muudy.png" alt="Muudy" width={300} height={300} />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('problems.eyebrow')}</span>
              <h2>{t('problems.title')}</h2>
              <p>{t('problems.subtitle')}</p>
            </div>
            <div className="prob-grid">
              {problems.map((p, i) => (
                <article key={p.num} className="prob-card reveal" data-d={String(i + 1)}>
                  <span className="num">{p.num}</span>
                  <Image className="prob-face" src={`https://cdn.prod.website-files.com/64836681fe716f7bceb62090/${p.emoji}`} alt={p.title} width={62} height={62} />
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS MUUD */}
        <section id="que-es" className="sec sec-ink">
          <div className="wrap about-grid">
            <div className="about-visual reveal">
              <div className="about-ring" />
              <Image className="about-char" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bbb3fa58727d47c3b42_character-muud.png" alt={t('about.characterAlt')} width={300} height={300} />
            </div>
            <div className="about-copy reveal" data-d="1">
              <span className="eyebrow">{t('about.eyebrow')}</span>
              <h2>{t('about.title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: renderWithStrong(t.raw('about.paragraphs.0') as string) }} />
              <p>{t('about.paragraphs.1')}</p>
              <div className="about-pills">
                <span className="pill"><span className="dot" style={{ background: "var(--sky)" }} />{t('about.pills.0')}</span>
                <span className="pill"><span className="dot" style={{ background: "var(--coral)" }} />{t('about.pills.1')}</span>
                <span className="pill"><span className="dot" style={{ background: "var(--lilac)" }} />{t('about.pills.2')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como-funciona" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('howItWorks.eyebrow')}</span>
              <h2>{t('howItWorks.title')}</h2>
              <p>{t('howItWorks.subtitle')}</p>
            </div>
            <div className="feat-grid">
              {features.map((f, i) => (
                <div key={i} className="feat-card reveal" data-d={String((i % 2) + 1)}>
                  <span className="step">{f.step}</span>
                  <div className="feat-ico" style={{ background: `linear-gradient(135deg,${f.grad})` }}>
                    {f.icon === "heart" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.35-9.3-8.5C1 9 2.5 5.5 6 5.5c2 0 3.2 1.1 4 2.3.8-1.2 2-2.3 4-2.3 3.5 0 5 3.5 3.3 7C19 16.65 12 21 12 21z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>}
                    {f.icon === "journal" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 4h11l3 3v13H5z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="M8.5 9.5h7M8.5 13h7M8.5 16.5h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>}
                    {f.icon === "chart" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 19V9M12 19V5M19 19v-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" /><path d="M3 19h18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" /></svg>}
                    {f.icon === "bell" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 4a5 5 0 0 0-5 5c0 4-2 5-2 7h14c0-2-2-3-2-7a5 5 0 0 0-5-5z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="M10 20a2 2 0 0 0 4 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>}
                  </div>
                  <span className="feat-tag" style={{ background: f.tagBg, color: f.tagColor }}>{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Dashboard mock */}
            <div className="dash reveal" data-d="2">
              <div className="dash-top">
                <span className="dash-dot" style={{ background: "#FF6058" }} />
                <span className="dash-dot" style={{ background: "#FEBC2E" }} />
                <span className="dash-dot" style={{ background: "#28C840" }} />
                <span className="dash-title">{t('howItWorks.dashboard.title')}</span>
              </div>
              <div className="dash-body" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
                <div className="metric">
                  <div className="lab">{t('howItWorks.dashboard.metrics.checkins')}</div>
                  <div className="val" style={{ color: "var(--blue)" }}>{t('howItWorks.dashboard.metrics.checkinsValue')}</div>
                  <div className="bar"><i style={{ width: "82%", background: "var(--blue)" }} /></div>
                </div>
                <div className="metric">
                  <div className="lab">{t('howItWorks.dashboard.metrics.climate')}</div>
                  <div className="val" style={{ color: "#1F9D6B" }}>{t('howItWorks.dashboard.metrics.climateValue')}</div>
                  <div className="bar"><i style={{ width: "74%", background: "#1F9D6B" }} /></div>
                </div>
                <div className="metric">
                  <div className="lab">{t('howItWorks.dashboard.metrics.participation')}</div>
                  <div className="val" style={{ color: "#6B5AD0" }}>{t('howItWorks.dashboard.metrics.participationValue')}</div>
                  <div className="bar"><i style={{ width: "91%", background: "#8E7DE8" }} /></div>
                </div>
                <div className="metric alert">
                  <div className="lab" style={{ color: "var(--coral-deep)" }}>{t('howItWorks.dashboard.metrics.alerts')}</div>
                  <div className="val" style={{ color: "var(--coral-deep)" }}>{t('howItWorks.dashboard.metrics.alertsValue')}</div>
                  <div className="bar"><i style={{ width: "30%", background: "var(--coral)" }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonios" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">{t('testimonials.eyebrow')}</span>
              <h2>{t('testimonials.title')}</h2>
              <p>{t('testimonials.subtitle')}</p>
            </div>
            <div className="testi-grid">
              {testimonials.map((item, i) => (
                <div key={i} className="testi-card reveal" data-d={String(i + 1)}>
                  <div className="testi-quote">&ldquo;</div>
                  <p>{item.quote}</p>
                  <div className="testi-author">
                    <Image src={item.img} alt={item.name} width={50} height={50} />
                    <div><div className="name">{item.name}</div><div className="role">{item.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="contacto" className="sec sec-paper cta">
          <div className="wrap">
            <div className="cta-card reveal">
              <div className="cta-blob" />
              <div className="cta-copy">
                <span className="eyebrow" style={{ color: "var(--coral)" }}>{t('cta.eyebrow')}</span>
                <h2>{t('cta.title')}</h2>
                <p className="lede">{t('cta.subtitle')}</p>
                <div className="cta-stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt="App Store" width={140} height={50} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt="Google Play" width={140} height={50} />
                  </a>
                </div>
              </div>
              <ContactForm variant="schools" />
            </div>
          </div>
        </section>

        <NewsSection />
        <NewsletterSection />
      </main>

      <Footer variant="general" />
    </>
  );
}
