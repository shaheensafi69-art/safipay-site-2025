import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'وبلاگ رسمی و مرکز دانش مالی سافی‌پی — مقالات فین‌تک و بانکداری بین‌المللی',
  description: 'دانشنامه تخصصی SafiPay: مقالات کاربردی و موثق درباره افتتاح حساب اروپایی، راهنمای ویزا کارت‌های اعتباری، امنیت رمزنگاری بانکی و آینده مبادلات مالی جهانی.',
  keywords: ['وبلاگ سافی پی', 'مقالات فین تک', 'آموزش بانکداری بین المللی', 'راهنمای ویزا کارت', 'اخبار SafiPay'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog',
  },
  openGraph: {
    title: 'وبلاگ رسمی و مرکز دانش مالی سافی‌پی — مقالات فین‌تک و بانکداری بین‌المللی',
    description: 'دانشنامه تخصصی SafiPay: مقالات کاربردی و موثق درباره افتتاح حساب اروپایی، راهنمای ویزا کارت‌های اعتباری، امنیت رمزنگاری بانکی و آینده مبادلات مالی جهانی.',
    url: 'https://www.safipay.net/fa/blog',
    siteName: 'SafiPay',
  },
};

export default function BlogFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
