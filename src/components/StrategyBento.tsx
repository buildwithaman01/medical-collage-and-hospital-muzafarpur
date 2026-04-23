"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Search, Share2, Users, Newspaper, Radio, Globe, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const outreachItems = [
  {
    title: "Integrated Outreach",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    content: [
      "Rural Health Camps in 5+ districts (Sitamarhi, Sheohar, etc.)",
      "NEET Roadshows in 20+ coaching institutes",
      "School Health Partnership Programs",
      "Nepal Corridor Gateway Campaign"
    ]
  },
  {
    title: "Performance Marketing",
    icon: Megaphone,
    color: "text-green-400",
    bg: "bg-green-500/10",
    content: [
      "Google Search Ads: Targeted ₹25-180 CPC for NEET 2026",
      "Meta Video Ads: Retargeting 17-23 age group students",
      "YouTube Pre-Roll: 15s non-skippable campus tours",
      "WhatsApp Broadcast: Direct admission funneling"
    ]
  },
  {
    title: "PR & Brand Authority",
    icon: Newspaper,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    content: [
      "Wikipedia Article creation (Authority Signal #1)",
      "Monthly Press Releases (Dainik Bhaskar, TOI)",
      "Faculty Expert Video Series (E-E-A-T builder)",
      "NIRF Ranking preparation cycle"
    ]
  }
];

export const StrategyBento = () => {
  return (
    <section className="py-24 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="badge-premium bg-purple-500/10 text-purple-400 border-purple-500/20">The Execution Engine</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Integrated <span className="text-purple-500">Global Strategy</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Scaling BDMCH through a multi-channel approach that combines digital performance with ground-level community trust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outreachItems.map((item, i) => (
            <motion.div 
               key={item.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="p-8 glass-card rounded-3xl border border-border-primary hover:border-white/10 transition-all flex flex-col h-full"
            >
               <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-8", item.bg, item.color)}>
                  <item.icon size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
               <ul className="space-y-4 mb-8 flex-1">
                  {item.content.map((li, j) => (
                    <li key={j} className="flex gap-3 text-sm text-text-secondary leading-tight items-start">
                       <span className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", item.color.replace('text-', 'bg-'))} />
                       {li}
                    </li>
                  ))}
               </ul>
               <div className="p-4 bg-white/5 rounded-2xl text-[10px] font-mono tracking-widest text-text-muted uppercase text-center border border-white/5">
                  Execution Layer: Pehchanly Managed
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
