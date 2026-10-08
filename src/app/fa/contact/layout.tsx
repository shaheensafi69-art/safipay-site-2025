import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تماس با ما — پشتیبانی شبانه‌روزی و ارتباط با مدیریت سافی‌پی',
  description: 'راه‌های ارتباط رسمی با تیم پشتیبانی، دپارتمان حقوقی و مدیریت ارشد SafiPay. پاسخگویی ۲۴ ساعته و ایمیل‌های رسمی contact@safipay.net و info@safipay.net.',
  keywords: ['تماس با سافی پی', 'پشتیبانی SafiPay', 'ایمیل سافی پی', 'contact@safipay.net', 'دفتر مرکزی پاریس'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/contact',
  },
  openGraph: {
    title: 'تماس با ما — پشتیبانی شبانه‌روزی و ارتباط با مدیریت سافی‌پی',
    description: 'راه‌های ارتباط رسمی با تیم پشتیبانی، دپارتمان حقوقی و مدیریت ارشد SafiPay. پاسخگویی ۲۴ ساعته و ایمیل‌های رسمی contact@safipay.net و info@safipay.net.',
    url: 'https://www.safipay.net/fa/contact',
    siteName: 'SafiPay',
  },
};

export default function ContactFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
