import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.safipay.com'; // آدرس اصلی سایت خودت را اینجا بنویس
  const languages = ['en', 'fa', 'ps', 'fr'];
  const routes = ['', '/invest', '/about', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // تولید لینک‌ها برای تمام زبان‌ها و مسیرها
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}