'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, ShieldCheck, ArrowRight, CreditCard, Zap, 
  Wifi, Smartphone, CheckCircle2, Coins, 
  Lock, Server, Briefcase, Car, Cpu, Landmark, BadgeCheck, ShieldAlert
} from 'lucide-react';

export default function FrenchElitePartnership() {
  const containerRef = useRef(null);
  
  // Paramètres de défilement cinématique pour la voiture
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25, 
    damping: 20,
    restDelta: 0.001
  });

  const carY = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- 1. HERO: LE GOLIATH FINANCIER --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <span className="inline-block px-8 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
              Le Réseau Financier Souverain 2026
            </span>
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.75] mb-16 italic tracking-tighter">
              PUISSANCE <br/> <span className="text-amber-500 text-glow">SANS ÉGAL.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-3xl text-gray-500 font-light leading-relaxed italic">
              L'écosystème Safi est le pont définitif entre l'excellence de la fintech européenne 
              et les marchés émergents d'Asie centrale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PILIER I: WALLESTER AS --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-amber-500 font-black tracking-widest text-sm uppercase">Pilier Stratégique I: Wallester AS</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">Cœur Bancaire <br/> Européen.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Nous avons établi un partenariat direct de niveau 1 avec **Wallester AS**, un EMI agréé en Estonie et membre principal de VISA. 
              Cela contourne les systèmes bancaires régionaux fragiles, offrant à nos utilisateurs une connexion API directe avec le réseau financier de l'UE.
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">01. PCI-DSS</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">Conformité Sécurité Maximale</p>
                </div>
                <div className="space-y-2">
                    <div className="text-amber-500 font-black text-xl italic">02. VISA BIN</div>
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-tighter">Droits d'émission directs VISA</p>
                </div>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(245,158,11,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden transition-all duration-500 shadow-2xl"
          >
             <CreditCard size={180} className="absolute -right-10 -top-10 opacity-5" />
             <ul className="space-y-6 relative z-10 text-gray-300 font-bold">
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Comptes IBAN Européens Personnels</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Émission Instantanée de Cartes VISA Virtuelles</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Règlements Mondiaux SEPA & SWIFT</li>
                <li className="flex items-center gap-4"><BadgeCheck className="text-amber-500" /> Portefeuilles Multi-devises indexés sur l'Euro</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 3. PILIER II: DING GLOBAL --- */}
      <section className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.4)' }}
            className="lg:col-span-6 p-12 rounded-[5rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/10 transition-all duration-500"
          >
                <h4 className="text-blue-500 font-black mb-8 text-center">VÉLOCITÉ DU RÉSEAU</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">500+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Opérateurs Mondiaux</div>
                    </div>
                    <div className="p-6 bg-black rounded-3xl border border-white/5">
                        <div className="text-4xl font-black italic">150+</div>
                        <div className="text-[10px] text-gray-500 uppercase">Pays Couverts</div>
                    </div>
                </div>
          </motion.div>
          <div className="lg:col-span-6 space-y-10">
            <h3 className="text-blue-500 font-black tracking-widest text-sm uppercase">Pilier Stratégique II: Réseau Ding</h3>
            <h2 className="text-6xl font-black italic leading-[0.9]">Connectivité <br/> Sans Limites.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              **Ding** est le moteur de transfert de valeur mobile le plus puissant au monde. Safi TopUp intègre cette infrastructure pour fournir 
              du crédit téléphonique et des services E-SIM instantanés. Pour la première fois, les utilisateurs des marchés volatils peuvent rester connectés avec 
              une latence de 0,1s via nos nœuds globaux.
            </p>
            <div className="flex gap-4">
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">RÈGLEMENT EN TEMPS RÉEL</span>
                <span className="px-6 py-2 rounded-xl bg-blue-500/20 text-blue-500 text-xs font-black italic">PRÊT POUR L'E-SIM 5G</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. CATALOGUE DES SERVICES --- */}
      <section className="py-40 container mx-auto px-6">
        <div className="text-center mb-32 space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">La <span className="text-amber-500 text-glow">Grille</span> de Services.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light italic">Des instruments financiers supérieurs conçus pour l'ère moderne.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
            {[
                { t: "VISA Virtuelle", d: "Émise en quelques secondes. Valide pour FB Ads, Google Cloud, Netflix et 100M+ marchands. Zéro blocage régional.", icon: <CreditCard className="text-amber-500" size={40}/> },
                { t: "IBAN Personnel", d: "Recevez des salaires mondiaux ou des paiements freelance directement de l'UE/USA. Régulé par le droit financier européen.", icon: <Globe className="text-amber-500" size={40}/> },
                { t: "E-SIM Mondiale", d: "Activation instantanée pour 150+ pays. Voyagez de Kaboul à Dubaï ou Londres sans changer de carte physique.", icon: <Smartphone className="text-amber-500" size={40}/> },
                { t: "Pont Crypto", d: "La rampe de sortie la plus rapide. Convertissez vos actifs numériques en solde VISA instantanément avec une sécurité militaire.", icon: <Coins className="text-amber-500" size={40}/> },
                { t: "Moteur Business", d: "Comptes d'entreprise pour les sociétés régionales devant payer des fournisseurs mondiaux en USD/EUR sans délais.", icon: <Briefcase className="text-amber-500" size={40}/> },
                { t: "IA de Richesse", d: "Algorithmes propriétaires surveillant la volatilité du marché et suggérant des couvertures de change entre AFN, USD et EUR.", icon: <Cpu className="text-amber-500" size={40}/> }
            ].map((srv, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -15, backgroundColor: 'rgba(245,158,11,0.05)', borderColor: 'rgba(245,158,11,0.3)' }}
                    className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 transition-all duration-300 group"
                >
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{srv.icon}</div>
                    <h4 className="text-2xl font-black mb-6 italic">{srv.t}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">{srv.d}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- 5. SUPÉRIORITÉ RÉGIONALE --- */}
      <section className="py-40 bg-amber-500/5">
        <div className="container mx-auto px-6">
            <h2 className="text-6xl font-black text-center mb-32 italic">SUPÉRIORITÉ <span className="text-amber-500">TOTALE.</span></h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div whileHover={{ scale: 0.98 }} className="p-12 bg-black rounded-[4rem] border border-red-500/20">
                    <ShieldAlert className="text-red-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-red-500 uppercase tracking-tighter">Banques Régionales Classiques</h3>
                    <ul className="space-y-6 text-gray-600 text-sm font-bold">
                        <li>• Sanctions Lourdes & Réseaux Restreints</li>
                        <li>• KYC sur Papier (Prend 7 à 14 jours)</li>
                        <li>• Aucun Support pour les Marchands Numériques Globaux</li>
                        <li>• Frais Élevés & Protocoles SWIFT Obsolètes</li>
                    </ul>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-12 bg-black rounded-[4rem] border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
                    <BadgeCheck className="text-amber-500 mb-8" size={50} />
                    <h3 className="text-3xl font-black mb-8 italic text-amber-500 uppercase tracking-tighter">Écosystème Global Safi</h3>
                    <ul className="space-y-6 text-amber-400 text-sm font-bold italic">
                        <li>• Infrastructure agréée UE & Membre Principal VISA</li>
                        <li>• KYC piloté par IA (Prêt en 120 secondes)</li>
                        <li>• 100% d'Acceptation sur les plateformes Ad/Stream</li>
                        <li>• Règlements par API à latence quasi nulle</li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- 6. ROADMAP DE MISSION AVEC VOITURE --- */}
      <section className="py-60 container mx-auto px-6 relative" ref={containerRef}>
        <h2 className="text-7xl font-black text-center mb-60 italic tracking-tighter uppercase">Journal de <span className="text-amber-500 text-glow">Mission.</span></h2>
        
        <div className="relative max-w-5xl mx-auto px-4 h-[2500px]">
          {/* LA PISTE */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[8px] h-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="absolute top-0 left-0 w-full bg-amber-500 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            />
          </div>

          {/* LA VOITURE DE LUXE */}
          <motion.div 
            style={{ top: carY }}
            className="absolute left-1/2 -translate-x-1/2 -mt-10 z-50 flex flex-col items-center"
          >
            <div className="bg-amber-500 p-4 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,1)] rotate-90 transition-transform duration-500">
                <Car size={32} className="text-black fill-black" />
            </div>
            <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent mt-2 mx-auto" />
          </motion.div>

          {/* PHASES DE LA FEUILLE DE ROUTE */}
          {[
            { phase: "PHASE 01", title: "Genèse Institutionnelle", desc: "Acquisition des protocoles bancaires de l'UE. Intégration API avec Wallester AS. Établissement de ponts de liquidité de niveau 1.", year: "Q1 2026", y: "10%", side: "right" },
            { phase: "PHASE 02", title: "Pulsar de Connectivité", desc: "Intégration du réseau Ding Global. Safi TopUp couvrant 500+ opérateurs. Lancement des forfaits E-SIM 5G internationaux.", year: "Q2 2026", y: "35%", side: "left" },
            { phase: "PHASE 03", title: "Domination Retail", desc: "Lancement officiel de l'App SafiPay (iOS/Android). Émission publique de cartes VISA virtuelles et d'IBAN.", year: "Q3 2026", y: "60%", side: "right" },
            { phase: "PHASE 04", title: "Souveraineté Physique", desc: "Émission de cartes physiques Safi Titanium. Déploiement de terminaux de paiement dans les centres de luxe.", year: "Q4 2026", y: "85%", side: "left" },
          ].map((step, i) => (
            <div 
                key={i} 
                className={`absolute w-full flex items-center ${step.side === "left" ? "justify-start text-left" : "justify-end text-right"}`}
                style={{ top: step.y }}
            >
                <motion.div 
                    initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(245,158,11,0.5)' }}
                    transition={{ duration: 0.8 }}
                    className="md:w-[42%] p-12 bg-[#0a0a0a] border border-white/10 rounded-[4rem] transition-all shadow-2xl cursor-default"
                >
                    <span className="text-amber-500 font-black text-xs block mb-4 tracking-[0.4em] uppercase">{step.year}</span>
                    <h4 className="text-amber-600 font-bold uppercase text-[10px] mb-2">{step.phase}</h4>
                    <h3 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm italic">{step.desc}</p>
                </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. FORMULAIRE D'ENQUÊTE STRATÉGIQUE --- */}
      <section className="py-60 container mx-auto px-6" id="partner-form">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
                <h2 className="text-7xl font-black italic leading-[0.8]">Rejoignez le <br/> <span className="text-amber-500">Conseil.</span></h2>
                <p className="text-gray-400 text-2xl font-light italic leading-relaxed">
                  "Nous sélectionnons 5 partenaires stratégiques pour la phase d'expansion du T3. Postulez pour un créneau institutionnel."
                </p>
                <div className="flex items-center gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10">
                    <Landmark size={40} className="text-amber-500" />
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Grade Institutionnel</p>
                        <p className="font-bold">Examen sous 24h Garanti</p>
                    </div>
                </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 p-12 md:p-20 bg-black border border-white/10 rounded-[5rem] shadow-2xl relative overflow-hidden"
            >
                <form action="https://formspree.io/f/maqbrkgq" method="POST" className="space-y-10 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Nom de l'Entité</label>
                            <input name="entity" type="text" required placeholder="Banque / Cabinet" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Email Officiel</label>
                            <input name="email" type="email" required placeholder="ceo@societe.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all font-sans" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Intention Stratégique</label>
                        <select name="intent" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 text-gray-400 font-bold">
                            <option>Investissement Institutionnel</option>
                            <option>Fournisseur d'Infrastructure</option>
                            <option>Expansion du Marché / Franchise</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Proposition Exécutive</label>
                        <textarea name="proposal" rows={6} required placeholder="Vision et Synergie..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-amber-500 transition-all resize-none font-sans"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 text-black font-black py-8 rounded-3xl text-2xl uppercase tracking-tighter hover:bg-amber-400 transition-all shadow-[0_30px_60px_rgba(245,158,11,0.3)]">
                        Initier les Discussions
                    </button>
                </form>
            </motion.div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-10 opacity-20 italic font-black text-[9px] uppercase tracking-[1em]">
            <span>Wallester Licensed</span>
            <span>Ding Official</span>
            <span>VISA Principal Member</span>
        </div>
        <p className="text-gray-800 text-[10px] uppercase tracking-[0.5em]">Infrastructure Globale SafiPay © 2026 | Built for the Frontier Markets.</p>
      </footer>
    </div>
  );
}