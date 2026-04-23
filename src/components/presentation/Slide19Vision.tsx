"use client";
import { motion } from "framer-motion";
import { CheckSquare, Zap } from "lucide-react";
import { fadeUp } from "./SlideShared";

const visionPoints = [
  "150/150 MBBS seats filled every admission cycle",
  "#1 search result for 'medical college Muzaffarpur' on Google",
  "BDMCH cited by ChatGPT and Gemini when students ask about MBBS in Bihar",
  "10,000+ social media followers — the most active medical college in North Bihar",
  "900+ bed hospital running at 70%+ occupancy",
  "MD/MS PG program — the ONLY private PG medical college in Muzaffarpur",
  "BDMCH = the first name that comes to mind across the North Bihar–Nepal corridor",
];

export const Slide19Vision = () => (
  <div className="relative flex flex-col justify-between overflow-hidden" style={{ minHeight: "calc(100vh - 110px)" }}>
    {/* Gold left bar */}
    <div className="absolute left-0 top-0 w-1.5 h-full" style={{ background: "linear-gradient(180deg,#EFA00B,#F97316)" }} />
    {/* BG glow */}
    <div className="absolute top-0 right-0 w-[60%] h-full rounded-full blur-[150px] opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(#06B6D4,#3B82F6)" }} />

    <div className="pl-8 flex-1 flex flex-col justify-center">
      <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show"
        className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "#EFA00B" }}>
        December 2027 — The Vision for BDMCH
      </motion.div>

      <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show"
        className="text-5xl xl:text-6xl font-bold text-white mb-12" style={{ fontFamily: "var(--font-outfit)" }}>
        The Vision for BDMCH
      </motion.h1>

      <div className="space-y-5">
        {visionPoints.map((point, i) => (
          <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
            className="flex items-start gap-4">
            <div className="w-7 h-7 rounded flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "#028090" }}>
              <CheckSquare size={14} className="text-white" />
            </div>
            <span className="text-lg leading-snug" style={{ color: "#CADCFC" }}>{point}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <motion.div variants={fadeUp} custom={10} initial="hidden" animate="show"
      className="pl-8 pr-8 pb-2 pt-5 border-t flex items-center justify-between"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <div>
        <div className="font-bold text-white">Blue Diamond Medical College & Hospital</div>
        <div className="text-xs mt-0.5" style={{ color: "#4A7FA5" }}>bdmch.com  |  +91 8069641273  |  info@bdmch.com</div>
      </div>
      <div className="flex items-center gap-2 text-lg font-bold" style={{ color: "#EFA00B" }}>
        PEHCHANLY DIGITAL SOLUTIONS · pehchanly.com
      </div>
    </motion.div>
  </div>
);
