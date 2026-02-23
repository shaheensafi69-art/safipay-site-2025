'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Globe, GraduationCap, 
  Award, BookOpen, Cpu, Gamepad2, Lightbulb 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShaheenSafiBio() {
  
  // دیتای اسکیما برای این صفحه خاص
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shaheen Safi",
    "alternateName": "شاهین صافی",
    "jobTitle": "CEO & Founder of SafiPay",
    "url": "https://safipay.com/fa/founder",
    "image": "https://safipay.com/shaheen.jpeg",
    "birthDate": "2003-04-02",
    "knowsAbout": ["FinTech", "Digital Banking", "Blockchain", "Trading"],
    "description": "بنیان‌گذار سافی‌پی و کارآفرین حوزه تکنولوژی با هدف ایجاد تحول در سیستم مالی افغانستان."
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-20">
      {/* تزریق اسکیما */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* --- بخش Hero --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 border-2 border-amber-500 rounded-[3rem] rotate-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]" />
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3rem] overflow-hidden border border-white/10">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="Shaheen Safi" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-right flex-1"
            >
              <span className="text-amber-500 font-black tracking-widest uppercase text-sm mb-4 block">Founder & CEO</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
                شاهین <span className="text-amber-500 text-glow">صافی</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl md:ml-0 md:mr-auto">
                متخصص علوم کامپیوتر، کارآفرین حوزه فین‌تک و بنیان‌گذار اکوسیستم سافی‌پی (SafiPay).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- بخش داستان من --- */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500">
              <Lightbulb size={24} />
            </div>
            <h2 className="text-3xl font-black italic uppercase">داستان من</h2>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
            <p>
              مسیر من از علاقه شدید به دنیای تکنولوژی و بیزنس آنلاین شروع شد. به عنوان مدرس علوم کامپیوتر و متخصص سیستم‌های IT، همیشه به دنبال راه‌هایی بودم که از قدرت کدنویسی برای حل مشکلات واقعی استفاده کنم.
            </p>
            <p className="border-r-4 border-amber-500 pr-6 py-2 bg-amber-500/5 italic">
              «زمانی که ایده سافی‌پی در ذهنم شکل گرفت، برند قبلی‌ام یعنی SafiPro را فروختم تا تمام تمرکز و سرمایه‌ام را روی پروژه‌ای بگذارم که معتقدم آینده مالی افغان‌ها را تغییر خواهد داد.»
            </p>
            <p>
              هدف نهایی من فراتر از یک اپلیکیشن است؛ من می‌خواهم تمام افغان‌هایی که از اقتصاد جهانی محروم شده‌اند، دوباره هویت اقتصادی خود را به دست بیاورند. ما معتقدیم که دسترسی به بازارهای جهانی حق هر انسانی است.
            </p>
          </div>
        </div>
      </section>

      {/* --- بخش مهارت‌ها و تحصیلات --- */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* تحصیلات */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-amber-500" size={32} />
                <h3 className="text-2xl font-black italic">تحصیلات و افتخارات</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-amber-500 font-bold">2023</div>
                  <div>
                    <h4 className="font-bold">لیسانس علوم کامپیوتر</h4>
                    <p className="text-gray-500 text-sm">دانشگاه کاردان (Kardan University)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Award className="text-amber-500" size={20} />
                  <div>
                    <h4 className="font-bold">تقدیرنامه ترید از سازمان IFTA</h4>
                    <p className="text-gray-500 text-sm">تخصص در تحلیل بازارهای مالی</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* مهارت‌های کلیدی */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-8">
                <Cpu className="text-amber-500" size={32} />
                <h3 className="text-2xl font-black italic">تخصص فنی</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['FinTech', 'Digital Banking', 'Blockchain', 'Network Security', 'Trading'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- بخش فعالیت‌های غیرکاری --- */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-black italic mb-12 uppercase text-gray-500 tracking-widest">علایق شخصی</h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex flex-col items-center gap-3">
              <BookOpen size={28} />
              <span className="text-sm">مطالعه کتاب</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Gamepad2 size={28} />
              <span className="text-sm">گیمینگ</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-amber-500">
              <Zap size={28} />
              <span className="text-sm">ایده‌پردازی</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}