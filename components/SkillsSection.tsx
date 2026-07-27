"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Brain,
  Search,
  CheckCircle2,
  Terminal,
  Sparkles,
  Server,
  Cloud,
  Layers,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "web" | "database" | "ai";
  level: string;
  iconName: string;
  highlight?: boolean;
}

const skillsData: SkillItem[] = [
  // Languages
  { name: "Python", category: "languages", level: "Advanced", iconName: "Python", highlight: true },
  { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", iconName: "JavaScript", highlight: true },
  { name: "Java", category: "languages", level: "Proficient", iconName: "Java" },
  { name: "C", category: "languages", level: "Intermediate", iconName: "C" },
  { name: "C++", category: "languages", level: "Intermediate", iconName: "C++" },
  { name: "PHP", category: "languages", level: "Proficient", iconName: "PHP" },
  { name: "SQL", category: "languages", level: "Advanced", iconName: "SQL", highlight: true },

  // Web & Frameworks
  { name: "React.js", category: "web", level: "Advanced", iconName: "React", highlight: true },
  { name: "Next.js (App Router)", category: "web", level: "Advanced", iconName: "Next.js", highlight: true },
  { name: "Node.js", category: "web", level: "Advanced", iconName: "Node.js", highlight: true },
  { name: "Django", category: "web", level: "Proficient", iconName: "Django" },
  { name: "Flask", category: "web", level: "Proficient", iconName: "Flask" },
  { name: "REST APIs", category: "web", level: "Advanced", iconName: "REST API", highlight: true },
  { name: "Tailwind CSS", category: "web", level: "Advanced", iconName: "Tailwind", highlight: true },

  // Databases & Cloud
  { name: "PostgreSQL", category: "database", level: "Advanced", iconName: "PostgreSQL", highlight: true },
  { name: "MySQL", category: "database", level: "Advanced", iconName: "MySQL" },
  { name: "MongoDB", category: "database", level: "Advanced", iconName: "MongoDB", highlight: true },
  { name: "Docker", category: "database", level: "Advanced", iconName: "Docker", highlight: true },
  { name: "Render", category: "database", level: "Proficient", iconName: "Render" },
  { name: "Netlify", category: "database", level: "Proficient", iconName: "Netlify" },

  // Data & AI
  { name: "Pandas", category: "ai", level: "Advanced", iconName: "Pandas", highlight: true },
  { name: "NumPy", category: "ai", level: "Advanced", iconName: "NumPy" },
  { name: "Tableau", category: "ai", level: "Proficient", iconName: "Tableau" },
  { name: "Generative AI Integration", category: "ai", level: "Advanced", iconName: "GenAI", highlight: true },
  { name: "Agentic Workflows", category: "ai", level: "Advanced", iconName: "Agents", highlight: true },
];

const categoryTabs = [
  { id: "all", label: "All Tech Stack", icon: Layers },
  { id: "languages", label: "Languages", icon: Terminal },
  { id: "web", label: "Web & Frameworks", icon: Server },
  { id: "database", label: "Databases & Cloud", icon: Cloud },
  { id: "ai", label: "Data & AI Systems", icon: Brain },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-28 bg-zinc-950">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills, Frameworks & <span className="text-gradient-cyan">AI Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Comprehensive matrix across core programming languages, modern web engineering, containerized cloud infrastructure, and data science workflows.
          </motion.p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categoryTabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20 scale-105"
                      : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`group relative rounded-2xl glass-card p-4 border border-white/10 hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between ${
                skill.highlight ? "bg-white/[0.04] border-white/15" : ""
              }`}
            >
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:bg-indigo-500/10 transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
                {skill.highlight && (
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                    Core
                  </span>
                )}
              </div>

              {/* Skill Title & Level */}
              <div>
                <h3 className="text-white font-bold text-sm tracking-tight group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 text-zinc-400 text-xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{skill.level}</span>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                <span>{skill.category}</span>
                <Sparkles className="w-3 h-3 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No matching skills found for &quot;{searchQuery}&quot;.
          </div>
        )}

      </div>
    </section>
  );
}
