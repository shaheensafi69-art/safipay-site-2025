import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شاهین صافی — بنیان‌گذار و معمار ارشد اکوسیستم مالی SafiPay',
  description: 'پروفایل بیوگرافی و اجرایی شاهین صافی، بنیان‌گذار و معمار اصلی نئوبانک بین‌المللی SafiPay. ارتباط مستقیم: shaheen@safipay.net.',
  keywords: ['شاهین صافی', 'بنیان گذار سافی پی', 'Shaheen Safi', 'مدیر عامل سافی پی', 'shaheen@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/founder/shaheen-safi',
  },
  openGraph: {
    title: 'شاهین صافی — بنیان‌گذار و معمار ارشد اکوسیستم مالی SafiPay',
    description: 'پروفایل بیوگرافی و اجرایی شاهین صافی، بنیان‌گذار و معمار اصلی نئوبانک بین‌المللی SafiPay. ارتباط مستقیم: shaheen@safipay.net.',
    url: 'https://www.safipay.net/fa/founder/shaheen-safi',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function ShaheenSafiFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
