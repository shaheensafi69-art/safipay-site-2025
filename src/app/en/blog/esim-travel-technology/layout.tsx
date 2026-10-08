import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Travel eSIM Technology: High-Speed Internet in 200+ Countries',
  description: 'Learn how SafiPay integrated eSIM technology delivers instantaneous 5G/4G global mobile data roaming across 200+ territories without physical SIM card swapping.',
  keywords: ['Global eSIM', 'Travel eSIM Europe', 'International Data Roaming', 'SafiPay eSIM', 'Digital SIM Card', 'Mobin Hassani'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/esim-travel-technology',
  },
  openGraph: {
    title: 'Global Travel eSIM Technology: High-Speed Internet in 200+ Countries',
    description: 'Learn how SafiPay integrated eSIM technology delivers instantaneous 5G/4G global mobile data roaming across 200+ territories without physical SIM card swapping.',
    url: 'https://www.safipay.net/en/blog/esim-travel-technology',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function EsimTravelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
