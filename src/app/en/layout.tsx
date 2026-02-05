// src/app/en/layout.tsx (یا fr)
export const metadata = {
  title: 'SafiPay - Digital Bank',
};

export default function LTRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}