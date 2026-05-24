import { 
  Code2, 
  Layout, 
  Server, 
  Smartphone, 
  Globe, 
  Database,
  Camera,
  Mail,
  MessageSquare,
  Send,
  PenTool,
  Cpu
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Sutan Irvan Aziz",
  role: "Fullstack Developer",
  email: "irvansutnn789@gmail.com",
  whatsapp: "6285191742647",
  instagram: "https://www.instagram.com/sutnn_/",
  github: "https://github.com/sutan789",
  bio: "Seorang Fullstack Developer yang berdedikasi untuk menciptakan solusi digital inovatif. Berpengalaman dalam membangun aplikasi web yang skalabel dan efisien, menggabungkan estetika desain dengan fungsionalitas backend yang kuat untuk membantu bisnis bertransformasi di era digital.",
  stats: {
    projects: "5+",
    experience: "2+",
    clients: "4+"
  }
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Membangun website modern, responsif, dan performa tinggi menggunakan teknologi terbaru.",
    icon: Globe,
    color: "purple"
  },
  {
    title: "UI/UX Design",
    description: "Menciptakan antarmuka pengguna yang intuitif dan pengalaman visual yang memukau.",
    icon: PenTool,
    color: "cyan"
  },
  {
    title: "Frontend Development",
    description: "Implementasi desain menjadi kode yang bersih dengan framework modern seperti React dan Next.js.",
    icon: Layout,
    color: "pink"
  },
  {
    title: "Backend Development",
    description: "Membangun sistem server-side yang aman, cepat, dan terintegrasi dengan database.",
    icon: Server,
    color: "blue"
  },
  {
    title: "Database Management",
    description: "Optimasi dan manajemen data menggunakan berbagai sistem database SQL maupun NoSQL.",
    icon: Database,
    color: "indigo"
  },
  {
    title: "IT Support & Admin",
    description: "Solusi administrasi IT, pemeliharaan sistem, dan manajemen infrastruktur digital.",
    icon: Cpu,
    color: "violet"
  }
];

