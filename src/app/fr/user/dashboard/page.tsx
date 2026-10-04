import SystemNoticePage from '@/components/SystemNoticePage';

export const metadata = {
  title: 'Tableau de Bord Client | SafiPay',
  description: 'Avis officiel concernant le déploiement du système bancaire SafiPay et la conformité européenne.',
};

export default function DashboardPage() {
  return <SystemNoticePage lang="fr" />;
}