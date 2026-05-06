"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, SKILLS } from "@/lib/data";
import { ChevronRight, Code2, Rocket, Globe, Zap, Download } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const floatingIcons = [
  { Icon: Code2, x: "-18%", y: "-12%", delay: 0, size: 36 },
  { Icon: Rocket, x: "18%", y: "-18%", delay: 0.5, size: 32 },
  { Icon: Globe, x: "-22%", y: "22%", delay: 1, size: 40 },
  { Icon: Zap, x: "20%", y: "28%", delay: 1.5, size: 28 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingIcons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                x: [0, 8, 0],
                y: [0, -12, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut" 
              }}
              className="absolute text-primary/30"
              style={{ left: `calc(50% + ${item.x})`, top: `calc(50% + ${item.y})` }}
            >
              <item.Icon size={item.size} />
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8 badge-glow"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
          Available for Projects
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-sm font-bold tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m {PERSONAL_INFO.name} 👋
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]"
        >
          {PERSONAL_INFO.role}
          <br />
          <span className="text-gradient">Building Modern Solutions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-gray-200 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-semibold"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#portfolio"
            className="group px-8 py-3.5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25"
          >
            Lihat Proyek Saya
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-2xl glass text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Hubungi Saya
          </a>
        </motion.div>

        {/* Terminal Animation & Stats Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <GlassCard className="h-full p-0 border-primary/20 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
                </div>
                <div className="text-[11px] text-gray-500 font-mono ml-2 flex-1 text-center">
                  {PERSONAL_INFO.name.toLowerCase().replace(/\s/g, "-")} — zsh
                </div>
              </div>
              {/* Terminal Body */}
              <div className="p-5 font-mono text-sm text-left space-y-1">
                <div className="flex gap-2">
                  <span className="text-green-400 select-none">➜</span>
                  <span className="text-cyan-400 select-none">~</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-gray-300 pl-4">
                  <span className="text-primary font-bold">{PERSONAL_INFO.name}</span>
                  <span className="text-gray-500"> · </span>
                  <span className="text-secondary">{PERSONAL_INFO.role}</span>
                </div>
                <div className="pt-2 flex gap-2">
                  <span className="text-green-400 select-none">➜</span>
                  <span className="text-cyan-400 select-none">~</span>
                  <span className="text-white">cat tech_stack.json</span>
                </div>
                <div className="text-gray-400 pl-4 text-xs leading-relaxed">
                  <span className="text-yellow-400">{"{"}</span><br />
                  {SKILLS.slice(0, 4).map((s, i) => (
                    <span key={s.name}>
                      &nbsp;&nbsp;<span className="text-cyan-300">&quot;{s.name}&quot;</span>
                      <span className="text-gray-600">: </span>
                      <span className="text-green-300">&quot;Expert&quot;</span>
                      {i < 3 ? <span className="text-gray-600">,</span> : null}
                      <br />
                    </span>
                  ))}
                  <span className="text-yellow-400">{"}"}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <span className="text-green-400 select-none">➜</span>
                  <span className="text-cyan-400 select-none">~</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-primary inline-block align-middle"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-4">
            {[
              { value: PERSONAL_INFO.stats.projects, label: "Projects", color: "text-primary" },
              { value: PERSONAL_INFO.stats.experience, label: "Tahun Exp.", color: "text-secondary" },
              { value: PERSONAL_INFO.stats.clients, label: "Klien", color: "text-accent" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="flex-1"
              >
                <GlassCard className="flex flex-col justify-center items-center py-6 gap-1 text-center">
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rocket Docking Station (Indicator) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-24 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-primary/40 tracking-[0.4em] uppercase font-black">Launch Protocol</span>
          <div className="relative w-1 h-12">
             <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent rounded-full animate-pulse" />
             {/* This is the point where the ScrollRocket starts */}
             <div id="rocket-launch-pad" className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 blur-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
