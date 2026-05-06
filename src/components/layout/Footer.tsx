"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO, CONTACT_INFO } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-20 bg-primary/5 blur-[40px]" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tight mb-3">
              <span className="text-white">{PERSONAL_INFO.name.split(" ")[0].toUpperCase()}</span>
              <span className="text-gradient"> DEV</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Membangun solusi digital berkualitas tinggi untuk bisnis modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-4">Navigasi</div>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Portfolio", "Services", "Experience", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-xs text-gray-600 font-bold uppercase tracking-widest mb-4">Kontak</div>
            <div className="space-y-3">
              {CONTACT_INFO.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon size={15} className="group-hover:text-primary transition-colors" />
                  <span className="text-sm">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 flex items-center gap-1">
            Crafted with <span className="text-red-500">❤</span> for the Digital Frontier
          </p>
        </div>
      </div>

      {/* Background Big Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-[0.5em] whitespace-nowrap leading-none pb-2">
        DIGITAL
      </div>
    </footer>
  );
}
