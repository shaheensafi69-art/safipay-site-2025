import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How SafiPay Complies with SEPA Standards & European Payments Council (EPC) Framework',
  description: 'In-depth architectural analysis of how SafiPay enforces European Payments Council (EPC) rulebooks, ISO 20022 messaging, and sub-10-second SEPA Instant settlement.',
  keywords: ['SEPA Compliance', 'European Payments Council EPC', 'SEPA Instant SCT Inst', 'ISO 20022 Financial Messaging', 'Sahel Salem', 'SafiPay European Banking'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/sepa-regulatory-framework',
  },
  openGraph: {
    title: 'How SafiPay Complies with SEPA Standards & European Payments Council (EPC) Framework',
    description: 'In-depth architectural analysis of how SafiPay enforces European Payments Council (EPC) rulebooks, ISO 20022 messaging, and sub-10-second SEPA Instant settlement.',
    url: 'https://www.safipay.net/en/blog/sepa-regulatory-framework',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function SepaRegulatoryLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
