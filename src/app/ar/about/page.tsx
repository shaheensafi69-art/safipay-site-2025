'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowLeft, Briefcase, Code2, Star, Rocket, Target } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageAR() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'ar';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="rtl">
      
      {/* --- قسم الهيرو (المقدمة) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-amber-900/10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            إعادة صياغة الواقع المالي في أفغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            نكسر الحواجز <br /> البنكية العالمية
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay ليس مجرد تطبيق؛ بل هو بنية تحتية ثورية تهدف إلى تمكين كل مواطن أفغاني، في أي مكان في العالم، من الوصول إلى الأنظمة المالية الدولية بكل سيادة.
          </motion.p>
        </div>
      </section>

      {/* --- قسم المؤسسين --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col gap-40">
          
          {/* شاهين صافي - المؤسس والرئيس التنفيذي */}
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
              <div className="absolute -bottom-6 -right-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block text-white font-black italic tracking-widest text-lg uppercase">
                الرئيس التنفيذي / المؤسس
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
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهين صافي <span className="text-gray-600 text-3xl font-light block mt-2 tracking-normal">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light text-right">
                <p>
                  شاهين صافي (مواليد 2003)، خبير استراتيجي في التكنولوجيا المالية والمعمار الرئيسي لنظام SafiPay. يقود المشروع برؤية تهدف لإنهاء العزلة المالية لأفغانستان، حيث يتولى الإشراف على الاستراتيجيات الكبرى وهندسة الشراكات البنكية الدولية.
                </p>
                <p>
                  بخبرته في دمج تقنيات السحابة المالية والمعايير المصرفية الأوروبية الحديثة، جعل من SafiPay أول "نيوبنك" أفغاني حقيقي يعيد تعريف مفاهيم الأمان والوصول العالمي. هدفه واضح: "إعادة الهيبة والمصداقية المالية للهوية الأفغانية عالمياً".
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">الإدارة الاستراتيجية</h4>
                  <p className="text-sm text-gray-500">تطوير نماذج الأعمال وجذب الشركاء الدوليين.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">حلول الأزمات المالية</h4>
                  <p className="text-sm text-gray-500">تصميم حلول مبتكرة للوصول إلى الأسواق المالية العالمية.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* مجتبى رحماني - شريك مؤسس ورئيس التكنولوجيا */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> الهندسة والأمن السيبراني
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبى رحماني <span className="text-gray-600 text-3xl font-light block mt-2 tracking-normal">Mujtaba Rahmani</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light text-right">
                <p>
                  مجتبى رحماني (مواليد 2006)، هو العقل التقني ومهندس الأمن السيبراني في SafiPay. يمثل العمود الفقري التكنولوجي للمنصة، وهو المسؤول عن ضمان أمن واستقرار أنظمة المعاملات الفورية وحمايتها من أي اختراق.
                </p>
                <p>
                  من خلال عبقريته في تطوير البرمجيات القابلة للتوسع وفهمه العميق للبنى التحتية للمدفوعات، استطاع بناء نظام ينافس في سرعته ودقته البنوك العالمية الكبرى. مهمته هي بناء "حصن رقمي" يضمن حماية أصول المستخدمين تحت أي ظرف.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">بناء الأنظمة</h4>
                  <p className="text-sm text-gray-500">تطوير الخدمات المالية المصغرة والأنظمة الخلفية.</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">الأمن الرقمي</h4>
                  <p className="text-sm text-gray-500">تشفير متقدم وبروتوكولات حماية البيانات.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="مجتبى رحماني - رئيس التكنولوجيا" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / ARCHITECT
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- الرؤية والقيم --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "أمان مطلق", desc: "نستخدم بروتوكولات تشفير متعددة الطبقات لضمان سلامة كل معاملة مالية.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "اتصال عالمي", desc: "فتح أبواب الاقتصاد الرقمي لأفغانستان دون قيود الوساطة التقليدية.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "ابتكار مستمر", desc: "تطوير دائم لقدرات النيوبنك لتلبية تطلعات الأجيال القادمة.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all text-right"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- الخاتمة (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">جاهز لشراكة استراتيجية؟</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                في SafiPay، نبحث عن النخب المالية والشركاء الاستراتيجيين الدوليين لإعادة رسم ملامح المستقبل.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                تقديم طلب شراكة تجارية <ArrowLeft className="mr-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}