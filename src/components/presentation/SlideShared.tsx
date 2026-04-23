"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props { isDark?: boolean }

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const }
  }),
};

export const SlideHeader = ({ badge, title, subtitle, isDark = false }: { badge?: string; title: string; subtitle?: string; isDark?: boolean }) => (
  <div className="mb-10">
    {badge && (
      <motion.span variants={fadeUp} custom={0} initial="hidden" animate="show"
        className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full border mb-5"
        style={{ background: "rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.3)", color: "#60A5FA" }}
      >{badge}</motion.span>
    )}
    <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show"
      className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${isDark ? "text-white" : "text-white"}`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >{title}</motion.h1>
    {subtitle && (
      <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show"
        className="text-base text-[#9CA3AF] max-w-3xl leading-relaxed"
      >{subtitle}</motion.p>
    )}
  </div>
);

export const Tag = ({ children, color }: { children: React.ReactNode; color: "red" | "amber" | "green" | "blue" | "cyan" }) => {
  const map = {
    red:   { bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.4)",   text: "#F87171" },
    amber: { bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.4)",  text: "#FBBF24" },
    green: { bg: "rgba(34,197,94,0.12)",   border: "rgba(34,197,94,0.4)",   text: "#4ADE80" },
    blue:  { bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.4)",  text: "#60A5FA" },
    cyan:  { bg: "rgba(6,182,212,0.12)",   border: "rgba(6,182,212,0.4)",   text: "#22D3EE" },
  };
  const c = map[color];
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border"
      style={{ background: c.bg, borderColor: c.border, color: c.text }}
    >{children}</span>
  );
};

export const GlassCard = ({ children, className = "", glow }: { children: React.ReactNode; className?: string; glow?: "blue" | "cyan" | "green" | "amber" | "red" }) => {
  const glowMap: Record<string, string> = {
    blue:  "0 0 40px rgba(59,130,246,0.2)",
    cyan:  "0 0 40px rgba(6,182,212,0.2)",
    green: "0 0 40px rgba(34,197,94,0.2)",
    amber: "0 0 40px rgba(245,158,11,0.2)",
    red:   "0 0 40px rgba(239,68,68,0.2)",
  };
  return (
    <div className={`rounded-2xl border p-6 ${className}`}
      style={{
        background: "rgba(31,41,55,0.6)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: glow ? glowMap[glow] : undefined,
      }}
    >{children}</div>
  );
};
