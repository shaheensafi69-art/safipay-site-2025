import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'چشم‌انداز استراتژیک انطباق نهادی: ساخت یک سیستم مالی جهانی و شفاف توسط صافی‌پی',
  description: 'دیدگاه بنیادین شاهین صافی، دایرکتور و فوندر صافی‌پی، در خصوص پیوند آزادی مالی، اتصال به رگولاتوری‌های برتر جهان (SEPA، FCA، EBA) و شکستن انزوای اقتصادی.',
  keywords: ['چشم انداز انطباق نهادی', 'شاهین صافی', 'دایرکتور و فوندر SafiPay', 'آزادی مالی بین المللی', 'رگولاتوری جهانی فین تک', 'شفافیت سیستم های مالی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/institutional-compliance-vision',
  },
  openGraph: {
    title: 'چشم‌انداز استراتژیک انطباق نهادی: ساخت یک سیستم مالی جهانی و شفاف توسط صافی‌پی',
    description: 'دیدگاه بنیادین شاهین صافی، دایرکتور و فوندر صافی‌پی، در خصوص پیوند آزادی مالی، اتصال به رگولاتوری‌های برتر جهان (SEPA، FCA، EBA) و شکستن انزوای اقتصادی.',
    url: 'https://www.safipay.net/fa/blog/institutional-compliance-vision',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function InstitutionalComplianceLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
