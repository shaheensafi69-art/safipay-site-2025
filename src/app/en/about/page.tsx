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
              "jobTitle": "Co-Founder & CTO of SafiPay",
              "image": "/mujtaba.jpeg",
              "description": "Born July 28, 2006. Outstanding expert in technology and digital infrastructure. As Co-Founder and CTO, Mujtaba Rahmani leads the technical development, system security, and scalable infrastructure of SafiPay.",
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
        {/* Hero */}
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
                  About <span className="text-amber-500">SafiPay</span> and its Founders
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

        {/* Founders */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-500"
            >
              Founders of SafiPay
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {/* Shaheen Safi */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-2xl">
                  <Image
                    src="/shaheen.jpeg"
                    alt="Shaheen Safi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-bold text-amber-400 mb-2">
                    Shaheen Safi
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Born April 2, 2003 in Kabul. Young entrepreneur and developer with a mission to solve banking problems for millions of Afghans. He turned SafiPay from an idea into reality with relentless hard work.
                  </p>
                </div>
              </motion.div>

              {/* Mujtaba Rahmani */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-2xl">
                  <Image
                    src="/mujtaba.jpeg"
                    alt="Mujtaba Rahmani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-bold text-amber-400 mb-2">
                    Mujtaba Rahmani
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Co-Founder & CTO
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Born July 28, 2006. Outstanding expert in technology and digital infrastructure. As Co-Founder and CTO, Mujtaba Rahmani leads the technical development, system security, and scalable infrastructure of SafiPay.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* بقیه بخش‌ها بدون تغییر */}
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
              The Story of SafiPay
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed space-y-8"
            >
              <p>
                Years ago, when millions of Afghans inside the country lacked modern banking and those outside faced sanctions and no access to international accounts, we decided to make a change.
              </p>
              <p>
                We saw people paying 10–15% fees to hawalas for sending money to their families. We saw young people unable to buy from Amazon, Google Play, App Store, or even Netflix. We saw rural women without bank accounts.
              </p>
              <p>
                This situation was unacceptable to us. We wanted to build a bank that belongs to the people of Afghanistan — borderless, discrimination-free, and without traditional limitations.
              </p>
              <p>
                SafiPay was born in 2025. The initial goal was a simple money transfer app, but it quickly grew into a bigger dream: a full digital bank with multi-currency accounts, virtual & physical Visa cards, global online payments, and secure infrastructure for all Afghans.
              </p>
              <p>
                Today SafiPay is no longer just an idea; the website and initial app are ready, the technical team is growing, and the fundraising campaign for international licenses and full development has begun.
              </p>
              <p className="text-amber-400 font-semibold text-xl">
                SafiPay belongs to every single Afghan — whether in Kabul, Paris, Toronto, or Sydney.
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
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  Our Vision
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To create a complete digital financial ecosystem for Afghans where every individual — from the most remote village to major cities worldwide — can have unrestricted access to banking, send/receive money, shop online, and participate in the global economy.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To provide modern, secure, affordable, and borderless banking services to every Afghan citizen, with a focus on full transparency, high security, and universal access — regardless of geographic location or economic status.
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
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  title: "Full Transparency",
                  desc: "All costs, project progress, and use of funds are publicly reported every month."
                },
                {
                  title: "Security First",
                  desc: "Using the highest encryption standards, multi-factor authentication, and anti-fraud systems."
                },
                {
                  title: "Universal Access",
                  desc: "Services for all Afghans — regardless of gender, location, financial status, or education."
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
              SafiPay belongs to every single one of you. Your support is not just financial help — it is an investment in the financial future of millions of Afghans.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                href="/invest"
                className="px-12 py-7 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
              >
                Support Now
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