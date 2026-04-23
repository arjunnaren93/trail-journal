"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker } from "react-leaflet";
import type { HikeRoute } from "@/lib/hikes";

interface Props {
  route: HikeRoute;
}

export default function HikeMap({ route }: Props) {
  const pts = route.waypoints;
  const center: [number, number] = [
    pts.reduce((s, p) => s + p[0], 0) / pts.length,
    pts.reduce((s, p) => s + p[1], 0) / pts.length,
  ];

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "480px", width: "100%" }}
      zoomControl={false}
      scrollWheelZoom={false}
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
