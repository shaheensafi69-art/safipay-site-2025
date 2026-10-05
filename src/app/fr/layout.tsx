// src/app/fr/layout.tsx

export const metadata = {
  title: 'SafiPay - Banque Numérique',
  description: 'La solution de banque numérique internationale moderne à l’échelle mondiale.',
};

export default function FRLayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند
  return (
    <>
      {children}
    </>
  );
}