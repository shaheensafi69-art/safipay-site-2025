import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Regulatory Compliance Mandates',
  description: 'Official legal terms of service, customer agreement, and regulatory compliance standards governing SafiPay European banking and payment services.',
  keywords: ['Terms of Service', 'SafiPay Legal', 'Customer Agreement', 'Compliance Mandates', 'legal@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/terms',
  },
  openGraph: {
    title: 'Terms of Service & Regulatory Compliance Mandates',
    description: 'Official legal terms of service, customer agreement, and regulatory compliance standards governing SafiPay European banking and payment services.',
    url: 'https://www.safipay.net/en/terms',
    siteName: 'SafiPay',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
