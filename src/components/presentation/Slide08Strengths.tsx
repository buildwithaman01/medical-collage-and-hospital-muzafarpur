"use client";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Star, MapPin, ShieldCheck, Lightbulb } from "lucide-react";
import { SlideHeader, fadeUp } from "./SlideShared";

const strengths = [
  { icon: Building2,    title: "950+ Bed Hospital",          desc: "One of the largest private hospital complexes in North Bihar. Includes ICU, ICCU, NICU, PICU, SICU, Burn ICU, and 14 operation theaters. Bigger than the main competitor (RDJM)." },
  { icon: GraduationCap,title: "19 Specialised Departments", desc: "From Anatomy to Psychiatry — a fully comprehensive MBBS program. Every NMC-required department is in place. Strong foundation for clinical training." },
  { icon: Star,          title: "MD/MS PG Seats",            desc: "12 postgraduate specialties including General Medicine, Surgery, OBG, Anaesthesiology, Radiology. RDJM has ZERO PG seats. This is a massive, unused competitive advantage." },
  { icon: MapPin,        title: "NH-57 Prime Location",      desc: "Muzaffarpur-Darbhanga corridor on National Highway 57, near Union Bank of India. Accessible from 6+ districts. Gateway to Nepal. Visible, reachable, and strategic." },
  { icon: ShieldCheck,   title: "BDIT Parent Group",         desc: "Blue Diamond Institute of Technology is ranked Top Engineering College in Bihar by Times of India. The 'Blue Diamond' brand already has recognition and trust in the region." },
  { icon: Lightbulb,     title: "Tech-Forward Leadership",   desc: "Principal Dr. Shrawan Kumar has a Computer Science Engineering background — rare in medical education. This positions BDMCH uniquely as a 'technology-first' medical institution." },
];

export const Slide08Strengths = () => (
  <div className="flex flex-col">
    <SlideHeader badge="BDMCH Strengths" title="Real Assets — What BDMCH Has Going For It"
      subtitle="Before building the strategy, acknowledge the genuine strengths. These are the foundation." />

    <div className="grid grid-cols-2 gap-4 flex-1">
      {strengths.map((s, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} initial="hidden" animate="show"
          className="flex gap-4 rounded-xl p-5 border relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="absolute left-0 top-0 w-1 h-full" style={{ background: "#028090" }} />
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "rgba(2,128,144,0.15)" }}>
            <s.icon size={20} style={{ color: "#22D3EE" }} />
          </div>
          <div>
            <div className="font-bold text-base mb-1.5 text-white">{s.title}</div>
            <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
