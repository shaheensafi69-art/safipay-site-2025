// app/page.tsx
import Link from 'next/link';

export default function LanguageSelector() {
  const languages = [
    { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white p-6">
      <div className="text-center max-w-5xl w-full">
        {/* لوگو و عنوان */}
        <div className="mb-12">
          <img
            src="/logo.png"
            alt="SafiPay"
            className="mx-auto h-24 w-auto mb-6"
          />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-500 mb-4">
            به SafiPay خوش آمدید
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            لطفاً زبان مورد نظر خود را انتخاب کنید
          </p>
        </div>

        {/* کارت‌های زبان */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="group flex flex-col items-center justify-center p-8 bg-gray-900/70 border border-amber-800/50 rounded-2xl hover:border-amber-600 hover:bg-amber-950/50 transition-all duration-300 shadow-xl hover:shadow-amber-900/40 transform hover:scale-105"
            >
              <span className="text-8xl mb-6 group-hover:scale-110 transition-transform">
                {lang.flag}
              </span>
              <span className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                {lang.name}
              </span>
            </Link>
          ))}
        </div>

        {/* متن پایین صفحه */}
        <p className="mt-16 text-lg text-gray-400">
          بعد از انتخاب زبان، می‌توانید از منوی بالا هر زمان که خواستید زبان را تغییر دهید.
        </p>
      </div>
    </div>
  );
}