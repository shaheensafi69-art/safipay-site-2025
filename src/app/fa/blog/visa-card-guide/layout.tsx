import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'راهنمای جامع ویزا کارت مجازی و فیزیکی سافی‌پی: پرداخت‌های جهانی بدون مرز',
  description: 'آموزش کامل نحوه دریافت و استفاده از ویزا کارت‌های SafiPay: صدور آنی ۶۰ ثانیه‌ای، پروتکل امنیتی 3D Secure، پرداخت ارزی و اتصال به کیف‌پول‌های بین‌المللی.',
  keywords: ['ویزا کارت مجازی', 'ویزا کارت فیزیکی', 'خرید با ویزا کارت', 'ویزا کارت بین المللی', 'SafiPay Visa Card', 'پرداخت آنلاین خارجی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/visa-card-guide',
  },
  openGraph: {
    title: 'راهنمای جامع ویزا کارت مجازی و فیزیکی سافی‌پی: پرداخت‌های جهانی بدون مرز',
    description: 'آموزش کامل نحوه دریافت و استفاده از ویزا کارت‌های SafiPay: صدور آنی ۶۰ ثانیه‌ای، پروتکل امنیتی 3D Secure، پرداخت ارزی و اتصال به کیف‌پول‌های بین‌المللی.',
    url: 'https://www.safipay.net/fa/blog/visa-card-guide',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function VisaCardGuideFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
