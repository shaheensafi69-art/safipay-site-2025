import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'صافی‌پی چیست؟ | آینده بانکداری دیجیتال افغان‌ها',
  description: 'کشف اکوسیستم انقلابی صافی‌پی، طراحی شده برای اتصال جامعه افغانستان به بازارهای جهانی.',
};

export default function WhatIsSafiPayFa() {
  return (
    // تنظیم جهت به راست به چپ (RTL)
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header - Right Aligned */}
        <div className="text-right mb-16">
          <div className="relative w-20 h-20 mb-8 bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl mr-0 ml-auto">
            <Image 
              src="/blog/logo.png" 
              alt="لوگوی صافی‌پی" 
              fill 
              className="object-contain p-2 brightness-125" 
            />
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[1.2] mb-8 uppercase">
            تعریف دوباره <br />
            <span className="text-amber-500">بانکداری دیجیتال.</span>
          </h1>
          <div className="h-1 w-24 bg-amber-500 rounded-full mr-0 ml-auto" />
        </div>

        {/* Banner Image */}
        <div className="relative w-full h-[400px] md:h-[550px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
          <Image 
            src="/blog/banner.png" 
            alt="بنر سیستم صافی‌پی" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-[2s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          
          <section className="space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 italic border-r-4 border-amber-500 pr-8">
              "صافی‌پی فقط یک اپلیکیشن نیست؛ یک دروازه مالی بدون مرز است که برای نسل جدید افغان‌های سراسر جهان مهندسی شده است."
            </p>
          </section>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
              <Zap className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-black italic text-2xl mb-4 uppercase">سرعت آنی</h3>
              <p className="text-gray-400 leading-relaxed">
                عبور از بروکراسی‌های سنتی بانکی برای ارائه تسویه‌حساب‌های لحظه‌ای در میان قاره‌ها.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
              <Shield className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-black italic text-2xl mb-4 uppercase">امنیت کامل</h3>
              <p className="text-gray-400 leading-relaxed">
                معماری ساخته شده با پروتکل‌های رمزنگاری سطح بالا، که تغییرناپذیری هر تراکنش را تضمین می‌کند.
              </p>
            </div>
          </div>

          {/* Detailed Article Section */}
          <article className="prose prose-invert prose-amber max-w-none text-gray-400 text-lg leading-relaxed text-right">
            <p className="mb-8">
              تحت چشم‌انداز استراتژیک <span className="text-white font-bold">شاهین صافی</span>، صافی‌پی به عنوان یک قدرت نوظهور در بخش فین‌تک ظاهر شده است. ما فقط یک کیف پول نساختیم؛ ما یک زیرساخت کامل مالی را مهندسی کردیم.
            </p>
            <p className="mb-8">
              سیستم ما از ادغام اختصاصی API و شبکه‌های نقدینگی جهانی استفاده می‌کند تا اطمینان حاصل شود که کاربران ما در کابل، پاریس یا استانبول، همان کیفیت بالای بانکی استاندارد را تجربه می‌کنند.
            </p>
          </article>

          {/* Call to Action */}
          <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-l from-amber-500/10 to-transparent border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-right">
              <h4 className="text-2xl font-bold text-white mb-2">آماده بررسی سیستم هستید؟</h4>
              <p className="text-gray-400 text-sm">در پروتکل‌های امنیتی سطح نظامی ما عمیق شوید.</p>
            </div>
            <Link 
              href="/fa/blog/safipay-system-security" 
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-xs tracking-widest hover:bg-amber-500 transition-all uppercase"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> امنیت سیستم
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}