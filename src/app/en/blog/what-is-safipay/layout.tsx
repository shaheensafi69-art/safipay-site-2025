import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is SafiPay? The Premier European Digital Banking Platform',
  description: 'Explore SafiPay, the international digital banking ecosystem offering instant EU IBAN accounts, borderless virtual Visa cards, and SEPA transfers.',
  keywords: ['What is SafiPay', 'SafiPay Overview', 'European Digital Bank', 'Virtual Visa Card', 'SEPA Instant IBAN', 'FinTech Europe'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/what-is-safipay',
  },
  openGraph: {
    title: 'What is SafiPay? The Premier European Digital Banking Platform',
    description: 'Explore SafiPay, the international digital banking ecosystem offering instant EU IBAN accounts, borderless virtual Visa cards, and SEPA transfers.',
    url: 'https://www.safipay.net/en/blog/what-is-safipay',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function WhatIsSafiPayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
