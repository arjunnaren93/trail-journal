import { HIKES, SEASON_STATS } from "@/lib/hikes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HikeCard from "@/components/HikeCard";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero stats={SEASON_STATS} />

      <main id="hikes" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs text-muted tracking-[0.35em] uppercase mb-3">
              Season 2026
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
              This Season
            </h2>
          </div>
          <p className="hidden md:block text-xs text-muted tracking-[0.2em] uppercase">
            {HIKES.length} hikes &nbsp;·&nbsp; {SEASON_STATS.totalKm.toFixed(0)} km
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {HIKES.map((hike, i) => (
            <HikeCard
              key={hike.slug}
              hike={hike}
              index={i}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-10 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted tracking-widest uppercase">
          Trail Journal · Arjun Narendran · 2026
        </p>
        <p className="text-xs text-muted">
          {SEASON_STATS.totalKm.toFixed(1)} km ·{" "}
          +{SEASON_STATS.totalElevationM.toLocaleString()} m elevation
        </p>
      </footer>
    </>
  );
}
