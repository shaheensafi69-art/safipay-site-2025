import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'آینده بانکداری دیجیتال: ترکیب هوش مصنوعی مستقل و اقتصاد فرامرزی',
  description: 'بررسی جامع مسیر تحول نظام بانکی: چگونه هوش مصنوعی، تصفیه آنی پرداخت‌ها و نئوبانک‌های ابری شعب سنتی و بروکراسی کاغذی را منسوخ می‌کنند.',
  keywords: ['آینده بانکداری دیجیتال', 'هوش مصنوعی در بانکداری', 'نئوبانک آینده', 'بانکداری بدون مرز', 'SafiPay Future', 'فین تک پیشرفته'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/future-of-banking',
  },
  openGraph: {
    title: 'آینده بانکداری دیجیتال: ترکیب هوش مصنوعی مستقل و اقتصاد فرامرزی',
    description: 'بررسی جامع مسیر تحول نظام بانکی: چگونه هوش مصنوعی، تصفیه آنی پرداخت‌ها و نئوبانک‌های ابری شعب سنتی و بروکراسی کاغذی را منسوخ می‌کنند.',
    url: 'https://www.safipay.net/fa/blog/future-of-banking',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function FutureOfBankingFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
