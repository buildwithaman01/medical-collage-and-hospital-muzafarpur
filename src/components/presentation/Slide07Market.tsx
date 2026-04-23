"use client";
import { motion } from "framer-motion";
import { Globe, GraduationCap, Rocket, Brain } from "lucide-react";
import { SlideHeader, fadeUp } from "./SlideShared";

const bigStats = [
  { val: "22+",        lbl: "Medical colleges\nin Bihar 2026" },
  { val: "1,900",      lbl: "Private MBBS seats\navailable" },
  { val: "₹11-16L",   lbl: "Annual fee per student\n(private colleges)" },
  { val: "Open State", lbl: "Non-Bihar students\ncan apply too" },
  { val: "#2",         lbl: "Muzaffarpur — 2nd\nbiggest city in Bihar" },
];

const opps = [
  { icon: Globe,          title: "Portal Listings = Zero Competition",  desc: "BDMCH is NOT yet on Collegedunia, Shiksha, or Careers360. Every student who searches will only find RDJM. Being first to dominate these platforms = instant advantage." },
  { icon: GraduationCap,  title: "PG Seats Nobody is Leveraging",       desc: "BDMCH has MD/MS in 12 specialties. RDJM has NONE. Yet there is zero marketing for this. PG students pay more, stay longer, and become brand ambassadors." },
  { icon: Rocket,         title: "Nepal & North Bihar Gateway",          desc: "NH-57 connects Muzaffarpur directly to Nepal and covers 5+ districts. Students from Nepal, Sitamarhi, East Champaran, Sheohar are underserved — BDMCH can own this corridor." },
  { icon: Brain,          title: "Bihar Student Credit Card (BSCC)",     desc: "Government gives up to ₹4L education credit. Targeted campaigns showing BSCC compatibility with MBBS/Allied courses can unlock a new student segment currently unaware of this." },
];

export const Slide07Market = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Market Opportunity" title="The Bihar Medical Education Market"
      subtitle="A massive, underserved market — and BDMCH is entering at exactly the right time" />

    <div className="flex gap-3 mb-6">
      {bigStats.map((s, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex-1 rounded-xl p-4 text-center border relative overflow-hidden"
          style={{ background: "rgba(13,46,84,0.6)", borderColor: "rgba(6,182,212,0.2)" }}>
          <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: "#028090" }} />
          <div className="text-2xl font-bold mb-2 whitespace-nowrap" style={{ color: "#EFA00B", fontFamily: "var(--font-outfit)" }}>{s.val}</div>
          <div className="text-[10px] uppercase tracking-wider whitespace-pre-line" style={{ color: "#CADCFC" }}>{s.lbl}</div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {opps.map((o, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 7} initial="hidden" animate="show"
          className="flex gap-4 rounded-xl p-5 border"
          style={{ background: "rgba(13,46,84,0.5)", borderColor: "rgba(6,182,212,0.15)" }}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
            style={{ background: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.3)" }}>
            <o.icon size={20} style={{ color: "#22D3EE" }} />
          </div>
          <div>
            <div className="font-bold text-sm mb-2" style={{ color: "#EFA00B" }}>{o.title}</div>
            <p className="text-xs leading-relaxed" style={{ color: "#CADCFC" }}>{o.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
