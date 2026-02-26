import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'SafiPay - Digital Bank for Afghans',
    template: '%s | SafiPay'
  },
  description: 'SafiPay is the first international digital banking system for Afghans. Breaking borders, building the future.',
};

// استفاده از any برای params تا ورسل دیگر به تایپ‌ها گیر ندهد
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any; 
}) {
  // در اکثر پروژه‌ها، زبان در آدرس است؛ اگر params خالی بود "en" در نظر می‌گیریم
  const currentLang = params?.locale || "en";

  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.safipay.net/#organization",
        "name": "SafiPay",
        "url": "https://www.safipay.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.safipay.net/logo.png"
        },
        "sameAs": [
          "https://www.facebook.com/share/16XvE4V4fF/",
          "https://www.instagram.com/safipay_official",
          "https://wa.me/+19342032497"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.safipay.net/founder/shaheen-safi/#person",
        "name": "Shaheen Safi",
        "jobTitle": "Founder & CEO",
        "description": "Afghan entrepreneur and founder of SafiPay digital banking system.",
        "image": "https://www.safipay.net/shaheen.jpeg",
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
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(unifiedSchema) 
          }}
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
      </body>
    </html>
  );
}