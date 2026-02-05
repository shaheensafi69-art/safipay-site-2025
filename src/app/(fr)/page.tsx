'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden" dir="ltr">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-12 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 opacity-8 pointer-events-none flex items-center justify-center scale-125 md:scale-150 lg:scale-175 -z-10">
          <Image
            src="/logo.png"
            alt=""
            width={1000}
            height={1000}
            className="object-contain blur-md"
          />
        </div>
        <div className="relative z-10 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.04em] mb-6 leading-none">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                SafiPay
              </span>
              <br className="sm:hidden" />
              <span className="text-4xl md:text-6xl lg:text-7xl mt-4 block font-bold text-gray-100">
                La première banque numérique internationale pour les Afghans
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Des millions d'Afghans n'ont toujours pas accès au système bancaire mondial. Nous allons changer cela.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center"
          >
            <Link
              href="#problems"
              className="group px-10 py-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              Voir les problèmes
            </Link>

            <Link
              href="/invest"
              className="group px-10 py-6 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-900/50"
            >
              Soutenir maintenant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problèmes Section */}
      <section id="problems" className="py-32 bg-black/50 border-t border-b border-amber-900/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-red-500"
          >
            Problèmes bancaires en Afghanistan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "Accès limité aux services bancaires",
                desc: "Plus de 85–90 % de la population (surtout en zones rurales et les femmes) n'ont pas de compte bancaire. Les banques ne sont présentes que dans les grandes villes.",
              },
              {
                title: "Absence de vraies cartes internationales",
                desc: "Presque aucune banque afghane n'émet de vraies Visa ou Mastercard. Les cartes existantes sont locales ou très limitées et ne fonctionnent pas à l'étranger.",
              },
              {
                title: "Système de transfert informel et coûteux",
                desc: "Les gens utilisent des hawalas avec des frais de 5–15 %. Risque élevé de fraude, perte d'argent et absence de suivi.",
              },
              {
                title: "Pas de connexion aux systèmes de paiement mondiaux",
                desc: "L'Afghanistan est largement coupé de SWIFT. Les paiements en ligne vers Amazon, Google, Apple, Netflix etc. sont presque impossibles.",
              },
              {
                title: "Sanctions et restrictions bancaires",
                desc: "Les banques afghanes sont déconnectées ou fortement limitées du système bancaire mondial. Les transferts en dollars ou devises étrangères sont difficiles, chers et lents.",
              },
              {
                title: "Absence de banque numérique avancée",
                desc: "Les applications bancaires existantes sont très basiques, lentes et peu sécurisées. Le KYC numérique est presque inexistant.",
              },
              {
                title: "Manque d'infrastructures de sécurité et de transparence",
                desc: "Forte blanchiment d'argent et fraude à cause d'un système AML/KYC faible. Les gens ont peu confiance dans les banques officielles.",
              },
              {
                title: "Problèmes de liquidité et d'inflation élevée",
                desc: "Pour préserver la valeur, les gens passent au dollar, mais l'accès au dollar physique ou numérique est très difficile et risqué.",
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="bg-gray-900/70 border border-red-900/40 rounded-2xl p-8 hover:border-red-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-900/30 text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-red-400 group-hover:text-red-300 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {problem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-amber-500"
          >
            Comment SafiPay résout ces problèmes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                problem: "Accès limité aux services bancaires",
                solution: "Compte bancaire numérique international pour chaque Afghan sans visite physique",
              },
              {
                problem: "Absence de vraies cartes internationales",
                solution: "Émission instantanée de carte Visa virtuelle + physique utilisable partout dans le monde",
              },
              {
                problem: "Système de transfert informel et coûteux",
                solution: "Transferts rapides et peu coûteux (moins de 1 % de frais) dans le monde entier avec suivi",
              },
              {
                problem: "Pas de connexion aux systèmes de paiement mondiaux",
                solution: "Connexion directe aux réseaux internationaux – achats en ligne sans restriction",
              },
              {
                problem: "Sanctions et restrictions bancaires",
                solution: "Infrastructure légale pour contourner les restrictions en respectant les lois mondiales",
              },
              {
                problem: "Absence de banque numérique avancée",
                solution: "Application moderne, rapide et sécurisée avec KYC numérique complet",
              },
              {
                problem: "Manque d'infrastructures de sécurité et de transparence",
                solution: "Système AML/KYC robuste, rapports mensuels transparents, chiffrement avancé, support 24/7",
              },
              {
                problem: "Problèmes de liquidité et d'inflation élevée",
                solution: "Compte multidevises avec conservation et conversion facile de dollars, euros, etc.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-900/30 text-left"
              >
                <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-4 group-hover:text-red-300 transition-colors">
                  Problème : {item.problem}
                </h3>
                <div className="text-lg text-amber-400 font-semibold mb-3">
                  Solution SafiPay :
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-8">
              Avec SafiPay, chaque Afghan peut participer librement à l'économie mondiale
            </p>
            <Link
              href="/invest"
              className="inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              Rejoignez-nous maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}