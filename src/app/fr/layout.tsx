// src/app/fr/layout.tsx

export const metadata = {
  title: 'SafiPay - Banque Numérique',
  description: 'La première solution de banque numérique internationale pour les Afghans.',
};

export default function FRLayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند
  return (
    <>
      {children}
    </>
  );
}