"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import InteractiveIdCard from "@/components/ui/InteractiveIdCard";

export default function About() {
  const highlights = [
    { label: "Fullstack Developer", desc: "Frontend + Backend dengan stack modern" },
    { label: "Problem Solver", desc: "Fokus pada solusi praktis & efisien" },
    { label: "Fast Learner", desc: "Adaptif terhadap teknologi baru" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Visual */}
          <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[750px] py-10 md:py-20 order-2 lg:order-1">
            {/* Interactive ID Card */}
            <InteractiveIdCard />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4">
              Tentang Saya
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Membangun Solusi <br />
              <span className="text-gradient">Digital Terbaik</span>
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 font-semibold">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 font-medium">
              Dengan pendekatan yang berorientasi pada hasil, saya tidak hanya menulis kode — saya menciptakan pengalaman digital yang bermakna dan memberikan dampak nyata bagi bisnis Anda.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  className="flex items-start gap-3 p-4 rounded-xl glass hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{h.label}</div>
                    <div className="text-xs text-gray-200 font-semibold mt-0.5">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: PERSONAL_INFO.stats.projects, label: "Proyek" },
                { value: PERSONAL_INFO.stats.experience, label: "Tahun" },
                { value: PERSONAL_INFO.stats.clients, label: "Klien" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl glass-card">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
