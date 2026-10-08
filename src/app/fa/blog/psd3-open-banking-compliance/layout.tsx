import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'انطباق با دستورالعمل‌های PSD2 و PSD3 اروپا: استانداردهای فنی و امنیت API توسعه‌دهندگان',
  description: 'تشریح معماری فنی بانکداری باز (Open Banking)، استانداردهای فنی EBA RTS، احراز هویت قوی (SCA) و مهاجرت به PSD3 در صافی‌پی به قلم مبین حسنی، لیدر بخش دولوپمنت.',
  keywords: ['دستورالعمل PSD3 اروپا', 'استانداردهای PSD2', 'بانکداری باز Open Banking', 'احراز هویت قوی SCA', 'مبین حسنی', 'لیدر بخش دولوپمنت SafiPay', 'امنیت API بانکی'],
  alternates: {
    canonical: 'https://www.safipay.net/fa/blog/psd3-open-banking-compliance',
  },
  openGraph: {
    title: 'انطباق با دستورالعمل‌های PSD2 و PSD3 اروپا: استانداردهای فنی و امنیت API توسعه‌دهندگان',
    description: 'تشریح معماری فنی بانکداری باز (Open Banking)، استانداردهای فنی EBA RTS، احراز هویت قوی (SCA) و مهاجرت به PSD3 در صافی‌پی به قلم مبین حسنی، لیدر بخش دولوپمنت.',
    url: 'https://www.safipay.net/fa/blog/psd3-open-banking-compliance',
    siteName: 'SafiPay',
    type: 'article',
  },
};

export default function Psd3ComplianceLayoutFa({ children }: { children: React.ReactNode }) {
  return children;
}
