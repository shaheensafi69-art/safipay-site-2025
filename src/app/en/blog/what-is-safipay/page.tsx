import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What is SafiPay? | The Future of Afghan Digital Banking',
  description: 'Discover SafiPay, the revolutionary digital banking ecosystem designed to connect the Afghan community to global markets.',
};

export default function WhatIsSafiPay() {
  return (
    // اضافه کردن dir="ltr" برای اطمینان از چپ‌چین بودن در همه شرایط
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="ltr">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header - Left Aligned for English */}
        <div className="text-left mb-16">
          <div className="relative w-20 h-20 mb-8 bg-white/5 rounded-2xl p-4 border border-white/10 shadow-2xl">
            <Image 
              src="/blog/logo.png" 
              alt="SafiPay Logo" 
              fill 
              className="object-contain p-2 brightness-125" 
            />
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.85] mb-8 uppercase">
            REDEFINING <br />
            <span className="text-amber-500">DIGITAL BANKING.</span>
          </h1>
          <div className="h-1 w-24 bg-amber-500 rounded-full" />
        </div>

        {/* Banner Image - Ensure path is /blog/banner.png */}
        <div className="relative w-full h-[400px] md:h-[550px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
          <Image 
            src="/blog/banner.png" 
            alt="SafiPay System Banner" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-[2s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
        </div>

        {/* Main Content - Left Aligned */}
        <div className="space-y-16">
          
          <section className="space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 italic border-l-4 border-amber-500 pl-8">
              "SafiPay is not just an application. It is a borderless financial gateway engineered for the next generation of global Afghans."
            </p>
          </section>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
              <Zap className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-black italic text-2xl mb-4 uppercase">Instant Speed</h3>
              <p className="text-gray-400 leading-relaxed">
                By-passing traditional banking bureaucracy to deliver real-time settlements across continents.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group">
              <Shield className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-black italic text-2xl mb-4 uppercase">Total Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Architecture built with high-level encryption protocols, ensuring every transaction is immutable.
              </p>
            </div>
          </div>

          {/* Detailed Article Section */}
          <article className="prose prose-invert prose-amber max-w-none text-gray-400 text-lg leading-relaxed">
            <p className="mb-8">
              Under the strategic vision of <span className="text-white font-bold">Shaheen Safi</span>, SafiPay has emerged as a powerhouse in the fintech sector. We didn't just build a wallet; we engineered a full-scale financial infrastructure. 
            </p>
            <p className="mb-8">
              Our system utilizes proprietary API integration and global liquidity networks to ensure that our users in Kabul, Paris, or Istanbul experience the same high-standard banking quality. 
            </p>
          </article>

          {/* Call to Action - Footer of Page */}
          <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Ready to explore the system?</h4>
              <p className="text-gray-400 text-sm">Deep dive into our military-grade security protocols.</p>
            </div>
            <Link 
              href="/en/blog/safipay-system-security" 
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-xs tracking-widest hover:bg-amber-500 transition-all uppercase"
            >
              System Security <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}