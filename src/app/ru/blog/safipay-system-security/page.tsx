'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { 
  Lock, Terminal, Fingerprint, 
  ArrowRight, CheckCircle2, 
  Scan, Activity
} from 'lucide-react';
import Link from 'next/link';

export default function SecuritySystemPage() {
  const params = useParams();
  const lang = params?.lang || 'ru';

  return (
    <main className="min-h-screen bg-[#000] text-white selection:bg-blue-600 selection:text-white overflow-hidden font-sans" dir="ltr">
      
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[130px] rounded-full animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-blue-500" />
            <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">
              Encrypted Core v2.0 — Зашифрованное Ядро
            </span>
          </div>

          <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase italic mb-12 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            СТАЛЬНАЯ <br />
            <span className="text-transparent hover:text-white transition-colors duration-700 cursor-default" style={{ WebkitTextStroke: '2px white' }}>
              ЗАЩИТА
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl font-light text-left opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
              Мы не просто банк; мы цифровая крепость. Под техническим руководством Муджтабы SafiPay использует протоколы стандартов ЕС для устранения финансовых границ и обеспечения непревзойденной безопасности.
            </p>
            
            <div className="flex justify-end group">
              <div className="relative w-full max-w-md aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="/blog/safipay-system-security/hero.jpg" 
                  alt="SafiPay Security Architecture" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Матрица безопасности Муджтабы активна</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="relative py-32 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-12 opacity-0 animate-[fadeIn_0.7s_ease-out_0.5s_forwards]">
              <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <Fingerprint size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Safi AI</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Официальный представитель</p>
                  </div>
                </div>
                <p className="text-md text-gray-400 leading-relaxed mb-6 italic text-left">
                  "Наша безопасность — это мост между изоляцией и мировым рынком. Муджтаба защищает код, а Сахель обеспечивает международное соответствие."
                </p>
                <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
                  <CheckCircle2 size={14} className="animate-pulse" /> Сертифицировано SafiPay EU
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4">Уровни технической защиты</div>
                {['Шифрование AES-256-GCM', 'Протокол TLS 1.3', 'Zero-Knowledge Proofs'].map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center justify-between p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:translate-x-[10px] hover:text-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                    <Lock size={14} />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Article Content */}
            <div className="lg:col-span-8 opacity-0 animate-[fadeIn_1s_ease-out_0.7s_forwards]">
              <div className="space-y-24">
                
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tight flex items-center gap-4">
                    <Activity className="text-blue-500" /> МАТРИЦА БЕЗОПАСНОСТИ
                  </h2>
                  <p className="text-gray-400 text-lg leading-[2.2] text-justify font-light">
                    В цифровую эпоху безопасность — единственная валюта, которая имеет значение. Наш директор по технической безопасности, Муджтаба, разработал многоуровневую систему защиты. Каждая транзакция проходит аудит Safi AI, а каждый актив хранится в регулируемой ЕС инфраструктуре, которую традиционные банки не могут превзойти по скорости и надежности.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                    <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 hover:translate-y-[-10px] transition-all duration-300">
                      <Terminal className="text-blue-500 mb-6" size={32} />
                      <h3 className="text-xl font-bold mb-4 uppercase italic">Неуязвимый код</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">Команда Муджтабы проводит тесты на проникновение 24/7 на каждом узле сети, чтобы гарантировать 100% работу без уязвимостей.</p>
                    </div>
                    
                    <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:translate-y-[-10px] transition-all duration-300">
                      <Scan className="text-white mb-6" size={32} />
                      <h3 className="text-xl font-bold mb-4 uppercase italic">Надзор ЕС</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">Сахель обеспечивает интеграцию всех протоколов с европейской системой SEPA и банковскими мандатами для максимальной правовой защиты.</p>
                    </div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="relative py-20 border-y border-white/10 group">
                  <span className="absolute top-10 left-0 text-[15rem] font-black opacity-[0.03] leading-none select-none pointer-events-none italic">
                    “
                  </span>
                  <blockquote className="text-3xl md:text-5xl font-light italic leading-tight text-white relative z-10 text-left">
                    "Мы даем каждому гражданину европейский сейф прямо в кармане. Скорость — наше оружие, безопасность — наш щит."
                  </blockquote>
                  <div className="mt-12 flex items-center gap-6 justify-start">
                    <div className="w-16 h-[2px] bg-blue-600 group-hover:w-24 transition-all duration-500" />
                    <p className="text-xl font-bold tracking-widest uppercase">Шахин Сафи — Основатель</p>
                  </div>
                </div>

                {/* Back Link */}
                <div className="pt-20">
                  <Link href={`/${lang}/blog`} className="inline-flex items-center gap-6 group">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                      <ArrowRight size={32} className="transition-transform duration-500 group-hover:rotate-180" />
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-tighter italic group-hover:text-blue-500 transition-colors">
                      Вернуться в энциклопедию SafiPay
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Scanner Line */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-blue-500/40 z-50 pointer-events-none animate-scan" />

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </main>
  );
}