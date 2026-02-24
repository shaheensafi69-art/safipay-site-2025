'use client'; // این خط را اگر در فایل داری بگذار، اگر نداری و به عنوان Layout اصلی است حذف کن
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// اگر این فایل layout.tsx اصلی است، metadata باید در یک فایل Server Component باشد
// اما برای حل مشکل فعلی، روی ساختار body تمرکز می‌کنیم

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.safipay.net/#organization",
    "name": "SafiPay",
    "url": "https://www.safipay.net",
    "logo": "https://www.safipay.net/logo.png",
    "description": "SafiPay provides a modern international digital banking ecosystem for Afghans worldwide.",
    "founder": { "@id": "https://www.safipay.net/founders/shaheen-safi/#person" }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.safipay.net/founders/shaheen-safi/#person",
    "name": "Shaheen Safi",
    "jobTitle": "Founder & CEO of SafiPay",
    "image": "https://www.safipay.net/shaheen.jpeg",
    "url": "https://www.safipay.net/founders/shaheen-safi"
  };

  return (
    <html lang="fa" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE" />
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