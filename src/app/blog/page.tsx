import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NewsletterSection } from "@/components/SharedSections";
import { BLOG_POSTS, formatDate } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — MUUD | Opinión sobre educación y convivencia escolar",
  description:
    "Artículos de opinión sobre violencia escolar, salud mental, políticas educativas y convivencia en Chile. Por Rodrigo Torres, cofundador de MUUD.",
  openGraph: {
    title: "Blog — MUUD",
    description: "Opinión sobre educación, convivencia escolar y salud mental en Chile.",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

const NAV_LINKS = [
  { href: "#articulos", label: "Artículos" },
  { href: "#contacto", label: "Contacto" },
];

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Nav sectionLinks={NAV_LINKS} />

      <main id="top">
        <section className="hero hero-blog">
          <div className="wrap">
            <span className="eyebrow reveal">Blog MUUD</span>
            <h1 className="reveal" data-d="1">
              Opinión y análisis sobre <span className="hl">educación</span> en Chile
            </h1>
            <p className="hero-lede reveal" data-d="2">
              Artículos de Rodrigo Torres, cofundador de MUUD, sobre convivencia escolar, violencia, salud mental y políticas educativas.
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
                  {featured.tags.map((t) => (
                    <span key={t} className="blog-tag">{t}</span>
                  ))}
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.summary}</p>
                <div className="blog-meta">
                  <span>Rodrigo Torres</span>
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
                      {post.tags.slice(0, 2).map((t) => (
                        <span key={t} className="blog-tag">{t}</span>
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
