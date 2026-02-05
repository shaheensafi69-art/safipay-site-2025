'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaheen Safi",
              "alternateName": "Shaheen Safi",
              "jobTitle": "Founder & CEO of SafiPay",
              "image": "/shaheen.jpeg",
              "description": "Jeune entrepreneur afghan dans la fintech et fondateur de SafiPay – la première banque numérique internationale pour les Afghans. Né le 2 avril 2003 à Kaboul, il cherche à résoudre les problèmes bancaires de millions d'Afghans à l'intérieur et à l'extérieur du pays.",
              "birthDate": "2003-04-02",
              "nationality": "Afghan",
              "url": "https://www.safipay.net/about",
              "sameAs": [
                "https://www.linkedin.com/in/shaheen-safi-b73a30299",
                "https://www.instagram.com/top_g_official1",
                "https://www.facebook.com/share/1H1vuV1i9Z/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SafiPay",
              "url": "https://www.safipay.net",
              "logo": "/logo.png",
              "description": "La première banque numérique internationale pour les Afghans – comptes multidevises, cartes Visa, transferts d'argent rapides et application sécurisée pour tous les Afghans à l'intérieur et à l'extérieur du pays.",
              "founder": {
                "@type": "Person",
                "name": "Shaheen Safi"
              },
              "foundingDate": "2025",
              "sameAs": [
                "https://www.linkedin.com/company/safipay",
                "https://www.instagram.com/safipay.official"
              ]
            }
          ])
        }}
      />

      <div className="min-h-screen bg-gray-950 text-white" dir="ltr">
        <section className="relative py-32 md:py-40 border-b border-amber-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-black pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative max-w-md mx-auto md:mx-0 order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
                  <div className="relative overflow-hidden rounded-3xl border-4 border-amber-700/50 shadow-2xl shadow-amber-900/60">
                    <Image
                      src="/shaheen.jpeg"
                      alt="Shaheen Safi - Fondateur de SafiPay"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              <div className="text-left order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
                >
                  À propos de <span className="text-amber-500">SafiPay</span> et de son fondateur
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                >
                  SafiPay n'est pas seulement un projet ; c'est un rêve national pour redonner le droit bancaire à des millions d'Afghans.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              Shaheen Safi – Fondateur de SafiPay
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed text-left"
              >
                <p>
                  Shaheen Safi est né le 2 avril 2003 à Kaboul, en Afghanistan. Il est un jeune entrepreneur, développeur et militant fintech qui a lancé le projet SafiPay pour résoudre l'un des plus grands problèmes de la société afghane – l'absence d'accès à un système bancaire moderne et international.
                </p>

                <p>
                  Dès l'enfance, il a développé un fort intérêt pour la technologie et l'économie. Alors que beaucoup de ses camarades jouaient à des jeux vidéo, Shaheen a commencé à apprendre la programmation, la blockchain, les systèmes de paiement et la fintech.
                </p>

                <p>
                  Il est autodidacte et possède une expérience pratique dans le développement d'applications financières, la cybersécurité et les infrastructures de paiement. Shaheen croit fermement que « la banque est un droit humain, pas un privilège réservé à ceux qui vivent dans des pays développés ».
                </p>

                <p>
                  En 2025, lorsqu'il a vu que des millions d'Afghans, à l'intérieur et à l'extérieur du pays, n'avaient toujours pas accès aux cartes Visa, aux comptes en dollars, aux transferts rapides et aux achats en ligne, il a décidé de créer une vraie solution : SafiPay.
                </p>

                <p>
                  Avec persévérance et un travail acharné jour et nuit, il a préparé le site web initial et l'application et lancé une campagne de collecte de fonds pour transformer ce rêve en réalité.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6"
              >
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 text-left">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">Informations rapides</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>Nom complet :</strong> Shaheen Safi</li>
                    <li><strong>Date de naissance :</strong> 2 avril 2003</li>
                    <li><strong>Nationalité :</strong> Afghan</li>
                    <li><strong>Poste actuel :</strong> Fondateur et PDG de SafiPay</li>
                    <li><strong>Lieu d'activité :</strong> Mondial (focus sur la France et l'Afghanistan)</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <Link
                    href="https://www.linkedin.com/in/shaheen-safi-b73a30299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </Link>

                  <Link
                    href="https://www.instagram.com/top_g_official1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </Link>

                  <Link
                    href="https://www.facebook.com/share/1H1vuV1i9Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Facebook
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* L'histoire de SafiPay */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              L'histoire de SafiPay
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-8 text-left"
            >
              <p>
                Il y a des années, quand des millions d'Afghans à l'intérieur du pays n'avaient pas accès à la banque moderne et à l'extérieur faisaient face aux sanctions et à l'absence d'accès aux comptes internationaux, j'ai décidé de faire changer les choses.
              </p>

              <p>
                J'ai vu des gens payer 10–15 % de frais élevés aux hawalas et aux changeurs pour envoyer de l'argent à leur famille. J'ai vu des jeunes incapables d'acheter sur Amazon, Google Play, App Store ou même Netflix. J'ai vu des femmes rurales sans aucun compte bancaire.
              </p>

              <p>
                Cette situation n'était pas acceptable pour moi. Je voulais construire une banque appartenant au peuple afghan, sans frontières, sans discrimination et sans les limitations traditionnelles.
              </p>

              <p>
                SafiPay est né en 2025. L'objectif initial était une simple application de transfert d'argent, mais très vite cela s'est transformé en un rêve plus grand : une banque numérique complète avec des comptes multidevises, des cartes Visa virtuelles et physiques, des paiements en ligne mondiaux et une infrastructure sécurisée pour tous les Afghans.
              </p>

              <p>
                Aujourd'hui, SafiPay n'est plus une simple idée ; le site web initial et l'application sont prêts, l'équipe technique grandit et une campagne de collecte de fonds a commencé pour obtenir les licences internationales et achever le développement.
              </p>

              <p className="text-amber-400 font-semibold text-xl">
                SafiPay appartient à chaque Afghan – que ce soit à Kaboul, à Paris, à Toronto ou à Sydney.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  Notre vision
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Créer un écosystème financier numérique complet pour les Afghans, où chaque individu – des villages les plus reculés aux grandes villes du monde – peut avoir un compte bancaire sans restriction, envoyer et recevoir de l'argent, faire des achats en ligne et participer à l'économie mondiale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  Notre mission
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Fournir des services bancaires modernes, sécurisés, abordables et sans frontières à chaque citoyen afghan, avec une transparence totale, une haute sécurité et un accès universel – indépendamment de la localisation géographique ou de la situation économique.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              Les valeurs de SafiPay
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Transparence totale",
                  desc: "Tous les coûts, l'avancement du projet et l'utilisation des fonds sont rapportés publiquement chaque mois."
                },
                {
                  title: "Sécurité en priorité",
                  desc: "Utilisation des normes de chiffrement les plus élevées, authentification multi-facteurs et systèmes anti-fraude."
                },
                {
                  title: "Accès universel",
                  desc: "Services pour tous les Afghans – indépendamment du genre, de la localisation, de la situation financière ou du niveau d'éducation."
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.2 }}
                  className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-900/30 text-left"
                >
                  <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Rejoignez-nous
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16"
            >
              SafiPay appartient à chacun d'entre vous. Votre soutien n'est pas seulement une aide financière – c'est un investissement dans l'avenir financier de millions d'Afghans.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/invest"
                className="px-12 py-7 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
              >
                Soutenir financièrement
              </Link>

              <Link
                href="/contact"
                className="px-12 py-7 text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-xl transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}