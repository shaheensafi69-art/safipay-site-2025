'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Globe2, Wifi, Zap, ShieldCheck, 
  Smartphone, BarChart3, ArrowRight 
} from 'lucide-react';

export default function ESimTechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-[#d4d4d8] selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* Dynamische Hintergrundeffekte */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      <style jsx global>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .glass-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%);
          border: 1px solid rgba(212, 175, 55, 0.1);
          backdrop-filter: blur(10px);
        }
        .gold-text-glow {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }
      `}</style>

      {/* Hero-Bereich */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-10 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.5em] uppercase">Zukunft der Konnektivität</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight italic">
                Grenzenlose <br />
                <span className="text-[#D4AF37] gold-text-glow">Verbindung</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl mb-10">
                Erleben Sie die Evolution des Reisens. Die E-SIM-Technologie von SafiPay verbindet Sie in weniger als 60 Sekunden mit über 200 Ländern. Keine physischen Karten, keine Roaming-Gebühren – nur reine digitale Power.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition-transform cursor-pointer">
                  Jetzt aktivieren <ArrowRight size={18} />
                </div>
              </div>
            </div>

            <div className="relative animate-fade-up [animation-delay:200ms]">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full animate-pulse" />
                <Image 
                  src="/blog/esim-travel-technology/hero.jpg"
                  alt="SafiPay E-SIM Technologie"
                  fill
                  className="object-cover rounded-[3rem] border border-[#D4AF37]/30 shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Globale Vorteile Grid */}
      <section className="py-24 px-6 z-10 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-white italic mb-6">Globale <span className="text-[#D4AF37]">Vorteile</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic font-light">Entwickelt von SafiPay für den Elite-Reisenden.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-10 rounded-[2.5rem] group hover:border-[#D4AF37]/50 transition-all duration-500">
              <Zap className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white text-2xl font-bold mb-4">Sofort-Aktivierung</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Laden und aktivieren Sie Ihren globalen Datenplan in 60 Sekunden. Geschwindigkeit ist unser Markenzeichen.</p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-10 rounded-[2.5rem] group hover:border-[#D4AF37]/50 transition-all duration-500">
              <Globe2 className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white text-2xl font-bold mb-4">200+ Länder</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Von London bis Dubai – bleiben Sie überall mit lokalen Highspeed-5G-Netzwerken verbunden.</p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-10 rounded-[2.5rem] group hover:border-[#D4AF37]/50 transition-all duration-500">
              <ShieldCheck className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white text-2xl font-bold mb-4">EU-Sicherheit</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Verschlüsselte Verbindungen nach europäischen Datenschutzstandards. Ihre Daten gehören nur Ihnen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technische Spezifikationen */}
      <section className="py-24 bg-[#050505] z-10 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-[3.5rem] p-8 md:p-16 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white italic mb-8">Infrastruktur <br /><span className="text-[#D4AF37]">der nächsten Generation</span></h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/10 p-2 rounded-lg"><Smartphone className="text-[#D4AF37]" size={24} /></div>
                    <div>
                      <h4 className="text-white font-bold">Multi-Geräte-Support</h4>
                      <p className="text-gray-500 text-sm">Kompatibel mit allen iPhone- und Android-Geräten, die E-SIM unterstützen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/10 p-2 rounded-lg"><Wifi className="text-[#D4AF37]" size={24} /></div>
                    <div>
                      <h4 className="text-white font-bold">5G Ready</h4>
                      <p className="text-gray-500 text-sm">Ultra-niedrige Latenz für nahtloses Streaming und Geschäftsanrufe.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/10 p-2 rounded-lg"><BarChart3 className="text-[#D4AF37]" size={24} /></div>
                    <div>
                      <h4 className="text-white font-bold">Echtzeit-Verwaltung</h4>
                      <p className="text-gray-500 text-sm">Verfolgen Sie Ihren Datenverbrauch live über das SafiPay-Dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/5">
                <Image 
                  src="/blog/esim-travel-technology/hero.jpg"
                  alt="Tech-Interface"
                  fill
                  className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA-Bereich */}
      <footer className="py-32 text-center z-10 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <Zap className="mx-auto text-[#D4AF37] mb-8 animate-bounce" size={48} />
          <h2 className="text-4xl md:text-6xl font-black text-white italic mb-8 tracking-tighter uppercase">Bereit für den Abflug?</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto italic">Schließen Sie sich tausenden Elite-Reisenden an, die SafiPay vertrauen.</p>
          <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            E-SIM anfordern
          </button>
        </div>
      </footer>

    </main>
  );
}