"use client";
import { motion } from "framer-motion";
import { ArrowRight, Presentation, AlertTriangle, CheckCircle2 } from "lucide-react";

export const PresentationCTA = () => (
  <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B2545 0%, #0F172A 50%, #1E1B4B 100%)" }}>
    {/* Glow orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: "#3B82F6" }} />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: "#06B6D4" }} />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border"
          style={{ background: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.3)", color: "#22D3EE" }}
        >
          <Presentation size={12} />
          19-Slide Interactive Strategy Deck
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Explore the Full <br />
          <span style={{ color: "#EFA00B" }}>BDMCH Strategy Deck</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#7EB8D4" }}
        >
          A comprehensive 19-slide interactive presentation covering every problem, solution,
          competitive analysis, roadmap, and KPI — built directly from the original strategy report.
        </motion.p>

        {/* Two category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm border"
            style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.3)", color: "#F87171" }}>
            <AlertTriangle size={14} />
            4 Problem slides — Critical audit findings
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm border"
            style={{ background: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)", color: "#60A5FA" }}>
            <CheckCircle2 size={14} />
            13 Solution slides — Full strategy & roadmap
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="/presentation"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(239,160,11,0.35)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-black transition-all"
          style={{ background: "#EFA00B" }}
        >
          <Presentation size={22} />
          Open Full Presentation
          <ArrowRight size={22} />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xs uppercase tracking-widest"
          style={{ color: "#4A7FA5" }}
        >
          Keyboard navigation supported · Arrow keys work · Full screen optimized
        </motion.p>
      </motion.div>
    </div>
  </section>
);
