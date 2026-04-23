"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Rocket, ShieldCheck, TrendingUp, Award, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const roadmapData = [
  {
    phase: "Phase 1: Stabilization",
    period: "Months 0-3",
    color: "bg-red-500",
    glow: "glow-red",
    tasks: ["Link Purge", "NMC/LOP Document Indexing", "Faculty Page Restoration", "Social Media Genesis"],
    icon: Zap
  },
  {
    phase: "Phase 2: Authority Building",
    period: "Months 3-6",
    color: "bg-blue-500",
    glow: "glow-blue",
    tasks: ["AI WhatsApp Bot Deployment", "Wikipedia Page Creation", "BSCC Funnel Launch", "Rural Health Camps"],
    icon: ShieldCheck
  },
  {
    phase: "Phase 3: Market Penetration",
    period: "Months 6-12",
    color: "bg-purple-500",
    glow: "glow-purple",
    tasks: ["NEET Cycle Paid Campaigns", "Nepal Corridor Outreach", "Faculty Expert Video Series", "NIRF Ranking Prep"],
    icon: TrendingUp
  },
  {
    phase: "Phase 4: Dominance & Scale",
    period: "Months 12-24",
    color: "bg-green-500",
    glow: "glow-green",
    tasks: ["150/150 Seat Conversion", "#1 Search Ranking", "Institutional Brand Trust", "PG Admission Magnetism"],
    icon: Rocket
  }
];

export const RoadmapGantt = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="roadmap" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="badge-premium bg-purple-500/10 text-purple-400 border-purple-500/20">The 24-Month Execution</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic <span className="text-purple-500">Timeline</span></h2>
        <p className="text-text-secondary max-w-2xl">A sequenced multi-phase roadmap designed for rapid stabilization and long-term regional authority.</p>
      </div>

      <div className="relative px-6 md:px-0">
        {/* Timeline Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-primary/50 hidden md:block" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-0 relative z-10 overflow-x-auto pb-8 md:pb-0 scrollbar-hide">
          {roadmapData.map((item, i) => (
            <motion.div 
              key={item.phase}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:w-1/4 flex flex-col items-center md:px-4"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center relative mb-12">
                 <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white z-20 shadow-lg", item.color, item.glow)}>
                    <item.icon size={20} />
                 </div>
                 {/* Connection lines */}
                 {i > 0 && <div className="absolute right-full w-[calc(100%-24px)] h-[1px] bg-purple-500/30" />}
              </div>

              <div className="glass-card p-8 rounded-3xl border border-border-primary hover:border-purple-500/30 transition-all group w-full">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">{item.period}</span>
                    <item.icon className="md:hidden text-purple-500" size={16} />
                 </div>
                 <h3 className="font-bold text-xl mb-6 group-hover:text-purple-400 transition-colors">{item.phase}</h3>
                 
                 <div className="space-y-4">
                    {item.tasks.map((task) => (
                      <div key={task} className="flex gap-3 text-xs text-text-secondary items-start">
                         <div className={cn("w-1.5 h-1.5 rounded-full mt-1 shrink-0", item.color)} />
                         {task}
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
