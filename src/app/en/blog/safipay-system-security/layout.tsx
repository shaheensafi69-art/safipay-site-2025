import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EU-Level Institutional Security: How SafiPay Protects Your Assets',
  description: 'Technical analysis of SafiPay security protocols: AES-256-GCM encryption, biometric key isolation, zero-knowledge proofs, and European compliance.',
  keywords: ['SafiPay Security', 'Institutional Banking Security', 'FinTech Cryptography', 'Zero-Knowledge Banking', 'EU Compliance Banking', 'Mujtaba Rahmani'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/safipay-system-security',
  },
  openGraph: {
    title: 'EU-Level Institutional Security: How SafiPay Protects Your Assets',
    description: 'Technical analysis of SafiPay security protocols: AES-256-GCM encryption, biometric key isolation, zero-knowledge proofs, and European compliance.',
    url: 'https://www.safipay.net/en/blog/safipay-system-security',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
