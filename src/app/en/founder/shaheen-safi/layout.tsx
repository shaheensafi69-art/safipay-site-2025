import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaheen Safi — Founder & Chief Visionary Architect | SafiPay',
  description: 'Official biographical and executive profile of Shaheen Safi, Founder and Visionary Leader of SafiPay. Contact: shaheen@safipay.net.',
  keywords: ['Shaheen Safi', 'Founder SafiPay', 'FinTech Visionary', 'Paris Banking Hub', 'shaheen@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/founder/shaheen-safi',
  },
  openGraph: {
    title: 'Shaheen Safi — Founder & Chief Visionary Architect | SafiPay',
    description: 'Official biographical and executive profile of Shaheen Safi, Founder and Visionary Leader of SafiPay. Contact: shaheen@safipay.net.',
    url: 'https://www.safipay.net/en/founder/shaheen-safi',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function ShaheenSafiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
