import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'چارچوب بین‌المللی مبارزه با پولشویی (6AMLD و FATF): سیستم‌های نظارت عملیاتی صافی‌پی',
  description: 'تحلیل جامع سیستم‌های نظارت عملیاتی ضدپولشویی (AML)، توصیه‌های ۴۰‌گانه FATF، غربالگری خودکار PEP و تحریم‌ها در صافی‌پی به قلم مجتبی رحمانی، مدیر عملیات.',
  keywords: ['مبارزه با پولشویی AML', 'قوانین 6AMLD اروپا', 'گروه ویژه اقدام مالی FATF', 'مجتبی رحمانی', 'مدیر عملیات SafiPay', 'غربالگری تحریم ها و PEP'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/aml-fatf-regulatory-compliance',
  },
  openGraph: {
    title: 'چارچوب بین‌المللی مبارزه با پولشویی (6AMLD و FATF): سیستم‌های نظارت عملیاتی صافی‌پی',
    description: 'تحلیل جامع سیستم‌های نظارت عملیاتی ضدپولشویی (AML)، توصیه‌های ۴۰‌گانه FATF، غربالگری خودکار PEP و تحریم‌ها در صافی‌پی به قلم مجتبی رحمانی، مدیر عملیات.',
    url: 'https://www.safipay.net/fa/blog/aml-fatf-regulatory-compliance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function AmlFatfLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
