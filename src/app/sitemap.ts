import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n/config';
import { BLOG_POSTS } from '@/data/blog-posts';
import { localizedUrl } from '@/lib/seo';

/**
 * Bumped by hand when marketing copy changes. Using `new Date()` here would
 * tell crawlers every page changed on every deploy, which devalues the signal.
 */
const CONTENT_LAST_MODIFIED = '2026-08-24';

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const ROUTES: Route[] = [
  { path: '', changeFrequency: 'monthly', priority: 1.0 },
  { path: 'colegios', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'empresas', changeFrequency: 'monthly', priority: 0.9 },
  { path: 'blog', changeFrequency: 'weekly', priority: 0.7 },
];

function languagesFor(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, localizedUrl(l, path)])),
    'x-default': localizedUrl(defaultLocale, path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = ROUTES.flatMap((route) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified: new Date(CONTENT_LAST_MODIFIED),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: languagesFor(route.path) },
    }))
  );

  const blogPosts = BLOG_POSTS.flatMap((post) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, `blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      alternates: { languages: languagesFor(`blog/${post.slug}`) },
    }))
  );

  return [...mainPages, ...blogPosts];
}
