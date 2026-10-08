import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits of a Dedicated European IBAN for Global Citizens and Remote Workers',
  description: 'Discover why having a direct European IBAN account through SafiPay unlocks SEPA Instant credit transfers, eliminates international wire fees, and empowers global trade.',
  keywords: ['European IBAN Account', 'SEPA Instant Transfer', 'EU Bank Account for Non-Residents', 'Remote Work Banking', 'SafiPay IBAN', 'Sahel Salem'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/iban-account-benefits',
  },
  openGraph: {
    title: 'Benefits of a Dedicated European IBAN for Global Citizens and Remote Workers',
    description: 'Discover why having a direct European IBAN account through SafiPay unlocks SEPA Instant credit transfers, eliminates international wire fees, and empowers global trade.',
    url: 'https://www.safipay.net/en/blog/iban-account-benefits',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function IbanBenefitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