export const SKILLS = [
  { name: "PHP & Laravel", level: 100 },
  { name: "Python", level: 100 },
  { name: "Django", level: 100 },
  { name: "Next.js & React", level: 100 },
  { name: "Node.js", level: 100 },
  { name: "HTML/CSS/JS", level: 100 },
  { name: "MySQL & SQLite", level: 100 },
  { name: "MongoDB", level: 100 },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Doocgen Cool",
    category: "Web App",
    logo: "/projects/projectDoocgercool/logoDoocGenCool.png",
    description: "Sistem manajemen slip insentif digital untuk SPPG Kota Banda Aceh. Dibangun dengan Vanilla JavaScript yang dioptimalkan untuk pengolahan data dan laporan Excel.",
    images: [
      "/projects/projectDoocgercool/doocger1.png",
      "/projects/projectDoocgercool/doocger2.png",
      "/projects/projectDoocgercool/doocger3.png"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Excel JS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Portal DPM FH USK",
    category: "Web Design",
    logo: "bootstrap", // Placeholder icon until logo is found
    description: "Portal informasi resmi Dewan Perwakilan Mahasiswa Fakultas Hukum USK. Website multi-halaman yang responsif untuk transparansi kegiatan organisasi.",
    images: [
      "/projects/projects hukum usk/dashboardhukumusk.png",
      "/projects/projects hukum usk/dashboardhukumusk2.png"
    ],
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Cerita Warisan",
    category: "Fullstack Web",
    logo: "/projects/Cerita Warisan/logoceritawarisan.jpg",
    description: "Platform pelestarian budaya nusantara berbasis Python/Django. Mengelola database cerita rakyat secara dinamis dengan sistem manajemen konten yang kuat.",
    images: [
      "/projects/Cerita Warisan/Screenshot 2026-05-06 105553.png",
      "/projects/Cerita Warisan/Screenshot 2026-05-06 105611.png",
      "/projects/Cerita Warisan/Screenshot 2026-05-06 105622.png",
      "/projects/Cerita Warisan/Screenshot 2026-05-06 105631.png",
      "/projects/Cerita Warisan/Screenshot 2026-05-06 105703.png"
    ],
    tags: ["Python", "Django", "SQLite", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "POS SPPG",
    category: "Fullstack Web",
    logo: "laravel",
    description: "Sistem Point of Sale (POS) kustom yang dirancang untuk manajemen inventaris dan transaksi di SPPG Lamara & Lamteumen. Dilengkapi dengan fitur manajemen stok, pelaporan otomatis, dan integrasi database yang aman.",
    images: [
      "/projects/POS SPPG LAMARA DAN LAAMTEUMEN/Screenshot 2026-05-06 122515.png",
      "/projects/POS SPPG LAMARA DAN LAAMTEUMEN/Screenshot 2026-05-06 122759.png",
      "/projects/POS SPPG LAMARA DAN LAAMTEUMEN/Screenshot 2026-05-06 122818.png",
      "/projects/POS SPPG LAMARA DAN LAAMTEUMEN/Screenshot 2026-05-06 122825.png"
    ],
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "ConvertAja",
    category: "Web App",
    logo: "/projects/convertaja/Screenshot 2026-05-24 204517.png",
    description: "Platform serba guna untuk konversi dan pengelolaan dokumen, termasuk fitur pengeditan dan manipulasi PDF dengan antarmuka modern, cepat, dan responsif.",
    images: [
      "/projects/convertaja/Screenshot 2026-05-24 204517.png",
      "/projects/convertaja/Screenshot 2026-05-24 205729.png",
      "/projects/convertaja/Screenshot 2026-05-24 205749.png",
      "/projects/convertaja/Screenshot 2026-05-24 205803.png",
      "/projects/convertaja/Screenshot 2026-05-24 205814.png",
      "/projects/convertaja/Screenshot 2026-05-24 205824.png",
      "/projects/convertaja/Screenshot 2026-05-24 205831.png"
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://convertaja.vercel.app/"
  }
];

export const EXPERIENCE = [
  {
    company: "SPPG Lamara & SPPG Lamteumen",
    role: "Admin IT",
    period: "2025 - Sekarang",
    description: "Bertanggung jawab membangun aplikasi internal yang dibutuhkan instansi, melakukan perekapan data digital, manajemen infrastruktur IT, serta menangani administrasi berbasis teknologi."
  }
];

export const CONTACT_INFO = [
  { name: "GitHub", icon: Code2, href: PERSONAL_INFO.github, color: "white" },
  { name: "Instagram", icon: Camera, href: PERSONAL_INFO.instagram, color: "pink" },
  { name: "WhatsApp", icon: MessageSquare, href: `https://wa.me/${PERSONAL_INFO.whatsapp}`, color: "green" },
  { name: "Email", icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, color: "purple" }
];
export const TESTIMONIALS = [
  {
    name: "Koordinator SPPG",
    role: "SPPG Kota Banda Aceh",
    content: "Sistem manajemen slip insentif yang dibangun Sutan sangat membantu efisiensi kerja kami. Proses perekapan data yang dulunya manual kini menjadi jauh lebih cepat dan akurat.",
    avatar: "/projects/projectDoocgercool/DoocgenCool/asset/BGN_LOGO.png"
  },
  {
    name: "Pengurus DPM FH USK",
    role: "DPM Fakultas Hukum USK",
    content: "Website Portal DPM yang dibuat Sutan sangat representatif dan mudah digunakan. Ini sangat membantu kami dalam memberikan informasi transparan kepada seluruh mahasiswa.",
    avatar: "https://ui-avatars.com/api/?name=DPM+FH+USK&background=06b6d4&color=fff"
  }
];

export const BLOG_POSTS = [
  {
    title: "Membangun Ekosistem Digital di SPPG",
    description: "Bagaimana transformasi digital dapat mempercepat proses administrasi di instansi pendidikan.",
    date: "Mei 2026",
    readTime: "5 min",
    category: "Engineering"
  },
  {
    title: "Optimasi Performa Web dengan Next.js",
    description: "Tips dan trik menggunakan Turbopack dan App Router untuk pengalaman pengguna yang lebih cepat.",
    date: "April 2026",
    readTime: "8 min",
    category: "Development"
  },
  {
    title: "Pentingnya UI/UX di Aplikasi Internal",
    description: "Mengapa desain yang baik sangat krusial bahkan untuk aplikasi yang hanya digunakan internal.",
    date: "Maret 2026",
    readTime: "6 min",
    category: "Design"
  }
];
