import BankingPrivacyContent from '@/components/BankingPrivacyContent';

export const metadata = {
  title: 'Banka Gizlilik Politikası ve Veri Güvenliği | SafiPay',
  description: 'Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR 2016/679) ve EBA direktifleri uyarınca SafiPay resmi gizlilik politikası.',
};

export default function PrivacyPage() {
  return <BankingPrivacyContent lang="tr" />;
}
