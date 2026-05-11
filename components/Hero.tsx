"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  stats: { totalHikes: number; totalKm: number; totalElevationM: number };
}

interface Star {
  top: number;
  left: number;
  opacity: number;
  size: number;
  delay: number;
  twinkleSpeed: number;
}

function PineTree({ cx, base, h, color, opacity, sway }: {
  cx: number; base: number; h: number; color: string; opacity: number; sway: number;
}) {
  const t = base - h;
  return (
    <g
      opacity={opacity}
      style={{
        transformOrigin: `${cx}px ${base}px`,
        animation: `treeSway 7s ease-in-out infinite`,
        animationDelay: `${sway}s`,
      }}
    >
      <polygon points={`${cx},${t} ${cx - h*0.18},${t + h*0.36} ${cx + h*0.18},${t + h*0.36}`} fill={color} />
      <polygon points={`${cx},${t + h*0.18} ${cx - h*0.27},${t + h*0.62} ${cx + h*0.27},${t + h*0.62}`} fill={color} />
      <polygon points={`${cx},${t + h*0.42} ${cx - h*0.38},${base} ${cx + h*0.38},${base}`} fill={color} />
      <rect x={cx - h*0.04} y={base - 1} width={h*0.08} height={h*0.08} fill={color} />
    </g>
  );
}

