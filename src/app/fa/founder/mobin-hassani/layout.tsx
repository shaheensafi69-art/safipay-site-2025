import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مبین حسنی — بنیان‌گذار و استراتژیست ارشد فین‌تک جهانی | SafiPay',
  description: 'پروفایل اجرایی و رسمی مبین حسنی، هم‌بنیان‌گذار و استراتژیست ارشد فین‌تک بین‌المللی در SafiPay. ارتباط مستقیم: mobin@safipay.net.',
  keywords: ['مبین حسنی', 'بنیان گذار سافی پی', 'Mobin Hassani', 'استراتژیست فین تک', 'mobin@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/founder/mobin-hassani',
  },
  openGraph: {
    title: 'مبین حسنی — بنیان‌گذار و استراتژیست ارشد فین‌تک جهانی | SafiPay',
    description: 'پروفایل اجرایی و رسمی مبین حسنی، هم‌بنیان‌گذار و استراتژیست ارشد فین‌تک بین‌المللی در SafiPay. ارتباط مستقیم: mobin@safipay.net.',
    url: 'https://www.safipay.net/fa/founder/mobin-hassani',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function MobinHassaniFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
