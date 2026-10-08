'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpRight, ShieldCheck, Search, Sparkles, BookOpen, UserCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogPostItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const blogPostsEn: BlogPostItem[] = [
  {
    id: 1,
    title: "EU-Level Institutional Security: How SafiPay Protects Your Global Assets",
    excerpt: "An exhaustive technical breakdown of SafiPay's end-to-end cryptographic infrastructure, zero-knowledge key isolation, and SEPA compliance protocols overseen by executive engineering leadership.",
    category: "Security & Compliance",
    author: "Mujtaba Rahmani",
    date: "Feb 27, 2026",
    readTime: "12 min",
    slug: "safipay-system-security",
    featured: true,
  },
  {
    id: 2,
    title: "Complete Guide to SafiPay Virtual Visa Cards: Borderless Global Payments",
    excerpt: "Everything you need to know about instant 60-second virtual card generation, 3D Secure 2.0 authorization, multi-currency support, and worldwide online acceptance.",
    category: "Digital Banking",
    author: "Shaheen Safi",
    date: "Feb 25, 2026",
    readTime: "15 min",
    slug: "visa-card-guide",
  },
  {
    id: 3,
    title: "Benefits of a Dedicated European IBAN for Global Citizens and Remote Workers",
    excerpt: "Why owning a direct European Union IBAN account bridges international banking gaps, enables frictionless SEPA Instant credit transfers, and eliminates exorbitant remittance fees.",
    category: "Digital Banking",
    author: "Sahel Salem",
    date: "Feb 22, 2026",
    readTime: "7 min",
    slug: "iban-account-benefits",
  },
  {
    id: 4,
    title: "The SafiPay Story: From Regional Challenges to Paris Global Hub",
    excerpt: "The founding journey of SafiPay: how visionary founder Shaheen Safi and the leadership team engineered an international neobank to empower unbanked and underserved global users.",
    category: "Vision & Leadership",
    author: "Shirin Gol Ahmadi",
    date: "Feb 19, 2026",
    readTime: "10 min",
    slug: "about-shaheen-safi",
  },
  {
    id: 5,
    title: "Global Travel eSIM Technology: High-Speed Internet in 200+ Countries",
    excerpt: "How SafiPay's integrated eSIM service keeps international travelers and business nomads continuously connected with instant digital profiles and zero physical SIM swapping.",
    category: "Travel & eSIM",
    author: "Mobin Hassani",
    date: "Feb 16, 2026",
    readTime: "5 min",
    slug: "esim-travel-technology",
  },
  {
    id: 6,
    title: "The Future of Digital Banking: Autonomous AI and Borderless Finance",
    excerpt: "Exploring next-generation financial architectures: how AI assistance, decentralized ledger backups, and instant cross-border settlement protocols will make legacy brick-and-mortar banks obsolete.",
    category: "FinTech Architecture",
    author: "Sahel Salem",
    date: "Feb 13, 2026",
    readTime: "6 min",
    slug: "future-of-banking",
  },
  {
    id: 7,
    title: "What is SafiPay? The Complete Financial Ecosystem at a Glance",
    excerpt: "A comprehensive executive overview of SafiPay's suite: European IBAN accounts, virtual and physical Visa cards, instant SEPA rails, and enterprise compliance mechanisms.",
    category: "Overview",
    author: "Shaheen Safi",
    date: "Feb 10, 2026",
    readTime: "8 min",
    slug: "what-is-safipay",
  },
  {
    id: 8,
    title: "How SafiPay Complies with SEPA Standards & European Payments Council (EPC) Framework",
    excerpt: "In-depth architectural analysis of how SafiPay enforces European Payments Council (EPC) rulebooks, ISO 20022 messaging, and sub-10-second SEPA Instant settlement.",
    category: "Security & Compliance",
    author: "Sahel Salem",
    date: "Feb 08, 2026",
    readTime: "8 min",
    slug: "sepa-regulatory-framework",
  },
  {
    id: 9,
    title: "UK FCA Regulatory Standards & Capital Safeguarding Across the SafiPay Ecosystem",
    excerpt: "How SafiPay enforces UK Financial Conduct Authority (FCA) electronic money regulations (EMRs), client fund segregation, and Consumer Duty principles.",
    category: "Security & Compliance",
    author: "Shirin Gol Ahmadi",
    date: "Feb 06, 2026",
    readTime: "9 min",
    slug: "fca-compliance-standards",
  },
  {
    id: 10,
    title: "SafiPay Global Ecosystem Governance: Harmonizing Cross-Border Financial Policies",
    excerpt: "How All Ecosystem Manager Shirin Gol Ahmadi harmonizes multi-jurisdiction regulatory compliance across the EU, UK, and emerging markets within SafiPay.",
    category: "Vision & Leadership",
    author: "Shirin Gol Ahmadi",
    date: "Feb 04, 2026",
    readTime: "8 min",
    slug: "global-ecosystem-governance",
  },
  {
    id: 11,
    title: "6AMLD & FATF Compliance Framework: Operational Monitoring Protocols at SafiPay",
    excerpt: "In-depth analysis of anti-money laundering (AML) operational surveillance, FATF 40 Recommendations, and automated PEP and sanctions screening at SafiPay.",
    category: "Security & Compliance",
    author: "Mujtaba Rahmani",
    date: "Feb 02, 2026",
    readTime: "10 min",
    slug: "aml-fatf-regulatory-compliance",
  },
  {
    id: 12,
    title: "European PSD2 & PSD3 Directive Compliance: Technical Standards & Open Banking Security",
    excerpt: "Technical exploration of Open Banking APIs, EBA RTS regulatory technical standards, Strong Customer Authentication (SCA), and PSD3 readiness at SafiPay.",
    category: "Digital Banking",
    author: "Mobin Hassani",
    date: "Jan 30, 2026",
    readTime: "8 min",
    slug: "psd3-open-banking-compliance",
  },
  {
    id: 13,
    title: "Strategic Vision for Global Institutional Compliance: Building Transparent Sovereign Finance",
    excerpt: "Founding manifesto by Shaheen Safi, Director & Founder of SafiPay, exploring borderless financial access, statutory alignment with SEPA, FCA, and EBA, and ending financial exclusion.",
    category: "Vision & Leadership",
    author: "Shaheen Safi",
    date: "Jan 28, 2026",
    readTime: "11 min",
    slug: "institutional-compliance-vision",
  }
];

