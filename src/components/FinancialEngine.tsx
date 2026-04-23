"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, FileCheck, Coins, CreditCard, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const funnelSteps = [
  {
    icon: Users,
    title: "Wide Awareness",
    label: "3,00,000+ Students",
    desc: "12th pass students in Bihar aware of the BSCC scheme but unsure of eligible colleges.",
    color: "from-blue-500/20 to-blue-600/20",
    glow: "glow-blue",
    width: "w-full"
  },
  {
    icon: TrendingUp,
    title: "Intent Capturing",
    label: "10,000+ Inquiries",
    desc: "Students searching for 'BSCC Nursing/Allied' colleges via Pehchanly SEO keywords.",
    color: "from-cyan-500/20 to-cyan-600/20",
    glow: "glow-cyan",
    width: "w-[85%]"
  },
  {
    icon: FileCheck,
    title: "Simplified Application",
    label: "Smart Eligibility Portal",
    desc: "Pehchanly's AI Admission Navigator simplifies the 4-lakh credit application process.",
    color: "from-purple-500/20 to-purple-600/20",
    glow: "glow-purple",
    width: "w-[70%]"
  },
  {
    icon: Coins,
    title: "Institutional Enrollment",
    label: "150 Seats Filled",
    desc: "Targeted conversion of students using BSCC for 100% seat occupancy at BDMCH.",
    color: "from-green-500/20 to-green-600/20",
    glow: "glow-green",
    width: "w-[55%]"
  }
];

export const FinancialEngine = () => {
  return (
    <section id="funnel" className="py-24 bg-bg-secondary relative overflow-hidden">
       {/* Background decorative grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="badge-premium bg-green-500/10 text-green-500 border-green-500/20">The Growth Lever</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The BSCC <span className="text-green-500">Funnel</span></h2>
          <p className="text-text-secondary max-w-3xl mx-auto mb-20">
            Visualizing how we convert the ₹4 Lakh Bihar Student Credit Card (BSCC) 
            government program into a high-intent enrollment engine for BDMCH.
          </p>

          <div className="flex flex-col items-center max-w-4xl mx-auto gap-4">
            {funnelSteps.map((step, i) => (
              <React.Fragment key={step.title}>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.15 }}
                   viewport={{ once: true }}
                   className={cn(
                    "relative overflow-hidden group p-8 rounded-2xl glass-card flex items-center justify-between border-t border-white/10",
                    step.width,
                    step.glow
                   )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-r opacity-50", step.color)} />
                  
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <step.icon size={24} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                      <p className="text-sm text-text-secondary max-w-md">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 text-right">
                    <div className="text-2xl font-bold text-white">{step.label}</div>
                  </div>
                </motion.div>

                {i < funnelSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 0.5, height: 40 }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <ArrowDown size={32} className="text-text-muted animate-bounce" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-20 p-8 glass-card border-green-500/20 max-w-2xl mx-auto rounded-3xl">
            <h4 className="flex items-center justify-center gap-2 text-green-500 font-bold mb-4">
              <CreditCard size={20} /> PEHCHANLY BSCC ACCELERATOR
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Our plan includes dedicated "BSCC Desks" in high-performing districts (Nepal Corridor) 
              linked to our SEO content, ensuring students choose BDMCH-affiliated credit-compatible courses.
            </p>
          </div>
       </div>
    </section>
  );
};
