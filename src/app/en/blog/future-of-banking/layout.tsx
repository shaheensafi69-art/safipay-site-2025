import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Future of Digital Banking: Autonomous AI and Borderless Finance',
  description: 'How AI-driven neobanking architectures, real-time clearing protocols, and decentralized asset custody are replacing traditional legacy retail banking.',
  keywords: ['Future of Banking', 'AI in Banking', 'Autonomous FinTech', 'Borderless Banking 2026', 'Neobank Evolution', 'SafiPay Vision'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/future-of-banking',
  },
  openGraph: {
    title: 'The Future of Digital Banking: Autonomous AI and Borderless Finance',
    description: 'How AI-driven neobanking architectures, real-time clearing protocols, and decentralized asset custody are replacing traditional legacy retail banking.',
    url: 'https://www.safipay.net/en/blog/future-of-banking',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function FutureOfBankingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
