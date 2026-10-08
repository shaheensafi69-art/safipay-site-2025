import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'صفي باي - النظام المصرفي الرقمي العالمي | حسابات آيبان وبطاقات فيزا الأوروبية',
    template: '%s | صفي باي'
  },
  description: 'صفي باي؛ المنظومة المصرفية الرقمية الأوروبية الرائدة عالمياً. إصدار فوري لحسابات IBAN، بطاقات فيزا الافتراضية، شرائح eSIM العالمية والتحويلات الفورية SEPA.',
  keywords: ['صفي باي', 'SafiPay', 'بنك رقمي أوروبي', 'بطاقة فيزا افتراضية', 'حساب آيبان أوروبي', 'شاهين صافي', 'تحويلات SEPA'],
  alternates: {
    canonical: 'https://www.safipay.net/ar',
  },
  openGraph: {
    title: 'صفي باي - النظام المصرفي الرقمي العالمي',
    description: 'المنظومة المصرفية الرقمية الأوروبية الرائدة عالمياً.',
    url: 'https://www.safipay.net/ar',
    siteName: 'صفي باي | SafiPay',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function ARLayout({ children }: { children: React.ReactNode }) {
  return <div dir="rtl" className="contents">{children}</div>;
}