export type Language = 'en' | 'fa';

export interface Skill {
  name: string;
  level: number;
  category: 'Framework' | 'Language' | 'UI' | 'State' | 'Realtime' | 'Maps' | 'Tools';
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  name: string;
  type: string;
  summary: string;
  impact: string;
  stack: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  align: 'start' | 'end';
  image: string;
  accent: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface ResumeContent {
  ui: {
    brandLabel: string;
    nav: { label: string; href: string }[];
    heroPrimary: string;
    heroSecondary: string;
    themeLight: string;
    themeDark: string;
    themeSwitchLight: string;
    themeSwitchDark: string;
    available: string;
    chip: string;
    backToTop: string;
    footer: string;
    skillAll: string;
    skillCategories: Record<Skill['category'], string>;
  };
  sections: {
    about: { eyebrow: string; title: string; description: string };
    skills: { eyebrow: string; title: string; description: string };
    experience: { eyebrow: string; title: string; description: string };
    projects: { eyebrow: string; title: string; description: string };
    education: { eyebrow: string; title: string; description: string };
    certificates: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string };
  };
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    resumeUrl: string;
    years: string;
    intro: string;
    summary: string;
  };
  heroSlides: HeroSlide[];
  aboutFocus: string[];
  stats: { value: string; label: string }[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: {
    degree: string;
    university: string;
    location: string;
    period: string;
    gpa: string;
    labels: { degree: string; gpa: string; languages: string };
  };
  certificates: string[];
  languages: { name: string; level: string }[];
  contact: { email: string; phone: string; linkedin: string; resume: string; download: string };
}

const sharedSkills: Skill[] = [
  { name: 'Angular', level: 96, category: 'Framework' },
  { name: 'TypeScript', level: 94, category: 'Language' },
  { name: 'RxJS', level: 90, category: 'State' },
  { name: 'Nx Monorepo', level: 88, category: 'Tools' },
  { name: 'Angular Material', level: 88, category: 'UI' },
  { name: 'PrimeNG', level: 86, category: 'UI' },
  { name: 'SCSS', level: 88, category: 'UI' },
  { name: 'Tailwind CSS', level: 80, category: 'UI' },
  { name: 'NgRx', level: 78, category: 'State' },
  { name: 'SignalR', level: 86, category: 'Realtime' },
  { name: 'WebSocket', level: 82, category: 'Realtime' },
  { name: 'GraphQL', level: 76, category: 'Realtime' },
  { name: 'RESTful API', level: 90, category: 'Tools' },
  { name: 'OpenLayers', level: 84, category: 'Maps' },
  { name: 'Leaflet', level: 78, category: 'Maps' },
  { name: 'Highcharts', level: 82, category: 'UI' },
  { name: 'Git / Bitbucket / TFS', level: 86, category: 'Tools' },
  { name: 'Jira', level: 80, category: 'Tools' }
];

const sharedProfile = {
  name: 'Ali Yousefi',
  email: 'aliyosefi.a.29@gmail.com',
  phone: '+98 939 698 5169',
  linkedin: 'https://www.linkedin.com/in/ali-yousefi-02454b224/',
  resumeUrl: 'assets/resume/ali-yousefi-cv-2025.pdf',
  years: '6+'
};