export default function Hero({ stats }: Props) {
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    setStars(
      Array.from({ length: 70 }, () => {
        const big = Math.random() < 0.15;
        return {
          top: Math.random() * 55,
          left: Math.random() * 100,
          opacity: big ? Math.random() * 0.4 + 0.5 : Math.random() * 0.4 + 0.2,
          size: big ? 2 : Math.random() < 0.3 ? 1.5 : 1,
          delay: Math.random() * 6,
          twinkleSpeed: 3 + Math.random() * 5,
        };
      })
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Layer 1 — Sky gradient (deepest, slowest 0.60) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-35%", bottom: "-35%", left: 0, right: 0,
          transform: `translateY(${scrollY * 0.55}px)`,
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#06140e] via-[#08121a] to-ink" />

        {/* Stars */}
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cream"
            style={{
              top: `${s.top}%`, left: `${s.left}%`,
              width: s.size, height: s.size,
              ["--star-op" as string]: s.opacity,
              opacity: s.opacity,
              animation: `twinkle ${s.twinkleSpeed}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
              boxShadow: s.size >= 2 ? `0 0 ${s.size * 2}px rgba(240,235,225,0.5)` : "none",
            }}
          />
        ))}

      </div>

      {/* ── Crescent moon — own parallax wrapper, slightly slower than sky ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "10%",
          transform: `translateY(${scrollY * 0.40}px)`,
          willChange: "transform",
          animation: "moonGlow 6s ease-in-out infinite",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 60 60" className="md:w-16 md:h-16">
          <defs>
            <mask id="crescent-mask">
              <rect width="60" height="60" fill="white" />
              <circle cx="38" cy="26" r="22" fill="black" />
            </mask>
          </defs>
          <circle cx="30" cy="30" r="22" fill="#f0ebe1" opacity="0.9" mask="url(#crescent-mask)" />
        </svg>
      </div>


      {/* ── Layer 2 — Far mountains (parallax 0.65, blurred for depth, dense peaks) ── */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: 0, height: "32%",
          transform: `translateY(${scrollY * 0.35}px)`,
          willChange: "transform",
          filter: "blur(1.2px)",
        }}
      >
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,200 L0,140 C 80,130 130,95 240,108 C 350,120 420,80 540,95 C 660,110 720,65 850,85 C 980,105 1050,80 1170,98 C 1290,115 1370,105 1440,112 L1440,200 Z"
            fill="#16331f" opacity="0.55"
          />
        </svg>
      </div>

      {/* ── Layer 4 — Mid mountains (parallax 0.85, layered) ── */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: 0, height: "24%",
          transform: `translateY(${scrollY * 0.15}px)`,
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,160 L0,110 C 90,100 170,55 290,72 C 410,90 490,42 620,65 C 750,85 820,55 950,75 C 1080,95 1180,68 1320,85 C 1390,93 1420,90 1440,92 L1440,160 Z"
            fill="#0d2016" opacity="0.78"
          />
        </svg>
      </div>

      {/* ── Layer 4b — Near hills (parallax 0.95, foreground depth, smoother low) ── */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: 0, height: "16%",
          transform: `translateY(${scrollY * 0.05}px)`,
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,100 L0,72 C 100,66 200,52 320,60 C 440,68 540,58 680,65 C 820,72 920,62 1060,68 C 1200,74 1320,65 1440,70 L1440,100 Z"
            fill="#070f0a" opacity="0.92"
          />
        </svg>
      </div>

      {/* ── Layer 5 — Pine trees as fixed-size corner clusters (no stretching) ── */}
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "min(35vw, 220px)", height: "min(28vh, 180px)" }}>
        <svg viewBox="0 0 220 180" preserveAspectRatio="xMidYMax meet" className="w-full h-full">
          <PineTree cx={20}  base={180} h={120} color="#060d08" opacity={0.95} sway={0} />
          <PineTree cx={55}  base={180} h={155} color="#081210" opacity={0.92} sway={1.2} />
          <PineTree cx={92}  base={180} h={100} color="#060d08" opacity={0.75} sway={2.4} />
          <PineTree cx={128} base={180} h={130} color="#081210" opacity={0.50} sway={3.6} />
          <PineTree cx={162} base={180} h={88}  color="#060d08" opacity={0.30} sway={1.8} />
          <PineTree cx={196} base={180} h={70}  color="#060d08" opacity={0.15} sway={2.5} />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: "min(35vw, 220px)", height: "min(28vh, 180px)" }}>
        <svg viewBox="0 0 220 180" preserveAspectRatio="xMidYMax meet" className="w-full h-full">
          <PineTree cx={200} base={180} h={120} color="#060d08" opacity={0.95} sway={0.5} />
          <PineTree cx={165} base={180} h={155} color="#081210" opacity={0.92} sway={1.7} />
          <PineTree cx={128} base={180} h={100} color="#060d08" opacity={0.75} sway={2.9} />
          <PineTree cx={92}  base={180} h={130} color="#081210" opacity={0.50} sway={4.1} />
          <PineTree cx={58}  base={180} h={88}  color="#060d08" opacity={0.30} sway={2.3} />
          <PineTree cx={24}  base={180} h={70}  color="#060d08" opacity={0.15} sway={3.0} />
        </svg>
      </div>

      {/* ── Bottom fade — smooth bleed into page ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #080808 100%)" }}
      />

      {/* ── Content — text on top, no parallax ── */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs text-gold tracking-[0.5em] uppercase mb-6"
        >
          Season 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.88] text-cream tracking-tight mb-8"
          style={{ fontSize: "clamp(4rem, 14vw, 11rem)" }}
        >
          Trail
          <br />
          <span className="italic text-gold">Journal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-muted text-sm tracking-[0.35em] uppercase mb-4"
        >
          Pacific Northwest · Wild
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="font-display italic text-cream/30 text-base mb-12 tracking-wide"
        >
          by Arjun Narendran
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-10 md:gap-14"
        >
          <div className="text-center">
            <p className="font-mono text-3xl md:text-4xl text-cream">{stats.totalHikes}</p>
            <p className="text-[10px] text-muted tracking-[0.3em] uppercase mt-2">Hikes</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-mono text-3xl md:text-4xl text-cream">{(stats.totalKm * 0.621371).toFixed(1)}</p>
            <p className="text-[10px] text-muted tracking-[0.3em] uppercase mt-2">Miles</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-mono text-3xl md:text-4xl text-cream">{Math.round(stats.totalElevationM * 3.28084).toLocaleString()}</p>
            <p className="text-[10px] text-muted tracking-[0.3em] uppercase mt-2">Feet up</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] text-muted/50 tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted/40 to-transparent" />
      </motion.div>

    </section>
  );
}
