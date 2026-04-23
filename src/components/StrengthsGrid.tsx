"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, GraduationCap, Star, MapPin, ShieldCheck, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const strengths = [
  { icon: Hospital, title: "950+ Bed Hospital", desc: "One of North Bihar's largest private complexes with 14 OTs and specialized ICU wings." },
  { icon: GraduationCap, title: "19 Departments", desc: "Comprehensive clinical coverage from Anatomy to advanced Psychiatry." },
  { icon: Star, title: "MD/MS PG Seats", desc: "12 postgraduate specialties—a massive competitive edge over regional peers." },
  { icon: MapPin, title: "NH-57 Gateway", desc: "Strategic Muzaffarpur-Nepal corridor location with massive patient catchment." },
  { icon: ShieldCheck, title: "BDIT Parent Group", desc: "Leveraging the 'Blue Diamond' brand legacy in elite engineering education." },
  { icon: Lightbulb, title: "Tech-Led Leadership", desc: "Principal Dr. Shrawan Kumar's CS background drives a technology-first medical vision." },
];

export const StrengthsGrid = () => {
  return (
    <section id="strengths" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <div className="badge-premium bg-blue-500/10 text-blue-400 border-blue-500/20">Institutional Assets</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Foundation of <span className="text-blue-500">Excellence.</span></h2>
              <p className="text-text-secondary">Before the digital transformation, BDMCH already holds the physical and academic assets to dominate the market.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {strengths.map((item, i) => (
             <motion.div 
               key={item.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="p-8 glass-card rounded-3xl border border-border-primary hover:border-blue-500/30 transition-all group"
             >
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  <item.icon size={24} />
               </div>
               <h3 className="font-bold text-xl mb-3">{item.title}</h3>
               <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
