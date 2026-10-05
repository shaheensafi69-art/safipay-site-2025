// src/app/ar/layout.tsx

export const metadata = {
  title: 'سافي بي - البنك الرقمي',
  description: 'النظام المصرفي الرقمي الدولي المتكامل على المستوى العالمي.',
};

export default function ARLayout({ children }: { children: React.ReactNode }) {
  // تمام تگ‌های html و body را حذف کردیم
  return (
    <>
      {children}
    </>
  );
}