"use client";

import { motion } from "framer-motion";

export function StatementCanvas() {
  return (
    <section className="relative w-full bg-surface pb-32">
      {/* ── Curved Section Separator ── */}
      {/* The curve matches the hero's background color and transitions into this section's bg-surface */}
      <div className="w-full overflow-hidden leading-none z-10 relative -mt-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-32 text-background fill-current"
        >
          <path d="M0 0C480 120 960 120 1440 0V120H0V0Z" fill="var(--surface)" />
          <path d="M0 0C480 120 960 120 1440 0H0Z" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Reshaping the Global Canvas
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Our analysis draws the connections between complex policy decisions,
            economic shifts, and the geopolitical landscape of tomorrow.
          </p>
        </motion.div>

        {/* ── Animated Canvas & Artist Scene ── */}
        <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Glow */}
            <circle cx="400" cy="300" r="250" fill="var(--accent-glow)" filter="blur(60px)" opacity="0.5" />

            {/* --- THE EASEL --- */}
            <g id="easel" stroke="var(--text-muted)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
              {/* Back leg */}
              <line x1="400" y1="200" x2="400" y2="580" stroke="var(--border-hover)" />
              {/* Left leg */}
              <line x1="400" y1="180" x2="250" y2="580" />
              {/* Right leg */}
              <line x1="400" y1="180" x2="550" y2="580" />
              {/* Top peg */}
              <line x1="400" y1="150" x2="400" y2="180" />
              {/* Bottom tray */}
              <line x1="280" y1="450" x2="520" y2="450" strokeWidth="16" />
            </g>

            {/* --- THE CANVAS --- */}
            <g id="canvas">
              {/* Canvas Shadow */}
              <rect x="235" y="185" width="330" height="260" rx="4" fill="rgba(0,0,0,0.2)" />
              {/* Canvas Board */}
              <rect x="230" y="180" width="330" height="260" rx="4" fill="var(--background)" stroke="var(--border)" strokeWidth="4" />
              
              {/* Animated Drawing on the Canvas (A global network/policy graph) */}
              <motion.path
                d="M 280 350 Q 330 250 400 300 T 520 220"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              />
              <motion.circle
                cx="280" cy="350" r="6" fill="var(--accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              />
              <motion.circle
                cx="400" cy="300" r="6" fill="var(--accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              />
              <motion.circle
                cx="520" cy="220" r="6" fill="var(--accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              />
            </g>

            {/* --- THE ANIMATED ARTIST (Silhouette) --- */}
            {/* The artist stands to the left of the canvas */}
            <g id="artist" fill="var(--text-secondary)">
              {/* Head */}
              <circle cx="180" cy="250" r="25" />
              {/* Body */}
              <path d="M 160 280 C 180 270, 200 270, 210 300 L 200 480 C 180 480, 150 480, 160 300 Z" />
              {/* Left Arm (Behind) */}
              <path d="M 165 290 Q 140 350 150 400" fill="none" stroke="var(--text-secondary)" strokeWidth="16" strokeLinecap="round" />
              {/* Legs */}
              <path d="M 175 470 L 160 580" fill="none" stroke="var(--text-secondary)" strokeWidth="18" strokeLinecap="round" />
              <path d="M 195 470 L 210 580" fill="none" stroke="var(--text-secondary)" strokeWidth="18" strokeLinecap="round" />
              
              {/* Animated Right Arm holding a pen */}
              <motion.g
                initial={{ rotate: -15, originX: "185px", originY: "290px" }}
                animate={{ rotate: [10, -5, 15, -10, 10] }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              >
                {/* Upper Arm & Forearm */}
                <path d="M 185 290 Q 230 350 260 330" fill="none" stroke="var(--text-secondary)" strokeWidth="16" strokeLinecap="round" />
                {/* Hand/Pen */}
                <path d="M 260 330 L 275 345" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
              </motion.g>
            </g>

          </svg>
        </div>

      </div>
    </section>
  );
}
