/**
 * PORTFOLIO CONFIGURATION
 * =======================
 * Edit your prices, contact links, external URLs, Formspree endpoint,
 * and testimonials all in one place.
 */

// Helper to determine the Next.js basePath (handles GitHub Pages subfolder deployment)
export const getBasePath = (): string => {
  if (typeof process !== "undefined") {
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
      return process.env.NEXT_PUBLIC_BASE_PATH;
    }
    if (process.env.NODE_ENV === "production") {
      return "/My_portfolio";
    }
  }
  return "";
};

export const SITE_CONFIG = {
  name: "Mehthab N M",
  role: "Software Engineer • Full-Stack & Python Developer",
  url: "https://mehthab7.github.io/My_portfolio/",
  ogImage: "/og-image.png",
  canonicalUrl: "https://mehthab7.github.io/My_portfolio/",
};

/**
 * CONTACT & EXTERNAL LINKS
 * Update your direct details and freelancing platform profiles here.
 */
export const CONTACT_INFO = {
  email: "mehthabnm7@gmail.com",
  phone: "+91 95262 56761",
  phoneRaw: "919526256761",
  location: "Kochi, Kerala, India",

  // GitHub & LinkedIn
  githubUrl: "https://github.com/MEHTHAB7",
  linkedinUrl: "https://www.linkedin.com/in/mehthab-n-m-637611344",

  // Freelance Profiles
  fiverrUrl: "https://www.fiverr.com/mehthabnm",

  // WhatsApp link with pre-filled message
  whatsappUrl:
    "https://wa.me/919526256761?text=Hi%20Mehthab%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.",

  // Resume file location in /public directory
  resumePath: "/resume.pdf",

  // Timezone and international business hours overlap
  timezone: "IST (UTC +05:30) • Flexible overlap with US, UK & Gulf business hours",
};

/**
 * FREELANCE SERVICES & PRICING
 * ============================
 * Easily edit starting prices, titles, descriptions, and deliverables below.
 */
export interface ServiceItem {
  id: string;
  title: string;
  iconName: "Globe" | "Layers" | "Cpu" | "Bot" | "BarChart3" | "Wrench" | "Video" | "FileText";
  startingPrice: string; // Starting prices in USD ($)
  description: string;
  deliverables: [string, string, string];
  projectType: string; // Maps directly to Contact Form dropdown options
}

export const SERVICES_PRICE_DISCLAIMER =
  "Final price depends on features and timeline";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business & Portfolio Websites",
    iconName: "Globe",
    startingPrice: "$99",
    description: "Custom design, mobile-friendly, SEO basics and deployment.",
    deliverables: [
      "Custom responsive design tailored to your brand",
      "Mobile-friendly layout with fast loading speed",
      "SEO basics setup and deployment on Vercel/Netlify",
    ],
    projectType: "Business/Portfolio Website",
  },
  {
    id: "fullstack-web-apps",
    title: "Full-Stack Web Apps (Django/FastAPI + React)",
    iconName: "Layers",
    startingPrice: "$399",
    description: "Auth and user roles, database design, admin dashboard.",
    deliverables: [
      "Secure authentication, JWT & granular user roles (RBAC)",
      "Robust PostgreSQL/MySQL database schema design",
      "Interactive React/Next.js UI & custom admin dashboard",
    ],
    projectType: "Full-Stack Web App",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    iconName: "Video",
    startingPrice: "$49",
    description: "Professional cuts, color grading, sound design & social media reels.",
    deliverables: [
      "Dynamic cuts, pacing, smooth transitions & motion graphics",
      "Color grading, audio balancing, sound effects & subtitles",
      "High-resolution exports optimized for YouTube, Reels & Shorts",
    ],
    projectType: "Video Editing",
  },
  {
    id: "resume-making",
    title: "Resume Making",
    iconName: "FileText",
    startingPrice: "$39",
    description: "ATS-optimized resumes, modern clean designs & tailored cover letters.",
    deliverables: [
      "ATS-friendly formatting, keyword optimization & layout",
      "Impactful bullet points highlighting achievements & skills",
      "Print-ready PDF with editable source file (Docs / Word)",
    ],
    projectType: "Resume Making",
  },
  {
    id: "data-analysis-dashboards",
    title: "Data Analysis & Dashboards",
    iconName: "BarChart3",
    startingPrice: "$179",
    description: "Data cleaning with Pandas, ML models, Tableau/web dashboards.",
    deliverables: [
      "Data wrangling, cleaning & exploratory analysis with Pandas/NumPy",
      "Predictive machine learning models (Scikit-Learn classification/regression)",
      "Interactive data visualizations in Tableau or bespoke web dashboards",
    ],
    projectType: "Data Analysis & Dashboards",
  },
  {
    id: "bug-fixes-deployment",
    title: "Bug Fixes & Deployment",
    iconName: "Wrench",
    startingPrice: "$49",
    description: "Debugging, Docker setup, Render/Netlify deployment.",
    deliverables: [
      "Deep root-cause debugging & error fixes in Python/JavaScript",
      "Docker containerization (Dockerfile & docker-compose)",
      "Production deployment configuration on Render, Netlify, or Vercel",
    ],
    projectType: "Bug Fixes & Deployment",
  },
];

/**
 * CLIENT TESTIMONIALS
 * ===================
 * Edit testimonials here. If you clear this array (i.e. set to []),
 * the Testimonials section will automatically hide from the website.
 */
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Noorjahan N K",
    role: "Interior Designer",
    company: "Noorjahan Interior Design",
    quote:
      "Mehthab designed and delivered a beautiful, modern portfolio website for my interior design work. The project showcase, smooth animations, and mobile experience were executed perfectly. Highly recommended!",
    rating: 5,
  },
];
