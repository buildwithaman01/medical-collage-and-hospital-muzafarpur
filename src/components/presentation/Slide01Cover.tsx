"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Slide01Cover = () => (
  <div className="relative flex flex-col overflow-hidden" style={{ minHeight: "calc(100vh - 110px)" }}>
    {/* Left Teal Bar */}
    <div className="absolute left-0 top-0 w-1.5 h-full" style={{ background: "linear-gradient(180deg,#06B6D4,#3B82F6)" }} />

    {/* BG Orbs */}
    <div className="absolute top-[-20%] right-[-10%] w-[55%] h-[55%] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(#3B82F6,#7C3AED)" }} />
    <div className="absolute bottom-[-20%] left-[15%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: "#06B6D4" }} />

    {/* Top Chip */}
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="pl-8 pt-2">
      <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white rounded-sm" style={{ background: "#028090" }}>
        CONFIDENTIAL · GROWTH STRATEGY 2026
      </span>
    </motion.div>

    {/* Main Title */}
    <div className="pl-8 flex-1 flex flex-col justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "#22D3EE" }}>
        Pehchanly Digital Solutions × BDMCH
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22,1,0.36,1] }}
        className="text-5xl xl:text-7xl font-bold leading-[1.05] text-white mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
        Blue Diamond<br />Medical College<br /><span style={{ color: "#EFA00B" }}>&amp; Hospital</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="text-xl max-w-xl leading-relaxed" style={{ color: "#CADCFC" }}>
        Comprehensive Digital Growth, Branding &amp; Strategic Marketing Architecture
      </motion.p>
    </div>

    {/* Bottom Strip */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
      className="pl-8 pb-2 border-t flex items-center justify-between pr-8 pt-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="flex gap-10 text-sm" style={{ color: "#7EB8D4" }}>
        <span>bdmch.com</span><span>Muzaffarpur, Bihar</span><span>April 2026</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest" style={{ color: "#4A7FA5" }}>
        <Zap size={12} style={{ color: "#06B6D4" }} /> Prepared by Pehchanly Digital Solutions
      </div>
    </motion.div>

    {/* Diamond Motif */}
    <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute right-12 top-1/2 -translate-y-1/2 w-52 h-72 flex flex-col items-center justify-center rounded-xl border"
      style={{ borderColor: "#EFA00B", background: "rgba(239,160,11,0.04)" }}>
      <span className="text-7xl" style={{ color: "#EFA00B" }}>◆</span>
      <span className="text-xl font-bold tracking-[0.2em] mt-3 text-white">BDMCH</span>
      <span className="text-[9px] tracking-widest mt-1" style={{ color: "#7EB8D4" }}>EST. 2026</span>
    </motion.div>
  </div>
);
