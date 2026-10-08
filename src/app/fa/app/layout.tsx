import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دانلود اپلیکیشن سافی‌پی — بانکداری هوشمند برای اندروید و iOS',
  description: 'دریافت نسخه رسمی اپلیکیشن موبایل SafiPay: مدیریت حساب‌های بانکی اروپایی، صدور آنی ویزا کارت مجازی و فعال‌سازی اینترنت مسافرتی در تلفن همراه.',
  keywords: ['دانلود اپلیکیشن سافی پی', 'اپلیکیشن بانکی SafiPay', 'ویزا کارت در موبایل', 'بانکداری اندروید و آیفون', 'دانلود نرم افزار SafiPay'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/app',
  },
  openGraph: {
    title: 'دانلود اپلیکیشن سافی‌پی — بانکداری هوشمند برای اندروید و iOS',
    description: 'دریافت نسخه رسمی اپلیکیشن موبایل SafiPay: مدیریت حساب‌های بانکی اروپایی، صدور آنی ویزا کارت مجازی و فعال‌سازی اینترنت مسافرتی در تلفن همراه.',
    url: 'https://www.safipay.net/fa/app',
    siteName: 'SafiPay',
  },
};

export default function AppFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
