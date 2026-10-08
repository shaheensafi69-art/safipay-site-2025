import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & European Data Protection Mandates (GDPR)',
  description: 'Learn how SafiPay protects personal customer telemetry and transaction data under European Union General Data Protection Regulation (GDPR) mandates.',
  keywords: ['Privacy Policy', 'GDPR Compliance', 'Data Protection', 'SafiPay Privacy', 'compliance@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & European Data Protection Mandates (GDPR)',
    description: 'Learn how SafiPay protects personal customer telemetry and transaction data under European Union General Data Protection Regulation (GDPR) mandates.',
    url: 'https://www.safipay.net/en/privacy',
    siteName: 'SafiPay',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
