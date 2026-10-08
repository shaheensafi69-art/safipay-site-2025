import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The SafiPay Story: From Regional Vision to European Global Hub',
  description: 'The inspirational founding journey of SafiPay led by visionary architect Shaheen Safi. How perseverance, technological mastery, and global vision built an international neobank.',
  keywords: ['Shaheen Safi Story', 'SafiPay Founding', 'FinTech Founder', 'Paris Financial Hub', 'Neobank History', 'Shaheen Safi'],
  alternates: {
    canonical: 'https://www.safipay.net/en/blog/about-shaheen-safi',
  },
  openGraph: {
    title: 'The SafiPay Story: From Regional Vision to European Global Hub',
    description: 'The inspirational founding journey of SafiPay led by visionary architect Shaheen Safi. How perseverance, technological mastery, and global vision built an international neobank.',
    url: 'https://www.safipay.net/en/blog/about-shaheen-safi',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function AboutShaheenSafiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
