"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, CircleMarker, useMap } from "react-leaflet";
import type { HikeRoute } from "@/lib/hikes";

function FitBounds({ bounds }: { bounds: [[number, number], [number, number]] }) {
  const map = useMap();
  useEffect(() => {
    const fit = () => map.fitBounds(bounds, { padding: [40, 40] });
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [map, bounds]);
  return null;
}

interface Props {
  route: HikeRoute;
  progress: number;
}

export default function AnimatedMap({ route, progress }: Props) {
  // Use elevation profile points if available — 81 pts vs 29 waypoints, much smoother
  const pts: [number, number][] = route.elevationProfile
    ? route.elevationProfile.map((p) => [p[0], p[1]])
    : route.waypoints;

  const lats = pts.map((p) => p[0]);
  const lons = pts.map((p) => p[1]);
  const bounds: [[number, number], [number, number]] = [
    [Math.min(...lats), Math.min(...lons)],
    [Math.max(...lats), Math.max(...lons)],
  ];

  const visibleCount = Math.max(2, Math.floor(progress * pts.length));
  const visiblePts = pts.slice(0, visibleCount);
  const currentPt = pts[Math.min(visibleCount - 1, pts.length - 1)];

  return (
    <MapContainer
      center={[lats.reduce((a, b) => a + b) / lats.length, lons.reduce((a, b) => a + b) / lons.length]}
      zoom={13}
      style={{ height: "420px", width: "100%", isolation: "isolate" }}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
    >
      <FitBounds bounds={bounds} />
      <TileLayer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
        className="topo-tile"
      />

      {/* Ghost full route */}
      <Polyline
        positions={pts}
        pathOptions={{ color: "#d4a853", weight: 2, opacity: 0.12 }}
      />

      {/* Animated route */}
      <Polyline
        positions={visiblePts}
        pathOptions={{ color: "#d4a853", weight: 3, opacity: 0.95 }}
      />

      {/* Start dot — always visible */}
      <CircleMarker
        center={pts[0]}
        radius={6}
        pathOptions={{ color: "#4f7a5e", fillColor: "#4f7a5e", fillOpacity: 1, weight: 2 }}
      />

      {/* Moving dot */}
      {progress > 0 && progress < 1 && (
        <CircleMarker
          center={currentPt}
          radius={5}
          pathOptions={{ color: "#fff", fillColor: "#fff", fillOpacity: 1, weight: 0 }}
        />
      )}

      {/* End dot — appears on completion */}
      {progress >= 1 && (
        <CircleMarker
          center={pts[pts.length - 1]}
          radius={6}
          pathOptions={{ color: "#d4a853", fillColor: "#d4a853", fillOpacity: 1, weight: 2 }}
        />
      )}
    </MapContainer>
  );
}
