import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'SafiPay — Système bancaire numérique mondial | IBAN européen et cartes Visa virtuelles',
    template: '%s | SafiPay'
  },
  description: 'SafiPay est un écosystème bancaire numérique international de premier ordre. Comptes IBAN européens instantanés, cartes Visa virtuelles sans frontières, virements SEPA instantanés et eSIM mondiale.',
  keywords: ['SafiPay', 'Banque Numérique', 'IBAN Européen', 'Carte Visa Virtuelle', 'SEPA Instantané', 'FinTech', 'Shaheen Safi'],
  alternates: {
    canonical: 'https://www.safipay.net/fr',
  },
  openGraph: {
    title: 'SafiPay — Système bancaire numérique mondial',
    description: 'La solution de banque numérique internationale moderne à l’échelle mondiale.',
    url: 'https://www.safipay.net/fr',
    siteName: 'SafiPay',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function FRLayout({ children }: { children: React.ReactNode }) {
  return <div dir="ltr" className="contents">{children}</div>;
}