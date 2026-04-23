"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, AlertTriangle, CheckCircle2, LayoutGrid, X, ExternalLink } from "lucide-react";
import { slides, problemSlides, solutionSlides } from "@/data/slides";

// All 19 slide components
import { Slide01Cover }       from "@/components/presentation/Slide01Cover";
import { Slide02Agenda }      from "@/components/presentation/Slide02Agenda";
import { Slide03ExecSummary } from "@/components/presentation/Slide03ExecSummary";
import { Slide04Audit }       from "@/components/presentation/Slide04Audit";
import { Slide05Comparison }  from "@/components/presentation/Slide05Comparison";
import { Slide06VS }          from "@/components/presentation/Slide06VS";
import { Slide07Market }      from "@/components/presentation/Slide07Market";
import { Slide08Strengths }   from "@/components/presentation/Slide08Strengths";
import { Slide09Pillars }     from "@/components/presentation/Slide09Pillars";
import { Slide10Website }     from "@/components/presentation/Slide10Website";
import { Slide11SEOAI }       from "@/components/presentation/Slide11SEOAI";
import { Slide12Social }      from "@/components/presentation/Slide12Social";
import { Slide13PaidAds }     from "@/components/presentation/Slide13PaidAds";
import { Slide14PROutreach }  from "@/components/presentation/Slide14PROutreach";
import { Slide15AIops }       from "@/components/presentation/Slide15AIops";
import { Slide16Roadmap }     from "@/components/presentation/Slide16Roadmap";
import { Slide17Budget }      from "@/components/presentation/Slide17Budget";
import { Slide18NextSteps }   from "@/components/presentation/Slide18NextSteps";
import { Slide19Vision }      from "@/components/presentation/Slide19Vision";

const SLIDE_COMPONENTS = [
  Slide01Cover, Slide02Agenda, Slide03ExecSummary, Slide04Audit, Slide05Comparison,
  Slide06VS, Slide07Market, Slide08Strengths, Slide09Pillars, Slide10Website,
  Slide11SEOAI, Slide12Social, Slide13PaidAds, Slide14PROutreach, Slide15AIops,
  Slide16Roadmap, Slide17Budget, Slide18NextSteps, Slide19Vision,
];

const SECTION_COLORS: Record<string, string> = {
  cover:    "#028090",
  agenda:   "#028090",
  problem:  "#EF4444",
  solution: "#3B82F6",
};

