import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Global Financial Mission & Leadership Architecture',
  description: 'Learn about SafiPay: European digital banking ecosystem founded by Shaheen Safi, designed to provide frictionless cross-border accounts and cards worldwide.',
  keywords: ['About SafiPay', 'SafiPay Mission', 'European Neobank Story', 'Shaheen Safi', 'Global Banking Architecture'],
  alternates: {
    canonical: 'https://www.safipay.net/en/about',
  },
  openGraph: {
    title: 'About Us — Global Financial Mission & Leadership Architecture',
    description: 'Learn about SafiPay: European digital banking ecosystem founded by Shaheen Safi, designed to provide frictionless cross-border accounts and cards worldwide.',
    url: 'https://www.safipay.net/en/about',
    siteName: 'SafiPay',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
