import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SafiPay Global Ecosystem Governance: Harmonizing Cross-Border Financial Policies',
  description: 'How All Ecosystem Manager Shirin Gol Ahmadi harmonizes multi-jurisdiction regulatory compliance across the EU, UK, and emerging markets within SafiPay.',
  keywords: ['Global Ecosystem Governance', 'Shirin Gol Ahmadi', 'All Ecosystem Manager', 'Financial Data Sovereignty', 'Multi-Jurisdiction Compliance', 'SafiPay Leadership'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/global-ecosystem-governance',
  },
  openGraph: {
    title: 'SafiPay Global Ecosystem Governance: Harmonizing Cross-Border Financial Policies',
    description: 'How All Ecosystem Manager Shirin Gol Ahmadi harmonizes multi-jurisdiction regulatory compliance across the EU, UK, and emerging markets within SafiPay.',
    url: 'https://www.safipay.net/en/blog/global-ecosystem-governance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function GlobalGovernanceLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
