import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NewsletterSection } from "@/components/SharedSections";
import JsonLd from "@/components/JsonLd";
import { alternatesFor, localizedUrl, ogLocales } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { BLOG_POSTS, getPostBySlug, formatDate } from "@/data/blog-posts";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  // Generate static params for all posts across all locales
  const locales = ['es', 'en', 'pt'];
  const params: { locale: string; slug: string }[] = [];

  locales.forEach(locale => {
    BLOG_POSTS.forEach(post => {
      params.push({ locale, slug: post.slug });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: "Rodrigo Torres" }],
    openGraph: {
      type: "article",
      siteName: "MUUD",
      title: post.title,
      description: post.summary,
      url: localizedUrl(locale, `blog/${post.slug}`),
      images: [{ url: post.image, width: 1280, height: 720, alt: post.title }],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Rodrigo Torres"],
      tags: post.tags,
      section: post.tags[0],
      ...ogLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
    alternates: alternatesFor(locale, `blog/${post.slug}`),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations('blog');
  const tNav = await getTranslations('blog.navLinks');
  const tMeta = await getTranslations('blog.meta');

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((_, i) => i !== idx).slice(0, 3);

  const tSchema = await getTranslations('metadata.schema');

  const breadcrumb = breadcrumbSchema(locale, tSchema('breadcrumbHome'), [
    { name: 'Blog', path: 'blog' },
    { name: post.title, path: `blog/${post.slug}` },
  ]);

  const jsonLd = graph(
    webPageSchema({
      locale,
      path: `blog/${post.slug}`,
      name: post.title,
      description: post.summary,
      breadcrumbId: breadcrumb['@id'],
    }),
    breadcrumb,
    articleSchema({
      locale,
      slug: post.slug,
      headline: post.title,
      description: post.summary,
      image: post.image,
      datePublished: post.date,
      tags: post.tags,
      wordCount: post.content.trim().split(/\s+/).length,
    })
  );

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav sectionLinks={[{ href: "/blog", label: t('backToBlog') }]} />

      <main id="top">
        <article className="blog-post">
          <div className="blog-post-hero">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
            <div className="blog-post-hero-overlay" />
          </div>

          <div className="wrap blog-post-wrap">
            <div className="blog-post-header reveal">
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
              <h1>{post.title}</h1>
              <div className="blog-post-byline">
                <Image
                  src="https://cdn.prod.website-files.com/64836681fe716f7bceb62090/648c7bbb3fa58727d47c3b42_character-muud.png"
                  alt="Rodrigo Torres"
                  width={44}
                  height={44}
                  style={{ borderRadius: "50%", objectFit: "cover", background: "var(--cream)" }}
                />
                <div>
                  <strong>{tMeta('author')}</strong>
                  <span>{t('authorRole')}</span>
                </div>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>

            <div className="blog-post-body reveal" data-d="1">
              {paragraphs.map((p, i) => {
                if (p.startsWith("**") && p.endsWith("**")) {
                  return <h2 key={i}>{p.replace(/\*\*/g, "")}</h2>;
                }
                const html = p
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/— /g, "— ")
                  .replace(/\n/g, "<br/>");
                return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
              })}
            </div>

            <div className="blog-post-footer reveal">
              <Link href="/blog" className="btn btn-ghost">← {t('backToBlog')}</Link>
              <a href="https://calendar.app.google/eM6oThKNK9euEWmg7" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                {t('scheduleDemo')}
              </a>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">{t('keepReading')}</span>
              <h2>{t('otherArticles')}</h2>
            </div>
            <div className="blog-grid">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-card reveal" data-d={String(i + 1)}>
                  <div className="blog-card-img">
                    <Image src={r.image} alt={r.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, 33vw" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-tags">
                      {r.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{r.title}</h3>
                    <div className="blog-meta"><time dateTime={r.date}>{formatDate(r.date)}</time></div>
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
