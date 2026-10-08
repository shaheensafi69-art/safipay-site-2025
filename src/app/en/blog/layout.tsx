import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Official Blog & FinTech Knowledge Center — International Banking Insights',
  description: 'Explore the official SafiPay encyclopedia: deep analyses on European IBAN accounts, virtual Visa cards, cryptographic security, global travel eSIMs, and the future of digital finance.',
  keywords: ['SafiPay Blog', 'FinTech Articles', 'European Banking Guide', 'Digital Neobank News', 'Virtual Card Insights'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog',
  },
  openGraph: {
    title: 'Official Blog & FinTech Knowledge Center — International Banking Insights',
    description: 'Explore the official SafiPay encyclopedia: deep analyses on European IBAN accounts, virtual Visa cards, cryptographic security, global travel eSIMs, and the future of digital finance.',
    url: 'https://www.safipay.net/en/blog',
    siteName: 'SafiPay',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
