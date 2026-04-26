"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import ElevationProfile from "@/components/ElevationProfile";
import type { HikeRoute } from "@/lib/hikes";

const AnimatedMap = dynamic(() => import("@/components/AnimatedMap"), { ssr: false });

const DURATION = 4500;

interface Props {
  route: HikeRoute;
}

export default function RouteSection({ route }: Props) {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAutoPlayed = useRef(false);

  const stop = useCallback(() => {
    setIsPlaying(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const play = useCallback((fromStart = false) => {
    if (fromStart) {
      setProgress(0);
      progressRef.current = 0;
    }
    startTimeRef.current = null;
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    function animate(timestamp: number) {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - progressRef.current * DURATION;
      }
      const elapsed = timestamp - startTimeRef.current;
      const next = Math.min(elapsed / DURATION, 1);
      progressRef.current = next;
      setProgress(next);
      if (next < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying]);

  // Auto-play on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoPlayed.current) {
          hasAutoPlayed.current = true;
          play(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [play]);

  const isDone = progress >= 1;

  return (
    <div ref={sectionRef}>
      <div className="relative">
        <div
          className="border border-border overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          <AnimatedMap route={route} progress={progress} />
        </div>

        {/* Play / Pause / Replay button */}
        <button
          onClick={() => {
            if (isDone) play(true);
            else if (isPlaying) stop();
            else play(false);
          }}
          className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center border border-border hover:border-gold transition-colors duration-200"
          style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(8px)", zIndex: 200 }}
          aria-label={isDone ? "Replay" : isPlaying ? "Pause" : "Play"}
        >
          {isDone ? (
            // Replay icon
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1.5A5 5 0 1 1 2.5 3.8" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2.5 1.5v2.5H5" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : isPlaying ? (
            // Pause icon
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#d4a853">
              <rect x="2" y="1" width="3" height="10" rx="0.5" />
              <rect x="7" y="1" width="3" height="10" rx="0.5" />
            </svg>
          ) : (
            // Play icon
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#d4a853">
              <path d="M2.5 1.5l8 4.5-8 4.5V1.5z" />
            </svg>
          )}
        </button>
      </div>

      {route.elevationProfile && (
        <ElevationProfile profile={route.elevationProfile} progress={progress} />
      )}
    </div>
  );
}
