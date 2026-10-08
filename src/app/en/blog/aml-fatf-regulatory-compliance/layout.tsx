import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '6AMLD & FATF Compliance Framework: Operational Monitoring Protocols at SafiPay',
  description: 'In-depth analysis of anti-money laundering (AML) operational surveillance, FATF 40 Recommendations, and automated PEP and sanctions screening at SafiPay authored by Operations Manager Mujtaba Rahmani.',
  keywords: ['6AMLD Compliance', 'FATF 40 Recommendations', 'Anti-Money Laundering Operations', 'Mujtaba Rahmani', 'Operations Manager', 'PEP and Sanction Screening'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/aml-fatf-regulatory-compliance',
  },
  openGraph: {
    title: '6AMLD & FATF Compliance Framework: Operational Monitoring Protocols at SafiPay',
    description: 'In-depth analysis of anti-money laundering (AML) operational surveillance, FATF 40 Recommendations, and automated PEP and sanctions screening at SafiPay authored by Operations Manager Mujtaba Rahmani.',
    url: 'https://www.safipay.net/en/blog/aml-fatf-regulatory-compliance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function AmlFatfLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
