"use client";
import { motion } from "framer-motion";
import { Globe, Search, Bot, Megaphone, BarChart2, Newspaper, Users, Rocket } from "lucide-react";
import { fadeUp } from "./SlideShared";

const pillars = [
  { num: "01", icon: Globe,     title: "Website\nOverhaul",     desc: "Fix 15+ broken links, replace Lorem ipsum, build patient booking & admission portal" },
  { num: "02", icon: Search,    title: "SEO &\nContent",        desc: "H1/H2 structure, schema markup, 50+ keyword pages, education portal listings" },
  { num: "03", icon: Bot,       title: "AI & GEO\nStrategy",    desc: "llms.txt, question-first content for ChatGPT/Gemini, AI chatbot for admissions" },
  { num: "04", icon: Megaphone, title: "Social\nMedia",         desc: "Instagram, Facebook, YouTube, LinkedIn — built from scratch with content calendar" },
  { num: "05", icon: BarChart2, title: "Paid\nAds",             desc: "Google Ads + Meta Ads during NEET counselling cycles — targeted campaigns" },
  { num: "06", icon: Newspaper, title: "PR &\nBranding",        desc: "Wikipedia, press releases, backlinks, faculty expert series, brand authority" },
  { num: "07", icon: Users,     title: "Community\nOutreach",   desc: "Rural health camps, coaching institute roadshows, BSCC awareness campaigns" },
  { num: "08", icon: Rocket,    title: "Agentic\nAI Ops",       desc: "WhatsApp AI chatbot, appointment automation, patient follow-up system" },
];

export const Slide09Pillars = () => (
  <div className="flex flex-col">
    <motion.h1 variants={fadeUp} custom={0} initial="hidden" animate="show"
      className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
      The 8-Pillar Growth Strategy
    </motion.h1>
    <motion.p variants={fadeUp} custom={1} initial="hidden" animate="show"
      className="text-sm mb-8" style={{ color: "#7EB8D4" }}>
      A holistic framework covering every dimension of institutional growth
    </motion.p>

    <div className="grid grid-cols-4 gap-4 flex-1">
      {pillars.map((p, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex flex-col items-center text-center rounded-2xl p-5 border hover:border-[#028090] transition-colors duration-200"
          style={{ background: "rgba(13,46,84,0.5)", borderColor: "rgba(6,182,212,0.15)" }}>
          <div className="relative mb-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center border"
              style={{ background: "#028090", borderColor: "#028090" }}>
              <span className="text-xs font-bold text-white">{p.num}</span>
            </div>
          </div>
          <p.icon size={26} style={{ color: "#22D3EE" }} className="mb-3" />
          <div className="font-bold text-sm mb-2 whitespace-pre-line" style={{ color: "#EFA00B" }}>{p.title}</div>
          <p className="text-xs leading-relaxed" style={{ color: "#CADCFC" }}>{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
