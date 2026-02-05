// src/app/ps/layout.tsx (یا ps)
export const metadata = {
  title: 'SafiPay - بانک دیجیتال',
};

export default function RTLLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}