export default function PresentationPage() {
  const [current, setCurrent] = useState(0); // 0-indexed
  const [direction, setDirection] = useState(1);
  const [navOpen, setNavOpen] = useState(false);

  const goTo = useCallback((idx: number, dir?: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setDirection(dir ?? (idx > current ? 1 : -1));
    setCurrent(idx);
    setNavOpen(false);
  }, [current]);

  const next = useCallback(() => goTo(current + 1,  1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (navOpen) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ")  next();
      if (e.key === "ArrowLeft"  || e.key === "PageUp")                     prev();
      if (e.key === "Escape")                                                setNavOpen(false);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [current, navOpen, next, prev]);

  const slide  = slides[current];
  const SlideComponent = SLIDE_COMPONENTS[current];
  const accentColor = SECTION_COLORS[slide.section];

  // Slide transition variants
  const enterVariant = (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.97 });
  const exitVariant  = (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.97, transition: { duration: 0.3 } });
  const centerVariant = { opacity: 1, x: 0, scale: 1 };

  return (
    <div className="fixed inset-0 flex flex-col select-none"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #111827 50%, #131B2E 100%)" }}>

      {/* ─── TOP BAR ─── */}
      <div className="h-12 flex items-center px-6 justify-between z-50 shrink-0 border-b"
        style={{ background: "rgba(15,23,42,0.9)", borderColor: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-sm tracking-tight">PEHCHANLY DIGITAL SOLUTIONS</span>
          <span className="hidden md:block h-4 w-px mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="hidden md:block text-[10px] uppercase tracking-widest" style={{ color: "#6B7280" }}>BDMCH Strategy 2026</span>
        </div>

        {/* Center quick-jump buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => goTo(problemSlides[0] - 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border hover:scale-105"
            style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.3)", color: "#F87171" }}>
            <AlertTriangle size={11} /> Problems
          </button>
          <button
            onClick={() => goTo(solutionSlides[0] - 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border hover:scale-105"
            style={{ background: "rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.3)", color: "#60A5FA" }}>
            <CheckCircle2 size={11} /> Solutions & Strategy
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono" style={{ color: "#6B7280" }}>
            {String(current + 1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}
          </span>
          <button onClick={() => setNavOpen(!navOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "#E5E7EB" }}>
            <LayoutGrid size={12} /> All Slides
          </button>
          <a href="/" className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-60"
            style={{ color: "#6B7280" }}>
            <ExternalLink size={11} /> Home
          </a>
        </div>
      </div>

      {/* ─── SLIDE AREA ─── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            initial={enterVariant(direction)}
            animate={centerVariant}
            exit={exitVariant(direction)}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: `${accentColor}40 transparent`,
            }}
          >
            <div className="min-h-full p-6 md:p-10">
              <SlideComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── BOTTOM BAR ─── */}
      <div className="h-14 flex items-center px-6 justify-between shrink-0 border-t z-50"
        style={{ background: "rgba(15,23,42,0.9)", borderColor: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
        {/* Slide title */}
        <div className="hidden md:flex items-center gap-3 min-w-0">
          <div className="w-1.5 h-5 rounded-full shrink-0" style={{ background: accentColor }} />
          <div className="min-w-0">
            {slide.badge && <div className="text-[9px] uppercase tracking-widest font-bold mb-0.5" style={{ color: accentColor }}>{slide.badge}</div>}
            <div className="text-xs font-medium text-white truncate">{slide.title}</div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-1 flex-wrap justify-center max-w-xs">
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="transition-all rounded-full"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? accentColor : i < current ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
              }} />
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex items-center gap-2">
          <button onClick={prev} disabled={current === 0}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-20 hover:scale-105 border"
            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
            <ChevronLeft size={18} className="text-white" />
          </button>
          <button onClick={next} disabled={current === slides.length - 1}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-20 hover:scale-105 border"
            style={{ background: accentColor, borderColor: accentColor }}>
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* ─── PROGRESS BAR ─── */}
      <div className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 z-[200]"
        style={{ width: `${((current + 1) / slides.length) * 100}%`, background: accentColor }} />

      {/* ─── SLIDE GRID OVERLAY ─── */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "rgba(9,14,25,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div>
                <h2 className="text-2xl font-bold text-white">All 19 Slides</h2>
                <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Click any slide to jump to it</p>
              </div>
              <div className="flex gap-3 items-center">
                <button onClick={() => { goTo(problemSlides[0] - 1); }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105"
                  style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.4)", color: "#F87171" }}>
                  <AlertTriangle size={12} /> All Problem Slides
                </button>
                <button onClick={() => { goTo(solutionSlides[0] - 1); }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105"
                  style={{ background: "rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.4)", color: "#60A5FA" }}>
                  <CheckCircle2 size={12} /> All Solution Slides
                </button>
                <button onClick={() => setNavOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <X size={16} className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {slides.map((s, i) => {
                  const color = SECTION_COLORS[s.section];
                  const isActive = i === current;
                  return (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      onClick={() => goTo(i)}
                      className="text-left rounded-2xl p-4 border transition-all hover:scale-[1.03] relative overflow-hidden"
                      style={{
                        background: isActive ? color + "20" : "rgba(255,255,255,0.03)",
                        borderColor: isActive ? color : "rgba(255,255,255,0.08)",
                        boxShadow: isActive ? `0 0 20px ${color}30` : "none",
                      }}>
                      <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: color }} />
                      <div className="text-[10px] font-black mb-2" style={{ color }}>
                        {String(i + 1).padStart(2,"0")} — {s.section.toUpperCase()}
                      </div>
                      {s.badge && <div className="text-[9px] uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.badge}</div>}
                      <div className="text-xs font-bold text-white leading-tight">{s.title}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
