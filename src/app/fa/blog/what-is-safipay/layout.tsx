import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سافی‌پی چیست؟ راهنمای جامع نئوبانک اروپایی و خدمات مالی بین‌المللی',
  description: 'آشنایی کامل با اکوسیستم دیجیتال SafiPay: افتتاح آنی حساب IBAN اروپایی، صدور ویزا کارت مجازی بین‌المللی و انتقال سریع وجه با استاندارد SEPA.',
  keywords: ['سافی‌پی چیست', 'نئوبانک اروپایی', 'افتتاح حساب بین المللی', 'ویزا کارت مجازی', 'حساب IBAN اروپا', 'SafiPay'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/what-is-safipay',
  },
  openGraph: {
    title: 'سافی‌پی چیست؟ راهنمای جامع نئوبانک اروپایی و خدمات مالی بین‌المللی',
    description: 'آشنایی کامل با اکوسیستم دیجیتال SafiPay: افتتاح آنی حساب IBAN اروپایی، صدور ویزا کارت مجازی بین‌المللی و انتقال سریع وجه با استاندارد SEPA.',
    url: 'https://www.safipay.net/fa/blog/what-is-safipay',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function WhatIsSafiPayFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
