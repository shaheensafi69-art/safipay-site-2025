'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Landmark,
  FileText,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Globe,
  Database,
  Eye,
  Key,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Building,
  Scale,
} from 'lucide-react';

interface BankingPrivacyProps {
  lang: string;
}

export default function BankingPrivacyContent({ lang }: BankingPrivacyProps) {
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const contentByLang: Record<string, any> = {
    fa: {
      badge: 'استانداردهای حفاظت از داده‌های بانکی اروپا • EU GDPR 2016/679',
      title: 'سیاست حفظ حریم خصوصی و امنیت داده‌های بانکی',
      subheading:
        'سند رسمی و تعهدنامه حقوقی صافی‌پی در رابطه با پردازش، حفاظت، محرمانگی و امنیت داده‌های مالی و هویتی مشتریان مطابق با مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (GDPR) و دستورالعمل‌های اداره بانکداری اروپا (EBA).',
      lastUpdated: 'آخرین به‌روزرسانی: ۲۰۲۶',
      jurisdiction: 'حوزه صلاحیت قضایی: اتحادیه اروپا و استانداردهای بین‌المللی بانکداری دیجیتال',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: 'تطابق ۱۰۰٪ با GDPR اروپا',
          desc: 'رعایت کلیه حقوق بنیادین حفاظت از داده‌ها بر اساس مقررات ۲۰۱۶/۶۷۹ پارلمان و شورای اروپا.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'رمزنگاری سطح بانکی HSM',
          desc: 'حفاظت از کلیدهای رمزنگاری، اطلاعات هویتی و تراکنش‌ها با استاندارد AES-256 و پروتکل‌های سخت‌افزاری.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'دستورالعمل EBA و PSD2',
          desc: 'همسویی کامل با ضوابط ریسک امنیتی و فناوری اطلاعات اداره بانکداری اروپا و احراز هویت قوی مشتری (SCA).',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'جداسازی داده‌ها و عدم فروش',
          desc: 'عدم فروش یا واگذاری داده‌های کاربران به هرگونه شخص ثالث تجاری یا بازاریابی در سراسر جهان.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. مبنای حقوقی، ساختار نظارتی و هویت کنترل‌کننده داده‌ها',
          content: `سیستم مالی دیجیتال صافی‌پی (SafiPay Global Financial Technologies) به عنوان کنترل‌کننده داده‌ها (Data Controller) متعهد به حفظ بالاترین سطوح حریم خصوصی و شفافیت مالی است. پردازش کلیه داده‌های هویتی و مالی شما مستقیماً تحت ماده ۶ (مشروعیت پردازش) و ماده ۹ مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (GDPR - Regulation EU 2016/679) و دستورالعمل‌های خدمات پرداخت اروپا (PSD2 / PSD3) و الزامات اداره بانکداری اروپا (EBA/GL/2019/04) صورت می‌پذیرد. هیچ داده‌ای بدون مبنای قانونی، نیاز قراردادی، یا الزامات صریح مبارزه با جرایم مالی جمع‌آوری یا پردازش نمی‌شود.`,
        },
        {
          id: 2,
          title: '۲. داده‌های هویتی، مالی و بیومتریک جمع‌آوری‌شده',
          content: `برای افتتاح حساب‌های بین‌المللی IBAN، صدور کارت‌های بانکی، و ارتقای امنیت، انواع داده‌های زیر در چارچوب قانون جمع‌آوری می‌گردد:
• داده‌های هویتی و ثبتی: نام و نام خانوادگی، تاریخ تولد، تابعیت، شماره شناسنامه یا گذرنامه، تصویر اسناد اقامتی معتبر.
• داده‌های تایید بیومتریک و تصویری: تطبیق زنده چهره (Liveness Detection) صرفاً جهت احراز هویت اولیه و جلوگیری از جعل هویت.
• داده‌های مالی و تراکنش‌ها: شماره حساب‌های بانکی اختصاصی، تاریخچه واریزها، برداشت‌ها، تبادلات ارزی، و جزییات طرفین تراکنش در شبکه SEPA.
• داده‌های فنی و امنیتی: آدرس IP، مشخصات سخت‌افزاری دستگاه، لاگ‌های احراز هویت دو مرحله‌ای (SCA)، و الگوهای ضد کلاهبرداری سایبری.`,
        },
        {
          id: 3,
          title: '۳. اهداف پردازش و مبانی مشروعیت بانکی',
          content: `داده‌های جمع‌آوری‌شده صرفاً در راستای اهداف زیر مورد استفاده قرار می‌گیرند:
• ایجاد، فعال‌سازی و نگهداری حساب‌های بانکی دیجیتال و زیرساخت تسویه بین‌المللی.
• اجرای دقیق الزامات قانونی ضد پولشویی (AML) و تامین مالی تروریسم مطابق با دستورالعمل‌های 5AMLD و 6AMLD اتحادیه اروپا.
• اعمال احراز هویت قوی مشتری (Strong Customer Authentication - SCA) برای کلیه تراکنش‌ها بر اساس استانداردهای RTS اروپا.
• پایش و پیشگیری از رفتارهای مشکوک، فیشینگ، سرقت هویت و کلاهبرداری‌های سایبری بین‌المللی.
• ارتباطات رسمی و ارائه پشتیبانی حقوقی و عملیاتی به کاربران.`,
        },
        {
          id: 4,
          title: '۴. انتقال فرامرزی داده‌ها و اشتراک‌گذاری با شرکای بانکی دارای مجوز',
          content: `صافی‌پی داده‌های مشتریان را به هیچ عنوان به اشخاص ثالث، شرکت‌های تبلیغاتی یا کارگزاران داده نمی‌فروشد و اجاره نمی‌دهد. اشتراک داده‌ها صرفاً با نهادهای زیر و با رعایت کامل بند پنجم GDPR (انتقال به کشورهای ثالث) انجام می‌پذیرد:
• موسسات اعتباری و بانک‌های همکار دارای مجوز از بانک مرکزی اروپا (ECB) و نهادهای نظارتی ملی اروپا جهت تسویه حساب‌های SEPA.
• شرکت‌های ارائه‌دهنده سوئیچ کارت‌های بین‌المللی (Visa / Mastercard) جهت پردازش امن پرداخت‌ها تحت استاندارد PCI-DSS Level 1.
• مراجع قضایی و نظارتی رسمی اروپا در صورت وجود دستور رسمی و الزام الزام‌آور قانونی تحت قوانین ضد پولشویی.`,
        },
        {
          id: 5,
          title: '۵. پروتکل‌های پیشرفته امنیت، رمزنگاری و پایداری اطلاعات',
          content: `زیرساخت فنی صافی‌پی با به‌کارگیری سخت‌گیرانه‌ترین تدابیر امنیتی محافظت می‌شود:
• رمزنگاری داده‌ها در حال انتقال (In Transit) با پروتکل TLS 1.3 و بالاترین استانداردهای رمزنگاری انتها به انتها.
• رمزنگاری داده‌ها در حالت سکون (At Rest) با الگوریتم AES-256-GCM و ماژول‌های امنیت سخت‌افزاری (HSM) منطبق بر استاندارد FIPS 140-2 Level 3.
• اعمال خط‌مشی دسترسی حداقل (Zero Trust Architecture) و ثبت غیرقابل تغییر تمامی دسترسی‌های سیستمی جهت ممیزی‌های دوره‌ای بانکی.`,
        },
        {
          id: 6,
          title: '۶. دوره نگهداری اطلاعات و الزامات قانونی بایگانی بانکی',
          content: `مطابق با قوانین بانکی اتحادیه اروپا و استانداردهای گروه ویژه اقدام مالی (FATF)، سوابق تراکنش‌ها و پرونده‌های احراز هویت مشتریان باید به مدت ۵ تا ۱۰ سال پس از بسته شدن حساب به منظور بررسی‌های قانونی مالیاتی و ضد پولشویی نگهداری شوند. پس از انقضای این مهلت قانونی، کلیه داده‌ها با استفاده از پروتکل‌های پاک‌سازی غیرقابل بازگشت دیجیتال حذف یا کاملاً ناشناس‌سازی (Anonymized) خواهند شد.`,
        },
        {
          id: 7,
          title: '۷. حقوق اساسی شما به عنوان صاحب داده تحت قانون GDPR',
          content: `بر اساس فصل سوم مقررات GDPR، شما از حقوق قانونی زیر برخوردار هستید:
• حق دسترسی (Article 15): درخواست دریافت یک نسخه از کلیه داده‌های شخصی ثبت‌شده در سیستم.
• حق اصلاح (Article 16): درخواست اصلاح یا به‌روزرسانی اطلاعات ناقص یا نادرست.
• حق فراموشی و حذف (Article 17): درخواست حذف داده‌ها (مشروط بر عدم تعارض با دوره نگهداری قانونی الزام‌آور بانکی).
• حق محدودسازی پردازش (Article 18) و حق انتقال داده‌ها (Article 20): دریافت داده‌ها در قالب استاندارد دیجیتال جهت انتقال به موسسات دیگر.
• حق شکایت به مراجع نظارتی: در صورت مشاهده هرگونه تخلف، شما حق دارید به نهاد ناظر حفاظت از داده‌ها در اتحادیه اروپا شکایت ثبت نمایید.`,
        },
        {
          id: 8,
          title: '۸. ارتباط با مسئول حفاظت از داده‌ها (DPO) و پشتیبانی رسمی',
          content: `برای ارسال هرگونه سوال حقوقی، اعمال حقوق خود تحت قانون GDPR یا گزارش دغدغه‌های امنیتی، می‌توانید مستقیماً با مدیریت عالی و واحد نظارت صافی‌پی در ارتباط باشید:
• پیام‌رسان مستقیم واتساپ مدیریت: 447476620282+
• ایمیل رسمی بخش حریم خصوصی: compliance@safipay.net
• آدرس ثبتی و هماهنگی اجرایی: مدیریت شاهین صافی - شبکه بین‌المللی بانکداری دیجیتال صافی‌پی.`,
        },
      ],
      backBtn: 'بازگشت به صفحه اصلی',
      termsBtn: 'مشاهده شرایط و قوانین خدمات اروپا',
    },
    ps: {
      badge: 'د اروپا د بانکي معلوماتو د ساتنې معیارونه • EU GDPR 2016/679',
      title: 'د بانکي محرمیت او د معلوماتو د امنیت تګلاره',
      subheading:
        'د اروپایي ټولنې د عمومي معلوماتو ساتنې مقرراتو (GDPR) او د اروپا د بانکدارۍ ادارې (EBA) لارښوونو سره سم د پیرودونکو د مالي او هویتي معلوماتو د خوندیتوب په اړه د صافي پي رسمي حقوقي ژمنه.',
      lastUpdated: 'وروستی بدلون: ۲۰۲۶',
      jurisdiction: 'قانوني ساحه: د اروپا اتحادیه او د نړیوال ډیجیټلي بانکدارۍ لوړ معیارونه',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '۱۰۰٪ د GDPR سره برابر',
          desc: 'د اروپا د پارلمان او شورا د ۲۰۱۶/۶۷۹ قانون پر بنسټ د کاروونکو ټولو حقونو ته پوره درناوی.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'د لوړې کچې HSM کوډبندي',
          desc: 'د ټولو مالي او هویتي معلوماتو ساتنه د AES-256 پرمختللي هارډویري کریپټوګرافي له لارې.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'د EBA او PSD2 بشپړ پلي کول',
          desc: 'د اروپا د بانکدارۍ ادارې د امنیتي معیارونو او د تادیاتو پیاوړي تصدیق (SCA) پوره مراعات.',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'د معلوماتو بشپړ خوندیتوب',
          desc: 'د سوداګریزو او تبلیغاتي موخو لپاره هیڅ شخصي معلومات نه پلورل کیږي او نه بل چا ته ورکول کیږي.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. حقوقي بنسټ او د معلوماتو د کنټرولونکي هویت',
          content: `د صافي پي نړیوال مالي سیستم (SafiPay Global Financial Technologies) د معلوماتو د قانوني کنټرولونکي په توګه د اروپا د ټولو بانکي قوانینو پیروي کوي. ستاسو د مالي او شخصي معلوماتو پروسس په بشپړ ډول د GDPR د ۶ او ۹ مادو او د اروپا د تادیاتو خدماتو د لارښودونو (PSD2/PSD3) سره سم ترسره کیږي. هیڅ معلومات له قانوني اړتیا او بانکي قرارداد پرته نه پروسس کیږي.`,
        },
        {
          id: 2,
          title: '۲. راټول شوي هویتي، مالي او بیومټریک معلومات',
          content: `د نړیوالو IBAN حسابونو پرانیستلو او د کارتونو ویشلو لپاره لاندې معلومات راټولیږي:
• هویتي اسناد: نوم، د زیږیدو نیټه، تابعیت، د تذکرې یا پاسپورت شمیره او معتبر استوګنیز اسناد.
• د ژوندۍ بڼې بیومټریک تایید: د مخ ژوندی انځور (Liveness Detection) یوازې د جعلي پیژندګلوۍ د مخنیوي لپاره.
• مالي ریکارډونه: د ځانګړو بانکي حسابونو شمیرې، د SEPA شبکې له لارې د راکړې ورکړې تاریخچه او تبادلې.
• امنیتي معلومات: د وسیلې تخنیکي ځانګړتیاوې، IP ادرس، او د دوه پړاویزه امنیتي ننوتلو ریکارډونه.`,
        },
        {
          id: 3,
          title: '۳. د معلوماتو د پروسس موخې او بانکي مکلفیتونه',
          content: `راټول شوي معلومات یوازې په لاندې برخو کې کارول کیږي:
• د ډیجیټلي حسابونو جوړول او د SEPA له لارې د پیسو چټک لیږد.
• د اروپا د 5AMLD او 6AMLD لارښوونو سره سم د پیسو د سپینولو او جرمونو په وړاندې مبارزه.
• د هرې معاملې لپاره د تادیاتو د پیاوړي تصدیق (SCA) تطبیق.
• د هر ډول سایبري غلا، فشنګ او غیرقانوني لاسوهنو مخنیوی.`,
        },
        {
          id: 4,
          title: '۴. له لایسنس لرونکو اروپایي بانکونو سره همکاري',
          content: `صافي پي هیڅکله ستاسو معلومات نه پلوري. معلومات یوازې په قانوني چوکاټ کې له لاندې باصلاحیته ادارو سره شریکیږي:
• د اروپا د مرکزي بانک (ECB) تر څار لاندې بااعتباره بانکونه چې د SEPA تادیات پروسس کوي.
• د ویزا او ماسټرکارډ نړیوالې شبکې د PCI-DSS لومړۍ درجې امنیتي معیارونو لاندې.
• د اروپا باصلاحیته قانوني او مالي ادارې کله چې د قانون له مخې الزامیت شتون ولري.`,
        },
        {
          id: 5,
          title: '۵. د کوډبندۍ او خوندیتوب پرمختللي معیارونه',
          content: `ټول معلومات د انتقال پر مهال د TLS 1.3 له لارې او د ذخیره کولو پر مهال د AES-256 کوډبندۍ او پرمختللو HSM هارډویري امنیتي وسایلو په واسطه په بشپړ ډول خوندي ساتل کیږي.`,
        },
        {
          id: 6,
          title: '۶. د اسنادو د قانوني ساتنې موده',
          content: `د اروپا د مالي قوانینو او FATF اصولو سره سم، د حساب له تړل کیدو وروسته بانکي او د هویت تصدیق اسناد باید د ۵ تر ۱۰ کلونو پورې وساتل شي، چې له هغې وروسته په اتوماتیک ډول په دایمي بڼه له منځه وړل کیږي.`,
        },
        {
          id: 7,
          title: '۷. د GDPR قانون له مخې ستاسو بنسټیز حقونه',
          content: `تاسو د خپلو ثبت شویو معلوماتو د لیدلو، تصحیح کولو، د محدودولو او د کاپي اخیستلو بشپړ قانوني حق لرئ. که هر ډول شکایت شتون ولري، تاسو کولی شئ د اروپا د معلوماتو د ساتنې ادارې ته مستقیم شکایت وړاندې کړئ.`,
        },
        {
          id: 8,
          title: '۸. رسمي اړیکه او د څارنې اداره',
          content: `د خپلو پوښتنو او قانوني غوښتنو لپاره کولی شئ د صافي پي له مدیریت سره په واټس‌اپ اړیکه ونیسئ:
• رسمي واټس‌اپ: 447476620282+
• برېښنالیک: compliance@safipay.net
• رهبري: شاهین صافی - د صافي پي نړیواله ډیجیټلي بانکداري.`,
        },
      ],
      backBtn: 'اصلي پاڼې ته ستنیدل',
      termsBtn: 'د اروپا د خدماتو شرایط او مقررات ولولئ',
    },
    en: {
      badge: 'EUROPEAN BANKING DATA PROTECTION STANDARDS • REGULATION (EU) 2016/679',
      title: 'European Banking Privacy Policy & Data Charter',
      subheading:
        'SafiPay official legal charter governing the processing, protection, and cryptographic custody of client financial and identity data under the General Data Protection Regulation (EU GDPR) and European Banking Authority (EBA) ICT guidelines.',
      lastUpdated: 'Last Formal Revision: 2026',
      jurisdiction: 'Governing Jurisdiction: European Union & International Digital Financial Directives',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '100% GDPR Compliant',
          desc: 'Strict adherence to Articles 6 & 9 of Regulation (EU) 2016/679 ensuring maximum data protection.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'Bank-Grade HSM Encryption',
          desc: 'Hardware Security Modules (HSM) and AES-256-GCM cipher suites guarding all master keys and transactions.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'EBA & PSD2 / PSD3 Architecture',
          desc: 'Full alignment with European Banking Authority ICT security protocols and Strong Customer Authentication (SCA).',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'Zero Third-Party Data Monetization',
          desc: 'Your identity and transactional data are never sold, rented, or brokered to commercial marketing entities.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Regulatory Mandate, Legal Grounds & Data Controller Identification',
          content: `SafiPay Global Financial Technologies ("SafiPay", "we", "us") operates as an authorized Data Controller under Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation - GDPR). All processing of client identity and transactional data is executed strictly pursuant to Article 6(1)(b) (contractual necessity), Article 6(1)(c) (statutory compliance with European banking and anti-financial crime legislation), and Directive (EU) 2015/2366 on Payment Services in the Internal Market (PSD2/PSD3).`,
        },
        {
          id: 2,
          title: '2. Categories of Identity, Financial & Telemetry Data Collected',
          content: `To open dedicated European multi-currency IBAN accounts, issue payment instruments, and ensure complete transactional integrity, we collect:
• Identity Verification & KYC Data: Full legal name, date of birth, nationality, national identity or passport numbers, certified proof of address, and residential documentation.
• Biometric Liveness & Anti-Spoofing Records: Facial geometry mapping processed in real-time solely to establish genuine physical liveness and prevent fraudulent impersonation.
• Financial & Ledger Transactions: Dedicated IBAN numbers, SEPA Credit Transfer records, payment recipient metadata, inbound and outbound volume, and timestamp logs.
• Security & Telemetry Data: IP address, device fingerprints, hardware browser characteristics, operating system versions, and multi-factor authentication (SCA) token logs.`,
        },
        {
          id: 3,
          title: '3. Lawful Purposes of Data Processing',
          content: `Data processing activities are conducted strictly for legitimate banking and statutory objectives:
• Onboarding, creation, and secure ongoing management of client multi-currency digital accounts.
• Regulatory anti-money laundering (AML) and counter-terrorist financing (CFT) compliance in accordance with EU Directives 2015/849 and 2018/843 (AMLD5 / AMLD6).
• Execution of mandatory Strong Customer Authentication (SCA) under European Regulatory Technical Standards (RTS).
• Real-time automated transaction monitoring and algorithmic fraud prevention.
• Providing customer care, incident notifications, and legally required regulatory disclosures.`,
        },
        {
          id: 4,
          title: '4. Cross-Border Transfers & Integration with Licensed European Credit Institutions',
          content: `SafiPay strictly prohibits the commercial sale or unauthorized rental of client information. Data is shared exclusively with authorized entities under strict Standard Contractual Clauses (SCCs) and Chapter V GDPR safeguards:
• Licensed European partner banks and clearing institutions operating under European Central Bank (ECB) supervisory mechanisms for SEPA and SEPA Instant execution.
• International card settlement networks (Mastercard and Visa) adhering to PCI-DSS Level 1 specifications.
• Competent European judicial, anti-financial crime, or supervisory bodies where production is mandated by binding statutory process.`,
        },
        {
          id: 5,
          title: '5. Cryptographic Custody, HSM Architecture & Technical Safeguards',
          content: `All client data is fortified by institutional-grade cybersecurity architectures:
• Encryption In Transit: Transport Layer Security (TLS 1.3) with perfect forward secrecy across all public and internal communications.
• Encryption At Rest: AES-256-GCM encryption with cryptographic keys managed within FIPS 140-2 Level 3 certified Hardware Security Modules (HSMs).
• Zero-Trust Network Architecture: Granular role-based access control (RBAC), multi-tenant logical segregation, continuous vulnerability scanning, and immutable audit logs.`,
        },
        {
          id: 6,
          title: '6. Statutory Retention Periods & Data Disposal',
          content: `In strict compliance with European Union financial directives and international FATF standards, customer identification records and transactional ledgers must be retained for a mandatory statutory retention period of 5 to 10 years following account closure. Upon the expiration of mandatory retention intervals, all records are permanently erased using DoD-compliant cryptographic shredding protocols or permanently anonymized for statistical analysis.`,
        },
        {
          id: 7,
          title: '7. Your Inalienable Rights as a Data Subject Under GDPR',
          content: `As a data subject under European Union law, you hold comprehensive rights enforceable at any time:
• Right of Access (Art. 15): Request complete copies of your personal and transaction dossiers.
• Right to Rectification (Art. 16): Mandate the correction of inaccurate or outdated credentials.
• Right to Erasure / "Right to Be Forgotten" (Art. 17): Request deletion of records, subject to overriding statutory banking retention duties.
• Right to Restriction (Art. 18) & Right to Data Portability (Art. 20): Obtain machine-readable export dossiers of your financial records.
• Right to Lodge a Complaint: You retain the unimpeded right to file formal complaints with European Data Protection Authorities (DPAs).`,
        },
        {
          id: 8,
          title: '8. Data Protection Officer (DPO) & Direct Compliance Inquiries',
          content: `For formal legal requests, rights assertions under GDPR, or executive regulatory inquiries:
• Executive WhatsApp Direct Line: +447476620282
• Official Compliance Email: compliance@safipay.net
• Executive Supervision: Shaheen Safi, Director & Founder — SafiPay Global Digital Banking System.`,
        },
      ],
      backBtn: 'Return to Homepage',
      termsBtn: 'Read European Terms of Service',
    },
    de: {
      badge: 'EUROPÄISCHE BANKEN-DATENSCHUTZSTANDARDS • EU-DSGVO 2016/679',
      title: 'Datenschutzrichtlinie und Bankensicherheits-Charta',
      subheading:
        'Offizielle Rechtsvereinbarung von SafiPay zur Erhebung, Verarbeitung und kryptografischen Verwahrung von Kunden- und Finanzdaten gemäß der europäischen Datenschutz-Grundverordnung (DSGVO) und den EBA-Richtlinien.',
      lastUpdated: 'Letzte Aktualisierung: 2026',
      jurisdiction: 'Gerichtsstand: Europäische Union und internationale Bankenstandards',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '100% DSGVO-konform',
          desc: 'Vollständige Erfüllung aller Vorgaben der Verordnung (EU) 2016/679 des Europäischen Parlaments.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'HSM-Verschlüsselung',
          desc: 'Verwaltung aller kryptografischen Schlüssel und Transaktionen über zertifizierte Hardware Security Modules.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'EBA- & PSD2-Richtlinien',
          desc: 'Strikte Einhaltung der Sicherheitsrichtlinien der Europäischen Bankenaufsichtsbehörde und SCA.',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'Kein Datenverkauf',
          desc: 'Ihre personenbezogenen Daten werden zu keinem Zeitpunkt an Marketing- oder Werbeunternehmen weitergegeben.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Gesetzlicher Rahmen und Verantwortlicher',
          content: `SafiPay Global Financial Technologies agiert als Verantwortlicher gemäß Art. 4 Nr. 7 EU-DSGVO. Die Verarbeitung Ihrer Daten erfolgt strikt auf Basis von Art. 6 Abs. 1 lit. b (Vertragserfüllung) und lit. c (gesetzliche Verpflichtung zur Geldwäschebekämpfung nach 5AMLD/6AMLD) sowie der Zahlungsdiensterichtlinie (PSD2/PSD3).`,
        },
        {
          id: 2,
          title: '2. Erhobene Datenkategorien',
          content: `Für die Vergabe von europäischen IBAN-Konten erheben wir Identifikationsdaten (Name, Geburtsdatum, Passdaten, Wohnsitznachweis), biometrische Prüfdaten (Liveness-Erkennung zur Missbrauchsverhinderung), Transaktionsdaten (SEPA-Überweisungen, Beträge, Zeitstempel) und technische Sicherheitsdaten (IP-Adressen, Gerätekennungen).`,
        },
        {
          id: 3,
          title: '3. Zwecke der Datenverarbeitung',
          content: `Die Daten werden ausschließlich zur Bereitstellung internationaler Zahlungsdienste, zur Betrugsprävention, zur gesetzlich vorgeschriebenen Identitätsprüfung (KYC) und zur Einhaltung europäischer Banken- und Aufsichtsgesetze verarbeitet.`,
        },
        {
          id: 4,
          title: '4. Datenweitergabe und europäische Partnerbanken',
          content: `Eine Datenweitergabe erfolgt ausschließlich an lizenzierte europäische Kreditinstitute im Rahmen der SEPA-Abwicklung, internationale Kartensysteme (Visa/Mastercard) unter PCI-DSS Level 1 und im gesetzlich vorgeschriebenen Rahmen an Aufsichtsbehörden.`,
        },
        {
          id: 5,
          title: '5. Sicherheits- und Verschlüsselungsstandards',
          content: `Alle Daten werden bei der Übertragung mittels TLS 1.3 und im Ruhezustand mittels AES-256-GCM sowie Hardware Security Modules (FIPS 140-2 Level 3) nach dem Zero-Trust-Prinzip geschützt.`,
        },
        {
          id: 6,
          title: '6. Gesetzliche Aufbewahrungsfristen',
          content: `Gemäß den europäischen Bankgesetzen und Geldwäscherichtlinien müssen Transaktions- und Identitätsdaten für 5 bis 10 Jahre nach Kontoschließung revisionssicher aufbewahrt werden, bevor sie endgültig gelöscht werden.`,
        },
        {
          id: 7,
          title: '7. Ihre Rechte nach DSGVO',
          content: `Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17, vorbehaltlich gesetzlicher Bankaufbewahrungspflichten), Einschränkung der Verarbeitung (Art. 18) sowie Datenübertragbarkeit (Art. 20).`,
        },
        {
          id: 8,
          title: '8. Kontakt zum Datenschutzbeauftragten',
          content: `Offizieller WhatsApp-Kontakt der Geschäftsleitung: +447476620282 | E-Mail: compliance@safipay.net | Führung: Shaheen Safi (Gründer & CEO).`,
        },
      ],
      backBtn: 'Zur Startseite',
      termsBtn: 'Nutzungsbedingungen anzeigen',
    },
    fr: {
      badge: 'NORMES EUROPÉENNES DE PROTECTION DES DONNÉES • RGPD (UE) 2016/679',
      title: 'Politique de Confidentialité et Sécurité Bancaire',
      subheading:
        'Charte juridique officielle de SafiPay régissant le traitement, la protection et la garde cryptographique des données financières et d’identification des clients conformément au RGPD et aux directives de l’Autorité Bancaire Européenne (ABE/EBA).',
      lastUpdated: 'Dernière mise à jour : 2026',
      jurisdiction: 'Juridiction : Union européenne et normes bancaires internationales',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '100% Conforme au RGPD',
          desc: 'Respect intégral des articles 6 et 9 du Règlement (UE) 2016/679 du Parlement européen.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'Cryptographie Bancaire HSM',
          desc: 'Modules matériels HSM et chiffrement AES-256-GCM protégeant l’ensemble des transactions.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Conformité ABE & DSP2 / DSP3',
          desc: 'Conformité stricte aux exigences de sécurité et d’authentification forte du client (SCA).',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'Zéro Commercialisation',
          desc: 'Vos données financières et personnelles ne sont jamais vendues ni cédées à des tiers publicitaires.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Cadre Légal et Responsable du Traitement',
          content: `SafiPay Global Financial Technologies agit en tant que responsable du traitement conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679). Le traitement des données est fondé sur l'exécution contractuelle (Article 6.1.b), le respect des obligations légales bancaires et de lutte contre le blanchiment (5AMLD/6AMLD) et la Directive sur les Services de Paiement (DSP2/DSP3).`,
        },
        {
          id: 2,
          title: '2. Catégories de Données Collectées',
          content: `Pour l'attribution de comptes IBAN européens et de cartes bancaires, nous recueillons les données d'identité (nom, prénom, date de naissance, passeport, justificatif de domicile), les données biométriques de vérification en direct, les détails des transactions SEPA et les données télémétriques de sécurité (adresse IP, empreinte d'appareil).`,
        },
        {
          id: 3,
          title: '3. Finalités du Traitement',
          content: `Les données sont traitées pour la gestion des comptes, le traitement des virements SEPA et internationaux, l'application de l'authentification forte (SCA), la prévention de la fraude et le respect des obligations réglementaires financières de l'Union européenne.`,
        },
        {
          id: 4,
          title: '4. Partage et Partenaires Bancaires Européens',
          content: `Les données ne sont partagées qu'avec des établissements de crédit européens agréés supervisés par la Banque Centrale Européenne (BCE), les réseaux de paiement internationaux (Visa/Mastercard) conformes à la norme PCI-DSS Niveau 1, et les autorités de contrôle légalement compétentes.`,
        },
        {
          id: 5,
          title: '5. Sécurité Cryptographique et Infrastructure',
          content: `Toutes les données sont protégées par le chiffrement TLS 1.3 en transit, le chiffrement AES-256 au repos, des modules de sécurité matérielle (HSM) FIPS 140-2 Niveau 3 et une architecture réseau Zero-Trust.`,
        },
        {
          id: 6,
          title: '6. Durée de Conservation Légale',
          content: `Conformément à la législation financière européenne et aux normes du GAFI, les données d'identification et les relevés de transactions sont conservés pendant une période légale obligatoire de 5 à 10 ans après la clôture du compte.`,
        },
        {
          id: 7,
          title: '7. Vos Droits sous le RGPD',
          content: `Vous disposez d'un droit d'accès (Art. 15), de rectification (Art. 16), d'effacement (Art. 17, sous réserve des obligations bancaires légales), de limitation (Art. 18) et de portabilité des données (Art. 20).`,
        },
        {
          id: 8,
          title: '8. Contact du Délégué à la Protection des Données',
          content: `WhatsApp officiel de la direction : +447476620282 | Email : compliance@safipay.net | Direction générale : Shaheen Safi, Fondateur & PDG.`,
        },
      ],
      backBtn: 'Retour à l’accueil',
      termsBtn: 'Voir les conditions d’utilisation',
    },
    ar: {
      badge: 'معايير حماية البيانات المصرفية الأوروبية • لائحة الاتحاد الأوروبي GDPR 2016/679',
      title: 'سياسة الخصوصية وحماية البيانات المصرفية',
      subheading:
        'الميثاق القانوني الرسمي لمنصة صافي باي لحماية ومعالجة وتشفير البيانات المالية وتفاصيل الهوية لعملائنا وفقاً للائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR) وإرشادات الهيئة المصرفية الأوروبية (EBA).',
      lastUpdated: 'آخر تحديث رسمي: ۲۰۲۶',
      jurisdiction: 'الاختصاص القضائي: الاتحاد الأوروبي والمعايير المصرفية الرقمية الدولية',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: 'امتثال كامل للائحة GDPR',
          desc: 'التزام تام بالمادتين ٦ و٩ من اللائحة الأوروبية ٢٠١٦/٦٧٩ لحماية حقوق البيانات الشخصية.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'تشفير مصرفي متقدم HSM',
          desc: 'استخدام أجهزة أمان عتادية HSM وتشفير AES-256 لحماية المعاملات والمفاتيح الرئيسية.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'معايير EBA وPSD2',
          desc: 'توافق كامل مع توجيهات الدفع والمصادقة القوية للعملاء (SCA) وضوابط إدارة المخاطر الأوروبية.',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'حظر بيع البيانات تماماً',
          desc: 'نضمن عدم بيع أو تأجير أي بيانات شخصية أو مالية لأي جهات إعلانية أو تجارية.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. الأساس القانوني وهوية المتحكم في البيانات',
          content: `تعمل منصة صافي باي للتقنيات المالية (SafiPay Global Financial Technologies) كمتحكم معتمد في البيانات وفقاً للائحة الاتحاد الأوروبي (GDPR 2016/679). تتم معالجة بياناتكم استناداً إلى المادة 6(1)(b) لتنفيذ العقود المصرفية والمادة 6(1)(c) للامتثال لقوانين مكافحة غسل الأموال الأوروبية (5AMLD/6AMLD) وتوجيهات الدفع (PSD2/PSD3).`,
        },
        {
          id: 2,
          title: '۲. فئات البيانات المصرفية والشخصية المجمعة',
          content: `لتخصيص أرقام الحسابات الأوروبية الدولية (IBAN) وإصدار البطاقات، نقوم بجمع: بيانات الهوية الرسمية (الاسم، تاريخ الميلاد، وثائق السفر والإقامة)، التحقق الحيوي المباشر (Liveness Detection) لمنع انتحال الشخصية، سجلات المعاملات والتحويلات عبر شبكة SEPA، والبيانات التقنية والأمنية كعنوان IP وبصمة الجهاز.`,
        },
        {
          id: 3,
          title: '۳. أغراض المعالجة المصرفية المشروعة',
          content: `تُعالج البيانات للأغراض التالية فقط: فتح وإدارة الحسابات المصرفية، تنفيذ التحويلات الأوروبية الفورية SEPA، تطبيق المصادقة القوية للعملاء (SCA)، رصد ومنع الاحتيال الإلكتروني وغسل الأموال، وتقديم الدعم الفني والقانوني المباشر.`,
        },
        {
          id: 4,
          title: '۴. الشركاء المصرفيون المرخصون في أوروبا',
          content: `لا يتم تبادل البيانات إلا مع بنوك أوروبية مرخصة تخضع لإشراف البنك المركزي الأوروبي (ECB) لتسوية المعاملات، وشبكات البطاقات العالمية (Visa/Mastercard) وفق معايير PCI-DSS المستوى الأول، والجهات القضائية الأوروبية المختصة عند وجود إلزام قانوني رسمي.`,
        },
        {
          id: 5,
          title: '۵. بروتوكولات الأمان والتشفير العتادي',
          content: `تخضع كافة البيانات للتشفير أثناء النقل عبر بروتوكول TLS 1.3 وأثناء التخزين بتشفير AES-256-GCM مع أجهزة أمان عتادية (HSM) حاصلة على شهادة FIPS 140-2 المستوى الثالث وسياسة الوصول الصفري (Zero-Trust).`,
        },
        {
          id: 6,
          title: '۶. فترات الاحتفاظ الإلزامية بالسجلات',
          content: `وفقاً لقوانين المصارف في الاتحاد الأوروبي ومعايير FATF الدولية، يتم الاحتفاظ بسجلات المعاملات والهوية لمدة تتراوح بين ۵ إلى ۱۰ سنوات بعد إغلاق الحساب، وتُحذف نهائياً وتُطمس بعدها بأحدث الطرق التقنية.`,
        },
        {
          id: 7,
          title: '۷. حقوقكم القانونية بموجب لائحة GDPR',
          content: `يحق لكم قانوناً طلب الوصول إلى بياناتكم (المادة ۱۵)، تصحيحها (المادة ۱۶)، حذفها (المادة ۱۷، بما لا يتعارض مع التزامات الاحتفاظ المصرفي)، ونقلها أو تقييد معالجتها، وتقديم شكاوى رسمية لهيئات حماية البيانات في الاتحاد الأوروبي.`,
        },
        {
          id: 8,
          title: '۸. التواصل مع مسؤول حماية البيانات والإدارة',
          content: `لأي استفسارات قانونية أو ممارسة لحقوقكم: واتساب الإدارة المباشر: 447476620282+ | البريد الإلكتروني: compliance@safipay.net | الإدارة التنفيذية: شاهين صافي - المؤسس والرئيس التنفيذي.`,
        },
      ],
      backBtn: 'العودة للصفحة الرئيسية',
      termsBtn: 'عرض شروط الخدمة الأوروبية',
    },
    ru: {
      badge: 'ЕВРОПЕЙСКИЕ СТАНДАРТЫ ЗАЩИТЫ ДАННЫХ • EU GDPR 2016/679',
      title: 'Политика банковской конфиденциальности и защиты данных',
      subheading:
        'Официальная юридическая хартия SafiPay о порядке обработки, защиты и криптографического хранения финансовой и персональной информации клиентов в строгом соответствии с регламентом ЕС GDPR 2016/679 и стандартами EBA.',
      lastUpdated: 'Дата редакции: 2026',
      jurisdiction: 'Юрисдикция: Европейский Союз и международные банковские стандарты',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '100% Соответствие GDPR',
          desc: 'Соблюдение всех гарантий статей 6 и 9 Общего регламента защиты данных ЕС.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'Банковское шифрование HSM',
          desc: 'Аппаратные модули безопасности HSM и алгоритмы AES-256 защищают ключевую инфраструктуру.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Стандарты EBA и PSD2',
          desc: 'Полная интеграция с требованиями Европейского банковского управления и строгой аутентификации (SCA).',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'Запрет передачи третьим лицам',
          desc: 'Ваши финансовые и персональные данные никогда не продаются коммерческим или маркетинговым компаниям.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Правовые основания и оператор данных',
          content: `Компания SafiPay Global Financial Technologies выступает контролером данных в соответствии с регламентом ЕС GDPR 2016/679. Обработка данных осуществляется на основании исполнения договора (ст. 6(1)(b)), выполнения юридических банковских обязательств в сфере ПОД/ФТ (5AMLD/6AMLD) и директивы о платежных услугах (PSD2/PSD3).`,
        },
        {
          id: 2,
          title: '2. Категории собираемых данных',
          content: `Для открытия европейских счетов IBAN и выпуска карт собираются: идентификационные документы (ФИО, дата рождения, паспортные данные, подтверждение проживания), биометрические данные проверки присутствия (Liveness Detection), финансовые транзакции SEPA и технические данные безопасности (IP-адрес, цифровой отпечаток устройства).`,
        },
        {
          id: 3,
          title: '3. Цели обработки данных',
          content: `Данные используются исключительно для открытия и обслуживания мультивалютных счетов, обработки мгновенных платежей SEPA, применения строгой аутентификации клиентов (SCA), мониторинга мошеннических действий и соблюдения европейских банковских норм.`,
        },
        {
          id: 4,
          title: '4. Европейские банковские партнеры и передача данных',
          content: `Данные передаются исключительно лицензированным кредитным учреждениям Европы, находящимся под надзором Европейского центрального банка (ЕЦБ), международным платежным системам (Visa/Mastercard) по стандарту PCI-DSS Level 1 и уполномоченным органам в рамках закона.`,
        },
        {
          id: 5,
          title: '5. Криптографические протоколы безопасности',
          content: `Все данные шифруются протоколом TLS 1.3 при передаче и алгоритмом AES-256-GCM при хранении с использованием сертифицированных модулей HSM FIPS 140-2 Level 3 по модели Zero-Trust.`,
        },
        {
          id: 6,
          title: '6. Сроки хранения данных',
          content: `В соответствии с европейским банковским законодательством и стандартами FATF учетные записи и финансовые транзакции хранятся в течение 5–10 лет после закрытия счета, после чего подлежат криптографическому уничтожению.`,
        },
        {
          id: 7,
          title: '7. Права субъектов данных по GDPR',
          content: `Вы имеете право на доступ к данным (ст. 15), их исправление (ст. 16), удаление (ст. 17, с учетом банковских обязательств), ограничение обработки (ст. 18), переносимость данных (ст. 20) и подачу жалоб в надзорные органы ЕС.`,
        },
        {
          id: 8,
          title: '8. Контактная информация и служба комплаенс',
          content: `Прямой WhatsApp руководства: +447476620282 | Email: compliance@safipay.net | Руководитель: Шахин Сафи, Основатель и генеральный директор SafiPay.`,
        },
      ],
      backBtn: 'На главную',
      termsBtn: 'Условия обслуживания',
    },
    tr: {
      badge: 'AVRUPA BANKACILIK VERİ KORUMA STANDARTLARI • AB GDPR 2016/679',
      title: 'Banka Gizlilik Politikası ve Veri Güvenliği Tüzüğü',
      subheading:
        'SafiPay’in Avrupa Genel Veri Koruma Tüzüğü (GDPR) ve Avrupa Bankacılık Otoritesi (EBA) yönergeleri doğrultusunda müşteri kimlik ve finansal verilerinin işlenmesi, korunması ve şifrelenmesine ilişkin resmi yasal belgesi.',
      lastUpdated: 'Son Güncelleme: 2026',
      jurisdiction: 'Yasal Yargı Alanı: Avrupa Birliği ve Uluslararası Dijital Bankacılık Standartları',
      highlights: [
        {
          icon: <ShieldCheck className="text-amber-400" size={24} />,
          title: '%100 GDPR Uyumlu',
          desc: 'Avrupa Parlamentosu ve Konseyi’nin 2016/679 sayılı Tüzüğünün tüm maddelerine tam uyumluluk.',
        },
        {
          icon: <Key className="text-amber-400" size={24} />,
          title: 'HSM Banka Düzeyi Şifreleme',
          desc: 'Donanım Güvenlik Modülleri (HSM) ve AES-256-GCM ile korunan tüm anahtar ve işlem altyapısı.',
        },
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'EBA ve PSD2 Standartları',
          desc: 'Avrupa Bankacılık Otoritesi güvenlik yönergeleri ve Güçlü Müşteri Kimlik Doğrulaması (SCA).',
        },
        {
          icon: <Database className="text-amber-400" size={24} />,
          title: 'Veri Satışı Kesinlikle Yasaktır',
          desc: 'Müşteri verileri hiçbir koşulda ticari reklam veya pazarlama şirketleriyle paylaşılmaz.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Yasal Dayanak ve Veri Sorumlusu',
          content: `SafiPay Global Financial Technologies, AB GDPR 2016/679 kapsamında veri sorumlusu olarak faaliyet göstermektedir. Verileriniz, sözleşmenin ifası (Madde 6(1)(b)), Avrupa kara para aklamayı önleme direktifleri (5AMLD/6AMLD) ve Ödeme Hizmetleri Direktifi (PSD2/PSD3) gereğince yasal yükümlülükler doğrultusunda işlenir.`,
        },
        {
          id: 2,
          title: '2. Toplanan Finansal ve Kimlik Verileri',
          content: `Avrupa IBAN tahsisleri ve kart basımı için kimlik belgeleri (ad, soyad, doğum tarihi, pasaport, ikametgah kanıtı), biyometrik canlılık doğrulama verileri (Liveness Detection), SEPA para transferi kayıtları ve IP/cihaz güvenlik telemetrisi toplanmaktadır.`,
        },
        {
          id: 3,
          title: '3. Veri İşleme Amaçları',
          content: `Veriler; çoklu para birimli hesap yönetimi, SEPA Instant anlık transferler, Güçlü Müşteri Kimlik Doğrulaması (SCA), sahtecilik ve siber dolandırıcılığın önlenmesi ve Avrupa bankacılık denetim standartlarına uyum amacıyla işlenir.`,
        },
        {
          id: 4,
          title: '4. Lisanslı Avrupa Bankalarıyla Veri Paylaşımı',
          content: `Veriler yalnızca Avrupa Merkez Bankası (ECB) denetimindeki lisanslı takas bankaları, PCI-DSS Seviye 1 uyumlu Visa/Mastercard ağları ve yasal olarak yetkili kamu otoriteleri ile mevzuat çerçevesinde paylaşılır.`,
        },
        {
          id: 5,
          title: '5. Kriptografik Güvenlik ve HSM Mimarisi',
          content: `Veriler iletim sırasında TLS 1.3, depolama sırasında AES-256-GCM ve FIPS 140-2 Seviye 3 sertifikalı HSM cihazları ile Sıfır Güven (Zero-Trust) mimarisi kapsamında korunmaktadır.`,
        },
        {
          id: 6,
          title: '6. Yasal Saklama Süreleri',
          content: `Avrupa Birliği bankacılık kanunları ve FATF standartları gereğince kimlik ve transfer kayıtları hesap kapatıldıktan sonra 5 ila 10 yıl yasal süreyle saklanır, ardından kalıcı olarak silinir.`,
        },
        {
          id: 7,
          title: '7. GDPR Kapsamındaki Yasal Haklarınız',
          content: `Verilerinize erişim (Madde 15), düzeltme (Madde 16), silinmesini isteme (Madde 17, banka saklama yükümlülükleri saklı kalmak kaydıyla), kısıtlama ve taşınabilirlik haklarına sahipsiniz.`,
        },
        {
          id: 8,
          title: '8. Veri Koruma Görevlisi ve İletişim',
          content: `Doğrudan Yönetim WhatsApp Hattı: +447476620282 | E-posta: compliance@safipay.net | Yönetim: Shaheen Safi (Kurucu ve CEO).`,
        },
      ],
      backBtn: 'Ana Sayfaya Dön',
      termsBtn: 'Hizmet Şartlarını İncele',
    },
  };

  const t = contentByLang[lang] || contentByLang.en;

  return (
    <div
      className="min-h-screen bg-[#020202] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans antialiased selection:bg-amber-500/30"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
            <ShieldCheck size={15} />
            <span>{t.badge}</span>
          </div>
        </motion.div>

        {/* Page Title & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-6">
            {t.subheading}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-400">
            <span className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.02]">
              {t.lastUpdated}
            </span>
            <span>•</span>
            <span className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.02]">
              {t.jurisdiction}
            </span>
          </div>
        </motion.div>

        {/* 4 Compliance Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.highlights.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.05 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-xl hover:border-amber-500/30 transition-all group"
            >
              <div className="mb-3 p-3 rounded-xl bg-amber-500/10 w-fit">{item.icon}</div>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Document Sections */}
        <div className="space-y-6 mb-16">
          {t.sections.map((section: any) => {
            const isOpen = activeSection === section.id || activeSection === null;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden hover:border-amber-500/25 transition-all"
              >
                <div
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className="p-6 sm:p-8 cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <h2 className="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{section.title}</span>
                  </h2>
                  <div className="text-amber-400 shrink-0">
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/5">
                  <div className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line font-light mt-4">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Executive Direct Contact Box */}
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-black/40 to-transparent p-8 sm:p-10 mb-12 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/20 text-amber-400 mb-4">
            <Scale size={28} />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            European Banking Compliance & Data Inquiries
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            For regulatory authorities, banking audits, data subject requests, or direct correspondence with Director & Founder Shaheen Safi:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/447476620282?text=Hello%20SafiPay%20Legal%20%26%20Compliance%20Desk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] text-black font-bold text-sm shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:brightness-110 transition-all"
            >
              <MessageCircle size={18} />
              <span>WhatsApp: +44 747 662 0282</span>
            </a>

            <Link
              href={`/${lang}/terms`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.04] text-white font-bold text-sm hover:border-amber-500/30 hover:bg-white/[0.08] transition-all"
            >
              <FileText size={18} />
              <span>{t.termsBtn}</span>
            </Link>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-center">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
          >
            {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{t.backBtn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
