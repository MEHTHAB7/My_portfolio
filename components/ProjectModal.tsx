"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Layers, CheckCircle2, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  period?: string;
  roleOrTeam?: string;
  description: string;
  fullOverview: string;
  tech: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFlagship?: boolean;
  status?: "completed" | "ongoing";
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl rounded-3xl glass-card border border-white/20 p-6 sm:p-8 bg-zinc-900/95 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Header Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {project.status === "completed" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Completed
              </span>
            )}
            {project.status === "ongoing" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                Ongoing Development
              </span>
            )}
            {project.roleOrTeam && (
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                👥 {project.roleOrTeam}
              </span>
            )}
            {project.period && (
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium">
                📅 {project.period}
              </span>
            )}
            {project.isFlagship && (
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                🌟 FLAGSHIP PLATFORM
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h2>

          {/* Short Description */}
          <p className="text-zinc-300 text-base leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Detailed Overview Box */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Engineering Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-indigo-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl || "https://github.com/MEHTHAB7"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-indigo-400" />
                <span>Repository</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25 hover:scale-105 active:scale-95"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Open Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
