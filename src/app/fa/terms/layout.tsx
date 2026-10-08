import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شرایط و ضوابط استفاده از خدمات و الزامات قانونی | SafiPay',
  description: 'مقررات رسمی، توافق‌نامه کاربری و استانداردهای حقوقی حاکم بر استفاده از خدمات نئوبانک و پرداخت‌های بین‌المللی SafiPay.',
  keywords: ['شرایط و ضوابط سافی پی', 'قوانین استفاده SafiPay', 'توافق نامه کاربری', 'legal@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/terms',
  },
  openGraph: {
    title: 'شرایط و ضوابط استفاده از خدمات و الزامات قانونی | SafiPay',
    description: 'مقررات رسمی، توافق‌نامه کاربری و استانداردهای حقوقی حاکم بر استفاده از خدمات نئوبانک و پرداخت‌های بین‌المللی SafiPay.',
    url: 'https://www.safipay.net/fa/terms',
    siteName: 'SafiPay',
  },
};

export default function TermsFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
