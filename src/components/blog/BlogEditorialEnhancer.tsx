'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, Calendar, CheckCircle2, Share2, 
  ChevronDown, ArrowRight, ArrowLeft,
  Sparkles, ShieldCheck, Mail, Bookmark,
  Copy, Check, MessageSquare
} from 'lucide-react';

export interface AuthorInfo {
  name: string;
  role: string;
  avatar: string;
  email: string;
  bio: string;
  profileUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedArticle {
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  category: string;
}

export interface TOCItem {
  id: string;
  label: string;
}

interface BlogEditorialEnhancerProps {
  locale: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: AuthorInfo;
  keyTakeaways: string[];
  tableOfContents: TOCItem[];
  faqs: FAQItem[];
  relatedPosts: RelatedArticle[];
  children?: React.ReactNode;
}

export default function BlogEditorialEnhancer({
  locale,
  slug,
  title,
  description,
  category,
  readTime,
  publishedDate,
  author,
  keyTakeaways,
  tableOfContents,
  faqs,
  relatedPosts,
  children
}: BlogEditorialEnhancerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>('');

  const isRtl = locale === 'fa' || locale === 'ps' || locale === 'ar';
  const currentUrl = `https://www.safipay.net/${locale}/blog/${slug}`;

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // Check current visible section for TOC
      const headings = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      for (const heading of headings) {
        if (heading) {
          const rect = heading.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 250) {
            setActiveSection(heading.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrls = {
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
  };

  // Structured Data (JSON-LD) for Google & AI Engines
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `https://www.safipay.net/blog/${slug}/hero.jpg`,
    datePublished: '2026-02-15T09:00:00+00:00',
    dateModified: '2026-03-01T12:00:00+00:00',
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      email: author.email,
      url: `https://www.safipay.net${author.profileUrl}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafiPay',
      url: 'https://www.safipay.net',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.safipay.net/safipay.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const t = {
    readingTime: isRtl ? 'زمان مطالعه' : 'Read time',
    keyTakeawaysTitle: isRtl ? 'نکات کلیدی و خلاصه اجرایی' : 'Executive Key Takeaways',
    keyTakeawaysSub: isRtl ? 'خلاصه فشرده جهت ارزیابی سریع و مرور هوشمند' : 'Key insights curated for decision makers & AI synthesis',
    tocTitle: isRtl ? 'فهرست مطالب' : 'Table of Contents',
    shareArticle: isRtl ? 'اشتراک‌گذاری این تحلیل' : 'Share this analysis',
    copyLink: isRtl ? 'کپی لینک مستقیم' : 'Copy direct link',
    copiedText: isRtl ? 'لینک کپی شد!' : 'Link Copied!',
    verifiedAuthor: isRtl ? 'نویسنده و تحلیل‌گر تاییدشده' : 'Verified Author & Analyst',
    viewProfile: isRtl ? 'مشاهده بیوگرافی و سوابق' : 'View Executive Profile',
    officialEmail: isRtl ? 'ایمیل رسمی' : 'Official Email',
    faqTitle: isRtl ? 'پرسش‌های متداول و پاسخ‌های تخصصی' : 'Frequently Asked Questions',
    faqSub: isRtl ? 'پاسخ به سوالات پرتکرار کاربران و کارشناسان مالی' : 'In-depth answers to common questions about this topic',
    relatedTitle: isRtl ? 'مقالات و تحلیل‌های مرتبط' : 'Related Financial Analysis',
    relatedSub: isRtl ? 'مطالب پیشنهادی مرتبط از دایره‌المعارف مالی سافی‌پی' : 'Recommended deep-dives from the SafiPay Knowledge Hub',
    breadcrumbsHome: isRtl ? 'خانه' : 'Home',
    breadcrumbsBlog: isRtl ? 'وبلاگ' : 'Blog',
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Top Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative z-20">
        {/* Editorial Sub-Header Bar (Breadcrumbs & Meta Bar) */}
        <div className="border-b border-white/5 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            {/* Breadcrumb Trail */}
            <nav className="flex items-center gap-2 text-gray-400">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t.breadcrumbsHome}</Link>
              <span>/</span>
              <Link href={`/${locale}/blog`} className="hover:text-white transition-colors">{t.breadcrumbsBlog}</Link>
              <span>/</span>
              <span className="text-[#D4AF37] font-medium truncate max-w-[200px] md:max-w-xs">{category}</span>
            </nav>

            {/* Reading Chips */}
            <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#D4AF37]" /> {publishedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#D4AF37]" /> {readTime} {t.readingTime}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <ShieldCheck size={12} /> Peer-Reviewed
              </span>
            </div>
          </div>
        </div>

        {/* Executive Key Takeaways Card */}
        {keyTakeaways && keyTakeaways.length > 0 && (
          <div className="container mx-auto px-6 pt-12 pb-6 max-w-5xl">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#121212] border border-[#D4AF37]/30 p-6 md:p-8 shadow-[0_0_40px_rgba(212,175,55,0.08)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black italic tracking-tight text-white flex items-center gap-2">
                    {t.keyTakeawaysTitle}
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-0.5">{t.keyTakeawaysSub}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:border-[#D4AF37]/30 transition-colors">
                    <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-relaxed">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Floating Social Share & Table of Contents Sidebar */}
        <div className="container mx-auto px-6 max-w-5xl py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of Contents Column (on desktop) */}
            {tableOfContents && tableOfContents.length > 0 && (
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-24 p-6 rounded-3xl bg-[#0c0c0c] border border-white/10 shadow-xl space-y-6">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                    <Bookmark size={18} className="text-[#D4AF37]" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white">{t.tocTitle}</h4>
                  </div>
                  
                  <nav className="space-y-2 text-sm">
                    {tableOfContents.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-2 px-3 rounded-xl transition-all duration-200 text-xs ${
                            isActive 
                              ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-bold border-l-2 border-[#D4AF37]' 
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </nav>

                  {/* Share Bar Inside TOC for desktop convenience */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                      {t.shareArticle}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={shareUrls.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-xs font-bold"
                        title="Share on X"
                      >
                        𝕏
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-colors text-xs font-bold"
                        title="Share on LinkedIn"
                      >
                        in
                      </a>
                      <a
                        href={shareUrls.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-colors text-xs font-bold"
                        title="Share on WhatsApp"
                      >
                        WA
                      </a>
                      <a
                        href={shareUrls.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500 hover:bg-sky-500/10 transition-colors text-xs font-bold"
                        title="Share on Telegram"
                      >
                        TG
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="flex-1 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                      >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        <span>{copied ? t.copiedText : t.copyLink}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content Column */}
            <div className={`${tableOfContents && tableOfContents.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} order-1 lg:order-2 space-y-12`}>
              {children}
            </div>
          </div>
        </div>

        {/* Verified Author Credential Box */}
        {author && (
          <div className="container mx-auto px-6 py-12 max-w-5xl">
            <div className="rounded-3xl bg-[#0b0b0b] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/5 blur-3xl pointer-events-none rounded-full" />
              
              <div className="relative w-28 h-28 shrink-0 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl bg-black">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold mb-1">
                      <ShieldCheck size={14} /> {t.verifiedAuthor}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">{author.name}</h4>
                    <p className="text-sm text-gray-400">{author.role}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
                    <a
                      href={`mailto:${author.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail size={14} className="text-[#D4AF37]" /> {author.email}
                    </a>
                    <Link
                      href={author.profileUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-[#D4AF37]/20"
                    >
                      {t.viewProfile} {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </Link>
                  </div>
                </div>

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {author.bio}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interactive FAQ Accordion with Schema */}
        {faqs && faqs.length > 0 && (
          <div className="container mx-auto px-6 py-16 max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold mb-4">
                <MessageSquare size={13} />
                <span>Knowledge Base Q&A</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight">{t.faqTitle}</h3>
              <p className="text-sm text-gray-400 font-light mt-2 max-w-2xl mx-auto">{t.faqSub}</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-bold text-base md:text-lg text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed pt-4 font-light">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Curated Related Financial Analysis */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="container mx-auto px-6 py-20 max-w-6xl border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight">{t.relatedTitle}</h3>
                <p className="text-sm text-gray-400 font-light mt-2">{t.relatedSub}</p>
              </div>
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-amber-400 uppercase tracking-widest transition-colors"
              >
                <span>{isRtl ? 'مشاهده همه مقالات' : 'Explore All Insights'}</span>
                {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, idx) => (
                <Link
                  key={idx}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group rounded-3xl bg-[#0d0d0d] border border-white/5 hover:border-[#D4AF37]/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span className="text-[#D4AF37] font-semibold">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-xl font-black text-white italic tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-white">
                    <span>{isRtl ? 'مطالعه کامل' : 'Read Article'}</span>
                    {isRtl ? <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
