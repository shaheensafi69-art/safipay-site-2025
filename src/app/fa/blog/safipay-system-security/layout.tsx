import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های شما محافظت می‌کند',
  description: 'بررسی تخصصی معماری امنیتی SafiPay: پروتکل‌های رمزنگاری نظامی AES-256، ایزوله‌سازی کلیدها و استانداردهای انطباق SEPA در اتحادیه اروپا.',
  keywords: ['امنیت سافی پی', 'امنیت بانکداری دیجیتال', 'رمزنگاری AES-256', 'حفاظت دارایی بانکی', 'SafiPay Security', 'مجتبی رحمانی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/safipay-system-security',
  },
  openGraph: {
    title: 'امنیت نهادی در سطح اتحادیه اروپا: چگونه سافی‌پی از دارایی‌های شما محافظت می‌کند',
    description: 'بررسی تخصصی معماری امنیتی SafiPay: پروتکل‌های رمزنگاری نظامی AES-256، ایزوله‌سازی کلیدها و استانداردهای انطباق SEPA در اتحادیه اروپا.',
    url: 'https://www.safipay.net/fa/blog/safipay-system-security',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function SecurityFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
