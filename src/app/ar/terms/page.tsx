import BankingTermsContent from '@/components/BankingTermsContent';

export const metadata = {
  title: 'الشروط والأحكام المصرفية الأوروبية | صافي باي',
  description: 'العقد المصرفي المعتمد لتخصيص أرقام الحسابات الأوروبية الدولية (IBAN) وتحويلات SEPA وبطاقات الدفع تحت إشراف EBA.',
};

export default function TermsPage() {
  return <BankingTermsContent lang="ar" />;
}
