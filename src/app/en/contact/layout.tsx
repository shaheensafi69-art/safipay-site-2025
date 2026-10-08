import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — 24/7 Global Institutional Support & Executive Inquiries',
  description: 'Connect with SafiPay customer support, executive compliance, and partnership divisions. Official email channels and priority assistance.',
  keywords: ['Contact SafiPay', 'SafiPay Support', 'SafiPay Email', 'contact@safipay.net', 'info@safipay.net', 'European Banking Support'],
  alternates: {
    canonical: 'https://www.safipay.net/en/contact',
  },
  openGraph: {
    title: 'Contact Us — 24/7 Global Institutional Support & Executive Inquiries',
    description: 'Connect with SafiPay customer support, executive compliance, and partnership divisions. Official email channels and priority assistance.',
    url: 'https://www.safipay.net/en/contact',
    siteName: 'SafiPay',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
