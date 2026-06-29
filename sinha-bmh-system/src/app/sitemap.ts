// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.sinhabmh.com"; // Replace with your production domain

  // 1. Static Public Pages
  const routes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/products',
    '/services',
    '/contact',
    '/careers',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // Next.js accepts a Date object directly here
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page gets highest priority
  }));

  // 2. Optional: Dynamic Product Pages
  // If you fetch products/machinery dynamically from an API later, you can map them here:
  /*
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const products = await res.json();
    
    const productRoutes = products.map((product: any) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    
    return [...routes, ...productRoutes];
  } catch (error) {
    console.error("Failed to fetch dynamic products for sitemap:", error);
    return routes;
  }
  */

  return routes;
}