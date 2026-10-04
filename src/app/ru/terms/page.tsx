import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'Условия банковского обслуживания и договор клиента | SafiPay',
  description: 'Официальный регламент выпуска европейских счетов IBAN, проведения мгновенных расчетов SEPA и выпуска платежных карт.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="ru" />;
}
