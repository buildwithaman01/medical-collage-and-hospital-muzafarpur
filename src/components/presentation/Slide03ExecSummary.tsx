"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trophy, TrendingDown, TrendingUp, ExternalLink } from "lucide-react";
import { fadeUp } from "./SlideShared";

const stats = [
  { val: "1",  suffix: "/10",  lbl: "Website Content Score",       bad: true },
  { val: "15", suffix: "+",    lbl: "Dead Links on Site",          bad: true },
  { val: "0",  suffix: "",     lbl: "Education Portal Listings",   bad: true },
  { val: "0",  suffix: "",     lbl: "Social Media Profiles",       bad: true },
  { val: "₹0", suffix: "",     lbl: "Fee Structure Published",     bad: true },
  { val: "∞",  suffix: "",     lbl: "Growth Opportunity Waiting",  bad: false },
];

export const Slide03ExecSummary = () => (
  <div className="flex flex-col">
    <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
      <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full border mb-5"
        style={{ background: "rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.3)", color: "#60A5FA" }}>
        Executive Summary
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
        The Situation at a Glance
      </h1>
      <p className="text-sm text-[#9CA3AF] mb-8">
        What we found after a full independent evaluation of BDMCH — April 2026.
      </p>
    </motion.div>

    {/* Animated stat tiles */}
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
      {stats.map((s, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="rounded-xl p-5 text-center border relative overflow-hidden group"
          style={{
            background: s.bad ? "rgba(239,68,68,0.08)" : "rgba(34,197,94,0.08)",
            borderColor: s.bad ? "rgba(239,68,68,0.35)" : "rgba(34,197,94,0.35)",
          }}>
          {/* Animated count-up effect using scale */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.07, duration: 0.5, type: "spring" }}
            className="text-3xl font-bold mb-1"
            style={{ color: s.bad ? "#F87171" : "#4ADE80", fontFamily: "var(--font-outfit)" }}
          >
            {s.val}<span className="text-xl">{s.suffix}</span>
          </motion.div>
          <div className="text-[9px] uppercase tracking-wider" style={{ color: "#9CA3AF" }}>{s.lbl}</div>
          <div className="absolute top-2 right-2 opacity-30">
            {s.bad ? <TrendingDown size={12} style={{ color: "#F87171" }} /> : <TrendingUp size={12} style={{ color: "#4ADE80" }} />}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Urgent Finding */}
    <motion.a
      href="https://bdmch.com" target="_blank" rel="noopener noreferrer"
      variants={fadeUp} custom={8} initial="hidden" animate="show"
      className="flex items-start gap-4 rounded-xl p-5 mb-4 border cursor-pointer group transition-all hover:border-amber-500/60"
      style={{ background: "rgba(13,46,84,0.8)", borderColor: "rgba(239,160,11,0.4)" }}
      whileHover={{ x: 4 }}>
      <AlertTriangle size={28} style={{ color: "#EFA00B" }} className="shrink-0 mt-0.5" />
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#EFA00B" }}>
          URGENT FINDING <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#CADCFC" }}>
          The BDMCH homepage currently shows <strong>LOREM IPSUM placeholder text</strong> to every visitor.
          A notice from a completely different college (Netaji Subhas Medical College, Bihta) is live on their
          news page. The Faculty page crashes on load. These must be fixed within 24 hours.
        </p>
      </div>
    </motion.a>

    {/* Opportunity */}
    <motion.div variants={fadeUp} custom={9} initial="hidden" animate="show"
      className="flex items-start gap-4 rounded-xl p-5 border"
      style={{ background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.3)" }}>
      <Trophy size={22} style={{ color: "#4ADE80" }} className="shrink-0 mt-0.5" />
      <p className="text-sm leading-relaxed" style={{ color: "#D1FAE5" }}>
        <strong>OPPORTUNITY:</strong> BDMCH has genuine strengths — 950+ bed hospital, 19 departments,
        MD/MS PG seats in 12 specialties (RDJM has none), prime NH-57 location. With the right strategy,
        BDMCH can become the <strong>#1 private medical destination in North Bihar within 24 months.</strong>
      </p>
    </motion.div>
  </div>
);
