import { Hike, formatDuration } from "@/lib/hikes";
import WeatherWidget from "@/components/WeatherWidget";

const difficultyColor: Record<string, string> = {
  Easy: "#34d399",
  Moderate: "#fbbf24",
  Hard: "#fb923c",
  Expert: "#f87171",
};

export default function StatsBar({ hike }: { hike: Hike }) {
  const miles = (hike.distanceKm * 0.621371).toFixed(1);
  const gainFt = Math.round(hike.elevationGainM * 3.28084).toLocaleString();
  const maxFt = Math.round(hike.maxElevationM * 3.28084).toLocaleString();

  const stats = [
    { label: "Distance", value: `${miles} mi` },
    { label: "Elevation Gain", value: `+${gainFt} ft` },
    { label: "Max Elevation", value: `${maxFt} ft` },
    { label: "Duration", value: formatDuration(hike.durationMin) },
    {
      label: "Difficulty",
      value: hike.difficulty,
      color: difficultyColor[hike.difficulty],
    },
    { label: "Trail Type", value: hike.route.isLoop ? "Loop" : "Out & Back" },
  ];

  return (
    <div className="border-b border-border" style={{ position: "sticky", top: "64px", zIndex: 99, background: "#080808" }}>
      {/* Mobile: 3-column grid */}
      <div className="md:hidden px-6 py-3 grid grid-cols-3 gap-x-2 gap-y-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[9px] text-muted tracking-[0.15em] uppercase">{stat.label}</p>
            <p className="font-mono text-xs text-cream mt-0.5" style={stat.color ? { color: stat.color } : {}}>
              {stat.value}
            </p>
          </div>
        ))}
        <div className="col-span-3 border-t border-border pt-2.5">
          <WeatherWidget
            lat={hike.route.startCoords[0]}
            lon={hike.route.startCoords[1]}
            snapshot={hike.weatherSnapshot}
          />
        </div>
      </div>

      {/* Desktop: horizontal row */}
      <div className="hidden md:block max-w-7xl mx-auto px-12 py-4 overflow-x-auto">
        <div className="flex items-start gap-0 min-w-max">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && <div className="w-px h-8 bg-border mx-8 shrink-0 mt-1" />}
              <div className="shrink-0">
                <p className="text-[10px] text-muted tracking-[0.2em] uppercase">{stat.label}</p>
                <p className="font-mono text-sm text-cream mt-0.5" style={stat.color ? { color: stat.color } : {}}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
          <div className="w-px h-8 bg-border mx-8 shrink-0 mt-1" />
          <WeatherWidget
            lat={hike.route.startCoords[0]}
            lon={hike.route.startCoords[1]}
            snapshot={hike.weatherSnapshot}
          />
        </div>
      </div>
    </div>
  );
}
