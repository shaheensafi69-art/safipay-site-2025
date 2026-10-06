'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Landmark,
  ShieldCheck,
  CreditCard,
  Scale,
  CheckCircle2,
  ChevronDown,
  Globe,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Banknote,
  Lock,
} from 'lucide-react';

interface BankingTermsProps {
  lang: string;
}

export default function BankingTermsContent({ lang }: BankingTermsProps) {
  const isRtl = ['fa', 'ps', 'ar'].includes(lang);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const contentByLang: Record<string, any> = {
    fa: {
      badge: 'شرایط رسمی خدمات بانکداری اروپا • استانداردهای SEPA و PSD2/PSD3',
      title: 'شرایط و ضوابط عمومی خدمات بانکی و قرارداد مشتریان',
      subheading:
        'سند رسمی و تعهدنامه حقوقی حاکم بر استفاده از حساب‌های دیجیتال، تخصیص شماره‌های اختصاصی IBAN اروپا، تراکنش‌های شبکه SEPA، کارت‌های بانکی و الزامات نظارتی اداره بانکداری اروپا (EBA).',
      lastUpdated: 'آخرین ویرایش حقوقی: ۲۰۲۶',
      jurisdiction: 'حوزه قضایی حاکم: مقررات بانکی اتحادیه اروپا و دستورالعمل‌های بین‌المللی پرداخت',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'حساب اختصاصی IBAN اروپا',
          desc: 'تخصیص شماره حساب بین‌المللی منطبق با استانداردهای شبکه بانکی اتحادیه اروپا و SEPA.',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'تسویه فوری SEPA Instant',
          desc: 'انتقال وجوه در سراسر منطقه اقتصادی اروپا ظرف چند ثانیه با نظارت بانک مرکزی اروپا (ECB).',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'احراز هویت قوی مشتری (SCA)',
          desc: 'اجرای استانداردهای فنی اتحادیه اروپا (RTS) جهت تضمین بالاترین ضریب ایمنی در تمام پرداخت‌ها.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'شفافیت کامل نرخ و کارمزد',
          desc: 'تطابق با دستورالعمل‌های حفاظت از مصرف‌کنندگان مالی و عدم اعمال هرگونه کارمزد پنهان.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. موضوع قرارداد، تعاریف و مرجع قانونی حاکم',
          content: `این توافق‌نامه یک قرارداد الزام‌آور حقوقی میان کاربر («مشتری») و سیستم مالی دیجیتال صافی‌پی (SafiPay Global Financial Technologies) می‌باشد. کلیه خدمات بانکی ارائه‌شده از جمله نگهداری حساب چندارزی، تراکنش‌های فرامرزی، صدور کارت و تسویه بین‌المللی تابع قوانین بانکی اتحادیه اروپا، دستورالعمل خدمات پرداخت در بازار داخلی (PSD2 / PSD3)، مقررات منطقه پرداخت یکپارچه یورو (SEPA) و رهنمودهای اداره بانکداری اروپا (EBA) می‌باشد. افتتاح حساب یا استفاده از هر یک از خدمات به منزله پذیرش صریح و غیرقابل رجوع این شرایط است.`,
        },
        {
          id: 2,
          title: '۲. اهلیت قانونی، احراز هویت (KYC) و قوانین ضد پولشویی (AML)',
          content: `• شرط سن قانونی: تنها اشخاص حقیقی با حداقل ۱۸ سال تمام یا اشخاص حقوقی معتبر ثبت‌شده مجاز به افتتاح حساب می‌باشند.
• احراز هویت چندمرحله‌ای: مطابق با دستورالعمل‌های 5AMLD و 6AMLD اتحادیه اروپا، مشتریان موظف به ارائه مدارک هویتی معتبر، اثبات اقامتگاه قانونی و تکمیل اعتبارسنجی بیومتریک زنده هستند.
• اشخاص دارای موقعیت سیاسی (PEP) و تحریم‌ها: کلیه درخواست‌ها در برابر پایگاه‌های داده تحریم‌های بین‌المللی (اتحادیه اروپا، سازمان ملل متحد و OFAC) پایش می‌شوند. ارائه هرگونه اطلاعات کذب منجر به انسداد دائمی حساب و ارجاع پرونده به مراجع ذی‌صلاح قانونی خواهد شد.`,
        },
        {
          id: 3,
          title: '۳. خدمات بانکی دیجیتال، تخصیص IBAN و تسویه SEPA',
          content: `• تخصیص IBAN اختصاصی: به هر مشتری یک یا چند شماره حساب بین‌المللی معتبر اروپایی با قابلیت دریافت و ارسال یورو و سایر ارزهای اصلی تخصیص داده می‌شود.
• نقل و انتقالات SEPA و SEPA Instant: انتقال وجوه در محدوده کشورهای عضو منطقه SEPA بر اساس قوانین شورای پرداخت‌های اروپا (EPC) با بالاترین سرعت تسویه انجام می‌پذیرد.
• سقف‌های مجاز تراکنش: صافی‌پی سقف‌های متناسب با سطح احراز هویت برای جلوگیری از سوءاستفاده‌های مالی تعیین می‌نماید که در داشبورد کاربری به وضوح نمایش داده می‌شود.`,
        },
        {
          id: 4,
          title: '۴. صدور کارت‌های بانکی مجازی و فیزیکی (Visa / Mastercard)',
          content: `• کارت‌های بین‌المللی صادرشده تحت استانداردهای امنیتی PCI-DSS Level 1 بوده و قابلیت اتصال به درگاه‌های پرداخت آنلاین جهانی و سیستم‌های کیف پول هوشمند را دارند.
• مشتری شخصاً مسئول حفظ امنیت فیزیکی و دیجیتال اطلاعات کارت، کدهای CVV و رمزهای پویا می‌باشد. در صورت مفقودی یا سرقت، مشتری موظف است فوراً از طریق داشبورد یا تماس اضطراری نسبت به مسدودسازی کارت اقدام نماید.`,
        },
        {
          id: 5,
          title: '۵. امنیت حساب و الزام احراز هویت قوی (SCA)',
          content: `مطابق با استانداردهای ماده ۹۷ دستورالعمل PSD2، تمامی عملیات حساس مالی و ورود به حساب‌ها ملزم به گذراندن احراز هویت قوی مشتری (Strong Customer Authentication - SCA) بر مبنای حداقل دو عامل مستقل (دانش، مالکیت، یا ویژگی بیومتریک) هستند. مشتری نباید تحت هیچ شرایطی رمزهای عبور، کلیدهای دسترسی API یا کدهای یک‌بارمصرف خود را در اختیار اشخاص ثالث قرار دهد.`,
        },
        {
          id: 6,
          title: '۶. فعالیت‌های ممنوعه و مبارزه قاطع با جرایم مالی',
          content: `استفاده از خدمات صافی‌پی برای هر یک از موارد زیر اکیداً ممنوع بوده و موجب توقیف فوری دارایی‌ها و فسخ یک‌طرفه قرارداد می‌گردد:
• پولشویی، تامین مالی تروریسم، یا مشارکت در شبکه‌های مبادلات غیرمجاز مالی.
• قاچاق، خرید و فروش اقلام غیرقانونی، داروها یا تسلیحات ممنوعه، قمار و شرط‌بندی‌های غیرقانونی.
• دور زدن تحریم‌های بین‌المللی و استفاده از ابزارهای تغییر هویت جعلی.
• حملات سایبری، تلاش برای نفوذ به سرورها و نقض پروتکل‌های ارتباطی بانکی.`,
        },
        {
          id: 7,
          title: '۷. شفافیت تعرفه‌ها، کارمزدها و نرخ‌های تسعیر ارز',
          content: `• صافی‌پی متعهد به شفافیت ۱۰۰٪ کارمزدهاست. جدول کلیه هزینه‌ها قبل از تایید نهایی هر تراکنش به مشتری نمایش داده می‌شود.
• تبدیل ارزها بر اساس نرخ‌های لحظه‌ای و حاشیه سود عادلانه منطبق بر نرخ‌های مرجع بانک مرکزی اروپا (ECB Reference Rates) صورت می‌پذیرد و هیچ هزینه پنهانی کسر نخواهد شد.`,
        },
        {
          id: 8,
          title: '۸. تعلیق، مسدودسازی موقت و بستن حساب',
          content: `صافی‌پی این حق قانونی را برای خود محفوظ می‌دارد که در صورت بروز هشدارهای امنیتی، ظن موجه به ارتکاب جرم مالی، دستور قضایی مراجع صلاحیت‌دار اتحادیه اروپا یا نقض مفاد این توافق‌نامه، نسبت به مسدودسازی موقت یا دائم حساب اقدام نماید. همچنین مشتری می‌تواند در هر زمان با تسویه کامل تعهدات، درخواست بسته شدن حساب و بازپس‌گیری قانونی باقیمانده وجوه را ثبت کند.`,
        },
        {
          id: 9,
          title: '۹. حل اختلاف و ارجاع به بازرس مالی اروپا (Financial Ombudsman)',
          content: `در صورت بروز هرگونه اختلاف، مشتری ابتدا شکایت خود را به واحد رسیدگی به شکایات صافی‌پی ارسال می‌نماید که طبق مقررات اتحادیه اروپا ظرف حداکثر ۱۵ روز کاری پاسخ کتبی مستدل ارائه خواهد شد. در صورت عدم حصول رضایت، مشتری حق دارد موضوع را به مراجع داوری مالی، سامانه حل اختلاف آنلاین اتحادیه اروپا (ODR) یا بازرس مالی ذی‌صلاح اروپایی ارجاع دهد.`,
        },
        {
          id: 10,
          title: '۱۰. اطلاعات ارتباط رسمی و پشتیبانی حقوقی',
          content: `پشتیبانی رسمی و ارتباط با واحد حقوقی صافی‌پی:
• واتساپ رسمی مدیریت: 447476620282+
• ایمیل واحد حقوقی و قراردادها: legal@safipay.net
• بنیان‌گذار و رهبری عالی: شاهین صافی - شبکه بین‌المللی بانکداری دیجیتال صافی‌پی.`,
        },
      ],
      backBtn: 'بازگشت به صفحه اصلی',
      privacyBtn: 'مشاهده سیاست حفظ حریم خصوصی بانکی',
    },
    ps: {
      badge: 'د اروپا د بانکدارۍ رسمي شرایط • د SEPA او PSD2/PSD3 معیارونه',
      title: 'د بانکي خدماتو عمومي شرایط او د پیرودونکو تړون',
      subheading:
        'د اروپایي اتحادیې د مالي قوانینو، د IBAN حسابونو اختصاص، د SEPA شبکې د انتقالاتو او د اروپا د بانکدارۍ ادارې (EBA) لارښوونو سره سم د صافي پي رسمي قانوني سند.',
      lastUpdated: 'وروستی قانوني سمون: ۲۰۲۶',
      jurisdiction: 'قانوني صلاحیت: د اروپایي ټولنې بانکي قوانین او د نړیوالو تادیاتو مقررات',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'د اروپا ځانګړی IBAN',
          desc: 'د اروپا د بانکي شبکې او SEPA د قوانینو سره سم د نړیوال بانکي حساب درلودل.',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'د SEPA چټک انتقالات',
          desc: 'د اروپا د مرکزي بانک (ECB) تر څارنې لاندې په څو ثانیو کې د پیسو خوندي لیږد.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'د کاروونکي پیاوړی تصدیق (SCA)',
          desc: 'د تادیاتو په ټولو پړاوونو کې د لوړې کچې امنیت لپاره د اروپا د RTS لارښود پلي کول.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'د فیسونو بشپړ روڼتیا',
          desc: 'د مصرف کونکو د حقونو بشپړ درناوی او د پټو فیسونو نشتوالی.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. د تړون موضوع، تعریفونه او حاکم بانکي قوانین',
          content: `دا تړون د پیرودونکي او صافي پي (SafiPay Global Financial Technologies) ترمنځ یو رسمي حقوقي تړون دی. د څو اسعارو لرونکو حسابونو، نړیوالو لیږدونو او بانکي کارتونو کارول د اروپا د بانکدارۍ ادارې (EBA)، د تادیاتو لارښود (PSD2/PSD3) او SEPA قوانینو لاندې ترسره کیږي. د حساب پرانیستل د دې ټولو مادو د منلو په مانا دي.`,
        },
        {
          id: 2,
          title: '۲. قانوني اهلیت، د هویت تثبیت (KYC) او د پیسو د سپینولو مخنیوی (AML)',
          content: `• د عمر شرط: یوازې هغه کسان چې عمر یې ۱۸ کاله بشپړ وي کولی شي حساب پرانیزي.
• د هویت تایید: د اروپا د 5AMLD او 6AMLD قوانینو سره سم، د اصلي اسنادو، د استوګنې ځای ثبوت او د مخ ژوندی تایید الزامي دی.
• بندیزونه او پلي کیدل: ټول حسابونه د ملګرو ملتونو، اروپايي ټولنې او OFAC د بندیزونو له لیست سره څارل کیږي. د ناسم معلوماتو ورکول د حساب د تړلو سبب کیږي.`,
        },
        {
          id: 3,
          title: '۳. د اروپا اختصاصي IBAN او د SEPA تادیات',
          content: `هر کاروونکي ته د اروپا یو معتبر IBAN حساب ورکول کیږي ترڅو د یورو او نورو اسعارو لیږد د SEPA Instant له لارې په پوره چټکتیا او خوندیتوب سره ترسره شي. د لیږدونو مالي محدودیتونه په شفاف ډول په ډشبورډ کې ښودل کیږي.`,
        },
        {
          id: 4,
          title: '۴. د ویزا او ماسټرکارډ نړیوال کارتونه',
          content: `ټول ورکړل شوي کارتونه د PCI-DSS لومړۍ درجې تر امنیتي چتر لاندې فعالیت کوي. کاروونکی پخپله د خپلو کارتونو د پټو کوډونو او پین د ساتنې مسؤل دی او د ورکیدو په حالت کې باید سمدستي کارت وتړي.`,
        },
        {
          id: 5,
          title: '۵. د حساب خوندیتوب او دوه پړاویزه پیاوړې ننووتل (SCA)',
          content: `د PSD2 د ۹۷ مې مادې له مخې، ټولې مهمې معاملې او ننووتل باید د دوه جلا امنیتي لارو (SCA) څخه تیر شي. خپل پټ شفرونه هیڅکله له چا سره مه شریکوئ.`,
        },
        {
          id: 6,
          title: '۶. غیرقانوني فعالیتونه او بندیزونه',
          content: `د ناقانونه معاملاتو، د پیسو سپینولو، د ترهګرۍ د تمویل او غیرقانوني توکو د پېرلو لپاره د صافي پي کارول په کلکه منع دي او د پیسو د ضبطیدو لامل ګرځي.`,
        },
        {
          id: 7,
          title: '۷. د فیسونو او تبادلې نرخونو روڼتیا',
          content: `ټول بانکي فیسونه او د اسعارو تبادلې نرخونه د اروپا د مرکزي بانک (ECB) د شفافو نرخونو سره سم مخکې له مخکې مشتریانو ته ښودل کیږي او هیڅ غیرقانوني فیس نه اخیستل کیږي.`,
        },
        {
          id: 8,
          title: '۸. د حساب تړل او تعلیق',
          content: `د امنیتي شکونو، غیرقانوني فعالیتونو یا د محکمې د حکم په صورت کې صافي پي حق لري چې حساب وځنډوي. همدارنګه پیرودونکی کولی شي په خپله خوښه د خپلو پاتې پیسو له ترلاسه کولو وروسته حساب بند کړي.`,
        },
        {
          id: 9,
          title: '۹. د شخړو حل او د اروپا د مالي شخړو اداره (Ombudsman)',
          content: `که کومه شخړه رامنځته شي، پیرودونکی کولی شي رسمي شکایت درج کړي چې تر ۱۵ کاري ورځو پورې به وڅیړل شي، او یا یې د اروپا مالي محکمې او Ombudsman ته راجع کړي.`,
        },
        {
          id: 10,
          title: '۱۰. رسمي اړیکه او حقوقي څانګه',
          content: `د پوښتنو او مالي اړیکو لپاره:
• رسمي واټس‌اپ: 447476620282+
• حقوقي ایمیل: legal@safipay.net
• مشرتابه: شاهین صافی - د صافي پي بنسټګر او اجرایوي رییس.`,
        },
      ],
      backBtn: 'اصلي پاڼې ته ستنیدل',
      privacyBtn: 'د محرمیت تګلاره ولولئ',
    },
    en: {
      badge: 'OFFICIAL EUROPEAN BANKING TERMS • SEPA & PSD2/PSD3 REGULATORY REGIME',
      title: 'European Banking Terms of Service & Client Agreement',
      subheading:
        'The master legal contract governing the issuance of European IBAN accounts, SEPA instant clearing execution, digital payment card facilities, and customer rights under European Union financial directives and EBA oversight.',
      lastUpdated: 'Last Legal Revision: 2026',
      jurisdiction: 'Governing Law: European Union Financial Directives & International Banking Standards',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Dedicated European IBAN',
          desc: 'Individual International Bank Account Numbers issued under European Central Bank clearing standards.',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'SEPA & SEPA Instant Rails',
          desc: 'Near-instant cross-border settlement across 36 SEPA member states with direct oversight.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'Strong Customer Authentication',
          desc: 'Mandatory two-factor cryptographic authentication complying with PSD2/PSD3 Regulatory Technical Standards.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'Transparent Tariffs & Pricing',
          desc: 'Absolute fee transparency with exchange rates anchored against European Central Bank benchmarks.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Contractual Scope, Definitions & Governing Legal Framework',
          content: `This Master Client Agreement ("Terms", "Agreement") forms a binding statutory contract between the client ("you", "User") and SafiPay Global Financial Technologies ("SafiPay", "we", "us"). The services provided, including multi-currency digital ledgers, dedicated European IBAN issuance, SEPA settlement, and payment card services, are governed by the laws and regulations of the European Union, Directive (EU) 2015/2366 (Payment Services Directive - PSD2/PSD3), Regulation (EU) 2021/1230 on cross-border payments, and regulatory standards promulgated by the European Banking Authority (EBA). Opening an account or executing any transaction constitutes irrevocable agreement to these Terms.`,
        },
        {
          id: 2,
          title: '2. Eligibility, Statutory Due Diligence (KYC) & Sanctions Compliance',
          content: `• Age & Legal Capacity: Services are strictly restricted to natural persons possessing full legal capacity aged 18 years or older, and legally registered commercial corporations.
• Multi-Tier Due Diligence (CDD/EDD): In strict compliance with Directive (EU) 2018/843 (6AMLD), onboarding requires authenticated government photo identification, certified residential documentation, and automated biometric liveness verification.
• Politically Exposed Persons (PEPs) & Sanctions: All accounts are continuously screened against EU, UN, and OFAC sanctions lists. Submitting fraudulent credentials or misrepresenting source of funds constitutes immediate grounds for account freezing and law enforcement notification.`,
        },
        {
          id: 3,
          title: '3. Digital Accounts, European IBAN Issuance & SEPA Settlement',
          content: `• European IBAN Allocation: Eligible clients are allocated unique, dedicated European IBANs enabling direct credit and debit transfers across the European Economic Area (EEA).
• SEPA & SEPA Instant Execution: Euro credit transfers within the SEPA network are executed under European Payments Council (EPC) Rulebooks, with SEPA Instant providing round-the-clock settlement within ten seconds.
• Transaction Tier Limits: Security and volume limits are determined dynamically by account verification tier to mitigate liquidity and fraud risks.`,
        },
        {
          id: 4,
          title: '4. Virtual and Physical Payment Cards (Visa / Mastercard)',
          content: `• Card Issuance: Payment cards issued through licensed partner credit institutions comply with PCI-DSS Level 1 standards and support global contactless, EMV chip, and 3D-Secure 2.0 e-commerce payments.
• Cardholder Duty of Care: You must take all reasonable precautions to safeguard your card details, PIN, and digital wallet tokens. In the event of loss, theft, or unauthorized use, you must immediately freeze the card via the dashboard or emergency hotline.`,
        },
        {
          id: 5,
          title: '5. Account Security & Strong Customer Authentication (SCA)',
          content: `In accordance with Article 97 of Directive (EU) 2015/2366, all sensitive account interactions, payee creations, and payment initiations require Strong Customer Authentication (SCA) utilizing at least two mutually independent elements categorized as Knowledge, Possession, or Inherence. You are strictly prohibited from sharing one-time passcodes (OTPs), private authentication keys, or API credentials with any third party.`,
        },
        {
          id: 6,
          title: '6. Permitted Use, Prohibited Conduct & Financial Crime Prevention',
          content: `You agree never to utilize SafiPay accounts or infrastructure for:
• Money laundering, terrorist financing, illicit weapons trade, or trafficking.
• Operating unlicensed money services businesses, pyramid schemes, or illegal gambling.
• Circumventing European Union or international capital controls, sanctions, or tax compliance requirements.
• Cyberattacks, automated scraping, reverse-engineering, or unauthorized penetration of banking APIs.`,
        },
        {
          id: 7,
          title: '7. Fees, Transparency & Foreign Exchange Margins',
          content: `• Fee Schedule: SafiPay maintains total tariff transparency. All applicable processing fees are itemized and clearly presented to the user prior to payment authorization.
• Currency Conversion: Multi-currency exchanges are executed using real-time wholesale interbank rates with a fixed, published margin anchored against European Central Bank (ECB) reference rates.`,
        },
        {
          id: 8,
          title: '8. Account Freezing, Restriction & Termination',
          content: `SafiPay reserves the right to suspend, freeze, or terminate account access immediately upon: automated AML transaction velocity alerts, suspected security compromises, court orders from competent European tribunals, or material breach of these Terms. Clients may close their accounts at any time, subject to settling outstanding obligations and lawful fund repatriation.`,
        },
        {
          id: 9,
          title: '9. Dispute Resolution, European Financial Ombudsman & Governing Law',
          content: `• Complaint Filing: Clients may submit formal grievances to our legal team. Under PSD2 mandates, formal written decisions are provided within 15 business days.
• Financial Ombudsman & ODR: Unsatisfied clients retain the legal right to submit disputes to the European Online Dispute Resolution (ODR) platform or appeal to the competent national Financial Ombudsman Service.`,
        },
        {
          id: 10,
          title: '10. Executive & Legal Contact Information',
          content: `For legal correspondence, commercial agreements, or regulatory supervisory coordination:
• Executive WhatsApp Direct Line: +447476620282
• Official Legal Email: legal@safipay.net
• Executive Supervision: Shaheen Safi, Director & Founder — SafiPay Global Digital Banking System.`,
        },
      ],
      backBtn: 'Return to Homepage',
      privacyBtn: 'Read European Privacy Policy',
    },
    de: {
      badge: 'OFFIZIELLE EUROPÄISCHE BANKEN-BEDINGUNGEN • SEPA & PSD2/PSD3',
      title: 'Allgemeine Geschäftsbedingungen und Kundenvereinbarung',
      subheading:
        'Der maßgebliche Rahmenvertrag für die Vergabe europäischer IBAN-Konten, SEPA-Echtzeitüberweisungen, Zahlungskarten und Verbraucherschutzrechte gemäß den Richtlinien der Europäischen Union und den EBA-Standards.',
      lastUpdated: 'Letzte Überarbeitung: 2026',
      jurisdiction: 'Geltendes Recht: Europäische Finanzrichtlinien und internationale Bankgesetze',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Dedizierte europäische IBAN',
          desc: 'Individuelle internationale Kontonummern nach den Standards des Europäischen Zahlungsrats (EPC).',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'SEPA- & SEPA-Instant-Zahlungen',
          desc: 'Sekundenschnelle Abwicklung von Zahlungen im gesamten europäischen Wirtschaftsraum.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'Starke Kundenauthentifizierung (SCA)',
          desc: 'Zwei-Faktor-Authentifizierung gemäß den technischen Regulierungsstandards der PSD2/PSD3.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'Preistransparenz ohne versteckte Kosten',
          desc: 'Vollständige Offenlegung aller Gebühren vor jeder Transaktionsautorisierung.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Geltungsbereich und Aufsichtsrahmen',
          content: `Dieser Vertrag regelt die Nutzung aller Dienstleistungen von SafiPay Global Financial Technologies. Alle Dienste unterliegen den Richtlinien der Europäischen Union (PSD2/PSD3, EBA-Vorgaben) und den SEPA-Regularien.`,
        },
        {
          id: 2,
          title: '2. Zulassung, Identitätsprüfung (KYC) und Geldwäscheprävention',
          content: `Die Kontoeröffnung setzt die Vollendung des 18. Lebensjahres voraus. Gemäß 5AMLD/6AMLD sind amtliche Lichtbildausweise, Wohnsitznachweise und Liveness-Prüfungen vorzulegen. Sanktionsprüfungen (EU/UN/OFAC) erfolgen kontinuierlich.`,
        },
        {
          id: 3,
          title: '3. Europäische IBAN-Konten und SEPA-Zahlungsverkehr',
          content: `Kunden erhalten individuelle europäische IBANs für eingehende und ausgehende SEPA-Zahlungen. SEPA-Instant-Überweisungen erfolgen in Echtzeit nach den Regularien der EZB.`,
        },
        {
          id: 4,
          title: '4. Debitkarten (Visa / Mastercard) und Sorgfaltspflichten',
          content: `Ausgegebene Karten entsprechen dem Standard PCI-DSS Level 1. Karteninhaber sind verpflichtet, PINs und CVVs sicher aufzubewahren und Karten bei Verlust umgehend zu sperren.`,
        },
        {
          id: 5,
          title: '5. Kontosicherheit und SCA',
          content: `Sensible Transaktionen erfordern stets eine starke Kundenauthentifizierung (SCA) nach Art. 97 PSD2. Zugangsdaten dürfen nicht an Dritte weitergegeben werden.`,
        },
        {
          id: 6,
          title: '6. Verbotene Aktivitäten',
          content: `Geldwäsche, Terrorismusfinanzierung, Sanktionsumgehung oder illegale Handelsaktivitäten führen zur sofortigen Kontosperrung und Anzeige bei den Aufsichtsbehörden.`,
        },
        {
          id: 7,
          title: '7. Gebühren und Wechselkurse',
          content: `Alle Gebühren werden vor der Freigabe transparent angezeigt. Währungsumrechnungen basieren auf den EZB-Referenzkursen mit fairen Spreads.`,
        },
        {
          id: 8,
          title: '8. Kündigung und Kontosperre',
          content: `SafiPay kann Konten bei Sicherheitsbedenken oder Gesetzesverstößen sperren. Kunden können ihr Konto jederzeit nach Ausgleich aller Verbindlichkeiten kündigen.`,
        },
        {
          id: 9,
          title: '9. Beschwerden und Finanzschlichtung (Ombudsmann)',
          content: `Beschwerden werden innerhalb von 15 Geschäftstagen beantwortet. Es besteht das Recht auf Anrufung der europäischen Online-Streitbeilegung (OS) oder des zuständigen Ombudsmanns.`,
        },
        {
          id: 10,
          title: '10. Offizieller Kontakt',
          content: `WhatsApp: +447476620282 | E-Mail: legal@safipay.net | Geschäftsleitung: Shaheen Safi (Direktor & Gründer).`,
        },
      ],
      backBtn: 'Zur Startseite',
      privacyBtn: 'Datenschutzrichtlinie lesen',
    },
    fr: {
      badge: 'CONDITIONS BANCAIRES OFFICIELLES • RÉGULATION SEPA ET DSP2/DSP3',
      title: 'Conditions Générales de Service et Contrat Client',
      subheading:
        'Le contrat juridique officiel régissant l’attribution des comptes IBAN européens, les virements instantanés SEPA, l’émission des cartes de paiement et les droits des consommateurs sous la supervision de l’Autorité Bancaire Européenne (ABE).',
      lastUpdated: 'Dernière révision légale : 2026',
      jurisdiction: 'Droit applicable : Directives financières de l’UE et normes bancaires internationales',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'IBAN Européen Dédié',
          desc: 'Comptes individuels avec numéros IBAN conformes aux normes du Conseil Européen des Paiements (EPC).',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'Virements SEPA Instantanés',
          desc: 'Exécution quasi instantanée 24/7 dans les 36 pays de la zone SEPA sous le contrôle de la BCE.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'Authentification Forte (SCA)',
          desc: 'Sécurité à double facteur conforme aux normes techniques de réglementation de la DSP2/DSP3.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'Transparence Tarifaire Totale',
          desc: 'Affichage clair de tous les frais et marges de change adossées aux taux de la BCE.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Portée Contractuelle et Cadre Réglementaire',
          content: `Le présent contrat lie le client à SafiPay Global Financial Technologies. Les services fournis (IBAN européen, virements SEPA, cartes de débit) sont soumis aux directives de l'Union européenne (DSP2/DSP3) et aux règles de l'Autorité Bancaire Européenne (ABE).`,
        },
        {
          id: 2,
          title: '2. Éligibilité, Vérification d’Identité (KYC) et LCB-FT',
          content: `L'accès est réservé aux personnes majeures (18 ans et plus). Conformément aux directives 5AMLD/6AMLD, des pièces d'identité officielles, des justificatifs de domicile et une vérification biométrique vivante sont exigés. Les listes de sanctions de l'UE, de l'ONU et de l'OFAC sont contrôlées en continu.`,
        },
        {
          id: 3,
          title: '3. Comptes Numériques et Virements SEPA',
          content: `Chaque client reçoit un IBAN européen pour émettre et recevoir des paiements SEPA et SEPA Instant selon les règles du Conseil Européen des Paiements (EPC).`,
        },
        {
          id: 4,
          title: '4. Cartes Bancaires (Visa / Mastercard)',
          content: `Les cartes émises respectent la norme de sécurité PCI-DSS Niveau 1. Le titulaire doit protéger ses codes d'accès et bloquer immédiatement la carte en cas d'anomalie.`,
        },
        {
          id: 5,
          title: '5. Sécurité du Compte et Authentification Forte (SCA)',
          content: `Toute opération sensible requiert une authentification forte à deux facteurs selon l'article 97 de la DSP2. Les mots de passe et codes OTP ne doivent jamais être divulgués.`,
        },
        {
          id: 6,
          title: '6. Utilisations Interdites',
          content: `Le blanchiment de capitaux, le financement du terrorisme, les activités illégales et le contournement des sanctions entraînent le blocage immédiat du compte et des signalements aux autorités.`,
        },
        {
          id: 7,
          title: '7. Tarification et Taux de Change',
          content: `Tous les frais applicables sont indiqués avant validation des ordres. Les conversions de devises reposent sur les taux de référence de la Banque Centrale Européenne.`,
        },
        {
          id: 8,
          title: '8. Suspension et Clôture de Compte',
          content: `SafiPay peut geler un compte en cas d'alerte de sécurité ou d'injonction judiciaire. Le client peut clôturer son compte à tout moment après règlement des dettes.`,
        },
        {
          id: 9,
          title: '9. Règlement des Litiges et Médiateur Financier Européen',
          content: `Les réclamations écrites reçoivent une réponse sous 15 jours ouvrables. Le client peut saisir la plateforme européenne de RLL ou le Médiateur financier compétent.`,
        },
        {
          id: 10,
          title: '10. Contact de la Direction',
          content: `WhatsApp direction : +447476620282 | Email : legal@safipay.net | Direction : Shaheen Safi (Directeur & Fondateur).`,
        },
      ],
      backBtn: 'Retour à l’accueil',
      privacyBtn: 'Lire la politique de confidentialité',
    },
    ar: {
      badge: 'شروط الخدمات المصرفية الأوروبية الرسمية • معايير SEPA وPSD2/PSD3',
      title: 'الشروط والأحكام العامة للخدمات المصرفية واتفاقية العميل',
      subheading:
        'العقد القانوني الأساسي الحاكم لفتح وإدارة حسابات الآيبان الأوروبية، التحويلات عبر شبكة SEPA الفورية، إصدار البطاقات المصرفية وحقوق المستهلك تحت إشراف الهيئة المصرفية الأوروبية (EBA).',
      lastUpdated: 'آخر تحديث قانوني: ۲۰۲۶',
      jurisdiction: 'القانون الواجب التطبيق: توجيهات الاتحاد الأوروبي المالية والمعايير المصرفية الدولية',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'آيبان أوروبي مخصص (IBAN)',
          desc: 'حسابات دولية مستقلة تصدر وفقاً لمعايير المجلس الأوروبي للمدفوعات (EPC).',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'تحويلات SEPA الفورية',
          desc: 'تنفيذ المدفوعات عبر ۳۶ دولة في منطقة SEPA خلال ثوانٍ معدودة وبإشراف البنك المركزي الأوروبي.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'المصادقة القوية للعميل (SCA)',
          desc: 'تطبيق معايير التحقق الثنائي التشفيرية الإلزامية بموجب توجيهات الدفع الأوروبية PSD2.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'شفافية الرسوم والأسعار',
          desc: 'عرض كافة الرسوم بكل وضوح قبل تنفيذ المعاملات مع ربط أسعار الصرف بأسعار البنك المركزي الأوروبي.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '۱. نطاق الاتفاقية والإطار التنظيمي المصرفي',
          content: `تعد هذه الاتفاقية عقداً ملزماً قانوناً بين العميل ومنصة صافي باي للتقنيات المالية (SafiPay Global Financial Technologies). تخضع جميع الخدمات (الحسابات متعددة العملات، أرقام الآيبان الأوروبية، بطاقات الدفع) لقوانين الاتحاد الأوروبي وتوجيهات خدمات الدفع (PSD2/PSD3) وقواعد شبكة SEPA.`,
        },
        {
          id: 2,
          title: '۲. الأهلية القانونية، فحص الهوية (KYC) ومكافحة غسل الأموال (AML)',
          content: `يشترط بلوغ سن ۱۸ عاماً لفتح الحساب. التزاماً بالتوجيهين الأوروبيين 5AMLD و6AMLD، يتعين تقديم وثائق رسمية وإثبات سكن واجتياز الفحص الحيوي للوجه. يتم فحص كافة الحسابات تلقائياً مقابل قوائم العقوبات الأوروبية والدولية (OFAC وUN).`,
        },
        {
          id: 3,
          title: '۳. حسابات الآيبان الأوروبية والتحويلات الموحدة SEPA',
          content: `يُمنح العميل رقم آيبان أوروبي لإجراء واستقبال التحويلات في منطقة اليورو بدقة وأمان. تتم تسوية التحويلات الفورية SEPA Instant على مدار الساعة خلال ثوانٍ.`,
        },
        {
          id: 4,
          title: '۴. بطاقات الدفع الرقمية والفعلية (Visa / Mastercard)',
          content: `تخضع البطاقات الصادرة لأعلى معايير أمان بيانات بطاقات الدفع PCI-DSS المستوى الأول. يتحمل العميل مسؤولية حماية رموزه السرية، ويلتزم بتجميد البطاقة فوراً عند الاشتباه في أي اختراق.`,
        },
        {
          id: 5,
          title: '۵. أمان الحساب والمصادقة القوية (SCA)',
          content: `بموجب المادة ۹۷ من توجيهات PSD2، يلزم اجتياز التحقق الثنائي المستقل لكل معاملة مالية حساسة. يحظر تماماً مشاركة كلمات المرور أو رموز التحقق مع أي طرف ثالث.`,
        },
        {
          id: 6,
          title: '۶. الأنشطة المحظورة ومكافحة الجرائم المالية',
          content: `يحظر استخدام حسابات صافي باي في أي معاملات غير مشروعة، أو غسل الأموال، أو تمويل الإرهاب، أو الالتفاف على العقوبات الدولية، ويترتب على ذلك تجميد الأموال فوراً وإبلاغ السلطات القضائية.`,
        },
        {
          id: 7,
          title: '۷. شفافية الرسوم وأسعار الصرف',
          content: `تلتزم صافي باي بعرض جدول الرسوم كاملاً قبل اعتماد التحويلات، وتستند أسعار تحويل العملات إلى أسعار البنك المركزي الأوروبي الرسمية بهوامش عادلة ومعلنة.`,
        },
        {
          id: 8,
          title: '۸. التجميد والتعليق وإنهاء الحساب',
          content: `يحق لصافي باي تعليق الحساب عند ظهور تنبيهات أمنية أو شبهات جنائية أو أوامر قضائية. كما يحق للعميل إغلاق حسابه في أي وقت بعد تسوية كافة الالتزامات.`,
        },
        {
          id: 9,
          title: '۹. تسوية النزاعات واللجوء للمفوض المالي الأوروبي (Ombudsman)',
          content: `يتم البت في الشكاوى كتابياً خلال ۱۵ يوم عمل بموجب توجيهات الاتحاد الأوروبي، مع حق العميل في تصعيد النزاع لمنصة تسوية المنازعات الأوروبية عبر الإنترنت (ODR) أو المفوض المالي المختص.`,
        },
        {
          id: 10,
          title: '۱۰. التواصل الرسمي مع الإدارة',
          content: `واتساب الإدارة المباشر: 447476620282+ | البريد الإلكتروني: legal@safipay.net | الإدارة العليا: شاهين صافي - المؤسس والرئيس التنفيذي.`,
        },
      ],
      backBtn: 'العودة للصفحة الرئيسية',
      privacyBtn: 'قراءة سياسة الخصوصية المصرفية',
    },
    ru: {
      badge: 'ОФИЦИАЛЬНЫЕ УСЛОВИЯ ЕВРОПЕЙСКОГО БАНКИНГА • СТАНДАРТЫ SEPA И PSD2/PSD3',
      title: 'Европейские условия обслуживания и договор клиента',
      subheading:
        'Официальный юридический договор, регулирующий открытие европейских счетов IBAN, проведение мгновенных платежей SEPA, выпуск банковских карт и защиту прав клиентов в соответствии с нормами ЕС и стандартами EBA.',
      lastUpdated: 'Дата редакции: 2026',
      jurisdiction: 'Применимое право: Финансовые директивы Европейского Союза и международные нормы',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Европейский счет IBAN',
          desc: 'Индивидуальные международные банковские реквизиты по стандартам Европейского платежного совета.',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'Мгновенные переводы SEPA',
          desc: 'Расчеты за секунды в 36 странах зоны SEPA под надзором Европейского центрального банка (ЕЦБ).',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'Строгая аутентификация (SCA)',
          desc: 'Обязательная двухфакторная проверка подлинности операций по директиве PSD2/PSD3.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'Абсолютная прозрачность тарифов',
          desc: 'Полное отсутствие скрытых комиссий и курсы конвертации, привязанные к данным ЕЦБ.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Предмет соглашения и правовая основа',
          content: `Настоящий договор определяет порядок предоставления услуг компанией SafiPay Global Financial Technologies. Все операции подчиняются законодательству ЕС, директиве о платежных услугах (PSD2/PSD3) и правилам SEPA.`,
        },
        {
          id: 2,
          title: '2. Требования к клиентам, проверка KYC и ПОД/ФТ',
          content: `Открытие счета доступно лицам от 18 лет. В соответствии с директивами 5AMLD/6AMLD обязательны предоставление паспорта, подтверждения адреса и биометрическая проверка. Проводится постоянный мониторинг по санкционным спискам ЕС, ООН и OFAC.`,
        },
        {
          id: 3,
          title: '3. Европейские счета IBAN и переводы SEPA',
          content: `Клиентам выделяется европейский IBAN для платежей в евро и других валютах. Мгновенные расчеты SEPA Instant обеспечивают зачисление средств за считанные секунды.`,
        },
        {
          id: 4,
          title: '4. Платежные карты (Visa / Mastercard)',
          content: `Выпускаемые карты защищены стандартом PCI-DSS Level 1. Клиент обязан соблюдать конфиденциальность PIN-кодов и немедленно блокировать карту в случае утраты.`,
        },
        {
          id: 5,
          title: '5. Безопасность и строгая аутентификация (SCA)',
          content: `Любые значимые операции требуют прохождения строгой двухфакторной аутентификации (SCA). Передача паролей третьим лицам категорически запрещена.`,
        },
        {
          id: 6,
          title: '6. Запрещенные операции',
          content: `Использование счета для отмывания средств, финансирования терроризма или обхода международных санкций влечет немедленную блокировку и передачу материалов в правоохранительные органы.`,
        },
        {
          id: 7,
          title: '7. Тарифы и валютная конвертация',
          content: `Все комиссии открыто отображаются до подтверждения транзакции. Конвертация валют осуществляется по курсам Европейского центрального банка с фиксированной маржой.`,
        },
        {
          id: 8,
          title: '8. Блокировка и расторжение договора',
          content: `SafiPay вправе заблокировать счет при выявлении подозрительных операций или судебных предписаний. Клиент может закрыть счет в любой момент после выполнения всех обязательств.`,
        },
        {
          id: 9,
          title: '9. Разрешение споров и Европейский финансовый омбудсмен',
          content: `Претензии рассматриваются в течение 15 рабочих дней. Клиент вправе обратиться на платформу онлайн-урегулирования споров ЕС (ODR) или к финансовому омбудсмену.`,
        },
        {
          id: 10,
          title: '10. Официальные контакты',
          content: `WhatsApp руководства: +447476620282 | Email: legal@safipay.net | Руководитель: Шахин Сафи (Основатель и генеральный директор).`,
        },
      ],
      backBtn: 'На главную',
      privacyBtn: 'Политика конфиденциальности',
    },
    tr: {
      badge: 'RESMİ AVRUPA BANKACILIK ŞARTLARI • SEPA VE PSD2/PSD3 STANDARTLARI',
      title: 'Genel Bankacılık Hizmet Koşulları ve Müşteri Sözleşmesi',
      subheading:
        'Avrupa IBAN hesap tahsisleri, SEPA anlık ödeme ağı işlemleri, banka kartları ve Avrupa Bankacılık Otoritesi (EBA) tüketici hakları düzenlemelerine ilişkin resmi çerçeve sözleşme.',
      lastUpdated: 'Son Hukuki Revizyon: 2026',
      jurisdiction: 'Uygulanacak Hukuk: Avrupa Birliği Finans Direktifleri ve Uluslararası Bankacılık Mevzuatı',
      highlights: [
        {
          icon: <Landmark className="text-amber-400" size={24} />,
          title: 'Özel Avrupa IBAN Hesabı',
          desc: 'Avrupa Ödeme Konseyi (EPC) standartlarında bağımsız uluslararası banka hesap numarası.',
        },
        {
          icon: <CreditCard className="text-amber-400" size={24} />,
          title: 'SEPA Instant Anlık Transfer',
          desc: 'Avrupa Merkez Bankası (ECB) denetiminde 36 SEPA ülkesinde saniyeler içinde takas.',
        },
        {
          icon: <Lock className="text-amber-400" size={24} />,
          title: 'Güçlü Müşteri Kimlik Doğrulaması (SCA)',
          desc: 'PSD2/PSD3 standartlarında iki aşamalı zorunlu kriptografik güvenlik doğrulaması.',
        },
        {
          icon: <Scale className="text-amber-400" size={24} />,
          title: 'Şeffaf Fiyatlandırma Politikası',
          desc: 'Gizli ücret olmaksızın, ECB referans kurlarına dayalı adil döviz dönüşüm oranları.',
        },
      ],
      sections: [
        {
          id: 1,
          title: '1. Sözleşmenin Konusu ve Yasal Çerçeve',
          content: `Bu sözleşme müşteri ile SafiPay Global Financial Technologies arasında bağlayıcıdır. Sunulan tüm dijital bankacılık ve IBAN hizmetleri Avrupa Birliği yönergeleri (PSD2/PSD3) ve EBA standartlarına tabidir.`,
        },
        {
          id: 2,
          title: '2. Yasal Ehliyet, Kimlik Doğrulama (KYC) ve AML Standartları',
          content: `Hizmetlerden 18 yaşını doldurmuş bireyler yararlanabilir. 5AMLD/6AMLD uyarınca geçerli kimlik, ikametgah kanıtı ve biyometrik canlılık doğrulaması zorunludur. Tüm hesaplar AB, BM ve OFAC yaptırım listelerinden taranır.`,
        },
        {
          id: 3,
          title: '3. Avrupa IBAN ve SEPA Transferleri',
          content: `Kullanıcılara Euro ve ana para birimlerinde SEPA ve SEPA Instant ağları üzerinden güvenli transfer yapabilmeleri için özel IBAN tahsis edilir.`,
        },
        {
          id: 4,
          title: '4. Banka Kartları (Visa / Mastercard)',
          content: `Kartlar PCI-DSS Seviye 1 güvenlik standardına uygundur. Kart sahibi PIN ve şifrelerini korumakla yükümlüdür ve kayıp durumunda derhal kartını kilitlemelidir.`,
        },
        {
          id: 5,
          title: '5. Hesap Güvenliği ve SCA Doğrulaması',
          content: `Tüm finansal işlemlerde PSD2 Madde 97 gereği iki bağımsız faktörlü Güçlü Müşteri Kimlik Doğrulaması (SCA) zorunludur. Kodların üçüncü şahıslarla paylaşılması yasaktır.`,
        },
        {
          id: 6,
          title: '6. Yasaklı Faaliyetler',
          content: `Kara para aklama, terörizmin finansmanı veya uluslararası yaptırımları delme amaçlı hesap kullanımı kesinlikle yasaktır ve hesap anında bloke edilir.`,
        },
        {
          id: 7,
          title: '7. Ücretler ve Döviz Kurları',
          content: `Tüm işlem ücretleri onay öncesinde açıkça gösterilir. Döviz dönüşümleri Avrupa Merkez Bankası gösterge kurlarına göre gerçekleştirilir.`,
        },
        {
          id: 8,
          title: '8. Askıya Alma ve Hesap Kapatma',
          content: `SafiPay, güvenlik şüphesi veya yasal zorunluluk halinde hesabı dondurabilir. Müşteri yükümlülüklerini tamamlayarak istediği zaman hesabını kapatabilir.`,
        },
        {
          id: 9,
          title: '9. Uyuşmazlık Çözümü ve Avrupa Finansal Ombudsmanı',
          content: `Şikayetler 15 iş günü içinde yazılı olarak yanıtlanır. Müşteri, Avrupa Çevrimiçi Uyuşmazlık Çözümü (ODR) platformuna veya Finansal Ombudsman’a başvurma hakkına sahiptir.`,
        },
        {
          id: 10,
          title: '10. İletişim Bilgileri',
          content: `WhatsApp: +447476620282 | E-posta: legal@safipay.net | Yönetim: Shaheen Safi (Direktör ve Kurucu).`,
        },
      ],
      backBtn: 'Ana Sayfaya Dön',
      privacyBtn: 'Gizlilik Politikasını Oku',
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
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
            <Landmark size={15} />
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

        {/* 4 European Standards Highlights Grid */}
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

        {/* Main Terms Sections */}
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
            European Banking Contracts & Regulatory Inquiries
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            For institutional agreements, legal partnerships, or direct communication with the SafiPay executive team:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/447476620282?text=Hello%20SafiPay%20Legal%20%26%20Contracts%20Division"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] text-black font-bold text-sm shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:brightness-110 transition-all"
            >
              <MessageCircle size={18} />
              <span>WhatsApp: +44 747 662 0282</span>
            </a>

            <Link
              href={`/${lang}/privacy`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.04] text-white font-bold text-sm hover:border-amber-500/30 hover:bg-white/[0.08] transition-all"
            >
              <ShieldCheck size={18} />
              <span>{t.privacyBtn}</span>
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
