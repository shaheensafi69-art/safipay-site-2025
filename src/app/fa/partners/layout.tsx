import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شرکای بین‌المللی و زیرساخت‌های بانکی همکار | SafiPay',
  description: 'معرفی بانک‌های سطح یک اروپایی، شبکه پرداخت بین‌المللی Visa و سازمان‌های نظارتی همکار با پلتفرم مالی دیجیتال SafiPay.',
  keywords: ['شرکای سافی پی', 'همکاران بین المللی بانکی', 'شبکه ویزا کارت', 'SafiPay Partners', 'مجوزهای بانکی اروپا'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/partners',
  },
  openGraph: {
    title: 'شرکای بین‌المللی و زیرساخت‌های بانکی همکار | SafiPay',
    description: 'معرفی بانک‌های سطح یک اروپایی، شبکه پرداخت بین‌المللی Visa و سازمان‌های نظارتی همکار با پلتفرم مالی دیجیتال SafiPay.',
    url: 'https://www.safipay.net/fa/partners',
    siteName: 'SafiPay',
  },
};

export default function PartnersFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
