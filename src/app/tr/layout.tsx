import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'SafiPay — Küresel Dijital Bankacılık | Avrupa IBAN ve Sanal Visa Kartı',
    template: '%s | SafiPay'
  },
  description: 'SafiPay; dünya çapında modern uluslararası dijital bankacılık sistemi. Anında Avrupa IBAN hesabı, sanal Visa kartı, küresel eSIM ve SEPA transferleri.',
  keywords: ['SafiPay', 'Dijital Bankacılık', 'Avrupa IBAN', 'Sanal Visa Kartı', 'SEPA Transfer', 'Shaheen Safi', 'FinTech'],
  alternates: {
    canonical: 'https://www.safipay.net/tr',
  },
  openGraph: {
    title: 'SafiPay — Küresel Dijital Bankacılık Sistemi',
    description: 'Dünya çapında modern uluslararası dijital bankacılık sistemi.',
    url: 'https://www.safipay.net/tr',
    siteName: 'SafiPay',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function TRLayout({ children }: { children: React.ReactNode }) {
  return <div dir="ltr" className="contents">{children}</div>;
}