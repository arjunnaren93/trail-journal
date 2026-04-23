export type Difficulty = "Easy" | "Moderate" | "Hard" | "Expert";

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface GearCategory {
  category: string;
  items: string[];
}

export interface HikeRoute {
  startCoords: [number, number];
  endCoords?: [number, number];
  waypoints: [number, number][];
  isLoop?: boolean;
}

export interface Hike {
  slug: string;
  name: string;
  tagline: string;
  date: string;
  location: string;
  region: string;
  distanceKm: number;
  elevationGainM: number;
  maxElevationM: number;
  durationMin: number;
  difficulty: Difficulty;
  heroImage: string;
  photos: Photo[];
  story: string[];
  gear: GearCategory[];
  route: HikeRoute;
  weather: string;
  tags: string[];
  upcoming?: boolean;
}

export const HIKES: Hike[] = [
  {
    slug: "diablo-lake-thunder-knob",
    name: "Thunder Knob",
    tagline: "Turquoise water, North Cascades silence, and the first trail of the season",
    date: "April 26, 2026",
    location: "Colonial Creek, North Cascades, WA",
    region: "North Cascades",
    distanceKm: 6.1,
    elevationGainM: 165,
    maxElevationM: 584,
    durationMin: 150,
    difficulty: "Moderate",
    upcoming: true,
    heroImage: "https://picsum.photos/seed/diabloherp/1600/900",
    photos: [
      {
        src: "https://picsum.photos/seed/diablo1/1200/800",
        alt: "Diablo Lake from Thunder Knob",
        caption: "Diablo Lake from the summit — that turquoise is real",
        width: 1200,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/diablo2/800/1200",
        alt: "Trail through forest",
        caption: "Douglas fir and western red cedar on the climb",
        width: 800,
        height: 1200,
      },
      {
        src: "https://picsum.photos/seed/diablo3/1200/800",
        alt: "North Cascades peaks",
        caption: "Colonial Peak still holding snow in late April",
        width: 1200,
        height: 800,
      },
      {
        src: "https://picsum.photos/seed/diablo4/1200/800",
        alt: "Spring wildflowers",
        caption: "Trillium on the forest floor",
        width: 1200,
        height: 800,
      },
    ],
    story: [
      "Winter held on longer than usual this year. Every weekend in March I'd check SR-20 on WSDOT, and every weekend the closure was still in place somewhere past Newhalem. By April the anticipation had built into something unreasonable for a 3.8-mile day hike.",
      "The North Cascades Highway opening is its own ritual. The plows clear it, the rangers do their checks, and then one Thursday evening the website flips from 'CLOSED' to 'OPEN' and suddenly it's real. I booked the weekend immediately.",
      "Thunder Knob isn't the most dramatic trail in the Cascades — it won't challenge you the way the Enchantments will later this summer. But for a season opener it's exactly right. The forest climb is quiet, the mud is honest, and then you break out at the top and Diablo Lake is just sitting there below you in that impossible glacial blue-green, and you remember why you do this.",
      "First hike of the season. The legs remember. The lungs catch up. More to come.",
    ],
    gear: [
      {
        category: "Layers",
        items: [
          "Merino base layer",
          "Fleece mid-layer",
          "Waterproof shell (essential)",
          "Rain pants",
          "Beanie + light gloves",
        ],
      },
      {
        category: "Footwear",
        items: [
          "Waterproof hiking boots",
          "Wool socks × 2",
          "Gaiters (optional, mud)",
        ],
      },
      {
        category: "Hydration",
        items: ["2L water", "Electrolyte tabs"],
      },
      {
        category: "Nutrition",
        items: [
          "PB&J wrap",
          "Trail mix",
          "2× energy bars",
          "Coffee thermos",
        ],
      },
      {
        category: "Navigation",
        items: [
          "AllTrails offline (cell dead zone)",
          "Printed trail map",
        ],
      },
      {
        category: "Safety & Extras",
        items: [
          "First aid kit",
          "Headlamp",
          "Trekking poles",
          "Camera",
          "Sunscreen",
        ],
      },
    ],
    route: {
      startCoords: [48.6886, -121.0983],
      endCoords: [48.6886, -121.0983],
      waypoints: [
        [48.6886, -121.0983],
        [48.692, -121.095],
        [48.696, -121.092],
        [48.6995, -121.089],
        [48.7025, -121.0865],
        [48.7035, -121.0847],
      ],
      isLoop: false,
    },
    weather: "Check forecast — pack for rain regardless",
    tags: ["North Cascades", "Alpine Lake", "Season Opener", "Forest", "Viewpoint"],
  },
];

export function getHike(slug: string): Hike | undefined {
  return HIKES.find((h) => h.slug === slug);
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export const SEASON_STATS = {
  totalHikes: HIKES.length,
  totalKm: HIKES.reduce((sum, h) => sum + h.distanceKm, 0),
  totalElevationM: HIKES.reduce((sum, h) => sum + h.elevationGainM, 0),
};
