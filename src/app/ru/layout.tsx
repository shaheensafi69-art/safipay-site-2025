// src/app/ru/layout.tsx

export const metadata = {
  title: 'SafiPay - Цифровой Банкинг',
  description: 'Первый международный цифровой банк для Афганистана.',
};

export default function RULayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" dir="ltr">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}