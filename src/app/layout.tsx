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
  // ۱. اسکیمای سازمان (SafiPay) - بهینه شده برای دامنه .net
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.safipay.net/#organization",
    "name": "SafiPay",
    "url": "https://www.safipay.net",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.safipay.net/logo.png"
    },
    "description": "SafiPay provides a modern international digital banking ecosystem for Afghans worldwide.",
    "founder": { "@id": "https://www.safipay.net/founders/shaheen-safi/#person" },
    "sameAs": [
      "https://www.linkedin.com/company/safipay",
      "https://twitter.com/SafiPay", // اگر اکانت ایکس دارید جایگزین کنید
      "https://www.instagram.com/safipayofficial"
    ]
  };

  // ۲. اسکیمای شخص (Shaheen Safi) - با جزئیات هویتی دقیق برای گوگل نالج
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.safipay.net/founders/shaheen-safi/#person",
    "name": "Shaheen Safi",
    "alternateName": ["شاهین ساپی", "Shaheen Safi Sahib"],
    "givenName": "Shaheen",
    "familyName": "Safi",
    "gender": "Male",
    "birthDate": "2003-04-02",
    "jobTitle": "Founder & CEO of SafiPay",
    "description": "Shaheen Safi is an IT expert and entrepreneur, founder of SafiPay, focused on digital banking and FinTech solutions.",
    "image": "https://www.safipay.net/shaheen.jpeg",
    "url": "https://www.safipay.net/founders/shaheen-safi",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": ["Istanbul Technical University", "ITU"]
    },
    "knowsAbout": ["FinTech", "Digital Banking", "Software Architecture", "Cybersecurity", "Blockchain"],
    "sameAs": [
      "https://www.linkedin.com/in/shaheen-safi-b73a30299",
      "https://www.instagram.com/top_g_official1",
      "https://www.facebook.com/share/1H1vuV1i9Z/",
      "https://www.tiktok.com/@safi_sahib6",
      "https://wa.me/19342032497"
    ]
  };

  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        {/* تاییدیه سرچ کنسول شما */}
        <meta
          name="google-site-verification"
          content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE"
        />
        
        {/* کدهای اسکیما برای گوگل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([organizationSchema, personSchema]) 
          }}
        />
      </head>

      <body className={`${inter.className} antialiased bg-[#020202] text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}