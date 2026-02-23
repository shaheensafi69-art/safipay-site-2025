import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SafiPay - Digital Bank for Afghans',
  description: 'SafiPay is the first international digital banking system for Afghans. Breaking borders, building the future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ۱. اسکیمای سازمان (SafiPay)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafiPay",
    "url": "https://safipay.com",
    "logo": "https://safipay.com/logo.png",
    "description": "SafiPay provides a modern international digital banking ecosystem for Afghans worldwide.",
    "founder": {
      "@id": "https://safipay.com/#person"
    },
    "sameAs": [
      "https://www.linkedin.com/company/safipay",
      "https://twitter.com/SafiPay",
      "https://www.instagram.com/safipayofficial",
      "https://www.crunchbase.com/organization/safipay"
    ]
  };

  // ۲. اسکیمای شخص (Shaheen Safi) - با اصلاح نام فایل عکس
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://safipay.com/#person",
    "name": "Shaheen Safi",
    "alternateName": "شاهین صافی",
    "birthDate": "2003-04-02",
    "birthPlace": {
      "@type": "Place",
      "name": "Kapisa, Afghanistan"
    },
    "jobTitle": "CEO & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "SafiPay"
    },
    "url": "https://safipay.com/founders/shaheen-safi",
    "image": "https://safipay.com/shaheen.jpeg", // اصلاح شده به نام فایل شما
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Kardan University"
    },
    "knowsAbout": ["FinTech", "Digital Banking", "Blockchain", "Trading", "Network Security"],
    "address": [
      { "@type": "PostalAddress", "addressLocality": "Kabul" },
      { "@type": "PostalAddress", "addressLocality": "Dubai" },
      { "@type": "PostalAddress", "addressLocality": "Paris" }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/shaheensafi",
      "https://twitter.com/ShaheenSafi_",
      "https://www.instagram.com/safipayofficial"
    ]
  };

  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([organizationSchema, personSchema]) 
          }}
        />
      </head>

      <body className={`${inter.className} antialiased bg-gray-950 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}