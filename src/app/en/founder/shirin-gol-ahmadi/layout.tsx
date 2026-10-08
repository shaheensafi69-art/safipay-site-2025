import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shirin Gol Ahmadi — Executive Director of Marketing & Growth | SafiPay',
  description: 'Official executive profile of Shirin Gol Ahmadi, Marketing Director and Executive Leadership member at SafiPay. Contact: shirinahmadi@safipay.net.',
  keywords: ['Shirin Gol Ahmadi', 'Marketing Director SafiPay', 'Executive Director', 'shirinahmadi@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/founder/shirin-gol-ahmadi',
  },
  openGraph: {
    title: 'Shirin Gol Ahmadi — Executive Director of Marketing & Growth | SafiPay',
    description: 'Official executive profile of Shirin Gol Ahmadi, Marketing Director and Executive Leadership member at SafiPay. Contact: shirinahmadi@safipay.net.',
    url: 'https://www.safipay.net/en/founder/shirin-gol-ahmadi',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function ShirinAhmadiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
