"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/config/portfolio";

export default function TestimonialsSection() {
  // Automatically hide the section if the config array is empty
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative py-24 bg-zinc-950/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback &amp; Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            What Clients &amp; Collaborators <span className="text-gradient-indigo">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Real feedback from founders, teams, and clients on delivery speed, communication, and engineering quality.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative rounded-3xl glass-card p-7 sm:p-8 border border-white/10 glass-card-hover flex flex-col justify-between overflow-hidden"
            >
              {/* Top Row: Stars & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-indigo-400/40" />
                </div>

                {/* Quote Text */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/10 mt-auto">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px] shrink-0">
                  <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    {testimonial.role}
                    {testimonial.company && (
                      <span className="text-cyan-400 font-medium"> • {testimonial.company}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
