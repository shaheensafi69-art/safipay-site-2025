'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Globe, Shield, Zap, CreditCard, ArrowRight, BarChart3 } from 'lucide-react';

export default function HomePageAR() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden selection:bg-amber-500/30" dir="rtl">
      
      {/* --- قسم الهيرو (Hero Section) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* تأثيرات الخلفية */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-10 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-bold tracking-widest uppercase"
          >
            كسر الحدود المالية لجميع الأفغان
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">سافي بي</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-amber-500 mt-6 block font-bold italic">
              الخدمات المصرفية الرقمية للأفغان
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            تمكين الملايين من خلال أول بنك رقمي دولي. 
            بلا حدود، بلا قيود؛ مجرد تجربة مصرفية عالمية وسهلة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              اكتشف التحديات <ArrowRight className="group-hover:translate-x-1 transition-transform rotate-180" />
            </Link>
            <Link
              href="/invest"
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)]"
            >
              دعم الحملة
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- قسم المشكلات (Problems Section) --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-6">
              الأزمة <span className="text-red-600">المصرفية</span> في أفغانستان
            </h2>
            <p className="text-gray-500 text-xl text-center max-w-2xl font-light">
              الأنظمة المالية الحالية في أفغانستان غير فعالة، معزولة وقديمة. 
              يتم تجاهل الملايين في العالم الرقمي اليوم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85٪ بلا حسابات', desc: 'غالبية السكان، خاصة النساء وسكان المناطق النائية، لا يحصلون على الخدمات المصرفية الأساسية.' },
              { title: 'عزلة سويفت', desc: 'الانقطاع عن الشبكات العالمية يعني استحالة نقل الأموال بشكل رسمي وآمن.' },
              { title: 'بطاقات وهمية', desc: 'البطاقات الحالية لا تعمل على المنصات الدولية مثل أمازون، نيتفليکس أو جوجل.' },
              { title: '15٪ رسوم تحويل', desc: 'الاعتماد على الأنظمة غير الرسمية (الحوالة) يؤدي إلى خسائر مالية فادحة وانعدام الشفافية.' },
              { title: 'تضخم حاد', desc: 'لا توجد وسيلة سهلة للاحتفاظ بأصول مستقرة مثل الدولار أو اليورو لحماية مدخرات الأسر.' },
              { title: 'غياب الهوية الرقمية', desc: 'فتح الحساب لا يزال يتطلب الحضور الفردي وإجراءات إدارية معقدة وبدائية.' },
              { title: 'انعدام الشفافية', desc: 'البنية التحتية الأمنية الضعيفة تؤدي إلى عمليات احتيال متكررة ومخاطر غسيل الأموال.' },
              { title: 'اقتصاد تقليدي', desc: 'الشركات المحلية لا تستطيع قبول المدفوعات العالمية، مما يعيق نمو الاقتصاد الوطني.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-950 border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group text-right"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- قسم الحلول: ثورة سافي بي (Solutions Section) --- */}
      <section className="py-32 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              المستقبل <span className="text-amber-500 italic">هنا</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              سافي بي ليس مجرد تطبيق؛ إنه جسر يربط الأفغان بالأسواق العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'وصول عالمي', desc: 'فتح حساب دولي فوري للأفغان حول العالم دون الحاجة لزيارة الفروع.' },
              { icon: <CreditCard />, title: 'بطاقات افتراضية', desc: 'إصدار فوري لبطاقات فيزا وماستركارد للتسوق عبر الإنترنت والاشتراكات العالمية.' },
              { icon: <Zap />, title: '1٪ رسوم تحويل', desc: 'تجاوز نظام الحوالة المكلف بتحويلات سريعة، رخيصة وشفافة تماماً.' },
              { icon: <Shield />, title: 'أمان متقدم', desc: 'تشفير بمستوى البنوك العالمية وتحقق رقمي من الهوية لراحة بال تامة.' },
              { icon: <BarChart3 />, title: 'تعدد العملات', desc: 'الاحتفاظ بالدولار واليورو والعملات الأخرى والتحويل بينها للحماية من التضخم.' },
              { icon: <CheckCircle2 />, title: 'امتثال قانوني', desc: 'العمل وفق أطر القوانين المصرفية الدولية لضمان أمن أموال المستخدمين.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-10 bg-black/50 border border-amber-900/20 rounded-[2.5rem] hover:bg-amber-950/10 hover:border-amber-500/50 transition-all duration-500 shadow-2xl text-right"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* دعوة للعمل (Final CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-l from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              هل أنت مستعد لإعادة بناء <br /> الاقتصاد الأفغاني؟
            </h2>
            <Link
              href="/invest"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              انضم إلى هذه الحركة <ArrowRight className="rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}