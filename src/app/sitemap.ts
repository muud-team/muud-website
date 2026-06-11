import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { BLOG_POSTS } from '@/data/blog-posts';

const baseUrl = 'https://muud.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', 'colegios', 'empresas', 'blog'];

  // Generate main page entries for all locales
  const mainPages = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route ? `/${route}` : ''}`,
      lastModified: new Date(),
      changeFrequency: route === 'blog' ? 'weekly' : 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route ? `/${route}` : ''}`])
        ),
      },
    }))
  );

  // Generate blog post entries for all locales
  const blogPosts = BLOG_POSTS.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}/blog/${post.slug}`])
        ),
      },
    }))
  );

  return [...mainPages, ...blogPosts];
}
