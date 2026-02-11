'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Schema.org */}
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
              "description": "Young Afghan entrepreneur and founder of SafiPay – the first international digital bank dedicated to the Afghan people. Born April 2, 2003 in Kabul, with the goal of solving banking problems for millions of Afghans inside and outside the country.",
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
              "description": "The first international digital bank for the Afghan people – multi-currency accounts, Visa cards, fast money transfers, and secure application for all Afghans inside and outside the country.",
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
        {/* هیرو بزرگ با عکس */}
        <section className="relative py-32 md:py-40 border-b border-amber-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-black pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative max-w-md mx-auto md:mx-0 order-2 md:order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-transparent rounded-3xl blur-3xl animate-pulse-slow" />
                  <div className="relative overflow-hidden rounded-3xl border-4 border-amber-700/50 shadow-2xl shadow-amber-900/60">
                    <Image
                      src="/shaheen.jpeg"
                      alt="Shaheen Safi - Founder of SafiPay"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
                >
                  About <span className="text-amber-500">SafiPay</span> and its Founder
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                >
                  SafiPay is not just a project; it is a national dream to restore banking rights to millions of Afghans.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* درباره شاهین صافی */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              Shaheen Safi – Founder of SafiPay
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                <p>
                  Shaheen Safi was born on April 2, 2003 in Kabul, Afghanistan. He is a young entrepreneur, developer, and fintech activist who launched the SafiPay project with the aim of solving one of the biggest problems of Afghan society – lack of access to a modern and international banking system.
                </p>
                <p>
                  From childhood, he had a strong interest in technology and economics. While many of his peers were busy with computer games, Shaheen started learning programming, blockchain, payment systems, and fintech.
                </p>
                <p>
                  He is self-taught and has practical experience in developing financial applications, cybersecurity, and payment infrastructure. Shaheen believes that “banking is the right of every human being, not just those living in developed countries”.
                </p>
                <p>
                  In 2025, when he saw that millions of Afghans inside and outside the country still did not have access to Visa cards, dollar accounts, fast money transfers, and online shopping, he decided to build SafiPay as a real solution.
                </p>
                <p>
                  With perseverance and round-the-clock effort, he prepared the initial website and application and started a fundraising campaign to turn this dream into reality.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6 order-1 md:order-2"
              >
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">Quick Info</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>Full Name:</strong> Shaheen Safi</li>
                    <li><strong>Date of Birth:</strong> April 2, 2003</li>
                    <li><strong>Nationality:</strong> Afghan</li>
                    <li><strong>Current Job:</strong> Founder and CEO of SafiPay</li>
                    <li><strong>Location:</strong> Global (focus on France and Afghanistan)</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-6 justify-center md:justify-end">
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
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
        {/* داستان SafiPay */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              How the story of SafiPay began
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-8"
            >
              <p>
                Years ago, when millions of Afghans inside the country faced the absence of modern banking and those outside the country struggled with sanctions and lack of access to international accounts, I decided to make a change.
              </p>
              <p>
                I saw people forced to pay heavy fees of 10–15% to money exchangers and hawalas to send money to their families. I saw young people unable to buy from Amazon, Google Play, App Store or even Netflix. I saw rural women without even a bank account.
              </p>
              <p>
                This situation was unacceptable to me. I wanted to build a bank that belongs to the people of Afghanistan, without borders, without discrimination and without traditional restrictions.
              </p>
              <p>
                SafiPay was born in 2025. The initial goal was just a simple money transfer application, but it quickly turned into a bigger dream: a full digital bank with multi-currency accounts, virtual and physical Visa cards, global online payments and secure infrastructure for all Afghans.
              </p>
              <p>
                Today SafiPay is no longer just an idea; the initial website and application are ready, the technical team is growing, and the fundraising campaign for international licenses and full development has begun.
              </p>
              <p className="text-amber-400 font-semibold text-xl">
                SafiPay belongs to every single Afghan – whether in Kabul, Paris, Toronto or Sydney.
              </p>
            </motion.div>
          </div>
        </section>
        {/* چشم‌انداز و مأموریت */}
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
                  Our Vision
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create a complete digital financial ecosystem for the Afghan people so that every individual – from the most remote villages to the big cities of the world – can have unrestricted access to banking, send and receive money, shop online and participate in the global economy.
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
                  Our Mission
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To provide modern, secure, affordable and borderless banking services to every Afghan citizen, with a focus on complete transparency, high security and universal access – regardless of geographical location or economic status.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ارزش‌ها */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              SafiPay Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Full Transparency",
                  desc: "All costs, project progress and use of funds are publicly reported every month."
                },
                {
                  title: "Security First",
                  desc: "Use of the highest encryption standards, multi-factor authentication and anti-fraud systems."
                },
                {
                  title: "Universal Access",
                  desc: "Services for all Afghans – regardless of gender, location, financial status or education."
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.2 }}
                  className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 hover:border-amber-600/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-amber-900/30"
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
        {/* کال تو اکشن نهایی */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Join Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16"
            >
              SafiPay belongs to every single one of you. Your support is not just financial help, but an investment in the financial future of millions of Afghans.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/invest"
                className="px-12 py-7 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
              >
                Support Financially
              </Link>
              <Link
                href="/contact"
                className="px-12 py-7 text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:bg-amber-950/60 rounded-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}