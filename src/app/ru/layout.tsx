import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'SafiPay — Международный цифровой банкинг | Европейский IBAN и виртуальные карты Visa',
    template: '%s | SafiPay'
  },
  description: 'SafiPay — передовая международная цифровая банковская система глобального масштаба. Мгновенные европейские счета IBAN, виртуальные карты Visa, трансграничные переводы SEPA и международная eSIM.',
  keywords: ['SafiPay', 'Цифровой банкинг', 'Европейский IBAN', 'Виртуальная карта Visa', 'Мгновенные переводы SEPA', 'Финтех', 'Shaheen Safi'],
  alternates: {
    canonical: 'https://www.safipay.net/ru',
  },
  openGraph: {
    title: 'SafiPay — Международный цифровой банкинг',
    description: 'Современная международная цифровая банковская система глобального масштаба.',
    url: 'https://www.safipay.net/ru',
    siteName: 'SafiPay',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RULayout({ children }: { children: React.ReactNode }) {
  return <div dir="ltr" className="contents">{children}</div>;
}