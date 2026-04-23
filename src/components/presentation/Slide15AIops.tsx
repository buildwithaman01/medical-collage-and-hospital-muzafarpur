"use client";
import { motion } from "framer-motion";
import { Bot, Smartphone, HeartPulse } from "lucide-react";
import { fadeUp } from "./SlideShared";

const cards = [
  {
    icon: Bot,        title: "24/7 WhatsApp Admissions Bot", accentColor: "#028090", bg: "rgba(2,128,144,0.1)",
    lines: [
      "Admission process & eligibility",
      "Fee structure breakdown",
      "BSCC loan guidance",
      "Campus tour scheduling",
      "NEET cut-off predictions",
      "",
      "Reduces staff workload by 50%. Responds in Hindi & English. Qualifies leads before human follow-up.",
    ]
  },
  {
    icon: Smartphone, title: "AI Appointment Booking", accentColor: "#0B2545", bg: "rgba(11,37,69,0.2)",
    lines: [
      "Patients book OPD via website widget",
      "WhatsApp — type 'book appointment'",
      "Voice call IVR system",
      "",
      "Auto-sends reminders 24 hours before. Reduces no-shows by 35%. Department-specific booking.",
    ]
  },
  {
    icon: HeartPulse, title: "Patient Follow-Up System", accentColor: "#8B1A1A", bg: "rgba(139,26,26,0.1)",
    lines: [
      "Day 1: Recovery check-up message",
      "Day 7: Follow-up appointment reminder",
      "Day 30: Health tips + next visit",
      "Vaccine & screening alerts",
      "",
      "Builds patient retention. Creates re-visit cycle. Improves satisfaction scores.",
    ]
  },
];

export const Slide15AIops = () => (
  <div className="flex flex-col">
    <motion.h1 variants={fadeUp} custom={0} initial="hidden" animate="show"
      className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
      Agentic AI — Automate, Scale, Never Sleep
    </motion.h1>
    <motion.p variants={fadeUp} custom={1} initial="hidden" animate="show"
      className="text-sm mb-6" style={{ color: "#7EB8D4" }}>
      Deploy AI systems that work 24/7 — qualifying leads, booking appointments, following up patients
    </motion.p>

    <div className="grid grid-cols-3 gap-4 flex-1">
      {cards.map((c, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex flex-col rounded-2xl overflow-hidden border"
          style={{ background: c.bg, borderColor: c.accentColor + "60" }}>
          <div className="h-1 w-full" style={{ background: c.accentColor }} />
          <div className="p-6 flex-1">
            <div className="flex items-center gap-3 mb-5">
              <c.icon size={22} style={{ color: c.accentColor === "#8B1A1A" ? "#F87171" : "#22D3EE" }} />
              <div className="font-bold text-base text-white leading-tight">{c.title}</div>
            </div>
            <div className="space-y-2">
              {c.lines.map((line, j) => line ? (
                <div key={j} className="flex gap-2.5 text-xs">
                  <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: c.accentColor === "#8B1A1A" ? "#F87171" : "#22D3EE" }} />
                  <span style={{ color: "#CADCFC" }}>{line}</span>
                </div>
              ) : <div key={j} className="h-2" />)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeUp} custom={6} initial="hidden" animate="show"
      className="mt-4 rounded-xl px-5 py-3 text-xs border"
      style={{ background: "rgba(13,46,84,0.8)", borderColor: "rgba(239,160,11,0.4)", color: "#EFA00B" }}>
      <strong>ESTIMATED IMPACT:</strong> AI chatbot alone can handle 200+ student inquiries/month automatically — equivalent to 1 full-time admission counsellor, at a fraction of the cost.
    </motion.div>
  </div>
);
