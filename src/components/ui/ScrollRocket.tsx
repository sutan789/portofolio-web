"use client";

import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export default function ScrollRocket() {
  const { scrollYProgress, scrollY } = useScroll();
  const [direction, setDirection] = useState(1);
  const [hasLaunched, setHasLaunched] = useState(false);
  const scrollVelocity = useVelocity(scrollYProgress);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    restDelta: 0.001
  });

  // Precise Takeoff mapping:
  // 0 -> Positioned at the docking station (Hero bottom)
  // 0.05 -> Accelerating to center
  // 0.1 -> Reached flight altitude (center)
  const y = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 1], 
    ["82vh", "40vh", "50vh", "90vh"]
  );
  
  // Horizontal Zigzag - starts after launch
  const x = useTransform(smoothProgress, (p) => {
    if (p < 0.08) return 0; 
    return Math.sin((p - 0.08) * Math.PI * 6) * 120;
  });

  const rotateZ = useTransform(smoothProgress, (p) => {
    if (p < 0.08) return 0;
    return Math.cos((p - 0.08) * Math.PI * 6) * 40;
  });

  // Visual effects linked to scroll
  const scale = useTransform(smoothProgress, [0, 0.05, 0.1], [0.7, 1.3, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.02, 1], [0.6, 1, 1]);
  const blur = useTransform(smoothProgress, [0, 0.1], [0, 2]);

  useEffect(() => {
    const unsub = scrollY.onChange((v) => {
      if (v > 80) setHasLaunched(true);
      else setHasLaunched(false);
    });
    const unsubVel = scrollVelocity.onChange((v) => {
      if (v > 0) setDirection(1);
      else if (v < 0) setDirection(-1);
    });
    return () => {
      unsub();
      unsubVel();
    };
  }, [scrollY, scrollVelocity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] flex items-center justify-center overflow-hidden">
      {/* The Rocket Container */}
      <motion.div
        style={{ 
          top: y,
          x: x,
          rotateZ: rotateZ,
          scale: scale,
          opacity: useTransform(smoothProgress, [0, 0.1, 1], [0.6, 0.8, 0.7]), // Restored visibility
          filter: `blur(1px)` // Subtle blur for depth but still visible
        }}
        className="absolute flex flex-col items-center"
      >
        {/* The Rocket Body */}
        <motion.div
          animate={{ 
            rotate: direction === 1 ? 180 : 0,
            y: [0, -4, 0]
          }}
          transition={{ 
            rotate: { type: "spring", stiffness: 100, damping: 15 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-primary/30 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          <Rocket size={100} strokeWidth={1.2} fill="currentColor" fillOpacity={0.08} />
        </motion.div>

        {/* Thrusters / Flame - Subtle & Not too bright */}
        <motion.div
          animate={{ 
            scale: hasLaunched ? [1, 1.8, 1] : [1, 1.1, 1],
            opacity: hasLaunched ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="absolute w-24 h-48 bg-primary/10 rounded-full blur-[40px] -z-10"
          style={{ 
            top: direction === 1 ? "-100px" : "80px"
          }}
        />

        {/* Sonic Waves on Launch */}
        {hasLaunched && scrollY.get() < 400 && (
           <motion.div
             initial={{ scale: 0.5, opacity: 1 }}
             animate={{ scale: 4, opacity: 0 }}
             transition={{ duration: 0.8, repeat: 3 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary/40 rounded-full"
           />
        )}
      </motion.div>
    </div>
  );
}
