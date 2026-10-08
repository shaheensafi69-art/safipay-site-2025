import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شیرین گل احمدی — مدیر ارشد بازاریابی و روابط بین‌الملل | SafiPay',
  description: 'پروفایل رسمی شیرین گل احمدی، مدیر ارشد مارکتینگ و ارتباطات جهانی نئوبانک SafiPay. ارتباط مستقیم: shirinahmadi@safipay.net.',
  keywords: ['شیرین گل احمدی', 'مدیر مارکتینگ سافی پی', 'Shirin Gol Ahmadi', 'shirinahmadi@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/founder/shirin-gol-ahmadi',
  },
  openGraph: {
    title: 'شیرین گل احمدی — مدیر ارشد بازاریابی و روابط بین‌الملل | SafiPay',
    description: 'پروفایل رسمی شیرین گل احمدی، مدیر ارشد مارکتینگ و ارتباطات جهانی نئوبانک SafiPay. ارتباط مستقیم: shirinahmadi@safipay.net.',
    url: 'https://www.safipay.net/fa/founder/shirin-gol-ahmadi',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function ShirinAhmadiFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
