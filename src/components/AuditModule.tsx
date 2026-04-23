"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, ShieldAlert, Cpu, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const auditData = [
  {
    id: 1,
    title: "Header Integrity",
    issue: "Showcases Netaji Subhas Medical College (Bihta) legal notice. Lorem Ipsum in hero sliders.",
    fix: "High-authority BDMCH branding with validated Letter of Permission (LOP) 2025 integration.",
    severity: "Critical",
    status: "Fixed in Plan"
  },
  {
    id: 2,
    title: "Technical Infrastructure",
    issue: "Faculty-doctors.php returns server error. 15+ dead links pointing to '#'.",
    fix: "Next.js 15+ architecture with edge-side rendering. Broken link purge and dynamic bio-sync.",
    severity: "Critical",
    status: "Fixed in Plan"
  },
  {
    id: 3,
    title: "SEO Architecture",
    issue: "No H1 or H2 tags. Missing sitemap.xml. Missing schema markup.",
    fix: "Machine-readable schema.org integration. Dynamic metadata and automated sitemap generation.",
    severity: "High",
    status: "Fixed in Plan"
  },
  {
    id: 4,
    title: "Patient Experience",
    issue: "Appointment button is dead. Media gallery shows 'Coming Soon' placeholder.",
    fix: "Agentic AI appointment booking and automated WhatsApp notification engine.",
    severity: "High",
    status: "Fixed in Plan"
  }
];

export const AuditModule = () => {
  const [activeTab, setActiveTab] = useState<'issue' | 'fix'>('issue');

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="badge-premium bg-amber-500/10 text-amber-500 border-amber-500/20">The Infrastructure Audit</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Structural Analysis vs. <span className="text-cyan-400">Optimization Plan</span></h2>
            <p className="text-text-secondary">A side-by-side component-level breakdown of current technical debt versus the Pehchanly vision.</p>
          </div>
          
          <div className="flex p-1 bg-bg-tertiary rounded-full border border-border-primary">
            <button 
              onClick={() => setActiveTab('issue')}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold transition-all",
                activeTab === 'issue' ? "bg-red-500 text-white shadow-lg" : "text-text-muted hover:text-white"
              )}
            >
              Current Issues
            </button>
            <button 
              onClick={() => setActiveTab('fix')}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold transition-all",
                activeTab === 'fix' ? "bg-cyan-500 text-white shadow-lg" : "text-text-muted hover:text-white"
              )}
            >
              Pehchanly Optimization
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {auditData.map((item, index) => (
              <motion.div
                key={`${item.id}-${activeTab}`}
                initial={{ opacity: 0, x: activeTab === 'issue' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  "p-8 rounded-2xl glass-card relative overflow-hidden group border-l-4",
                  activeTab === 'issue' ? "border-l-red-500" : "border-l-cyan-500"
                )}
              >
                {/* Background Accent */}
                <div className={cn(
                  "absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-20",
                  activeTab === 'issue' ? "bg-red-500" : "bg-cyan-500"
                )} />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      activeTab === 'issue' ? "bg-red-500/10 text-red-500" : "bg-cyan-500/10 text-cyan-400"
                    )}>
                      {activeTab === 'issue' ? <ShieldAlert size={20} /> : <Zap size={20} />}
                    </div>
                    <h3 className="font-bold text-xl">{item.title}</h3>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                    activeTab === 'issue' ? "border-red-500/30 text-red-400 bg-red-500/5" : "border-cyan-400/30 text-cyan-400 bg-cyan-400/5"
                  )}>
                    {activeTab === 'issue' ? item.severity : item.status}
                  </span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-4">
                  {activeTab === 'issue' ? item.issue : item.fix}
                </p>

                <div className="flex items-center gap-2 mt-auto text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  {activeTab === 'issue' ? (
                    <> <AlertCircle size={10} className="text-red-500" /> Source: independent_eval_2026.pdf </>
                  ) : (
                    <> <CheckCircle2 size={10} className="text-cyan-400" /> Powered by Agentic AI Architecture </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
