"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Mail,
  Award,
  Terminal,
  Users,
  Code,
  Download,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export default function HeroSection() {
  const metrics = [
    {
      value: "8",
      label: "Showcase Projects",
      detail: "PaaS, Auth, ML & Web Apps",
      icon: Code,
      color: "from-indigo-500 to-indigo-400",
    },
    {
      value: "7",
      label: "Engineer Team Lead",
      detail: "Hackathon & Agile Builds",
      icon: Users,
      color: "from-sky-500 to-cyan-400",
    },
    {
      value: "30/30",
      label: "ICT Data Science Score",
      detail: "Certified Specialist",
      icon: Award,
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Full-Stack Development Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kochi, Kerala, India</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-zinc-400 text-lg sm:text-xl font-medium tracking-wide uppercase">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Mehthab <span className="text-gradient-indigo">N M</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-gradient-cyan pt-1">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal"
            >
              BCA graduate & MCA candidate experienced in building production web applications,
              automated deployment platforms, and AI-driven workflows. Proven track record leading
              developer teams and shipping end-to-end client builds.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-indigo-500/50 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
                title="Contact to request full resume"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </motion.div>

            {/* Quick Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-zinc-400"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Connect:</span>
              <a
                href="https://github.com/MEHTHAB7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/mehthab-n-m-637611344"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:mehthab225@gmail.com"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Hero Profile Card & Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Animated Glowing Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-500 opacity-50 blur-xl animate-pulse-glow" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl glass-card p-4 sm:p-5 border border-white/15 overflow-hidden shadow-2xl">
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/profile.jpeg"
                    alt="Mehthab N M"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-xs text-zinc-200 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Full-Stack Developer</span>
                  </div>

                  {/* Bottom Floating Skill Pills */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {["Next.js", "Docker", "Python", "React", "Node.js"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-indigo-300 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base">Mehthab N M</h3>
                    <p className="text-zinc-400 text-xs">MCA Candidate & Full Stack Developer</p>
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Metrics Highlight Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20"
        >
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-card p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-white font-bold text-base mt-1">
                      {metric.label}
                    </div>
                    <div className="text-zinc-400 text-xs mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/30 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
