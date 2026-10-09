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
  iconName: "Globe" | "Layers" | "Cpu" | "Bot" | "BarChart3" | "Wrench";
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
    id: "rest-api-development",
    title: "REST API Development",
    iconName: "Cpu",
    startingPrice: "$199",
    description: "API design, JWT auth, Postman docs.",
    deliverables: [
      "RESTful architecture engineered in FastAPI / Django / Flask",
      "JWT authentication, rate-limiting & validation schemas",
      "Comprehensive Postman collection & Swagger/OpenAPI docs",
    ],
    projectType: "REST API Development",
  },
  {
    id: "ai-automation",
    title: "AI & Automation Integration",
    iconName: "Bot",
    startingPrice: "$249",
    description: "Chatbot or AI assistant, prompt design, workflow automation.",
    deliverables: [
      "Custom AI chatbot or intelligent assistant integration",
      "Prompt design, context retrieval & fine-tuned system instructions",
      "Automated business workflows & third-party API webhooks",
    ],
    projectType: "AI & Automation Integration",
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
    name: "Alex Morgan",
    role: "Founder & Product Lead",
    company: "TechLaunch Studio",
    quote:
      "Mehthab delivered our full-stack web application ahead of schedule. The code quality, database design, and responsiveness were exceptional. Great communicator who takes real ownership.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Dr. Sarah Chen",
    role: "Engineering Director",
    company: "NextGen Innovations",
    quote:
      "Worked with Mehthab on an API and automated data pipeline project. His Python and FastAPI skills are top notch, and the documentation provided made handoff completely seamless.",
    rating: 5,
  },
];
