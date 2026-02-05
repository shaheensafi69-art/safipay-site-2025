'use client';
import { motion } from 'framer-motion';

export default function InvestPage() {
  const CAMPAIGN_LINK = "https://gogetfunding.com/safipay-%d8%a7%d9%88%d9%84%db%8c%d9%86-%d8%a8%d8%a7%d9%86%da%a9-%d8%af%db%8c%d8%ac%db%8c%d8%aa%d8%a7%d9%84-%d8%a8%d8%b1%d8%a7%db%8c-%d9%85%db%8c%d9%84%db%8c%d9%88%d9%86%d9%87%d8%a7-%d8%a7/";
  const raised = 0;
  const goal = 80000;
  const percentage = Math.round((raised / goal) * 100);
  const donors = 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white" dir="ltr">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-amber-900/30 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 to-transparent pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
          >
            Construire l'avenir de l'Afghanistan
            <span className="text-amber-500 block mt-4">Avec votre soutien</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            SafiPay est la première banque numérique internationale pour les Afghans.
            Nous avons besoin de votre soutien pour obtenir les licences bancaires, développer la technologie, mettre en place une sécurité avancée et lancer pleinement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-amber-500 mb-4"
          >
            Notre objectif : 80 000 $
          </motion.div>
        </div>
      </section>

      {/* Barre de progression */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto bg-gray-900/70 border border-amber-900/40 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-amber-900/30 backdrop-blur-sm"
          >
            <div className="text-8xl md:text-10xl font-black text-amber-500 mb-6">
              {percentage}%
            </div>

            <div className="w-full bg-gray-800 rounded-full h-6 mb-10 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-600 to-amber-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  ${raised.toLocaleString()}
                </div>
                <p className="text-xl text-gray-400">Récolté</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  ${goal.toLocaleString()}
                </div>
                <p className="text-xl text-gray-400">Objectif</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  {donors.toLocaleString()}
                </div>
                <p className="text-xl text-gray-400">Soutiens</p>
              </div>
            </div>

            <p className="mt-12 text-lg text-gray-400">
              Dernière mise à jour : {new Date().toLocaleString('fr-FR')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Boutons de soutien */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Votre soutien fait la différence dès maintenant
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
            <a
              href={`${CAMPAIGN_LINK}?amount=10`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                10 $
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                Petit soutien
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=25`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                25 $
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                Bon soutien
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=50`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                50 $
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                Soutien fort
              </span>
            </a>

            <a
              href={`${CAMPAIGN_LINK}?amount=100`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold bg-gray-900/70 border border-amber-900/50 rounded-2xl hover:border-amber-600/70 hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block text-amber-500 group-hover:text-amber-400 transition-colors text-2xl md:text-3xl mb-2">
                100 $
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                Gros soutien
              </span>
            </a>

            <a
              href={CAMPAIGN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 lg:col-span-1 group relative py-10 px-6 md:px-8 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="block group-hover:text-white transition-colors text-2xl md:text-3xl mb-2">
                Montant libre
              </span>
              <span className="block text-sm md:text-base text-gray-400">
                Le montant que vous voulez
              </span>
            </a>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Toutes les contributions vont directement au développement technique, à la sécurité, aux licences et au lancement complet.
            </p>

            <p className="text-lg text-gray-400 mb-12">
              Des rapports mensuels complets et transparents seront fournis à tous les chers soutiens.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action final */}
      <section className="py-20 bg-gradient-to-t from-amber-950/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
          >
            Chaque dollar que vous donnez ne contribue pas seulement à construire la première banque numérique des Afghans, mais change l'avenir financier de millions de personnes.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            href="/contact"
            className="inline-block mt-10 px-12 py-6 text-xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-xl transition-all"
          >
            Vous avez des questions ? Contactez-nous
          </motion.a>
        </div>
      </section>
    </div>
  );
}