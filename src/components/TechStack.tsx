"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, ShieldCheck, Zap, Database, Terminal } from 'lucide-react';

const techItems = [
  { name: "Next.js 16 (Forward-Ready)", desc: "Edge-first architecture for lightning-fast regional availability.", icon: Globe },
  { name: "Agentic AI Core", desc: "Autonomous admission handlers qualifying leads 24/7.", icon: Cpu },
  { name: "PostgreSQL + Prisma", desc: "Enterprise-grade data persistence for patient/student records.", icon: Database },
  { name: "Framer Engine", desc: "Apple-standard interactive aesthetic for the modern user.", icon: Zap },
  { name: "Vercel Enterprise", desc: "Zero-downtime global distribution network.", icon: Rocket },
  { name: "Agentic Ops", desc: "Automated WhatsApp & Email follow-up sequences.", icon: Terminal },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <div className="badge-premium bg-blue-500/10 text-blue-400 border-blue-500/20">The Technology Pillar</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic italic">The Modern <br /><span className="text-blue-500">Infrastructure.</span></h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Pehchanly doesn't just build websites; we build engineering-led digital ecosystems. 
              The BDMCH platform is structured for scale, utilizing the latest agentic AI patterns 
              to automate admission workflows.
            </p>
            <div className="p-10 glass-card rounded-3xl border-l-4 border-l-blue-500">
               <div className="text-blue-500 font-bold mb-2">Architectural Goal</div>
               <div className="text-2xl font-bold text-white mb-4">99.9% Availability</div>
               <p className="text-xs text-text-muted">Designed to handle massive traffic spikes during NEET counselling results without latency.</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
             {techItems.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 glass-card rounded-2xl flex items-start gap-6 hover:translate-x-2 transition-all group"
                >
                   <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-colors">
                      <item.icon size={22} className="text-text-muted group-hover:text-blue-400 transition-colors" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white mb-2">{item.name}</h4>
                      <p className="text-sm text-text-secondary leading-tight">{item.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
