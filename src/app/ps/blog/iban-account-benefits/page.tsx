'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Landmark, ArrowRight, ShieldCheck, 
  Zap, Globe, Crown, Sparkles, TrendingUp,
  Fingerprint
} from 'lucide-react';
import Link from 'next/link';

export default function IbanBenefitsPage() {
  const params = useParams();
  const lang = params?.lang || 'ps';

  return (
    <main className="min-h-screen bg-[#000] text-[#d4d4d8] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden font-sans" dir="rtl">
      
      {/* Heavy CSS Animations & Global Styles */}
      <style jsx global>{`
        @keyframes gold-pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes border-flow {
          0% { border-color: rgba(212,175,55,0.1); }
          50% { border-color: rgba(212,175,55,0.6); }
          100% { border-color: rgba(212,175,55,0.1); }
        }
        .animate-reveal { animation: reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .gold-glow { box-shadow: 0 0 30px rgba(212,175,55,0.15); }
        .gold-text-stroke { -webkit-text-stroke: 1px #D4AF37; color: transparent; }
        .vertical-text { writing-mode: vertical-rl; }
      `}</style>

      {/* Ambient Luxury Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-[gold-pulse_8s_infinite]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#D4AF37]/10 blur-[180px] rounded-full" />
      </div>

      {/* Hero Section - The Financial Gateway */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/blog/iban-account-benefits/hero.jpg" 
            alt="SafiPay European IBAN" 
            fill 
            className="object-cover grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-right">
          <div className="max-w-6xl animate-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-l from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] font-black tracking-[0.8em] text-[10px] uppercase flex items-center gap-2">
                <Crown size={12} /> SafiPay Prestige
              </span>
            </div>

            <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-10 text-white">
              ځانګړی <br />
              <span className="gold-text-stroke hover:text-[#D4AF37] transition-all duration-700 cursor-default">
                اروپايي IBAN اکاونټ
              </span>
            </h1>

            <div className="max-w-3xl border-r-4 border-[#D4AF37] pr-10 py-6 bg-white/5 backdrop-blur-sm rounded-l-3xl">
              <p className="text-white text-2xl md:text-4xl leading-tight font-light italic">
                "موږ یوازې بانکي حسابونه نه ورکوو؛ موږ هر افغان ته د اروپا په زړه کې یوه خوندي خزانه ورکوو. سرعت زموږ وسله ده او امنیت زموږ ډال."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Content Grid */}
      <section className="relative py-40 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Sidebar: Sahel's Executive Oversight */}
            <div className="lg:col-span-4 order-2 lg:order-2">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 rounded-[3rem] bg-black border border-[#D4AF37]/30 gold-glow relative overflow-hidden group hover:animate-[border-flow_2s_infinite]">
                  <div className="absolute -left-10 -top-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Globe size={200} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#D4AF37] font-black text-xs uppercase tracking-[0.4em] mb-8 text-right">اجرایوي څارنه</h3>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-12 relative z-10 text-justify">
                    "د ساحل لخوا د نړیوالې پراختیا ستراتیژۍ لاندې، ستاسو اروپايي IBAN سمدلاسه د SEPA شبکې سره نښلول کیږي، چې تاسو ته نړیوال اعتبار او قانوني خوندیتوب تضمینوي."
                  </p>
                  
                  {/* Sahel's Profile Section with Image */}
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8A6D3B] p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                          <Image 
                            src="/sahel.jpeg" 
                            alt="Sahel - International Development Director"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#D4AF37] border-2 border-black rounded-full shadow-lg z-20"></div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-black text-white text-lg tracking-tight">ساحل</p>
                      <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">د نړیوالې پراختیا مدیره</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-[#D4AF37]/5 transition-colors group">
                    <p className="text-4xl font-black text-[#D4AF37] group-hover:scale-110 transition-transform">۱ دقیقه</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">فوري صدور</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-[#D4AF37]/5 transition-colors group">
                    <p className="text-4xl font-black text-[#D4AF37] group-hover:scale-110 transition-transform">EU</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">د اروپا تر کنټرول لاندې</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 order-1 lg:order-1 space-y-32">
              <div className="space-y-16 animate-reveal">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-[2rem] bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 gold-glow">
                    <Landmark size={48} />
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                    د <span className="text-[#D4AF37]">IBAN</span> زرین پُل
                  </h2>
                </div>

                <p className="text-gray-400 text-2xl leading-[2] font-light text-justify">
                  SafiPay د اروپا مالي سیسټم ته یو مستقیم پُل دی. د **مجتبی** تر څارنې لاندې د پرمختللي امنیتي سیسټم په درلودلو سره، موږ ټول دودیز بانکي ځنډونه له منځه وړي دي. ستاسو ځانګړی حساب اجازه ورکوي چې د SEPA شبکې له لارې سمدستي پیسې انتقال کړئ، او ستاسو شتمني د سترو اروپايي بانکونو په څېر په چټکۍ سره اداره کړئ.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500 text-right">
                    <Zap className="text-[#D4AF37] mb-8 group-hover:scale-125 transition-transform duration-500" size={44} />
                    <h4 className="text-2xl font-black uppercase mb-4 text-white italic tracking-tight">د SEPA چټکتیا</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">تر یوې دقیقې په کمه موده کې د حساب جوړول. پرته له کومې بیروکراسۍ نړیوال لیږدونه.</p>
                  </div>
                  <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500 text-right">
                    <Fingerprint className="text-[#D4AF37] mb-8 group-hover:scale-125 transition-transform duration-500" size={44} />
                    <h4 className="text-2xl font-black uppercase mb-4 text-white italic tracking-tight">د مجتبی امنیت</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">د اروپايي ټولنې د تر ټولو پرمختللو کوډ شوي (Encryption) پروتوکولونو لخوا خوندي شوی.</p>
                  </div>
                </div>
              </div>

              {/* Shaheen Safi's Founder Quote */}
              <div className="relative py-24 border-y border-[#D4AF37]/20">
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37]" />
                <blockquote className="text-4xl md:text-6xl font-extralight italic leading-[1.1] text-white px-12 text-right">
                  "SafiPay د افغانستان لپاره د مالي ازادۍ راتلونکی دی. موږ دلته یو ترڅو رهبري وکړو، ساتنه وکړو او واک ورکړو."
                </blockquote>
                <div className="mt-16 px-12 flex items-center gap-6 justify-end">
                  <div className="text-right">
                    <p className="text-2xl font-black tracking-[0.5em] uppercase text-[#D4AF37]">Shaheen Safi</p>
                    <p className="text-xs text-gray-600 uppercase font-black">بنسټ اېښودونکی او CEO</p>
                  </div>
                  <div className="h-[1px] w-20 bg-gray-800" />
                </div>
              </div>

              {/* Luxury Navigation */}
              <div className="flex justify-start pt-10 pb-40">
                <Link href={`/${lang}/blog`} className="group flex items-center gap-12">
                  <div className="w-28 h-28 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-700 gold-glow order-1">
                    <ArrowRight size={48} className="text-[#D4AF37] group-hover:text-black group-hover:-translate-x-3 transition-all duration-500 rotate-180" />
                  </div>
                  <div className="text-right order-2">
                    <span className="block text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-3">بېرته مالي مرکز ته</span>
                    <span className="text-5xl font-black uppercase italic text-white group-hover:text-[#D4AF37] transition-all duration-500">پوهنغونډ</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Branding Sidebar */}
      <div className="fixed bottom-10 right-10 z-50 pointer-events-none hidden xl:block">
        <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[1.5em] vertical-text opacity-40">SAFIPAY EUROPE ELITE</p>
      </div>

    </main>
  );
}