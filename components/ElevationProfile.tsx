"use client";

interface Props {
  profile: [number, number, number, number][];
  progress: number;
}

export default function ElevationProfile({ profile, progress }: Props) {
  if (!profile || profile.length === 0) return null;

  const W = 1000;
  const CHART_H = 72;
  const PAD = { top: 22, bottom: 6 };
  const innerH = CHART_H - PAD.top - PAD.bottom;

  const maxDist = profile[profile.length - 1][3];
  const elevations = profile.map((p) => p[2]);
  const minEle = Math.min(...elevations);
  const maxEle = Math.max(...elevations);
  const eleRange = maxEle - minEle || 1;

  const toX = (dist: number) => (dist / maxDist) * W;
  const toY = (ele: number) =>
    PAD.top + innerH - ((ele - minEle) / eleRange) * innerH;

  const linePath = `M ${profile.map((p) => `${toX(p[3])} ${toY(p[2])}`).join(" L ")}`;
  const areaPath = `${linePath} L ${W} ${CHART_H - PAD.bottom} L 0 ${CHART_H - PAD.bottom} Z`;
  const clipW = progress * W;

  const currentIdx = Math.min(Math.floor(progress * (profile.length - 1)), profile.length - 1);
  const currentPt = profile[currentIdx];
  const dotXPct = (currentPt[3] / maxDist) * 100;
  const dotYPct = (toY(currentPt[2]) / CHART_H) * 100;

  // Stats
  const totalDistMi = (maxDist / 1000 * 0.621371).toFixed(1);
  const gainFt = Math.round((maxEle - minEle) * 3.28084).toLocaleString();
  const startElevFt = Math.round(minEle * 3.28084).toLocaleString();
  const peakElevFt = Math.round(maxEle * 3.28084).toLocaleString();
  const currentElevFt = Math.round(currentPt[2] * 3.28084).toLocaleString();
  const currentDistMi = (currentPt[3] / 1000 * 0.621371).toFixed(1);

  // Peak position for label
  const peakIdx = elevations.indexOf(maxEle);
  const peakXPct = (profile[peakIdx][3] / maxDist) * 100;

  return (
    <div className="bg-[#0d0d0d] border-t border-border px-4 pt-3 pb-3">

      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-[9px] text-muted tracking-[0.2em] uppercase">Elevation Profile</p>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
          <span>+{gainFt} ft</span>
          <span className="text-border">·</span>
          <span>{totalDistMi} mi</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative overflow-hidden" style={{ height: CHART_H }}>
        <svg
          viewBox={`0 0 ${W} ${CHART_H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <clipPath id="elev-clip">
              <rect x="0" y="0" width={clipW} height={CHART_H} />
            </clipPath>
            <linearGradient id="elev-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4a853" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d4a853" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Baseline */}
          <line x1="0" y1={CHART_H - PAD.bottom} x2={W} y2={CHART_H - PAD.bottom}
            stroke="#1e1e1e" strokeWidth="1" />

          {/* Ghost path */}
          <path d={linePath} fill="none" stroke="#d4a853" strokeWidth="1.5" opacity="0.1" />

          {/* Animated fill */}
          <path d={areaPath} fill="url(#elev-fill)" clipPath="url(#elev-clip)" />

          {/* Animated line */}
          <path d={linePath} fill="none" stroke="#d4a853" strokeWidth="2" clipPath="url(#elev-clip)" />

          {/* Vertical line at dot */}
          {progress > 0 && (
            <line
              x1={toX(currentPt[3])} y1={toY(currentPt[2])}
              x2={toX(currentPt[3])} y2={CHART_H - PAD.bottom}
              stroke="#d4a853" strokeWidth="0.8" opacity="0.25"
            />
          )}
        </svg>

        {/* Moving dot — HTML so it stays circular */}
        {progress > 0 && (
          <div
            className="absolute w-2.5 h-2.5 rounded-full bg-gold border border-ink"
            style={{
              left: `${dotXPct}%`,
              top: `${dotYPct}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          />
        )}

        {/* Peak label — fades in when animation reaches it */}
        {progress >= peakXPct / 100 - 0.05 && (
          <div
            className="absolute font-mono text-[9px] text-gold whitespace-nowrap px-1.5 py-0.5"
            style={{
              left: `${Math.min(Math.max(peakXPct, 12), 88)}%`,
              top: 2,
              transform: "translateX(-50%)",
              background: "rgba(13,13,13,0.9)",
              border: "1px solid rgba(212,168,83,0.25)",
              opacity: Math.min(1, (progress - (peakXPct / 100 - 0.05)) * 20),
              zIndex: 20,
            }}
          >
            ▲ {peakElevFt} ft
          </div>
        )}
      </div>

      {/* Bottom axis — HTML text, never stretches */}
      <div className="flex items-center justify-between mt-1.5">
        <span className="font-mono text-[9px] text-muted/50">{startElevFt} ft</span>
        {progress > 0.05 && (
          <span className="font-mono text-[9px] text-gold/70">
            {currentElevFt} ft · {currentDistMi} mi
          </span>
        )}
        <span className="font-mono text-[9px] text-muted/50">{totalDistMi} mi</span>
      </div>
    </div>
  );
}
