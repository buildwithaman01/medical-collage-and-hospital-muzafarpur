export type SlideType =
  | 'cover'
  | 'agenda'
  | 'exec-summary'
  | 'audit'
  | 'comparison'
  | 'vs'
  | 'market'
  | 'strengths'
  | 'pillars'
  | 'website-blueprint'
  | 'seo-ai'
  | 'social'
  | 'paid-ads'
  | 'pr-outreach'
  | 'ai-ops'
  | 'roadmap'
  | 'budget-kpi'
  | 'next-steps'
  | 'vision';

export interface Slide {
  id: number;
  type: SlideType;
  badge?: string;
  section: 'problem' | 'solution' | 'cover' | 'agenda';
  title: string;
  subtitle?: string;
}

export const slides: Slide[] = [
  { id: 1,  type: 'cover',            section: 'cover',    title: 'Blue Diamond Medical College & Hospital', subtitle: 'Comprehensive Digital Growth, Branding & Strategic Marketing Architecture' },
  { id: 2,  type: 'agenda',           section: 'agenda',   title: 'AGENDA', subtitle: 'What this report covers' },
  { id: 3,  type: 'exec-summary',     section: 'problem',  badge: 'Executive Summary',       title: 'The Situation at a Glance', subtitle: 'What we found after a full independent evaluation of BDMCH' },
  { id: 4,  type: 'audit',            section: 'problem',  badge: 'Website Audit',            title: 'bdmch.com — Critical Issues Found Live', subtitle: 'Every issue below was verified by independently visiting the website on April 23, 2026' },
  { id: 5,  type: 'comparison',       section: 'problem',  badge: 'Online Presence',          title: 'Digital Presence — BDMCH vs Competitor', subtitle: 'RDJM Medical College (est. 2021) has built 4 years of digital authority. BDMCH has almost none.' },
  { id: 6,  type: 'vs',               section: 'problem',  badge: 'Competitive Analysis',     title: 'RDJM vs BDMCH — Head to Head', subtitle: 'Real numbers from verified sources. RDJM has a 4-year head start. The gap is real but closeable.' },
  { id: 7,  type: 'market',           section: 'solution', badge: 'Market Opportunity',       title: 'The Bihar Medical Education Market', subtitle: 'A massive, underserved market — and BDMCH is entering at exactly the right time' },
  { id: 8,  type: 'strengths',        section: 'solution', badge: 'BDMCH Strengths',          title: 'Real Assets — What BDMCH Has Going For It', subtitle: 'Before building the strategy, acknowledge the genuine strengths. These are the foundation.' },
  { id: 9,  type: 'pillars',          section: 'solution', title: 'The 8-Pillar Growth Strategy', subtitle: 'A holistic framework covering every dimension of institutional growth' },
  { id: 10, type: 'website-blueprint',section: 'solution', badge: 'Pillar 01 — Website',      title: 'Website Overhaul — Complete Blueprint', subtitle: "From broken template to Bihar's best medical college website in 60 days" },
  { id: 11, type: 'seo-ai',           section: 'solution', badge: 'Pillars 02 & 03 — SEO + AI', title: 'SEO & Generative Engine Optimization (GEO)', subtitle: 'Winning on Google today AND on ChatGPT/Gemini tomorrow — two strategies, one content machine' },
  { id: 12, type: 'social',           section: 'solution', badge: 'Pillar 04 — Social Media', title: 'Social Media — Built From Zero, Built to Win', subtitle: 'BDMCH currently has NO social media presence. Every platform is an open field to dominate.' },
  { id: 13, type: 'paid-ads',         section: 'solution', badge: 'Pillar 05 — Paid Ads',     title: 'Performance Marketing — Google & Meta Ads', subtitle: 'Data-driven campaigns timed to NEET counselling cycles — maximum ROI, zero wasted spend' },
  { id: 14, type: 'pr-outreach',      section: 'solution', badge: 'Pillars 06 & 07 — PR + Outreach', title: 'PR, Branding & Community Outreach', subtitle: 'Build authority on paper. Build trust in person. Both are non-negotiable for Bihar.' },
  { id: 15, type: 'ai-ops',           section: 'solution', badge: 'Pillar 08 — Agentic AI',   title: 'Agentic AI — Automate, Scale, Never Sleep', subtitle: 'Deploy AI systems that work 24/7 — qualifying leads, booking appointments, following up patients' },
  { id: 16, type: 'roadmap',          section: 'solution', badge: 'Execution Roadmap',         title: '24-Month Execution Roadmap', subtitle: 'Four clear phases — from emergency fixes to market dominance. Every step is sequenced for maximum impact.' },
  { id: 17, type: 'budget-kpi',       section: 'solution', badge: 'Budget & KPIs',             title: 'Investment Overview & Success Metrics', subtitle: 'Realistic budgets benchmarked for Indian medical education market. ROI measurable at every stage.' },
  { id: 18, type: 'next-steps',       section: 'solution', badge: 'Next Steps',                title: 'The First 30 Immediate Actions', subtitle: 'Prioritised by urgency. Weeks 1-2 are EMERGENCY fixes — no strategy works on a broken foundation.' },
  { id: 19, type: 'vision',           section: 'solution', title: 'The Vision for BDMCH', subtitle: 'Creating North Bihar\'s premier medical institution by December 2027' },
];

export const problemSlides = slides.filter(s => s.section === 'problem').map(s => s.id);
export const solutionSlides = slides.filter(s => s.section === 'solution').map(s => s.id);
