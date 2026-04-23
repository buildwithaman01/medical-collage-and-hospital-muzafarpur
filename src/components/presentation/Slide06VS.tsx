"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const rdjm = [
  { key: "Established",  val: "2021 — 4+ years of brand trust" },
  { key: "MBBS Seats",   val: "150 seats — NMC approved" },
  { key: "Hospital",     val: "950+ bed multi-specialty" },
  { key: "Fees",         val: "~₹5 lakh/year (₹60L total)" },
  { key: "PG Courses",   val: "None — MBBS only" },
  { key: "Digital",      val: "Wikipedia, Collegedunia, Shiksha, Careers360" },
  { key: "Social",       val: "Minimal but present" },
  { key: "Cut-off 2024", val: "NEET rank 10,47,001 (accessible)" },
];

const bdmch = [
  { key: "Established",  val: "2026 — NEW, fresh brand to build",              color: "amber" },
  { key: "MBBS Seats",   val: "150 seats — NMC Letter of Permission 2025",     color: "green" },
  { key: "Hospital",     val: "950+ bed — LARGER than RDJM",                   color: "green" },
  { key: "Fees",         val: "Not published yet — major opportunity",          color: "red"   },
  { key: "PG Courses",   val: "MD/MS in 12 specialties — RDJM has NONE ✓",    color: "green" },
  { key: "Digital",      val: "Zero presence — clean slate to dominate",       color: "amber" },
  { key: "Social",       val: "None — start from scratch correctly",            color: "amber" },
  { key: "Location",     val: "NH-57 corridor — Nepal gateway, prime spot",    color: "green" },
];

const colorMap: Record<string, string> = { green: "#4ADE80", red: "#F87171", amber: "#FBBF24" };

export const Slide06VS = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Competitive Analysis" title="RDJM vs BDMCH — Head to Head"
      subtitle="Real numbers from verified sources. RDJM has a 4-year head start. The gap is real but closeable." />

    <div className="flex-1 grid grid-cols-2 gap-6 relative">
      {/* VS Badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-xl"
        style={{ background: "#EFA00B", color: "#0B1220" }}>VS</div>

      {/* RDJM */}
      <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="py-3 text-center text-sm font-bold text-white" style={{ background: "#374151" }}>
          RDJM Medical College (Competitor)
        </div>
        <div className="p-5 space-y-2" style={{ background: "rgba(55,65,81,0.3)" }}>
          {rdjm.map((f, i) => (
            <motion.div key={i}
              className="flex gap-2 text-sm px-2 py-1.5 rounded-lg"
              whileHover={{ background: "rgba(255,255,255,0.05)", x: 4 }}
              transition={{ duration: 0.15 }}>
              <span className="font-bold w-28 shrink-0" style={{ color: "#9CA3AF" }}>{f.key}:</span>
              <span style={{ color: "#E5E7EB" }}>{f.val}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BDMCH */}
      <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(6,182,212,0.4)" }}>
        <div className="py-3 text-center text-sm font-bold text-white" style={{ background: "#0B2545" }}>
          BDMCH — Blue Diamond (Our Institution)
        </div>
        <div className="p-5 space-y-2" style={{ background: "rgba(13,46,84,0.4)" }}>
          {bdmch.map((f, i) => (
            <motion.div key={i}
              className="flex gap-2 text-sm px-2 py-1.5 rounded-lg"
              whileHover={{ background: "rgba(6,182,212,0.08)", x: -4 }}
              transition={{ duration: 0.15 }}>
              <span className="font-bold w-28 shrink-0" style={{ color: "#9CA3AF" }}>{f.key}:</span>
              <span className="font-medium" style={{ color: colorMap[f.color] || "#E5E7EB" }}>{f.val}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
