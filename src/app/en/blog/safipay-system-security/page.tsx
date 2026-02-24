import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Cpu, Globe2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SafiPay Security | Military-Grade Financial Protection',
  description: 'Learn how SafiPay uses SHA-256 encryption and advanced security protocols to protect your digital assets.',
};

export default function SecurityBlog() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="ltr">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Badge & Title */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            <ShieldCheck size={14} /> Military Grade Security
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 italic uppercase leading-[0.85]">
            HOW THE <span className="text-amber-500">SYSTEM</span> <br/>PROTECTS YOU.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            SafiPay is engineered with a multi-layer security architecture to ensure your global transactions remain private and immutable.
          </p>
        </div>

        {/* Security Image/Banner */}
        <div className="relative w-full h-[350px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]">
           {/* استفاده از عکس لوگو در ابعاد بزرگ برای پس‌زمینه تکنولوژی */}
          <div className="absolute inset-0 opacity-20 grayscale scale-150 blur-sm">
            <Image src="/blog/logo.png" alt="SafiPay Security" fill className="object-contain" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock size={120} className="text-amber-500 opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Technical Sections */}
        <div className="grid grid-cols-1 gap-8">
          
          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Cpu className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">01. SHA-256 Encryption</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Every byte of data in the SafiPay ecosystem is shielded by SHA-256 encryption. This is the same protocol used by global financial institutions and blockchain networks to ensure that unauthorized parties cannot access or alter your data.
                </p>
              </div>
            </div>
          </section>

          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Globe2 className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">02. Global Connectivity Nodes</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our system operates through a decentralized network of secure nodes across Kabul, Paris, and Istanbul. This ensures high availability and eliminates "single points of failure," providing near-instant settlements without traditional banking delays.
                </p>
              </div>
            </div>
          </section>

          <section className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="text-amber-500" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic text-white mb-4 uppercase tracking-tight">03. Real-time Fraud Detection</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We have engineered an AI-driven monitoring layer that analyzes transaction patterns in real-time, instantly flagging any suspicious activity to prevent unauthorized movement of assets.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Closing Action */}
        <div className="mt-20 p-12 rounded-[4rem] bg-white text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">Your Assets, <br/><span className="text-amber-600">Our Responsibility.</span></h3>
          </div>
          <Link href="/en/contact" className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black text-xs tracking-[0.2em] hover:bg-amber-600 transition-all uppercase">
            Start Secure Banking <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}