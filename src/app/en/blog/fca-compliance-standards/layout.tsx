import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK FCA Regulatory Standards & Capital Safeguarding Across the SafiPay Ecosystem',
  description: 'How SafiPay enforces UK Financial Conduct Authority (FCA) electronic money regulations (EMRs), client fund segregation, and Consumer Duty principles, authored by Shirin Gol Ahmadi.',
  keywords: ['UK FCA Compliance', 'Electronic Money Regulations EMRs', 'Client Asset Safeguarding', 'Shirin Gol Ahmadi', 'All Ecosystem Manager', 'Consumer Duty FinTech'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/fca-compliance-standards',
  },
  openGraph: {
    title: 'UK FCA Regulatory Standards & Capital Safeguarding Across the SafiPay Ecosystem',
    description: 'How SafiPay enforces UK Financial Conduct Authority (FCA) electronic money regulations (EMRs), client fund segregation, and Consumer Duty principles, authored by Shirin Gol Ahmadi.',
    url: 'https://www.safipay.net/en/blog/fca-compliance-standards',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function FcaComplianceLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
