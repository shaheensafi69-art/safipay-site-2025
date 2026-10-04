import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'Conditions Générales de Service Bancaire | SafiPay',
  description: 'Contrat client officiel régissant les comptes IBAN européens, les virements SEPA et la protection des consommateurs sous DSP2/DSP3.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="fr" />;
}
