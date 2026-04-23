"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Presentation, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #0B1220 60%, #0F172A 100%)" }}>

      {/* Ambient orbs */}
      <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(#2563EB, #7C3AED)" }} />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(#06B6D4, #3B82F6)" }} />
      
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        
        {/* Agency badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] border mb-12"
          style={{ background: "rgba(6,182,212,0.08)", borderColor: "rgba(6,182,212,0.25)", color: "#22D3EE" }}
        >
          <Zap size={10} />
          Pehchanly Digital Solutions × Blue Diamond Medical College & Hospital
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          From{' '}
          <span style={{ color: "#EF4444" }}>Broken</span>
          {' '}to{' '}
          <span style={{
            background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Dominant.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ color: "#7EB8D4" }}
        >
          A complete digital transformation strategy for BDMCH —
          the only medical college in North Bihar with MD/MS seats that has zero digital presence.
        </motion.p>

        {/* Positioning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-widest mb-16"
          style={{ color: "#4A7FA5" }}
        >
          <span>Audit Inspection</span>
          <span className="opacity-30">•</span>
          <span>Branding</span>
          <span className="opacity-30">•</span>
          <span>Strategy</span>
          <span className="opacity-30">•</span>
          <span>Marketing</span>
          <span className="opacity-30">•</span>
          <span>Growth</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA → Presentation */}
          <motion.a
            href="/presentation"
            whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(239,160,11,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-black transition-all"
            style={{ background: "#EFA00B" }}
          >
            <Presentation size={20} />
            Explore Full Strategy
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Secondary */}
          <motion.div
            whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            className="inline-flex items-center gap-2.5 px-8 py-5 rounded-2xl text-sm font-bold border transition-all cursor-default"
            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#9CA3AF" }}
          >
            <Shield size={16} style={{ color: "#22D3EE" }} />
            Confidential Strategy Report
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "#7EB8D4" }}>Scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #06B6D4, transparent)" }} />
      </motion.div>
    </section>
  );
};
