import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mujtaba Rahmani — Co-Founder & Economy / Technical Specialist | SafiPay',
  description: 'Official biographical and leadership profile of Mujtaba Rahmani, Co-Founder and Economic Specialist of SafiPay. Contact: mujtaba@safipay.net.',
  keywords: ['Mujtaba Rahmani', 'Co-Founder SafiPay', 'Economic Specialist', 'FinTech Security Architect', 'mujtaba@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/founder/mujtaba-rahmani',
  },
  openGraph: {
    title: 'Mujtaba Rahmani — Co-Founder & Economy / Technical Specialist | SafiPay',
    description: 'Official biographical and leadership profile of Mujtaba Rahmani, Co-Founder and Economic Specialist of SafiPay. Contact: mujtaba@safipay.net.',
    url: 'https://www.safipay.net/en/founder/mujtaba-rahmani',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function MujtabaRahmaniLayout({ children }: { children: React.ReactNode }) {
  return children;
}
