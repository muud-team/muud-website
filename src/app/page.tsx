import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { NewsSection, NewsletterSection } from "@/components/SharedSections";

export const metadata: Metadata = {
  title: "MUUD — Convertimos emociones en datos",
  description:
    "MUUD impulsa el desarrollo socioemocional de estudiantes y docentes con inteligencia artificial, para prevenir conflictos y fortalecer una sana convivencia escolar.",
  openGraph: {
    title: "MUUD — Convertimos emociones en datos",
    description:
      "Bienestar socioemocional con inteligencia artificial para colegios y empresas.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

function StarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="var(--coral)" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#que-es", label: "Qué es MUUD" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function HomePage() {
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
      <RevealOnScroll />
      <Nav sectionLinks={NAV_LINKS} />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">Bienestar socioemocional con IA</span>
              <h1 className="reveal" data-d="1">
                Convertimos emociones en <span className="hl">datos</span> para prevenir conflictos
              </h1>
              <p className="hero-lede reveal" data-d="2">
                Fortalecemos el bienestar escolar acompañando a estudiantes y docentes, día a día, con inteligencia artificial.
              </p>
              <div className="hero-cta reveal" data-d="3">
                <div className="stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" aria-label="Descargar en App Store">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt="App Store" width={140} height={50} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" aria-label="Descargar en Google Play">
                    <Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt="Google Play" width={140} height={50} />
                  </a>
                </div>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span className="stars">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</span>
                Valorada por colegios en toda Latinoamérica
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

        {/* CONTEXT STRIP */}
        <section className="context">
          <div className="wrap">
            <div className="context-card reveal">
              <Image className="star-bg" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b3_Star%201.svg" alt="" width={160} height={160} />
              <p>El acoso, la violencia y la exclusión afectan el bienestar y el rendimiento de millones de estudiantes en el mundo.</p>
              <Image className="ctx-emoji" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bac38164fd8fc55ed9e_emoji-4.png" alt="" width={120} height={120} />
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">El desafío</span>
              <h2>¿Te suena familiar?</h2>
              <p>Las barreras emocionales en el aula son invisibles hasta que estallan. MUUD las hace visibles a tiempo.</p>
            </div>
            <div className="prob-grid">
              {[
                { num: "01", emoji: "648b40e4b4ce483ba43c9dac_Pensive%20Face.png", title: "Exclusión social", desc: "Grupos de estudiantes que deliberadamente marginan o excluyen a otros compañeros." },
                { num: "02", emoji: "648b40eeb63c52812b77e9ad_Angry%20Face.png", title: "Conflictos y tensiones", desc: "Enfrentamientos recurrentes por diferencias de opinión, personalidades o intereses." },
                { num: "03", emoji: "648b40fac1081537aaaed288_Face%20With%20Head%20Bandage.png", title: "Bullying", desc: "Estudiantes que sufren burlas, insultos o agresiones físicas por parte de sus compañeros." },
                { num: "04", emoji: "648b410d0dd822359603da79_Flushed%20Face.png", title: "Falta de comunicación", desc: "Docentes y estudiantes sin canales efectivos y comprensivos para expresarse." },
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

        {/* WHAT IS MUUD */}
        <section id="que-es" className="sec sec-ink">
          <div className="wrap about-grid">
            <div className="about-visual reveal">
              <div className="about-ring" />
              <Image className="about-char" src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bbb3fa58727d47c3b42_character-muud.png" alt="Mascota MÜUD" width={300} height={300} />
            </div>
            <div className="about-copy reveal" data-d="1">
              <span className="eyebrow">El futuro del bienestar emocional</span>
              <h2>Conoce la app MÜUD</h2>
              <p>Con MÜUD, los estudiantes <strong>aprenden a gestionar sus emociones</strong> y a comunicarse mejor, mientras los docentes obtienen señales claras para acompañarlos.</p>
              <p>Mejoramos el clima escolar, prevenimos conflictos y fortalecemos los lazos entre estudiantes y docentes, creando un entorno de aprendizaje seguro y armonioso para todos.</p>
              <div className="about-pills">
                <span className="pill"><span className="dot" style={{ background: "var(--sky)" }} />Estudiantes</span>
                <span className="pill"><span className="dot" style={{ background: "var(--coral)" }} />Docentes</span>
                <span className="pill"><span className="dot" style={{ background: "var(--lilac)" }} />Equipos de convivencia</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como-funciona" className="sec sec-paper">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Cómo funciona</span>
              <h2>De la emoción a la acción, en cuatro pasos</h2>
              <p>Cada interacción del estudiante se transforma en información útil y accionable para el colegio.</p>
            </div>
            <div className="feat-grid">
              {[
                { step: "01", icon: "heart", tag: "Diario", tagBg: "rgba(84,196,232,.14)", tagColor: "var(--blue)", grad: "var(--sky),var(--blue)", title: "Check-in emocional", desc: "Los estudiantes registran y monitorean sus emociones cada día, fomentando la autoconciencia y la reflexión." },
                { step: "02", icon: "journal", tag: "Privado", tagBg: "rgba(200,192,242,.22)", tagColor: "#6B5AD0", grad: "var(--lilac),#8E7DE8", title: "Journal de vida", desc: "Un espacio seguro y privado para escribir sobre pensamientos y experiencias, y procesar lo que sienten." },
                { step: "03", icon: "chart", tag: "Inteligencia artificial", tagBg: "rgba(249,139,107,.16)", tagColor: "var(--coral-deep)", grad: "var(--coral),var(--coral-deep)", title: "Reportes personalizados", desc: "La IA analiza la información registrada para detectar patrones y entregar insights valiosos sobre el bienestar emocional." },
                { step: "04", icon: "bell", tag: "Para docentes", tagBg: "rgba(246,180,76,.18)", tagColor: "#C98A1E", grad: "#F6B44C,var(--coral)", title: "Sistema de alerta temprana", desc: "Notifica a los docentes sobre estudiantes que requieren apoyo, con recursos y actividades para intervenir a tiempo." },
              ].map((f, i) => (
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
                <span className="dash-title">Panel del docente · Convivencia escolar</span>
              </div>
              <div className="dash-body" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
                <div className="metric"><div className="lab">Check-ins esta semana</div><div className="val" style={{ color: "var(--blue)" }}>312</div><div className="bar"><i style={{ width: "82%", background: "var(--blue)" }} /></div></div>
                <div className="metric"><div className="lab">Clima del curso</div><div className="val" style={{ color: "#1F9D6B" }}>Estable</div><div className="bar"><i style={{ width: "74%", background: "#1F9D6B" }} /></div></div>
                <div className="metric"><div className="lab">Participación</div><div className="val" style={{ color: "#6B5AD0" }}>91%</div><div className="bar"><i style={{ width: "91%", background: "#8E7DE8" }} /></div></div>
                <div className="metric alert"><div className="lab" style={{ color: "var(--coral-deep)" }}>Alertas activas</div><div className="val" style={{ color: "var(--coral-deep)" }}>3</div><div className="bar"><i style={{ width: "30%", background: "var(--coral)" }} /></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonios" className="sec sec-cream">
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
                <span className="eyebrow" style={{ color: "var(--coral)" }}>Únanse a la revolución</span>
                <h2>Revolucionemos la convivencia escolar, juntos</h2>
                <p className="lede">No esperes más para marcar la diferencia en la vida de tus estudiantes y docentes. Empieza hoy a cultivar un entorno educativo próspero, seguro y emocionalmente saludable.</p>
                <div className="cta-stores">
                  <a href="https://apps.apple.com/cl/app/m%C3%BCud/id6455428632" target="_blank" rel="noopener noreferrer"><Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b5_App%20Store%20-%20Button.svg" alt="App Store" width={140} height={50} /></a>
                  <a href="https://play.google.com/store/apps/details?id=app.muud" target="_blank" rel="noopener noreferrer"><Image src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/64836681fe716f7bceb620b7_Play%20Store%20-%20Button.svg" alt="Google Play" width={140} height={50} /></a>
                </div>
              </div>
              <ContactForm
                secondFieldLabel="Colegio / Organización"
                secondFieldPlaceholder="Nombre del colegio"
                emailPlaceholder="tucorreo@colegio.cl"
                roles={["Dirección", "Convivencia escolar", "Docente", "Familia / Apoderado", "Empresa"]}
                messagePlaceholder="Quiero agendar una demo para mi colegio…"
              />
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
