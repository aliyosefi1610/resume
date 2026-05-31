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
        title: 'توسعه فرانت‌اند با تمرکز بر معماری نرم‌افزار و تجربه کاربری',
        description:
            'توسعه‌دهنده ارشد Angular با بیش از ۶ سال تجربه در طراحی و توسعه سامانه‌های تحت وب، پلتفرم‌های سازمانی و محصولات مقیاس‌پذیر. تمرکز من بر ایجاد معماری‌های قابل نگهداری، رابط‌های کاربری کارآمد و راهکارهایی است که با رشد کسب‌وکار همچنان پایدار و توسعه‌پذیر باقی بمانند.'
      },

      skills: {
        eyebrow: 'مهارت‌ها',
        title: 'فناوری‌ها، ابزارها و تخصص‌های کلیدی',
        description:
            'مجموعه‌ای از فناوری‌ها، ابزارها و الگوهای معماری که در توسعه محصولات سازمانی، سامانه‌های بلادرنگ و پروژه‌های مقیاس‌پذیر به‌صورت عملی از آن‌ها استفاده کرده‌ام.'
      },

      experience: {
        eyebrow: 'سوابق حرفه‌ای',
        title: 'تجربه توسعه و ارائه محصولات در مقیاس سازمانی',
        description:
            'بیش از شش سال تجربه در طراحی، توسعه و نگهداری سامانه‌های SaaS، ERP، GIS، لجستیک و پلتفرم‌های ارتباطی بلادرنگ با تمرکز بر کیفیت، عملکرد و تجربه کاربری.'
      },

      projects: {
        eyebrow: 'پروژه‌ها',
        title: 'نمونه‌ای از محصولات و راهکارهای توسعه‌یافته',
        description:
            'مروری بر پروژه‌های شاخص، دستاوردهای فنی و تأثیرات کسب‌وکاری حاصل از توسعه سامانه‌های سازمانی و محصولات دیجیتال.'
      },

      education: {
        eyebrow: 'تحصیلات',
        title: 'پیش‌زمینه علمی و تخصصی',
        description:
            'دانش آکادمیک مهندسی نرم‌افزار در کنار تجربه عملی توسعه و نگهداری سامانه‌های پیچیده و مقیاس‌پذیر.'
      },

      certificates: {
        eyebrow: 'تخصص‌ها',
        title: 'توانمندی‌ها و دستاوردهای حرفه‌ای',
        description:
            'خلاصه‌ای از مهارت‌ها، تجربیات و تخصص‌هایی که در پروژه‌های واقعی و محیط‌های عملیاتی به دست آورده و به‌کار گرفته‌ام.'
      },

      contact: {
        eyebrow: 'ارتباط با من',
        title: 'آماده همکاری در پروژه‌ها و فرصت‌های حرفه‌ای',
        description:
            'برای همکاری در توسعه محصولات نرم‌افزاری، فرصت‌های شغلی، مشاوره فنی یا تبادل دانش در حوزه Angular و Frontend Engineering می‌توانید با من در ارتباط باشید.'
      }
    },
    profile: {
      ...sharedProfile,
      name: 'علی یوسفی',
      title: 'توسعه‌دهنده ارشد Angular',
      location: 'تهران، ایران',
      intro:
          'Senior Frontend Engineer و متخصص Angular با بیش از ۶ سال تجربه در طراحی، توسعه و بهینه‌سازی سامانه‌های سازمانی، محصولات SaaS، پلتفرم‌های GIS و اپلیکیشن‌های بلادرنگ.',
      summary:
          'متخصص در طراحی معماری‌های مقیاس‌پذیر Angular، توسعه رابط‌های کاربری مدرن و ساخت محصولاتی که با رشد کسب‌وکار همچنان پایدار، قابل نگهداری و توسعه‌پذیر باقی می‌مانند. تجربه کاری من شامل توسعه داشبوردهای سازمانی، سیستم‌های نقشه‌محور، ارتباطات بلادرنگ، ERP، CRM، لجستیک و راهکارهای مدیریت ساختمان است.'
    },
    heroSlides: [
      {
        eyebrow: 'Senior Frontend Engineer',
        title: 'طراحی و توسعه سامانه‌های فرانت‌اند مقیاس‌پذیر',
        description:
            'توسعه معماری Angular، طراحی کامپوننت‌های قابل استفاده مجدد و ساخت محصولات سازمانی با تمرکز بر عملکرد، کیفیت و نگهداری‌پذیری.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#5eead4',
        primaryLabel: 'مشاهده پروژه‌ها',
        secondaryLabel: 'دانلود رزومه'
      },
      {
        eyebrow: 'GIS & Data Visualization',
        title: 'راهکارهای نقشه‌محور و تحلیل داده',
        description:
            'طراحی و توسعه سامانه‌های GIS، مصورسازی داده‌های مکانی و داشبوردهای تحلیلی برای پشتیبانی از تصمیم‌گیری و مدیریت عملیات.',
        align: 'end',
        image: 'assets/images/hero-abstract.png',
        accent: '#f5c46b',
        primaryLabel: 'مشاهده سوابق',
        secondaryLabel: 'تماس با من'
      },
      {
        eyebrow: 'Realtime Applications',
        title: 'ارتباطات بلادرنگ و سامانه‌های سازمانی',
        description:
            'پیاده‌سازی سیستم‌های پیام‌رسانی، اعلان‌های لحظه‌ای و فرایندهای سازمانی با استفاده از SignalR، WebSocket و الگوهای مدرن Angular.',
        align: 'start',
        image: 'assets/images/hero-abstract.png',
        accent: '#22d3ee',
        primaryLabel: 'مشاهده مهارت‌ها',
        secondaryLabel: 'شروع همکاری'
      }
    ],
    aboutFocus: [
      'Angular',
      'Frontend Architecture',
      'Enterprise Software',
      'Realtime Applications',
      'GIS Platforms',
      'Design Systems'
    ],
    stats: [
      {
        value: '۶+',
        label: 'سال تجربه توسعه فرانت‌اند'
      },
      {
        value: '۵۰٬۰۰۰+',
        label: 'کاربر و واحد تحت پوشش محصولات توسعه‌یافته'
      },
      {
        value: 'Angular 8 → 16',
        label: 'تجربه مهاجرت و نوسازی سامانه‌های بزرگ'
      },
      {
        value: 'ERP • GIS • SaaS',
        label: 'حوزه‌های تخصصی'
      }
    ],
    skills: sharedSkills,
    experiences: [
      {
        company: 'شایگان تدبیر پارسیان',
        location: 'تهران، ایران',
        role: 'توسعه‌دهنده ارشد Angular',
        period: '۱۴۰۱ - تاکنون',
        highlights: [
          'تمرکز اصلی روی توسعه Angular در حوزه مدیریت شارژ آپارتمان و طراحی تجربه‌های کاربری سریع، مقیاس‌پذیر و قابل نگهداری.',
          'طراحی و پیاده‌سازی قابلیت چت آنلاین و پیام‌رسانی درون‌برنامه‌ای برای ساده‌سازی ارتباط میان ساکنان، کاربران و مدیران ساختمان.',
          'توسعه و نگهداری نرم‌افزار SharjBook، سامانه مدیریت شارژ ساختمان با بیش از ۵۰٬۰۰۰ ساختمان تحت پوشش، شامل مشاهده قبوض ساکنان، پرداخت آنلاین شارژ و فرایندهای مالی ساختمان.',
          'پیاده‌سازی سیستم پیام‌رسان یکپارچه با استفاده از SignalR، WebSocket و الگوهای ارتباط بلادرنگ برای بهبود سرعت ارتباط و تجربه کاربری.',
          'طراحی و توسعه ماژول‌های مدیریت درخواست‌های آپارتمان، مدیریت مشاعات، فضاهای اشتراکی و فرایندهای عملیاتی ساختمان برای بهینه‌سازی منابع و عملیات.',
          'مشارکت در توسعه و یکپارچه‌سازی نرم‌افزار جامع سازمانی Momiiz شامل سیستم فروش، CRM، منابع انسانی و حقوق و دستمزد، مالی، بودجه‌بندی، بهای تمام‌شده، انبار، تدارکات، برنامه‌ریزی تولید و خزانه‌داری.',
          'توسعه سامانه مدیریت حمل‌ونقل و ارسال آنلاین با قابلیت رهگیری لحظه‌ای، بهینه‌سازی مسیرها و ارتباط یکپارچه میان مشتریان و رانندگان.',
          'مهاجرت موفق یک اپلیکیشن پیچیده از Angular 8 به Angular 16 با بهبود حدود ۵۰٪ در عملکرد، پایداری و نگهداری‌پذیری پروژه.'
        ]
      },
      {
        company: 'رصد',
        location: 'تهران، ایران',
        role: 'توسعه‌دهنده Angular',
        period: '۱۳۹۸ - ۱۴۰۱',
        highlights: [
          'پیاده‌سازی ماژول‌های تعاملی GIS و مصورسازی داده‌های مکانی با استفاده از Highcharts برای تحلیل بهتر داده‌ها و پشتیبانی از تصمیم‌گیری.',
          'هدایت توسعه ماژول جمع‌آوری مشارکتی داده‌های مکانی با الهام از Git، شامل تخصیص وظایف به کاربران، تعیین محدوده مسئولیت و تکمیل لایه‌های اطلاعات مکانی.',
          'پیاده‌سازی مکانیزم‌های امنیتی برای نگهداری امن توکن در Session Storage و اشتراک‌گذاری کنترل‌شده توکن بین تب‌های مرورگر با روش master-slave.',
          'استفاده از متدولوژی Atomic Design برای افزایش قابلیت استفاده مجدد، ریسپانسیو بودن، یکپارچگی UI و بهبود سرعت توسعه.',
          'همکاری در توسعه ماژول مدیریت فایل مشابه Google Drive برای ذخیره‌سازی، مدیریت، سازمان‌دهی و همکاری تیمی روی فایل‌ها.',
          'پیاده‌سازی پشتیبانی چندزبانه برای سه زبان با استفاده از NGX-Translate و توسعه تم‌های قابل سفارشی‌سازی مبتنی بر Angular Material.',
          'توسعه وب‌اپلیکیشن‌های پویا با Angular و همکاری با تیم‌های مختلف برای طراحی و پیاده‌سازی APIهای RESTful و بهبود دریافت و مدیریت داده.',
          'بهینه‌سازی عملکرد پروژه‌ها از طریق Lazy Loading، مدیریت وضعیت، تست، دیباگ و کاهش چشمگیر خطاهای گزارش‌شده کاربران.',
          'منتورینگ توسعه‌دهندگان junior در بهترین روش‌های Angular برای بهبود کیفیت کد و افزایش بهره‌وری تیم.'
        ]
      }
    ],

    projects: [
      {
        name: 'SharjBook',
        type: 'پلتفرم مدیریت ساختمان',
        summary:
            'سامانه جامع مدیریت ساختمان، شارژ، قبوض، پرداخت آنلاین، درخواست‌ها و ارتباطات میان ساکنان و مدیران.',
        impact:
            'بیش از ۵۰٬۰۰۰ ساختمان از این سامانه برای مدیریت امور مالی و عملیاتی استفاده می‌کنند.',
        stack: ['Angular', 'Nx', 'SignalR', 'PrimeNG', 'RxJS', 'SCSS']
      },
      {
        name: 'سیستم پیام‌رسان بلادرنگ',
        type: 'پلتفرم ارتباطی',
        summary:
            'پیاده‌سازی زیرساخت ارتباطی و چت آنلاین برای ارسال پیام، اعلان‌ها و ارتباط لحظه‌ای کاربران.',
        impact:
            'بهبود سرعت ارتباطات و افزایش تعامل کاربران در بستر سامانه.',
        stack: ['Angular', 'SignalR', 'WebSocket', 'RxJS', 'TypeScript']
      },
      {
        name: 'پلتفرم GIS',
        type: 'سامانه داده‌های مکانی',
        summary:
            'توسعه ابزارهای نمایش، جمع‌آوری و تحلیل داده‌های مکانی همراه با داشبوردهای تحلیلی.',
        impact:
            'افزایش دقت و سرعت تحلیل داده‌های مکانی برای کاربران سازمانی.',
        stack: ['Angular', 'OpenLayers', 'Leaflet', 'Highcharts', 'Angular Material']
      },
      {
        name: 'Momiiz ERP',
        type: 'نرم‌افزار جامع سازمانی',
        summary:
            'توسعه و یکپارچه‌سازی ماژول‌های سازمانی شامل فروش، مالی، منابع انسانی، انبار و تولید.',
        impact:
            'بهبود فرایندهای سازمانی و تسهیل تبادل اطلاعات میان واحدهای مختلف.',
        stack: ['Angular', 'TypeScript', 'REST API', 'Enterprise UI']
      },
      {
        name: 'سامانه حمل‌ونقل و ارسال',
        type: 'راهکار لجستیک',
        summary:
            'مدیریت فرایندهای ارسال، رهگیری سفارش‌ها و ارتباط میان مشتریان و رانندگان.',
        impact:
            'افزایش شفافیت و بهره‌وری در مدیریت عملیات لجستیکی.',
        stack: ['Angular', 'Maps', 'REST API', 'Realtime']
      },
      {
        name: 'سامانه مدیریت فایل',
        type: 'راهکار بهره‌وری سازمانی',
        summary:
            'سامانه ذخیره‌سازی، مدیریت و اشتراک‌گذاری فایل‌ها با الهام از Google Drive.',
        impact:
            'بهبود همکاری تیمی و دسترسی سازمان‌یافته به اسناد و فایل‌ها.',
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
