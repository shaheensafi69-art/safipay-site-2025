// src/app/tr/layout.tsx

export const metadata = {
  title: 'SafiPay - Dijital Bankacılık',
  description: 'Afganistan için ilk uluslararası dijital bankacılık sistemi.',
};

export default function TRLayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند تا از تداخل ساختاری جلوگیری شود
  return (
    <>
      {children}
    </>
  );
}