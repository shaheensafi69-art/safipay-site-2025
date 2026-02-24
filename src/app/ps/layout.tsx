// src/app/ps/layout.tsx

export const metadata = {
  title: 'SafiPay - ډیجیټل بانک',
  description: 'د افغانستان لپاره د نړیوال ډیجیټل بانکدارۍ لومړنی سیسټم.',
};

export default function PSLayout({ children }: { children: React.ReactNode }) {
  // تمام تگ‌های ریشه حذف شدند تا ارور Hydration برطرف شود
  return (
    <>
      {children}
    </>
  );
}