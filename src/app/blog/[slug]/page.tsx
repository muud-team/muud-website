import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NewsletterSection } from "@/components/SharedSections";
import { BLOG_POSTS, getPostBySlug, formatDate } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog MUUD`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, width: 1280, height: 720 }],
      type: "article",
      publishedTime: post.date,
      authors: ["Rodrigo Torres"],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((_, i) => i !== idx).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: "Rodrigo Torres" },
    publisher: { "@type": "Organization", name: "MUUD" },
    description: post.summary,
  };

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav sectionLinks={[{ href: "/blog", label: "Volver al blog" }]} />

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
                {post.tags.map((t) => (
                  <span key={t} className="blog-tag">{t}</span>
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
                  <strong>Rodrigo Torres</strong>
                  <span>Cofundador MUUD</span>
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
              <Link href="/blog" className="btn btn-ghost">← Volver al blog</Link>
              <a href="https://calendar.app.google/eM6oThKNK9euEWmg7" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Agendar demo</a>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="sec sec-cream">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Sigue leyendo</span>
              <h2>Otros artículos</h2>
            </div>
            <div className="blog-grid">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-card reveal" data-d={String(i + 1)}>
                  <div className="blog-card-img">
                    <Image src={r.image} alt={r.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, 33vw" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-tags">
                      {r.tags.slice(0, 2).map((t) => (
                        <span key={t} className="blog-tag">{t}</span>
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
