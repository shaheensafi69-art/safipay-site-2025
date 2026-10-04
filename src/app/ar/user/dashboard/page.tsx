import SystemNoticePage from '@/components/SystemNoticePage';

export const metadata = {
  title: 'لوحة التحكم المصرفية | صافي باي',
  description: 'إشعار رسمي بخصوص مرحلة التفعيل والامتثال للمعايير المصرفية الأوروبية لمنصة صافي باي.',
};

export default function DashboardPage() {
  return <SystemNoticePage lang="ar" />;
}