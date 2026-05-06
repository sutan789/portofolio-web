"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/data";

const techIcons: Record<string, string> = {
  "PHP & Laravel": "laravel",
  "Python": "python",
  "Django": "django",
  "Next.js & React": "nextdotjs",
  "Node.js": "nodedotjs",
  "HTML/CSS/JS": "javascript",
  "MySQL & SQLite": "mysql",
  "MongoDB": "mongodb",
};

export default function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [radius, setRadius] = useState(350);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius - Slightly smaller for a cleaner look
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(150);
      else if (window.innerWidth < 1024) setRadius(220);
      else setRadius(300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse Tilt for 3D Camera
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const cameraRotateX = useTransform(springY, [-300, 300], [10, -10]);
  const cameraRotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % SKILLS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      id="skills" 
      className="py-24 md:py-40 relative overflow-hidden bg-[#020205]"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Deep Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_80%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black text-white tracking-tighter"
          >
            THE <span className="text-gradient">SKILL</span> GLOBE
          </motion.h2>
        </div>

        {/* 3D Interaction Zone */}
        <motion.div 
          style={{ 
            rotateX: cameraRotateX, 
            rotateY: cameraRotateY, 
            perspective: "2000px",
            transformStyle: "preserve-3d" 
          }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          {/* Central Pulsing Sphere (Tech Sun) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: ["0 0 50px rgba(168,85,247,0.3)", "0 0 100px rgba(168,85,247,0.6)", "0 0 50px rgba(168,85,247,0.3)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-primary via-white to-secondary border-4 md:border-8 border-white/10 z-10 relative overflow-hidden flex items-center justify-center shadow-2xl"
          >
             <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
             <div className="text-center relative z-10 scale-75 md:scale-100">
                <div className="text-[14px] font-black text-primary tracking-[0.5em] uppercase leading-none">CORE</div>
                <div className="text-[10px] font-bold text-black/60 tracking-[0.2em] uppercase mt-2">SUTAN</div>
             </div>
          </motion.div>

          {/* 3D Skills Sphere */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {SKILLS.map((skill, i) => {
                const phi = Math.acos(-1 + (2 * i) / SKILLS.length);
                const theta = Math.sqrt(SKILLS.length * Math.PI) * phi;
                
                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.sin(phi) * Math.sin(theta);
                const z = radius * Math.cos(phi);

                const isActive = activeSkillIndex === i;

                return (
                  <div
                    key={skill.name}
                    style={{
                      position: "absolute",
                      transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                      transformStyle: "preserve-3d"
                    }}
                  >
                     <motion.div
                       animate={{ rotateY: -360 }}
                       transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       className="flex flex-col items-center"
                       style={{ transformStyle: "preserve-3d" }}
                     >
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className={`px-3 md:px-6 py-2 md:py-4 glass border-[1px] md:border-[1.5px] rounded-full flex items-center gap-2 md:gap-3 transition-all duration-500 shadow-2xl ${
                            isActive 
                            ? "border-primary shadow-[0_0_30px_rgba(168,85,247,0.5)] bg-primary/20" 
                            : "border-white/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 bg-black/40"
                          }`}
                        >
                           <img 
                              src={`https://cdn.simpleicons.org/${techIcons[skill.name] || 'code'}/ffffff`} 
                              alt={skill.name}
                              className="w-4 h-4 md:w-6 md:h-6 object-contain"
                           />
                           <span className="text-[8px] md:text-[11px] font-black text-white tracking-widest uppercase whitespace-nowrap">
                              {skill.name}
                           </span>
                        </motion.div>
                     </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Info Panel */}
        <div className="mt-16 md:mt-24 flex flex-col items-center">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeSkillIndex}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl border-primary/20 flex items-center gap-6 md:gap-10 w-full max-w-sm md:max-w-xl"
             >
                <div className="text-3xl md:text-5xl font-black text-primary/20">{activeSkillIndex + 1}</div>
                <div className="flex flex-col">
                   <span className="text-[8px] md:text-[10px] font-black text-primary tracking-[0.5em] uppercase mb-1 md:mb-2">Neural Module Active</span>
                   <span className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase">{SKILLS[activeSkillIndex].name}</span>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
