import { MetadataRoute } from 'next';
import { CERTIFIED_SERVICES, PRODUCTS_CATALOG, DARK_MAFIA_BUILDS, BLOG_POSTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://darkmafiacustoms.com';

  const staticRoutes = [
    '',
    '/shop',
    '/services',
    '/build-your-ride',
    '/builds',
    '/customization-request',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = CERTIFIED_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const productRoutes = PRODUCTS_CATALOG.map((p) => ({
    url: `${baseUrl}/product/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const buildRoutes = DARK_MAFIA_BUILDS.map((b) => ({
    url: `${baseUrl}/builds/${b.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...buildRoutes, ...blogRoutes];
}
