// src/app/ar/layout.tsx

export const metadata = {
  title: 'سافي بي - البنك الرقمي',
  description: 'أول بنك رقمي دولي لأفغانستان والحلول المالية الشاملة.',
};

export default function ARLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}