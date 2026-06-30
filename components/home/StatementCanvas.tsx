"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StatementCanvas() {
  return (
    <section className="relative w-full bg-white pb-32">
      {/* ── Curved Section Separator ── */}
      {/* The background of the SVG matches the hero above it, while the filled path is white to transition smoothly into this section. */}
      <div className="w-full overflow-hidden leading-none z-10 relative -mt-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-32 block"
          style={{ backgroundColor: "var(--background)" }}
        >
          <path
            d="M0 120 L1440 120 L1440 0 C960 120 480 120 0 0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Reshaping the Global Canvas
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our analysis draws the connections between complex policy decisions,
            economic shifts, and the geopolitical landscape of tomorrow.
          </p>
        </motion.div>
      </div>

      {/* ── Immersive Illustration ── */}
      <motion.div 
        className="relative w-full max-w-[1600px] mx-auto aspect-[16/9] pointer-events-none select-none mix-blend-multiply mt-4 md:mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        {/* We use a mask to gracefully fade out the right edge of the flowing ribbons, 
            so they seamlessly dissolve into the page without a hard cutoff line. */}
        <div 
          className="absolute inset-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
          }}
        >
          <Image
            src="/statement-illustration.jpg"
            alt="An artist drawing geopolitics, economic affairs, and public policy flowing onto a canvas"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
