// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafiPay - بانک دیجیتال بین‌المللی افغان‌ها',
  description: 'حساب چندارزی • کارت ویزا • انتقال سریع و ارزان پول • اپلیکیشن امن',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} antialiased bg-gray-950 text-white`}>
        <Header />
        <main className="pt-20 md:pt-24 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-amber-900/30 py-12 text-center text-gray-400 text-sm">
          <div className="container mx-auto px-6">
            <p>© ۲۰۲۵–۲۰۲۶ SafiPay – تمامی حقوق محفوظ است</p>
          </div>
        </footer>
      </body>
    </html>
  );
}