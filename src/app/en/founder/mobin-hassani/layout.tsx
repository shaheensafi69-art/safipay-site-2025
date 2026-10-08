import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobin Hassani — Co-Founder & Global FinTech Strategist | SafiPay',
  description: 'Official executive profile of Mobin Hassani, Co-Founder and Global FinTech Strategist at SafiPay. Contact: mobin@safipay.net.',
  keywords: ['Mobin Hassani', 'Co-Founder SafiPay', 'FinTech Strategist', 'mobin@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/founder/mobin-hassani',
  },
  openGraph: {
    title: 'Mobin Hassani — Co-Founder & Global FinTech Strategist | SafiPay',
    description: 'Official executive profile of Mobin Hassani, Co-Founder and Global FinTech Strategist at SafiPay. Contact: mobin@safipay.net.',
    url: 'https://www.safipay.net/en/founder/mobin-hassani',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function MobinHassaniLayout({ children }: { children: React.ReactNode }) {
  return children;
}
