"use client";

import { motion } from "framer-motion";

export function StatementCanvas() {
  return (
    <section className="relative w-full bg-white pb-24 overflow-hidden">
      {/* ── Curved Section Separator ── */}
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

      {/* ── Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 relative z-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Reshaping the Global Canvas
        </h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Our analysis draws the connections between complex policy decisions,
          economic shifts, and the geopolitical landscape of tomorrow.
        </p>
      </motion.div>

      {/* ── Animation Stage ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-[1200px] mx-auto select-none"
        style={{ height: "clamp(340px, 50vw, 600px)" }}
      >

        {/* ── AMBIENT GLOW behind the scene ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 55% 50%, rgba(139,92,246,0.08) 0%, rgba(56,189,248,0.06) 50%, transparent 100%)",
          }}
        />

        {/* ── BASE ILLUSTRATION ── */}
        {/* 
            The full illustration is the "ground truth". All floating elements
            are absolutely positioned SVG/div layers on top of it, animated
            to create the 2.5D parallax effect.
        */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 82%, transparent 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/floating-canvas.png"
            alt="Artist painting geopolitics, economics and policy onto a canvas"
            className="w-full h-full object-contain object-left"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* ══════════════════════════════════════════════
            FLOATING ELEMENTS — layered on top
            Each has a unique CSS animation that loops
            ══════════════════════════════════════════════ */}

        {/* ── 1. GLOBE GLOW PULSE ── */}
        <div
          className="absolute"
          style={{
            left: "47%",
            top: "10%",
            width: "clamp(60px,8vw,110px)",
            height: "clamp(60px,8vw,110px)",
            animation: "floatUp 6s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, rgba(96,165,250,0.55), rgba(52,211,153,0.35), transparent 70%)",
              animation: "pulseGlow 4s ease-in-out infinite",
              filter: "blur(1px)",
            }}
          />
        </div>

        {/* ── 2. NETWORK GLOBE NODE SPARKLES ── */}
        {[
          { x: "46%", y: "8%",  delay: "0s",   size: 6 },
          { x: "51%", y: "22%", delay: "1.2s", size: 4 },
          { x: "55%", y: "14%", delay: "0.6s", size: 5 },
          { x: "43%", y: "18%", delay: "1.8s", size: 3 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              background: "rgba(96,165,250,0.9)",
              animation: `sparkle 3s ease-in-out ${s.delay} infinite`,
              boxShadow: "0 0 6px 2px rgba(96,165,250,0.6)",
            }}
          />
        ))}

        {/* ── 3. COINS FLOATING UP ── */}
        {[
          { x: "62%", y: "35%", delay: "0s",   scale: 1 },
          { x: "66%", y: "40%", delay: "0.8s", scale: 0.8 },
          { x: "59%", y: "42%", delay: "1.6s", scale: 0.65 },
        ].map((c, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: c.x,
              top: c.y,
              width: `clamp(18px,${3 * c.scale}vw,40px)`,
              height: `clamp(18px,${3 * c.scale}vw,40px)`,
              animation: `floatUp 5s ease-in-out ${c.delay} infinite`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b, #92400e)",
                boxShadow: "0 4px 16px rgba(245,158,11,0.45), inset 0 -3px 6px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: `clamp(8px,1.2vw,16px)`,
                fontWeight: 800,
                color: "#7c2d12",
                animation: `coinSpin 4s linear ${c.delay} infinite`,
              }}
            >
              $
            </div>
          </div>
        ))}

        {/* ── 4. BULL FLOATING + ROTATING ── */}
        <div
          className="absolute"
          style={{
            left: "73%",
            top: "38%",
            animation: "floatSway 7s ease-in-out 0.5s infinite",
            fontSize: "clamp(22px,3.5vw,48px)",
            filter: "drop-shadow(0 6px 14px rgba(239,68,68,0.3))",
          }}
        >
          🐂
        </div>

        {/* ── 5. BEAR FLOATING + ROTATING (opposite phase) ── */}
        <div
          className="absolute"
          style={{
            left: "77%",
            top: "48%",
            animation: "floatSway 8s ease-in-out 2s infinite",
            fontSize: "clamp(20px,3vw,42px)",
            filter: "drop-shadow(0 6px 14px rgba(34,197,94,0.3))",
          }}
        >
          🐻
        </div>

        {/* ── 6. FLAGS DRIFTING ── */}
        {[
          { emoji: "🇺🇳", x: "44%", y: "2%",  delay: "0s",   dur: "6s" },
          { emoji: "🇺🇸", x: "48%", y: "1%",  delay: "0.6s", dur: "7s" },
          { emoji: "🇬🇧", x: "52%", y: "2%",  delay: "1.2s", dur: "5.5s" },
          { emoji: "🇮🇳", x: "56%", y: "3%",  delay: "1.8s", dur: "6.5s" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: f.x,
              top: f.y,
              fontSize: "clamp(14px,2vw,26px)",
              animation: `flagWave ${f.dur} ease-in-out ${f.delay} infinite`,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
            }}
          >
            {f.emoji}
          </div>
        ))}

        {/* ── 7. GEARS UNMESHING ── */}
        {[
          { x: "57%", y: "68%", size: "clamp(20px,3vw,42px)", delay: "0s",   dir: 1,   drift: "gearDriftLeft" },
          { x: "61%", y: "65%", size: "clamp(16px,2.4vw,34px)", delay: "0.4s", dir: -1, drift: "gearDriftRight" },
          { x: "64%", y: "70%", size: "clamp(12px,2vw,28px)",  delay: "0.8s", dir: 1,   drift: "gearDriftLeft" },
        ].map((g, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: g.x,
              top: g.y,
              fontSize: g.size,
              animation: `${g.drift} 8s ease-in-out ${g.delay} infinite`,
            }}
          >
            <span
              style={{
                display: "block",
                animation: `gearRotate${g.dir > 0 ? "CW" : "CCW"} 4s linear infinite`,
                filter: "drop-shadow(0 2px 8px rgba(100,100,100,0.3))",
              }}
            >
              ⚙️
            </span>
          </div>
        ))}

        {/* ── 8. RIBBON SHIMMER OVERLAYS ── */}
        {/* Soft translucent bands that pulse to simulate liquid silk motion */}
        {[
          { color: "rgba(167,139,250,0.18)", delay: "0s",   blur: 18, left: "18%", top: "45%", w: "30%", h: 14, rotate: "-10deg" },
          { color: "rgba(56,189,248,0.15)",  delay: "0.7s", blur: 20, left: "22%", top: "52%", w: "35%", h: 12, rotate: "-7deg" },
          { color: "rgba(52,211,153,0.14)",  delay: "1.4s", blur: 16, left: "15%", top: "60%", w: "28%", h: 10, rotate: "-12deg" },
          { color: "rgba(251,191,36,0.12)",  delay: "2.1s", blur: 22, left: "26%", top: "40%", w: "25%", h: 8,  rotate: "-5deg" },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: r.left,
              top: r.top,
              width: r.w,
              height: r.h,
              background: r.color,
              borderRadius: 999,
              filter: `blur(${r.blur}px)`,
              transform: `rotate(${r.rotate})`,
              animation: `ribbonPulse 5s ease-in-out ${r.delay} infinite`,
            }}
          />
        ))}

        {/* ── 9. CANVAS GLOW SOURCE (artist's canvas emanates light) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "12%",
            top: "20%",
            width: "clamp(40px,7vw,100px)",
            height: "clamp(50px,9vw,130px)",
            background:
              "radial-gradient(ellipse at center, rgba(253,224,71,0.22) 0%, rgba(251,146,60,0.12) 50%, transparent 80%)",
            animation: "canvasGlow 4s ease-in-out infinite",
            filter: "blur(8px)",
          }}
        />

        {/* ── Keyframes (injected via style tag) ── */}
        <style>{`
          @keyframes floatUp {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            30%      { transform: translateY(-14px) rotate(3deg); }
            60%      { transform: translateY(-8px) rotate(-2deg); }
          }
          @keyframes floatSway {
            0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25%      { transform: translateY(-12px) rotate(8deg) scale(1.05); }
            50%      { transform: translateY(-20px) rotate(-4deg) scale(1.02); }
            75%      { transform: translateY(-8px) rotate(6deg) scale(1.04); }
          }
          @keyframes flagWave {
            0%,100% { transform: translateY(0px) rotate(-2deg); }
            40%      { transform: translateY(-10px) rotate(3deg); }
            70%      { transform: translateY(-5px) rotate(-1deg); }
          }
          @keyframes gearRotateCW {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes gearRotateCCW {
            from { transform: rotate(0deg); }
            to   { transform: rotate(-360deg); }
          }
          @keyframes gearDriftLeft {
            0%,100% { transform: translate(0px, 0px); }
            40%      { transform: translate(-12px, -8px); }
            70%      { transform: translate(-6px, -4px); }
          }
          @keyframes gearDriftRight {
            0%,100% { transform: translate(0px, 0px); }
            40%      { transform: translate(12px, -10px); }
            70%      { transform: translate(6px, -5px); }
          }
          @keyframes coinSpin {
            0%,100% { transform: rotateY(0deg); }
            50%      { transform: rotateY(180deg); }
          }
          @keyframes sparkle {
            0%,100% { opacity: 0.3; transform: scale(1); }
            50%      { opacity: 1; transform: scale(1.8); }
          }
          @keyframes pulseGlow {
            0%,100% { opacity: 0.5; transform: scale(1); }
            50%      { opacity: 1; transform: scale(1.15); }
          }
          @keyframes ribbonPulse {
            0%,100% { opacity: 0.6; transform: scaleX(1) rotate(var(--r, -10deg)); }
            50%      { opacity: 1; transform: scaleX(1.08) rotate(var(--r, -10deg)); }
          }
          @keyframes canvasGlow {
            0%,100% { opacity: 0.6; transform: scale(1); }
            50%      { opacity: 1; transform: scale(1.2); }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
