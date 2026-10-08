import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sahel Salem — CEO & European Banking Relations Director | SafiPay',
  description: 'Official executive profile of Sahel Salem, Chief Executive Officer and Director of European Banking Relations at SafiPay. Contact: sahelsalem@safipay.net.',
  keywords: ['Sahel Salem', 'CEO SafiPay', 'European Banking Relations', 'sahelsalem@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/en/founder/sahel-salem',
  },
  openGraph: {
    title: 'Sahel Salem — CEO & European Banking Relations Director | SafiPay',
    description: 'Official executive profile of Sahel Salem, Chief Executive Officer and Director of European Banking Relations at SafiPay. Contact: sahelsalem@safipay.net.',
    url: 'https://www.safipay.net/en/founder/sahel-salem',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function SahelSalemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
