'use client';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white" dir="ltr">
      {/* Hero */}
      <section className="relative py-24 md:py-32 border-b border-amber-900/30 bg-gradient-to-b from-black to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/15 to-transparent pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
          >
            Contactez-nous
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Vous avez des questions, des suggestions ou besoin d'assistance ?
            L'équipe SafiPay est toujours prête à vous répondre.
          </motion.p>
        </div>
      </section>

      {/* Coordonnées + Formulaire */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-bold text-amber-500 mb-6">
                  Nos moyens de contact
                </h3>
                <div className="space-y-6">
                  <a
                    href="tel:+19342032497"
                    className="flex items-center gap-4 text-xl hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-800/50 transition-colors">
                      <Phone size={24} className="text-amber-400" />
                    </div>
                    <span>+1 (934) 203-2497</span>
                  </a>

                  <a
                    href="tel:+33753928913"
                    className="flex items-center gap-4 text-xl hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-800/50 transition-colors">
                      <Phone size={24} className="text-amber-400" />
                    </div>
                    <span>+33 7 53 92 89 13</span>
                  </a>

                  <a
                    href="https://wa.me/19342032497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-xl hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-800/50 transition-colors">
                      <MessageSquare size={24} className="text-amber-400" />
                    </div>
                    <span>WhatsApp : +1 (934) 203-2497</span>
                  </a>

                  <a
                    href="mailto:ssafi9241@hotmail.com"
                    className="flex items-center gap-4 text-xl hover:text-amber-400 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center group-hover:bg-amber-800/50 transition-colors">
                      <Mail size={24} className="text-amber-400" />
                    </div>
                    <span>ssafi9241@hotmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gray-900/70 border border-amber-900/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-amber-900/30 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-amber-500 mb-8">
                Envoyez-nous un message
              </h3>

              <form
                action="https://formspree.io/f/maqbrkgq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Nouveau message depuis le site SafiPay" />
                <input type="hidden" name="_next" value="/contact?success=true" />

                <div>
                  <label htmlFor="name" className="block text-lg text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Votre nom..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Votre email..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg text-gray-300 mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-5 text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg shadow-amber-900/40 flex items-center justify-center gap-3"
                >
                  <Send size={24} />
                  Envoyer le message
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-green-900/30 border border-green-700 rounded-xl text-center text-green-400 text-lg"
                >
                  Votre message a été envoyé avec succès !
                  Nous vous contacterons très bientôt.
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}