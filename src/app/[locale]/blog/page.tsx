import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NewsletterSection } from "@/components/SharedSections";
import { BLOG_POSTS, formatDate } from "@/data/blog-posts";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.blog' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/blog",
    },
    alternates: { canonical: "/blog" },
  };
}

export default function BlogPage() {
  const t = useTranslations('blog');
  const tNav = useTranslations('blog.navLinks');
  const tMeta = useTranslations('blog.meta');

  const NAV_LINKS = [
    { href: "#articulos", label: tNav('articles') },
    { href: "#contacto", label: tNav('contact') },
  ];

  const [featured, ...rest] = BLOG_POSTS;

  const renderWithHighlight = (text: string) => {
    const html = text
      .replace('<highlight>', '<span class="hl">')
      .replace('</highlight>', '</span>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <Nav sectionLinks={NAV_LINKS} />

      <main id="top">
        <section className="hero hero-blog">
          <div className="wrap">
            <span className="eyebrow reveal">{t('hero.eyebrow')}</span>
            <h1 className="reveal" data-d="1">
              {renderWithHighlight(t.raw('hero.title') as string)}
            </h1>
            <p className="hero-lede reveal" data-d="2">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        <section id="articulos" className="sec sec-paper">
          <div className="wrap">
            {/* Featured post */}
            <Link href={`/blog/${featured.slug}`} className="blog-featured reveal">
              <div className="blog-featured-img">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 860px) 100vw, 55vw"
                />
              </div>
              <div className="blog-featured-copy">
                <div className="blog-tags">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.summary}</p>
                <div className="blog-meta">
                  <span>{tMeta('author')}</span>
                  <span className="dot" />
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </div>
              </div>
            </Link>

            {/* Grid */}
            <div className="blog-grid">
              {rest.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card reveal"
                  data-d={String((i % 3) + 1)}
                >
                  <div className="blog-card-img">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 33vw"
                    />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-tags">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <div className="blog-meta">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer variant="general" />
    </>
  );
}
