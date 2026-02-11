'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPageEN() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans" dir="ltr">
      
      {/* Hero Section - The Vision */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-amber-900/20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Shaping the Future of Afghan Finance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6 mb-8 bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            Breaking Financial <br /> Boundaries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            SafiPay is more than just a financial app; it is a revolutionary infrastructure built to democratize access to global banking systems for every Afghan citizen, anywhere in the world.
          </motion.p>
        </div>
      </section>

      {/* Founders Section - Detailed Expertise */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col gap-32">
          
          {/* Shaheen Safi - CEO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/shaheen.jpeg" 
                alt="Shaheen Safi - Founder & CEO" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4 font-semibold">
                Founder & Chief Executive Officer
              </div>
              <h2 className="text-4xl font-bold">Shaheen Safi</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Shaheen Safi (born 2003) is a FinTech strategist and the architect of digital payment systems. With a vision that transcends traditional borders, he leads the overall strategic direction of SafiPay and oversees the development of its technical infrastructure.
                </p>
                <p>
                  By mastering European banking ecosystems and deeply understanding Afghanistan&apos;s economic challenges, Shaheen has designed a model that blends world-class security with seamless accessibility. His expertise in solving complex banking hurdles and financial crisis management is the driving force behind SafiPay&apos;s journey to becoming the first Afghan Neobank.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Technical Expertise</h4>
                  <p className="text-sm text-gray-400">Cloud Architecture, Payment Security & Blockchain</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Leadership</h4>
                  <p className="text-sm text-gray-400">Strategic Management & International Business Scaling</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mujtaba Rahmani - CCO */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 lg:order-1 order-2"
            >
              <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm mb-4 font-semibold">
                Co-Founder & Chief Communications Officer
              </div>
              <h2 className="text-4xl font-bold">Mujtaba Rahmani</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  Mujtaba Rahmani (born 2006) is a specialist in strategic communications and brand development. He holds the vital responsibility of managing public relations, expanding brand influence in global markets, and building bridges between SafiPay and the vast Afghan diaspora.
                </p>
                <p>
                  Utilizing his unique skills in negotiation and market psychology, Mujtaba plays a key role in gaining investor trust and establishing SafiPay as a stable, community-driven financial institution. His mission goes beyond marketing; he is fostering a new financial culture for Afghanistan&apos;s younger generation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Communications</h4>
                  <p className="text-sm text-gray-400">Strategic Branding, Business Negotiation & PR</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-white/5">
                  <h4 className="text-amber-500 font-bold mb-1">Growth</h4>
                  <p className="text-sm text-gray-400">Customer Acquisition & International Support</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:order-2 order-1 relative"
            >
              <div className="absolute -inset-4 bg-amber-600/20 blur-2xl rounded-full opacity-50" />
              <Image 
                src="/mujtaba.jpeg" 
                alt="Mujtaba Rahmani - Co-Founder" 
                width={600} height={700}
                className="relative rounded-[2rem] border-2 border-amber-500/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission at SafiPay is to empower every Afghan with financial freedom. Leveraging emerging technologies, we aim to minimize transfer costs and provide access to international credit cards and multi-currency accounts—turning what was once a dream for our people into an everyday reality.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-amber-500">Vision 2030</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are building a future where no Afghan is excluded from the digital economy due to geography. Our vision is to become the largest financial infrastructure in the region and a leader in Neobanking services for developing communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">The Pillars of SafiPay</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Absolute Transparency", 
              desc: "We believe trust is not built on secrecy. All financial processes and costs at SafiPay are reported with full transparency." 
            },
            { 
              title: "Enhanced Banking Security", 
              desc: "Using advanced encryption protocols and biometric authentication, we guarantee asset security beyond traditional standards." 
            },
            { 
              title: "Financial Inclusion", 
              desc: "Our services are designed without discrimination, connecting even the most remote areas of Afghanistan to global markets." 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl hover:border-amber-500/50 transition-all text-left"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[3rem] py-16">
          <h2 className="text-4xl font-black mb-6 text-white">Be Part of the Financial Revolution</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            We are changing the financial destiny of a nation. Whether as a user or an investor, there is a place for you at SafiPay.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/invest" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">Invest Now</Link>
            <Link href="/contact" className="border-2 border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Contact Executive Team</Link>
          </div>
        </div>
      </section>

    </div>
  );
}