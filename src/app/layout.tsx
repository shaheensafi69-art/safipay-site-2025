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
    'SafiPay', 'صفی‌پی', 'Digital Banking', 'European IBAN', 'Virtual Visa Card',
    'SEPA Instant', 'Global FinTech', 'Shaheen Safi', 'Border Free Banking',
    'International Money Transfer', 'eSIM Travel Data', 'Financial Inclusion'
  ],
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
        "@type": "ItemList",
        "name": "SafiPay Official Editorial & Publications",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": "https://www.safipay.net/en/blog/safipay-system-security" },
          { "@type": "ListItem", "position": 2, "url": "https://www.safipay.net/en/blog/visa-card-guide" },
          { "@type": "ListItem", "position": 3, "url": "https://www.safipay.net/en/blog/iban-account-benefits" },
          { "@type": "ListItem", "position": 4, "url": "https://www.safipay.net/en/blog/about-shaheen-safi" },
          { "@type": "ListItem", "position": 5, "url": "https://www.safipay.net/en/blog/esim-travel-technology" },
          { "@type": "ListItem", "position": 6, "url": "https://www.safipay.net/en/blog/future-of-banking" },
          { "@type": "ListItem", "position": 7, "url": "https://www.safipay.net/en/blog/what-is-safipay" }
        ]
      }
    ]
  };

  return (
    <html lang={currentLang} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE" />
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