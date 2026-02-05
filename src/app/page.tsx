// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function LanguageSelectPage() {
  const languages = [
    { code: 'fa', name: 'فارسی', flag: '/flags/af.svg' },
    { code: 'ps', name: 'پښتو', flag: '/flags/af.svg' },
    { code: 'en', name: 'English', flag: '/flags/gb.svg' },
    { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center mb-12">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="SafiPay"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-500">
          به SafiPay خوش آمدید
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          لطفاً زبان مورد نظر خود را انتخاب کنید
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={`/${lang.code}`}
            className="group flex flex-col items-center p-8 bg-gray-900/60 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:bg-amber-950/40 transition-all duration-300 text-center shadow-lg hover:shadow-amber-900/30"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
              {/* اگر پرچم به صورت عکس داری، این‌جا استفاده کن */}
              {/* در غیر این صورت می‌توانی از emoji استفاده کنی: */}
              {lang.code === 'fa' || lang.code === 'ps' ? '🇦🇫' : lang.code === 'en' ? '🇬🇧' : '🇫🇷'}
            </div>
            <h2 className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
              {lang.name}
            </h2>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-gray-400 text-center">
        بعد از انتخاب زبان، می‌توانید به راحتی زبان را از منوی بالا تغییر دهید.
      </p>
    </div>
  );
}