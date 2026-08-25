import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { NewsSection, NewsletterSection } from "@/components/SharedSections";
import { alternatesFor, buildOpenGraph } from "@/lib/seo";
import { breadcrumbSchema, graph, serviceSchema, webPageSchema } from "@/lib/structured-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.schools' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: buildOpenGraph({
      locale,
      title: t("ogTitle"),
      description: t("ogDescription"),
      path: "colegios",
    }),
    alternates: alternatesFor(locale, 'colegios'),
  };
}

export default function ColegiosPage() {
  const locale = useLocale();
  const t = useTranslations('schools');
  const tMeta = useTranslations('metadata.schools');
  const tSchema = useTranslations('metadata.schema');
  const tNav = useTranslations('schools.navLinks');

  const NAV_LINKS = [
    { href: "#desafio", label: tNav('challenge') },
    { href: "#solucion", label: tNav('solution') },
    { href: "#para-quien", label: tNav('forWho') },
    { href: "#contacto", label: tNav('contact') },
  ];

  const problems = t.raw('problems.items');
  const roles = t.raw('roles.items');
  const steps = t.raw('implementation.steps');
  const stats = t.raw('stats.items');
  const testimonials = t.raw('testimonials.items');

  const breadcrumb = breadcrumbSchema(locale, tSchema('breadcrumbHome'), [
    { name: tSchema('schools.name'), path: 'colegios' },
  ]);

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: 'colegios',
      name: tMeta('title'),
      description: tMeta('description'),
      breadcrumbId: breadcrumb['@id'],
    }),
    breadcrumb,
    serviceSchema({
      locale,
      path: 'colegios',
      name: tSchema('schools.name'),
      serviceType: tSchema('schools.serviceType'),
      description: tSchema('schools.description'),
      audienceType: tSchema('schools.audience'),
    })
  );

  const renderWithHighlight = (text: string) => {
    return text
      .replace(/<highlight>/g, '<span class="hl">')
      .replace(/<\/highlight>/g, '</span>');
  };

  const renderWithStrong = (text: string) => {
    return text
      .replace(/<strong>/g, '<strong>')
      .replace(/<\/strong>/g, '</strong>');
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav activePage="colegios" sectionLinks={NAV_LINKS} />

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
                <a href="#solucion" className="btn btn-ghost">{t('hero.learnMore')}</a>
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
                      i === 0 ? '648b40e4b4ce483ba43c9dac_Pensive%20Face.png' :
                      i === 1 ? '648b40eeb63c52812b77e9ad_Angry%20Face.png' :
                      i === 2 ? '648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png' :
                      '648b410d0dd822359603da79_Flushed%20Face.png'
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

        {/* SOLUTION SPLIT — Student companion */}
        <section id="solucion" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('solution.eyebrow')}</span>
              <h2>{t('solution.title')}</h2>
              <p>{t('solution.subtitle')}</p>
            </div>
          </div>

          <div className="wrap split">
            <div className="split-copy reveal">
              <span className="eyebrow" style={{ color: "var(--blue)" }}>{t('solution.students.eyebrow')}</span>
              <h2>{t('solution.students.title')}</h2>
              <p>{t('solution.students.description')}</p>
              <ul className="check-list">
                {t.raw('solution.students.features').map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="split-visual reveal" data-d="1">
              <Image className="split-img" src="/muudy.png" alt={t('solution.students.imageAlt')} width={450} height={600} />
            </div>
          </div>

          {/* Dashboard split */}
          <div className="wrap split split-rev">
            <div className="split-visual reveal">
              <div className="dash small">
                <div className="dash-top">
                  <span className="dash-dot" style={{ background: "#FF6058" }} />
                  <span className="dash-dot" style={{ background: "#FEBC2E" }} />
                  <span className="dash-dot" style={{ background: "#28C840" }} />
                  <span className="dash-title">{t('solution.school.dashboard.title')}</span>
                </div>
                <div className="dash-body" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div className="metric">
                    <div className="lab">{t('solution.school.dashboard.climate')}</div>
                    <div className="val" style={{ color: "#1F9D6B" }}>{t('solution.school.dashboard.climateValue')}</div>
                    <div className="bar"><i style={{ width: "74%", background: "#1F9D6B" }} /></div>
                  </div>
                  <div className="metric alert">
                    <div className="lab" style={{ color: "var(--coral-deep)" }}>{t('solution.school.dashboard.alerts')}</div>
                    <div className="val" style={{ color: "var(--coral-deep)" }}>{t('solution.school.dashboard.alertsValue')}</div>
                    <div className="bar"><i style={{ width: "30%", background: "var(--coral)" }} /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-copy reveal" data-d="1">
              <span className="eyebrow" style={{ color: "var(--coral)" }}>{t('solution.school.eyebrow')}</span>
              <h2>{t('solution.school.title')}</h2>
              <p>{t('solution.school.description')}</p>
              <ul className="check-list">
                {t.raw('solution.school.features').map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section id="para-quien" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('roles.eyebrow')}</span>
              <h2>{t('roles.title')}</h2>
              <p>{t('roles.subtitle')}</p>
            </div>
            <div className="role-grid four">
              {roles.map((r: any, i: number) => (
                <div key={i} className="role-card reveal" data-d={String(i + 1)}>
                  <span className="role-icon">{r.icon}</span>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                </div>
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
            </div>
            <div className="step-grid">
              {steps.map((s: any, i: number) => (
                <div key={i} className="step-card reveal" data-d={String(i + 1)}>
                  <span className="step-n">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sec sec-ink">
          <div className="wrap stat-grid">
            {stats.map((s: any, i: number) => (
              <div key={i} className="stat-card reveal" data-d={String(i + 1)}>
                <div className="stat-val">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">{t('testimonials.eyebrow')}</span>
              <h2>{t('testimonials.title')}</h2>
              <p>{t('testimonials.subtitle')}</p>
            </div>
            <div className="testi-grid">
              {testimonials.map((item: any, i: number) => (
                <div key={i} className="testi-card reveal" data-d={String(i + 1)}>
                  <div className="testi-quote">&ldquo;</div>
                  <p>{item.quote}</p>
                  <div className="testi-author">
                    <Image
                      src={
                        i === 0 ? '/avatar_antonella.jpg' :
                        i === 1 ? '/avatar_paulo.jpg' :
                        '/avatar_natalia.jpg'
                      }
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="role">{item.role}</div>
                    </div>
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
              </div>
              <ContactForm variant="schools" />
            </div>
          </div>
        </section>

        <NewsSection />
        <NewsletterSection />
      </main>

      <Footer variant="colegios" />
    </>
  );
}
