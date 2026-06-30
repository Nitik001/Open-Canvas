"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Marker,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Major geopolitical hubs
const CAPITALS: { name: string; coordinates: [number, number]; delay: number }[] = [
  { name: "Washington D.C.", coordinates: [-77.03, 38.9], delay: 0 },
  { name: "Moscow", coordinates: [37.62, 55.76], delay: 0.4 },
  { name: "Beijing", coordinates: [116.4, 39.9], delay: 0.8 },
  { name: "Brussels", coordinates: [4.35, 50.85], delay: 0.2 },
  { name: "New Delhi", coordinates: [77.21, 28.61], delay: 1.0 },
  { name: "London", coordinates: [-0.13, 51.51], delay: 0.6 },
  { name: "Riyadh", coordinates: [46.68, 24.71], delay: 1.4 },
  { name: "Brasília", coordinates: [-47.93, -15.78], delay: 1.8 },
  { name: "Nairobi", coordinates: [36.82, -1.29], delay: 2.2 },
  { name: "Tokyo", coordinates: [139.69, 35.69], delay: 1.2 },
  { name: "Geneva", coordinates: [6.14, 46.2], delay: 0.9 },
  { name: "Jakarta", coordinates: [106.84, -6.21], delay: 1.6 },
];

interface WorldMapProps {
  className?: string;
}

export function WorldMap({ className }: WorldMapProps) {
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null);

  return (
    <div className={className} aria-hidden="true">
      {/* Inline keyframe for pulsing dots */}
      <style>{`
        @keyframes map-ping {
          0% { r: 2; opacity: 0.8; }
          70%, 100% { r: 9; opacity: 0; }
        }
        .capital-pulse {
          animation: map-ping 2.4s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
      `}</style>

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 165, center: [10, 8] }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Ocean sphere — very subtle teal ring */}
        <Sphere
          id="world-sphere"
          fill="transparent"
          stroke="rgba(56,189,248,0.08)"
          strokeWidth={0.6}
        />

        {/* Lat/lon graticule grid */}
        <Graticule
          stroke="rgba(56,189,248,0.05)"
          strokeWidth={0.35}
          step={[20, 20]}
        />

        {/* Country fills */}
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const isHovered = hoveredGeo === geo.rsmKey;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredGeo(geo.rsmKey)}
                  onMouseLeave={() => setHoveredGeo(null)}
                  style={{
                    default: {
                      fill: isHovered
                        ? "rgba(56,189,248,0.14)"
                        : "rgba(56,189,248,0.045)",
                      stroke: isHovered
                        ? "rgba(56,189,248,0.45)"
                        : "rgba(56,189,248,0.15)",
                      strokeWidth: isHovered ? 0.55 : 0.35,
                      outline: "none",
                      transition: "fill 0.22s ease, stroke 0.22s ease",
                    },
                    hover: {
                      fill: "rgba(56,189,248,0.16)",
                      stroke: "rgba(56,189,248,0.5)",
                      strokeWidth: 0.6,
                      outline: "none",
                    },
                    pressed: {
                      fill: "rgba(56,189,248,0.22)",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Capital markers with pulsing rings */}
        {CAPITALS.map(({ name, coordinates, delay }) => (
          <Marker key={name} coordinates={coordinates}>
            {/* Outer animated pulse — pure SVG animation */}
            <circle
              cx={0}
              cy={0}
              r={2}
              fill="transparent"
              stroke="rgba(56,189,248,0.6)"
              strokeWidth={0.7}
              style={{
                animation: `map-ping 2.4s ease-out ${delay}s infinite`,
              }}
            />
            {/* Static inner dot */}
            <circle
              cx={0}
              cy={0}
              r={1.8}
              fill="#38bdf8"
              opacity={0.85}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
