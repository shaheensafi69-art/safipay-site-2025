import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Guide to SafiPay Virtual Visa Cards: Borderless Global Payments',
  description: 'Master international online checkout with SafiPay virtual and physical Visa cards. 60-second generation, 3D Secure 2.0, multi-currency wallets, and instant controls.',
  keywords: ['Virtual Visa Card', 'SafiPay Visa Card', 'Online International Payments', 'Instant Virtual Card Europe', 'Borderless Debit Card', 'FinTech Card'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/visa-card-guide',
  },
  openGraph: {
    title: 'Complete Guide to SafiPay Virtual Visa Cards: Borderless Global Payments',
    description: 'Master international online checkout with SafiPay virtual and physical Visa cards. 60-second generation, 3D Secure 2.0, multi-currency wallets, and instant controls.',
    url: 'https://www.safipay.net/en/blog/visa-card-guide',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function VisaCardGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
