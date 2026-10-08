import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Register SafiPay Official App on Google Play — Android Neobank',
  description: 'The official SafiPay mobile neobank application is now live for Pre-Registration on Google Play Store. Access dedicated European IBANs, virtual Visa cards, and instant SEPA transfers.',
  keywords: [
    'SafiPay app Google Play',
    'net.safipay.app',
    'SafiPay pre-register',
    'download SafiPay Android app',
    'European IBAN mobile banking',
    'Virtual Visa card app',
    'SafiPay Mobile Neobank'
  ],
  alternates: {
    canonical: 'https://www.safipay.net/en/app',
  },
  other: {
    'google-play-app': 'app-id=net.safipay.app',
  },
  openGraph: {
    title: 'Pre-Register SafiPay Official App on Google Play Store',
    description: 'Pre-register now on Google Play to be the first to experience borderless European digital banking, virtual Visa cards, and global transfers on Android.',
    url: 'https://www.safipay.net/en/app',
    siteName: 'SafiPay',
    images: [
      {
        url: 'https://www.safipay.net/dashboard-safipay.jpg',
        width: 1200,
        height: 630,
        alt: 'SafiPay Mobile App Pre-Register on Google Play',
      }
    ],
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MobileApplication'],
    name: 'SafiPay: Neobank & Global Finance',
    alternateName: ['SafiPay App', 'SafiPay Android App', 'SafiPay'],
    operatingSystem: 'Android',
    applicationCategory: 'FinanceApplication',
    applicationSubCategory: 'Neobank',
    installUrl: 'https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB',
    downloadUrl: 'https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB',
    url: 'https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafiPay',
      url: 'https://www.safipay.net',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {children}
    </>
  );
}

