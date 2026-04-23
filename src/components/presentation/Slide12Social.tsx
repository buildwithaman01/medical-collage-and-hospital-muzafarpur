"use client";
import { motion } from "framer-motion";
import { Camera, Users, Briefcase, MessageCircle, Lightbulb, Play } from "lucide-react";
import { fadeUp } from "./SlideShared";

const platforms = [
  { icon: Camera,        platform: "Instagram",  handle: "@bdmch.official",    desc: "Primary platform for NEET-age students (17-23 yrs). Post: campus reels, doctor interviews, NEET tips, patient stories. Target: 5,000 followers in 6 months.", color: "#E1306C" },
  { icon: Users,         platform: "Facebook",   handle: "BDMCH Official",      desc: "Parents' platform. Post: admission news, health camps, government schemes, fee info. Run targeted ads to parents in Bihar/Nepal. Target: 3,000 followers.", color: "#1877F2" },
  { icon: Play,          platform: "YouTube",    handle: "BDMCH TV",             desc: "Authority builder. Videos: campus tour, faculty talks, 'A Day in BDMCH' series, NEET counselling guide. 1 video/week. Target: 500 subscribers.", color: "#FF0000" },
  { icon: MessageCircle, platform: "WhatsApp",   handle: "Admission Helpline",  desc: "Direct conversion tool. Broadcast admission updates, fee structure, NEET counselling dates. AI chatbot for 24/7 inquiry response. Target: 1,000 contacts.", color: "#25D366" },
  { icon: Briefcase,     platform: "LinkedIn",   handle: "BDMCH LinkedIn Page", desc: "Professional credibility. Faculty achievements, research publications, hospital milestones, placement news. Target: 500 followers.", color: "#0A66C2" },
];

export const Slide12Social = () => (
  <div className="flex flex-col">
    <motion.h1 variants={fadeUp} custom={0} initial="hidden" animate="show"
      className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
      Social Media — Built From Zero, Built to Win
    </motion.h1>
    <motion.p variants={fadeUp} custom={1} initial="hidden" animate="show"
      className="text-sm mb-6" style={{ color: "#7EB8D4" }}>
      BDMCH currently has NO social media presence. Every platform is an open field to dominate.
    </motion.p>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {platforms.map((p, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className={`flex gap-4 rounded-xl p-5 border ${i === 4 ? "col-span-2" : ""}`}
          style={{ background: "rgba(13,46,84,0.5)", borderColor: p.color + "40" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: p.color + "20" }}>
            <p.icon size={24} style={{ color: p.color }} />
          </div>
          <div className="flex-1">
            <div className="font-bold text-base text-white">{p.platform}</div>
            <div className="text-xs font-mono mb-2" style={{ color: "#7EB8D4" }}>{p.handle}</div>
            <p className="text-xs leading-relaxed" style={{ color: "#CADCFC" }}>{p.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} custom={8} initial="hidden" animate="show"
      className="mt-4 flex items-center gap-3 rounded-xl p-4 border"
      style={{ background: "rgba(13,46,84,0.6)", borderColor: "rgba(239,160,11,0.3)" }}>
      <Lightbulb size={18} style={{ color: "#EFA00B" }} className="shrink-0" />
      <p className="text-xs" style={{ color: "#EFA00B" }}>
        <strong>CONTENT STRATEGY:</strong> 50% Educational (NEET tips, health info) + 30% Institutional (campus life, achievements) + 20% Patient stories & community. Post 5-7x/week. Use Hindi + English for Bihar audience.
      </p>
    </motion.div>
  </div>
);
