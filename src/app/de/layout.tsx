import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'SafiPay — Globales digitales Bankensystem | Europäische IBAN & Virtuelle Visa-Karten',
    template: '%s | SafiPay'
  },
  description: 'SafiPay ist ein führendes internationales digitales Bankenökosystem. Sofortige europäische IBAN-Konten, grenzenlose virtuelle Visa-Karten, SEPA-Echtzeitüberweisungen und globale eSIM.',
  keywords: ['SafiPay', 'Digitales Banking', 'Europäische IBAN', 'Virtuelle Visa-Karte', 'SEPA Instant', 'FinTech Europa', 'Shaheen Safi'],
  alternates: {
    canonical: 'https://www.safipay.net/de',
  },
  openGraph: {
    title: 'SafiPay — Globales digitales Bankensystem',
    description: 'Die Zukunft des modernen digitalen Bankwesens weltweit.',
    url: 'https://www.safipay.net/de',
    siteName: 'SafiPay',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function GERLayout({ children }: { children: React.ReactNode }) {
  return <div dir="ltr" className="contents">{children}</div>;
}