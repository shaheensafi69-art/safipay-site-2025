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
  const lang = params?.lang || 'tr';

  return (
    <main className="min-h-screen bg-[#000] text-[#d4d4d8] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden font-sans" dir="ltr">
      
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
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-[gold-pulse_8s_infinite]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#D4AF37]/10 blur-[180px] rounded-full" />
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl animate-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] font-black tracking-[0.8em] text-[10px] uppercase flex items-center gap-2">
                <Crown size={12} /> SafiPay Prestige
              </span>
            </div>

            <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-10 text-white text-left">
              AYRICALIKLI <br />
              <span className="gold-text-stroke hover:text-[#D4AF37] transition-all duration-700 cursor-default">
                AVRUPA IBAN'I
              </span>
            </h1>

            <div className="max-w-3xl border-l-4 border-[#D4AF37] pl-10 py-6 bg-white/5 backdrop-blur-sm rounded-r-3xl">
              <p className="text-white text-2xl md:text-4xl leading-tight font-light italic text-left">
                "Biz sadece hesap açmıyoruz; her Afgan vatandaşına Avrupa'nın kalbinde güvenli bir kasa sunuyoruz. Hız silahımız, güvenlik ise kalkanımızdır."
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
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 rounded-[3rem] bg-black border border-[#D4AF37]/30 gold-glow relative overflow-hidden group hover:animate-[border-flow_2s_infinite]">
                  <div className="absolute -right-10 -top-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Globe size={200} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#D4AF37] font-black text-xs uppercase tracking-[0.4em] mb-8 text-left">STRATEJİK YÖNETİM</h3>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-12 relative z-10 text-left">
                    "Sahel'in uluslararası kalkınma stratejisi altında, Avrupa IBAN'ınız SEPA ağına anında entegre edilerek küresel likidite ve yasal koruma garanti altına alınır."
                  </p>
                  
                  {/* Sahel's Profile Section with Image */}
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8A6D3B] p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                          <Image 
                            src="/sahel.jpeg" 
                            alt="Sahel - Uluslararası Kalkınma Müdürü"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#D4AF37] border-2 border-black rounded-full shadow-lg z-20"></div>
                    </div>
                    
                    <div>
                      <p className="font-black text-white text-lg tracking-tight">Sahel</p>
                      <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Uluslararası Kalkınma Müdürü</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-[#D4AF37]/5 transition-colors group">
                    <p className="text-4xl font-black text-[#D4AF37] group-hover:scale-110 transition-transform">1 Dak</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Anında Aktivasyon</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-[#D4AF37]/5 transition-colors group">
                    <p className="text-4xl font-black text-[#D4AF37] group-hover:scale-110 transition-transform">AB</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">AB Regülasyonlu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-32">
              <div className="space-y-16 animate-reveal">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-[2rem] bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 gold-glow">
                    <Landmark size={48} />
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                    ALTIN <span className="text-[#D4AF37]">IBAN</span>
                  </h2>
                </div>

                <p className="text-gray-400 text-2xl leading-[2] font-light text-left text-justify">
                  SafiPay, Avrupa finans sistemine doğrudan bir köprü sunar. **Mücteba** tarafından denetlenen askeri düzeydeki güvenlik çekirdeğimiz sayesinde, geleneksel bankacılık gecikmelerini ortadan kaldırıyoruz. Size özel IBAN'ınız, anında SEPA transferlerine olanak tanıyarak küresel varlıklarınızı birinci sınıf bir Avrupa bankası hızıyla yönetme gücü verir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500">
                    <Zap className="text-[#D4AF37] mb-8 group-hover:scale-125 transition-transform duration-500" size={44} />
                    <h4 className="text-2xl font-black uppercase mb-4 text-white italic tracking-tight">SEPA HIZI</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">1 dakikadan kısa sürede hesap açılışı. Bürokratik engel olmadan küresel transferler.</p>
                  </div>
                  <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group hover:border-[#D4AF37]/50 transition-all duration-500">
                    <Fingerprint className="text-[#D4AF37] mb-8 group-hover:scale-125 transition-transform duration-500" size={44} />
                    <h4 className="text-2xl font-black uppercase mb-4 text-white italic tracking-tight">MÜCTEBA GÜVENLİĞİ</h4>
                    <p className="text-gray-500 text-lg leading-relaxed">Avrupa Birliği'nin en gelişmiş şifreleme protokolleri ile %100 koruma altında.</p>
                  </div>
                </div>
              </div>

              {/* Shaheen Safi's Founder Quote */}
              <div className="relative py-24 border-y border-[#D4AF37]/20">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-32 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37]" />
                <blockquote className="text-4xl md:text-6xl font-extralight italic leading-[1.1] text-white px-12">
                  "SafiPay, Afganistan için finansal özgürlüğün geleceğidir. Liderlik etmek, korumak ve güçlendirmek için buradayız."
                </blockquote>
                <div className="mt-16 px-12 flex items-center gap-6">
                  <p className="text-2xl font-black tracking-[0.5em] uppercase text-[#D4AF37]">Shaheen Safi</p>
                  <div className="h-[1px] w-20 bg-gray-800" />
                  <p className="text-xs text-gray-600 uppercase font-black">Kurucu & CEO</p>
                </div>
              </div>

              {/* Luxury Navigation */}
              <div className="flex justify-end pt-10 pb-40">
                <Link href={`/${lang}/blog`} className="group flex items-center gap-12">
                  <div className="text-right">
                    <span className="block text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-3 text-right">MERKEZE DÖN</span>
                    <span className="text-5xl font-black uppercase italic text-white group-hover:text-[#D4AF37] transition-all duration-500">ANSİKLOPEDİ</span>
                  </div>
                  <div className="w-28 h-28 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-700 gold-glow">
                    <ArrowRight size={48} className="text-[#D4AF37] group-hover:text-black group-hover:translate-x-3 transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Branding Sidebar */}
      <div className="fixed bottom-10 left-10 z-50 pointer-events-none hidden xl:block">
        <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[1.5em] vertical-text opacity-40">SAFIPAY EUROPE ELITE</p>
      </div>

    </main>
  );
}