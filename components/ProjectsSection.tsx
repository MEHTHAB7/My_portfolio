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
} from "lucide-react";
import ProjectModal, { ProjectItem } from "./ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";

const projectsData: ProjectItem[] = [
  {
    id: "zynkarashift",
    title: "Zynkarashift",
    category: "Self-Hosted PaaS",
    badge: "FLAGSHIP PLATFORM",
    isFlagship: true,
    description:
      "Zero-cost PaaS deploying web apps directly from GitHub repos or Docker containers with multi-tenancy routing & AI deployment copilot.",
    fullOverview:
      "Zynkarashift is a complete self-hosted Platform-as-a-Service engineered to bypass high cloud hosting fees. It features dynamic reverse proxy routing, multi-tenant container isolation, automated SSL via Let's Encrypt, and an AI-driven deployment copilot that inspects build logs to automatically diagnose deployment failures.",
    tech: ["Node.js", "Docker", "CI/CD Pipelines", "GitHub Actions", "Tailwind"],
    keyHighlights: [
      "Zero-downtime container deployments via Docker API",
      "Automated CI/CD build pipeline & GitHub webhook log streaming",
      "Multi-tenant reverse proxy routing with custom domains",
      "AI Copilot diagnosing build failures in real time",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Zynkara_Shift",
  },
  {
    id: "zynkaraauth",
    title: "ZynkaraAuth",
    category: "Authentication Platform",
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
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "ML Lead Project (4 Engineers)",
    description:
      "Machine learning pipeline analyzing transaction streams in real time to detect anomalous and fraudulent patterns.",
    fullOverview:
      "Led a 4-member machine learning engineering team to build a predictive fraud detection engine. Trained on imbalanced transaction data using SMOTE techniques, Random Forest, and XGBoost classification models.",
    tech: ["Python", "MongoDB", "Scikit-Learn", "Pandas", "ML Classification"],
    keyHighlights: [
      "SMOTE oversampling for highly imbalanced dataset handling",
      "Real-time transaction anomaly scoring REST service",
      "Led 4 ML engineers through feature engineering & cross-validation",
      "Precision-Recall optimization achieving 98.4% ROC-AUC score",
    ],
    githubUrl: "https://github.com/MEHTHAB7/credit_card_fraud_detection",
  },
  {
    id: "ocean-voyage",
    title: "Ocean Voyage",
    category: "ICT & Royal Caribbean Hackathon",
    description:
      "Interactive maritime management system developed for high-stakes competition challenges.",
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
  {
    id: "interior-showcase",
    title: "Interior Design Showcase",
    category: "Design Portfolio Site",
    description:
      "Aesthetic, image-rich portfolio web app engineered for an interior designer featuring spatial project showcases.",
    fullOverview:
      "Custom web experience for a commercial interior design client. Focuses on architectural spatial showcases, interactive before-and-after sliders, client inquiry forms, and elegant typography.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "UX Design"],
    keyHighlights: [
      "Spatial project image lightboxes with custom gesture navigation",
      "Interactive design concept before-and-after image slider",
      "Bespoke dark glassmorphism layout tailored for high-end aesthetic",
      "Mobile-optimized fluid touch gestures",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Web-Page-App",
  },
  {
    id: "task-sync",
    title: "Role-Based Task Sync",
    category: "Team Lead - Hackathon (7 Engineers)",
    description:
      "Led a 7-member engineering team to design and build a role-based task management system with automated workflows.",
    fullOverview:
      "Spearheaded a 7-member engineering squad to create a enterprise task coordination app. Built with PHP and SQL backend, featuring role hierarchy delegation, task status state machines, and email notification webhooks.",
    tech: ["PHP", "SQL", "JavaScript", "XAMPP", "Team Lead"],
    keyHighlights: [
      "Led 7-member developer team from architectural specs to demo",
      "Strict role-based permission hierarchy & task status pipelines",
      "Automated email notification triggers and task deadline alerts",
      "Optimized MySQL relational schema for high concurrency",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Task_Management_App",
  },
  {
    id: "tictactoe-mobile",
    title: "Tic Tac Toe Mobile",
    category: "Mobile App Game",
    description:
      "Cross-platform mobile application game featuring custom UI transitions and game loop state management.",
    fullOverview:
      "A cross-platform mobile game built with Flutter and React Native principles. Features smooth touch feedback, single-player vs Minimax AI mode, local 2-player mode, and custom particle victory animations.",
    tech: ["Flutter", "React Native", "Mobile UX", "State Management"],
    keyHighlights: [
      "Minimax algorithm for unbeatably smart AI opponent mode",
      "60fps touch haptics and particle effect transitions",
      "Local multi-player game session state persistent store",
      "Clean modular cross-platform architecture",
    ],
    githubUrl: "https://github.com/MEHTHAB7/Tic_Tac_Toe",
  },
];

const categoryFilters = [
  { id: "all", label: "All Projects" },
  { id: "paas", label: "PaaS & Auth" },
  { id: "client", label: "Client Builds" },
  { id: "ai", label: "AI & ML" },
  { id: "team", label: "Team Lead & Apps" },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "paas") return project.category.includes("PaaS") || project.category.includes("Authentication");
    if (selectedFilter === "client") return project.category.includes("Client");
    if (selectedFilter === "ai") return project.category.includes("ML") || project.category.includes("Hackathon");
    if (selectedFilter === "team") return project.category.includes("Team Lead") || project.category.includes("Mobile");
    return true;
  });

  const getProjectIcon = (category: string) => {
    if (category.includes("PaaS")) return Sparkles;
    if (category.includes("Authentication")) return Shield;
    if (category.includes("Client")) return HeartHandshake;
    if (category.includes("ML")) return Brain;
    if (category.includes("Hackathon") && !category.includes("Lead")) return Ship;
    if (category.includes("Design")) return Palette;
    if (category.includes("Team Lead")) return Users;
    if (category.includes("Mobile")) return Smartphone;
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
            <span>Featured Portfolio & Client Work</span>
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
            Explore 8 key showcase projects spanning self-hosted cloud infrastructure, AI models, production commercial builds, and team-led hackathon systems.
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

        {/* Responsive Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const IconComp = getProjectIcon(project.category);
              const isLarge = project.isFlagship;

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
                  className={`group relative rounded-3xl glass-card p-6 border border-white/10 glass-card-hover flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isLarge ? "lg:col-span-2 bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-zinc-950/80 border-indigo-500/30" : ""
                  }`}
                  onClick={() => setActiveModalProject(project)}
                >
                  {/* Subtle Card Glow Header */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:text-cyan-400 group-hover:border-indigo-500/40 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {project.badge && (
                        <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-[10px] font-extrabold uppercase tracking-wider">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                    </h3>

                    {/* Short Description */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300 group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-medium">
                      <span className="flex items-center gap-1.5 text-indigo-400 group-hover:text-cyan-300 transition-colors font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Architectural Details</span>
                      </span>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl || "https://github.com/MEHTHAB7"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                            title="Live Preview"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
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
