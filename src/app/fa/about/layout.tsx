import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درباره ما — ماموریت مالی جهانی و ارکان مدیریتی سافی‌پی',
  description: 'آشنایی با تاریخچه، آرمان‌ها و مدیران ارشد نئوبانک اروپایی SafiPay به رهبری شاهین صافی؛ ارائه راهکارهای نوین بانکی و پرداخت‌های بین‌المللی بدون مرز.',
  keywords: ['درباره سافی پی', 'تاریخچه SafiPay', 'مدیران سافی پی', 'شاهین صافی', 'نئوبانک بین المللی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/about',
  },
  openGraph: {
    title: 'درباره ما — ماموریت مالی جهانی و ارکان مدیریتی سافی‌پی',
    description: 'آشنایی با تاریخچه، آرمان‌ها و مدیران ارشد نئوبانک اروپایی SafiPay به رهبری شاهین صافی؛ ارائه راهکارهای نوین بانکی و پرداخت‌های بین‌المللی بدون مرز.',
    url: 'https://www.safipay.net/fa/about',
    siteName: 'SafiPay',
  },
};

export default function AboutFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
