import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'شاهین صافی | بینش پشت سیستم صافی‌پی',
  description: 'داستان شخصی و فلسفه مهندسی شاهین صافی، بنیان‌گذار و مدیرعامل صافی‌پی.',
};

export default function ShaheenBlogFa() {
  return (
    // استفاده از dir="rtl" برای چیدمان راست به چپ
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header - Right Aligned */}
        <div className="text-right mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black tracking-[0.1em] uppercase mb-6">
            مانیفست شخصی بنیان‌گذار
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[1.2] mb-8">
            فراتر از <br />
            <span className="text-amber-500">الگوریتم‌ها.</span>
          </h1>
          <div className="h-1 w-24 bg-amber-500 rounded-full mr-0 ml-auto" />
        </div>

        {/* Portrait Photo Section */}
        <div className="relative w-full max-w-2xl ml-auto mr-0 h-[600px] md:h-[800px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image 
            src="/blog/shaheen.jpeg" 
            alt="شاهین صافی" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
          
          <div className="absolute bottom-12 right-12 left-12 text-right">
            <p className="text-4xl font-black italic tracking-tighter text-white">شاهین صافی</p>
            <p className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mt-2">بنیان‌گذار و مدیرعامل صافی‌پی</p>
          </div>
        </div>

        {/* Blog Content - Right Aligned */}
        <div className="max-w-3xl mr-0 ml-auto text-right">
          <div className="space-y-12 text-justify">
            
            {/* Quote - Border on the Right */}
            <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-gray-200 border-r-4 border-amber-500 pr-8 py-2">
              "مهندسی فقط درباره نحو (Syntax) کدها نیست؛ بلکه درباره ساختن پل‌هایی برای افرادی است که توسط اقتصاد جهانی نادیده گرفته شده‌اند."
            </p>

            <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              <p>
                نام من <span className="text-white font-bold">شاهین صافی</span> است. به عنوان یک مهندس نرم‌افزار، سال‌ها جهان را از دریچه منطق و داده‌ها دیدم. اما متوجه شدم که برای جامعه من در افغانستان و مهاجران در سراسر جهان، منطق بانکداری جهانی در حال شکست خوردن است.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 text-right">
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/20 transition-colors">
                  <h3 className="text-white font-black italic text-xl mb-4">ماموریت ما</h3>
                  <p className="text-sm">تمرکززدایی از قدرت مالی و ارائه ابزارهایی به هر افغان برای انجام معاملات جهانی، ایمن و آنی.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/20 transition-colors">
                  <h3 className="text-white font-black italic text-xl mb-4">کد و سیستم</h3>
                  <p className="text-sm">صافی‌پی فقط یک اپلیکیشن نیست؛ یک اکوسیستم با امنیت بالا است که برای مقابله با پیچیدگی‌های مالی بین‌المللی مهندسی شده است.</p>
                </div>
              </div>

              <p>
                وقتی <span className="text-amber-500 font-bold">صافی‌پی</span> را تأسیس کردم، فقط نمی‌خواستم یک شرکت بسازم. می‌خواستم یک میراث ماندگار ایجاد کنم. سیستمی که وقتی دیگران کار نمی‌کنند، کار کند. پلتفرمی که به زبان آینده صحبت می‌کند.
              </p>
            </div>

            {/* Final CTA - Right Aligned Layout */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-amber-500 bg-white/5">
                  <Image src="/blog/logo.png" alt="SafiPay" fill className="object-contain p-2" />
                </div>
                <p className="text-gray-500 text-sm italic underline decoration-amber-500/20">سفر نوآوری همچنان ادامه دارد.</p>
              </div>
              
              <Link href="/fa/blog/what-is-safipay" className="px-8 py-4 rounded-full bg-white text-black font-black text-xs tracking-widest hover:bg-amber-500 transition-all uppercase">
                بررسی سیستم صافی‌پی
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}