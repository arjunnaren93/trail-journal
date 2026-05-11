"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Hiker } from "@/lib/hikes";

export default function HikersSection({ hikers }: { hikers: Hiker[] }) {
  const [expanded, setExpanded] = useState(false);
  const [arjun, ...others] = hikers;

  return (
    <div className="py-10 border-b border-border">
      <p className="text-[10px] text-muted tracking-[0.35em] uppercase mb-6">
        On This Hike
      </p>
      <div className="flex items-end gap-5 flex-wrap">

        {/* Arjun — always visible, slightly larger */}
        <a
          href={`https://instagram.com/${arjun.instagram}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 group shrink-0"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/50 group-hover:border-gold transition-colors duration-300">
            <img src={arjun.avatar} alt={arjun.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] text-cream/60 tracking-[0.1em] group-hover:text-gold transition-colors duration-300">
            @{arjun.instagram}
          </span>
        </a>

        {/* Others — collapsible */}
        <AnimatePresence>
          {expanded && others.map((hiker, i) => (
            <motion.a
              key={hiker.instagram}
              href={`https://instagram.com/${hiker.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group shrink-0"
              initial={{ opacity: 0, x: -12, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -12, width: 0 }}
              transition={{ duration: 0.22, delay: i * 0.05, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border group-hover:border-gold/50 transition-colors duration-300">
                <img src={hiker.avatar} alt={hiker.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] text-muted tracking-[0.1em] group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                @{hiker.instagram}
              </span>
            </motion.a>
          ))}
        </AnimatePresence>

        {/* Toggle button */}
        {others.length > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex flex-col items-center gap-2 group shrink-0 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border-2 border-border group-hover:border-gold/50 transition-colors duration-300 flex items-center justify-center bg-card">
              <span className="text-xs text-muted group-hover:text-gold transition-colors duration-300 font-mono">
                {expanded ? "−" : `+${others.length}`}
              </span>
            </div>
            <span className="text-[10px] text-muted/50 tracking-[0.1em] group-hover:text-gold/60 transition-colors duration-300">
              {expanded ? "less" : "more"}
            </span>
          </button>
        )}

      </div>
    </div>
  );
}
