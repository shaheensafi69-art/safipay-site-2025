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
              "jobTitle": "Founder & CEO of SafiPay",
              "image": "/shaheen.jpeg",
              "description": "Young Afghan entrepreneur and founder of SafiPay – the first international digital bank for Afghans. Born April 2, 2003 in Kabul, with a mission to solve banking problems for millions of Afghans inside and outside the country.",
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
              "@type": "Person",
              "name": "Mujtaba Rahmani",
              "jobTitle": "Co-Founder & Head of Communications of SafiPay",
              "image": "/mujtaba.jpeg",
              "description": "Born July 28, 2006. Outstanding talent in communications, branding, and community building. As Co-Founder and Head of Communications, Mujtaba Rahmani is responsible for spreading SafiPay's message, building trust, and expanding support across the Afghan community worldwide.",
              "birthDate": "2006-07-28",
              "nationality": "Afghan",
              "url": "https://www.safipay.net/about"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SafiPay",
              "url": "https://www.safipay.net",
              "logo": "/logo.png",
              "description": "The first international digital bank for Afghans – multi-currency accounts, Visa cards, fast money transfers, and secure app for all Afghans inside and outside the country.",
              "founder": [
                { "@type": "Person", "name": "Shaheen Safi" },
                { "@type": "Person", "name": "Mujtaba Rahmani" }
              ],
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
        {/* Hero section – unchanged */}
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

        {/* About Shaheen Safi – unchanged */}
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
                  Shaheen Safi was born on April 2, 2003, in Kabul, Afghanistan. He is a young entrepreneur, developer, and fintech enthusiast who founded SafiPay to address one of the biggest challenges faced by Afghans – the lack of access to modern international banking.
                </p>
                <p>
                  From childhood, he had a strong passion for technology and economics. While many of his peers were busy with computer games, Shaheen began learning programming, blockchain, payment systems, and fintech.
                </p>
                <p>
                  He is self-taught and has hands-on experience in building financial applications, cybersecurity, and payment infrastructure. Shaheen strongly believes that “banking is a right for every human being, not just those living in developed countries.”
                </p>
                <p>
                  In 2025, when he saw that millions of Afghans inside and outside the country still had no access to Visa cards, dollar accounts, fast money transfers, or online shopping, he decided to build a real solution.
                </p>
                <p>
                  With relentless hard work and dedication, he built the initial website and app and launched a fundraising campaign to turn this dream into reality.
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
                    <li><strong>Current Role:</strong> Founder & CEO of SafiPay</li>
                    <li><strong>Location:</strong> Global (focus on France and Afghanistan)</li>
                  </ul>
                </div>

                {/* Social links – unchanged */}
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
                  {/* Instagram & Facebook links remain the same */}
                </div>

                {/* Mujtaba Rahmani info box – added right after Shaheen's box */}
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 mt-8">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">Mujtaba Rahmani</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>Full Name:</strong> Mujtaba Rahmani</li>
                    <li><strong>Date of Birth:</strong> July 28, 2006</li>
                    <li><strong>Nationality:</strong> Afghan</li>
                    <li><strong>Current Role:</strong> Co-Founder & Head of Communications</li>
                    <li><strong>Location:</strong> Global (focus on community outreach & branding)</li>
                  </ul>
                </div>

                {/* Short description of Mujtaba */}
                <p className="text-lg text-gray-300 mt-6">
                  Mujtaba Rahmani is Co-Founder and Head of Communications at SafiPay. With exceptional talent in communication, branding, and community engagement, he plays a key role in spreading SafiPay's message, building trust, and expanding support among the Afghan diaspora and local communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* بقیه بخش‌ها دقیقاً همان کد قبلی است (داستان، چشم‌انداز، ارزش‌ها، کال‌تو‌اکشن) */}
        {/* ... می‌توانید آنها را از کد قبلی خودتان کپی کنید یا اگر خواستید دوباره می‌نویسم */}
      </div>
    </>
  );
}