'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Terminal, Fingerprint, 
  Scan, Activity, ArrowRight, CheckCircle2,
  KeyRound, ShieldAlert, Cpu, Server
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function SecuritySystemPage() {
  const author = {
    name: "Mujtaba Rahmani",
    role: "Operations Manager",
    avatar: "/mujtaba.jpeg",
    email: "mujtaba@safipay.net",
    bio: "Mujtaba Rahmani is the Operations Manager of SafiPay, leading day-to-day operational integrity, cryptographic protocol execution, automated risk mitigation engines, and transaction monitoring standards.",
    profileUrl: "/en/founder/mujtaba-rahmani"
  };

  const keyTakeaways = [
    "SafiPay utilizes bank-grade AES-256-GCM cryptographic encryption for all at-rest account storage and TLS 1.3 for in-transit communication.",
    "User private keys and cryptographic credentials are partitioned via Hardware Security Modules (HSM) with zero-knowledge architecture.",
    "Full compliance with European Union Banking Authority (EBA) security guidelines and GDPR Article 32 data safety mandates.",
    "Integrated machine-learning fraud detection inspects transactions in under 20 milliseconds, shutting down unauthorized vector attacks instantly."
  ];

  const tableOfContents = [
    { id: "security-matrix", label: "1. The SafiPay Security Matrix" },
    { id: "cryptographic-vaults", label: "2. Cryptographic Vaults & HSM" },
    { id: "zero-knowledge", label: "3. Zero-Knowledge Data Isolation" },
    { id: "eu-regulatory-safeguards", label: "4. European Custody Safeguards" },
    { id: "ai-fraud-prevention", label: "5. Real-Time AI Fraud Prevention" },
  ];

  const faqs = [
    {
      question: "Are user funds protected by European deposit insurance rules?",
      answer: "Yes. All client balances deposited into SafiPay accounts are held in segregated reserve accounts at regulated Tier-1 European partner banking institutions, safeguarding them against commercial insolvency."
    },
    {
      question: "Can SafiPay employees view my card CVV or banking credentials?",
      answer: "No. All sensitive financial credentials undergo zero-knowledge client-side encryption. CVV numbers and PINs are computed inside isolated cryptographic hardware and never displayed in plaintext to staff."
    },
    {
      question: "What happens if my phone or card is stolen?",
      answer: "Users have instantaneous one-click biometric kill switches in the SafiPay mobile portal to immediately lock virtual and physical cards, revoke API session tokens, and block outgoing transfers."
    }
  ];

  const relatedPosts = [
    {
      title: "What is SafiPay? The Premier European Digital Banking Platform",
      slug: "what-is-safipay",
      category: "Platform Overview",
      readTime: "8 min",
      excerpt: "Comprehensive analysis of the entire neobanking infrastructure and core services."
    },
    {
      title: "Complete Guide to SafiPay Virtual Visa Cards",
      slug: "visa-card-guide",
      category: "Digital Banking",
      readTime: "15 min",
      excerpt: "Master international payments and 3D Secure 2.0 transaction protection."
    },
    {
      title: "Benefits of a Dedicated European IBAN",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Lock size={16} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em]">Cryptographic Protocol Whitepaper • v2.6</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-[1.05]">
            IRONCLAD <span className="text-[#D4AF37]">SECURITY</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            An in-depth technical analysis of SafiPay’s multi-layered defense architecture, European custodial safety, and automated real-time fraud mitigation.
          </p>
        </div>
      </section>

      {/* Editorial Wrapper */}
      <BlogEditorialEnhancer
        locale="en"
        slug="safipay-system-security"
        title="EU-Level Institutional Security: How SafiPay Protects Your Assets"
        description="Technical analysis of SafiPay security protocols: AES-256-GCM encryption, biometric key isolation, zero-knowledge proofs, and European compliance."
        category="Security & Compliance"
        readTime="12 min"
        publishedDate="Feb 27, 2026"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg">
          
          {/* Section 1 */}
          <section id="security-matrix" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-blue-500 pl-4">
              1. The SafiPay Security Matrix: Defense in Depth
            </h2>
            <p>
              In modern international finance, digital trust is paramount. Under the technical engineering supervision of co-founder <strong className="text-white font-bold">Mujtaba Rahmani</strong>, SafiPay was engineered from day zero with a military-grade "Defense in Depth" paradigm. Rather than relying on a single perimeter firewall, every individual software component, database shard, and API microservice treats surrounding nodes as untrusted.
            </p>
            <p>
              Our infrastructure actively isolates customer records, payment authorization queues, and settlement rails across mathematically segregated European cloud instances.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/safipay-system-security/hero.jpg" 
                alt="SafiPay Security Architecture" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Figure 1.0: Real-time cryptographic ledger monitoring & anomaly detection</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="cryptographic-vaults" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-blue-500 pl-4">
              2. Cryptographic Vaults & Hardware Security Modules (HSM)
            </h2>
            <p>
              At the foundation of our encryption stack lies dedicated FIPS 140-2 Level 3 certified Hardware Security Modules (HSM). Master encryption keys never exist in plaintext server memory.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <Terminal size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">AES-256-GCM</h4>
                <p className="text-xs text-gray-400">Authenticated symmetric encryption safeguarding all stored financial databases and transaction logs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <KeyRound size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">ECDSA Secp256k1</h4>
                <p className="text-xs text-gray-400">High-entropy asymmetric signatures for verifying payment initiation requests and administrative changes.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <Server size={24} className="text-blue-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">TLS 1.3 Strict Mode</h4>
                <p className="text-xs text-gray-400">Perfect forward secrecy enforcing modern cipher suites, immune to legacy downgrade interception attacks.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="zero-knowledge" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-blue-500 pl-4">
              3. Zero-Knowledge Data Isolation
            </h2>
            <p>
              Even in the improbable event of an infrastructure compromise, user card data remains unreadable. Primary Account Numbers (PAN) and verification codes are dynamically tokenized. The database merely stores cryptographically salted tokens that only authorized payment processors can decode during an active transaction session.
            </p>
          </section>

          {/* Section 4 */}
          <section id="eu-regulatory-safeguards" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-blue-500 pl-4">
              4. European Custody Safeguards & Capital Segregation
            </h2>
            <p>
              Unlike risky crypto exchanges or non-regulated payment conduits, SafiPay never lends or re-hypothecates client deposits. Under the leadership of CEO <strong className="text-white font-bold">Sahel Salem</strong>, our operational framework maintains 100% reserve liquidity backed by established Tier-1 European partner banking institutions.
            </p>
          </section>

          {/* Section 5 */}
          <section id="ai-fraud-prevention" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-blue-500 pl-4">
              5. Real-Time AI Fraud Prevention Engine
            </h2>
            <p>
              Our algorithmic fraud mitigation engine processes over 120 behavioral telemetry markers per swipe or click—including geolocation coherence, device fingerprinting, and spending velocity—allowing legitimate transfers in milliseconds while freezing suspicious vectors automatically.
            </p>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}