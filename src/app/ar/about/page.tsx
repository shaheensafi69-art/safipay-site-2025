'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Globe, Zap, ArrowRight, Briefcase, Code2, Star, Rocket, Target, Banknote } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPage() {
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
            إعادة صياغة النموذج المالي في أفغانستان
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-l from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            نحن نتجاوز <br /> حدود العمل المصرفي
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light"
          >
            SafiPay ليس مجرد تطبيق؛ إنه بنية تحتية ثورية تهدف إلى إضفاء الطابع الديمقراطي على الوصول إلى الأنظمة المالية الدولية لكل مواطن أفغاني.
          </motion.p>
        </div>
      </section>

      {/* --- قسم المؤسسين والفريق --- */}
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
                  alt="Shaheen Safi - Founder & CEO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-white font-black italic tracking-widest text-lg uppercase">CEO / FOUNDER</p>
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
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">شاهين صافي <span className="text-gray-600 text-3xl font-light block mt-2">Shaheen Safi</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  شاهين صافي (مواليد 2003)، خبير استراتيجي في التكنولوجيا المالية والمعمار الرئيسي لأنظمة دفع SafiPay. ومن خلال فهمه العميق للعزلة المالية لأفغانستان، يتولى مسؤولية التوجيه الكلي للمشروع وهندسة العلاقات الدولية مع عمالقة البنوك في العالم.
                </p>
                <p>
                  خبرته في دمج التقنيات السحابية مع الأساليب المصرفية الأوروبية الحديثة منحت SafiPay القدرة على إعادة تعريف معايير الأمان كأول بنك رقمي (Neobank) أفغاني حقيقي. يطمح شاهين برؤيته المقتدرة إلى استعادة الهوية والاعتبار المالي للمواطنين الأفغان في الأسواق العالمية.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Briefcase className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">الإدارة الاستراتيجية</h4>
                  <p className="text-sm text-gray-500">تطوير نموذج الأعمال وجذب الشركاء المصرفيين</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors">
                  <Target className="text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">حل الأزمات المالية</h4>
                  <p className="text-sm text-gray-500">تصميم حلول لتجاوز العقوبات البنكية</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ساحل سالم - مدير النظام المصرفي */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">
                <Banknote size={14} /> النظام البيئي المصرفي
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">ساحل سالم <span className="text-gray-600 text-3xl font-light block mt-2">Sahel Salem</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  ساحل سالم (مواليد 2007)، العقل المدبر وراء النظام البيئي المصرفي وبنية الحسابات في SafiPay. هو المسؤول عن تصميم وتنفيذ الأطر المالية التي تمنح المستخدمين الأفغان وصولاً غير مسبوق إلى الخدمات المصرفية الدولية وإدارة حساباتهم.
                </p>
                <p>
                  تضمن خبرة ساحل في إنشاء تدفقات مالية سلسة وآمنة أن يحصل كل مستخدم لـ SafiPay على تجربة مصرفية رقمية عالمية. من خلال تركيزه على الشفافية وسهولة الوصول، يقوم ببناء ركائز نظام مالي عادل لأفغانستان.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Globe className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">تطوير النظام البيئي</h4>
                  <p className="text-sm text-gray-500">بناء جسور التواصل مع الشبكات المالية العالمية</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors">
                  <Shield className="text-green-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">إدارة الحسابات</h4>
                  <p className="text-sm text-gray-500">تصميم أنظمة مبتكرة للحسابات المصرفية</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative group"
            >
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/sahel.jpeg" 
                  alt="Sahel Salem - Head of Ecosystem Banking" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                ECOSYSTEM LEAD
              </div>
            </motion.div>
          </div>

          {/* مجتبى رحماني - شريك مؤسس ورئيس تقني */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image 
                  src="/mujtaba.jpeg" 
                  alt="Mujtaba Rahmani - CTO" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-4 rounded-2xl shadow-xl hidden md:block text-black font-black italic tracking-widest text-lg uppercase">
                CTO / ARCHITECT
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Code2 size={14} /> الهندسة والأمن
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">مجتبى رحماني <span className="text-gray-600 text-3xl font-light block mt-2">Mujtaba Rahmani</span></h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed text-justify font-light">
                <p>
                  مجتبى رحماني (مواليد 2006)، رئيس التكنولوجيا ومعمار الأمن السيبراني في SafiPay. قام ببناء العمود الفقري التقني للمنصة، مع ضمان عدم اختراق واستقرار أنظمة المعاملات في الوقت الفعلي.
                </p>
                <p>
                  بفضل عبقريته في تطوير برمجيات قابلة للتوسع وفهمه العميق للبنى التحتية للدفع، استطاع مجتبى خلق نظام ينافس البنوك العالمية الكبرى في السرعة والدقة. مهمته هي بناء حصن رقمي يحمي أصول المستخدمين تحت أي ظرف من الظروف.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Rocket className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">هندسة الأنظمة</h4>
                  <p className="text-sm text-gray-500">تطوير الواجهة الخلفية والخدمات المالية المصغرة</p>
                </div>
                <div className="p-6 bg-[#0c0c0c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <Shield className="text-blue-500 mb-3" />
                  <h4 className="text-white font-bold mb-1">الأمن السيبراني</h4>
                  <p className="text-sm text-gray-500">تشفير متقدم وحماية البيانات</p>
                </div>
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
              { title: "أمان مطلق", desc: "استخدام بروتوكولات تشفير متعددة الطبقات لضمان أمان المعاملات.", icon: <Shield className="text-amber-500" size={32} /> },
              { title: "اتصال عالمي", desc: "فتح أبواب الاقتصاد الرقمي لأفغانستان دون وسطاء تقليديين.", icon: <Globe className="text-amber-500" size={32} /> },
              { title: "ابتكار مستمر", desc: "التطوير الدائم لميزات البنك الرقمي لتلبية احتياجات أجيال المستقبل.", icon: <Zap className="text-amber-500" size={32} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- دعوة للعمل (CTA) --- */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto p-20 bg-gradient-to-br from-amber-600 to-amber-900 rounded-[4rem] relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter">هل أنت مستعد للتعاون؟</h2>
              <p className="text-white/80 text-xl mb-12 font-light">
                نحن في SafiPay نسعى لبناء شبكة من الخبراء الماليين والشركاء الاستراتيجيين الدوليين.
              </p>
              <Link href={`/${currentLang}/partners`} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
                إرسال طلب شراكة تجارية <ArrowRight className="rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}