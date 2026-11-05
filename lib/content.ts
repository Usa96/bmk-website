export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

// Figures in [brackets] are placeholders — replace with approved numbers before launch.
export type Fund = {
  slug: string;
  name: Record<Locale, string>;
  type: "money-market" | "equity" | "ipo";
  shariah: boolean;
  currency: "SAR";
  nav: string;
  risk: string;
  change: string;
  asOf: string;
};

export const funds: Fund[] = [
  { slug: "murabaha", name: { en: "BMK Murabaha Money Market Fund", ar: "صندوق بيت المال الخليجي للمرابحة وأسواق النقد" }, type: "money-market", shariah: true, currency: "SAR", nav: "[NAV]", risk: "[Risk]", change: "[%]", asOf: "[DATE]" },
  { slug: "saudi-equity", name: { en: "BMK Saudi Equity Fund", ar: "صندوق بيت المال الخليجي للأسهم السعودية" }, type: "equity", shariah: true, currency: "SAR", nav: "[NAV]", risk: "[Risk]", change: "[%]", asOf: "[DATE]" },
  { slug: "freestyle", name: { en: "BMK Saudi Freestyle Equity Fund", ar: "صندوق بيت المال الخليجي المرن للأسهم السعودية" }, type: "equity", shariah: true, currency: "SAR", nav: "[NAV]", risk: "[Risk]", change: "[%]", asOf: "[DATE]" },
  { slug: "gcc-equity", name: { en: "Elite House GCC Equity Fund", ar: "صندوق إيليت هاوس للأسهم الخليجية" }, type: "equity", shariah: true, currency: "SAR", nav: "[NAV]", risk: "[Risk]", change: "[%]", asOf: "[DATE]" },
  { slug: "ipo", name: { en: "BMK IPO Fund", ar: "صندوق بيت المال الخليجي للطروحات الأولية" }, type: "ipo", shariah: true, currency: "SAR", nav: "[NAV]", risk: "[Risk]", change: "[%]", asOf: "[DATE]" },
];

