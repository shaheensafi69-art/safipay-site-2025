'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Globe, Shield, Zap, CreditCard, ArrowRight, BarChart3 } from 'lucide-react';

export default function HomePageFR() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Section Hero (L'Avenir) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Effets d'arrière-plan */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-10 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm font-bold tracking-widest uppercase"
          >
            Briser les frontières financières pour tous les Afghans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">SafiPay</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-amber-500 mt-6 block font-bold italic">
              Néobanque pour l&apos;Afghanistan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Propulser des millions de personnes avec la première banque digitale internationale. 
            Sans frontières, sans limites ; une finance mondiale à portée de main.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="#problems"
              className="px-10 py-5 bg-white text-black text-xl font-black rounded-2xl hover:bg-amber-500 transition-all flex items-center gap-2 group"
            >
              Découvrir les Problèmes <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/invest"
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)]"
            >
              Soutenir la Mission
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Section Problèmes: La Crise (Rouge) --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-6">
              La Crise <span className="text-red-600">Bancaire</span>
            </h2>
            <p className="text-gray-500 text-xl text-center max-w-2xl font-light">
              Les systèmes financiers actuels en Afghanistan sont défaillants, isolés et obsolètes. 
              Des millions de personnes sont exclues du monde digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% Non-Bancarisés', desc: 'La majorité de la population, surtout les femmes, n&apos;a aucun accès aux services bancaires de base.' },
              { title: 'Isolement SWIFT', desc: 'Être coupé des réseaux mondiaux signifie que les transferts internationaux sont impossibles ou risqués.' },
              { title: 'Cartes Invalides', desc: 'Les cartes actuelles échouent sur les plateformes comme Amazon, Netflix ou Google.' },
              { title: 'Frais de 15%', desc: 'Le recours aux systèmes informels (Hawala) entraîne des pertes financières massives et aucun suivi.' },
              { title: 'Inflation Sévère', desc: 'Aucun moyen facile de détenir des actifs stables comme l&apos;USD ou l&apos;EUR pour protéger les économies.' },
              { title: 'Pas de KYC Digital', desc: 'L&apos;ouverture d&apos;un compte nécessite encore une présence physique et une bureaucratie lente.' },
              { title: 'Zéro Transparence', desc: 'Le manque d&apos;infrastructure de sécurité favorise les fraudes et les risques de blanchiment d&apos;argent.' },
              { title: 'Économie Hors-ligne', desc: 'Les entreprises ne peuvent pas accepter de paiements mondiaux, freinant la croissance nationale.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-950 border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Solutions: La Révolution SafiPay (Or) --- */}
      <section className="py-32 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              L&apos;Avenir est <span className="text-amber-500 italic">Ici</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              SafiPay n&apos;est pas seulement une application ; c&apos;est un pont connectant les Afghans au marché mondial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Accès Mondial', desc: 'Comptes internationaux instantanés pour les Afghans du monde entier sans visite physique.' },
              { icon: <CreditCard />, title: 'Cartes Virtuelles', desc: 'Émission instantanée de Visa/Mastercard pour le shopping mondial et les abonnements.' },
              { icon: <Zap />, title: 'Frais de 1%', desc: 'Contournez le système coûteux Hawala avec des transferts rapides, économiques et transparents.' },
              { icon: <Shield />, title: 'Sécurité Avancée', desc: 'Cryptage de niveau bancaire et KYC digital pour une tranquillité d&apos;esprit totale.' },
              { icon: <BarChart3 />, title: 'Multi-Devises', desc: 'Détenez et convertissez USD, EUR et plus pour vous protéger contre l&apos;inflation.' },
              { icon: <CheckCircle2 />, title: 'Conformité Totale', desc: 'Opère selon les cadres légaux mondiaux tout en servant les non-bancarisés.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-10 bg-black/50 border border-amber-900/20 rounded-[2.5rem] hover:bg-amber-950/10 hover:border-amber-500/50 transition-all duration-500 shadow-2xl"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Appel à l'action final (Final CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Prêt à rebâtir <br /> l&apos;économie de l&apos;Afghanistan ?
            </h2>
            <Link
              href="/invest"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Rejoignez le Mouvement <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}