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
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.safipay.net/founders/shaheen-safi/#person",
    "name": "Shaheen Safi",
    "jobTitle": "Founder & CEO of SafiPay"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([organizationSchema, personSchema]) 
          }}
        />
      </head>
      <body 
        className={`${inter.className} antialiased bg-[#020202] text-white min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* هدر در اینجا قرار می‌گیرد تا در همه صفحات باشد */}
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* فوتر در اینجا قرار می‌گیرد تا در همه صفحات باشد */}
        <Footer />
      </body>
    </html>
  );
}