"use client";

import { motion } from "framer-motion";

const planets = [
  {
    id: 1,
    size: 150,
    color: "from-purple-600/40 via-blue-700/40 to-black",
    glow: "rgba(100, 100, 255, 0.1)",
    top: "10%",
    left: "-5%",
    duration: 60,
    delay: 0,
    hasRing: true,
  },
  {
    id: 3,
    size: 200,
    color: "from-cyan-400/30 via-blue-600/30 to-black",
    glow: "rgba(100, 255, 255, 0.05)",
    bottom: "5%",
    right: "-5%",
    duration: 80,
    delay: 5,
    hasRing: false,
  },
];

export default function PlanetsDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-5] opacity-50">
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            y: [0, 20, 0, -20, 0],
            rotate: 360
          }}
          transition={{ 
            duration: planet.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: planet.delay 
          }}
          style={{
            position: "absolute",
            top: planet.top,
            left: planet.left,
            right: planet.right,
            bottom: planet.bottom,
            width: planet.size,
            height: planet.size,
          }}
          className="flex items-center justify-center blur-[1px]"
        >
          {/* Planet Body */}
          <div 
            className={`w-full h-full rounded-full bg-gradient-to-br ${planet.color} relative z-10`}
            style={{ 
              boxShadow: `0 0 40px ${planet.glow}, inset -10px -10px 30px rgba(0,0,0,0.6)` 
            }}
          >
            <div className="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
          </div>

          {/* Planet Ring */}
          {planet.hasRing && (
            <div 
              className="absolute w-[180%] h-[30%] border-[4px] border-white/5 rounded-[100%] z-0 rotate-[25deg]"
              style={{ 
                transform: "rotateX(75deg) rotateY(25deg)"
              }} 
            />
          )}
        </motion.div>
      ))}

      {/* Decorative Nebula Clouds - More subtle */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_70%)]" />
    </div>
  );
}
