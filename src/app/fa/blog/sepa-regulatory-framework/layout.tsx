import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'انطباق سیستم صافی‌پی با قوانین SEPA و الزامات شورای پرداخت‌های اروپا (EPC)',
  description: 'بررسی تخصصی نحوه پیاده‌سازی استانداردهای SEPA Credit Transfer و SEPA Instant، تطابق با کتابچه قوانین EPC و تسویه لحظه‌ای بدون واسطه در صافی‌پی.',
  keywords: ['انطباق SEPA', 'شورای پرداختهای اروپا EPC', 'قوانین SEPA Instant', 'رگولاتوری بانکی اتحادیه اروپا', 'ساحل سالم', 'SafiPay Compliance'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/sepa-regulatory-framework',
  },
  openGraph: {
    title: 'انطباق سیستم صافی‌پی با قوانین SEPA و الزامات شورای پرداخت‌های اروپا (EPC)',
    description: 'بررسی تخصصی نحوه پیاده‌سازی استانداردهای SEPA Credit Transfer و SEPA Instant، تطابق با کتابچه قوانین EPC و تسویه لحظه‌ای بدون واسطه در صافی‌پی.',
    url: 'https://www.safipay.net/fa/blog/sepa-regulatory-framework',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function SepaRegulatoryLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
