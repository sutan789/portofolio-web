"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { ShieldCheck, Cpu, Database, Fingerprint, QrCode, Wifi, Scan } from "lucide-react";
import Image from "next/image";

export default function InteractiveIdCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scale, setScale] = useState(1);
  
  // Responsive Scaling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setScale(0.7);
      else if (window.innerWidth < 640) setScale(0.85);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Motion Values for Tilt & Drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springMouseX = useSpring(mouseX, springConfig);
  const springMouseY = useSpring(mouseY, springConfig);
  
  // Rotations based on movement
  const rotateX = useTransform(springY, [-100, 100], [20, -20]);
  const rotateY = useTransform(springX, [-100, 100], [-20, 20]);
  const rotateZ = useTransform(springX, [-100, 100], [-8, 8]);

  // Mouse Tilt
  const mouseTiltX = useTransform(springMouseY, [-250, 250], [12, -12]);
  const mouseTiltY = useTransform(springMouseX, [-250, 250], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - midX);
    mouseY.set(e.clientY - midY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-start h-[550px] sm:h-[650px] md:h-[800px] w-full max-w-lg mx-auto pt-4 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Top Anchor Ring */}
      <div className="absolute top-0 z-50">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-primary/40 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      <motion.div style={{ scale }}>
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            onDrag={(e, info) => {
              x.set(info.offset.x);
              y.set(info.offset.y);
            }}
            onDragEnd={() => {
              x.set(0);
              y.set(0);
            }}
            style={{ 
              x: springX, 
              y: springY,
              rotateX: isHovering ? mouseTiltX : rotateX,
              rotateY: isHovering ? mouseTiltY : rotateY,
              rotateZ,
              perspective: 1500
            }}
            className="relative flex flex-col items-center cursor-grab active:cursor-grabbing z-20"
        >
            {/* Triple Lanyards */}
            <div className="flex gap-10 sm:gap-16 h-32 sm:h-40 -mb-2 relative">
            {[1, 2, 3].map((i) => (
                <div key={i} className="w-4 sm:w-6 h-full relative">
                    <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-[#111] via-primary/30 to-primary/60 border-x border-white/10 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[5px] sm:text-[6px] font-black text-white/40 rotate-90 tracking-[0.6em] uppercase whitespace-nowrap">
                            {i === 2 ? "SUTAN DEV PROTOCOL" : "GALAXY PROTOCOL"}
                        </span>
                    </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-4 sm:h-6 bg-[#222] border border-white/10 rounded-t-lg z-10" />
                </div>
            ))}
            </div>

            {/* Galaxy Card Container */}
            <div 
              className="w-[280px] sm:w-[340px] h-[430px] sm:h-[520px] relative perspective-1000 group/card"
              onClick={() => setIsFlipped(!isFlipped)}
            >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 180, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
            >
                {/* FRONT SIDE (RECOGNITION) */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                <div className="w-full h-full bg-[#050508] rounded-[32px] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(168,85,247,0.3)] border-[1.5px] border-white/10 relative">
                    {/* Atmospheric Glow */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_60%)]" />
                      <div className="absolute bottom-[-10%] left-[-10%] w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2),transparent_60%)]" />
                    </div>

                    {/* Holographic Scanning Line */}
                    <motion.div 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[2px] bg-primary/40 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-50 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity"
                    />

                    <div className="flex-1 flex flex-col p-8 relative z-10">
                      <div className="flex justify-between items-start mb-10">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-[20px] font-black text-white tracking-tighter leading-none">
                              SUTAN<span className="text-primary text-shadow-glow">DEV</span>
                            </h4>
                          </div>
                          <p className="text-[9px] text-primary/60 font-black tracking-[0.4em] mt-3 uppercase">GALAXY ARCHITECT</p>
                        </div>
                        <div className="text-primary opacity-50"><ShieldCheck size={28} /></div>
                      </div>

                      <div className="flex justify-center mb-10 relative">
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            {/* Scanning Radar - Hidden on mobile for performance */}
                            <motion.div 
                              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 bg-primary/10 rounded-full blur-xl hidden md:block"
                            />
                            <motion.div 
                              animate={{ rotate: 360 }} 
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                              className="absolute inset-0 border border-dashed border-primary/40 rounded-full hidden md:block" 
                            />
                            <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(168,85,247,0.4)] z-10 bg-[#111]">
                              <Image 
                                  src="/avatars/sutan.jpg" 
                                  alt={PERSONAL_INFO.name} 
                                  fill 
                                  className="object-cover scale-110"
                                  sizes="160px"
                                  onError={(e) => {
                                  const target = e.target as any;
                                  target.src = "https://ui-avatars.com/api/?name=Sutan+Irvan&background=a855f7&color=fff&size=512";
                                  }}
                              />
                            </div>
                        </div>
                      </div>

                      <div className="text-center mb-10">
                        <h3 className="text-[26px] font-black text-white tracking-tight leading-tight uppercase mb-4 drop-shadow-glow">
                          {PERSONAL_INFO.name}
                        </h3>
                        <div className="inline-block px-6 py-2 rounded-xl bg-primary/10 border border-primary/30">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                              {PERSONAL_INFO.role}
                            </p>
                        </div>
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover/card:border-primary/20 transition-colors">
                            <div className="text-[8px] text-gray-500 font-bold uppercase mb-1">Access Code</div>
                            <div className="text-[11px] font-black text-white tracking-wider">DEV-789-ALPHA</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover/card:border-secondary/20 transition-colors">
                            <div className="text-[8px] text-gray-500 font-bold uppercase mb-1">Clearance</div>
                            <div className="text-[11px] font-black text-secondary tracking-widest uppercase">OMEGA-4</div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>

                {/* BACK SIDE (ENCRYPTION / TECH DATA) */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                <div className="w-full h-full bg-[#050508] rounded-[32px] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(168,85,247,0.3)] border-[1.5px] border-white/10 relative">
                    <div className="absolute inset-0 opacity-30">
                       <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(168,85,247,0.05)_0px,transparent_1px,transparent_40px)]" />
                    </div>

                    <div className="flex-1 p-8 flex flex-col relative z-10">
                      <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <div className="text-[10px] text-primary font-black tracking-widest uppercase">System Core Status</div>
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                           <div className="w-2 h-2 rounded-full bg-primary/20" />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4 group/item">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover/item:border-primary/50 transition-colors"><Cpu size={20} /></div>
                           <div>
                              <div className="text-[8px] text-gray-500 font-bold uppercase">Kernel Version</div>
                              <div className="text-xs font-black text-white tracking-widest uppercase font-mono">9.9.28.11.02</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 group/item">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover/item:border-secondary/50 transition-colors"><Database size={20} /></div>
                           <div>
                              <div className="text-[8px] text-gray-500 font-bold uppercase">Database Uplink</div>
                              <div className="text-xs font-black text-white tracking-widest uppercase font-mono">ENCRYPTED_NODE</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 group/item">
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover/item:border-primary/50 transition-colors"><Fingerprint size={20} /></div>
                           <div>
                              <div className="text-[8px] text-gray-500 font-bold uppercase">Biometric ID</div>
                              <div className="text-xs font-black text-white tracking-widest uppercase font-mono">VERIFIED_082</div>
                           </div>
                        </div>
                      </div>

                      <div className="mt-12 flex-1 relative flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5">
                           <Wifi size={160} />
                        </div>
                        <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm relative z-10 group-hover:bg-white/5 transition-all">
                           <QrCode size={120} className="text-white opacity-80" />
                        </div>
                        <div className="mt-4 text-[7px] text-gray-500 font-black tracking-[0.4em] uppercase">Scan for Decryption</div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-black text-primary/40 tracking-widest uppercase">
                        <span>Antigravity OS</span>
                        <span>v2.0.4</span>
                      </div>
                    </div>
                </div>
                </div>
            </motion.div>

            {/* Interaction Prompt */}
            <div className="absolute -bottom-16 left-0 right-0 text-center transition-opacity duration-300">
                <AnimatePresence>
                  {isHovering ? (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-[12px] text-primary font-black tracking-[0.4em] uppercase animate-pulse flex items-center justify-center gap-2"
                    >
                      <Scan size={14} />
                      Analyzing...
                    </motion.span>
                  ) : (
                    <span className="text-[12px] text-white/20 font-black tracking-[0.4em] uppercase">
                        Tap to Flip • Drag to Float
                    </span>
                  )}
                </AnimatePresence>
            </div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
