import BankingPrivacyContent from '@/components/BankingPrivacyContent';

export const metadata = {
  title: 'Политика банковской конфиденциальности и защиты данных | SafiPay',
  description: 'Официальный регламент защиты персональных и финансовых данных клиентов в соответствии с GDPR (ЕС 2016/679) и нормами EBA.',
};

export default function PrivacyPage() {
  return <BankingPrivacyContent lang="ru" />;
}
