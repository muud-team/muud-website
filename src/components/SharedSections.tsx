import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const SOCIAL = [
  { net: "Instagram", handle: "@muud.app", href: "https://www.instagram.com/muud.app/", icon: "662996d8d341aac4a3f456c2_4.png", bg: "rgba(249,139,107,.16)" },
  { net: "LinkedIn", handle: "MUUD App", href: "https://www.linkedin.com/company/muud-app/", icon: "662996d8c30fbb4b5a0b44df_5.png", bg: "rgba(84,196,232,.16)" },
  { net: "Facebook", handle: "muud.app.latam", href: "https://www.facebook.com/muud.app.latam", icon: "662998f198f0c8cbcff2509b_Disen%CC%83o%20sin%20ti%CC%81tulo.png", bg: "rgba(62,155,214,.16)" },
];

const NEWS = [
  { meta: ["MUUD", "Producto"], title: "Nuevas funciones de bienestar impulsadas por IA" },
  { meta: ["Blog", "Recursos"], title: "Cómo los datos socioemocionales mejoran la convivencia" },
  { meta: ["Prensa", "Destacado"], title: "MUUD en la conversación sobre salud mental escolar" },
];

const PRESS = [
  { name: "Marca Chile", href: "https://www.marcachile.cl/imagen-de-chile-se-suma-a-50-genias-del-ano-2025-y-reconoce-el-talento-femenino-con-proyeccion-internacional/" },
  { name: "MIT Solve", href: "https://solve.mit.edu/solutions/102412" },
  { name: "Singularity + Sync", href: "https://www.tourinnovacion.cl/emprendimiento/innvovadora-startup-chilena-enfocada-en-la-salud-mental-escolar-es-finalista-de-singularity-sync-global-impact-challenge/" },
  { name: "BRILLA LATAM", href: "https://www.umaximo.com/post/muud-swarmob-y-umaximo-chile-destaca-en-tecnologia-educativa-basada-en-evidencia-en-latinoamerica" },
  { name: "BritCham", href: "https://britcham.cl/es/muud-joins-as-a-new-partner-of-britcham-chile/" },
  { name: "El Heraldo", href: "https://www.diarioelheraldo.cl/noticia/la-violencia-en-los-colegios-no-se-va-a-resolver-revisando-mochilas" },
];

export function NewsSection() {
  return (
    <section id="noticias" className="sec sec-cream">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Novedades</span>
          <h2>Noticias destacadas</h2>
          <p>Lo último de MUUD y de la conversación sobre bienestar y convivencia.</p>
        </div>
        <div className="news-grid">
          {NEWS.map((n, i) => (
            <article key={i} className="news-card reveal" data-d={String(i + 1)}>
              <div className="news-img" />
              <div className="news-body">
                <span className="news-meta">
                  {n.meta[0]}<span className="dot" />{n.meta[1]}
                </span>
                <h3>{n.title}</h3>
                <p>Titular de ejemplo: reemplázalo por tu noticia destacada.</p>
                <span className="news-link">Leer más <span>→</span></span>
              </div>
            </article>
          ))}
        </div>
        <div className="press reveal">
          <span className="press-label">Medios que nos mencionan</span>
          <div className="press-logos">
            {PRESS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="press-logo">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="sec sec-ink newsletter">
      <div className="wrap">
        <div className="nl-inner">
          <div className="nl-copy reveal">
            <span className="eyebrow" style={{ color: "var(--coral)" }}>Newsletter</span>
            <h2>Súmate a la comunidad MUUD</h2>
            <p>Recibe noticias, recursos y novedades sobre bienestar socioemocional, directo en tu correo.</p>
          </div>
          <NewsletterForm />
        </div>
        <div className="social-grid">
          {SOCIAL.map((s, i) => (
            <a key={i} className="social-card reveal" data-d={String(i + 1)} href={s.href} target="_blank" rel="noopener noreferrer">
              <span className="sc-ico" style={{ background: s.bg }}>
                <Image src={`https://cdn.prod.website-files.com/64836681fe716f7bceb62090/${s.icon}`} alt="" width={26} height={26} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                <span className="sc-net">{s.net}</span>
                <span className="sc-handle">{s.handle}</span>
              </span>
              <span className="sc-go">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
