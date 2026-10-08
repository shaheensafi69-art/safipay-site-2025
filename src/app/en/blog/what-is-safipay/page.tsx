'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Globe2, ArrowRight, 
  Lock, Landmark, CreditCard, Users, 
  CheckCircle2, Building2, Cpu, Globe, ArrowUpRight
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function WhatIsSafiPayPage() {
  const author = {
    name: "Shaheen Safi",
    role: "Director & Founder",
    avatar: "/founders/shaheen-safi.png",
    email: "shaheen@safipay.net",
    bio: "Shaheen Safi is the Director & Founder of SafiPay's global neobanking ecosystem, pioneering financial inclusion and borderless digital infrastructure between Europe and emerging markets.",
    profileUrl: "/en/founder/shaheen-safi"
  };

  const keyTakeaways = [
    "SafiPay is a licensed European digital financial ecosystem enabling instantaneous cross-border transactions for global citizens.",
    "Users receive a dedicated EU IBAN in their own name, fully integrated with SEPA Instant Credit Transfer rails.",
    "Virtual and physical Visa cards are generated in under 60 seconds with 3D Secure 2.0 institutional fraud protection.",
    "Integrated digital eSIM connectivity covers over 200+ countries with high-speed 5G/4G global roaming."
  ];

  const tableOfContents = [
    { id: "institutional-architecture", label: "1. Institutional Architecture" },
    { id: "core-pillars", label: "2. The Four Core Pillars" },
    { id: "instant-issuance", label: "3. Real-Time Issuance Engine" },
    { id: "sepa-integration", label: "4. Direct European IBAN & SEPA" },
    { id: "borderless-visa", label: "5. Borderless Visa Ecosystem" },
    { id: "global-compliance", label: "6. Security & EU Compliance" },
  ];

  const faqs = [
    {
      question: "Who can open an account with SafiPay?",
      answer: "SafiPay is designed for global citizens, international remote workers, digital nomads, and cross-border businesses who require direct access to the European financial system without bureaucratic geographic roadblocks."
    },
    {
      question: "How long does it take to receive a European IBAN?",
      answer: "Account verification and dedicated EU IBAN issuance are completed in as little as 60 seconds following automated KYC document verification, providing immediate access to SEPA transfers."
    },
    {
      question: "Are SafiPay Visa cards accepted worldwide?",
      answer: "Yes. SafiPay virtual and physical Visa cards operate on Visa's global settlement network and are accepted at millions of merchants, ATMs, and online platforms in over 200 countries."
    },
    {
      question: "How does SafiPay guarantee customer asset security?",
      answer: "Client funds are segregated in tier-1 European partner banks under strict EU central banking regulatory directives, protected by end-to-end AES-256 cryptographic vaulting."
    }
  ];

  const relatedPosts = [
    {
      title: "EU-Level Institutional Security: How SafiPay Protects Your Assets",
      slug: "safipay-system-security",
      category: "Security & Compliance",
      readTime: "12 min",
      excerpt: "Deep technical dive into cryptographic protocols and zero-knowledge key management."
    },
    {
      title: "Complete Guide to SafiPay Virtual Visa Cards",
      slug: "visa-card-guide",
      category: "Digital Banking",
      readTime: "15 min",
      excerpt: "Master online payments, international checkout limits, and instant card freezing."
    },
    {
      title: "Benefits of a European IBAN for Global Remote Workers",
      slug: "iban-account-benefits",
      category: "Digital Banking",
      readTime: "7 min",
      excerpt: "Why owning a direct European bank account eliminates costly remittance markups."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
            <ShieldCheck size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Official Platform Guide • 2026 Edition</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-[1.05]">
            WHAT IS <span className="text-[#D4AF37]">SAFIPAY</span>?
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            An institutional-grade European neobanking architecture engineered to eliminate financial borders, deliver instant EU IBAN accounts, and issue global Visa cards within 60 seconds.
          </p>
        </div>
      </section>

      {/* Editorial Wrapper with Reading Bar, Takeaways, TOC, Author, FAQs & Related Posts */}
      <BlogEditorialEnhancer
        locale="en"
        slug="what-is-safipay"
        title="What is SafiPay? The Premier European Digital Banking Platform"
        description="Comprehensive analysis of the SafiPay ecosystem: European IBAN accounts, virtual Visa cards, SEPA Instant transfers, and institutional security."
        category="Platform Overview"
        readTime="8 min"
        publishedDate="Feb 10, 2026"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        {/* Article Body Content */}
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg">
          
          {/* Section 1 */}
          <section id="institutional-architecture" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              1. Institutional Architecture: Beyond Traditional Banking
            </h2>
            <p>
              Traditional banking systems were architected in the 20th century around physical territorial borders, manual compliance queues, and slow correspondent banking networks. For millions of ambitious entrepreneurs, remote engineers, and global diaspora communities, this outdated model created painful obstacles: exorbitant wire transfer fees, arbitrarily blocked payments, and weeks of waiting just to open a checking account.
            </p>
            <p>
              <strong className="text-white font-bold">SafiPay</strong> was founded to fundamentally solve this fragmentation. Headquartered and strategically structured across European financial epicenters, SafiPay operates as a high-velocity digital financial institution that connects users directly to the European Economic Area (EEA) clearing houses.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/what-is-safipay/hero.jpg" 
                alt="SafiPay Core Technology" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">Figure 1.0: Real-time European payment settlement pipeline</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="core-pillars" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              2. The Four Core Pillars of the SafiPay Ecosystem
            </h2>
            <p>
              The platform is built on four synchronized pillars designed to provide end-to-end financial sovereignty:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Landmark size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Dedicated EU IBAN</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Individual International Bank Account Numbers issued under European regulatory frameworks, enabling SEPA and SEPA Instant credit transfers across 36 European nations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <CreditCard size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Borderless Visa Cards</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Instant virtual debit cards for subscription management, ad-spend payments, and global eCommerce, accompanied by contactless physical cards for worldwide ATM usage.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Globe size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Integrated Travel eSIM</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Instant cellular data access across 200+ destinations directly managed from the SafiPay app, removing costly foreign roaming charges.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Cpu size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">AI-Powered Treasury</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Intelligent balance alerts, real-time FX currency conversions at interbank rates, and automated spending analytics that safeguard liquidity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="instant-issuance" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              3. The 60-Second Real-Time Issuance Engine
            </h2>
            <p>
              At legacy financial institutions, acquiring a debit card involves 10-14 business days of postal delivery and in-branch identity verification. SafiPay’s cloud engine replaces this latency with automated programmatic issuance.
            </p>
            <p>
              Once identity credentials are corroborated via automated biometric matching, the card creation daemon issues card credentials directly into the client's encrypted vault. Users can immediately bind their virtual cards to Apple Pay and Google Wallet for immediate tap-to-pay transactions in retail environments worldwide.
            </p>
          </section>

          {/* Section 4 */}
          <section id="sepa-integration" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              4. Direct European IBAN & SEPA Instant Integration
            </h2>
            <p>
              Having an IBAN under your own personal or business name is crucial for international credibility. With SafiPay:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Clients can receive salaries directly from European, UK, and American tech employers via standard domestic wire channels.</li>
              <li>SEPA Instant Credit Transfers settle within 10 seconds, 24/7/365, even on weekends and bank holidays.</li>
              <li>Incoming transfers are credited with zero hidden receiving deductions.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="borderless-visa" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              5. Borderless Visa Ecosystem & Fraud Prevention
            </h2>
            <p>
              Each SafiPay Visa card is fortified with dynamic CVV capabilities, customizable monthly spend caps, and instant one-tap freeze controls. If a merchant experiences a data leak, users can instantly regenerate their card details with zero disruption to their primary checking balances.
            </p>
          </section>

          {/* Section 6 */}
          <section id="global-compliance" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              6. Institutional Security & Regulatory Compliance
            </h2>
            <p>
              Security at SafiPay is engineered in layers: hardware security modules (HSM), end-to-end TLS 1.3 transport encryption, and segregated customer balance accounts held exclusively in regulated European custodian banks.
            </p>
            
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#D4AF37]/30 text-center space-y-4 my-10 not-prose">
              <h3 className="text-2xl font-black text-white italic uppercase">Ready to Experience Modern European Banking?</h3>
              <p className="text-sm text-gray-400 max-w-xl mx-auto font-light">
                Join thousands of global citizens who have elevated their financial infrastructure with SafiPay. Open your European account today.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="px-8 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-[#D4AF37]/20 inline-flex items-center gap-2"
                >
                  Get Started Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}