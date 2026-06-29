// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/admin/login'], // Keeps crawlers completely away from the admin module
    },
    sitemap: 'https://www.sinhabmh.com/sitemap.xml', // Replace with your production URL
  };
}