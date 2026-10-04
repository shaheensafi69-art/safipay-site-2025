import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'Avrupa Bankacılık Hizmet Koşulları ve Sözleşme | SafiPay',
  description: 'Avrupa IBAN hesap tahsisleri, SEPA Anlık ödemeleri ve banka kartları hizmet koşullarını düzenleyen resmi sözleşme.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="tr" />;
}
