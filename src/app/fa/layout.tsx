// src/app/fa/layout.tsx

export const metadata = {
  title: 'SafiPay - بانک دیجیتال',
};

export default function RTLLayout({ children }: { children: React.ReactNode }) {
  // تگ‌های html و body حذف شدند چون در لایوت اصلی وجود دارند
  return <>{children}</>;
}