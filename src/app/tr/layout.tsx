// src/app/tr/layout.tsx

export const metadata = {
  title: 'SafiPay - Dijital Bankacılık',
  description: 'Afganistan için ilk uluslararası dijital bankacılık sistemi.',
};

export default function TRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" dir="ltr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}