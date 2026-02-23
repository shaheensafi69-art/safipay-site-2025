import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.safipay.net';
  
  // لیست تمام صفحات مهم سایت
  const routes = [
    '',                       // صفحه اصلی
    '/founders/shaheen-safi', // صفحه شما
    '/founders/mujtaba-rahmani',     // نام عضو دوم را اینجا اصلاح کن
    '/founders/sahel-salem',     // نام عضو سوم را اینجا اصلاح کن
    '/about',                 // درباره ما
    '/contact',               // تماس با ما
    '/services',              // خدمات صفی‌پی
    '/en',                    // نسخه انگلیسی اصلی
    '/en/founder/shaheen-safi', // صفحه انگلیسی شما
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily', // به گوگل می‌گوید هر روز چک کند
    priority: route === '' ? 1.0 : 0.8, // اولویت ۱ برای صفحه اصلی
  }));
}