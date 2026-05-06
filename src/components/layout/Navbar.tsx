"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [first, ...rest] = PERSONAL_INFO.name.split(" ");

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50] flex justify-center px-4 pt-5 transition-all duration-500">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-5 py-3 rounded-2xl transition-all duration-500",
          isScrolled
            ? "glass-dark shadow-2xl shadow-black/40 scale-[1.01]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tight cursor-pointer group flex-shrink-0">
          <span className="text-white group-hover:text-primary transition-colors duration-300">{first.toUpperCase()}</span>
          <span className="text-gradient"> DEV</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const section = link.href.replace("#", "");
            const isActive = activeSection === section;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/6 rounded-lg border border-white/8"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 flex-shrink-0"
        >
          <Mail size={14} />
          Hubungi
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] glass-dark flex flex-col items-center justify-center gap-6 md:hidden"
          >
            <button
              className="absolute top-7 right-7 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="text-2xl font-black mb-4">
              <span className="text-white">{first.toUpperCase()}</span>
              <span className="text-gradient"> DEV</span>
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-300 hover:text-white hover:text-gradient transition-all duration-200"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-10 py-4 rounded-2xl bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
