"use client";
import { motion } from "framer-motion";
import { Newspaper, Users } from "lucide-react";
import { SlideHeader, fadeUp } from "./SlideShared";

const prItems = [
  { title: "Wikipedia Page",       desc: "Create BDMCH Wikipedia article with notability references. This is the single highest-value action for AI discoverability. Every AI model trusts Wikipedia." },
  { title: "Press Releases",       desc: "Monthly press releases to Dainik Bhaskar, Hindustan, Prabhat Khabar, Times of India Bihar edition. Topics: new departments, health camps, faculty achievements." },
  { title: "Faculty Expert Series",desc: "Video series: 'Dr. X explains [condition]'. YouTube + Instagram Reels. Builds E-E-A-T (Experience, Expertise, Authoritativeness, Trust) for SEO." },
  { title: "NIRF Ranking",         desc: "Apply for NIRF ranking next cycle. Even an unranked debut signals legitimacy to students and parents comparing options." },
  { title: "Backlink Campaign",    desc: "Get listed on: NMC.org, BCECEB portal, Bihar Health Dept, BU Patna, Times of India college pages. Each link = authority signal to Google." },
];

const outItems = [
  { title: "Rural Health Camps",     desc: "Monthly multi-specialty camps in East Champaran, Sitamarhi, Sheohar, Darbhanga. Diagnose → refer to BDMCH hospital. Creates patient pipeline AND brand goodwill simultaneously." },
  { title: "NEET Roadshows",         desc: "Visit 20+ coaching institutes in Muzaffarpur, Patna, Darbhanga. 'Medical Career Guidance' seminars. Not a sales pitch — a genuine resource for students." },
  { title: "BSCC Awareness",         desc: "Many students don't know Bihar Student Credit Card covers MBBS allied courses. BDMCH can be the institution that educates and then enrolls them." },
  { title: "School Partnerships",    desc: "Partner with 30+ schools in North Bihar for annual health check-up camps. Brand BDMCH doctors arrive, examine, build institutional goodwill with parents." },
  { title: "Nepal Corridor",         desc: "Muzaffarpur is the gateway to Nepal. Targeted outreach to Nepali students via WhatsApp groups, YouTube (Hindi-speaking Nepali audience), and embassy contacts." },
];

export const Slide14PROutreach = () => (
  <div className="flex flex-col">
    <SlideHeader badge="Pillars 06 & 07 — PR + Outreach" title="PR, Branding & Community Outreach"
      subtitle="Build authority on paper. Build trust in person. Both are non-negotiable for Bihar." />

    <div className="grid grid-cols-2 gap-5 flex-1">
      {/* PR */}
      <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(59,130,246,0.3)" }}>
        <div className="flex items-center gap-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-wider"
          style={{ background: "#0B2545" }}>
          <Newspaper size={14} /> PR & Brand Authority
        </div>
        <div className="p-5 space-y-4 flex-1" style={{ background: "rgba(11,37,69,0.3)" }}>
          {prItems.map((item, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: "#3B82F6" }} />
              <div>
                <span className="font-bold text-white">{item.title}: </span>
                <span style={{ color: "#9CA3AF" }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Outreach */}
      <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show"
        className="rounded-2xl overflow-hidden border flex flex-col" style={{ borderColor: "rgba(2,128,144,0.3)" }}>
        <div className="flex items-center gap-2 px-5 py-3 text-white text-xs font-bold uppercase tracking-wider"
          style={{ background: "#028090" }}>
          <Users size={14} /> Community Outreach & Acquisition
        </div>
        <div className="p-5 space-y-4 flex-1" style={{ background: "rgba(2,128,144,0.05)" }}>
          {outItems.map((item, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: "#028090" }} />
              <div>
                <span className="font-bold text-white">{item.title}: </span>
                <span style={{ color: "#9CA3AF" }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
