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
  { name: "Marca Chile", href: "https://www.marcachile.cl/imagen-de-chile-se-suma-a-50-genias-del-ano-2025-y-reconoce-el-talento-femenino-con-proyeccion-internacional/", logo: "/press/marca-chile-logo.png" },
  { name: "MIT Solve", href: "https://solve.mit.edu/solutions/102412", logo: "/press/mit-solve-logo.jpg" },
  { name: "ChileMass", href: "https://www.chilemass.org/", logo: "/press/chilemass-logo.png" },
  { name: "Eduvidence", href: "https://eduvidence.org/", logo: "/press/eduvidence-logo.png" },
  { name: "HolonIQ", href: "https://www.holoniq.com/", logo: "/press/holoniq-logo.jpg" },
  { name: "BritCham", href: "https://britcham.cl/es/muud-joins-as-a-new-partner-of-britcham-chile/", logo: "/press/britcham-logo.png" },
  { name: "Wikit", href: "https://wikit.ai/", logo: "/press/wikit-logo.jpeg" },
  { name: "Odisea ONG", href: "https://odiseaong.org/", logo: "/press/odiseaong-logo.jpg" },
  { name: "ProChile", href: "https://www.prochile.gob.cl/", logo: "/press/prochile-logo.png" },
  { name: "24 Horas", href: "https://youtu.be/WIXmaxCrfJA", logo: "/press/24_horas-logo.png" },
  { name: "Start-Up Chile", href: "https://startupchile.org/", logo: "/press/startupchile-logo.png" },
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
          <div className="press-videos">
            <div className="press-video">
              <iframe
                src="https://www.youtube.com/embed/WIXmaxCrfJA"
                title="Reportaje MUUD — 24 Horas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="press-video">
              <iframe
                src="https://www.youtube.com/embed/g8ACl2Svelo"
                title="Reportaje MUUD — Marca Chile"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="press-logos">
            {PRESS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="press-logo">
                <Image src={p.logo} alt={p.name} width={120} height={48} style={{ objectFit: "contain" }} />
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
