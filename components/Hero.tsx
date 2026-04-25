"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  stats: { totalHikes: number; totalKm: number; totalElevationM: number };
}

interface Star {
  top: number;
  left: number;
  opacity: number;
}

export default function Hero({ stats }: Props) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 50 }, () => ({
        top: Math.random() * 65,
        left: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071510] via-[#09101a] to-ink" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute w-px h-px rounded-full bg-cream"
            style={{ top: `${s.top}%`, left: `${s.left}%`, opacity: s.opacity }}
          />
        ))}
      </div>

      {/* Mountain silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-72 opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,280 L0,160 L120,80 L240,160 L360,60 L480,140 L600,40 L720,120 L840,30 L960,110 L1080,50 L1200,130 L1320,70 L1440,150 L1440,280 Z"
            fill="#1a3a28"
            opacity="0.6"
          />
          <path
            d="M0,280 L0,200 L180,130 L320,190 L460,110 L580,170 L700,90 L820,160 L960,100 L1100,170 L1240,120 L1440,180 L1440,280 Z"
            fill="#0f2218"
            opacity="0.8"
          />
          <path
            d="M0,280 L0,240 L200,190 L400,230 L600,195 L800,240 L1000,200 L1200,240 L1440,210 L1440,280 Z"
            fill="#080808"
          />
        </svg>
      </div>

      {/* Content */}
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

        {/* Season stats */}
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-muted/50 tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted/40 to-transparent" />
      </motion.div>
    </section>
  );
}
