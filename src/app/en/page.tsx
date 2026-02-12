'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowRight, BarChart3, Handshake 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HomePageEN() {
  const pathname = usePathname();
  // استخراج زبان فعلی از آدرس برای حفظ پایداری مسیرها
  const currentLang = pathname?.split('/')[1] || 'en';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase"
          >
            Breaking Financial Borders for all Afghans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              Digital Banking for Afghans
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Empowering millions with the first international digital bank. 
            No borders, no restrictions—just seamless global finance.
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
              See Problems <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* اصلاح مسیر به /partners مطابق ساختار گیت‌هاب شما */}
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
            >
              <Handshake size={24} /> Join Partnership
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Problems Section --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic">
              The Banking <span className="text-red-600">Crisis</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl font-light">
              Current financial systems in Afghanistan are broken, isolated, and outdated. 
              Millions are left behind in a digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% Unbanked', desc: 'The majority of the population, especially women and rural citizens, lack basic bank accounts.' },
              { title: 'SWIFT Isolation', desc: 'Being cut off from global networks means international transfers are impossible or dangerous.' },
              { title: 'Fake Cards', desc: 'Existing domestic cards fail on international platforms like Amazon, Netflix, or Google.' },
              { title: '15% Transfer Fees', desc: 'Relying on informal systems leads to massive financial loss and lack of tracking.' },
              { title: 'High Inflation', desc: 'No easy way to hold stable assets like USD or EUR to protect family savings.' },
              { title: 'No Digital KYC', desc: 'Opening an account still requires physical presence and outdated bureaucracy.' },
              { title: 'Zero Transparency', desc: 'Weak security infrastructure leads to frequent fraud and money laundering risks.' },
              { title: 'Offline Economy', desc: 'Businesses cannot accept global payments, stifling national economic growth.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050505] border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Solutions Section --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
              The <span className="text-amber-500">Future</span> is Here
            </h2>
            <p className="text-gray-400 text-xl font-light italic">
              SafiPay isn't just an app; it's a bridge connecting Afghans to the global marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Global Access', desc: 'Instant international accounts for Afghans worldwide without physical visits.' },
              { icon: <CreditCard />, title: 'Real Virtual Cards', desc: 'Instant Visa/Mastercard issuance for global shopping and subscriptions.' },
              { icon: <Zap />, title: '1% Fee Transfers', desc: 'Bypassing the expensive Hawala system with fast, transparent transfers.' },
              { icon: <Shield />, title: 'Advanced Security', desc: 'Bank-grade encryption and digital KYC for ultimate peace of mind.' },
              { icon: <BarChart3 />, title: 'Multi-Currency', desc: 'Hold and convert USD, EUR, and more to protect against inflation.' },
              { icon: <CheckCircle2 />, title: 'Full Compliance', desc: 'Operating within global legal frameworks while serving the unbanked.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 bg-black/40 border border-white/5 rounded-[2.5rem] hover:border-amber-500/50 transition-all duration-500 shadow-2xl"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              Ready to rebuild <br /> Afghanistan's economy?
            </h2>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Apply for Partnership <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}