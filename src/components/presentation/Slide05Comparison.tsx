"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const rows = [
  { label: "Working Website with real content",         bdmch: "✗ Broken",          bc: "red",   rdjm: "✓ Yes",                bc2: "green" },
  { label: "Collegedunia (India's #1 college portal)",  bdmch: "✗ Not listed",       bc: "red",   rdjm: "✓ Listed & ranked",    bc2: "green" },
  { label: "Shiksha.com (top NEET student platform)",   bdmch: "✗ Not listed",       bc: "red",   rdjm: "✓ Listed",              bc2: "green" },
  { label: "Careers360 listing",                        bdmch: "✗ Not listed",       bc: "red",   rdjm: "✓ Listed",              bc2: "green" },
  { label: "Wikipedia page (critical for AI trust)",    bdmch: "✗ None",             bc: "red",   rdjm: "✓ Has page",            bc2: "green" },
  { label: "Google Business Profile + Reviews",         bdmch: "✗ Unverified",       bc: "red",   rdjm: "✓ Active",              bc2: "green" },
  { label: "Instagram / Facebook / YouTube",            bdmch: "✗ Zero",             bc: "red",   rdjm: "— Minimal",             bc2: "amber" },
  { label: "NMC official college list",                 bdmch: "✗ Not found",        bc: "red",   rdjm: "✓ Listed",              bc2: "green" },
  { label: "Press & media coverage",                    bdmch: "1 tweet",            bc: "red",   rdjm: "Multiple articles",     bc2: "green" },
  { label: "Published fee structure",                   bdmch: "✗ None",             bc: "red",   rdjm: "✓ ₹5L/yr published",   bc2: "green" },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  red:   { bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.5)",  text: "#F87171" },
  green: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.5)",  text: "#4ADE80" },
  amber: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.5)", text: "#FBBF24" },
};

export const Slide05Comparison = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Online Presence" title="Digital Presence — BDMCH vs Competitor"
      subtitle="RDJM Medical College (est. 2021) has built 4 years of digital authority. BDMCH has almost none." />

    {/* Header Row */}
    <div className="flex items-center rounded-t-xl px-4 py-3 text-[10px] font-bold uppercase tracking-widest"
      style={{ background: "#0B2545" }}>
      <div className="flex-1 text-white">Platform / Presence</div>
      <div className="w-40 text-center text-white">BDMCH</div>
      <div className="w-48 text-center" style={{ color: "#EFA00B" }}>RDJM (Competitor)</div>
      <div className="w-12 text-center text-white">Imp</div>
    </div>

    <div className="flex-1 overflow-hidden border border-t-0 rounded-b-xl divide-y"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {rows.map((row, i) => {
        const bC = colorMap[row.bc];
        const rC = colorMap[row.bc2];
        return (
          <motion.div key={i} variants={fadeUp} custom={i + 3} initial="hidden" animate="show"
            className="flex items-center px-4 py-2.5"
            style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.01)" }}>
            <div className="flex-1 text-sm" style={{ color: "#E5E7EB" }}>{row.label}</div>
            <div className="w-40 flex justify-center">
              <span className="px-2 py-0.5 rounded text-[9px] font-bold border"
                style={{ background: bC.bg, borderColor: bC.border, color: bC.text }}>{row.bdmch}</span>
            </div>
            <div className="w-48 flex justify-center">
              <span className="px-2 py-0.5 rounded text-[9px] font-bold border"
                style={{ background: rC.bg, borderColor: rC.border, color: rC.text }}>{row.rdjm}</span>
            </div>
            <div className="w-12 text-center text-sm">
              {row.bc === "red" ? "🔴" : "🟡"}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);
