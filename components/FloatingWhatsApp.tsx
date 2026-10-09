"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { CONTACT_INFO } from "@/config/portfolio";

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      aria-label="WhatsApp Contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mehthab on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white" />

        {/* Hover Tooltip Label */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </motion.aside>
  );
}
