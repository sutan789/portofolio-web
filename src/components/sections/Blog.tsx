"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Latest Insights
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Engineering <span className="text-gradient">Blog</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
          >
            View All Articles <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="h-full group cursor-pointer">
                <div className="aspect-video bg-zinc-900 rounded-xl mb-6 overflow-hidden relative border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full flex items-center justify-center text-white/5 font-black text-4xl">
                    POST {idx + 1}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="text-primary font-bold uppercase">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
                
                <div className="text-primary font-bold text-xs flex items-center gap-2">
                  Read Article <ArrowRight size={14} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
