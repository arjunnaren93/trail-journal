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
  elevationProfile?: [number, number, number, number][]; // [lat, lon, ele_m, dist_m]
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
      elevationProfile: [
        [47.43112, -121.63278, 403.4, 0],
        [47.43147, -121.63145, 400.8, 120],
        [47.43236, -121.63168, 403.1, 252],
        [47.43294, -121.63176, 410.7, 376],
        [47.43269, -121.6297, 419.2, 548],
        [47.43238, -121.62826, 439.8, 681],
        [47.43216, -121.62758, 456.1, 796],
        [47.43193, -121.6268, 474.7, 928],
        [47.43127, -121.62649, 489.5, 1058],
        [47.43133, -121.62588, 496.9, 1136],
        [47.43111, -121.62496, 515.4, 1278],
        [47.43105, -121.62409, 526.3, 1377],
        [47.43063, -121.62315, 537.3, 1476],
        [47.43063, -121.62285, 547.8, 1531],
        [47.431, -121.62284, 558.3, 1591],
        [47.43119, -121.62255, 573.3, 1702],
        [47.431, -121.62211, 579.8, 1762],
        [47.43144, -121.62247, 592.9, 1838],
        [47.43184, -121.62269, 604.5, 1905],
        [47.43163, -121.62191, 620.1, 2019],
        [47.43168, -121.6217, 625.2, 2058],
        [47.43213, -121.622, 631.7, 2122],
        [47.4327, -121.622, 649.8, 2240],
        [47.43268, -121.62133, 659.5, 2306],
        [47.43246, -121.62098, 664.0, 2356],
        [47.43287, -121.62104, 680.4, 2485],
        [47.43286, -121.62081, 688.7, 2554],
        [47.43218, -121.6194, 700.9, 2716],
        [47.43207, -121.61888, 697.5, 2790],
        [47.43214, -121.61906, 704.2, 2826],
        [47.43303, -121.62029, 717.5, 2988],
        [47.43321, -121.61995, 731.1, 3096],
        [47.43324, -121.61988, 734.3, 3115],
        [47.43312, -121.61969, 738.6, 3151],
        [47.43318, -121.61818, 746.2, 3301],
        [47.43359, -121.61679, 739.8, 3472],
        [47.43365, -121.61526, 744.9, 3631],
        [47.43408, -121.6148, 759.7, 3728],
        [47.43406, -121.61427, 764.2, 3776],
        [47.43378, -121.61331, 774.0, 3931],
        [47.4346, -121.61213, 781.3, 4088],
        [47.43505, -121.61175, 776.3, 4257],
        [47.43563, -121.61271, 777.1, 4382],
        [47.43485, -121.61137, 776.3, 4535],
        [47.43394, -121.61019, 777.8, 4697],
        [47.43373, -121.61017, 780.0, 4761],
        [47.43372, -121.61016, 779.6, 4764],
        [47.43372, -121.61019, 778.2, 4780],
        [47.43373, -121.61019, 778.1, 4782],
        [47.43374, -121.6102, 778.0, 4784],
        [47.43376, -121.6102, 777.9, 4786],
        [47.43413, -121.61039, 776.6, 4852],
        [47.43442, -121.6115, 779.8, 5036],
        [47.43398, -121.61307, 776.4, 5213],
        [47.43369, -121.61372, 766.1, 5319],
        [47.43394, -121.61477, 759.0, 5461],
        [47.43367, -121.61598, 738.2, 5629],
        [47.43376, -121.6175, 744.0, 5788],
        [47.43322, -121.6179, 746.9, 5873],
        [47.43301, -121.61961, 738.8, 6044],
        [47.43311, -121.62036, 719.2, 6171],
        [47.43256, -121.61938, 711.6, 6285],
        [47.43223, -121.62014, 695.4, 6441],
        [47.43298, -121.62125, 679.9, 6612],
        [47.43256, -121.62123, 661.5, 6768],
        [47.43248, -121.62223, 640.0, 6918],
        [47.43169, -121.62164, 624.8, 7053],
        [47.43183, -121.62265, 604.8, 7185],
        [47.43124, -121.62227, 584.9, 7284],
        [47.43116, -121.62266, 572.1, 7391],
        [47.43065, -121.62277, 549.5, 7538],
        [47.43074, -121.62339, 535.6, 7616],
        [47.43093, -121.62483, 520.3, 7765],
        [47.43134, -121.6263, 493.4, 7952],
        [47.43189, -121.62691, 474.8, 8119],
        [47.43225, -121.62751, 457.0, 8245],
        [47.43255, -121.62884, 432.8, 8415],
        [47.43277, -121.63052, 414.4, 8563],
        [47.43277, -121.63189, 407.3, 8719],
        [47.4316, -121.63139, 400.6, 8876],
        [47.4311, -121.63309, 403.3, 9034],
      ],
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
