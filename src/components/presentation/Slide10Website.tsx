"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const columns = [
  {
    phase: "EMERGENCY (Day 1-3)", color: "#EF4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.4)",
    items: [
      "Remove ALL Lorem ipsum / placeholder text from hero sliders",
      "Remove the Netaji Subhas Medical College notice from news section",
      "Fix or remove the crashing faculty page",
      "Upload and link all Govt. Approval documents (NMC, LOP, State NOC)",
      "Fix all 15+ broken '#' links across the site",
    ]
  },
  {
    phase: "PHASE 1 (Day 4-30)", color: "#028090", bg: "rgba(2,128,144,0.08)", border: "rgba(2,128,144,0.4)",
    items: [
      "Add H1, H2 heading structure to every page for SEO",
      "Publish fee structure, seat matrix, and admission process",
      "Build functional online appointment booking system",
      "Add real hero slider content with professional imagery",
      "Add social media links (Instagram, Facebook, YouTube, WhatsApp)",
    ]
  },
  {
    phase: "PHASE 2 (Day 30-60)", color: "#0B2545", bg: "rgba(11,37,69,0.3)", border: "rgba(59,130,246,0.4)",
    items: [
      "Integrate Smart Admission Navigator with BSCC loan guidance",
      "Build dedicated pages for each of 19 departments",
      "Create faculty profile pages with credentials and photos",
      "Launch Media Gallery with real campus photos and videos",
      "Add JSON-LD schema markup (MedicalBusiness, EducationalOrganization)",
    ]
  },
];

export const Slide10Website = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Pillar 01 — Website" title="Website Overhaul — Complete Blueprint"
      subtitle="From broken template to Bihar's best medical college website in 60 days" />

    <div className="grid grid-cols-3 gap-4 flex-1">
      {columns.map((col, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex flex-col rounded-2xl overflow-hidden border"
          style={{ background: col.bg, borderColor: col.border }}>
          <div className="py-3 px-4 text-center text-[11px] font-bold uppercase tracking-wider text-white"
            style={{ background: col.color }}>
            {col.phase}
          </div>
          <div className="p-5 space-y-3 flex-1">
            {col.items.map((item, j) => (
              <div key={j} className="flex gap-2.5 text-xs leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: col.color }} />
                <span style={{ color: "#E5E7EB" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} custom={6} initial="hidden" animate="show"
      className="mt-4 rounded-xl px-5 py-3 text-xs"
      style={{ background: "#0B2545", color: "#EFA00B" }}>
      <strong>KEY ADDITION:</strong> Implement llms.txt file at root → tells ChatGPT/Gemini/Perplexity about BDMCH → college appears in AI answers when students ask about MBBS in Bihar
    </motion.div>
  </div>
);
