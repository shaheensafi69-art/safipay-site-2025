import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download SafiPay Mobile App — iOS & Android Next-Gen Banking',
  description: 'Download the SafiPay mobile banking app for iPhone and Android. Manage dedicated European IBANs, issue virtual Visa cards, and activate global eSIMs on the go.',
  keywords: ['Download SafiPay App', 'Mobile Banking App Europe', 'Virtual Visa iOS App', 'Android FinTech App', 'SafiPay APK'],
  alternates: {
    canonical: 'https://www.safipay.net/en/app',
  },
  openGraph: {
    title: 'Download SafiPay Mobile App — iOS & Android Next-Gen Banking',
    description: 'Download the SafiPay mobile banking app for iPhone and Android. Manage dedicated European IBANs, issue virtual Visa cards, and activate global eSIMs on the go.',
    url: 'https://www.safipay.net/en/app',
    siteName: 'SafiPay',
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