const categories = ["All", "Digital Banking", "Security & Compliance", "Travel & eSIM", "Vision & Leadership", "Overview"];

export default function BlogPage() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPostsEn.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPostsEn.find(p => p.featured) || blogPostsEn[0];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans selection:bg-[#D4AF37] selection:text-black" dir="ltr">
      
      {/* Decorative Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Blog Hero Header */}
      <div className="container mx-auto px-6 mb-16 text-center relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold mb-6">
          <ShieldCheck size={14} />
          <span>SafiPay Financial Research & Insights</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tight uppercase">
          KNOWLEDGE <span className="text-[#D4AF37]">&</span> ANALYSIS
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          Authoritative intelligence on European digital banking, borderless payment infrastructure, institutional security protocols, and international FinTech trends.
        </p>

        {/* Real-time Search Box */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or author..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.06] transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-12">
        {/* Featured Article Banner (when no search active) */}
        {!searchQuery && selectedCategory === "All" && (
          <div className="relative group">
            <Link
              href={`/${lang}/blog/${featuredPost.slug}`}
              className="block rounded-[2.5rem] bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#D4AF37]/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] font-bold">
                      <Sparkles size={12} /> Featured Lead Analysis
                    </span>
                    <span className="text-gray-400">{featuredPost.category}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><UserCheck size={14} className="text-[#D4AF37]" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#D4AF37]" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#D4AF37]" /> {featuredPost.readTime} read</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-white font-bold group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all">
                      Read Analysis <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-72 lg:h-[450px] w-full overflow-hidden bg-[#151515]">
                  <Image
                    src={`/blog/${featuredPost.slug}/hero.jpg`}
                    alt={featuredPost.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Filtered Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-black italic tracking-tight text-white flex items-center gap-2">
              <BookOpen size={20} className="text-[#D4AF37]" />
              <span>Articles & Reports ({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/5">
              <p className="text-gray-400 text-lg">No articles found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/${lang}/blog/${post.slug}`} 
                  className="group relative flex flex-col bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  {/* Thumbnail Image Section */}
                  <div className="relative h-60 w-full bg-[#151515] overflow-hidden">
                    <Image 
                      src={`/blog/${post.slug}/hero.jpg`} 
                      alt={post.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#D4AF37] text-[11px] font-bold">
                      {post.category}
                    </div>

                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-7 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                      <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#D4AF37]" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#D4AF37]" /> {post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-black italic tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>

                    <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium">By <strong className="text-gray-300">{post.author}</strong></span>
                      <span className="text-[#D4AF37] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}