import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'صفی‌پی - سیستم پیشرفته بانکداری دیجیتال بین‌المللی | ویزا کارت و حساب ایبان اروپا',
    template: '%s | صفی‌پی'
  },
  description: 'صفی‌پی؛ پلتفرم پیشرو بانکداری بین‌المللی با ارائه حساب بانکی اختصاصی IBAN اروپا، صدور آنی ویزا کارت مجازی جهانی، اینترنت بین‌المللی eSIM و تسویه آنی SEPA بدون مرز جغرافیایی.',
  keywords: ['صفی‌پی', 'SafiPay', 'بانکداری دیجیتال بین‌المللی', 'ویزا کارت مجازی', 'حساب ایبان اروپا', 'حواله SEPA', 'شاهین صافی', 'خرید آنلاین بین‌المللی', 'افتتاح حساب اروپا'],
  alternates: {
    canonical: 'https://www.safipay.net/fa',
  },
  openGraph: {
    title: 'صفی‌پی - سیستم پیشرفته بانکداری دیجیتال بین‌المللی',
    description: 'پلتفرم بانکداری دیجیتال اروپا با حساب اختصاصی IBAN و ویزا کارت جهانی تحت نظارت اتحادیه اروپا.',
    url: 'https://www.safipay.net/fa',
    siteName: 'صفی‌پی | SafiPay',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RTLLayout({ children }: { children: React.ReactNode }) {
  return <div dir="rtl" className="contents">{children}</div>;
}