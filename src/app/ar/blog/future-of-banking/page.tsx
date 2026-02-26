'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ShieldCheck, ArrowRight, 
  Zap, Globe, Lock, CheckCircle2, 
  TrendingUp, Cpu, Landmark 
} from 'lucide-react';
import Link from 'next/link';

export default function FutureOfBankingPage() {
  const params = useParams();
  const lang = params?.lang || 'ar';
  const isRtl = lang === 'fa' || lang === 'ps' || lang === 'ar';

  return (
    <main className="min-h-screen bg-[#030303] pb-32 overflow-x-hidden text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Hero Section مع أنيميشن دخول مقتدر */}
      <section className="relative h-[85vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/blog/future-of-banking/hero.jpg" 
            alt="مستقبل الصيرفة الرقمية"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent z-10" />

        <div className="container mx-auto px-6 relative z-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6 text-amber-500 font-black tracking-[0.3em] text-xs uppercase">
              <Cpu size={18} />
              <span>منظومة الفنتك للجيل القادم</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 drop-shadow-2xl">
              مستقبل الخدمات المصرفية؛ <br/> <span className="text-amber-500 text-4xl md:text-6xl text-right block mt-4">بين الأصالة والحداثة</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 -mt-24 relative z-30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#080808] border border-white/5 rounded-[3.5rem] p-8 md:p-20 shadow-2xl backdrop-blur-xl"
          >
            
            {/* ملف الكاتب مع شعار SafiPay */}
            <div className="flex flex-wrap justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center p-3">
                        <img src="/logo.png" alt="SafiPay Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-black text-xl">Safi AI</p>
                    <CheckCircle2 size={18} className="text-blue-500 fill-blue-500/10" />
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">المتحدث الرسمي لـ SafiPay</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-amber-500"/> ۲۰۲۶/۰۲/۰۸</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-amber-500"/> ۱۵ دقيقة للقراءة</span>
              </div>
            </div>

            {/* بدنه اصلی مقاله */}
            <article className="space-y-12 text-gray-300 leading-[2.4] text-justify text-lg" dir="rtl">
              
              <p className="text-2xl text-white font-medium mb-12 border-r-4 border-amber-500 pr-6">
                تلفظ الخدمات المصرفية التقليدية، بجدرانها الحجرية وطوابيرها الطويلة، أنفاسها الأخيرة. في عالم اليوم، لم تعد السرعة مجرد ميزة، بل هي مقياس الأمن والثقة. تأسست SafiPay لإعادة تعريف هذه المفاهيم عبر إزالة الحدود الفيزيائية.
              </p>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Zap className="text-amber-500" /> لماذا تفشل الأنظمة القديمة؟
              </h2>
              <p>
                يكمن الضعف الأكبر للبنوك التقليدية في اعتمادها الشديد على البيروقراطية البشرية والبنية التحتية المتهالكة. بينما قد تستغرق الحوالة البنكية في الأنظمة القديمة من ٣ إلى ٥ أيام عمل، تتم المعاملات في منظومة SafiPay الحديثة عبر شبكات سحابية وبإشراف ذكي في أجزاء من الثانية. هذا هو السبب الذي يجعل مؤسسنا، <strong>شاهين صافي</strong>، يصر على الإلغاء الكامل للوسطاء التقليديين.
              </p>

              {/* شبكة الميزات */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <TrendingUp className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">تحسين مالي ذكي</h4>
                    <p className="text-sm text-gray-500">استخدام خوارزميات متقدمة لتقليل الرسوم وزيادة سرعة التحويلات المالية ضمن شبكة SEPA.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group">
                    <Landmark className="text-amber-500 mb-6 group-hover:rotate-12 transition-transform" size={40} />
                    <h4 className="text-white font-black text-xl mb-4">معايير مصرفية أوروبية</h4>
                    <p className="text-sm text-gray-500">تخضع جميع عملياتنا لرقابة صارمة من الهيئات المالية في الاتحاد الأوروبي، وهو ما لا تملكه مكاتب الصرافة التقليدية.</p>
                </motion.div>
              </div>

              <h2 className="text-3xl font-black text-white flex items-center gap-4 mt-16">
                <Lock className="text-amber-500" /> الأمن؛ ما وراء كلمة المرور
              </h2>
              <p>
                في جانب الأمن التقني، قام <strong>مجتبى (مدير الأمن لدينا)</strong> بنشر طبقات حماية متعددة. من المصادقة البيومترية إلى التشفير من طرف إلى طرف (End-to-End)، هدفنا هو توفير منصة يدير فيها المستخدم أصوله دون قلق من العقوبات أو تدخلات الأطراف الثالثة.
              </p>

              <div className="bg-white/[0.02] border-r-4 border-amber-500 p-12 rounded-2xl my-16 text-right">
                <p className="text-white text-xl italic font-light">
                  "مستقبل الخدمات المصرفية في هاتفك الذكي، وليس في المباني الحجرية. نحن في SafiPay، وضعنا هذه القوة بين يديك مباشرة."
                </p>
                <p className="text-amber-500 font-bold mt-4">— رسالة من ساحل، مديرة التطوير الدولي</p>
              </div>

              <h2 className="text-3xl font-black text-white mb-8">الخلاصة: قفزة نحو الاقتصاد الرقمي</h2>
              <p>
                نحن في SafiPay نؤمن بأن الوصول إلى النظام المصرفي العالمي هو حق أساسي لكل فرد. من خلال توفير حسابات IBAN وبطاقات فيزا فورية، بنينا جسراً يربط اقتصاد أفغانستان بقلب أوروبا والأسواق العالمية. هذه ليست سوى البداية لتحول كبير في الهيكل المالي للمنطقة.
              </p>
            </article>

            {/* زر العودة */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
              <Link 
                href={`/${lang}/blog`} 
                className="group relative px-12 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4 text-lg">
                    <ArrowRight size={24} className={isRtl ? "" : "rotate-180"} />
                    العودة إلى موسوعة SafiPay
                </span>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}