"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

const colorMap: Record<string, { bg: string; text: string; glow: string; border: string }> = {
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", glow: "shadow-purple-500/20", border: "group-hover:border-purple-500/40" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", glow: "shadow-cyan-500/20", border: "group-hover:border-cyan-500/40" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", glow: "shadow-pink-500/20", border: "group-hover:border-pink-500/40" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", glow: "shadow-blue-500/20", border: "group-hover:border-blue-500/40" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", glow: "shadow-indigo-500/20", border: "group-hover:border-indigo-500/40" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", glow: "shadow-violet-500/20", border: "group-hover:border-violet-500/40" },
};

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4"
          >
            Yang Saya Tawarkan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Layanan <span className="text-gradient">Digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed"
          >
            Solusi digital komprehensif yang dirancang khusus untuk kebutuhan bisnis Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const colors = colorMap[service.color] ?? colorMap.purple;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`group h-full p-7 rounded-2xl glass-card cursor-default transition-all duration-500 ${colors.border}`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colors.bg} ${colors.text} shadow-lg ${colors.glow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon size={24} />
                  </div>

                  {/* Number */}
                  <div className="text-[10px] text-gray-700 font-mono mb-3 tracking-widest">
                    0{index + 1}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 text-white group-hover:${colors.text} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover line */}
                  <div className={`mt-6 h-px w-0 group-hover:w-full transition-all duration-500 ${colors.bg.replace('/10', '')} opacity-60`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
