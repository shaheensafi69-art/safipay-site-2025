import BankingPrivacyContent from '@/components/BankingPrivacyContent';

export const metadata = {
  title: 'سياسة الخصوصية وحماية البيانات المصرفية | صافي باي',
  description: 'الميثاق القانوني لحماية البيانات المالية والهوية وفقاً للائحة الاتحاد الأوروبي العامة لحماية البيانات (GDPR 2016/679).',
};

export default function PrivacyPage() {
  return <BankingPrivacyContent lang="ar" />;
}
