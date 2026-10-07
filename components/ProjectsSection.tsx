"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  HeartHandshake,
  Brain,
  Ship,
  Palette,
  Users,
  Smartphone,
  Eye,
  Radio,
} from "lucide-react";
import ProjectModal, { ProjectItem } from "./ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";

const projectsData: ProjectItem[] = [
  {
    id: "campyteq",
    title: "CampyTeq – Unified Multi-College Digital Ecosystem",
    category: "Multi-Tenant Enterprise SaaS",
    badge: "ACTIVE BUILD • ONGOING",
    isFlagship: true,
    status: "ongoing",
    period: "Ongoing • In Active Development",
    roleOrTeam: "Lead System Architect & Full-Stack Developer",
    description:
      "Enterprise-grade higher education digital operating system uniting administrative governance, dual attendance, fee invoicing, biometric & edge CCTV safety tracking, and explainable AI student risk analysis across 12 institutional roles.",
    fullOverview:
      "CampyTeq is an enterprise-scale multi-college digital operating system engineered to eliminate siloed institutional tools across governance, academics, examinations, and campus safety.\n\nBuilt with strict row-level multi-tenancy isolation (TenantModel strictly bound to college UUID), it powers 12 granular institutional roles (Super Admin, Principal, Trustees, HOD, Faculty Mentors, Instructors, Bursar, Students, Parents, Security, Print Shop, and Library) with 23 tailored Next.js 14 dashboard workflows. Backed by Django 5.1 REST Framework, PostgreSQL 16, and Redis, it integrates high-throughput Edge Computer Vision camera ingestion for student zone telemetry, an Explainable AI early warning radar for academic failure risks, and an automated campus print kiosk queue with 4-digit PIN verification.",
    tech: [
      "Next.js 14",
      "Django 5.1",
      "DRF",
      "TypeScript",
      "PostgreSQL 16",
      "Redis 7",
      "React Native / Expo 51",
      "OpenCV / YOLO",
      "Tailwind CSS",
      "Docker Compose",
    ],
    keyHighlights: [
      "Strict multi-tenant row-level database isolation with verified X-College-ID administrative context switching",
      "12 granular institutional RBAC roles with 23 dedicated dashboard workflows and single-click demo role switching",
      "Edge Computer Vision RTSP camera ingestion (OpenCV/YOLO) for student presence detection, zone telemetry, and audit logs",
      "Explainable AI Academic Early Warning Radar analyzing attendance (<75%), test marks (<40%), and submissions",
      "Dual attendance engine with statutory 75% defaulters radar and faculty biometric timesheet logging",
      "Campus fast-print kiosk queue with instant cost estimation and 4-digit PIN verification",
    ],
    githubUrl: "https://github.com/MEHTHAB7/CampyTeq",
  },
  {
    id: "quicktask",
    title: "QuickTask – AI-Powered Task & Productivity Platform",
    category: "Enterprise Full-Stack Platform",
    badge: "PRODUCTION LIVE • COMPLETED",
    isFlagship: true,
    status: "completed",
    period: "Completed • Production Verified",
    roleOrTeam: "Lead Full-Stack & ML Architect",
    description:
      "Consolidates task management, daily attendance, real-time WebSocket team chat, and predictive AI productivity scoring into an end-to-end enterprise platform with automated vector PDF audit reporting.",
    fullOverview:
      "QuickTask is an asynchronous, layered client-server enterprise platform engineered to eliminate workplace fragmentation across task delegation, HR attendance, team chat, and retrospective performance audits.\n\nBuilt with React 19, Tailwind CSS v4, FastAPI, and Scikit-Learn, it features real-time duplex WebSockets for team messaging, automated vector PDF executive reporting via ReportLab, and a machine learning engine that forecasts employee efficiency trajectories from velocity ratio, deadline pressure, and attendance consistency to trigger proactive At-Risk warnings before deadlines slip.",
    tech: [
      "React 19",
      "FastAPI",
      "Python",
      "Scikit-Learn",
      "Tailwind CSS v4",
      "WebSockets",
      "ReportLab PDF",
      "SQLite",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    keyHighlights: [
      "Scikit-Learn regression engine evaluating velocity ratio, deadline pressure, and attendance to surface proactive At-Risk warnings",
      "Native FastAPI bi-directional WebSockets delivering low-latency real-time duplex team messaging without third-party services",
      "Interactive Kanban task state machine (Pending → In Progress → Completed) with priority flags and role-based assignment",
      "Daily attendance check-in/out engine tracking active hours and validating continuity against absentee logging",
      "Automated vector PDF executive summaries and productivity reports compiled programmatically via ReportLab",
      "Automated GitHub Actions CI/CD pipeline compiling production Vite builds with deep-link SPA routing on GitHub Pages",
    ],
    githubUrl: "https://github.com/MEHTHAB7/QUICK_TASK",
    liveUrl: "https://mehthab7.github.io/QUICK_TASK/login",
  },
  {
    id: "zynkarashift",
    title: "ZynkaraShift – Self-Hosted PaaS",
    category: "Self-Hosted Platform-as-a-Service",
    badge: "CV SPOTLIGHT • FLAGSHIP",
    isFlagship: true,
    status: "completed",
    period: "Jun 2026 – Jul 2026",
    roleOrTeam: "Lead Architect & Developer",
    description:
      "Designed and built a zero-cost PaaS that deploys web applications directly from GitHub repositories or Docker images, featuring an AI-driven deployment copilot, custom multi-tenancy routing, and container orchestration.",
    fullOverview:
      "ZynkaraShift is a complete self-hosted Platform-as-a-Service engineered to eliminate high cloud hosting fees. It deploys web applications directly from GitHub repositories or Docker images, featuring custom multi-tenancy reverse proxy routing, container orchestration, and an AI-driven deployment copilot that inspects build logs in real time to diagnose errors.",
    tech: ["Node.js", "Docker", "GitHub", "Reverse Proxy", "Multi-Tenancy", "Container Orchestration", "AI Copilot"],
    keyHighlights: [
      "Zero-cost PaaS deploying web apps directly from GitHub repos or Docker images",
      "AI-driven deployment copilot diagnosing build failures from real-time log streams",
      "Custom multi-tenancy routing engine with automated reverse proxy & domain mapping",
      "Container lifecycle orchestration and automated environment isolation",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Zynkara_Shift",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection System",
    category: "Machine Learning & Web API",
    badge: "CV SPOTLIGHT • LIVE ON RENDER",
    status: "completed",
    period: "Academic Project • Team Lead",
    roleOrTeam: "Team Lead (4 engineers)",
    description:
      "Directed a 4-member team to construct a machine-learning fraud detection system with balanced dataset training, deployed live on Render with interactive prediction APIs.",
    fullOverview:
      "Directed a 4-member academic machine learning engineering squad to construct an intelligent fraud detection system. Handled dataset balancing, classification model training, and integration into a Python/Flask web application backed by MongoDB, deployed live on Render for real-time risk assessment.",
    tech: ["Python", "Flask", "Scikit-Learn", "Render", "MongoDB", "HTML5", "CSS3", "Machine Learning"],
    keyHighlights: [
      "Directed a 4-member team through full ML lifecycle, code reviews, and testing",
      "Developed high-precision machine learning classification model for fraudulent transactions",
      "Built responsive Python/Flask REST application interfacing with MongoDB",
      "Deployed live on Render with active transaction risk scoring endpoints",
    ],
    githubUrl: "https://github.com/MEHTHAB7/credit_card_fraud_detection",
    liveUrl: "https://credit-card-fraud-detection-1-41ac.onrender.com/",
  },
  {
    id: "interior-showcase",
    title: "Interior Design Showcase (Noorjahan)",
    category: "Design Portfolio & Client Build",
    badge: "LIVE ON NETLIFY • CLIENT BUILD",
    status: "completed",
    period: "Client Project",
    roleOrTeam: "Frontend Engineer",
    description:
      "Aesthetic, image-rich portfolio web application engineered for an interior designer featuring spatial project showcases, live on Netlify.",
    fullOverview:
      "Custom web experience designed and deployed for Noorjahan Interior Designer. Focuses on architectural spatial showcases, interactive before-and-after concepts, inquiry pipelines, and high-performance fluid galleries deployed live on Netlify.",
    tech: ["React", "Next.js", "Netlify", "Framer Motion", "Tailwind CSS", "UX Design"],
    keyHighlights: [
      "Spatial project image lightboxes with custom gesture navigation",
      "Interactive design concept before-and-after image slider",
      "Bespoke dark glassmorphism layout tailored for high-end aesthetic",
      "Production deployed on Netlify with automated CI/CD and mobile optimization",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Web-Page-App",
    liveUrl: "https://noorjahan-interior-designer.netlify.app/",
  },
  {
    id: "tictactoe-mobile",
    title: "Tic Tac Toe – Interactive AI Game",
    category: "Web & Mobile Game • Minimax AI",
    badge: "LIVE WEB DEMO • MINIMAX AI",
    status: "completed",
    period: "Interactive Game Project",
    roleOrTeam: "Full-Stack & Game Developer",
    description:
      "Interactive game featuring Minimax algorithm for unbeatable single-player AI, local multiplayer mode, and smooth particle transitions deployed live.",
    fullOverview:
      "Interactive game built with responsive touch feedback, single-player vs Minimax AI mode, local 2-player mode, and celebratory particle animations. Deployed live on Tiiny for instant web and mobile play.",
    tech: ["JavaScript", "HTML5", "CSS3", "Minimax Algorithm", "Mobile UX", "Tiiny Host"],
    keyHighlights: [
      "Minimax algorithm for unbeatably smart AI opponent mode",
      "60fps touch haptics and particle effect transitions",
      "Local multi-player game session state persistent store",
      "Deployed live on Tiiny for instant browser and mobile device testing",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Tic_Tac_Toe",
    liveUrl: "https://tictac2oe.tiiny.site/",
  },
  {
    id: "task-management-system",
    title: "Role-Based Task Management System",
    category: "Hackathon Project • Team Lead",
    badge: "CV SPOTLIGHT • 7 ENGINEERS",
    status: "completed",
    period: "Hackathon Project",
    roleOrTeam: "Team Lead (7 engineers)",
    description:
      "Led a 7-member team to design, build, and deploy a role-based task management platform with authentication and automated task workflows, owning UI/UX and backend integration.",
    fullOverview:
      "Engineered during a high-stakes hackathon, leading a 7-member developer team. Delivered a production-ready role-based task coordination system with strict permission boundaries, automated task status transitions, email notifications, and an intuitive UI backed by PHP and SQL.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP", "Team Leadership"],
    keyHighlights: [
      "Led 7-member team to design, build, and deploy the platform under hackathon deadlines",
      "Owned end-to-end UI/UX architecture and responsive interface design",
      "Built role-based access control (RBAC) with secure session authentication",
      "Implemented automated task workflows, status tracking, and backend SQL integration",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Task_Management_App",
  },
  {
    id: "zynkaraauth",
    title: "ZynkaraAuth – Centralized Identity Engine",
    category: "Authentication Platform",
    badge: "SECURITY ENGINE • ONGOING",
    status: "ongoing",
    period: "Ongoing • In Active Development",
    roleOrTeam: "Backend Engineer",
    description:
      "Centralized identity and authentication engine managing secure user sessions, OAuth integrations, and JWT verification.",
    fullOverview:
      "ZynkaraAuth provides a robust, enterprise-grade identity layer across distributed applications. Built with TypeScript and Redis, it handles secure token rotation, OAuth2 provider handshakes, rate limiting, and encrypted session storage.",
    tech: ["TypeScript", "OAuth2", "JWT", "Redis", "Security"],
    keyHighlights: [
      "Cryptographic JWT issuance and sliding session renewal",
      "OAuth2 social logins (GitHub, Google, custom OIDC)",
      "High-speed Redis cache for token revocation lists",
      "Role-Based Access Control (RBAC) middleware",
    ],
    githubUrl: "https://github.com/MEHTHAB7/SecureAuth",
  },
  {
    id: "wedding-platform",
    title: "Wedding Company Platform",
    category: "Commercial Client Build",
    badge: "PRODUCTION BUILD",
    status: "completed",
    period: "Client Project",
    roleOrTeam: "Full-Stack Developer",
    description:
      "Production application for a client featuring media galleries, booking workflows, and responsive high-performance UI.",
    fullOverview:
      "A high-traffic commercial web platform crafted for a premier wedding event firm. Features immersive fluid galleries, event package configurators, responsive booking workflows, and optimized media delivery.",
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    keyHighlights: [
      "Ultra-responsive media gallery with lazy-loaded high-res imagery",
      "Interactive event booking & inquiry calendar pipeline",
      "Custom layout animations with Framer Motion",
      "100/100 Lighthouse performance and SEO score",
    ],
    githubUrl: "https://github.com/MEHTHAB7/wedding_company",
  },
  {
    id: "ocean-voyage",
    title: "Ocean Voyage – Maritime Logistics",
    category: "ICT & Royal Caribbean Hackathon",
    badge: "HACKATHON BUILD",
    status: "completed",
    period: "24h Hackathon",
    roleOrTeam: "Full-Stack Developer",
    description:
      "Interactive maritime management system developed for high-stakes competition challenges with vessel routing analytics.",
    fullOverview:
      "Engineered during the ICT Academy & Royal Caribbean national hackathon. Combines real-time vessel tracking, route optimization algorithms, fuel consumption analytics, and interactive dashboard maps.",
    tech: ["Python", "React", "REST APIs", "Data Visualization"],
    keyHighlights: [
      "Interactive maritime route planning visualization",
      "Fuel consumption telemetry analytics model",
      "Developed under strict 24-hour hackathon constraints",
      "High-praise UI & data presentation from industry judges",
    ],
    githubUrl: "https://github.com/MEHTHAB7/cruise_booking",
  },
];

const categoryFilters = [
  { id: "all", label: "All Projects (10)" },
  { id: "flagship", label: "Flagships & SaaS" },
  { id: "live", label: "Live Deployed" },
  { id: "ai", label: "AI & ML Systems" },
  { id: "cv", label: "CV Resume Spotlights" },
  { id: "team", label: "Team Lead & Hackathons" },
  { id: "client", label: "Client & Commercial" },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "flagship") return project.isFlagship;
    if (selectedFilter === "live") return Boolean(project.liveUrl);
    if (selectedFilter === "cv") return project.badge?.includes("CV SPOTLIGHT");
    if (selectedFilter === "team")
      return (
        project.category.includes("Team Lead") ||
        project.category.includes("Hackathon") ||
        project.roleOrTeam?.includes("Team Lead")
      );
    if (selectedFilter === "ai")
      return (
        project.category.includes("AI") ||
        project.category.includes("ML") ||
        project.tech.some((t) => t.includes("AI") || t.includes("Scikit") || t.includes("ML") || t.includes("Vision"))
      );
    if (selectedFilter === "client")
      return (
        project.category.includes("Client") ||
        project.category.includes("Design") ||
        project.category.includes("Commercial")
      );
    return true;
  });

  const getProjectIcon = (category: string) => {
    if (category.includes("PaaS")) return Sparkles;
    if (category.includes("Authentication")) return Shield;
    if (category.includes("Client")) return HeartHandshake;
    if (category.includes("ML") || category.includes("AI")) return Brain;
    if (category.includes("Hackathon") && !category.includes("Lead")) return Ship;
    if (category.includes("Design")) return Palette;
    if (category.includes("Team Lead")) return Users;
    if (category.includes("Mobile") || category.includes("Game")) return Smartphone;
    if (category.includes("Enterprise") || category.includes("SaaS")) return Layers;
    return Code2;
  };

  return (
    <section id="projects" className="relative py-28 bg-zinc-950/80">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Engineering Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Production Projects & <span className="text-gradient-indigo">Engineering Builds</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Explore 10 showcase projects spanning enterprise multi-tenant systems, AI-driven automation, self-hosted PaaS, production commercial builds, and team-led hackathon systems.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categoryFilters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Uniform Grid - All Cards Same View */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const IconComp = getProjectIcon(project.category);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl glass-card p-6 border border-white/10 glass-card-hover flex flex-col justify-between cursor-pointer overflow-hidden h-full"
                  onClick={() => setActiveModalProject(project)}
                >
                  {/* Subtle Card Glow Header */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

                  <div className="flex flex-col">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:text-cyan-400 group-hover:border-indigo-500/40 transition-colors shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider truncate">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.status === "ongoing" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                            </span>
                            Ongoing
                          </span>
                        ) : project.liveUrl ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            Live
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <div className="flex items-start justify-between gap-2 mb-2 min-h-[3.25rem]">
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400 shrink-0 mt-0.5" />
                    </div>

                    {/* Short Description */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-3 min-h-[4rem]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col mt-auto">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 min-h-[3rem] content-start">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-zinc-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5 text-indigo-400 group-hover:text-cyan-300 transition-colors font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600/80 to-cyan-600/80 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold shadow-md shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all text-xs"
                            title="Open Live Deployment"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl || "https://github.com/MEHTHAB7"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
