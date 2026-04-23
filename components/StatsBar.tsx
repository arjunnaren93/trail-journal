import { Hike, formatDuration } from "@/lib/hikes";

const difficultyColor: Record<string, string> = {
  Easy: "#34d399",
  Moderate: "#fbbf24",
  Hard: "#fb923c",
  Expert: "#f87171",
};

export default function StatsBar({ hike }: { hike: Hike }) {
  const stats = [
    { label: "Distance", value: `${hike.distanceKm} km` },
    { label: "Elevation Gain", value: `+${hike.elevationGainM} m` },
    { label: "Max Elevation", value: `${hike.maxElevationM.toLocaleString()} m` },
    { label: "Duration", value: formatDuration(hike.durationMin) },
    {
      label: "Difficulty",
      value: hike.difficulty,
      color: difficultyColor[hike.difficulty],
    },
  ];

  return (
    <div className="sticky top-0 z-40 bg-ink/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 overflow-x-auto">
        <div className="flex items-center gap-0 min-w-max">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && <div className="w-px h-8 bg-border mx-6 md:mx-8 shrink-0" />}
              <div className="shrink-0">
                <p className="text-[10px] text-muted tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
                <p
                  className="font-mono text-sm text-cream mt-0.5"
                  style={stat.color ? { color: stat.color } : {}}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
