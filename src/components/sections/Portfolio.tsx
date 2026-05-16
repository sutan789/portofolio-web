"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import { 
  ExternalLink, 
  Code2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Rocket, 
  Layers, 
  Terminal,
  MousePointer2,
  Scan,
  Cpu,
  Globe
} from "lucide-react";
import Image from "next/image";

const allCategories = ["Semua", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "Semua" || p.category === filter
  );

  const tagColors = [
    "bg-purple-500/10 text-purple-300 border-purple-500/20", 
    "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", 
    "bg-pink-500/10 text-pink-300 border-pink-500/20"
  ];

  const handleProjectSelect = (project: any) => {
    setIsScanning(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsScanning(false);
    }, 800);
  };

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-primary" />
              Arsip Digital
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              PROJECT <span className="text-gradient">GALLERY</span>
            </motion.h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group ${
                  filter === cat
                    ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {filter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <div className={`absolute inset-0 border border-white/10 rounded-xl ${filter === cat ? "border-white/20" : "group-hover:border-white/20"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
                onClick={() => handleProjectSelect(project)}
              >
                <div className="relative p-0.5 rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <GlassCard className="p-0 overflow-hidden h-[340px] sm:h-[400px] md:h-[480px] flex flex-col bg-[#050508] border-none shadow-none group-hover:translate-y-[-4px] transition-transform duration-500">
                    {/* Visual Preview - Logo Centric */}
                    <div className="relative h-[50%] md:h-[60%] w-full overflow-hidden flex items-center justify-center bg-[#080810]">
                       {/* Blurred Background Image */}
                       <div className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-700">
                          <Image 
                            src={project.images[0]} 
                            alt="" 
                            fill 
                            className="object-cover blur-[2px] group-hover:scale-110 transition-transform duration-1000" 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                       </div>

                       <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/40" />
                       
                       {/* Main Logo Cover */}
                       <motion.div 
                         whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                         className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
                       >
                         {project.logo?.startsWith("/") ? (
                           <img 
                             src={project.logo} 
                             alt={project.title} 
                             className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                           />
                         ) : (
                           <img 
                             src={`https://cdn.simpleicons.org/${project.logo || 'code'}/ffffff`} 
                             alt={project.title} 
                             className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mt-4 md:mt-6 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" 
                           />
                         )}
                       </motion.div>

                       {/* Floating Info */}
                       <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 z-20">
                          <span className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest">{project.category}</span>
                       </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 p-5 md:p-8 pt-2 relative flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl md:text-3xl font-black text-white tracking-tight mb-2 md:mb-3 drop-shadow-glow">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded-md border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Brief Description */}
                        <p className="text-gray-500 text-[10px] md:text-xs line-clamp-2 md:line-clamp-3 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors">
                          {project.description}
                        </p>
                      </div>

                      {/* Logo Watermark */}
                      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-700 group-hover:scale-110 pointer-events-none">
                        {project.logo?.startsWith("/") ? (
                          <img 
                            src={project.logo} 
                            alt="" 
                            className="w-16 h-16 md:w-28 md:h-28 object-contain" 
                          />
                        ) : (
                          <img 
                            src={`https://cdn.simpleicons.org/${project.logo || 'code'}/ffffff`} 
                            alt="" 
                            className="w-14 h-14 md:w-24 md:h-24 object-contain" 
                          />
                        )}
                      </div>

                      {/* Interaction Hint */}
                      <div className="flex items-center gap-3 text-primary group-hover:translate-x-2 transition-transform duration-300">
                        <div className="w-6 md:w-8 h-[2px] bg-primary rounded-full" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Explore Module</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Scanning Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="text-primary"
              >
                <Scan size={60} strokeWidth={1} />
              </motion.div>
              <div className="text-center px-6">
                <p className="text-primary font-black tracking-[0.4em] uppercase text-[10px] md:text-xs animate-pulse">Initializing Data Stream</p>
                <div className="w-40 md:w-48 h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-primary shadow-[0_0_10px_#a855f7]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#020205]/98 backdrop-blur-3xl"
            />

            <motion.div 
              layoutId={`project-card-${selectedProject.id}`}
              className="relative w-full max-w-7xl h-full sm:h-auto sm:max-h-[95vh] md:max-h-[90vh] bg-[#050508] border-y sm:border border-white/10 sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Icon */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-3 md:p-4 rounded-full bg-black/60 hover:bg-white/10 text-white transition-all border border-white/10 backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Media Display (Left) */}
              <div className="w-full md:w-[60%] h-[35%] sm:h-[400px] md:min-h-[500px] lg:min-h-[600px] relative bg-black shrink-0">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />
                 <ProjectGallery images={selectedProject.images} title={selectedProject.title} />
                 
                 {/* Metadata Floating (Desktop Only) */}
                 <div className="absolute bottom-8 left-8 right-8 z-40 hidden lg:flex justify-between items-end">
                    <div className="space-y-2">
                       <div className="flex gap-4">
                          <div className="flex items-center gap-2 text-white/40">
                             <Cpu size={14} />
                             <span className="text-[10px] font-black uppercase tracking-widest">Protocol v4.0</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/40">
                             <Globe size={14} />
                             <span className="text-[10px] font-black uppercase tracking-widest">Node Verified</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Content Panel (Right) */}
              <div className="w-full md:w-[40%] flex-1 p-6 sm:p-10 md:p-14 lg:p-16 overflow-y-auto custom-scrollbar flex flex-col relative bg-[#050508]">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                   <Terminal size={180} />
                </div>

                <div className="mb-8 md:mb-12 relative z-10">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="w-6 md:w-10 h-[1px] bg-primary" />
                    <span className="text-primary text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em]">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-8 md:space-y-12 flex-1 relative z-10">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 md:gap-3 text-white/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">System Objective</h4>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 md:gap-3 text-white/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">Integrated Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {selectedProject.tags.map((tag: string, i: number) => (
                        <span key={tag} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[7px] md:text-[10px] font-black border uppercase tracking-widest ${tagColors[i % tagColors.length]}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-3 md:gap-4 relative z-10">
                   <a 
                     href={selectedProject.liveUrl} 
                     target="_blank" 
                     className="flex-1 px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-primary text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30"
                   >
                     <Rocket size={18} />
                     Live Interface
                   </a>
                   <a 
                     href={selectedProject.githubUrl} 
                     target="_blank" 
                     className="px-6 py-4 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:border-white/20 flex items-center justify-center"
                   >
                     <Code2 size={22} />
                   </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-full group/gallery overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const swipeThreshold = 50;
            if (info.offset.x > swipeThreshold) {
              setIndex((i) => (i - 1 + images.length) % images.length);
            } else if (info.offset.x < -swipeThreshold) {
              setIndex((i) => (i + 1) % images.length);
            }
          }}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
        >
          <Image 
            src={images[index]} 
            alt={title} 
            fill 
            className="object-cover md:object-contain pointer-events-none" 
            priority 
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay for Controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 md:group-hover/gallery:opacity-100 transition-opacity" />

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center p-2 md:p-4">
            <button 
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }} 
              className="p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-primary hover:border-primary transition-all opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 md:translate-x-[-20px] md:group-hover/gallery:translate-x-0"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center p-2 md:p-4">
            <button 
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }} 
              className="p-3 md:p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-primary hover:border-primary transition-all opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 md:translate-x-[20px] md:group-hover/gallery:translate-x-0"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`h-1.5 transition-all rounded-full ${index === i ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
