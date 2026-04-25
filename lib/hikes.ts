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

export interface Hiker {
  name: string;
  instagram: string;
  avatar: string;
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
  hikers?: Hiker[];
}

export const HIKES: Hike[] = [
  {
    slug: "dirty-harrys-balcony",
    name: "Dirty Harry's Balcony",
    tagline: "Birdhouses, old-growth forest, and a front-row seat to the Snoqualmie Valley",
    date: "April 25, 2026",
    location: "North Bend, WA",
    region: "I-90 Corridor",
    distanceKm: 6.9,
    elevationGainM: 420,
    maxElevationM: 817,
    durationMin: 165,
    difficulty: "Moderate",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85&auto=format",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85&auto=format",
        alt: "View from Dirty Harry's Balcony across the Snoqualmie Valley",
        caption: "The Balcony — McClellan Butte and Mount Washington laid out across the valley",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=85&auto=format",
        alt: "Sunlit old-growth forest on the Birdhouse Trail",
        caption: "The Birdhouse Trail climbs through second-growth Douglas fir — quiet and mossy in April",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85&auto=format",
        alt: "Snoqualmie Valley from the ridge",
        caption: "Looking back down the valley toward North Bend",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=85&auto=format",
        alt: "Misty forest trail in spring",
        caption: "April mist on the climb — the trail earns the views",
        width: 800,
        height: 1200,
      },
    ],
    story: [
      "The name alone is enough to make you curious. Dirty Harry's Balcony — it sounds like a spaghetti western, not a trail 45 minutes from Seattle. But that's part of the charm of hiking the I-90 corridor: everything is close, a little weird, and better than you expect.",
      "The Birdhouse Trail earns its name quickly. Within the first half mile, handmade birdhouses start appearing nailed to the trees — dozens of them, painted and weathered, ranging from simple boxes to miniature cabins. Nobody knows exactly who built them all or when. They've just accumulated over the years, left by hikers who wanted to leave something. It's the most unexpectedly delightful thing I've seen on a trail.",
      "The climb itself is steady but honest — 1,400 feet of gain through old-growth Douglas fir and western red cedar, muddy in April, smelling of rain and moss. The forest is dense enough that you can't see much until you can't miss it: the trail breaks out onto a rocky outcropping and suddenly the entire Snoqualmie Valley opens up below you. McClellan Butte. Mount Kent. Mount Washington. All of it just sitting there.",
      "First hike of the season. Everything aches the right amount. More to come.",
    ],
    gear: [
      {
        category: "Layers",
        items: [
          "Merino base layer",
          "Fleece mid-layer",
          "Waterproof shell",
          "Rain pants",
          "Beanie + gloves",
        ],
      },
      {
        category: "Footwear",
        items: [
          "Waterproof hiking boots",
          "Wool socks × 2",
          "Gaiters (mud season)",
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
          "AllTrails offline map",
          "Discover Pass (required)",
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
      startCoords: [47.4747, -121.7239],
      endCoords: [47.4747, -121.7239],
      waypoints: [
        [47.4747, -121.7239],
        [47.477, -121.720],
        [47.480, -121.718],
        [47.483, -121.716],
        [47.487, -121.714],
        [47.490, -121.712],
      ],
      isLoop: false,
    },
    weather: "Cool and likely wet in April — waterproof everything",
    tags: ["North Bend", "Snoqualmie Valley", "Viewpoint", "Old-Growth Forest", "Season Opener", "I-90 Corridor"],
    hikers: [
      {
        name: "Arjun",
        instagram: "arjun_naren",
        avatar: "/avatars/arjun.jpg",
      },
      {
        name: "Badri",
        instagram: "badri9189",
        avatar: "/avatars/badri.jpg",
      },
    ],
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
