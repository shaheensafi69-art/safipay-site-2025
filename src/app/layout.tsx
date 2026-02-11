// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // می‌تونی عنوان و توضیحات کلی سایت رو اینجا هم بذاری (اختیاری)
  title: 'SafiPay - Digital Bank',
  description: 'بانک دیجیتال، پرداخت آسان و امن',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* متا تگ تأیید گوگل - همین خط رو اضافه کردیم */}
        <meta
          name="google-site-verification"
          content="eC_86AguztStKds0JEwRTOwjHA7HeCY-FKprl9zXjRE"
        />

        {/* این خطوط معمولاً به صورت خودکار توسط Next.js مدیریت می‌شن */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${inter.className} antialiased bg-gray-950 text-white min-h-screen`}>
        <Header />
        <div className="pt-20 md:pt-24">
          {children}
        </div>

        <footer className="border-t border-amber-900/30 py-12 text-center text-gray-400 text-sm">
          <div className="container mx-auto px-6">
            <p>© ۲۰۲۵–۲۰۲۶ SafiPay – تمامی حقوق محفوظ است</p>
          </div>
        </footer>
      </body>
    </html>
  );
}