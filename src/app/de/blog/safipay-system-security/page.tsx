import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Cpu, Globe2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'امنیت صافی‌پی | حفاظت مالی در سطح نظامی',
  description: 'بیاموزید که چگونه صافی‌پی از رمزنگاری SHA-256 و پروتکل‌های پیشرفته برای محافظت از دارایی‌های دیجیتال شما استفاده می‌کند.',
};

export default function SecurityBlogFa() {
  return (
    // فعال‌سازی حالت راست‌چین
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Badge & Title - تراز شده به راست */}
        <div className="text-right mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black tracking-[0.1em] uppercase mb-6">
            <ShieldCheck size={14} /> امنیت در سطح نظامی
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 italic uppercase leading-[1.2]">
            چگونه <span className="text-amber-500">سیستم</span> <br/>از شما محافظت می‌کند.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            صافی‌پی با یک معماری امنیتی چندلایه مهندسی شده است تا اطمینان حاصل شود که تراکنش‌های جهانی شما خصوصی و تغییرناپذیر باقی می‌مانند.
          </p>
        </div>

        {/* Security Image/Banner */}
        <div className="relative w-full h-[350px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]">
          <div className="absolute inset-0 opacity-20 grayscale scale-150 blur-sm">
            <Image src="/blog/logo.png" alt="امنیت صافی‌پی" fill className="object-contain" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock size={120} className="text-amber-500 opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Technical Sections - بخش‌های فنی */}
        <div className="grid grid-cols-1 gap-8 text-right">
          
          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                <Cpu className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">۰۱. رمزنگاری SHA-256</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  تمام داده‌ها در اکوسیستم صافی‌پی توسط پروتکل رمزنگاری SHA-256 محافظت می‌شوند. این همان استانداردی است که توسط نهادهای مالی جهانی و شبکه‌های بلاک‌چین استفاده می‌شود تا اطمینان حاصل شود که هیچ شخص غیرمجازی نمی‌تواند به داده‌های شما دسترسی داشته باشد یا آن‌ها را تغییر دهد.
                </p>
              </div>
            </div>
          </section>

          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                <Globe2 className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">۰۲. گره‌های اتصال جهانی</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  سیستم ما از طریق یک شبکه غیرمتمرکز از گره‌های (Nodes) امن در کابل، پاریس و استانبول عمل می‌کند. این موضوع پایداری بالا را تضمین کرده و احتمال خرابی سیستم را به صفر می‌رساند و تسویه‌حساب‌های آنی را بدون تأخیرهای بانکی سنتی فراهم می‌کند.
                </p>
              </div>
            </div>
          </section>

          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                <ShieldCheck className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">۰۳. تشخیص کلاهبرداری در لحظه</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  ما یک لایه نظارتی مبتنی بر هوش مصنوعی مهندسی کرده‌ایم که الگوهای تراکنش را در لحظه تحلیل می‌کند. هرگونه فعالیت مشکوک بلافاصله شناسایی و مسدود می‌شود تا از جابه‌جایی غیرمجاز دارایی‌ها جلوگیری شود.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Closing Action - بخش نهایی */}
        <div className="mt-20 p-12 rounded-[4rem] bg-white text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-right">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">دارایی شما، <br/><span className="text-amber-600">مسئولیت ماست.</span></h3>
          </div>
          <Link href="/fa/contact" className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black text-xs tracking-[0.1em] hover:bg-amber-600 transition-all uppercase">
             بانکداری امن را شروع کنید <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}