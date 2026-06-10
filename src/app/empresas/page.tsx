import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { NewsSection, NewsletterSection } from "@/components/SharedSections";

export const metadata: Metadata = {
  title: "MUUD para Empresas — Bienestar emocional para tu equipo",
  description:
    "MUUD ayuda a las empresas a cuidar el bienestar emocional de sus equipos: un espacio para cada colaborador y datos agregados para liderar con empatía.",
  openGraph: {
    title: "MUUD para Empresas — Bienestar emocional para tu equipo",
    description:
      "Un espacio para cada colaborador y datos agregados para liderar con empatía.",
    url: "/empresas",
  },
  alternates: {
    canonical: "/empresas",
  },
};

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MUUD",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "MUUD ayuda a las empresas a cuidar el bienestar emocional de sus equipos con inteligencia artificial.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealOnScroll />
      <Nav
        activePage="empresas"
        sectionLinks={[
          { href: "#solucion", label: "La solución" },
          { href: "#roles", label: "Para quién" },
          { href: "#faq", label: "Preguntas" },
          { href: "#contacto", label: "Contacto" },
        ]}
      />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">MUUD para empresas</span>
              <h1 className="reveal" data-d="1">
                El bienestar emocional de tu equipo, <span className="hl">en datos</span>
              </h1>
              <p className="hero-lede reveal" data-d="2">
                Damos a cada colaborador un espacio para cuidarse, y a líderes y RRHH señales claras para acompañar a tiempo.
              </p>
              <div className="hero-cta reveal" data-d="3">
                <a href="#contacto" className="btn btn-primary">Agendar una demo</a>
                <a href="#solucion" className="btn btn-ghost">Ver cómo funciona</a>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span className="stars">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </span>
                Equipos que eligen cuidar a sus personas
              </div>
            </div>
            <div className="hero-visual reveal" data-d="2">
              <div className="hero-blob" />
              <Image
                className="hero-phone"
                src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b4808eea9e32297b751e0_Phone-landing.png"
                alt="App MÜUD — pantalla principal mostrando check-in emocional"
                width={320}
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
              <span className="eyebrow">El costo invisible del malestar</span>
              <h2>Lo que no se nombra, igual pasa la cuenta</h2>
              <p>El malestar emocional impacta el clima, la productividad y la permanencia de las personas. MUUD lo hace visible antes de que escale.</p>
            </div>
            <div className="prob-grid">
              {[
                { num: "01", emoji: "648b410d0dd822359603da79_Flushed%20Face.png", title: "Estrés y burnout", desc: "Cargas sostenidas que desgastan a las personas y deterioran su rendimiento." },
                { num: "02", emoji: "648b40eeb63c52812b77e9ad_Angry%20Face.png", title: "Clima tenso", desc: "Conflictos y fricciones que erosionan la confianza y la colaboración del equipo." },
                { num: "03", emoji: "648b40e4b4ce483ba43c9dac_Pensive%20Face.png", title: "Desconexión", desc: "Personas que se sienten solas o poco escuchadas y terminan desvinculándose." },
                { num: "04", emoji: "648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png", title: "Rotación", desc: "Talento que se va porque el malestar no se detectó ni se abordó a tiempo." },
              ].map((p, i) => (
                <article key={p.num} className="prob-card reveal" data-d={String(i + 1)}>
                  <span className="num">{p.num}</span>
                  <Image
                    className="prob-face"
                    src={`https://cdn.prod.website-files.com/64836681fe716f7bceb62090/${p.emoji}`}
                    alt={p.title}
                    width={62}
                    height={62}
                  />
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
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
                  src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b4808eea9e32297b751e0_Phone-landing.png"
                  alt="App MÜUD para colaboradores"
                  width={300}
                  height={600}
                />
                <div className="float f-emoji2" style={{ left: "auto", right: "-2%", bottom: "8%" }}>
                  <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7b0c3b9fe43db2692351_emoji-1.png" alt="" width={74} height={74} />
                </div>
              </div>
              <div className="split-copy reveal" data-d="1">
                <span className="eyebrow">Para cada colaborador</span>
                <h2>Un espacio propio para cuidar el bienestar</h2>
                <p>MÜUD acompaña a cada persona a reconocer cómo se siente y a desarrollar hábitos de bienestar, en privado.</p>
                <ul className="split-list">
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Check-in emocional</strong> para tomar el pulso a cómo va cada día.</div>
                  </li>
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Journal personal</strong> y privado para procesar el estrés y reflexionar.</div>
                  </li>
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Hábitos de autocuidado</strong> que fortalecen la regulación emocional.</div>
                  </li>
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
                    <span className="dash-title">Panel de Personas · Datos agregados</span>
                  </div>
                  <div className="dash-body">
                    <div className="metric">
                      <div className="lab">Participación</div>
                      <div className="val" style={{ color: "var(--blue)" }}>87%</div>
                      <div className="bar"><i style={{ width: "87%", background: "var(--blue)" }} /></div>
                    </div>
                    <div className="metric">
                      <div className="lab">Clima del equipo</div>
                      <div className="val" style={{ color: "#1F9D6B" }}>Positivo</div>
                      <div className="bar"><i style={{ width: "78%", background: "#1F9D6B" }} /></div>
                    </div>
                    <div className="metric">
                      <div className="lab">Índice de ánimo</div>
                      <div className="val" style={{ color: "#6B5AD0" }}>7.8</div>
                      <div className="bar"><i style={{ width: "78%", background: "#8E7DE8" }} /></div>
                    </div>
                    <div className="metric alert">
                      <div className="lab" style={{ color: "var(--coral-deep)" }}>Áreas a observar</div>
                      <div className="val" style={{ color: "var(--coral-deep)" }}>2</div>
                      <div className="bar"><i style={{ width: "25%", background: "var(--coral)" }} /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="split-copy reveal" data-d="1">
                <span className="eyebrow">Para líderes y RRHH</span>
                <h2>Señales para liderar con empatía</h2>
                <p>MUUD transforma el día a día del equipo en datos <strong>agregados</strong> que respetan la privacidad de cada persona.</p>
                <ul className="split-list">
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Reportes agregados</strong> del clima y el ánimo por equipo, sin exponer a individuos.</div>
                  </li>
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Alertas tempranas</strong> para acompañar antes de que el malestar escale.</div>
                  </li>
                  <li>
                    <span className="ck">{CHECK_SVG}</span>
                    <div><strong>Recursos accionables</strong> para fortalecer el bienestar y la cultura del equipo.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">Para toda la organización</span>
              <h2>Una herramienta, cada mirada</h2>
              <p>MUUD aporta valor en cada nivel de la empresa.</p>
            </div>
            <div className="role-grid">
              <article className="role-card reveal" data-d="1">
                <div className="role-ico" style={{ background: "linear-gradient(135deg,var(--sky),var(--blue))" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-7-4.35-9.3-8.5C1 9 2.5 5.5 6 5.5c2 0 3.2 1.1 4 2.3.8-1.2 2-2.3 4-2.3 3.5 0 5 3.5 3.3 7C19 16.65 12 21 12 21z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="role-tag">Colaboradores</div>
                <h3>Se cuidan</h3>
                <p>Un espacio privado para registrar cómo se sienten y desarrollar hábitos de bienestar.</p>
              </article>
              <article className="role-card reveal" data-d="2">
                <div className="role-ico" style={{ background: "linear-gradient(135deg,var(--coral),var(--coral-deep))" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19c0-3.3 3.6-5 8-5s8 1.7 8 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="8" r="3.4" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
                <div className="role-tag">Líderes</div>
                <h3>Acompañan mejor</h3>
                <p>Visibilidad del clima de su equipo para liderar con cercanía y a tiempo.</p>
              </article>
              <article className="role-card reveal" data-d="3">
                <div className="role-ico" style={{ background: "linear-gradient(135deg,var(--lilac),#8E7DE8)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19V9M12 19V5M19 19v-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M3 19h18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="role-tag">Recursos Humanos</div>
                <h3>Deciden con datos</h3>
                <p>Una mirada del bienestar organizacional para diseñar mejores iniciativas.</p>
              </article>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Implementación</span>
              <h2>Listos en tres pasos</h2>
              <p>Te acompañamos para que MUUD se integre al día a día de tu equipo sin fricción.</p>
            </div>
            <div className="steps">
              <div className="step-item reveal" data-d="1">
                <div className="step-n">1</div>
                <h3>Activación</h3>
                <p>Configuramos equipos y damos la bienvenida a las personas con una experiencia simple.</p>
              </div>
              <div className="step-item reveal" data-d="2">
                <div className="step-n">2</div>
                <h3>Uso diario</h3>
                <p>Cada colaborador cuenta con su espacio para registrar y cuidar su bienestar.</p>
              </div>
              <div className="step-item reveal" data-d="3">
                <div className="step-n">3</div>
                <h3>Insights para liderar</h3>
                <p>Líderes y RRHH reciben reportes agregados y alertas para acompañar al equipo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sec sec-ink">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">El impacto</span>
              <h2>Equipos más sanos, más conectados</h2>
              <p>Lo que las organizaciones buscan al cuidar el bienestar de sus personas.</p>
            </div>
            <div className="stat-grid">
              {[
                { big: "+85%", lab: "de participación del equipo" },
                { big: "−30%", lab: "en señales de estrés sostenido" },
                { big: "24/7", lab: "espacio de bienestar disponible" },
                { big: "100%", lab: "reportes agregados y privados" },
              ].map((s, i) => (
                <div key={i} className="stat reveal" data-d={String(i + 1)}>
                  <div className="big">{s.big}</div>
                  <div className="lab">{s.lab}</div>
                </div>
              ))}
            </div>
            <p className="stat-foot reveal">Cifras ilustrativas. Reemplázalas con los resultados reales de tu organización.</p>
          </div>
        </section>

        {/* BIG QUOTE */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="bigquote reveal">
              <p className="q">
                &ldquo;Cuando las personas se sienten escuchadas y acompañadas, los equipos florecen. Eso es lo que hacemos posible.&rdquo;
              </p>
              <div className="by">
                <Image
                  src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bbb3fa58727d47c3b42_character-muud.png"
                  alt="MÜUD"
                  width={54}
                  height={54}
                  style={{ objectFit: "contain", background: "rgba(84,196,232,.15)" }}
                />
                <div style={{ textAlign: "left" }}>
                  <div className="name">Equipo MÜUD</div>
                  <div className="role">Bienestar para personas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">Preguntas frecuentes</span>
              <h2>Lo que suelen preguntarnos</h2>
            </div>
            <div className="faq">
              {[
                {
                  q: "¿Los datos de cada persona son privados?",
                  a: "Sí. El journal y los registros de cada colaborador son personales. Líderes y RRHH solo acceden a reportes agregados, diseñados para resguardar la privacidad individual.",
                },
                {
                  q: "¿Qué ven exactamente líderes y RRHH?",
                  a: "Una mirada agregada del clima y el ánimo por equipo, junto a alertas que indican cuándo conviene acompañar, sin exponer el detalle de personas individuales.",
                },
                {
                  q: "¿Cómo se implementa en mi empresa?",
                  a: "Activamos los equipos, damos la bienvenida a las personas y acompañamos la adopción. La experiencia es simple desde el primer día.",
                },
                {
                  q: "¿Funciona para equipos remotos o híbridos?",
                  a: "Sí. MÜUD es una app móvil que acompaña a cada persona donde esté, sin importar la modalidad de trabajo.",
                },
              ].map((item, i) => (
                <details key={i} className="reveal">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
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
                <span className="eyebrow" style={{ color: "var(--coral)" }}>Empieza hoy</span>
                <h2>Cuida a tu equipo con MUUD</h2>
                <p className="lede">
                  Agenda una demo y descubre cómo darle a tu organización un entorno laboral más sano, conectado y humano.
                </p>
                <div className="cta-stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt="Descargar en App Store" width={140} height={50} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt="Descargar en Google Play" width={140} height={50} />
                  </a>
                </div>
              </div>
              <ContactForm />
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
