// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // تگ html و body در اینجا حذف شده تا تداخلی ایجاد نشود
  return (
    <main className={`${inter.className} antialiased bg-gray-950 text-white min-h-screen`}>
      <Header />
      <div className="pt-20 md:pt-24">
        {children}
      </div>
      <footer className="border-t border-amber-900/30 py-12 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-6">
          <p>© ۲۰۲۵–۲۰۲۶ SafiPay – تمامی حقوق محفوظ است</p>
        </div>
      </footer>
    </main>
  );
}