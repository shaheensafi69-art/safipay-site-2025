import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تکنولوژی eSIM مسافرتی: اتصال اینترنت پرسرعت در بیش از ۲۰۰ کشور جهان',
  description: 'راهنمای فعال‌سازی و کاربرد سیم‌کارت دیجیتال (eSIM) سافی‌پی برای مسافران و تجار بین‌المللی: اینترنت ارزان، بدون نیاز به سیم‌کارت فیزیکی و با پوشش جهانی.',
  keywords: ['سیم کارت دیجیتال eSIM', 'اینترنت مسافرتی خارج کشور', 'خرید eSIM بین المللی', 'رومینگ ارزان اینترنت', 'SafiPay eSIM', 'مبین حسنی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/esim-travel-technology',
  },
  openGraph: {
    title: 'تکنولوژی eSIM مسافرتی: اتصال اینترنت پرسرعت در بیش از ۲۰۰ کشور جهان',
    description: 'راهنمای فعال‌سازی و کاربرد سیم‌کارت دیجیتال (eSIM) سافی‌پی برای مسافران و تجار بین‌المللی: اینترنت ارزان، بدون نیاز به سیم‌کارت فیزیکی و با پوشش جهانی.',
    url: 'https://www.safipay.net/fa/blog/esim-travel-technology',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function EsimTravelFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
