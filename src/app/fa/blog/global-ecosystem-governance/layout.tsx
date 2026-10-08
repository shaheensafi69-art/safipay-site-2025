import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مدیریت جامع اکوسیستم صافی‌پی: هماهنگ‌سازی قوانین مالی چند کشوری و استانداردهای بین‌المللی',
  description: 'راهبرد جامع شیرین گل احمدی، مدیر کل اکوسیستم صافی‌پی، در همگام‌سازی چارچوب‌های نظارتی اتحادیه اروپا، بریتانیا و خاورمیانه و خلق یک ساختار امن و یکپارچه مالی.',
  keywords: ['مدیریت اکوسیستم صافی پی', 'شیرین گل احمدی', 'All Ecosystem Manager', 'حاکمیت داده مالی', 'یکپارچه سازی رگولاتوری چند کشوری', 'SafiPay Governance'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/global-ecosystem-governance',
  },
  openGraph: {
    title: 'مدیریت جامع اکوسیستم صافی‌پی: هماهنگ‌سازی قوانین مالی چند کشوری و استانداردهای بین‌المللی',
    description: 'راهبرد جامع شیرین گل احمدی، مدیر کل اکوسیستم صافی‌پی، در همگام‌سازی چارچوب‌های نظارتی اتحادیه اروپا، بریتانیا و خاورمیانه و خلق یک ساختار امن و یکپارچه مالی.',
    url: 'https://www.safipay.net/fa/blog/global-ecosystem-governance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function GlobalGovernanceLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
