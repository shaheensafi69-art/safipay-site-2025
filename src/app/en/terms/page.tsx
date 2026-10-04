import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'European Banking Terms of Service & Client Agreement | SafiPay',
  description: 'Official master client agreement governing European IBAN issuance, SEPA Instant clearing, and PSD2/PSD3 consumer protections.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="en" />;
}
