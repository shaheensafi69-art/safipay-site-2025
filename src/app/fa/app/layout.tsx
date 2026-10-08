import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پیش‌ثبت‌نام رسمی اپلیکیشن صافی‌پی در گوگل پلی — SafiPay Google Play',
  description: 'نسخه رسمی اپلیکیشن موبایل نئوبانک صافی‌پی (SafiPay) در گوگل پلی استور در وضعیت پیش‌ثبت‌نام (Pre-register) قرار گرفت. افتتاح حساب IBAN اروپایی، ویزا کارت مجازی و تراکنش‌های آنی SEPA در اندروید.',
  keywords: [
    'پیش ثبت نام اپلیکیشن صافی پی',
    'اپلیکیشن صافی پی در گوگل پلی',
    'net.safipay.app',
    'دانلود اپلیکیشن SafiPay',
    'SafiPay Google Play Pre-register',
    'اپلیکیشن نئوبانک صافی پی',
    'ویزا کارت اندروید',
    'حساب بانکی اروپایی در موبایل',
    'SafiPay Android App'
  ],
  alternates: {
    canonical: 'https://www.safipay.net/fa/app',
  },
  other: {
    'google-play-app': 'app-id=net.safipay.app',
  },
  openGraph: {
    title: 'پیش‌ثبت‌نام رسمی اپلیکیشن صافی‌پی در گوگل پلی استور (Google Play)',
    description: 'هم‌اکنون در گوگل پلی پیش‌ثبت‌نام کنید تا اولین کاربری باشید که از حساب‌های بانکی اروپایی، ویزا کارت مجازی و پرداخت‌های بین‌المللی در موبایل بهره‌مند می‌شوید.',
    url: 'https://www.safipay.net/fa/app',
    siteName: 'SafiPay',
    images: [
      {
        url: 'https://www.safipay.net/dashboard-safipay.jpg',
        width: 1200,
        height: 630,
        alt: 'SafiPay Mobile App Pre-Register',
      }
    ],
  },
};

export default function AppFaLayout({ children }: { children: React.ReactNode }) {
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MobileApplication'],
    name: 'SafiPay: Neobank & Global Finance',
    alternateName: ['صافی‌پی', 'اپلیکیشن صافی پی', 'SafiPay App'],
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

