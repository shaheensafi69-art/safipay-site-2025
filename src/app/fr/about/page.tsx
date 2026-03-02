'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, Globe, Zap, ArrowRight, Code2, Rocket, 
  Target, Banknote, User, Landmark, ShieldCheck, 
  Cpu, Wallet, Network, ArrowUpRight 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AboutUsPageFrench() {
  const pathname = usePathname();
  // تشخیص زبان از URL
  const currentLang = pathname?.split('/')[1] || 'fr';

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans" dir="ltr">
      
      {/* --- Section Hero (Déclaration de mission) --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Réécrire l'avenir financier de l'Afghanistan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-10 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            L'ÉCOSYSTÈME <br /> SAFIPAY
          </motion.h1>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            SafiPay est une solution fintech transfrontalière conçue pour briser l'isolement financier et offrir un accès équitable à l'économie numérique mondiale.
          </p>
        </div>
      </section>

      {/* --- Section Problème & Solution --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-left">
            <div>
              <h2 className="text-3xl font-black text-amber-500 italic mb-6">Pourquoi SafiPay est-il né ?</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Dans le monde d'aujourd'hui, les systèmes bancaires traditionnels en Afghanistan font face à des défis majeurs. Le découplage de SWIFT, les limites de transactions internationales et les frais de change exorbitants ont isolé nos entrepreneurs et freelances du marché mondial. Nous sommes ici pour abattre ces murs.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Contourner les intermédiaires", icon: <Zap size={20}/>, desc: "Réduction des coûts de transfert jusqu'à 90 % grâce à une infrastructure numérique." },
                { title: "Connectivité au marché mondial", icon: <Globe size={20}/>, desc: "Permettre des revenus en devises étrangères pour les professionnels et freelances locaux." },
                { title: "Sécurité de niveau militaire", icon: <Shield size={20}/>, desc: "Utilisation de protocoles de cryptage avancés pour protéger tous les actifs numériques." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all">
                  <div className="text-amber-500 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
             <div className="relative border border-white/10 rounded-[3rem] p-10 bg-white/[0.01] backdrop-blur-3xl">
                <h3 className="text-2xl font-black mb-8 italic">Technologie de l'écosystème</h3>
                <div className="space-y-8 text-gray-400 font-light text-left">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"><Cpu size={24}/></div>
                      <p>Moteur principal propulsé par l'<span className="text-white font-bold">Intelligence Artificielle</span> pour l'analyse des risques.</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><Network size={24}/></div>
                      <p>Infrastructure <span className="text-white font-bold">Blockchain</span> pour une transparence inégalée des transactions.</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0"><Wallet size={24}/></div>
                      <p>Système de <span className="text-white font-bold">Smart Wallet</span> avec des capacités de conversion de devises instantanée.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Section Équipe de direction --- */}
      <section className="py-32 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black italic uppercase text-white mb-4">Équipe de direction</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light">Les architectes et fondateurs derrière la vision SafiPay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Shaheen Safi", 
                role: "Fondateur & CEO", 
                img: "/shaheen.jpeg", 
                href: `/${currentLang}/founder/shaheen-safi`,
                color: "border-amber-500/30"
              },
              { 
                name: "Mujtaba Rahmani", 
                role: "Co-fondateur & CTO", 
                img: "/mujtaba.jpeg", 
                href: `/${currentLang}/founder/mujtaba-rahmani`,
                color: "border-blue-500/30"
              },
              { 
                name: "Sahel Salem", 
                role: "Leader de l'écosystème", 
                img: "/sahel.jpeg", 
                href: `/${currentLang}/founder/sahel-salem`,
                color: "border-green-500/30"
              }
            ].map((member, i) => (
              <Link key={i} href={member.href} className="block group">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className={`p-4 rounded-[2.5rem] bg-white/[0.02] border ${member.color} hover:bg-white/[0.05] transition-all overflow-hidden`}
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-end px-2 pb-2 text-left">
                    <div>
                      <h4 className="text-xl font-black text-white italic">{member.name}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Appel à l'action --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="relative p-16 rounded-[4rem] overflow-hidden text-center border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 italic uppercase relative z-10">Prêt à rejoindre l'économie mondiale ?</h2>
          <Link href={`/${currentLang}/partners`} className="relative z-10 inline-flex items-center gap-4 px-12 py-5 bg-amber-500 text-black font-black text-lg rounded-2xl hover:bg-white transition-all group">
            Devenir partenaire <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}