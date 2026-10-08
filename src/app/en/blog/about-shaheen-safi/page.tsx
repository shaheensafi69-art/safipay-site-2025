'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Crown, Star, Award, ShieldCheck, 
  Quote, Zap, CheckCircle2, ArrowRight,
  Landmark, Globe
} from 'lucide-react';
import BlogEditorialEnhancer from '@/components/blog/BlogEditorialEnhancer';

export default function AboutFounderPage() {
  const author = {
    name: "Shirin Gol Ahmadi",
    role: "All Ecosystem Manager",
    avatar: "/shirin.jpeg",
    email: "shirinahmadi@safipay.net",
    bio: "Shirin Gol Ahmadi is the All Ecosystem Manager at SafiPay, orchestrating cross-departmental operations, multi-jurisdiction financial synchronizations, and institutional partner governance.",
    profileUrl: "/en/founder/shirin-gol-ahmadi"
  };

  const keyTakeaways = [
    "Shaheen Safi founded SafiPay to dismantle institutional banking barriers that systematically exclude talent in developing nations.",
    "The journey bridged regional startup resilience with Western European financial infrastructure, culminating in the establishment of the Paris hub.",
    "Under Shaheen's leadership, SafiPay grew from an ambitious prototype into a multi-million-dollar international neobanking ecosystem.",
    "The company's ethos emphasizes ethical capital, financial democratization, and zero tolerance for arbitrary geographic discrimination."
  ];

  const tableOfContents = [
    { id: "origins-vision", label: "1. The Genesis of a Borderless Vision" },
    { id: "overcoming-barriers", label: "2. Breaking Global Financial Apartheid" },
    { id: "paris-expansion", label: "3. Establishing the European Headquarters" },
    { id: "leadership-philosophy", label: "4. The Safi Leadership Philosophy" },
    { id: "the-road-ahead", label: "5. Roadmap: The Next Decade of FinTech" },
  ];

  const faqs = [
    {
      question: "What inspired Shaheen Safi to start SafiPay?",
      answer: "Witnessing firsthand the immense difficulties international remote workers and diaspora families faced in receiving payments and accessing legitimate bank cards inspired Shaheen to build an institution that treats all global citizens equally."
    },
    {
      question: "Where is SafiPay's primary executive leadership based?",
      answer: "SafiPay maintains strategic executive presence and operational hubs across Paris, France, collaborating with regulated financial clearing partners across the European Union."
    },
    {
      question: "How can partners or media reach Shaheen Safi directly?",
      answer: "Direct executive inquiries and official partnerships can be directed to shaheen@safipay.net or submitted through the SafiPay verified media portal."
    }
  ];

  const relatedPosts = [
    {
      title: "What is SafiPay? The Premier European Digital Banking Platform",
      slug: "what-is-safipay",
      category: "Platform Overview",
      readTime: "8 min",
      excerpt: "Deep overview of EU IBAN accounts, cross-border SEPA rails, and mobile banking."
    },
    {
      title: "EU-Level Institutional Security: How SafiPay Protects Your Assets",
      slug: "safipay-system-security",
      category: "Security & Compliance",
      readTime: "12 min",
      excerpt: "Technical analysis of AES-256-GCM encryption and zero-knowledge storage."
    },
    {
      title: "The Future of Digital Banking: Autonomous AI & Borderless Finance",
      slug: "future-of-banking",
      category: "FinTech Architecture",
      readTime: "6 min",
      excerpt: "How AI automation and decentralized protocols replace legacy banks."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] font-sans overflow-x-hidden pt-28">
      
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
            <Crown size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">Biographical Profile & Founder Story</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-[1.05]">
            SHAHEEN <span className="text-[#D4AF37]">SAFI</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed font-light mb-8">
            The extraordinary story of how visionary founder Shaheen Safi spearheaded the creation of a modern European neobank to empower unbanked innovators worldwide.
          </p>
        </div>
      </section>

      {/* Editorial Wrapper */}
      <BlogEditorialEnhancer
        locale="en"
        slug="about-shaheen-safi"
        title="The SafiPay Story: From Regional Vision to European Global Hub"
        description="The inspirational founding journey of SafiPay led by visionary architect Shaheen Safi. How perseverance, technological mastery, and global vision built an international neobank."
        category="Vision & Leadership"
        readTime="10 min"
        publishedDate="Feb 19, 2026"
        author={author}
        keyTakeaways={keyTakeaways}
        tableOfContents={tableOfContents}
        faqs={faqs}
        relatedPosts={relatedPosts}
      >
        <article className="prose prose-invert max-w-none space-y-16 text-gray-300 leading-relaxed font-light text-base md:text-lg">
          
          {/* Section 1 */}
          <section id="origins-vision" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              1. The Genesis of a Borderless Vision
            </h2>
            <p>
              Great financial revolutions are rarely born in comfortable boardrooms; they are forged in the crucible of real-world necessity. When <strong className="text-white font-bold">Shaheen Safi</strong> observed the severe financial isolation confronting talented freelancers, developers, and entrepreneurs across developing regions, he recognized a systemic moral crisis.
            </p>
            <p>
              Millions of exceptionally capable individuals were producing world-class software, design, and intellectual labor for international clients, yet they were blocked from receiving compensation due to antiquated legacy banking restrictions. Shaheen resolved to build an uncompromising bridge directly into the heart of European finance.
            </p>

            <div className="my-8 rounded-3xl overflow-hidden border border-white/10 relative h-72 md:h-96">
              <Image 
                src="/blog/about-shaheen-safi/hero.jpg" 
                alt="Shaheen Safi Vision" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">Figure 1.0: Shaheen Safi directing European platform expansion</span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="overcoming-barriers" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              2. Breaking Global Financial Apartheid
            </h2>
            <p>
              Traditional banking operates under implicit geographic redlining. A young developer in an emerging economy faces near-impossible hurdles to obtain an international Visa card or an IBAN capable of collecting Stripe payouts.
            </p>
            <p>
              Shaheen assembled an elite founding cohort—partnering with operational strategist <strong className="text-white font-bold">Sahel Salem</strong>, technical security architect <strong className="text-white font-bold">Mujtaba Rahmani</strong>, marketing executive <strong className="text-white font-bold">Shirin Gol Ahmadi</strong>, and FinTech strategist <strong className="text-white font-bold">Mobin Hassani</strong>. Together, they engineered a compliant, high-speed rails network.
            </p>
          </section>

          {/* Section 3 */}
          <section id="paris-expansion" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              3. Establishing the European Headquarters in Paris
            </h2>
            <p>
              Real institutional legitimacy requires strict adherence to European financial regulations. Under Shaheen’s guidance, SafiPay aligned its technical architecture with the European Banking Authority (EBA) guidelines, securing correspondent infrastructure and establishing operational hubs in France.
            </p>
          </section>

          {/* Section 4 */}
          <section id="leadership-philosophy" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              4. The Safi Leadership Philosophy
            </h2>
            <blockquote className="border-l-4 border-[#D4AF37] pl-6 my-8 italic text-white text-xl font-light">
              "We didn't build SafiPay to be another app on your smartphone. We built it to be the key that unlocks the global economy for anyone with talent and ambition, regardless of where they were born."
              <footer className="text-xs text-[#D4AF37] font-bold tracking-widest uppercase mt-3">— Shaheen Safi</footer>
            </blockquote>
          </section>

          {/* Section 5 */}
          <section id="the-road-ahead" className="space-y-6 scroll-mt-28">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tight border-l-4 border-[#D4AF37] pl-4">
              5. Roadmap: The Next Decade of FinTech
            </h2>
            <p>
              The long-term vision for SafiPay encompasses autonomous AI asset allocation, borderless corporate treasury tools, and pan-continental instant clearing. Under Shaheen’s ongoing stewardship, SafiPay continues its relentless mission to build the world's most inclusive digital financial institution.
            </p>
          </section>

        </article>
      </BlogEditorialEnhancer>
    </main>
  );
}