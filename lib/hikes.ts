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

export interface WeatherSnapshot {
  tempC: number;
  tempF: number;
  condition: string;
  icon: string;
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
  weatherSnapshot?: WeatherSnapshot;
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
    distanceKm: 8.22,
    elevationGainM: 427,
    maxElevationM: 783,
    durationMin: 180,
    difficulty: "Moderate",
    heroImage: "/photos/dirty-harrys-balcony/08-valley-panoramic-hero.jpg",
    photos: [
      {
        src: "/photos/dirty-harrys-balcony/02-i90-drive-in.jpg",
        alt: "Driving I-90 east toward the Cascades on a clear April morning",
        caption: "I-90 east, windows down, the mountains already visible before we'd even parked.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/03-dirty-harrys-trail-sign.jpg",
        alt: "Dirty Harry's Peak Trail sign at the trailhead",
        caption: "The name alone is enough to make you curious.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/04-river-sandbar-overlook.jpg",
        alt: "Hikers on a river sandbar below the forested Cascade slopes",
        caption: "The Snoqualmie below — a reminder of how much valley there is beneath you.",
        width: 2048,
        height: 1536,
      },
      {
        src: "/photos/dirty-harrys-balcony/05-cascade-peak-forest-approach.jpg",
        alt: "Snow-capped Cascade peak rising above the forested valley on the drive in",
        caption: "Every trail promises something at the end; here the mountain makes that promise visible from the road.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/10-canopy-sun-flare.jpg",
        alt: "Sun bursting through the old-growth Douglas fir canopy",
        caption: "Ancient firs close their arms overhead, letting one blade of light through.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/06-carved-tree-trunk.jpg",
        alt: "Tree trunk covered in carved names and initials along the Birdhouse Trail",
        caption: "Decades of hikers have left their mark. The forest keeps the record.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/13-mountain-through-dead-trees.jpg",
        alt: "Cascade mountain peak framed through standing dead timber",
        caption: "The forest keeps score of every storm — but the mountain behind it doesn't move.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/09-moss-and-fern-macro.jpg",
        alt: "Close-up of moss and dead fern fronds on the forest floor",
        caption: "The floor of the Cascades is its own world — slow, wet, and alive.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/07-snoqualmie-valley-view.jpg",
        alt: "Snoqualmie Valley and I-90 corridor seen from Dirty Harry's Balcony",
        caption: "The valley holds its breath beneath a sky that doesn't know the word narrow.",
        width: 2048,
        height: 1536,
      },
      {
        src: "/photos/dirty-harrys-balcony/08-valley-panoramic-hero.jpg",
        alt: "Panoramic view of the Snoqualmie Valley, I-90, and Cascade peaks from the balcony",
        caption: "The whole corridor laid out below — mountains, highway, forest, all of it.",
        width: 2048,
        height: 813,
      },
      {
        src: "/photos/dirty-harrys-balcony/11-boots-on-the-balcony.jpg",
        alt: "Hiking boots resting on the rocky balcony with the Cascade valley behind",
        caption: "Boots earned their rest here. The Cascades don't ask for anything more.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/14-indian-paintbrush.jpg",
        alt: "Indian paintbrush wildflowers in brilliant red bloom",
        caption: "Indian paintbrush burns red where the rock is barely soil, unbothered by the altitude.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/12-arjun-and-badri-summit.jpg",
        alt: "Arjun and Badri at the balcony viewpoint, smiling at the summit",
        caption: "The best views are better with company.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/dirty-harrys-balcony/15-post-hike-tacos.jpg",
        alt: "Post-hike tacos at a North Bend taqueria",
        caption: "Every great hike ends with great tacos. Non-negotiable.",
        width: 1536,
        height: 2048,
      },
    ],
    story: [
      "Last-minute Saturday plan. I looked out the window, saw the sun actually doing its job for once, and texted Badri. We got there later than you'd want but the lot had spots and the sky was still putting on a show. Good enough.",
      "We saw a lot of birds on the way up and wondered why it was called the Birdhouse Trail. Never figured that out. We also wondered who Dirty Harry was. Turns out it has nothing to do with Clint Eastwood. The peak and the balcony are named after Harry Gault, a logger who worked this mountain in the 1940s. Just a guy named Harry, presumably dirty from work, who logged the whole thing. The mountain got his name. Clint Eastwood's movie came out thirty years later and the confusion has been great for trail marketing ever since.",
      "We had not packed food. Not a bar, not a handful of trail mix. Nothing. By the time we hit the viewpoint we weren't thinking about views, we were thinking about tacos. The whole descent was a two-man food podcast. What to order, where to go, rice or fries, settled with the urgency of people who had genuinely earned an opinion.",
      "About 1,400 feet of gain through old-growth fir and cedar, muddy in April, the kind that tests your grip. I wore a fleece at the start and dropped it twenty minutes in. We also briefly tried to hike to the wrong summit. Two minutes in, Badri checked the map. I'm counting that as good navigation. When the trail finally opens onto the rocky balcony and the whole Snoqualmie Valley is just sitting there below you, the ache feels right.",
      "It's been a while since I did any cardio. Badri was patient in a way only a good hiking partner can be. First hike of the season. More to come.",
    ],
    gear: [
      {
        category: "Layers",
        items: [
          "Base layer",
          "Fleece mid-layer",
          "Hiking pants",
          "Cap",
        ],
      },
      {
        category: "Footwear",
        items: [
          "Hiking boots",
          "Hiking socks",
        ],
      },
      {
        category: "Hydration",
        items: ["2L water"],
      },
      {
        category: "Nutrition",
        items: ["Nothing. Absolutely nothing."],
      },
      {
        category: "Navigation",
        items: [
          "AllTrails offline map",
          "Strava",
        ],
      },
      {
        category: "Safety & Extras",
        items: ["Sunscreen"],
      },
    ],
    route: {
      startCoords: [47.43112, -121.63278],
      endCoords: [47.43109, -121.63308],
      waypoints: [
        [47.43112, -121.63278],
        [47.43236, -121.63168],
        [47.43269, -121.62968],
        [47.43219, -121.62758],
        [47.43129, -121.62647],
        [47.43109, -121.62493],
        [47.43063, -121.62315],
        [47.43100, -121.62211],
        [47.43183, -121.62273],
        [47.43271, -121.62197],
        [47.43279, -121.62063],
        [47.43207, -121.61892],
        [47.43362, -121.61512],
        [47.43390, -121.61423],
        [47.43456, -121.61183],
        [47.43555, -121.61253],
        [47.43375, -121.61018],
        [47.43369, -121.61383],
        [47.43364, -121.61642],
        [47.43301, -121.61835],
        [47.43305, -121.62030],
        [47.43261, -121.62164],
        [47.43090, -121.62211],
        [47.43059, -121.62286],
        [47.43131, -121.62498],
        [47.43225, -121.62731],
        [47.43262, -121.62934],
        [47.43240, -121.63162],
        [47.43112, -121.63305],
      ],
      isLoop: false,
    },
    weather: "Mainly clear, 14°C at trail end",
    weatherSnapshot: {
      tempC: 14,
      tempF: 57,
      condition: "Mainly Clear",
      icon: "🌤️",
    },
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
