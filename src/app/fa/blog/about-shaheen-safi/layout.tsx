import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'داستان ساخت سافی‌پی: از چالش‌های آغازین تا هاب بین‌المللی پاریس',
  description: 'مسیر الهام‌بخش ساخت نئوبانک بین‌المللی SafiPay به رهبری شاهین صافی؛ پشتکار، نوآوری در فین‌تک و ماموریت آزادسازی مبادلات مالی برای شهروندان بدون مرز.',
  keywords: ['داستان شاهین صافی', 'بنیان گذار سافی پی', 'تاریخچه SafiPay', 'هاب پاریس', 'نئوبانک بین المللی', 'شاهین صافی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/about-shaheen-safi',
  },
  openGraph: {
    title: 'داستان ساخت سافی‌پی: از چالش‌های آغازین تا هاب بین‌المللی پاریس',
    description: 'مسیر الهام‌بخش ساخت نئوبانک بین‌المللی SafiPay به رهبری شاهین صافی؛ پشتکار، نوآوری در فین‌تک و ماموریت آزادسازی مبادلات مالی برای شهروندان بدون مرز.',
    url: 'https://www.safipay.net/fa/blog/about-shaheen-safi',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function AboutShaheenSafiFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