const en = {
  dir: "ltr" as "ltr" | "rtl",
  other: { code: "ar" as Locale, label: "العربية" },
  brand: { name: "Bait Al Mal Al Khaleeji", short: "BMK" },
  util: { awareness: "Investor awareness", complaints: "Complaints", disclosures: "Disclosures", login: "Client login" },
  nav: [
    { href: "/funds", label: "Funds" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About BMK" },
    { href: "/disclosures", label: "Disclosures" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ],
  openAccount: "Open account",
  menu: "Menu",
  hero: {
    eyebrow: "Licensed by the Capital Market Authority",
    title: "Shariah-compliant investing, managed with care",
    body: "Bait Al Mal Al Khaleeji manages mutual funds and client portfolios for individuals and institutions in Saudi Arabia.",
    primary: "Explore funds",
    secondary: "Open an account",
  },
  quick: [
    { href: "/funds", title: "Our funds", sub: "Compare all funds" },
    { href: "/funds#nav", title: "Latest prices", sub: "Daily unit prices" },
    { href: "/open-account", title: "Open account", sub: "Online with Nafath" },
    { href: "/disclosures", title: "Disclosures", sub: "Reports and statements" },
    { href: "/investor-awareness#complaints", title: "Complaints", sub: "Raise a complaint" },
  ],
  stats: {
    title: "BMK at a glance",
    items: [
      { value: "[SAR __ m]", label: "Assets under management" },
      { value: "[__]", label: "Funds managed" },
      { value: "[____]", label: "Licensed since" },
    ],
    asOf: "As of [DATE]",
  },
  navTable: {
    title: "Latest fund prices",
    sub: "Unit prices are published after each valuation day.",
    cols: { fund: "Fund", type: "Type", price: "Unit price (SAR)", change: "Change", date: "Valuation date" },
    types: { "money-market": "Money market", equity: "Equity", ipo: "IPO" },
    all: "View all funds",
    shariah: "Shariah compliant",
  },
  categories: {
    title: "Ways to invest",
    items: [
      { title: "Mutual funds", body: "Public funds across money market, Saudi equities, GCC equities and IPOs.", href: "/funds" },
      { title: "Real estate funds", body: "Funds investing in income-generating property in the Kingdom.", href: "/funds?type=real-estate" },
      { title: "Portfolio management", body: "Discretionary portfolios built around your goals and risk profile.", href: "/services/portfolio-management" },
    ],
    cta: "Learn more",
  },
  disclosures: {
    title: "Disclosures and reports",
    sub: "We publish what the CMA requires, and keep it easy to find.",
    items: [
      { title: "Financial statements", meta: "Audited · [YEAR]" },
      { title: "Fund reports", meta: "Quarterly · [QUARTER]" },
      { title: "Board report", meta: "Annual · [YEAR]" },
    ],
    all: "Open the library",
  },
  news: {
    title: "News and announcements",
    items: [
      { type: "Announcement", date: "[DATE]", title: "[Announcement headline]" },
      { type: "News", date: "[DATE]", title: "[News headline]" },
      { type: "Research", date: "[DATE]", title: "[Research title]" },
    ],
    all: "All news",
  },
  band: {
    title: "Open your investment account online",
    body: "Verify your identity with Nafath and complete your profile in minutes. Corporate and non-resident clients can apply with our team.",
    primary: "Start now",
    secondary: "Talk to us",
  },
  footer: {
    cols: [
      { title: "Invest", links: [["Funds", "/funds"], ["Services", "/services"], ["Open account", "/open-account"]] },
      { title: "Company", links: [["About BMK", "/about"], ["Leadership", "/about/leadership"], ["Governance", "/about/governance"], ["Careers", "/careers"]] },
      { title: "Investors", links: [["Disclosures", "/disclosures"], ["Investor awareness", "/investor-awareness"], ["Complaints", "/investor-awareness#complaints"]] },
      { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"]] },
    ],
    licence: "Licensed by the Capital Market Authority, licence no. [__-___]. Commercial registration no. [__________].",
    risk: "Investing in funds carries risk. The value of units and the income from them can fall as well as rise, and past performance does not guarantee future results. Read the fund terms and conditions before investing.",
    rights: "© 2026 Bait Al Mal Al Khaleeji. All rights reserved.",
  },
};

export type Dict = typeof en;

const ar: Dict = {
  dir: "rtl",
  other: { code: "en", label: "English" },
  brand: { name: "بيت المال الخليجي", short: "BMK" },
  util: { awareness: "توعية المستثمر", complaints: "الشكاوى", disclosures: "الإفصاحات", login: "دخول العملاء" },
  nav: [
    { href: "/funds", label: "الصناديق" },
    { href: "/services", label: "الخدمات" },
    { href: "/about", label: "عن الشركة" },
    { href: "/disclosures", label: "الإفصاحات" },
    { href: "/media", label: "المركز الإعلامي" },
    { href: "/contact", label: "اتصل بنا" },
  ],
  openAccount: "افتح حساباً",
  menu: "القائمة",
  hero: {
    eyebrow: "مرخصة من هيئة السوق المالية",
    title: "استثمار متوافق مع الشريعة، بإدارة واعية",
    body: "تدير شركة بيت المال الخليجي صناديق استثمارية ومحافظ للأفراد والمؤسسات في المملكة العربية السعودية.",
    primary: "استعرض الصناديق",
    secondary: "افتح حساباً",
  },
  quick: [
    { href: "/funds", title: "صناديقنا", sub: "قارن جميع الصناديق" },
    { href: "/funds#nav", title: "آخر الأسعار", sub: "أسعار الوحدات اليومية" },
    { href: "/open-account", title: "افتح حساباً", sub: "إلكترونياً عبر نفاذ" },
    { href: "/disclosures", title: "الإفصاحات", sub: "التقارير والقوائم" },
    { href: "/investor-awareness#complaints", title: "الشكاوى", sub: "تقديم شكوى" },
  ],
  stats: {
    title: "بيت المال الخليجي في أرقام",
    items: [
      { value: "[__ مليون ريال]", label: "الأصول المدارة" },
      { value: "[__]", label: "الصناديق المدارة" },
      { value: "[____]", label: "مرخصة منذ" },
    ],
    asOf: "كما في [التاريخ]",
  },
  navTable: {
    title: "آخر أسعار الصناديق",
    sub: "تُنشر أسعار الوحدات بعد كل يوم تقويم.",
    cols: { fund: "الصندوق", type: "النوع", price: "سعر الوحدة (ريال)", change: "التغير", date: "تاريخ التقويم" },
    types: { "money-market": "أسواق النقد", equity: "أسهم", ipo: "طروحات أولية" },
    all: "عرض جميع الصناديق",
    shariah: "متوافق مع الشريعة",
  },
  categories: {
    title: "طرق الاستثمار",
    items: [
      { title: "الصناديق الاستثمارية", body: "صناديق عامة في أسواق النقد والأسهم السعودية والخليجية والطروحات الأولية.", href: "/funds" },
      { title: "الصناديق العقارية", body: "صناديق تستثمر في عقارات مدرة للدخل داخل المملكة.", href: "/funds?type=real-estate" },
      { title: "إدارة المحافظ", body: "محافظ اختيارية تُبنى حول أهدافك ومستوى المخاطر المناسب لك.", href: "/services/portfolio-management" },
    ],
    cta: "اعرف المزيد",
  },
  disclosures: {
    title: "الإفصاحات والتقارير",
    sub: "ننشر ما تتطلبه هيئة السوق المالية، ونجعله سهل الوصول.",
    items: [
      { title: "القوائم المالية", meta: "مدققة · [السنة]" },
      { title: "تقارير الصناديق", meta: "ربع سنوية · [الربع]" },
      { title: "تقرير مجلس الإدارة", meta: "سنوي · [السنة]" },
    ],
    all: "افتح المكتبة",
  },
  news: {
    title: "الأخبار والإعلانات",
    items: [
      { type: "إعلان", date: "[التاريخ]", title: "[عنوان الإعلان]" },
      { type: "خبر", date: "[التاريخ]", title: "[عنوان الخبر]" },
      { type: "أبحاث", date: "[التاريخ]", title: "[عنوان البحث]" },
    ],
    all: "جميع الأخبار",
  },
  band: {
    title: "افتح حسابك الاستثماري إلكترونياً",
    body: "وثّق هويتك عبر نفاذ وأكمل ملفك خلال دقائق. يمكن للشركات وغير المقيمين التقديم عبر فريقنا.",
    primary: "ابدأ الآن",
    secondary: "تواصل معنا",
  },
  footer: {
    cols: [
      { title: "استثمر", links: [["الصناديق", "/funds"], ["الخدمات", "/services"], ["افتح حساباً", "/open-account"]] },
      { title: "الشركة", links: [["عن الشركة", "/about"], ["القيادة", "/about/leadership"], ["الحوكمة", "/about/governance"], ["الوظائف", "/careers"]] },
      { title: "المستثمرون", links: [["الإفصاحات", "/disclosures"], ["توعية المستثمر", "/investor-awareness"], ["الشكاوى", "/investor-awareness#complaints"]] },
      { title: "قانوني", links: [["الخصوصية", "/privacy"], ["الشروط", "/terms"], ["ملفات تعريف الارتباط", "/cookies"]] },
    ],
    licence: "مرخصة من هيئة السوق المالية بترخيص رقم [__-___]. سجل تجاري رقم [__________].",
    risk: "ينطوي الاستثمار في الصناديق على مخاطر، وقد تنخفض قيمة الوحدات والدخل منها أو ترتفع، والأداء السابق لا يضمن النتائج المستقبلية. يرجى قراءة شروط وأحكام الصندوق قبل الاستثمار.",
    rights: "© 2026 بيت المال الخليجي. جميع الحقوق محفوظة.",
  },
};

export const dicts: Record<Locale, Dict> = { en, ar };
