// app/page.tsx
export default function LanguageSelector() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white p-6">
      <div className="text-center max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold text-amber-500 mb-8">
          SafiPay
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-gray-300">
          لطفاً زبان خود را انتخاب کنید
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <a
            href="/fa"
            className="flex flex-col items-center p-8 bg-gray-900/70 border border-amber-800/50 rounded-2xl hover:border-amber-600 hover:bg-amber-950/50 transition-all duration-300 group"
          >
            <span className="text-7xl mb-4 group-hover:scale-110 transition-transform">🇦🇫</span>
            <span className="text-2xl md:text-3xl font-bold text-amber-400 group-hover:text-amber-300">
              فارسی
            </span>
          </a>

          <a
            href="/en"
            className="flex flex-col items-center p-8 bg-gray-900/70 border border-amber-800/50 rounded-2xl hover:border-amber-600 hover:bg-amber-950/50 transition-all duration-300 group"
          >
            <span className="text-7xl mb-4 group-hover:scale-110 transition-transform">🇬🇧</span>
            <span className="text-2xl md:text-3xl font-bold text-amber-400 group-hover:text-amber-300">
              English
            </span>
          </a>

          <a
            href="/ps"
            className="flex flex-col items-center p-8 bg-gray-900/70 border border-amber-800/50 rounded-2xl hover:border-amber-600 hover:bg-amber-950/50 transition-all duration-300 group"
          >
            <span className="text-7xl mb-4 group-hover:scale-110 transition-transform">🇦🇫</span>
            <span className="text-2xl md:text-3xl font-bold text-amber-400 group-hover:text-amber-300">
              پښتو
            </span>
          </a>

          <a
            href="/fr"
            className="flex flex-col items-center p-8 bg-gray-900/70 border border-amber-800/50 rounded-2xl hover:border-amber-600 hover:bg-amber-950/50 transition-all duration-300 group"
          >
            <span className="text-7xl mb-4 group-hover:scale-110 transition-transform">🇫🇷</span>
            <span className="text-2xl md:text-3xl font-bold text-amber-400 group-hover:text-amber-300">
              Français
            </span>
          </a>
        </div>

        <p className="mt-12 text-lg text-gray-400">
          بعد از انتخاب زبان، می‌توانید از منوی بالا زبان را تغییر دهید.
        </p>
      </div>
    </div>
  );
}