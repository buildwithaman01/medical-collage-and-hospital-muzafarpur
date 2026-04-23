"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const tableRows = [
  { seg: "MBBS Admissions (Bihar)",  cpc: "₹25 – 180",  cpl: "₹500 – 2,000",  budget: "₹50,000 – 1,00,000", timing: "June–Sep (NEET results)" },
  { seg: "Healthcare & OPD Services",cpc: "₹20 – 100",  cpl: "₹400 – 2,500",  budget: "₹25,000 – 2,00,000", timing: "Year-round" },
  { seg: "Hyperlocal Muzaffarpur",   cpc: "₹10 – 40",   cpl: "₹150 – 400",    budget: "₹15,000 – 30,000",   timing: "Year-round" },
  { seg: "PG (MD/MS) Admissions",    cpc: "₹30 – 200",  cpl: "₹800 – 3,000",  budget: "₹30,000 – 60,000",   timing: "Nov–Feb (NEET-PG)" },
  { seg: "BSCC Loan Awareness",      cpc: "₹8 – 30",    cpl: "₹100 – 300",    budget: "₹10,000 – 20,000",   timing: "Feb–June" },
];

const strats = [
  { title: "Google Search Ads",          desc: "Target students searching 'MBBS Bihar', 'medical college Muzaffarpur', 'NEET counselling 2026 Bihar'. Use exact match & phrase match. Retarget website visitors." },
  { title: "Meta (Facebook/Instagram)",  desc: "Target 17-22 year olds in Bihar + Nepal. Lookalike audience from NEET groups. Run video ads showing campus, labs, hospital. Parents targeting for loan/fee videos." },
  { title: "YouTube Pre-Roll Ads",       desc: "15-second non-skippable ads before NEET preparation content on YouTube. Show campus B-roll + faculty. Cost-effective brand awareness across Bihar." },
];

export const Slide13PaidAds = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Pillar 05 — Paid Ads" title="Performance Marketing — Google & Meta Ads"
      subtitle="Data-driven campaigns timed to NEET counselling cycles — maximum ROI, zero wasted spend" />

    {/* Budget Table */}
    <div className="rounded-xl overflow-hidden mb-4">
      <div className="flex text-[10px] font-bold uppercase tracking-widest px-4 py-3"
        style={{ background: "#0B2545" }}>
        {["Campaign Segment","Avg CPC (₹)","Avg Cost/Lead (₹)","Monthly Budget","Best Timing"].map((h, i) => (
          <div key={i} className={`text-white ${i === 0 ? "flex-1" : "w-36 text-center"}`}>{h}</div>
        ))}
      </div>
      {tableRows.map((row, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex items-center px-4 py-2.5 text-xs"
          style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)" }}>
          <div className="flex-1 font-bold" style={{ color: "#E5E7EB" }}>{row.seg}</div>
          <div className="w-36 text-center" style={{ color: "#9CA3AF" }}>{row.cpc}</div>
          <div className="w-36 text-center" style={{ color: "#9CA3AF" }}>{row.cpl}</div>
          <div className="w-36 text-center font-bold" style={{ color: "#4ADE80" }}>{row.budget}</div>
          <div className="w-36 text-center" style={{ color: "#9CA3AF" }}>{row.timing}</div>
        </motion.div>
      ))}
    </div>

    {/* Strategy Cards */}
    <div className="grid grid-cols-3 gap-4 flex-1">
      {strats.map((s, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 8} initial="hidden" animate="show"
          className="rounded-xl p-5 border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(6,182,212,0.2)" }}>
          <div className="font-bold text-sm text-white mb-2">{s.title}</div>
          <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>{s.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} custom={12} initial="hidden" animate="show"
      className="mt-3 rounded-xl px-4 py-2.5 text-xs border"
      style={{ background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.3)", color: "#4ADE80" }}>
      <strong>PRO TIP:</strong> Pause all ad spend during non-NEET months. Concentrate 70% of annual ad budget in June–October (peak counselling season). This alone cuts cost-per-admission by 40%.
    </motion.div>
  </div>
);
