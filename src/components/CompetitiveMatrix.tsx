"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Check, X, Star, MapPin, GraduationCap, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

const comparisonData = [
  { metric: "Est. Year", rdkj: "2021", bdmch: "2026", winner: "rdjk", note: "RDJK has 4yr head start" },
  { metric: "MBBS Seats", rdkj: "150", bdmch: "150", winner: "both", note: "NMC Approved" },
  { metric: "Parent Authority", rdkj: "Established", bdmch: "BDIT Group", winner: "bdmch", note: "Top engineering rank in Bihar" },
  { metric: "Hospital Beds", rdkj: "950+", bdmch: "950+", winner: "both", note: "Scale Parity" },
  { metric: "PG Courses", rdkj: "None", bdmch: "MD/MS in 12+", winner: "bdmch", note: "BDMCH has massive PG edge" },
  { metric: "Location", rdkj: "Local Muzaffarpur", bdmch: "NH-57 Corridor", winner: "bdmch", note: "Prime Nepal gateway corridor" },
  { metric: "Digital Authority", rdkj: "Medium", bdmch: "Zero (New)", winner: "rdjk", note: "Gap to be closed in 6 months" },
];

export const CompetitiveMatrix = () => {
  return (
    <section id="matrix" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="badge-premium bg-blue-500/10 text-blue-400 border-blue-500/20">Market Intelligence</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">BDMCH vs. RDJM <span className="text-blue-500">Analysis</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Objective comparison showing where BDMCH trails and where it objectively dominates its primary competitor.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border-primary glass-card">
          {/* Header */}
          <div className="grid grid-cols-4 bg-bg-tertiary/50 border-b border-border-primary p-6">
            <div className="col-span-2 text-xs font-bold text-text-muted uppercase tracking-[0.2em]">Competitive Metric</div>
            <div className="text-center text-xs font-bold text-text-muted uppercase tracking-[0.2em]">RDJM Medical</div>
            <div className="text-center text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">BDMCH (Target)</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border-primary">
            {comparisonData.map((row, i) => (
              <motion.div 
                key={row.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 p-6 hover:bg-white/5 transition-colors group items-center"
              >
                <div className="col-span-2">
                  <div className="font-bold text-lg mb-1">{row.metric}</div>
                  <div className="text-xs text-text-muted">{row.note}</div>
                </div>
                
                <div className="flex justify-center">
                  <div className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium",
                    row.winner === 'rdjk' ? "bg-amber-500/10 text-amber-500" : "text-text-muted"
                  )}>
                    {row.rdkj}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold glow-blue",
                    row.winner === 'bdmch' || row.winner === 'both' ? "bg-blue-600 text-white" : "border border-border-primary text-text-secondary"
                  )}>
                    {row.bdmch}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Winning Callout */}
          <div className="bg-blue-600/10 p-8 border-t border-blue-500/20 text-center">
            <div className="inline-flex items-center gap-3 text-blue-400 font-bold mb-2">
              <Trophy size={20} /> Strategic Advantage: Postgraduate Dominance
            </div>
            <p className="text-sm text-text-secondary">
              BDMCH's MD/MS status in 12 specialties is its biggest differentiator. RDJM has zero PG seats. 
              Pehchanly will pivot branding from "College" to "Educational Powerhouse" to exploit this gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
