'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ConfirmationSuccess() {
  const params = useParams();
  const locale = params.locale || 'ar';

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="relative w-full max-w-lg text-center">
        {/* تأثير الإضاءة */}
        <div className="absolute -inset-20 bg-amber-500/10 rounded-full blur-[120px] opacity-40" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-zinc-900/40 border border-amber-500/10 p-12 rounded-[3.5rem] backdrop-blur-2xl shadow-2xl"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
          >
            <CheckCircle2 size={48} className="text-black" />
          </motion.div>

          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
            تم <span className="text-amber-500">التحقق</span>
          </h1>
          
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
            تم التحقق من هويتك الرقمية في SafiPay بنجاح. يمكنك الآن الوصول الكامل إلى نظامنا العالمي متعدد العملات.
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              href={`/${locale}/user/dashboard`}
              className="group flex items-center justify-center gap-3 w-full py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-lg"
            >
              الدخول إلى المحفظة
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-zinc-600">
            <ShieldCheck size={14} className="text-amber-500/50" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">حماية بمستوى مؤسسي</span>
          </div>
        </motion.div>
        
        <p className="mt-10 text-[10px] text-zinc-700 uppercase tracking-[0.4em] font-bold">
          المتحدث الرسمي لـ SafiPay و Safi TopUp
        </p>
      </div>
    </div>
  );
}