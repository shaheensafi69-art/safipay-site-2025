import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ساحل سالم — مدیر ارشد اجرایی (CEO) و روابط بانکی اروپا | SafiPay',
  description: 'پروفایل اجرایی و زندگینامه ساحل سالم، مدیرعامل و مسئول روابط بانکی اروپایی در SafiPay. ارتباط رسمی: sahelsalem@safipay.net.',
  keywords: ['ساحل سالم', 'مدیر عامل سافی پی', 'Sahel Salem', 'روابط بانکی اروپا', 'sahelsalem@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/founder/sahel-salem',
  },
  openGraph: {
    title: 'ساحل سالم — مدیر ارشد اجرایی (CEO) و روابط بانکی اروپا | SafiPay',
    description: 'پروفایل اجرایی و زندگینامه ساحل سالم، مدیرعامل و مسئول روابط بانکی اروپایی در SafiPay. ارتباط رسمی: sahelsalem@safipay.net.',
    url: 'https://www.safipay.net/fa/founder/sahel-salem',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function SahelSalemFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
