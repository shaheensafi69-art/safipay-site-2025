// src/app/ru/layout.tsx

export const metadata = {
  title: 'SafiPay - Цифровой Банкинг',
  description: 'Современная международная цифровая банковская система глобального масштаба.',
};

export default function RULayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند تا پروژه اجازه Build پیدا کند
  return (
    <>
      {children}
    </>
  );
}