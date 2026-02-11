'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Schema.org – Shaheen & Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaheen Safi",
              "alternateName": "شاهین صافی",
              "jobTitle": "Founder & CEO of SafiPay",
              "image": "/shaheen.jpeg",
              "description": "A young Afghan entrepreneur and the founder of SafiPay – the first international digital bank dedicated to the people of Afghanistan. Born April 2, 2003, in Kabul, with the goal of solving banking challenges for millions of Afghans worldwide.",
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
              "description": "The first international digital bank for the Afghan people – multi-currency accounts, Visa cards, fast transfers, and a secure app for all Afghans globally.",
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
        {/* Hero Section */}
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
              <div className="text-left order-1 md:order-2">
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

        {/* Shaheen Safi Bio */}
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
                className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed text-left"
              >
                <p>
                  Shaheen Safi was born on April 2, 2003, in Kabul, Afghanistan. He is a young entrepreneur, developer, and fintech activist who launched the SafiPay project to solve one of the biggest challenges for the Afghan community: lack of access to a modern, international banking system.
                </p>
                <p>
                  From a young age, he had a deep interest in technology and economics. While many of his peers were busy with gaming, Shaheen began teaching himself programming, blockchain, payment systems, and fintech.
                </p>
                <p>
                  He is self-taught with hands-on experience in financial app development, cybersecurity, and payment infrastructure. Shaheen believes that "Banking is a right for all humans, not just those living in developed countries."
                </p>
                <p>
                  In 2025, seeing that millions of Afghans inside and outside the country still lacked access to Visa cards, dollar accounts, fast transfers, and online shopping, he decided to build SafiPay as a real solution.
                </p>
                <p>
                  With dedication and round-the-clock effort, he prepared the initial website and app and launched a fundraising campaign to turn this dream into a reality.
                </p>
              </motion.div>

              {/* Fast Facts Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6"
              >
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 text-left">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">Quick Facts</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>Full Name:</strong> Shaheen Safi</li>
                    <li><strong>Date of Birth:</strong> April 2, 2003</li>
                    <li><strong>Nationality:</strong> Afghan</li>
                    <li><strong>Current Role:</strong> Founder & CEO of SafiPay</li>
                    <li><strong>Location:</strong> Global (Focusing on France and Afghanistan)</li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <Link
                    href="https://www.linkedin.com/in/shaheen-safi-b73a30299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://www.instagram.com/top_g_official1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/1H1vuV1i9Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-amber-950 rounded-xl transition-colors"
                  >
                    Facebook
                  </Link>
                </div>

                {/* Mujtaba Rahmani Card */}
                <div className="bg-gray-900/70 border border-amber-900/40 rounded-2xl p-8 text-left mt-8">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">Mujtaba Rahmani</h3>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li><strong>Full Name:</strong> Mujtaba Rahmani</li>
                    <li><strong>Date of Birth:</strong> July 28, 2006</li>
                    <li><strong>Nationality:</strong> Afghan</li>
                    <li><strong>Current Role:</strong> Co-founder & Communications Lead</li>
                    <li><strong>Location:</strong> Global (Focusing on outreach and support)</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-300 mt-6 text-left">
                  Mujtaba Rahmani is the Co-founder and Communications Lead of SafiPay. With a special talent for communication, branding, and building trust, he plays a key role in spreading the SafiPay message and gathering support from the Afghan community worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-black/50 border-t border-b border-amber-900/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              How the SafiPay Story Began
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-8 text-left"
            >
              <p>
                Years ago, when millions of Afghans faced a lack of modern banking at home and sanctions or account access issues abroad, I decided to make a change.
              </p>
              <p>
                I saw people forced to pay heavy 10-15% fees to exchange offices just to send money to their families. I saw young people unable to buy from Amazon, Google Play, the App Store, or even Netflix. I saw rural women who didn't even have a bank account.
              </p>
              <p>
                This was unacceptable to me. I wanted to build a bank that belongs to the Afghan people – without borders, without discrimination, and without traditional limitations.
              </p>
              <p>
                SafiPay was born in 2025. The initial goal was just a simple money transfer app, but it quickly became a larger dream: a full digital bank with multi-currency accounts, virtual and physical Visa cards, and global online payments.
              </p>
              <p className="text-amber-400 font-semibold text-xl">
                SafiPay belongs to every Afghan – whether in Kabul, Paris, Toronto, or Sydney.
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
                  Our Vision
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create a complete digital financial ecosystem for the Afghan people where every individual can have a bank account, send and receive money, and participate in the global economy without limits.
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
                  Providing modern, secure, affordable, and borderless banking services to every Afghan citizen, focusing on transparency, high security, and universal access.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                  title: "Total Transparency",
                  desc: "All costs, project progress, and fund utilization are reported publicly every month."
                },
                {
                  title: "Security First",
                  desc: "Utilizing the highest encryption standards, multi-factor authentication, and anti-fraud systems."
                },
                {
                  title: "Universal Access",
                  desc: "Services for all Afghans – regardless of gender, location, financial status, or education."
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
              Join Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16"
            >
              SafiPay belongs to each and every one of you. Your support is not just a contribution, but an investment in the financial future of millions of Afghans.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/invest"
                className="px-12 py-7 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
              >
                Support Us
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