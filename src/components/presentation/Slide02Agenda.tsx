"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./SlideShared";

const items = [
  { num: "01", title: "EVALUATION REPORT",    sub: "Current reality — website, online presence, competition & market" },
  { num: "02", title: "CRITICAL ISSUES",       sub: "What needs to be fixed RIGHT NOW — live problems found" },
  { num: "03", title: "COMPETITIVE LANDSCAPE", sub: "RDJM vs BDMCH — where you stand today" },
  { num: "04", title: "MARKET OPPORTUNITY",    sub: "Bihar medical education — the real numbers & your opening" },
  { num: "05", title: "THE MASTER STRATEGY",   sub: "8-pillar digital growth framework for 2026-28" },
  { num: "06", title: "24-MONTH ROADMAP",      sub: "Phase-by-phase execution plan with timelines" },
  { num: "07", title: "BUDGET & KPIS",         sub: "Investment benchmarks and success metrics" },
  { num: "08", title: "IMMEDIATE NEXT STEPS",  sub: "The first 30 actions starting tomorrow" },
];

export const Slide02Agenda = () => (
  <div className="flex flex-col">
    <motion.h1 variants={fadeUp} custom={0} initial="hidden" animate="show"
      className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
      AGENDA
    </motion.h1>
    <motion.p variants={fadeUp} custom={1} initial="hidden" animate="show"
      className="text-base mb-10" style={{ color: "#7EB8D4" }}>What this report covers</motion.p>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {items.map((item, i) => (
        <motion.div key={item.num} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex overflow-hidden rounded-xl border hover:border-[#028090] transition-colors duration-200"
          style={{ background: "rgba(13,46,84,0.5)", borderColor: "rgba(2,128,144,0.2)" }}>
          <div className="w-14 flex items-center justify-center text-lg font-bold text-white shrink-0 border-r"
            style={{ background: "#028090", borderColor: "rgba(2,128,144,0.4)" }}>
            {item.num}
          </div>
          <div className="p-4 flex-1 min-w-0">
            <div className="font-bold text-sm text-white mb-1">{item.title}</div>
            <div className="text-xs leading-tight" style={{ color: "#7EB8D4" }}>{item.sub}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
