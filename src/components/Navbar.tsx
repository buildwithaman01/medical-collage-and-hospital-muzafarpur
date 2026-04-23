"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, Presentation } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
      style={{
        padding: scrolled ? "12px 0" : "24px 0",
        background: scrolled ? "rgba(15,23,42,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div>
            <div className="font-extrabold tracking-tighter text-lg text-white leading-none">PEHCHANLY DIGITAL SOLUTIONS</div>
          </div>
        </a>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-[11px] font-bold uppercase tracking-[0.25em] transition-colors"
            style={{ color: "#6B7280" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#9CA3AF")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}>
            Overview
          </a>
          <a href="/presentation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-black text-xs uppercase tracking-wider transition-all hover:opacity-90 hover:scale-[1.03]"
            style={{ background: "#EFA00B", boxShadow: "0 0 20px rgba(239,160,11,0.2)" }}>
            <Presentation size={13} />
            View Strategy Deck
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: "rgba(15,23,42,0.97)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="/" onClick={() => setMobileMenu(false)}
                className="text-sm font-bold" style={{ color: "#9CA3AF" }}>
                Home
              </a>
              <a href="/presentation" onClick={() => setMobileMenu(false)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-black text-sm text-center justify-center"
                style={{ background: "#EFA00B" }}>
                <Presentation size={15} />
                Open Strategy Deck
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
