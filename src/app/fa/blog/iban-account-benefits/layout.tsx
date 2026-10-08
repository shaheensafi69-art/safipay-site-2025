import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مزایای افتتاح حساب IBAN اختصاصی اروپایی برای کاربران و فریلنسرهای بین‌المللی',
  description: 'چرا داشتن شماره شبا اروپایی (IBAN) با SafiPay انتقال سریع وجه SEPA را ممکن کرده و موانع دریافت دستمزد ارزی از کارفرمایان خارجی را برطرف می‌سازد.',
  keywords: ['افتتاح حساب اروپایی', 'حساب IBAN اروپا', 'حواله SEPA Instant', 'دریافت درآمد ارزی', 'نئوبانک اروپا', 'SafiPay'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/iban-account-benefits',
  },
  openGraph: {
    title: 'مزایای افتتاح حساب IBAN اختصاصی اروپایی برای کاربران و فریلنسرهای بین‌المللی',
    description: 'چرا داشتن شماره شبا اروپایی (IBAN) با SafiPay انتقال سریع وجه SEPA را ممکن کرده و موانع دریافت دستمزد ارزی از کارفرمایان خارجی را برطرف می‌سازد.',
    url: 'https://www.safipay.net/fa/blog/iban-account-benefits',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function IbanBenefitsFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
