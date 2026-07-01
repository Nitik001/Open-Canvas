"use client";

import { motion } from "framer-motion";

export function StatementCanvas() {
  return (
    <section className="relative w-full bg-white pb-12 sm:pb-24 overflow-hidden">
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
        className="text-center mb-8 relative z-20 px-4"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
          Reshaping the Global Canvas
        </h2>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Our analysis draws the connections between complex policy decisions,
          economic shifts, and the geopolitical landscape of tomorrow.
        </p>
      </motion.div>

      {/* ── Animation Stage ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative w-full max-w-[1100px] mx-auto px-4"
        style={{ height: "clamp(220px, 55vw, 520px)" }}
      >
        {/* ── AMBIENT GLOW ── */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 58% 50%, rgba(139,92,246,0.07) 0%, rgba(56,189,248,0.05) 60%, transparent 100%)",
          }}
        />

        {/* ── BASE ILLUSTRATION ── No blend mode so it's always visible ── */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 78%, transparent 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/floating-canvas.png"
            alt="Artist painting geopolitics, economics and policy onto a canvas"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════
            FLOATING ELEMENTS layered on top
            ══════════════════════════════════════════ */}

        {/* GLOBE GLOW PULSE */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "47%", top: "8%",
            width: "clamp(55px,8vw,100px)",
            height: "clamp(55px,8vw,100px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, rgba(96,165,250,0.45), rgba(52,211,153,0.25), transparent 70%)",
            filter: "blur(2px)",
            animation: "pulseGlow 4s ease-in-out infinite",
          }}
        />

        {/* NODE SPARKLES */}
        {[
          { x: "46%", y: "7%",  delay: "0s",    size: 7 },
          { x: "52%", y: "20%", delay: "1.1s",  size: 5 },
          { x: "56%", y: "13%", delay: "0.5s",  size: 6 },
          { x: "43%", y: "17%", delay: "1.7s",  size: 4 },
          { x: "50%", y: "26%", delay: "0.9s",  size: 4 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: s.x, top: s.y,
              width: s.size, height: s.size,
              background: "rgba(96,165,250,0.95)",
              boxShadow: "0 0 8px 3px rgba(96,165,250,0.5)",
              animation: `sparkle 3s ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}

        {/* COINS */}
        {[
          { x: "61%", y: "32%", delay: "0s",   scale: 1,    symbol: "$" },
          { x: "65%", y: "38%", delay: "0.9s", scale: 0.8,  symbol: "€" },
          { x: "58%", y: "41%", delay: "1.8s", scale: 0.65, symbol: "₹" },
        ].map((c, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: c.x, top: c.y,
              width: `${Math.round(36 * c.scale)}px`,
              height: `${Math.round(36 * c.scale)}px`,
              animation: `floatUp 5s ease-in-out ${c.delay} infinite`,
            }}
          >
            <div
              style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b, #92400e)",
                boxShadow: "0 4px 14px rgba(245,158,11,0.5), inset 0 -3px 6px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: `${Math.round(13 * c.scale)}px`,
                fontWeight: 800,
                color: "#7c2d12",
                animation: `coinSpin 4s linear ${c.delay} infinite`,
              }}
            >
              {c.symbol}
            </div>
          </div>
        ))}

        {/* BULL */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "73%", top: "38%",
            fontSize: "clamp(24px,3.5vw,46px)",
            filter: "drop-shadow(0 6px 14px rgba(239,68,68,0.35))",
            animation: "floatSway 7s ease-in-out 0.5s infinite",
          }}
        >🐂</div>

        {/* BEAR */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "78%", top: "50%",
            fontSize: "clamp(20px,3vw,40px)",
            filter: "drop-shadow(0 6px 14px rgba(34,197,94,0.35))",
            animation: "floatSway 9s ease-in-out 2.5s infinite",
          }}
        >🐻</div>

        {/* FLAGS */}
        {[
          { f: "🇺🇳", x: "44%", y: "1%",  delay: "0s",   dur: "6s" },
          { f: "🇺🇸", x: "48%", y: "0%",  delay: "0.7s", dur: "7s" },
          { f: "🇬🇧", x: "52%", y: "1%",  delay: "1.4s", dur: "5.5s" },
          { f: "🇮🇳", x: "56%", y: "2%",  delay: "2.1s", dur: "6.5s" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: f.x, top: f.y,
              fontSize: "clamp(14px,2vw,24px)",
              animation: `flagWave ${f.dur} ease-in-out ${f.delay} infinite`,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
            }}
          >{f.f}</div>
        ))}

        {/* GEARS */}
        {[
          { x: "57%", y: "66%", delay: "0s",   dir:  1, drift: "gearDriftLeft" },
          { x: "61%", y: "63%", delay: "0.5s", dir: -1, drift: "gearDriftRight" },
          { x: "65%", y: "68%", delay: "1s",   dir:  1, drift: "gearDriftLeft" },
        ].map((g, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: g.x, top: g.y,
              fontSize: "clamp(18px,2.8vw,38px)",
              animation: `${g.drift} 8s ease-in-out ${g.delay} infinite`,
            }}
          >
            <span
              style={{
                display: "block",
                animation: `${g.dir > 0 ? "gearCW" : "gearCCW"} 4s linear infinite`,
              }}
            >⚙️</span>
          </div>
        ))}

        {/* RIBBON SHIMMER */}
        {[
          { c: "rgba(167,139,250,0.22)", l: "14%", t: "46%", w: "34%", h: 16, r: "-11deg", d: "0s" },
          { c: "rgba(56,189,248,0.18)",  l: "20%", t: "54%", w: "30%", h: 12, r: "-7deg",  d: "0.8s" },
          { c: "rgba(52,211,153,0.16)",  l: "10%", t: "60%", w: "28%", h: 10, r: "-13deg", d: "1.6s" },
          { c: "rgba(251,191,36,0.14)",  l: "24%", t: "38%", w: "22%", h: 8,  r: "-5deg",  d: "2.4s" },
        ].map((r, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: r.l, top: r.t,
              width: r.w, height: r.h,
              background: r.c,
              borderRadius: 999,
              filter: "blur(18px)",
              transform: `rotate(${r.r})`,
              animation: `ribbonPulse 5s ease-in-out ${r.d} infinite`,
            }}
          />
        ))}

        {/* CANVAS GLOW */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "9%", top: "18%",
            width: "clamp(45px,7vw,90px)",
            height: "clamp(60px,10vw,120px)",
            background:
              "radial-gradient(ellipse at center, rgba(253,224,71,0.28) 0%, rgba(251,146,60,0.15) 50%, transparent 80%)",
            filter: "blur(10px)",
            animation: "canvasGlow 4s ease-in-out infinite",
          }}
        />

        {/* ── CSS KEYFRAMES ── */}
        <style>{`
          @keyframes floatUp {
            0%,100% { transform: translateY(0px) rotate(0deg); }
            35%      { transform: translateY(-16px) rotate(4deg); }
            65%      { transform: translateY(-9px) rotate(-2deg); }
          }
          @keyframes floatSway {
            0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25%      { transform: translateY(-14px) rotate(8deg) scale(1.06); }
            50%      { transform: translateY(-22px) rotate(-5deg) scale(1.03); }
            75%      { transform: translateY(-10px) rotate(6deg) scale(1.04); }
          }
          @keyframes flagWave {
            0%,100% { transform: translateY(0px) rotate(-2deg); }
            40%      { transform: translateY(-12px) rotate(4deg); }
            70%      { transform: translateY(-6px) rotate(-1deg); }
          }
          @keyframes gearCW {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes gearCCW {
            from { transform: rotate(0deg); }
            to   { transform: rotate(-360deg); }
          }
          @keyframes gearDriftLeft {
            0%,100% { transform: translate(0px,0px); }
            40%      { transform: translate(-14px,-10px); }
            70%      { transform: translate(-7px,-5px); }
          }
          @keyframes gearDriftRight {
            0%,100% { transform: translate(0px,0px); }
            40%      { transform: translate(14px,-12px); }
            70%      { transform: translate(7px,-6px); }
          }
          @keyframes coinSpin {
            0%,100% { transform: rotateY(0deg); }
            50%      { transform: rotateY(180deg); }
          }
          @keyframes sparkle {
            0%,100% { opacity: 0.25; transform: scale(1); }
            50%      { opacity: 1; transform: scale(2); }
          }
          @keyframes pulseGlow {
            0%,100% { opacity: 0.5; transform: scale(1); }
            50%      { opacity: 1; transform: scale(1.18); }
          }
          @keyframes ribbonPulse {
            0%,100% { opacity: 0.55; transform: scaleX(1) rotate(-10deg); }
            50%      { opacity: 1;    transform: scaleX(1.1) rotate(-10deg); }
          }
          @keyframes canvasGlow {
            0%,100% { opacity: 0.55; transform: scale(1); }
            50%      { opacity: 1;    transform: scale(1.25); }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
