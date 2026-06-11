import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import NewsletterForm from "./NewsletterForm";
import { BLOG_POSTS, formatDate } from "@/data/blog-posts";

const SOCIAL = [
  { net: "Instagram", handle: "@muud.app", href: "https://www.instagram.com/muud.app/", icon: "662996d8d341aac4a3f456c2_4.png", bg: "rgba(249,139,107,.16)" },
  { net: "LinkedIn", handle: "MUUD App", href: "https://www.linkedin.com/company/muud-app/", icon: "662996d8c30fbb4b5a0b44df_5.png", bg: "rgba(84,196,232,.16)" },
  { net: "Facebook", handle: "muud.app.latam", href: "https://www.facebook.com/muud.app.latam", icon: "662998f198f0c8cbcff2509b_Disen%CC%83o%20sin%20ti%CC%81tulo.png", bg: "rgba(62,155,214,.16)" },
];

const LATEST_POSTS = BLOG_POSTS.slice(0, 3);

const PRESS = [
  { name: "Marca Chile", href: "https://www.marcachile.cl/imagen-de-chile-se-suma-a-50-genias-del-ano-2025-y-reconoce-el-talento-femenino-con-proyeccion-internacional/" },
  { name: "MIT Solve", href: "https://solve.mit.edu/solutions/102412" },
  { name: "Singularity + Sync", href: "https://www.tourinnovacion.cl/emprendimiento/innvovadora-startup-chilena-enfocada-en-la-salud-mental-escolar-es-finalista-de-singularity-sync-global-impact-challenge/" },
  { name: "BRILLA LATAM", href: "https://www.umaximo.com/post/muud-swarmob-y-umaximo-chile-destaca-en-tecnologia-educativa-basada-en-evidencia-en-latinoamerica" },
  { name: "BritCham", href: "https://britcham.cl/es/muud-joins-as-a-new-partner-of-britcham-chile/" },
  { name: "El Heraldo", href: "https://www.diarioelheraldo.cl/noticia/la-violencia-en-los-colegios-no-se-va-a-resolver-revisando-mochilas" },
];

export function NewsSection() {
  const t = useTranslations('shared.news');
  const tBlog = useTranslations('blog');

  return (
    <section id="noticias" className="sec sec-cream">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="blog-grid">
          {LATEST_POSTS.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card reveal" data-d={String(i + 1)}>
              <div className="blog-card-img">
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, 33vw" />
              </div>
              <div className="blog-card-body">
                <div className="blog-tags">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <div className="blog-meta"><time dateTime={post.date}>{formatDate(post.date)}</time></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/blog" className="btn btn-ghost">{tBlog('allArticles')}</Link>
        </div>
        <div className="press reveal">
          <span className="press-label">{t('press.label')}</span>
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
  const t = useTranslations('newsletter');
  const tSocial = useTranslations('shared.social');

  const socialItems = [
    {
      ...SOCIAL[0],
      net: tSocial('instagram.network'),
      handle: tSocial('instagram.handle'),
    },
    {
      ...SOCIAL[1],
      net: tSocial('linkedin.network'),
      handle: tSocial('linkedin.handle'),
    },
    {
      ...SOCIAL[2],
      net: tSocial('facebook.network'),
      handle: tSocial('facebook.handle'),
    },
  ];

  return (
    <section className="sec sec-ink newsletter">
      <div className="wrap">
        <div className="nl-inner">
          <div className="nl-copy reveal">
            <span className="eyebrow" style={{ color: "var(--coral)" }}>{t('eyebrow')}</span>
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>
          </div>
          <NewsletterForm />
        </div>
        <div className="social-grid">
          {socialItems.map((s, i) => (
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
