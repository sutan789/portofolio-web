"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020205] overflow-hidden"
        >
          {/* Cosmic Warp Lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0, x: "-50%" }}
                animate={{ 
                  scaleX: [0, 1, 0], 
                  opacity: [0, 1, 0],
                  x: ["-50%", "150%"]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "linear"
                }}
                className="absolute top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ top: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Main Visual */}
          <div className="relative z-10">
            {/* Geometric Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border-[1px] border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-48 h-48 border-[1px] border-secondary/20 rounded-full rotate-45 scale-90"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-48 h-48 border-[1px] border-white/5 rounded-full -rotate-45 scale-110"
            />

            {/* Pulsing Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-4 rounded-full bg-primary/10 blur-xl"
            />

            {/* Brand Logo/Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-3xl font-black text-white tracking-[0.2em]"
              >
                SUTAN<span className="text-primary text-shadow-glow">DEV</span>
              </motion.div>
              
              <motion.div 
                className="mt-4 flex items-baseline gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-5xl font-mono font-bold text-gradient-subtle tabular-nums">
                  {Math.min(progress, 100)}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">percent</span>
              </motion.div>
            </div>
          </div>

          {/* Loading Progress Bar (Bottom) */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* System Messages */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[8px] font-mono text-gray-600 uppercase tracking-[0.4em] text-center w-full">
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
            >
              Initializing Neural Core // Loading Galaxy Assets // Syncing Workspace
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
