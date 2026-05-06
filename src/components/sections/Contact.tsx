"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO, PERSONAL_INFO } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import { Send, MapPin } from "lucide-react";

const colorMap: Record<string, string> = {
  white: "text-gray-300",
  pink: "text-pink-400",
  green: "text-green-400",
  purple: "text-purple-400",
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-4"
            >
              Hubungi Saya
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Mari Kita <br />
              <span className="text-gradient">Berkolaborasi</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs"
            >
              Punya proyek atau ide? Jangan ragu untuk menghubungi saya — siap membantu Anda membangun solusi digital terbaik.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 text-gray-500 text-sm mb-8"
            >
              <MapPin size={14} className="text-primary" />
              <span>Banda Aceh, Indonesia 🇮🇩</span>
            </motion.div>

            {/* Contact Links */}
            <div className="space-y-3">
              {CONTACT_INFO.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass hover:border-white/15 hover:bg-white/5 transition-all duration-300"
                >
                  <div className={`${colorMap[item.color] ?? "text-gray-400"} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">{item.name}</div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {item.name === "Email"
                        ? PERSONAL_INFO.email
                        : item.name === "WhatsApp"
                        ? `+${PERSONAL_INFO.whatsapp}`
                        : item.name === "GitHub"
                        ? "github.com/sutan789"
                        : "instagram.com/sutnn_"}
                    </div>
                  </div>
                  <div className="ml-auto text-gray-700 group-hover:text-primary transition-colors text-xs">→</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8 border-white/8">
              <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/6 transition-all placeholder:text-gray-700"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/6 transition-all placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Layanan</label>
                  <select className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                    <option className="bg-zinc-900 text-white" value="">Pilih layanan...</option>
                    <option className="bg-zinc-900 text-white">Web Development</option>
                    <option className="bg-zinc-900 text-white">UI/UX Design</option>
                    <option className="bg-zinc-900 text-white">Backend System</option>
                    <option className="bg-zinc-900 text-white">Database Management</option>
                    <option className="bg-zinc-900 text-white">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pesan</label>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan tentang proyek Anda..."
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/6 transition-all resize-none placeholder:text-gray-700"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/25"
                >
                  Kirim Pesan
                  <Send size={16} />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
