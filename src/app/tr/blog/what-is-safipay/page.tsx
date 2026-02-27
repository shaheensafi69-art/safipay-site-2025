'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, Zap, Globe2, ArrowRight, 
  Lock, Landmark, CreditCard, ChevronDown,
  Users, BarChart
} from 'lucide-react';

export default function WhatIsSafiPay() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden">
      
      {/* Arka Plan Işık Efektleri */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      {/* Hero Bölümü */}
      <section className="relative pt-32 pb-24 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Resmi Bildiri 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none">
            DİJİTAL FİNANS <br />
            <span className="text-[#D4AF37]">YENİDEN TANIMLANDI</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12">
            SafiPay sadece bir dijital cüzdan değil; Avrupa'nın kalbinde mühendisliği yapılmış yüksek performanslı bir finansal ekosistemdir. Dünya vatandaşlarının finansal sınırları aşmasını sağlamak için geleneksel bankacılık güvenliği ile modern finansal teknolojinin hızını birleştirdik.
          </p>

          <div className="flex flex-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
              Gücümüzü Keşfedin
            </button>
          </div>
        </div>
      </section>

      {/* Temel Sütunlar - Neden Lideriz? */}
      <section className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">
                Neden Elitler <br /><span className="text-[#D4AF37]">SafiPay</span>'i Seçiyor?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Kurumsal Güvenlik</h4>
                    <p className="text-gray-500">Avrupa Birliği finansal standartları denetiminde çalışarak, varlıklarınızın dünyanın en katı uyumluluk çerçeveleriyle korunmasını sağlıyoruz.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">1 Dakikada Anında Teslim</h4>
                    <p className="text-gray-500">Haftalarca süren bekleme sürelerini unutun. SafiPay'de sanal Visa kartları ve IBAN hesapları 60 saniyeden kısa sürede tanımlanır. Hız, bizim temel sözümüzdür.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Doğrudan Avrupa IBAN</h4>
                    <p className="text-gray-500">Kendi adınıza yasal bir Avrupa banka hesabı. Brüksel veya Berlin'de yaşıyormuşçasına SEPA transferleri gönderin ve alın.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
              <div className="glass-card rounded-[3rem] p-4 border border-white/10 relative overflow-hidden">
                 <Image 
                  src="/blog/what-is-safipay/hero.jpg" 
                  alt="SafiPay Çekirdek Teknolojisi" 
                  width={800} height={800}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Küresel Etki İstatistikleri */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">200+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Desteklenen Ülke</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">1 Dakika</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Aktivasyon Süresi</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">100%</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">AB Uyumluluğu</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Küresel Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurucu Vizyonu */}
      <footer className="py-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-10 relative text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">Temelleri Atılan Bir Miras</h2>
          <p className="text-gray-400 text-lg mb-12 italic">
            "SafiPay'i telefonunuzdaki sıradan bir uygulama olması için inşa etmedik; onu, doğdukları yer fark etmeksizin herkesin küresel ekonominin kapılarını açabileceği bir anahtar olarak tasarladık."
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto mb-4" />
          <div className="text-white font-bold tracking-widest uppercase italic">SafiPay Liderlik Ekibi</div>
        </div>
      </footer>

    </main>
  );
}