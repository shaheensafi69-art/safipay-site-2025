'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Landmark, Scale, Lock, 
  CheckCircle2, ArrowRight, Building, 
  Award, Eye, FileCheck2, HeartHandshake
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function FcaCompliancePageEn() {
  const author = {
    name: "Shirin Gol Ahmadi",
    role: "All Ecosystem Manager",
    avatar: "/shirin.jpeg",
    email: "shirinahmadi@safipay.net",
    bio: "Shirin Gol Ahmadi is the All Ecosystem Manager at SafiPay, orchestrating institutional regulatory compliance with UK and European statutory bodies, client asset safeguarding, and cross-departmental operations.",
    profileUrl: "/en/founder/shirin-gol-ahmadi"
  };

  const keyTakeaways = [
    "SafiPay models its asset security protocols directly on the UK Financial Conduct Authority (FCA) Electronic Money Regulations 2011 (EMRs).",
    "100% of client balances are held in legally ring-fenced, segregated safeguarding accounts with Tier-1 UK and European partner banks.",
    "Unlike legacy commercial banks operating under fractional reserves, SafiPay conducts zero consumer lending or speculative reinvestment of client funds.",
    "Comprehensive adoption of the FCA Consumer Duty standard ensures total pricing transparency, no predatory fees, and proactive consumer protection."
  ];

  const tableOfContents = [
    { id: "fca-overview", label: "1. The UK Financial Conduct Authority (FCA) Mandate" },
    { id: "safeguarding-mechanisms", label: "2. Rigorous Client Asset Safeguarding Architecture" },
    { id: "no-lending-pledge", label: "3. The Fractional-Reserve vs. Pure Custody Distinction" },
    { id: "consumer-duty", label: "4. Consumer Duty & Treating Customers Fairly (TCF)" },
    { id: "ecosystem-supervision", label: "5. Operational Stewardship Across the Entire Ecosystem" },
  ];

  const faqs = [
    {
      question: "What does client fund safeguarding mean under FCA rules?",
      answer: "Safeguarding mandates that customer funds are held completely separate from company operating capital in dedicated trust accounts at regulated Tier-1 credit institutions. Even in an insolvency scenario, third-party creditors have zero claim over customer funds."
    },
    {
      question: "Does SafiPay lend user balances to third parties?",
      answer: "No. SafiPay operates strictly as a digital payments and electronic money ecosystem. Every Euro or British Pound deposited by users remains liquid and ready for instantaneous withdrawal 24/7."
    },
    {
      question: "How does UK FCA compliance benefit international users outside the UK?",
      answer: "FCA standards represent the global gold standard in fintech consumer protection. By applying these strict governance benchmarks universally, SafiPay ensures that every global customer enjoys institutional-grade legal security regardless of geography."
    }
  ];

  const relatedPosts = [
    {
      title: "SafiPay Global Ecosystem Governance: Harmonizing Cross-Border Financial Policies",
      slug: "global-ecosystem-governance",
      category: "Ecosystem Architecture",
      readTime: "8 min",
      excerpt: "Inside Shirin Gol Ahmadi's strategic leadership harmonizing international banking guidelines."
    },
    {
      title: "How SafiPay Complies with SEPA Standards & EPC Framework",
      slug: "sepa-regulatory-framework",
      category: "Regulatory Compliance",
      readTime: "8 min",
      excerpt: "Deep breakdown of SEPA Instant Credit Transfer execution and ISO 20022 message architecture."
    },
    {
      title: "6AMLD & FATF Compliance Framework: Operational Monitoring at SafiPay",
      slug: "aml-fatf-regulatory-compliance",
      category: "AML & Operations",
      readTime: "10 min",
      excerpt: "How Operations Manager Mujtaba Rahmani deploys automated anti-money laundering controls."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 mb-6">
            <ShieldCheck size={16} className="text-pink-400" />
            <span className="text-pink-400 text-xs font-bold uppercase tracking-[0.25em]">UK Regulatory Governance Report • 2026</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter italic uppercase leading-[1.1]">
            UK FCA REGULATORY STANDARDS & <br /><span className="text-pink-400">CAPITAL SAFEGUARDING</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            How the SafiPay ecosystem implements the Electronic Money Regulations (EMRs), full custodial segregation, and proactive Consumer Duty governance.
          </p>
        </div>
      </section>

      {/* Editorial Wrapper */}
      <BlogEditorialEnhancer
        locale="en"
        slug="fca-compliance-standards"
        title="UK FCA Regulatory Standards & Capital Safeguarding Across the SafiPay Ecosystem"
        description="Comprehensive analysis of UK FCA e-money safeguarding, fund ring-fencing, and fair consumer protection authored by All Ecosystem Manager Shirin Gol Ahmadi."
        category="Global Governance"
        readTime="9 min"
        publishedDate="Feb 23, 2026"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg">
          
          {/* Section 1 */}
          <section id="fca-overview" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-pink-500 pl-4">
              1. The UK Financial Conduct Authority (FCA) Mandate
            </h2>
            <p>
              The UK Financial Conduct Authority (FCA) is renowned globally as one of the most stringent and forward-thinking financial regulators. Its mandate differs fundamentally from traditional prudential authorities by focusing heavily on consumer protection, market integrity, and institutional ethics.
            </p>
            <p>
              Across the SafiPay organization, I serve as <strong className="text-white font-bold">Shirin Gol Ahmadi</strong> (All Ecosystem Manager), directing the cross-departmental enforcement of these demanding benchmarks. Our philosophy is unequivocal: whether an entrepreneur onboarded from Central Asia or a merchant operating in Europe, every user deserves the exact same rigorous custodial protection that protects elite City of London corporations.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/safipay-system-security/hero.jpg" 
                alt="SafiPay FCA Asset Safeguarding Architecture" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-pink-400 font-bold uppercase tracking-wider">Figure 1.0: Independent ring-fencing of client balances versus company operating funds</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="safeguarding-mechanisms" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-pink-500 pl-4">
              2. Rigorous Client Asset Safeguarding Architecture
            </h2>
            <p>
              Under Chapter 4 of the Electronic Money Regulations 2011, safeguarding is the legal requirement that an authorized institution protect unencumbered consumer money.
            </p>
            <p>
              SafiPay executes this mandate through complete structural segregation:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Customer deposits are never co-mingled with SafiPay operational accounts, payroll, or business development funds.</li>
              <li>Funds are immediately deposited in designated Safeguarding Accounts held at credit institutions with sovereign Tier-1 stability ratings.</li>
              <li>In the theoretical event of company insolvency, safeguarding laws ensure that user funds are shielded from general creditors and returned directly to account holders.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="no-lending-pledge" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-pink-500 pl-4">
              3. The Fractional-Reserve vs. Pure Custody Distinction
            </h2>
            <p>
              Traditional commercial banks thrive by operating under fractional reserve models: lending up to 90% of user balances into commercial mortgages and leveraged corporate credit. When financial crises trigger mass withdrawals, traditional banks can face catastrophic illiquidity.
            </p>
            <p>
              SafiPay maintains 100% full-reserve backing. We do not engage in speculative investments or credit issuance. If every single customer chose to liquidate their Euro or foreign currency balances simultaneously, every cent would settle immediately.
            </p>
          </section>

          {/* Section 4 */}
          <section id="consumer-duty" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-pink-500 pl-4">
              4. Consumer Duty & Treating Customers Fairly (TCF)
            </h2>
            <p>
              The FCA's landmark Consumer Duty framework requires financial institutions to act in good faith, avoid foreseeable consumer harm, and enable customers to pursue their financial goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-8 rounded-3xl bg-pink-500/5 border border-pink-500/20">
                <FileCheck2 className="text-pink-400 mb-4" size={32} />
                <h3 className="text-white text-xl font-bold mb-2">Absolute Price Transparency</h3>
                <p className="text-gray-400 text-sm">Real-time interbank foreign exchange quotes with clear, pre-disclosed spreads and zero hidden deductions.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <HeartHandshake className="text-pink-400 mb-4" size={32} />
                <h3 className="text-white text-xl font-bold mb-2">Responsive Consumer Care</h3>
                <p className="text-gray-400 text-sm">Swift dispute mediation and clear adherence to international financial ombudsman protocols.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="ecosystem-supervision" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-pink-500 pl-4">
              5. Operational Stewardship Across the Entire Ecosystem
            </h2>
            <blockquote className="border-l-4 border-pink-500 bg-white/[0.02] p-8 rounded-2xl my-8 italic text-lg text-white">
              "Managing the entire SafiPay ecosystem is an active, daily responsibility. From ensuring our engineering pipelines encrypt client identifiers to verifying that our cross-border clearing partners fulfill sovereign standards, compliance is the unbreakable cornerstone of our platform."
              <footer className="text-pink-400 font-bold text-sm not-italic mt-3">— Shirin Gol Ahmadi, All Ecosystem Manager</footer>
            </blockquote>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}
