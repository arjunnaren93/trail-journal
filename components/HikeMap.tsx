"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker } from "react-leaflet";
import type { HikeRoute } from "@/lib/hikes";

interface Props {
  route: HikeRoute;
}

export default function HikeMap({ route }: Props) {
  const pts = route.waypoints;
  const lats = pts.map((p) => p[0]);
  const lons = pts.map((p) => p[1]);
  const bounds: [[number, number], [number, number]] = [
    [Math.min(...lats), Math.min(...lons)],
    [Math.max(...lats), Math.max(...lons)],
  ];

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [40, 40] }}
      style={{ height: "480px", width: "100%", isolation: "isolate" }}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Polyline
        positions={pts}
        pathOptions={{ color: "#d4a853", weight: 3, opacity: 0.9 }}
      />
      <CircleMarker
        center={pts[0]}
        radius={7}
        pathOptions={{
          color: "#4f7a5e",
          fillColor: "#4f7a5e",
          fillOpacity: 1,
          weight: 2,
        }}
      />
      <CircleMarker
        center={pts[pts.length - 1]}
        radius={7}
        pathOptions={{
          color: "#d4a853",
          fillColor: "#d4a853",
          fillOpacity: 1,
          weight: 2,
        }}
      />
    </MapContainer>
  );
}
