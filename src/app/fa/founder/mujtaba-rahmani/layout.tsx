import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مجتبی رحمانی — بنیان‌گذار و کارشناس ارشد اقتصاد و فناوری | SafiPay',
  description: 'پروفایل رسمی و بیوگرافی مجتبی رحمانی، هم‌بنیان‌گذار و تحلیل‌گر ارشد اقتصادی و امنیت فنی در SafiPay. ارتباط مستقیم: mujtaba@safipay.net.',
  keywords: ['مجتبی رحمانی', 'بنیان گذار سافی پی', 'Mujtaba Rahmani', 'کارشناس اقتصاد فین تک', 'mujtaba@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/founder/mujtaba-rahmani',
  },
  openGraph: {
    title: 'مجتبی رحمانی — بنیان‌گذار و کارشناس ارشد اقتصاد و فناوری | SafiPay',
    description: 'پروفایل رسمی و بیوگرافی مجتبی رحمانی، هم‌بنیان‌گذار و تحلیل‌گر ارشد اقتصادی و امنیت فنی در SafiPay. ارتباط مستقیم: mujtaba@safipay.net.',
    url: 'https://www.safipay.net/fa/founder/mujtaba-rahmani',
    siteName: 'SafiPay',
    type: 'profile',
  },
};

export default function MujtabaRahmaniFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
