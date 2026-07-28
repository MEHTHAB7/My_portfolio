"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Brain,
  Code,
} from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  statusPill: string;
  category: "degree" | "certification";
  description: string[];
  skills: string[];
  highlightBadge?: string;
  credentialId?: string;
}

const educationData: EducationItem[] = [
  {
    id: "hackerrank-frontend-react",
    degree: "HackerRank Certified: Frontend Developer (React)",
    institution: "HackerRank",
    period: "Certified Credential",
    statusPill: "🏆 Verified Role Certification",
    credentialId: "CDA7C4373E05",
    category: "certification",
    highlightBadge: "HackerRank Verified",
    description: [
      "Rigorously benchmarked for production-ready JavaScript performance, modular state management, and component architecture against enterprise standards.",
      "Demonstrated advanced proficiency in React hooks, state flow, DOM optimization, and enterprise component lifecycles.",
    ],
    skills: ["React.js", "JavaScript (ES6+)", "State Management", "Component Architecture", "Performance Optimization"],
  },
  {
    id: "camerin-python-fullstack",
    degree: "Python Full Stack (Django + React + AI)",
    institution: "Camerin Institute of Upskill",
    period: "May 11, 2026 – Present",
    statusPill: "⚡ Currently Pursuing",
    category: "certification",
    highlightBadge: "🤖 Django + React + AI",
    description: [
      "Specializing in Python full-stack engineering with Django backend framework, REST API development, and modern React frontend architectures.",
      "Integrating AI and Machine Learning models into full-stack web applications for intelligent automated features.",
    ],
    skills: ["Python", "Django", "React.js", "AI Integration", "REST APIs", "Full Stack"],
  },
  {
    id: "mca-ignou",
    degree: "Master of Computer Applications (MCA)",
    institution: "IGNOU (Indira Gandhi National Open University)",
    period: "2026 – Present",
    statusPill: "🎓 Currently Pursuing",
    category: "degree",
    highlightBadge: "Master's Degree",
    description: [
      "Enrolled in Master's degree program focusing on advanced software engineering, enterprise systems architecture, database management, and computer science theory.",
    ],
    skills: ["Software Architecture", "Advanced Computer Science", "Database Systems", "System Design"],
  },
  {
    id: "data-science-cert",
    degree: "Certified Specialist in Data Science & Analytics",
    institution: "ICT Academy of Kerala",
    period: "Certified Credential",
    statusPill: "⭐ Score 30/30 (Perfect Distinction)",
    category: "certification",
    highlightBadge: "Perfect 30/30 Distinction",
    description: [
      "Mastered data wrangling, Exploratory Data Analysis (EDA), and machine learning pipelines in Python (Pandas, NumPy, Scikit-Learn).",
      "Achieved a flawless 30/30 distinction score across practical assessments, data modeling assignments, and capstone evaluation.",
      "Designed predictive classification models and interactive data visualization dashboards using Tableau.",
    ],
    skills: ["Python", "Pandas", "Scikit-Learn", "Tableau", "Machine Learning", "EDA"],
  },
  {
    id: "bca-calicut-university",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Nirmala College of Arts and Science (University of Calicut)",
    period: "Degree Completed",
    statusPill: "🎓 Degree Completed",
    category: "degree",
    highlightBadge: "Bachelor's Degree",
    description: [
      "Completed Bachelor of Computer Applications, acquiring core expertise in software engineering, object-oriented programming, data structures, algorithms, and web technologies.",
    ],
    skills: ["Computer Applications", "C/C++", "Java", "Web Technologies", "DBMS", "Data Structures"],
  },
  {
    id: "google-developer-program",
    degree: "Google Developer Program — Premium Tier",
    institution: "Google Developers",
    period: "Jul 2026",
    statusPill: "🌐 Verified Membership",
    category: "degree",
    highlightBadge: "Google Developer Program",
    description: [
      "Completed hands-on technical labs: API Key Management and Security, AI-Assisted Data Science with BigQuery, Firebase Phone Number Verification for Android, and AI Speech Recognition with TensorFlow Lite for Microcontrollers.",
      "Active member of the Google Developer Program, engaging with the latest tools across cloud, AI, and mobile development.",
    ],
    skills: ["Google Cloud", "BigQuery", "Firebase", "TensorFlow Lite", "API Security"],
  },
];

export default function EducationSection() {
  const degrees = educationData.filter((item) => item.category === "degree");
  const certifications = educationData.filter((item) => item.category === "certification");

  return (
    <section id="education" className="relative py-28 bg-zinc-950/90 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient-cyan">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Formal computer science degrees combined with specialized full-stack engineering and AI upskilling programs.
          </motion.p>
        </div>

        {/* 2-Column Grid: Degrees vs Professional Upskilling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Upskilling & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-2 px-1">
              <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Brain className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Specialized Upskilling & Certifications
              </h3>
            </div>

            {certifications.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-3xl glass-card p-6 sm:p-7 border border-white/10 glass-card-hover"
              >
                {/* Header Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.period}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    {item.statusPill}
                  </span>
                </div>

                {/* Title & Institution */}
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h4>
                <div className="text-zinc-400 text-sm font-medium flex flex-wrap items-center gap-3 mt-1 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{item.institution}</span>
                  </span>
                  {item.credentialId && (
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                      Credential ID: {item.credentialId}
                    </span>
                  )}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-6 text-zinc-300 text-xs sm:text-sm">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Academic Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-2 px-1">
              <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Academic Degrees & Programs
              </h3>
            </div>

            {degrees.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-3xl glass-card p-6 sm:p-7 border border-white/10 glass-card-hover"
              >
                {/* Header Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {item.period}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    {item.statusPill}
                  </span>
                </div>

                {/* Title & Institution */}
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  {item.degree}
                </h4>
                <div className="text-zinc-400 text-sm font-medium flex items-center gap-1.5 mt-1 mb-4">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  <span>{item.institution}</span>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-6 text-zinc-300 text-xs sm:text-sm">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Full-Width Supplementary Section: Workshops & Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-zinc-400" />
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Additional Workshops & Training
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Google Cloud Workshop",
              "Flutter Workshop",
              "Cybersecurity Workshop",
              "AI & Data Science Workshop",
              "Python Internship",
            ].map((workshop) => (
              <span
                key={workshop}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {workshop}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
