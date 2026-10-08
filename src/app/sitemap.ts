import { MetadataRoute } from 'next';

const locales = ['fa', 'en', 'ps', 'ar', 'de', 'fr', 'tr', 'ru'];

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/partners', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/app', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.6 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.6 },
  { path: '/blog', changeFrequency: 'daily' as const, priority: 0.95 },
  // Blog articles
  { path: '/blog/safipay-system-security', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/visa-card-guide', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/iban-account-benefits', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/about-shaheen-safi', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/blog/esim-travel-technology', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/blog/future-of-banking', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/blog/what-is-safipay', changeFrequency: 'weekly' as const, priority: 0.85 },
  { path: '/blog/sepa-regulatory-framework', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/fca-compliance-standards', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/global-ecosystem-governance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/aml-fatf-regulatory-compliance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/psd3-open-banking-compliance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/blog/institutional-compliance-vision', changeFrequency: 'weekly' as const, priority: 0.9 },
  // Executive Leadership Profiles
  { path: '/founder/shaheen-safi', changeFrequency: 'monthly' as const, priority: 0.95 },
  { path: '/founder/sahel-salem', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/founder/mujtaba-rahmani', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/founder/shirin-gol-ahmadi', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/founder/mobin-hassani', changeFrequency: 'monthly' as const, priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.safipay.net';
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [
    // Root default redirect
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return entries;
}