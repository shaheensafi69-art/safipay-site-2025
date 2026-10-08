import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'European PSD2 & PSD3 Directive Compliance: Technical Standards & Open Banking Security',
  description: 'Technical exploration of Open Banking APIs, EBA RTS regulatory technical standards, Strong Customer Authentication (SCA), and PSD3 readiness at SafiPay by Lead Developer Mobin Hassani.',
  keywords: ['European PSD3 Directive', 'PSD2 Open Banking', 'EBA RTS Technical Standards', 'Strong Customer Authentication SCA', 'Mobin Hassani', 'Lead Developer', 'Banking API Security'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/psd3-open-banking-compliance',
  },
  openGraph: {
    title: 'European PSD2 & PSD3 Directive Compliance: Technical Standards & Open Banking Security',
    description: 'Technical exploration of Open Banking APIs, EBA RTS regulatory technical standards, Strong Customer Authentication (SCA), and PSD3 readiness at SafiPay by Lead Developer Mobin Hassani.',
    url: 'https://www.safipay.net/en/blog/psd3-open-banking-compliance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function Psd3ComplianceLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
