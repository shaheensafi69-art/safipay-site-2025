'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote, User, Landmark, ShieldCheck, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageArabic() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ar';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- قسم الهيرو (مقدمة) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            إعادة صياغة النموذج المالي في أفغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            نبتكرُ ما هو <br /> أبعد من الخدمات البنكية
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            سافي باي (SafiPay) ليست مجرد تطبيق؛ إنها بنية تحتية ثورية تهدف إلى إضفاء الطابع الديمقراطي على الوصول إلى الأنظمة المالية الدولية لكل مواطن أفغاني.
          </motion.p>
        </div>
      </section>

      {/* --- قسم المؤسسين وفريق القيادة --- */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-24 italic uppercase tracking-widest text-amber-500 text-center">فريق القيادة</h2>
        <div className="flex flex-col gap-40">
          
          {/* ١. شاهين صافي - المؤسس والرئيس التنفيذي */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                <Image 
                  src="/shaheen.jpeg" 
                  alt="شاهين صافي - المؤسس والرئيس التنفيذي" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase text-right">المؤسس / الرئيس التنفيذي</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Star size={14} /> القيادة والاستراتيجية
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-right">شاهين صافي <span className="text-gray-600 text-3xl font-light block mt-2 font-sans italic">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهين صافي (مواليد ٢٠٠٣)، هو خبير استراتيجي في التكنولوجيا المالية والمعمار الرئيسي لمنظومة SafiPay. يقود المهمة لردم الفجوة بين أفغانستان والأسواق المالية العالمية، مستنداً إلى خبرة واسعة في إدارة تكنولوجيا المعلومات والأعمال الرقمية.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/shaheen-safi`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  عرض السيرة الذاتية الكاملة
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ٢. مجتبى رحماني - شريك مؤسس ورئيس تكنولوجيا المعلومات */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> الهندسة والأمن السيبراني
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبى رحماني <span className="text-gray-600 text-3xl font-light block mt-2 font-sans italic">Mujtaba Rahmani</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  مجتبى رحماني (مواليد ٢٠٠٦)، هو المهندس المسؤول عن البنية التحتية الآمنة لـ SafiPay. يشرف بصفته رئيس تكنولوجيا المعلومات على بروتوكولات الأمن السيبراني وتطبيق تقنيات الدفع الرقمي القابلة للتوسع.
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/mujtaba-rahmani`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 font-bold hover:bg-blue-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  استكشاف الملف التقني
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/mujtaba.jpeg" alt="مجتبى رحماني" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>
          </div>

          {/* ٣. ساحل سالم - مدير النظم المصرفية */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/sahel.jpeg" alt="ساحل سالم" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-right"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> النظم المصرفية والعمليات
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2 font-sans italic">Sahel Salem</span></h2>
              <p className="text-gray-300 text-xl font-light leading-relaxed text-justify">
                ساحل سالم (مواليد ٢٠٠٧)، يتولى إدارة تكامل حسابات المستخدمين والنظام المصرفي داخل SafiPay، مما يضمن وجود واجهة سلسة بين الأصول الرقمية والأطر المالية التقليدية.
              </p>
              <div className="pt-4">
                <Link 
                  href={`/${currentLang}/founder/sahel-salem`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-2xl text-green-400 font-bold hover:bg-green-500 hover:text-black transition-all group"
                >
                  <User size={20} />
                  عرض الملف المصرفي
                  <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- قسم مهمة SafiPay --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-white text-center">مهمتنا في SafiPay</h2>
            <div className="w-24 h-2 bg-amber-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light text-justify">
              <p>
                تأسست SafiPay بناءً على فرضية بسيطة وقوية: <span className="text-white font-bold">"الشمول المالي هو حق أساسي".</span> في منطقة غالباً ما تكون معزولة عن الشبكة المصرفية العالمية، نحن نوفر التكنولوجيا التي تجسر هذه الفجوة.
              </p>
              <p>
                منصتنا ليست مجرد وسيلة للمعاملات؛ بل هي لبناء مستقبل مالي مستدام. نحن نصمم نظاماً عابراً للحدود يمكّن رواد الأعمال والعائلات في أفغانستان من المشاركة في الاقتصاد العالمي دون عوائق.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Landmark className="text-amber-500" />, title: "مصرفية رقمية", desc: "حساب مصرفي افتراضي متكامل لكل مستخدم." },
                { icon: <ShieldCheck className="text-green-500" />, title: "أمن مطلق", desc: "تشفير رفيع المستوى وأمان لا مركزي للأصول." },
                { icon: <Globe className="text-blue-500" />, title: "وصول عالمي", desc: "ارتباط فوري بالأسواق الدولية والعملات المستقرة." },
                { icon: <Cpu className="text-purple-500" />, title: "ذكاء اصطناعي", desc: "كشف ذكي للاحتيال وتحليلات مالية مؤتمتة." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-amber-500/50 transition-colors group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- دعوة للعمل (CTA) --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <motion.div className="bg-gradient-to-br from-amber-600 to-amber-900 p-20 rounded-[4rem]">
            <h2 className="text-5xl font-black text-white mb-8 italic uppercase">انضم إلى مستقبل المال</h2>
            <p className="text-amber-100/70 mb-12 max-w-2xl mx-auto text-lg">ساهم معنا في بناء الجيل القادم من البنية التحتية المالية لأفغانستان وما وراءها.</p>
            <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-amber-100 transition-colors group">
                ابدأ الشراكة معنا <ArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
        </motion.div>
      </section>
    </div>
  );
}