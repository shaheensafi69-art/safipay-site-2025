import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'استانداردهای نظارتی FCA بریتانیا و سیاست‌های حفاظت از سرمایه در اکوسیستم صافی‌پی',
  description: 'تحلیل تخصصی استانداردهای مرجع رفتار مالی بریتانیا (FCA)، مقررات پول الکترونیکی (EMRs) و سیستم‌های تفکیک و حفاظت از دارایی کاربران (Safeguarding) در صافی‌پی به قلم شیرین گل احمدی.',
  keywords: ['رگولاتوری FCA بریتانیا', 'مقررات پول الکترونیکی EMRs', 'حفاظت از سرمایه Safeguarding', 'شیرین گل احمدی', 'مدیر کل اکوسیستم SafiPay', 'امنیت سرمایه کاربران'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/fca-compliance-standards',
  },
  openGraph: {
    title: 'استانداردهای نظارتی FCA بریتانیا و سیاست‌های حفاظت از سرمایه در اکوسیستم صافی‌پی',
    description: 'تحلیل تخصصی استانداردهای مرجع رفتار مالی بریتانیا (FCA)، مقررات پول الکترونیکی (EMRs) و سیستم‌های تفکیک و حفاظت از دارایی کاربران (Safeguarding) در صافی‌پی به قلم شیرین گل احمدی.',
    url: 'https://www.safipay.net/fa/blog/fca-compliance-standards',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function FcaComplianceLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
