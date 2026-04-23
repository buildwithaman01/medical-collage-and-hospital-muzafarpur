"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const phases = [
  {
    num: "1", phase: "EMERGENCY\nSTABILISATION", period: "Months 0–1", color: "#EF4444",
    items: ["Fix all broken links & lorem ipsum","Upload NMC/LOP documents online","Fix faculty page crash","Remove wrong college's notice","Publish fee structure","Setup Google Business Profile","Submit sitemap to Google","Create Instagram + Facebook"],
  },
  {
    num: "2", phase: "DIGITAL\nFOUNDATION", period: "Months 1–6", color: "#028090",
    items: ["Complete website overhaul","Submit to Collegedunia, Shiksha","Launch AI WhatsApp chatbot","Begin monthly health camps","Start Facebook + Instagram posting","Launch BSCC awareness campaign","Wikipedia page creation","First press releases"],
  },
  {
    num: "3", phase: "GROWTH &\nAUTHORITY", period: "Months 6–12", color: "#3B82F6",
    items: ["YouTube channel — 1 video/week","Faculty expert video series","Google Ads — NEET season","50+ SEO keyword pages","Nepal outreach campaign","School health camp partnerships","NIRF ranking application","AI appointment booking live"],
  },
  {
    num: "4", phase: "DOMINANCE &\nSCALE", period: "Months 12–24", color: "#EFA00B",
    items: ["2026-27 NEET full ad campaign","PG admissions marketing push","10,000+ social media followers","Launch patient mobile app","Expand health camp to 20 districts","Media features & TV coverage","#1 search ranking in Muzaffarpur","BDMCH = top choice North Bihar"],
  },
];

export const Slide16Roadmap = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Execution Roadmap" title="24-Month Execution Roadmap"
      subtitle="Four clear phases — from emergency fixes to market dominance. Every step is sequenced for maximum impact." />

    <div className="grid grid-cols-4 gap-4 flex-1">
      {phases.map((p, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex flex-col rounded-2xl overflow-hidden border relative"
          style={{ borderColor: p.color + "50", background: p.color + "08" }}>
          {/* Phase Header */}
          <div className="py-3 text-center relative" style={{ background: p.color }}>
            {/* Number circle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center font-black text-sm border-2"
              style={{ background: "#0F172A", borderColor: p.color, color: p.color }}>
              {p.num}
            </div>
            <div className="text-white text-[11px] font-bold whitespace-pre-line mt-1">{p.phase}</div>
            <div className="text-[10px] font-medium italic mt-0.5 opacity-80 text-white">{p.period}</div>
          </div>
          {/* Items */}
          <div className="p-4 space-y-2.5 flex-1">
            {p.items.map((item, j) => (
              <div key={j} className="flex gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: p.color }} />
                <span style={{ color: "#E5E7EB" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
