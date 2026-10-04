import BankingPrivacyContent from '@/components/BankingPrivacyContent';

export const metadata = {
  title: 'Datenschutzrichtlinie und Bankensicherheits-Charta | SafiPay',
  description: 'Offizielle Datenschutzrichtlinie von SafiPay gemäß der EU-Datenschutz-Grundverordnung (DSGVO 2016/679) und EBA-Standards.',
};

export default function PrivacyPage() {
  return <BankingPrivacyContent lang="de" />;
}
