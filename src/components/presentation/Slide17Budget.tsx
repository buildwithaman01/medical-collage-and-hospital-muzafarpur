"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const budgetBars = [
  { item: "Website & Tech",    cost: 50000,  pct: 33 },
  { item: "SEO & Content",     cost: 40000,  pct: 27 },
  { item: "Paid Ads (peak)",   cost: 150000, pct: 100 },
  { item: "Social Media",      cost: 30000,  pct: 20 },
  { item: "PR & Outreach",     cost: 25000,  pct: 17 },
  { item: "AI Tools",          cost: 20000,  pct: 13 },
];

const kpis = [
  { metric: "Website Traffic",          t1: "Month 3",      v1: "1,000 visitors/mo",        t2: "Month 12",      v2: "10,000 visitors/mo" },
  { metric: "Google Ranking",           t1: "Month 3",      v1: "Indexed & crawled",        t2: "Month 12",      v2: "Top 3 for 'MBBS Muzaffarpur'" },
  { metric: "Education Portal Listings",t1: "Month 1",      v1: "Submitted to all 5",       t2: "Month 3",       v2: "Live on all 5 portals" },
  { metric: "Social Media Followers",   t1: "Month 3",      v1: "500 total",                t2: "Month 12",      v2: "10,000+ total" },
  { metric: "AI Leads (WhatsApp)",      t1: "Month 3",      v1: "50 leads/month",           t2: "Month 12",      v2: "500+ leads/month" },
  { metric: "OPD Patient Footfall",     t1: "Month 3",      v1: "Baseline +10%",            t2: "Month 12",      v2: "+40% from digital" },
  { metric: "MBBS Admissions",          t1: "Cycle 1 (2026)",v1: "Target: 80+ seats",       t2: "Cycle 2 (2027)",v2: "Target: 150/150 seats" },
  { metric: "Wikipedia",                t1: "Month 2",      v1: "Page created",             t2: "Month 6",       v2: "AI models citing BDMCH" },
];

export const Slide17Budget = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Budget & KPIs" title="Investment Overview & Success Metrics"
      subtitle="Realistic budgets benchmarked for Indian medical education market. ROI measurable at every stage." />

    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Budget Chart */}
      <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show"
        className="rounded-2xl p-5 border flex flex-col"
        style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#9CA3AF" }}>Monthly Budget Allocation (₹)</div>
        <div className="space-y-3 flex-1">
          {budgetBars.map((b, i) => (
            <div key={i} className="text-xs">
              <div className="flex justify-between mb-1">
                <span style={{ color: "#E5E7EB" }}>{b.item}</span>
                <span className="font-bold" style={{ color: "#22D3EE" }}>₹{b.cost.toLocaleString("en-IN")}</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${b.pct}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="h-full rounded-full" style={{ background: "#028090" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-xs" style={{ color: "#9CA3AF" }}>
          Peak monthly budget: ~<strong style={{ color: "#4ADE80" }}>₹3.15 lakh</strong> | Annual: ~₹25-30 lakh<br />
          Average cost-per-MBBS-admission: <strong style={{ color: "#4ADE80" }}>₹8,000–25,000</strong>
        </div>
      </motion.div>

      {/* KPI Table */}
      <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border flex flex-col"
        style={{ borderColor: "rgba(59,130,246,0.3)" }}>
        <div className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-center text-white"
          style={{ background: "#0B2545" }}>Key Performance Indicators</div>
        <div className="divide-y flex-1">
          {kpis.map((kpi, i) => (
            <div key={i} className="flex items-center px-4 py-2 text-[11px]"
              style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent" }}>
              <div className="flex-1 font-bold text-white">{kpi.metric}</div>
              <div className="w-36 text-center" style={{ color: "#6B7280" }}>
                <div style={{ color: "#9CA3AF" }}>{kpi.t1}</div>
                <div>{kpi.v1}</div>
              </div>
              <div className="w-36 text-center">
                <div style={{ color: "#9CA3AF" }}>{kpi.t2}</div>
                <div className="font-bold" style={{ color: "#22D3EE" }}>{kpi.v2}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
