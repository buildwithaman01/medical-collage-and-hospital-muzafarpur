"use client";
import { motion } from "framer-motion";
import { SlideHeader, fadeUp } from "./SlideShared";

const actions = [
  // Week 1 — Red
  { week: "W1", action: "Remove Lorem ipsum text from all 3 hero sliders — today",              type: "red"   },
  { week: "W1", action: "Remove Netaji Subhas Medical College notice from news section",          type: "red"   },
  { week: "W1", action: "Fix faculty-doctors.php server error",                                  type: "red"   },
  { week: "W1", action: "Upload NMC 2025 approval document — link it from navigation",           type: "red"   },
  { week: "W1", action: "Upload Letter of Permission 2025 — make it publicly visible",           type: "red"   },
  // Week 2 — Amber
  { week: "W2", action: "Publish MBBS fee structure page — the #1 searched question",           type: "amber" },
  { week: "W2", action: "Fix 'How to Apply', 'Seat Matrix', 'Refund Policy' links",             type: "amber" },
  { week: "W2", action: "Create Google Business Profile — verify with phone call/postcard",      type: "amber" },
  { week: "W2", action: "Submit sitemap.xml to Google Search Console",                            type: "amber" },
  { week: "W2", action: "Add H1 heading tags to homepage and all key pages",                     type: "amber" },
  // Week 3 — Teal
  { week: "W3", action: "Create Instagram page @bdmch.official — post 3 photos immediately",   type: "teal"  },
  { week: "W3", action: "Create Facebook page — set up WhatsApp Business number",               type: "teal"  },
  { week: "W3", action: "Submit BDMCH listing to Collegedunia (free listing available)",         type: "teal"  },
  { week: "W3", action: "Submit BDMCH listing to Shiksha.com and Careers360",                   type: "teal"  },
  { week: "W3", action: "Create llms.txt file at bdmch.com/llms.txt for AI discoverability",    type: "teal"  },
  // Week 4 — Navy
  { week: "W4", action: "Start Wikipedia article draft for BDMCH",                               type: "navy"  },
  { week: "W4", action: "Send first WhatsApp broadcast: 'BDMCH MBBS Admissions 2026 Open'",    type: "navy"  },
  { week: "W4", action: "Shoot 5-minute campus tour video — upload to YouTube",                 type: "navy"  },
  { week: "W4", action: "Issue first press release to Dainik Bhaskar Bihar edition",             type: "navy"  },
  { week: "W4", action: "Schedule first rural health camp (East Champaran) — announce on social",type: "navy" },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  red:   { bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.5)",  text: "#F87171" },
  amber: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.5)", text: "#FBBF24" },
  teal:  { bg: "rgba(2,128,144,0.12)",  border: "rgba(2,128,144,0.5)",  text: "#22D3EE" },
  navy:  { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.5)", text: "#60A5FA" },
};

export const Slide18NextSteps = () => {
  const col1 = actions.slice(0, 10);
  const col2 = actions.slice(10, 20);

  return (
    <div className="flex flex-col">
      <SlideHeader badge="Next Steps" title="The First 30 Immediate Actions"
        subtitle="Prioritised by urgency. Weeks 1-2 are EMERGENCY fixes — no strategy works on a broken foundation." />

      <div className="grid grid-cols-2 gap-4 flex-1">
        {[col1, col2].map((col, ci) => (
          <div key={ci} className="space-y-1.5">
            {col.map((a, i) => {
              const c = colorMap[a.type];
              return (
                <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
                  className="flex items-center gap-3 rounded-lg px-3 py-2"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)" }}>
                  <span className="px-2 py-0.5 rounded text-[9px] font-bold border shrink-0 text-center"
                    style={{ background: c.bg, borderColor: c.border, color: c.text, minWidth: 28 }}>
                    {a.week}
                  </span>
                  <span className="text-xs" style={{ color: "#E5E7EB" }}>{a.action}</span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <motion.div variants={fadeUp} custom={22} initial="hidden" animate="show"
        className="mt-4 rounded-xl px-5 py-3 text-xs border flex gap-3 items-start"
        style={{ background: "#0B2545", borderColor: "rgba(2,128,144,0.5)" }}>
        <span className="font-black uppercase tracking-widest shrink-0" style={{ color: "#EFA00B" }}>GOAL</span>
        <span style={{ color: "#CADCFC" }}>
          Complete all 20 emergency + foundation actions within 30 days. This transforms BDMCH from invisible & broken → credible & discoverable.
          Every day of delay = potential students going to RDJM.
        </span>
      </motion.div>
    </div>
  );
};
