// src/app/de/layout.tsx

export const metadata = {
  title: 'SafiPay - Digitales Banking',
  description: 'Die Zukunft des modernen digitalen Bankwesens weltweit.',
};

export default function GERLayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند تا با لایوت اصلی تداخل نداشته باشند
  return (
    <>
      {children}
    </>
  );
}