export const RESUME_CONTENT: Record<Language, ResumeContent> = {
  en: {
    ui: {
      brandLabel: 'Ali Yousefi home',
      nav: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ],
      heroPrimary: 'View projects',
      heroSecondary: 'Download resume',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeSwitchLight: 'Switch to light mode',
      themeSwitchDark: 'Switch to dark mode',
      available: 'Available for Angular roles',
      chip: 'Frontend architecture · SaaS · GIS · Realtime',
      backToTop: 'Back to top',
      footer: '© 2026 Ali Yousefi',
      skillAll: 'All',
      skillCategories: {
        Framework: 'Framework',
        Language: 'Language',
        UI: 'UI',
        State: 'State',
        Realtime: 'Realtime',
        Maps: 'Maps',
        Tools: 'Tools'
      }
    },
    sections: {
      about: {
        eyebrow: 'About',
        title: 'Frontend architecture with product sense.',
        description:
          'A senior Angular developer focused on practical systems: fast interfaces, reusable foundations, and workflows that stay clear as products grow.'
      },
      skills: {
        eyebrow: 'Skills',
        title: 'A focused Angular toolkit for scalable products.',
        description:
          'Skill levels are estimated from resume depth, years of production usage, and repeated project exposure.'
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Enterprise Angular work, shipped in production.',
        description:
          'A timeline of product-heavy frontend work across SaaS, GIS, ERP, logistics, and real-time communication.'
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Selected products and systems.',
        description:
          'The resume did not include public GitHub or demo links, so the project cards focus on product impact, domain, and stack.'
      },
      education: {
        eyebrow: 'Education',
        title: 'Computer software engineering foundation.',
        description: 'Formal education paired with practical enterprise Angular delivery.'
      },
      certificates: {
        eyebrow: 'Certificates',
        title: 'Practical credentials from production work.',
        description:
          'The PDF does not list formal certificates, so this section highlights validated professional strengths from the resume.'
      },
      contact: {
        eyebrow: 'Contact',
        title: "Let's build Angular products that hold up.",
        description:
          'Open to challenging Angular roles, product teams, and frontend communities focused on scalable user experiences.'
      }
    },
    profile: {
      ...sharedProfile,
      title: 'Senior Angular Developer',
      location: 'Tehran, Iran',
      intro:
        'Experienced Angular developer specializing in high-performance web applications, GIS platforms, real-time chat, enterprise dashboards, and scalable frontend architecture.',
      summary:
        'I build Angular products that stay maintainable under pressure: reusable UI systems, fast dashboards, real-time communication flows, map-heavy interfaces, and enterprise workflows for finance, logistics, CRM, and building management.'
    },
    heroSlides: [
      {
        eyebrow: 'Senior Angular Developer',
        title: 'Frontend systems that move fast and stay maintainable.',
        description:
          'Angular architecture, reusable UI foundations, realtime product flows, and enterprise dashboards designed for serious production teams.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#5eead4',
        primaryLabel: 'View projects',
        secondaryLabel: 'Download resume'
      },
      {
        eyebrow: 'GIS & Dashboards',
        title: 'Map-heavy interfaces with clear operational insight.',
        description:
          'Interactive GIS workflows, chart-rich dashboards, spatial data collection, and frontend experiences built for scanning and decision-making.',
        align: 'end',
        image: 'assets/images/hero-abstract.png',
        accent: '#f5c46b',
        primaryLabel: 'Explore experience',
        secondaryLabel: 'Contact me'
      },
      {
        eyebrow: 'Realtime SaaS',
        title: 'Realtime messaging, payments, and enterprise workflows.',
        description:
          'SignalR, WebSocket, RxJS, and scalable Angular patterns powering products like building management, ERP, logistics, and communication systems.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#22d3ee',
        primaryLabel: 'See skills',
        secondaryLabel: 'Get in touch'
      }
    ],
    aboutFocus: ['Enterprise Angular', 'Realtime UX', 'GIS dashboards', 'Design systems'],
    stats: [
      { value: '6+', label: 'Years of frontend experience' },
      { value: '50k+', label: 'Buildings served by SharjBook' },
      { value: '95%', label: 'Reported issue reduction in tested Angular flows' },
      { value: '50%', label: 'Performance gain from Angular migration' }
    ],
    skills: sharedSkills,
    experiences: [
      {
        company: 'Shayegan Tadbir Parsian',
        location: 'Tehran, Iran',
        role: 'Senior Angular Developer',
        period: '2022 - Present',
        highlights: [
          'Developed and maintained SharjBook, a building charge management platform serving more than 50,000 buildings.',
          'Designed and implemented an online chat and integrated messaging system using SignalR and real-time communication patterns.',
          'Built management workflows for apartment requests, resident bills, online charge payments, communal areas, and building operations.',
          'Contributed to Momiiz enterprise modules including sales, CRM, HR, payroll, accounting, treasury, inventory, procurement, and production planning.',
          'Developed transportation and online delivery management capabilities with tracking, optimized routes, and customer-driver communication.',
          'Migrated a complex Angular 8 application to Angular 16, improving performance by 50% and raising maintainability.'
        ]
      },
      {
        company: 'RASAD',
        location: 'Tehran, Iran',
        role: 'Mid-level Angular Developer',
        period: '2019 - 2022',
        highlights: [
          'Implemented GIS data visualization modules with Highcharts to support spatial decision-making.',
          'Led a collaborative GIS data collection module inspired by Git-based workflows and task ownership.',
          'Implemented secure token storage and cross-tab token sharing using a master-slave method.',
          'Applied Atomic Design to improve UI reusability, responsiveness, consistency, and delivery speed.',
          'Collaborated on a Google Drive-like file storage module for efficient file management and team workflows.',
          'Added multi-language support for three languages with NGX-Translate and built customizable Angular Material themes.',
          'Optimized applications with lazy loading, state management, testing, debugging, and mentoring practices.'
        ]
      }
    ],
    projects: [
      {
        name: 'SharjBook',
        type: 'Building management SaaS',
        summary:
          'A large-scale Angular platform for building charges, resident bills, online payments, requests, messaging, and operational workflows.',
        impact: 'Used across more than 50,000 buildings.',
        stack: ['Angular', 'Nx', 'SignalR', 'PrimeNG', 'RxJS', 'SCSS']
      },
      {
        name: 'Real-time Chat & Messaging',
        type: 'Communication platform',
        summary:
          'An integrated messaging system for residents and building managers with real-time delivery, conversations, and operational notifications.',
        impact: 'Improved communication speed and reduced friction between residents and management.',
        stack: ['Angular', 'SignalR', 'WebSocket', 'RxJS', 'TypeScript']
      },
      {
        name: 'GIS Platform',
        type: 'Spatial data product',
        summary:
          'Interactive GIS visualization and data collection modules with map workflows, chart reports, and collaborative task ownership.',
        impact: 'Helped teams collect, enrich, and analyze spatial data more efficiently.',
        stack: ['Angular', 'OpenLayers', 'Leaflet', 'Highcharts', 'Angular Material']
      },
      {
        name: 'Momiiz Comprehensive Software',
        type: 'Enterprise ERP modules',
        summary:
          'Integrated enterprise modules across sales, CRM, HR, payroll, accounting, budgeting, inventory, procurement, production, and treasury.',
        impact: 'Improved data flow between departments and streamlined business operations.',
        stack: ['Angular', 'TypeScript', 'REST API', 'Enterprise UI']
      },
      {
        name: 'Transport & Delivery System',
        type: 'Logistics product',
        summary:
          'A delivery management system with route optimization, tracking, and seamless customer-driver communication.',
        impact: 'Increased visibility and efficiency across delivery operations.',
        stack: ['Angular', 'Maps', 'REST API', 'Realtime']
      },
      {
        name: 'Drive-like File Storage',
        type: 'Productivity module',
        summary:
          'A file management module inspired by Google Drive, focused on storage, productivity, and workflow collaboration.',
        impact: 'Improved file organization and team productivity.',
        stack: ['Angular', 'Atomic Design', 'Angular Material', 'REST API']
      }
    ],
    education: {
      degree: 'Bachelor of Computer - Software Engineering',
      university: 'Azad University',
      location: 'Hamadan, Iran',
      period: '2015 - 2019',
      gpa: '16',
      labels: { degree: 'Degree', gpa: 'GPA', languages: 'Languages' }
    },
    certificates: [
      '6+ years of production Angular development',
      'Enterprise frontend architecture and reusable UI systems',
      'GIS, maps, and data visualization experience',
      'Realtime communication with SignalR and WebSocket',
      'Performance-focused Angular migration and optimization'
    ],
    languages: [
      { name: 'Persian', level: 'Mother tongue' },
      { name: 'English', level: 'Advanced' }
    ],
    contact: { email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', resume: 'Resume', download: 'Download PDF' }
  },
  fa: {
    ui: {
      brandLabel: 'خانه علی یوسفی',
      nav: [
        { label: 'درباره من', href: '#about' },
        { label: 'مهارت‌ها', href: '#skills' },
        { label: 'سوابق کاری', href: '#experience' },
        { label: 'پروژه‌ها', href: '#projects' },
        { label: 'تماس', href: '#contact' }
      ],
      heroPrimary: 'مشاهده پروژه‌ها',
      heroSecondary: 'دانلود رزومه',
      themeLight: 'روشن',
      themeDark: 'تیره',
      themeSwitchLight: 'تغییر به حالت روشن',
      themeSwitchDark: 'تغییر به حالت تیره',
      available: 'آماده همکاری در نقش‌های Angular',
      chip: 'معماری فرانت‌اند · SaaS · GIS · بلادرنگ',
      backToTop: 'بازگشت به بالا',
      footer: '© ۲۰۲۶ علی یوسفی',
      skillAll: 'همه',
      skillCategories: {
        Framework: 'فریم‌ورک',
        Language: 'زبان',
        UI: 'رابط کاربری',
        State: 'مدیریت وضعیت',
        Realtime: 'بلادرنگ',
        Maps: 'نقشه',
        Tools: 'ابزارها'
      }
    },
    sections: {
      about: {
        eyebrow: 'درباره من',
        title: 'معماری فرانت‌اند همراه با نگاه محصولی.',
        description:
          'توسعه‌دهنده ارشد Angular با تمرکز روی سیستم‌های کاربردی، رابط‌های سریع، پایه‌های قابل استفاده مجدد و جریان‌هایی که با رشد محصول شفاف می‌مانند.'
      },
      skills: {
        eyebrow: 'مهارت‌ها',
        title: 'جعبه‌ابزار Angular برای ساخت محصول‌های مقیاس‌پذیر.',
        description:
          'سطح مهارت‌ها بر اساس عمق رزومه، سال‌های استفاده در محیط واقعی و تکرار در پروژه‌های مختلف برآورد شده است.'
      },
      experience: {
        eyebrow: 'سوابق کاری',
        title: 'تجربه Angular سازمانی در محصول‌های واقعی.',
        description:
          'مروری بر تجربه‌های فرانت‌اند در SaaS، GIS، ERP، لجستیک و ارتباطات بلادرنگ.'
      },
      projects: {
        eyebrow: 'پروژه‌ها',
        title: 'نمونه‌ای از محصول‌ها و سیستم‌های منتخب.',
        description:
          'در رزومه لینک عمومی GitHub یا Demo وجود نداشت؛ بنابراین کارت‌ها روی اثر محصول، دامنه و تکنولوژی تمرکز دارند.'
      },
      education: {
        eyebrow: 'تحصیلات',
        title: 'پایه علمی مهندسی نرم‌افزار.',
        description: 'تحصیلات دانشگاهی در کنار تجربه عملی در توسعه Angular سازمانی.'
      },
      certificates: {
        eyebrow: 'گواهی‌ها',
        title: 'اعتبارهای عملی از تجربه تولید.',
        description:
          'در PDF گواهی رسمی ذکر نشده، بنابراین این بخش توانمندی‌های تاییدشده از دل رزومه را نمایش می‌دهد.'
      },
      contact: {
        eyebrow: 'تماس',
        title: 'بیایید محصول‌های Angular پایدار بسازیم.',
        description:
          'آماده همکاری در نقش‌های چالش‌برانگیز Angular، تیم‌های محصول و جامعه‌های فرانت‌اند با تمرکز بر تجربه کاربری مقیاس‌پذیر.'
      }
    },
    profile: {
      ...sharedProfile,
      name: 'علی یوسفی',
      title: 'توسعه‌دهنده ارشد Angular',
      location: 'تهران، ایران',
      intro:
        'توسعه‌دهنده Angular با تجربه در ساخت وب‌اپلیکیشن‌های پرفورمنس‌محور، پلتفرم‌های GIS، چت بلادرنگ، داشبوردهای سازمانی و معماری فرانت‌اند مقیاس‌پذیر.',
      summary:
        'من محصول‌های Angular می‌سازم که زیر فشار رشد هم قابل نگهداری بمانند: سیستم‌های UI قابل استفاده مجدد، داشبوردهای سریع، جریان‌های ارتباطی بلادرنگ، رابط‌های نقشه‌محور و فرایندهای سازمانی برای مالی، لجستیک، CRM و مدیریت ساختمان.'
    },
    heroSlides: [
      {
        eyebrow: 'توسعه‌دهنده ارشد Angular',
        title: 'سیستم‌های فرانت‌اندی که سریع حرکت می‌کنند و قابل نگهداری می‌مانند.',
        description:
          'معماری Angular، پایه‌های UI قابل استفاده مجدد، جریان‌های محصول بلادرنگ و داشبوردهای سازمانی برای تیم‌های جدی محصول.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#5eead4',
        primaryLabel: 'مشاهده پروژه‌ها',
        secondaryLabel: 'دانلود رزومه'
      },
      {
        eyebrow: 'GIS و داشبورد',
        title: 'رابط‌های نقشه‌محور با بینش عملیاتی شفاف.',
        description:
          'جریان‌های تعاملی GIS، داشبوردهای نموداری، جمع‌آوری داده مکانی و تجربه‌هایی که برای اسکن، تحلیل و تصمیم‌گیری ساخته شده‌اند.',
        align: 'end',
        image: 'assets/images/hero-abstract.png',
        accent: '#f5c46b',
        primaryLabel: 'مشاهده سوابق',
        secondaryLabel: 'تماس با من'
      },
      {
        eyebrow: 'SaaS بلادرنگ',
        title: 'پیام‌رسانی، پرداخت و جریان‌های سازمانی بلادرنگ.',
        description:
          'SignalR، WebSocket، RxJS و الگوهای مقیاس‌پذیر Angular برای محصول‌های مدیریت ساختمان، ERP، لجستیک و ارتباطات.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#22d3ee',
        primaryLabel: 'مشاهده مهارت‌ها',
        secondaryLabel: 'شروع گفتگو'
      }
    ],
    aboutFocus: ['Angular سازمانی', 'تجربه بلادرنگ', 'داشبوردهای GIS', 'سیستم طراحی'],
    stats: [
      { value: '۶+', label: 'سال تجربه فرانت‌اند' },
      { value: '۵۰k+', label: 'ساختمان تحت پوشش شارژبوک' },
      { value: '۹۵٪', label: 'کاهش گزارش‌شده خطا در جریان‌های تست‌شده Angular' },
      { value: '۵۰٪', label: 'بهبود عملکرد پس از مهاجرت Angular' }
    ],
    skills: sharedSkills,
    experiences: [
      {
        company: 'شایگان تدبیر پارسیان',
        location: 'تهران، ایران',
        role: 'توسعه‌دهنده ارشد Angular',
        period: '۲۰۲۲ - اکنون',
        highlights: [
          'توسعه و نگهداری SharjBook، پلتفرم مدیریت شارژ ساختمان با پوشش بیش از ۵۰٬۰۰۰ ساختمان.',
          'طراحی و پیاده‌سازی چت آنلاین و سیستم پیام‌رسان یکپارچه با SignalR و الگوهای ارتباط بلادرنگ.',
          'ساخت جریان‌های مدیریتی برای درخواست‌های واحدها، قبوض ساکنان، پرداخت آنلاین شارژ، مشاعات و عملیات ساختمان.',
          'مشارکت در ماژول‌های سازمانی Momiiz شامل فروش، CRM، منابع انسانی، حقوق و دستمزد، حسابداری، خزانه‌داری، انبار، تدارکات و برنامه‌ریزی تولید.',
          'توسعه قابلیت‌های مدیریت حمل‌ونقل و ارسال آنلاین با رهگیری، مسیرهای بهینه و ارتباط مشتری و راننده.',
          'مهاجرت یک اپلیکیشن پیچیده از Angular 8 به Angular 16 با بهبود ۵۰ درصدی عملکرد و نگهداری‌پذیری.'
        ]
      },
      {
        company: 'RASAD',
        location: 'تهران، ایران',
        role: 'توسعه‌دهنده Angular میدلول',
        period: '۲۰۱۹ - ۲۰۲۲',
        highlights: [
          'پیاده‌سازی ماژول‌های نمایش داده GIS با Highcharts برای پشتیبانی از تصمیم‌گیری مکانی.',
          'هدایت یک ماژول جمع‌آوری داده GIS مشارکتی با الهام از جریان‌های Git و مالکیت تسک.',
          'پیاده‌سازی ذخیره امن توکن و اشتراک توکن بین تب‌ها با روش master-slave.',
          'استفاده از Atomic Design برای بهبود استفاده مجدد، ریسپانسیو بودن، یکپارچگی و سرعت تحویل UI.',
          'همکاری در ماژول مدیریت فایل شبیه Google Drive برای مدیریت بهتر فایل و جریان‌های تیمی.',
          'افزودن پشتیبانی چندزبانه برای سه زبان با NGX-Translate و ساخت تم‌های قابل سفارشی‌سازی Angular Material.',
          'بهینه‌سازی اپلیکیشن‌ها با lazy loading، مدیریت وضعیت، تست، دیباگ و منتورینگ.'
        ]
      }
    ],
    projects: [
      {
        name: 'SharjBook',
        type: 'SaaS مدیریت ساختمان',
        summary:
          'پلتفرم بزرگ Angular برای شارژ ساختمان، قبوض ساکنان، پرداخت آنلاین، درخواست‌ها، پیام‌رسانی و جریان‌های عملیاتی.',
        impact: 'استفاده‌شده در بیش از ۵۰٬۰۰۰ ساختمان.',
        stack: ['Angular', 'Nx', 'SignalR', 'PrimeNG', 'RxJS', 'SCSS']
      },
      {
        name: 'چت و پیام‌رسان بلادرنگ',
        type: 'پلتفرم ارتباطی',
        summary:
          'سیستم پیام‌رسان یکپارچه برای ساکنان و مدیران ساختمان با ارسال بلادرنگ، گفتگوها و اعلان‌های عملیاتی.',
        impact: 'افزایش سرعت ارتباط و کاهش اصطکاک بین ساکنان و مدیریت.',
        stack: ['Angular', 'SignalR', 'WebSocket', 'RxJS', 'TypeScript']
      },
      {
        name: 'پلتفرم GIS',
        type: 'محصول داده مکانی',
        summary:
          'ماژول‌های تعاملی نمایش و جمع‌آوری داده GIS با جریان‌های نقشه، گزارش‌های نموداری و مالکیت مشارکتی تسک‌ها.',
        impact: 'کمک به تیم‌ها برای جمع‌آوری، تکمیل و تحلیل کارآمدتر داده‌های مکانی.',
        stack: ['Angular', 'OpenLayers', 'Leaflet', 'Highcharts', 'Angular Material']
      },
      {
        name: 'نرم‌افزار جامع Momiiz',
        type: 'ماژول‌های ERP سازمانی',
        summary:
          'ماژول‌های یکپارچه سازمانی در فروش، CRM، منابع انسانی، حقوق، حسابداری، بودجه، انبار، تدارکات، تولید و خزانه‌داری.',
        impact: 'بهبود جریان داده بین واحدها و ساده‌سازی عملیات کسب‌وکار.',
        stack: ['Angular', 'TypeScript', 'REST API', 'Enterprise UI']
      },
      {
        name: 'سیستم حمل‌ونقل و ارسال',
        type: 'محصول لجستیک',
        summary:
          'سیستم مدیریت ارسال با بهینه‌سازی مسیر، رهگیری و ارتباط روان بین مشتری و راننده.',
        impact: 'افزایش شفافیت و کارایی در عملیات ارسال.',
        stack: ['Angular', 'Maps', 'REST API', 'Realtime']
      },
      {
        name: 'فضای ذخیره‌سازی شبیه Drive',
        type: 'ماژول بهره‌وری',
        summary:
          'ماژول مدیریت فایل با الهام از Google Drive، متمرکز بر ذخیره‌سازی، بهره‌وری و همکاری تیمی.',
        impact: 'بهبود سازمان‌دهی فایل‌ها و بهره‌وری تیم.',
        stack: ['Angular', 'Atomic Design', 'Angular Material', 'REST API']
      }
    ],
    education: {
      degree: 'کارشناسی کامپیوتر - مهندسی نرم‌افزار',
      university: 'دانشگاه آزاد',
      location: 'همدان، ایران',
      period: '۲۰۱۵ - ۲۰۱۹',
      gpa: '۱۶',
      labels: { degree: 'مدرک', gpa: 'معدل', languages: 'زبان‌ها' }
    },
    certificates: [
      'بیش از ۶ سال توسعه Angular در محیط تولید',
      'معماری فرانت‌اند سازمانی و سیستم‌های UI قابل استفاده مجدد',
      'تجربه GIS، نقشه و مصورسازی داده',
      'ارتباط بلادرنگ با SignalR و WebSocket',
      'مهاجرت و بهینه‌سازی Angular با تمرکز بر عملکرد'
    ],
    languages: [
      { name: 'فارسی', level: 'زبان مادری' },
      { name: 'انگلیسی', level: 'پیشرفته' }
    ],
    contact: { email: 'ایمیل', phone: 'تلفن', linkedin: 'لینکدین', resume: 'رزومه', download: 'دانلود PDF' }
  }
};
