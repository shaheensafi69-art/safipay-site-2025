// src/app/ps/layout.tsx

export const metadata = {
  title: 'SafiPay - ډیجیټل بانک',
  description: 'په نړیواله کچه د عصري او نوښتګر ډیجیټل بانکدارۍ سیسټم.',
};

export default function PSLayout({ children }: { children: React.ReactNode }) {
  // تمام تگ‌های ریشه حذف شدند تا ارور Hydration برطرف شود
  return (
    <>
      {children}
    </>
  );
}