import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Financial Partners & Regulatory Infrastructure',
  description: 'Explore SafiPay tier-1 banking alliances, Visa global network integration, and European regulatory compliance partners facilitating borderless transactions.',
  keywords: ['SafiPay Partners', 'European Banking Alliances', 'Visa Network Partner', 'FinTech Partnerships Europe'],
  alternates: {
    canonical: 'https://www.safipay.net/en/partners',
  },
  openGraph: {
    title: 'Global Financial Partners & Regulatory Infrastructure',
    description: 'Explore SafiPay tier-1 banking alliances, Visa global network integration, and European regulatory compliance partners facilitating borderless transactions.',
    url: 'https://www.safipay.net/en/partners',
    siteName: 'SafiPay',
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
