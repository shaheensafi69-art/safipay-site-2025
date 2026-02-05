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
                The First International Digital Bank for Afghans
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Millions of Afghans still lack access to the global banking system. We are here to change that.
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
              See the Problems
            </Link>
            <Link
              href="/invest"
              className="group px-10 py-6 text-xl md:text-2xl font-bold border-2 border-amber-600 text-amber-400 hover:text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-amber-900/50"
            >
              Support Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-32 bg-black/50 border-t border-b border-amber-900/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-red-500"
          >
            Banking Problems in Afghanistan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: 'Limited Access to Banking Services',
                desc: 'Over 85–90% of the population (especially rural areas and women) have no bank account. Banks only have branches in major cities, leaving many regions with no access.',
              },
              {
                title: 'Lack of Real International Cards',
                desc: 'Almost no Afghan bank issues real Visa or Mastercard. Existing cards are mostly domestic or heavily restricted and do not work internationally.',
              },
              {
                title: 'Expensive Informal Money Transfer System',
                desc: 'People rely on hawalas and money exchangers with 5–15% fees. High risk of fraud, loss of money, and no tracking.',
              },
              {
                title: 'No Connection to Global Payment Systems',
                desc: 'Afghanistan is largely cut off from SWIFT. Online payments to international sites (Amazon, Google, Apple, Netflix, etc.) are nearly impossible.',
              },
              {
                title: 'Sanctions and Banking Restrictions',
                desc: 'Afghan banks are disconnected or heavily restricted from the global banking system. Transferring dollars or foreign currency is difficult, expensive, and slow.',
              },
              {
                title: 'Lack of Advanced Digital Banking',
                desc: 'Existing banking apps are very basic, slow, and insecure. Digital KYC (online identity verification) is almost nonexistent.',
              },
              {
                title: 'No Security Infrastructure and Transparency',
                desc: 'High money laundering and fraud due to weak AML/KYC. People have little trust in formal banking and prefer cash or physical dollars.',
              },
              {
                title: 'Liquidity and Severe Inflation Problems',
                desc: 'To preserve value, people turn to dollars, but access to physical or digital dollars is very difficult and risky.',
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
            How SafiPay Solves These Problems
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                problem: 'Limited Access to Banking Services',
                solution: 'International digital bank account for every Afghan (inside and outside the country) without in-person visits',
              },
              {
                problem: 'Lack of Real International Cards',
                solution: 'Instant issuance of virtual Visa + physical card usable worldwide online and in stores',
              },
              {
                problem: 'Expensive Informal Money Transfer System',
                solution: 'Fast and cheap money transfers (less than 1% fee) worldwide with full tracking',
              },
              {
                problem: 'No Connection to Global Payment Systems',
                solution: 'Direct connection to international payment networks – online shopping without restrictions',
              },
              {
                problem: 'Sanctions and Banking Restrictions',
                solution: 'Legal international infrastructure to bypass restrictions while fully complying with global laws',
              },
              {
                problem: 'Lack of Advanced Digital Banking',
                solution: 'Modern, fast, secure app with full digital KYC (online identity verification)',
              },
              {
                problem: 'No Security Infrastructure and Transparency',
                solution: 'Strong AML/KYC system, monthly transparent reporting, advanced encryption, 24/7 support',
              },
              {
                problem: 'Liquidity and Severe Inflation Problems',
                solution: 'Multi-currency digital account with easy holding and conversion of USD, EUR, and more',
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
                  Problem: {item.problem}
                </h3>
                <div className="text-lg text-amber-400 font-semibold mb-3">
                  SafiPay Solution:
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
              With SafiPay, every Afghan can freely participate in the global economy
            </p>
            <Link
              href="/invest"
              className="inline-block px-12 py-6 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50"
            >
              Join Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}