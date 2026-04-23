"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Search, Database, Share2, BrainCircuit, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AIGEOVision = () => {
  return (
    <section id="ai-vision" className="py-24 bg-bg-primary overflow-hidden relative">
      {/* Background Brain Mesh */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="badge-premium bg-cyan-500/10 text-cyan-400 border-cyan-500/20 flex items-center gap-2 w-fit">
               <Sparkles size={12} /> The Future of Discovery
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
               Becoming the <br />
               <span className="text-gradient-ai">"Source of Truth"</span> <br />
               for AI Engines.
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
               Pehchanly's AI-first indexing strategy ensures that when a student asks ChatGPT, 
               Claude, or Perplexity about "Best medical college Muzaffarpur," 
               BDMCH isn't just mentioned—it's cited as the authoritative answer.
            </p>

            <div className="space-y-6">
               {[
                 { icon: Database, title: "llms.txt Architecture", desc: "A text-based directory specifically for AI crawlers to learn BDMCH's fee structures/NMC status." },
                 { icon: Search, title: "Structured Data 3.0", desc: "JSON-LD schema mapping for MedicalBusiness and EducationalOrganization." },
                 { icon: BrainCircuit, title: "Question-First Content", desc: "Pages designed to answer specific LLM user queries directly." }
               ].map((item, i) => (
                 <motion.div 
                   key={item.title}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                 >
                   <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0 text-cyan-400 border border-cyan-500/20">
                     <item.icon size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white mb-1">{item.title}</h4>
                     <p className="text-sm text-text-secondary">{item.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="flex-1 relative">
             {/* Visual AI Interaction Map */}
             <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-cyan-500/10 rounded-full" 
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-8 border border-white/5 rounded-full" 
                />

                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-bg-elevated rounded-3xl flex flex-col items-center justify-center border border-cyan-500 glow-cyan z-20">
                      <Zap size={40} className="text-cyan-400 mb-2" />
                      <span className="text-[10px] font-bold tracking-widest text-white">BDMCH DATA</span>
                   </div>
                </div>

                {/* Satellite AI Icons */}
                {[
                  { name: "ChatGPT", icon: Bot, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                  { name: "Perplexity", icon: Search, pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                  { name: "Google Gemini", icon: Sparkles, pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
                  { name: "Claude", icon: Cpu, pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" }
                ].map((ai, i) => (
                  <motion.div 
                    key={ai.name}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    className={cn("absolute z-30 p-4 glass-card rounded-2xl flex flex-col items-center gap-1 min-w-[100px]", ai.pos)}
                  >
                     <ai.icon size={20} className="text-white" />
                     <span className="text-[8px] font-bold uppercase text-cyan-400">{ai.name}</span>
                  </motion.div>
                ))}

                {/* Connecting Lines (Simulated with CSS) */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent absolute" />
                   <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent absolute" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
