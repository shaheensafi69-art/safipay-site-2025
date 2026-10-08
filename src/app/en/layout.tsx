import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'SafiPay — Global Digital Banking | European IBAN & Virtual Visa Cards',
    template: '%s | SafiPay'
  },
  description: 'SafiPay is a premier international digital banking ecosystem. Access instant European IBAN accounts, worldwide virtual Visa cards, SEPA clearing, and global eSIM.',
  keywords: ['SafiPay', 'Digital Banking', 'European IBAN', 'Virtual Visa Card', 'SEPA Instant', 'Global Money Transfer', 'Shaheen Safi', 'FinTech'],
  alternates: {
    canonical: 'https://www.safipay.net/en',
  },
  openGraph: {
    title: 'SafiPay — Global Digital Banking Ecosystem',
    description: 'Premier international digital banking system worldwide. European IBANs, Virtual Visa Cards, and Boundless Financial Freedom.',
    url: 'https://www.safipay.net/en',
    siteName: 'SafiPay',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LTRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" className="contents">
      {children}
    </div>
  );
}