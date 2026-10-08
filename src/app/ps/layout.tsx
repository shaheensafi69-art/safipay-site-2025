import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'صفی‌پی - نړیوال ډیجیټل بانکداري سیستم | د اروپا IBAN او ویزا کارت',
    template: '%s | صفی‌پی'
  },
  description: 'صفی‌پی؛ په ټوله نړۍ کې د نوښتګر ډیجیټل بانکدارۍ سیستم. د اروپایي اتحادیې شخصي IBAN حساب، مجازي ویزا کارت، نړیوال eSIM انټرنیټ او د پیسو چټک لېږد.',
  keywords: ['صفی‌پی', 'SafiPay', 'ډیجیټل بانکداري', 'ویزا کارت', 'اروپایي IBAN', 'شاهین صافي'],
  alternates: {
    canonical: 'https://www.safipay.net/ps',
  },
  openGraph: {
    title: 'صفی‌پی - نړیوال ډیجیټل بانکداري سیستم',
    description: 'په نړیواله کچه د عصري او نوښتګر ډیجیټل بانکدارۍ سیسټم.',
    url: 'https://www.safipay.net/ps',
    siteName: 'صفی‌پی | SafiPay',
    locale: 'ps_AF',
    type: 'website',
  },
};

export default function PSLayout({ children }: { children: React.ReactNode }) {
  return <div dir="rtl" className="contents">{children}</div>;
}