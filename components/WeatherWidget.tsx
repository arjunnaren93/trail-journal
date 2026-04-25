"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  tempC: number;
  tempF: number;
  label: string;
  icon: string;
}

function getWeatherInfo(code: number): { label: string; icon: string } {
  if (code === 0) return { label: "Clear", icon: "☀️" };
  if (code <= 2) return { label: "Partly Cloudy", icon: "⛅" };
  if (code === 3) return { label: "Overcast", icon: "☁️" };
  if (code <= 48) return { label: "Foggy", icon: "🌫️" };
  if (code <= 55) return { label: "Drizzle", icon: "🌦️" };
  if (code <= 67) return { label: "Rain", icon: "🌧️" };
  if (code <= 77) return { label: "Snow", icon: "❄️" };
  if (code <= 82) return { label: "Showers", icon: "🌦️" };
  return { label: "Storm", icon: "⛈️" };
}

export default function WeatherWidget({ lat, lon }: { lat: number; lon: number }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=celsius`
    )
      .then((r) => r.json())
      .then((data) => {
        const tempC = Math.round(data.current.temperature_2m);
        const tempF = Math.round((tempC * 9) / 5 + 32);
        const { label, icon } = getWeatherInfo(data.current.weather_code);
        setWeather({ tempC, tempF, label, icon });
      })
      .catch(() => null);
  }, [lat, lon]);

  return (
    <div className="shrink-0">
      <p className="text-[10px] text-muted tracking-[0.2em] uppercase">Weather</p>
      {weather ? (
        <>
          <p className="font-mono text-sm text-cream mt-0.5">
            {weather.icon} {weather.tempC}°C · {weather.tempF}°F
          </p>
          <p className="text-[9px] text-muted/70 mt-0.5 tracking-wide">{weather.label}</p>
        </>
      ) : (
        <p className="font-mono text-sm text-cream/30 mt-0.5">—</p>
      )}
    </div>
  );
}
