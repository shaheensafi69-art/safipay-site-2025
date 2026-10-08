import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

// تنظیمات متادیتا در سمت سرور
// تنظیمات متادیتا در سمت سرور
export const metadata = {
  metadataBase: new URL('https://www.safipay.net'),
  title: {
    default: 'SafiPay — Global Digital Banking & European Financial Systems',
    template: '%s | SafiPay'
  },
  description: 'SafiPay is a premier international digital banking ecosystem providing European IBAN accounts, borderless virtual Visa cards, instant SEPA transfers, and global eSIM connectivity.',
  keywords: [
    'SafiPay', 'صافی پی', 'صفی‌پی', 'صافي پي', 'صافي بي', 'СафиПей', 'Safi Pay',
    'SafiPay Neobank', 'SafiPay App', 'net.safipay.app', 'Digital Banking',
    'European IBAN', 'Virtual Visa Card', 'SEPA Instant', 'Global FinTech',
    'Shaheen Safi', 'شاهین صافی', 'Border Free Banking', 'International Money Transfer',
    'eSIM Travel Data', 'Financial Inclusion', 'نئوبانک بین‌المللی'
  ],
  alternates: {
    canonical: 'https://www.safipay.net',
    languages: {
      'fa': 'https://www.safipay.net/fa',
      'en': 'https://www.safipay.net/en',
      'ps': 'https://www.safipay.net/ps',
      'ar': 'https://www.safipay.net/ar',
      'de': 'https://www.safipay.net/de',
      'fr': 'https://www.safipay.net/fr',
      'tr': 'https://www.safipay.net/tr',
      'ru': 'https://www.safipay.net/ru',
      'x-default': 'https://www.safipay.net/en',
    },
  },
  authors: [{ name: 'Shaheen Safi', url: 'https://www.safipay.net/en/founder/shaheen-safi' }],
  creator: 'Shaheen Safi',
  publisher: 'SafiPay',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fa_IR', 'ps_AF', 'ar_AE', 'de_DE', 'fr_FR', 'tr_TR', 'ru_RU'],
    url: 'https://www.safipay.net',
    siteName: 'SafiPay',
    title: 'SafiPay — Global Digital Banking Ecosystem',
    description: 'Premier international digital banking system worldwide. European IBANs, Virtual Visa Cards, and Boundless Financial Freedom.',
    images: [
      {
        url: 'https://www.safipay.net/banner1.png',
        width: 1200,
        height: 630,
        alt: 'SafiPay Global Digital Banking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafiPay — Global Digital Banking Ecosystem',
    description: 'Premier international digital banking system worldwide. European IBANs, Virtual Visa Cards, and Boundless Financial Freedom.',
    images: ['https://www.safipay.net/banner1.png'],
    creator: '@safi_sahib01',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any; 
}) {
  // استخراج پارامترها به صورت Async
  const resolvedParams = await params;
  const currentLang = resolvedParams?.locale || "en";

  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.safipay.net/#website",
        "url": "https://www.safipay.net",
        "name": "SafiPay",
        "description": "Global Digital Banking Ecosystem and European Financial Services",
        "publisher": { "@id": "https://www.safipay.net/#organization" },
        "inLanguage": ["en", "fa", "ps", "ar", "de", "fr", "tr", "ru"]
      },
      {
        "@type": ["Organization", "FinancialService"],
        "@id": "https://www.safipay.net/#organization",
        "name": "SafiPay",
        "url": "https://www.safipay.net",
        "email": "contact@safipay.net",
        "telephone": "+447476620282",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.safipay.net/logo.png"
        },
        "sameAs": [
          "https://play.google.com/store/apps/details?id=net.safipay.app",
          "https://www.wikidata.org/wiki/Q139049281",
          "https://www.facebook.com/share/16XvE4V4fF/",
          "https://www.instagram.com/safipay_official",
          "https://wa.me/+19342032497",
          "https://x.com/safipay"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "contact@safipay.net",
            "telephone": "+447476620282",
            "availableLanguage": ["English", "Persian", "Pashto", "Arabic", "German", "French", "Turkish", "Russian"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "General Inquiries",
            "email": "info@safipay.net",
            "telephone": "+447476620282"
          }
        ],
        "founder": { "@id": "https://www.safipay.net/founder/shaheen-safi/#person" },
        "founders": [
          { "@id": "https://www.safipay.net/founder/shaheen-safi/#person" },
          { "@id": "https://www.safipay.net/founder/sahel-salem/#person" },
          { "@id": "https://www.safipay.net/founder/mujtaba-rahmani/#person" },
          { "@id": "https://www.safipay.net/founder/shirin-gol-ahmadi/#person" },
          { "@id": "https://www.safipay.net/founder/mobin-hassani/#person" }
        ],
        "currenciesAccepted": "EUR, USD, GBP",
        "paymentAccepted": "SEPA Instant, Visa, Mastercard, Crypto"
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/shaheen-safi/#person",
        "name": "Shaheen Safi",
        "jobTitle": "Director & Founder of SafiPay",
        "description": "Tech entrepreneur, computer specialist, and founder of SafiPay global digital banking system.",
        "image": "https://www.safipay.net/shaheen.jpeg",
        "email": "shaheen@safipay.net",
        "worksFor": { "@id": "https://www.safipay.net/#organization" },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q138427366",
          "https://www.linkedin.com/in/shaheen-safi-b73a30299",
          "https://www.instagram.com/top_g_official1",
          "https://www.facebook.com/share/1H1vuV1i9Z/",
          "https://x.com/safi_sahib01",
          "https://www.tiktok.com/@safi_sahib6",
          "https://wa.me/+19342032497"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/sahel-salem/#person",
        "name": "Sahel Salem",
        "jobTitle": "CEO & European Banking Relations",
        "description": "Chief Executive Officer directing SafiPay European banking integration and regulatory relations.",
        "image": "https://www.safipay.net/sahel.jpeg",
        "email": "sahelsalem@safipay.net",
        "worksFor": { "@id": "https://www.safipay.net/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/mujtaba-rahmani/#person",
        "name": "Mujtaba Rahmani",
        "jobTitle": "Co-Founder & Technical Operations Manager",
        "description": "Head of Technical Security and Operations architecture at SafiPay.",
        "image": "https://www.safipay.net/mujtaba.jpeg",
        "email": "mujtaba@safipay.net",
        "worksFor": { "@id": "https://www.safipay.net/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/shirin-gol-ahmadi/#person",
        "name": "Shirin Gol Ahmadi",
        "jobTitle": "All Ecosystem Manager",
        "description": "Manager of cross-functional ecosystem coordination, growth, and user operations at SafiPay.",
        "image": "https://www.safipay.net/shirin.jpeg",
        "email": "shirinahmadi@safipay.net",
        "worksFor": { "@id": "https://www.safipay.net/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/mobin-hassani/#person",
        "name": "Mobin Hassani",
        "jobTitle": "Lead Developer & System Architect",
        "description": "Lead software engineer and core system architect at SafiPay.",
        "image": "https://www.safipay.net/mobin-hassani.jpg",
        "email": "mobin@safipay.net",
        "worksFor": { "@id": "https://www.safipay.net/#organization" }
      },
      {
        "@type": ["MobileApplication", "SoftwareApplication"],
        "@id": "https://www.safipay.net/#app",
        "name": "SafiPay: Digital Neobank",
        "alternateName": ["SafiPay App", "اپلیکیشن صافی‌پی", "صافی پی", "SafiPay Mobile Banking"],
        "operatingSystem": "Android",
        "applicationCategory": "FinanceApplication",
        "applicationSubCategory": "Digital Banking & Payments",
        "installUrl": "https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB",
        "downloadUrl": "https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB",
        "url": "https://play.google.com/store/apps/details?id=net.safipay.app&hl=en_GB",
        "publisher": { "@id": "https://www.safipay.net/#organization" },
        "author": { "@id": "https://www.safipay.net/#organization" },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder"
        },
        "description": "Official SafiPay Android App. Open European IBAN accounts, issue instant virtual Visa cards, and execute SEPA transfers with zero borders. Pre-registration live on Google Play.",
        "featureList": [
          "European IBAN Account",
          "Instant Virtual Visa Card",
          "SEPA Instant EUR Transfers",
          "Global eSIM Internet",
          "Biometric 2FA Security"
        ],
        "releaseNotes": "Official Pre-Registration open on Google Play Store."
      },
      {
        "@type": "ItemList",
        "name": "SafiPay Official Editorial & Publications",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": "https://www.safipay.net/en/blog/safipay-system-security" },
          { "@type": "ListItem", "position": 2, "url": "https://www.safipay.net/en/blog/visa-card-guide" },
          { "@type": "ListItem", "position": 3, "url": "https://www.safipay.net/en/blog/iban-account-benefits" },
          { "@type": "ListItem", "position": 4, "url": "https://www.safipay.net/en/blog/about-shaheen-safi" },
          { "@type": "ListItem", "position": 5, "url": "https://www.safipay.net/en/blog/esim-travel-technology" },
          { "@type": "ListItem", "position": 6, "url": "https://www.safipay.net/en/blog/future-of-banking" },
          { "@type": "ListItem", "position": 7, "url": "https://www.safipay.net/en/blog/what-is-safipay" },
          { "@type": "ListItem", "position": 8, "url": "https://www.safipay.net/en/blog/sepa-regulatory-framework" },
          { "@type": "ListItem", "position": 9, "url": "https://www.safipay.net/en/blog/fca-compliance-standards" },
          { "@type": "ListItem", "position": 10, "url": "https://www.safipay.net/en/blog/global-ecosystem-governance" },
          { "@type": "ListItem", "position": 11, "url": "https://www.safipay.net/en/blog/aml-fatf-regulatory-compliance" },
          { "@type": "ListItem", "position": 12, "url": "https://www.safipay.net/en/blog/psd3-open-banking-compliance" },
          { "@type": "ListItem", "position": 13, "url": "https://www.safipay.net/en/blog/institutional-compliance-vision" }
        ]
      }
    ]
  };

  return (
    <html lang={currentLang} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE" />
        <meta name="google-play-app" content="app-id=net.safipay.app" />
        <meta name="application-name" content="SafiPay" />
        <meta name="apple-mobile-web-app-title" content="SafiPay" />
        <meta name="theme-color" content="#020202" />
        
        {/* GEO & International Targeting */}
        <meta name="geo.region" content="GB;FR;DE;TR;AE;AF" />
        <meta name="geo.placename" content="London, Paris, Frankfurt, Istanbul, Dubai, Kabul" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="target" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        <link rel="alternate" href="android-app://net.safipay.app/https/www.safipay.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
        />
      </head>
      <body 
        className={`${inter.className} antialiased bg-[#020202] text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}