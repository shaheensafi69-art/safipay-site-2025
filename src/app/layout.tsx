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
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        {/* متا تگ تأیید گوگل */}
        <meta
          name="google-site-verification"
          content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${inter.className} antialiased bg-gray-950 text-white min-h-screen flex flex-col`}>
        {/* هدر سایت */}
        <Header />

        {/* محتوای اصلی صفحات */}
        <main className="flex-grow">
          {children}
        </main>

        {/* فوتری که با هم ساختیم اینجا فراخوانی می‌شود */}
        <Footer />
      </body>
    </html>
  );
}