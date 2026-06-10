import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { NewsSection, NewsletterSection } from "@/components/SharedSections";

export const metadata: Metadata = {
  title: "MUUD para Colegios — Bienestar socioemocional escolar",
  description:
    "Acompaña a tus estudiantes y docentes con MUUD: check-in emocional, journal, reportes con IA y alertas tempranas para una sana convivencia escolar.",
  openGraph: {
    title: "MUUD para Colegios — Bienestar socioemocional escolar",
    description:
      "Plataforma de bienestar socioemocional con IA para comunidades escolares.",
    url: "/colegios",
  },
  alternates: { canonical: "/colegios" },
};

const NAV_LINKS = [
  { href: "#desafio", label: "El desafío" },
  { href: "#solucion", label: "La solución" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#contacto", label: "Contacto" },
];

export default function ColegiosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MUUD para Colegios",
    description: "Plataforma de bienestar socioemocional con IA para comunidades escolares.",
    brand: { "@type": "Organization", name: "MUUD" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RevealOnScroll />
      <Nav activePage="colegios" sectionLinks={NAV_LINKS} />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">MUUD para Colegios</span>
              <h1 className="reveal" data-d="1">
                Una comunidad escolar que <span className="hl">se cuida</span>
              </h1>
              <p className="hero-lede reveal" data-d="2">
                Fortalecemos el bienestar socioemocional de estudiantes, docentes y familias con inteligencia artificial, para prevenir conflictos y construir convivencia escolar.
              </p>
              <div className="hero-cta reveal" data-d="3">
                <a href="#contacto" className="btn btn-primary">Agendar demo</a>
                <a href="#solucion" className="btn btn-ghost">Conoce la solución</a>
              </div>
            </div>
            <div className="hero-visual reveal" data-d="2">
              <div className="hero-blob" />
              <Image className="hero-phone" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b4808eea9e32297b751e0_Phone-landing.png" alt="App MÜUD" width={320} height={640} priority />
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
              <span className="eyebrow">El desafío</span>
              <h2>¿Te suena familiar?</h2>
              <p>Las barreras emocionales en el aula son invisibles hasta que estallan. MUUD las hace visibles a tiempo.</p>
            </div>
            <div className="prob-grid">
              {[
                { num: "01", emoji: "648b40e4b4ce483ba43c9dac_Pensive%20Face.png", title: "Exclusión social", desc: "Grupos que marginan o excluyen a otros compañeros de manera deliberada." },
                { num: "02", emoji: "648b40eeb63c52812b77e9ad_Angry%20Face.png", title: "Conflictos en el aula", desc: "Enfrentamientos recurrentes por diferencias de opinión, personalidades o intereses." },
                { num: "03", emoji: "648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png", title: "Bullying y ciberacoso", desc: "Estudiantes que sufren burlas, insultos o agresiones por parte de sus compañeros." },
                { num: "04", emoji: "648b410d0dd822359603da79_Flushed%20Face.png", title: "Falta de comunicación", desc: "Docentes y estudiantes sin canales efectivos para expresar lo que sienten." },
              ].map((p, i) => (
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

        {/* SOLUTION SPLIT — Student companion */}
        <section id="solucion" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">La solución</span>
              <h2>Bienestar escolar en dos dimensiones</h2>
              <p>Un acompañante para cada estudiante y un panel inteligente para cada líder educativo.</p>
            </div>
          </div>

          <div className="wrap split">
            <div className="split-copy reveal">
              <span className="eyebrow" style={{ color: "var(--blue)" }}>Para estudiantes</span>
              <h2>Un compañero que los escucha</h2>
              <p>Los estudiantes registran sus emociones, escriben en su journal y reciben acompañamiento diario con inteligencia artificial.</p>
              <ul className="check-list">
                <li>Check-in emocional diario</li>
                <li>Journal privado y seguro</li>
                <li>Ejercicios de regulación emocional</li>
                <li>Contenido personalizado con IA</li>
              </ul>
            </div>
            <div className="split-visual reveal" data-d="1">
              <Image className="split-img" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648b4808eea9e32297b751e0_Phone-landing.png" alt="App MÜUD para estudiantes" width={300} height={600} />
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
                  <span className="dash-title">Panel escolar · Convivencia</span>
                </div>
                <div className="dash-body" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div className="metric"><div className="lab">Clima del curso</div><div className="val" style={{ color: "#1F9D6B" }}>Estable</div><div className="bar"><i style={{ width: "74%", background: "#1F9D6B" }} /></div></div>
                  <div className="metric alert"><div className="lab" style={{ color: "var(--coral-deep)" }}>Alertas activas</div><div className="val" style={{ color: "var(--coral-deep)" }}>3</div><div className="bar"><i style={{ width: "30%", background: "var(--coral)" }} /></div></div>
                </div>
              </div>
            </div>
            <div className="split-copy reveal" data-d="1">
              <span className="eyebrow" style={{ color: "var(--coral)" }}>Para el colegio</span>
              <h2>Un dashboard que ilumina</h2>
              <p>Monitorea el pulso emocional de tu comunidad, detecta focos de riesgo y actúa con datos, no con suposiciones.</p>
              <ul className="check-list">
                <li>Mapa de bienestar por curso y nivel</li>
                <li>Alertas tempranas automatizadas</li>
                <li>Reportes consolidados con IA</li>
                <li>Historial de intervenciones</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section id="para-quien" className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Para quién</span>
              <h2>Diseñado para toda la comunidad</h2>
              <p>Cada rol en el colegio tiene herramientas a su medida.</p>
            </div>
            <div className="role-grid four">
              {[
                { icon: "📚", title: "Estudiantes", desc: "Registran sus emociones, escriben en su journal y reciben acompañamiento personalizado." },
                { icon: "👩‍🏫", title: "Docentes", desc: "Visualizan el clima emocional de sus cursos y reciben alertas cuando un estudiante necesita apoyo." },
                { icon: "🤝", title: "Convivencia escolar", desc: "Acceden a reportes consolidados, identifican focos de riesgo y documentan intervenciones." },
                { icon: "🏫", title: "Dirección", desc: "Monitorean indicadores de bienestar a nivel institucional y toman decisiones basadas en datos." },
              ].map((r, i) => (
                <div key={i} className="role-card reveal" data-d={String(i + 1)}>
                  <span className="role-icon">{r.icon}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Implementación</span>
              <h2>Tres pasos para empezar</h2>
            </div>
            <div className="step-grid">
              {[
                { n: "1", title: "Onboarding guiado", desc: "Configuramos la plataforma con los datos de tu colegio y capacitamos a los equipos en menos de una semana." },
                { n: "2", title: "Acompañamiento diario", desc: "Los estudiantes usan la app, los docentes monitorean y MUUD aprende del contexto de cada curso." },
                { n: "3", title: "Datos que guían", desc: "Convierte la información emocional en decisiones: reportes, alertas y recomendaciones basadas en IA." },
              ].map((s, i) => (
                <div key={i} className="step-card reveal" data-d={String(i + 1)}>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sec sec-ink">
          <div className="wrap stat-grid">
            {[
              { val: "+90%", label: "de satisfacción de docentes y directivos" },
              { val: "3x", label: "más detección temprana de conflictos" },
              { val: "24/7", label: "acompañamiento emocional para estudiantes" },
              { val: "1", label: "semana para implementar en tu colegio" },
            ].map((s, i) => (
              <div key={i} className="stat-card reveal" data-d={String(i + 1)}>
                <div className="stat-val">{s.val}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">Testimonios</span>
              <h2>¿Qué dicen de nosotros?</h2>
              <p>Directores y encargados de convivencia que ya transformaron su comunidad escolar.</p>
            </div>
            <div className="testi-grid">
              {[
                { quote: "Desde que implementamos la app notamos una mejora significativa en el ambiente escolar. Los estudiantes están más conscientes de sus emociones y los reportes nos dan información valiosa para abordar conflictos de forma efectiva.", name: "Wilheim Neubauer", role: "Director, Colegio San Andrés", img: "662993f532da8065e50bc7a0_Wilheim.png" },
                { quote: "MUUD ha cambiado significativamente el bienestar de nuestros docentes. Monitorear sus emociones y gestionar el estrés en tiempo real mejoró el ambiente del colegio: hoy se sienten más apoyados y valorados.", name: "Pablo Aguilante", role: "Director, Colegio Proyección Siglo XXI", img: "662993f50a2679de448c1c42_Pablo.png" },
                { quote: "Los profesores pueden intervenir de manera temprana y efectiva gracias al sistema de alerta. La app nos ayudó a construir un entorno más seguro, inclusivo y armonioso, donde todos pueden alcanzar su máximo potencial.", name: "Nelson Torres", role: "Convivencia Escolar, Colegio Santa Josefina", img: "67070942483f78757e4ffcd0_nelson%20torres.png" },
              ].map((t, i) => (
                <div key={i} className="testi-card reveal" data-d={String(i + 1)}>
                  <div className="testi-quote">&ldquo;</div>
                  <p>{t.quote}</p>
                  <div className="testi-author">
                    <Image src={`https://cdn.prod.website-files.com/64836681fe716f7bceb62090/${t.img}`} alt={t.name} width={50} height={50} />
                    <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
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
                <span className="eyebrow" style={{ color: "var(--coral)" }}>Comienza hoy</span>
                <h2>Lleva MUUD a tu colegio</h2>
                <p className="lede">No esperes más para marcar la diferencia en la vida de tus estudiantes y docentes. Empieza hoy a cultivar un entorno educativo próspero, seguro y emocionalmente saludable.</p>
              </div>
              <ContactForm
                secondFieldLabel="Colegio"
                secondFieldPlaceholder="Nombre del colegio"
                emailPlaceholder="tucorreo@colegio.cl"
                roles={["Dirección", "Convivencia escolar", "Docente", "Familia / Apoderado"]}
                messagePlaceholder="Quiero agendar una demo para mi colegio…"
              />
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
