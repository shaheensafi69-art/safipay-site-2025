import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shaheen Safi | The Visionary Behind SafiPay',
  description: 'The personal story and engineering philosophy of Shaheen Safi, CEO and Founder of SafiPay.',
};

export default function ShaheenBlog() {
  return (
    // اضافه کردن dir="ltr" برای اطمینان از چیدمان صحیح انگلیسی
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans" dir="ltr">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header - Left Aligned */}
        <div className="text-left mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Founder's Personal Manifesto
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.85] mb-8 uppercase">
            BEYOND THE <br />
            <span className="text-amber-500">ALGORITHM.</span>
          </h1>
          <div className="h-1 w-24 bg-amber-500 rounded-full" />
        </div>

        {/* Portrait Photo Section */}
        <div className="relative w-full max-w-2xl mr-auto ml-0 h-[600px] md:h-[800px] mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image 
            src="/blog/shaheen.jpeg" 
            alt="Shaheen Safi" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
          
          <div className="absolute bottom-12 left-12 right-12 text-left">
            <p className="text-4xl font-black italic tracking-tighter text-white">SHAHEEN SAFI</p>
            <p className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mt-2">Founder & CEO, SafiPay</p>
          </div>
        </div>

        {/* Blog Content - Left Aligned */}
        <div className="max-w-3xl ml-0 mr-auto text-left">
          <div className="space-y-12">
            
            {/* Quote - Border on the Left */}
            <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-gray-200 border-l-4 border-amber-500 pl-8 py-2">
              "Engineering is not just about syntax; it is about building bridges for people who have been left behind by the global economy."
            </p>

            <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              <p>
                My name is <span className="text-white font-bold">Shaheen Safi</span>. As a software engineer, I spent years looking at the world through logic and data. But I realized that for my community in Afghanistan and the diaspora worldwide, the logic of global banking was failing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 text-left">
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/20 transition-colors">
                  <h3 className="text-white font-black italic text-xl mb-4 uppercase">The Mission</h3>
                  <p className="text-sm">To decentralize financial power and give every Afghan the tools to transact globally, securely, and instantly.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-amber-500/20 transition-colors">
                  <h3 className="text-white font-black italic text-xl mb-4 uppercase">The Code</h3>
                  <p className="text-sm">SafiPay is not just an app; it is a high-security ecosystem engineered to withstand the complexities of international finance.</p>
                </div>
              </div>

              <p>
                When I founded <span className="text-amber-500 font-bold">SafiPay</span>, I didn't just want to build a company. I wanted to build a legacy. A system that works when others don't. A platform that speaks the language of the future.
              </p>
            </div>

            {/* Final CTA - Left Aligned Layout */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-amber-500 bg-white/5">
                  <Image src="/blog/logo.png" alt="SafiPay" fill className="object-contain p-2" />
                </div>
                <p className="text-gray-500 text-sm italic underline decoration-amber-500/20">The journey of innovation continues.</p>
              </div>
              
              <Link href="/en/blog/what-is-safipay" className="px-8 py-4 rounded-full bg-white text-black font-black text-xs tracking-widest hover:bg-amber-500 transition-all uppercase">
                Explore SafiPay System
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}