"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, ShieldAlert, Zap, ChevronDown } from "lucide-react";
import { fadeUp } from "./SlideShared";

const auditData = [
  {
    id: 1, severity: "CRITICAL", type: "red",
    title: "Header Integrity",
    issue: "Homepage shows LOREM IPSUM placeholder text in all 3 hero sliders — visible to every visitor. Netaji Subhas Medical College (Bihta) legal notice is live on BDMCH news page.",
    fix:   "Remove all placeholder content within 24 hours. Replace with proper BDMCH branding. Remove wrong college's content from news section immediately.",
  },
  {
    id: 2, severity: "CRITICAL", type: "red",
    title: "Technical Infrastructure",
    issue: "Faculty page (faculty-doctors.php) returns a server error and crashes on load. 15+ links across the website go to '#' — including NMC approval, fee structure, admission process, and seat matrix.",
    fix:   "Fix server error on faculty page. Upload all approval documents (NMC 2025, LOP) and link them. Fix all 15+ broken links across the site.",
  },
  {
    id: 3, severity: "CRITICAL", type: "red",
    title: "Patient & Admission UX",
    issue: "The 'Book Appointment' button leads nowhere. 'Media Gallery' and 'Academy Calendar' both show a blank 'Coming Soon' page. Appointment booking is completely non-functional.",
    fix:   "Implement functional appointment booking with WhatsApp/phone fallback. Build media gallery with real campus photos. Launch a working academic calendar.",
  },
  {
    id: 4, severity: "MAJOR", type: "amber",
    title: "SEO Architecture",
    issue: "No H1 or H2 tags anywhere on the website. No sitemap.xml submitted to Google. No schema markup. No social media links in footer. 2 typos in hero sliders: 'Bulding', 'Accute Pain'.",
    fix:   "Add H1/H2 to every page. Submit sitemap.xml. Add JSON-LD schema for MedicalBusiness + EducationalOrganization. Fix typos. Install Google Search Console.",
  },
  {
    id: 5, severity: "MAJOR", type: "amber",
    title: "Online Visibility",
    issue: "BDMCH is not listed on Collegedunia, Shiksha, Careers360, or any education portal. No Wikipedia page. No verified Google Business Profile. No social media accounts anywhere.",
    fix:   "Submit free listings to all 5 major portals within Week 2. Create Wikipedia article. Verify Google Business Profile. Launch Instagram + Facebook pages.",
  },
  {
    id: 6, severity: "MAJOR", type: "amber",
    title: "Fee & Admission Transparency",
    issue: "No fee structure published anywhere on the website. 'How to Apply' links to '#'. Seat Matrix is not available. This is the #1 question students search for.",
    fix:   "Publish complete fee structure page. Create a clear 'How to Apply' guide. Upload seat matrix. Add BSCC loan compatibility information.",
  },
];

const colorPalette: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  red:   { bg: "rgba(239,68,68,0.08)",  border: "#EF4444", text: "#F87171", glow: "rgba(239,68,68,0.2)" },
  amber: { bg: "rgba(245,158,11,0.08)", border: "#F59E0B", text: "#FBBF24", glow: "rgba(245,158,11,0.2)" },
};

export const Slide04Audit = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [view, setView] = useState<"issue" | "fix">("issue");

  return (
    <div className="flex flex-col">
      <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
        <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full border mb-5"
          style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.3)", color: "#F87171" }}>
          Website Audit
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
          bdmch.com — Critical Issues Found Live
        </h1>
        <p className="text-sm text-[#9CA3AF] mb-6 max-w-3xl">
          Every issue below was verified by independently visiting the website on April 23, 2026.
          Click any card to expand the detail.
        </p>
      </motion.div>

      {/* Toggle */}
      <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show"
        className="flex items-center gap-1 p-1 rounded-xl mb-8 w-fit border"
        style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
        {(["issue", "fix"] as const).map(tab => (
          <button key={tab} onClick={() => setView(tab)}
            className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
            style={{
              background: view === tab ? (tab === "issue" ? "#EF4444" : "#028090") : "transparent",
              color: view === tab ? "#fff" : "#6B7280",
            }}>
            {tab === "issue" ? "🔴 Current Issues" : "✅ Pehchanly Fix"}
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="space-y-3">
        {auditData.map((item, i) => {
          const c = colorPalette[item.type];
          const isOpen = expanded === item.id;
          return (
            <motion.div key={item.id} variants={fadeUp} custom={i + 2} initial="hidden" animate="show">
              <motion.div
                onClick={() => setExpanded(isOpen ? null : item.id)}
                className="rounded-xl border cursor-pointer group transition-all duration-200"
                style={{
                  background: isOpen ? c.bg : "rgba(255,255,255,0.02)",
                  borderColor: isOpen ? c.border : "rgba(255,255,255,0.07)",
                  boxShadow: isOpen ? `0 0 30px ${c.glow}` : "none",
                }}
                whileHover={{ borderColor: c.border, scale: 1.005 }}
                whileTap={{ scale: 0.998 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: c.text + "20" }}>
                    {view === "issue"
                      ? <ShieldAlert size={16} style={{ color: c.text }} />
                      : <Zap size={16} style={{ color: "#22D3EE" }} />
                    }
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold border shrink-0"
                    style={{ background: c.bg, borderColor: c.border + "80", color: c.text }}>
                    {item.severity}
                  </span>
                  <h3 className="font-bold text-white flex-1">{item.title}</h3>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} style={{ color: "#6B7280" }} />
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 flex gap-3 pt-2">
                        <div className="w-px shrink-0" style={{ background: view === "issue" ? c.border : "#028090", marginLeft: 12 }} />
                        <p className="text-sm leading-relaxed" style={{ color: "#CADCFC" }}>
                          {view === "issue" ? item.issue : item.fix}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={fadeUp} custom={9} initial="hidden" animate="show"
        className="mt-6 flex items-center gap-3 rounded-xl p-4 border text-xs"
        style={{ background: "rgba(13,46,84,0.8)", borderColor: "rgba(2,128,144,0.4)", color: "#7EB8D4" }}>
        <AlertTriangle size={14} style={{ color: "#EFA00B" }} />
        <span><strong style={{ color: "#EFA00B" }}>Source:</strong> Independent evaluation of bdmch.com on April 23, 2026. All issues are live and verifiable.</span>
      </motion.div>
    </div>
  );
};
