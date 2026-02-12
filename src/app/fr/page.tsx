'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  AlertCircle, CheckCircle2, Globe, Shield, Zap, 
  CreditCard, ArrowRight, BarChart3, Handshake 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HomePageFR() {
  const pathname = usePathname();
  const currentLang = pathname?.split('/')[1] || 'fr';

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden selection:bg-amber-500/30" dir="ltr">
      
      {/* --- Section Hero --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5 pointer-events-none -z-10 blur-3xl">
           <Image src="/logo.png" alt="" fill className="object-contain animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase"
          >
            Briser les frontières financières pour tous les Afghans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.85]"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent italic">SafiPay</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-amber-500 mt-6 block font-bold tracking-widest uppercase">
              La Banque Digitale pour l'Afghanistan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Propulser des millions de personnes grâce au premier écosystème bancaire digital international. 
            Sans limites, sans frontières ; la sécurité et la rapidité au standard mondial.
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
              Voir les Défis <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${currentLang}/partners`}
              className="px-10 py-5 border-2 border-amber-600/50 text-amber-500 text-xl font-black rounded-2xl hover:bg-amber-600/10 transition-all shadow-[0_0_30px_rgba(217,119,6,0.2)] flex items-center gap-3"
            >
              <Handshake size={24} /> Partenariat Stratégique
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Section Problèmes (Crisis) --- */}
      <section id="problems" className="py-32 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="p-4 bg-red-500/10 rounded-3xl mb-6"
            >
              <AlertCircle size={48} className="text-red-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">
              La Crise <span className="text-red-600">Bancaire</span> Afghane
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl font-light leading-relaxed">
              Les systèmes financiers actuels sont inefficaces, isolés et obsolètes. 
              Des millions d'Afghans sont exclus de l'économie numérique moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { title: '85% Sans Compte', desc: 'La majorité de la population, surtout les femmes et les zones rurales, n\'a aucun accès aux services bancaires de base.' },
              { title: 'Isolation SWIFT', desc: 'La déconnexion des réseaux mondiaux rend les transferts officiels quasi impossibles et risqués.' },
              { title: 'Cartes Invalides', desc: 'Les cartes locales actuelles ne fonctionnent pas sur les plateformes comme Amazon, Netflix ou Google.' },
              { title: '15% de Frais', desc: 'La dépendance au système "Hawala" traditionnel entraîne des pertes financières massives et un manque de transparence.' },
              { title: 'Inflation Galopante', desc: 'L\'absence d\'infrastructure pour détenir des devises stables (USD/EUR) détruit l\'épargne des familles.' },
              { title: 'Pas de KYC Digital', desc: 'L\'ouverture d\'un compte nécessite toujours une présence physique et une bureaucratie complexe.' },
              { title: 'Sécurité Fragile', desc: 'Les infrastructures faibles augmentent les risques de fraude et les menaces financières.' },
              { title: 'Économie Hors-ligne', desc: 'Les entreprises locales ne peuvent pas accepter de paiements mondiaux, freinant la croissance nationale.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050505] border border-white/5 p-8 rounded-[2rem] hover:border-red-500/30 transition-all group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-red-500 transition-colors tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section Solutions --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div 
              whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
              className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-6"
            >
              <Zap size={48} className="text-amber-500" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
              L'Avenir <span className="text-amber-500">est ici</span>
            </h2>
            <p className="text-gray-400 text-xl font-light italic">
              SafiPay est plus qu'une application, c'est un pont connectant l'Afghanistan aux marchés financiers mondiaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Globe />, title: 'Accès Global', desc: 'Ouverture de compte internationale instantanée pour les Afghans partout dans le monde.' },
              { icon: <CreditCard />, title: 'Cartes Virtuelles', desc: 'Émission immédiate de cartes Visa pour vos achats mondiaux et abonnements en ligne.' },
              { icon: <Zap />, title: '1% de Commission', desc: 'Une alternative intelligente aux transferts coûteux avec des transactions rapides et transparentes.' },
              { icon: <Shield />, title: 'Sécurité Avancée', desc: 'Cryptage de niveau bancaire et vérification d\'identité digitale pour protéger vos actifs.' },
              { icon: <BarChart3 />, title: 'Multi-Devises', desc: 'Détenez et convertissez des devises mondiales pour vous protéger contre l\'inflation.' },
              { icon: <CheckCircle2 />, title: 'Conformité Légale', desc: 'Opère dans le cadre des réglementations financières internationales pour garantir la stabilité.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-10 bg-black/40 border border-white/5 rounded-[2.5rem] hover:border-amber-500/50 transition-all duration-500 shadow-2xl text-left"
              >
                <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 max-w-5xl mx-auto bg-gradient-to-l from-amber-600 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(217,119,6,0.3)]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
              Prêt à rebâtir l'économie <br /> afghane ?
            </h2>
            <Link
              href={`/${currentLang}/partners`}
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Rejoignez notre réseau de partenaires <Handshake size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}