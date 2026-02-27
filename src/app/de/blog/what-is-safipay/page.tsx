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
      
      {/* Hintergrund-Effekte */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
      </div>

      {/* Hero-Bereich */}
      <section className="relative pt-32 pb-24 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Offizielle Erklärung 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter italic leading-none">
            DIGITALE FINANZEN <br />
            <span className="text-[#D4AF37]">NEU DEFINIERT</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-12">
            SafiPay ist nicht nur eine digitale Geldbörse; es ist ein in Europa entwickeltes Hochleistungs-Finanzökosystem. Wir schließen die Lücke zwischen traditioneller Bankensicherheit und der rasanten Geschwindigkeit moderner FinTechs, um Weltbürgern grenzenlose finanzielle Freiheit zu ermöglichen.
          </p>

          <div className="flex flex-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
              Entdecken Sie unsere Vision
            </button>
          </div>
        </div>
      </section>

      {/* Kernpfeiler - Warum wir führen */}
      <section className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">
                Warum die Elite <br /><span className="text-[#D4AF37]">SafiPay</span> wählt
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Institutionelle Sicherheit</h4>
                    <p className="text-gray-500">Reguliert nach den Finanzstandards der Europäischen Union. Wir garantieren, dass Ihr Vermögen durch die weltweit strengsten Compliance-Rahmenbedingungen geschützt ist.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Echtzeit-Ausstellung</h4>
                    <p className="text-gray-500">Vergessen Sie wochenlange Wartezeiten. Bei SafiPay werden virtuelle Visa-Karten und IBAN-Konten in weniger als 60 Sekunden ausgestellt. Geschwindigkeit ist unser Fundament.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#D4AF37]/10 flex items-center justify-center rounded-2xl border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Landmark size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Direkte EU-IBAN</h4>
                    <p className="text-gray-500">Ein legitimes europäisches Bankkonto auf Ihren eigenen Namen. Senden und empfangen Sie SEPA-Überweisungen so einfach, als würden Sie in Berlin oder Brüssel leben.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[100px] rounded-full" />
              <div className="glass-card rounded-[3rem] p-4 border border-white/10 relative overflow-hidden">
                 <Image 
                  src="/blog/what-is-safipay/hero.jpg" 
                  alt="SafiPay Kerntechnologie" 
                  width={800} height={800}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Globale Statistiken */}
      <section className="py-24 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">200+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Länder unterstützt</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">1 Min.</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Aktivierungszeit</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">100%</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">EU-Konformität</div>
            </div>
            <div>
              <div className="text-[#D4AF37] text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">Globaler Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gründer-Vision */}
      <footer className="py-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-10 relative text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">Ein Erbe wird erschaffen</h2>
          <p className="text-gray-400 text-lg mb-12 italic">
            "Wir haben SafiPay nicht als eine weitere App auf Ihrem Handy entwickelt. Wir haben es als den Schlüssel erschaffen, der die Weltwirtschaft für jeden öffnet – unabhängig davon, wo man geboren wurde."
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37] mx-auto mb-4" />
          <div className="text-white font-bold tracking-widest uppercase italic">Das SafiPay Führungsteam</div>
        </div>
      </footer>

    </main>
  );
}