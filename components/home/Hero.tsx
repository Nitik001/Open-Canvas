"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { WorldMap } from "./WorldMap";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* ── World Map Background ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        {/* Radial vignette that fades the map at edges */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, var(--background) 80%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0 h-32 z-10"
          style={{
            background: "linear-gradient(to top, transparent, var(--background))",
          }}
        />

        {/* The map itself — full bleed, slightly zoomed */}
        <motion.div
          className="w-full h-full absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <WorldMap className="w-full h-full" />
        </motion.div>

        {/* Atmospheric glow orbs layered above the map */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Subtle dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[5] opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* ── Hero Content ── */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-hover)] bg-[var(--accent-glow)] text-accent text-xs font-medium mb-8 tracking-wide"
        >
          <TrendingUp size={12} />
          Geopolitics · Economics · Policy
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold text-text-primary leading-[1.08] tracking-tight mb-5"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.21, 1.04, 0.58, 1] }}
        >
          The world is{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{
                background:
                  "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #7dd3fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              rewriting
            </span>
            {/* Glow under the gradient word */}
            <motion.span
              className="absolute -inset-2 rounded-xl blur-xl opacity-30"
              style={{ background: "linear-gradient(135deg, #38bdf8, #818cf8)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </span>{" "}
          its rules.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed mb-8 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          Open Canvas delivers rigorous, independent analysis of geopolitical shifts,
          macroeconomic trends, and the policy decisions that shape the global order.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.46 }}
        >
          <Link
            href="/blog"
            id="hero-cta-analysis"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white transition-all duration-200 hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]"
            style={{ background: "linear-gradient(135deg, #0ea5e9, #38bdf8)" }}
          >
            Read Analysis
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link
            href="/about"
            id="hero-cta-about"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-text-secondary text-sm font-medium hover:border-[var(--border-hover)] hover:text-text-primary transition-all duration-200"
          >
            Our Approach
          </Link>
        </motion.div>

        {/* Rotating stats strip */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          {[
            { label: "Regions Covered", value: "6" },
            { label: "Topics", value: "30+" },
            { label: "Deep Dives", value: "Weekly" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-text-primary tabular-nums">{value}</div>
              <div className="text-xs text-text-muted uppercase tracking-widest mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[var(--border-hover)] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
      </motion.div>
    </section>
  );
}
