import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Vision for Global Institutional Compliance: Building Transparent Sovereign Finance',
  description: 'Founding manifesto by Shaheen Safi, Director & Founder of SafiPay, exploring borderless financial access, statutory alignment with SEPA, FCA, and EBA, and ending financial exclusion.',
  keywords: ['Institutional Compliance Vision', 'Shaheen Safi', 'Director & Founder', 'SafiPay Vision', 'Borderless FinTech Sovereignty', 'Global Financial Inclusion'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/institutional-compliance-vision',
  },
  openGraph: {
    title: 'Strategic Vision for Global Institutional Compliance: Building Transparent Sovereign Finance',
    description: 'Founding manifesto by Shaheen Safi, Director & Founder of SafiPay, exploring borderless financial access, statutory alignment with SEPA, FCA, and EBA, and ending financial exclusion.',
    url: 'https://www.safipay.net/en/blog/institutional-compliance-vision',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function InstitutionalComplianceLayoutEn({ children }: { children: React.ReactNode }) {
  return children;
}
