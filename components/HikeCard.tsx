"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hike, formatDuration } from "@/lib/hikes";

const difficultyColor: Record<string, string> = {
  Easy: "#34d399",
  Moderate: "#fbbf24",
  Hard: "#fb923c",
  Expert: "#f87171",
};

interface Props {
  hike: Hike;
  index: number;
  reversed?: boolean;
}

export default function HikeCard({ hike, index, reversed = false }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/hikes/${hike.slug}`} className="group block">
        <div
          className={`flex flex-col ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          } border border-border bg-card overflow-hidden transition-colors duration-500 hover:border-gold/40`}
          style={{ minHeight: "480px" }}
        >
          {/* Photo */}
          <div className="relative w-full md:w-[55%] h-[260px] md:h-auto overflow-hidden">
            <Image
              src={hike.heroImage}
              alt={hike.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/50" />
            <span className="absolute top-5 left-5 font-mono text-xs text-cream/25 tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            {hike.upcoming && (
              <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] uppercase bg-gold text-ink px-2.5 py-1 font-medium">
                Upcoming
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-8 md:p-10 w-full md:w-[45%]">
            <div>
              <p className="text-xs text-muted tracking-[0.2em] uppercase mb-4">
                {hike.date} · {hike.region}
              </p>
              <h2 className="font-display text-3xl md:text-[2.6rem] text-cream leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                {hike.name}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                {hike.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {hike.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.15em] uppercase text-muted border border-border px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="w-full h-px bg-border mb-6" />
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xl text-cream">{(hike.distanceKm * 0.621371).toFixed(1)}</p>
                  <p className="text-[10px] text-muted tracking-widest uppercase mt-1">miles</p>
                </div>
                <div>
                  <p className="font-mono text-xl text-cream">+{Math.round(hike.elevationGainM * 3.28084).toLocaleString()}</p>
                  <p className="text-[10px] text-muted tracking-widest uppercase mt-1">elev ft</p>
                </div>
                <div>
                  <p className="font-mono text-xl text-cream">{formatDuration(hike.durationMin)}</p>
                  <p className="text-[10px] text-muted tracking-widest uppercase mt-1">duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-medium"
                  style={{ color: difficultyColor[hike.difficulty] }}
                >
                  ● {hike.difficulty}
                </span>
                <span className="text-muted/30">·</span>
                <span className="text-xs text-muted">{hike.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
