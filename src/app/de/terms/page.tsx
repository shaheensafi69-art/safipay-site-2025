import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen und Bankenvertrag | SafiPay',
  description: 'Offizielle Geschäftsbedingungen für europäische IBAN-Konten, SEPA-Überweisungen und Kartenservices unter EU-Recht.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="de" />;
}
