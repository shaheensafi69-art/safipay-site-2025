import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'حریم خصوصی و استانداردهای حفاظت از داده‌ها (GDPR) | SafiPay',
  description: 'سیاست‌های رسمی حفاظت از اطلاعات هویتی و مالی کاربران در SafiPay مطابق با بالاترین استانداردهای حفاظت از حریم خصوصی اتحادیه اروپا (GDPR).',
  keywords: ['حریم خصوصی سافی پی', 'قوانین GDPR', 'حفاظت از اطلاعات بانکی', 'compliance@safipay.net'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/privacy',
  },
  openGraph: {
    title: 'حریم خصوصی و استانداردهای حفاظت از داده‌ها (GDPR) | SafiPay',
    description: 'سیاست‌های رسمی حفاظت از اطلاعات هویتی و مالی کاربران در SafiPay مطابق با بالاترین استانداردهای حفاظت از حریم خصوصی اتحادیه اروپا (GDPR).',
    url: 'https://www.safipay.net/fa/privacy',
    siteName: 'SafiPay',
  },
};

export default function PrivacyFaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
