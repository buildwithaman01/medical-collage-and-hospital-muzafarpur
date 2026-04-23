"use client";
import { motion } from "framer-motion";
import { Search, Bot } from "lucide-react";
import { SlideHeader, fadeUp } from "./SlideShared";

const seoItems = [
  { title: "H1/H2 Structure",   desc: "Add H1 on every page → 'MBBS Admission in Muzaffarpur Bihar'" },
  { title: "Portal Listings",   desc: "Submit to Collegedunia, Shiksha, Careers360, GetMyCollege — free & paid" },
  { title: "Keyword Pages",     desc: "Create 50+ pages: 'MBBS fee Bihar', 'medical college Muzaffarpur', 'NEET 2026 Bihar'" },
  { title: "Local SEO",         desc: "Optimize Google Business Profile — category, photos, Q&A, posts weekly" },
  { title: "Backlinks",         desc: "Get listed in NMC, BCECEB, Bihar Govt portals, Times of India, Hindustan" },
  { title: "Sitemap.xml",       desc: "Submit to Google Search Console immediately — not done yet" },
  { title: "Schema Markup",     desc: "MedicalBusiness + EducationalOrganization JSON-LD on all pages" },
  { title: "Wikipedia",         desc: "Create BDMCH Wikipedia page — builds authority for both AI and Google" },
];

const geoItems = [
  { title: "llms.txt File",          desc: "Plain text file at bdmch.com/llms.txt → guides ChatGPT, Claude, Gemini about BDMCH's departments, faculty, and programs" },
  { title: "Question-First Content", desc: "Publish pages that directly answer: 'What is MBBS fee at BDMCH?' / 'Does Blue Diamond accept BSCC?' / 'Is BDMCH NMC approved 2026?'" },
  { title: "FAQ Schema",             desc: "Structured FAQ blocks on every key page → AI engines extract and cite these directly in responses" },
  { title: "Entity Building",        desc: "Create Wikidata entry, Google Knowledge Panel, Crunchbase profile → AI models cite known entities" },
  { title: "Authoritative Quotes",   desc: "Get faculty quoted in Dainik Bhaskar, Times of India, Hindustan → AI models trust cited publications" },
  { title: "Content Freshness",      desc: "Publish monthly: NEET tips, health content, college news → AI rewards fresh, structured content" },
];

export const Slide11SEOAI = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Pillars 02 & 03 — SEO + AI" title="SEO & Generative Engine Optimization (GEO)"
      subtitle="Winning on Google today AND on ChatGPT/Gemini tomorrow — two strategies, one content machine" />

    <div className="grid grid-cols-2 gap-5 flex-1">
      {/* SEO */}
      <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(2,128,144,0.4)" }}>
        <div className="flex items-center gap-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-widest"
          style={{ background: "#028090" }}>
          <Search size={14} /> Traditional SEO — Google Rankings
        </div>
        <div className="p-4 space-y-3 flex-1" style={{ background: "rgba(2,128,144,0.05)" }}>
          {seoItems.map((s, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: "#028090" }} />
              <div>
                <span className="font-bold text-white">{s.title}: </span>
                <span style={{ color: "#9CA3AF" }}>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* GEO */}
      <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(59,130,246,0.4)" }}>
        <div className="flex items-center gap-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-widest"
          style={{ background: "#0B2545" }}>
          <Bot size={14} /> GEO — Generative Engine Optimization (AI)
        </div>
        <div className="p-4 space-y-3 flex-1" style={{ background: "rgba(11,37,69,0.2)" }}>
          {geoItems.map((g, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: "#3B82F6" }} />
              <div>
                <span className="font-bold text-white">{g.title}: </span>
                <span style={{ color: "#9CA3AF" }}>{g.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
