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
  Wrench,
  Layers,
  HeartHandshake,
  Globe,
  Award,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "web" | "database" | "ai" | "tools";
  level: string;
  highlight?: boolean;
}

const skillsData: SkillItem[] = [
  // Languages (from CV: Python, Java, C, C++, JavaScript, PHP)
  { name: "Python", category: "languages", level: "Advanced", highlight: true },
  { name: "JavaScript", category: "languages", level: "Advanced", highlight: true },
  { name: "Java", category: "languages", level: "Proficient" },
  { name: "C", category: "languages", level: "Proficient" },
  { name: "C++", category: "languages", level: "Proficient" },
  { name: "PHP", category: "languages", level: "Proficient" },

  // Web & Frameworks (from CV: Django, Flask, React.js, Next.js, Node.js, REST APIs, HTML5, CSS3, Bootstrap)
  { name: "Django", category: "web", level: "Advanced", highlight: true },
  { name: "Flask", category: "web", level: "Proficient", highlight: true },
  { name: "React.js", category: "web", level: "Advanced", highlight: true },
  { name: "Next.js", category: "web", level: "Advanced", highlight: true },
  { name: "Node.js", category: "web", level: "Advanced", highlight: true },
  { name: "REST APIs", category: "web", level: "Advanced", highlight: true },
  { name: "HTML5", category: "web", level: "Advanced" },
  { name: "CSS3", category: "web", level: "Advanced" },
  { name: "Bootstrap", category: "web", level: "Advanced" },

  // Databases (from CV: MySQL, PostgreSQL, MongoDB, SQL Database Design & Optimization)
  { name: "MySQL", category: "database", level: "Advanced", highlight: true },
  { name: "PostgreSQL", category: "database", level: "Advanced", highlight: true },
  { name: "MongoDB", category: "database", level: "Advanced", highlight: true },
  { name: "SQL Database Design & Optimization", category: "database", level: "Advanced", highlight: true },

  // Data & AI (from CV: Pandas, NumPy, Tableau, Generative AI Integration, Prompt Engineering, Agentic AI Workflows)
  { name: "Pandas", category: "ai", level: "Advanced", highlight: true },
  { name: "NumPy", category: "ai", level: "Advanced", highlight: true },
  { name: "Tableau", category: "ai", level: "Proficient" },
  { name: "Generative AI Integration", category: "ai", level: "Advanced", highlight: true },
  { name: "Prompt Engineering", category: "ai", level: "Advanced", highlight: true },
  { name: "Agentic AI Workflows", category: "ai", level: "Advanced", highlight: true },

  // Tools & Platforms (from CV: Git/GitHub, Docker, VS Code, Render, Netlify)
  { name: "Git / GitHub", category: "tools", level: "Advanced", highlight: true },
  { name: "Docker", category: "tools", level: "Advanced", highlight: true },
  { name: "VS Code", category: "tools", level: "Advanced" },
  { name: "Render", category: "tools", level: "Proficient" },
  { name: "Netlify", category: "tools", level: "Proficient" },
];

const categoryTabs = [
  { id: "all", label: "All Tech Stack", icon: Layers },
  { id: "languages", label: "Languages", icon: Terminal },
  { id: "web", label: "Web & Frameworks", icon: Server },
  { id: "database", label: "Databases", icon: Database },
  { id: "ai", label: "Data & AI", icon: Brain },
  { id: "tools", label: "Tools & Platforms", icon: Wrench },
];

const softSkills = [
  "Communication & Collaboration",
  "Problem Solving",
  "Team Leadership",
  "Fast Learning",
  "Time Management",
];

const spokenLanguages = [
  { lang: "English", proficiency: "Professional Working Proficiency" },
  { lang: "Malayalam", proficiency: "Native / Bilingual" },
  { lang: "Hindi", proficiency: "Limited Working Proficiency" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "languages": return "Language";
      case "web": return "Web & Framework";
      case "database": return "Database";
      case "ai": return "Data & AI";
      case "tools": return "Tool & Platform";
      default: return cat;
    }
  };

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
            <span>Technical Skills Matrix</span>
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
            Curated directly from hands-on software engineering, production web apps, cloud containerization, and applied AI systems.
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
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
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
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              whileHover={{ scale: 1.04, y: -4 }}
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
                <span>{getCategoryLabel(skill.category)}</span>
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

        {/* Soft Skills & Spoken Languages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 pt-8 border-t border-white/10">
          
          {/* Soft Skills Box */}
          <div className="rounded-3xl glass-card p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-white font-bold text-base">Soft Skills & Leadership</h3>
                <p className="text-zinc-400 text-xs">Professional interpersonal and managerial strengths</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  ✨ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Spoken Box */}
          <div className="rounded-3xl glass-card p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Globe className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-white font-bold text-base">Languages (Communication)</h3>
                <p className="text-zinc-400 text-xs">Multilingual working proficiency</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {spokenLanguages.map((langItem) => (
                <div
                  key={langItem.lang}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-white font-bold text-sm">{langItem.lang}</span>
                  <span className="text-zinc-400 text-[11px] mt-1">{langItem.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
