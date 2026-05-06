"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4"
            >
              Perjalanan Karir
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pengalaman <br />
              <span className="text-gradient">Profesional</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm"
            >
              Track record pengalaman dalam membangun solusi digital dan mengelola infrastruktur IT.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-gray-600 mt-1">Tahun</div>
              </div>
              <div className="w-px bg-white/5" />
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">4+</div>
                <div className="text-xs text-gray-600 mt-1">Proyek</div>
              </div>
              <div className="w-px bg-white/5" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-gray-600 mt-1">Selesai</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center neon-border">
                    <Briefcase size={18} className="text-primary" />
                  </div>

                  <GlassCard className="hover:border-primary/25 transition-all duration-500">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <Building2 size={13} className="text-primary" />
                          <span className="text-primary font-semibold text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                        <Calendar size={12} className="text-gray-500" />
                        <span className="text-xs text-gray-400 font-mono whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Status badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Aktif</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
