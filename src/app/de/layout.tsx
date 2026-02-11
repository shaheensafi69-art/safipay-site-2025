// src/app/de/layout.tsx

export const metadata = {
  title: 'SafiPay - Digitales Banking',
  description: 'Die Zukunft des digitalen Bankwesens für Afghanistan.',
};

export default function GERLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" dir="ltr">
      <body className="antialiased selection:bg-amber-500/30">
        {children}
      </body>
    </html>
  );
}