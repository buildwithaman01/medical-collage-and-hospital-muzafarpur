import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Metadata } from 'next';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BDMCH Transformation Strategy | Pehchanly Digital Solutions',
  description: 'A comprehensive 24-month digital growth and branding strategy for Blue Diamond Medical College & Hospital, Muzaffarpur — by Pehchanly Digital Solutions.',
}

// Simple static sections to avoid over-engineering the homepage
const insideItems = [
  {
    num: "04",
    color: "#EF4444",
    label: "Problem Slides",
    title: "What's Broken — Right Now",
    desc: "A fully verified audit of bdmch.com found live on April 23, 2026. Lorem ipsum in hero sliders, crashing faculty pages, 15+ dead links, zero portal listings, and an incorrect college's legal notice on the news page.",
  },
  {
    num: "13",
    color: "#3B82F6",
    label: "Strategy Slides",
    title: "The 8-Pillar Growth Framework",
    desc: "Website overhaul, SEO + AI/GEO indexing, social media launch, performance ads, PR establishment, community outreach, and Agentic AI automation — one complete system.",
  },
  {
    num: "02",
    color: "#EFA00B",
    label: "Execution Slides",
    title: "24-Month Roadmap & KPIs",
    desc: "From emergency fixes (Day 1) to market dominance (Month 24). Clear KPIs: 150/150 seats filled, #1 search ranking in Muzaffarpur, 10,000+ social followers, AI citation by ChatGPT & Gemini.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen" style={{ background: "#0F172A" }}>
      <Navbar />
      <Hero />

      {/* ── "What's Inside" Teaser ── */}
      <section className="py-28 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Section label */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border mb-4"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#4A7FA5" }}>
              Inside the Deck
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              19 Slides. One Complete Strategy.
            </h2>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {insideItems.map((item, i) => (
              <div key={i} className="rounded-2xl p-7 border relative overflow-hidden flex flex-col"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: item.color }} />
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black" style={{ color: item.color, fontFamily: "var(--font-outfit)" }}>{item.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: item.color + "80" }}>{item.label}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#6B7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Final CTA banner */}
          <div className="rounded-3xl p-10 text-center relative overflow-hidden border"
            style={{ background: "linear-gradient(135deg, #0B2545 0%, #131B2E 100%)", borderColor: "rgba(6,182,212,0.15)" }}>
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-sm mb-3 font-mono uppercase tracking-widest" style={{ color: "#4A7FA5" }}>
                Interactive · Keyboard navigable · 19 slides
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-outfit)" }}>
                Ready to explore the full strategy?
              </h3>
              <a href="/presentation"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-black transition-all hover:opacity-90"
                style={{ background: "#EFA00B", boxShadow: "0 0 40px rgba(239,160,11,0.25)" }}>
                Open Presentation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">PEHCHANLY DIGITAL SOLUTIONS</span>
          </div>
          <div className="text-[10px] uppercase tracking-widest" style={{ color: "#374151" }}>
            Confidential · BDMCH Strategy 2026 · pehchanly.com
          </div>
        </div>
      </footer>
    </main>
  );
}
