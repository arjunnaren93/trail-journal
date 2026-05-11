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
    slug: "lake-22",
    name: "Lake 22",
    tagline: "Old-growth forest, a hundred waterfalls, and a glacial lake worth every rocky step",
    date: "May 9, 2026",
    location: "Granite Falls, WA",
    region: "North Cascades",
    distanceKm: 11.49,
    elevationGainM: 468,
    maxElevationM: 741,
    durationMin: 319,
    difficulty: "Moderate",
    heroImage: "/photos/lake-22/IMG_9361.jpg",
    photos: [
      {
        src: "/photos/lake-22/IMG_9361.jpg",
        alt: "Lake 22 panorama with driftwood shoreline and snow-patched peaks",
        caption: "The lake opens up after 4.5 miles of forest. Logs scattered across the shallows, peaks still holding snow in early May.",
        width: 8064,
        height: 4536,
      },
      {
        src: "/photos/lake-22/IMG_7805.jpg",
        alt: "Group photo at the Lake Twenty-Two Trail No. 702 sign",
        caption: "Six of us at the trailhead. The sign says 2.7 miles. We were not mentally prepared.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/lake-22/IMG_9349.jpg",
        alt: "Lake Twenty-Two Trail No. 702 sign in old-growth forest",
        caption: "Trail 702. 2.7 miles to the lake.",
        width: 6048,
        height: 8064,
      },
      {
        src: "/photos/lake-22/IMG_9354.jpg",
        alt: "Wooden log steps climbing through old-growth forest with sun filtering through",
        caption: "Log staircases the whole way up. Wet, mossy, and never quite flat.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9355.jpg",
        alt: "Hikers climbing log steps through lush green forest",
        caption: "The crew making their way up. Those steps were steeper than they looked.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9357.jpg",
        alt: "Wooden footbridge through pine forest with two people at the far end",
        caption: "One of several bridges crossing the creek drainage.",
        width: 6048,
        height: 8064,
      },
      {
        src: "/photos/lake-22/IMG_9353.jpg",
        alt: "Mountain creek rushing over boulders through old-growth forest",
        caption: "Snowmelt running hard. The creek was loud the whole way up.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_2862.jpg",
        alt: "Stream cascading through tall old-growth forest",
        caption: "The forest up here is genuinely old. Big cedar, big Douglas fir, lots of fallen logs.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/lake-22/IMG_9379.jpg",
        alt: "Hiker with trekking poles on rocky descent with mountain views ahead",
        caption: "The upper section opens up just before you hit the lake. First real view of the sky in hours.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9370.jpg",
        alt: "White wildflowers at the edge of Lake 22 with snowy peaks behind",
        caption: "Spring wildflowers were just coming up along the shoreline. Timing was lucky.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9374.jpg",
        alt: "Lake 22 framed through dark pine trees with jagged rocky peaks above",
        caption: "First glimpse of the lake through the trees. That view stops you mid-step.",
        width: 6048,
        height: 8064,
      },
      {
        src: "/photos/lake-22/IMG_9377.jpg",
        alt: "Lake 22 shoreline with rocky beach, logs, and snowy peaks reflected in still water",
        caption: "The reflection on a calm day. Someone was already sitting on the left shore when we arrived.",
        width: 6048,
        height: 8064,
      },
      {
        src: "/photos/lake-22/IMG_7754.jpg",
        alt: "Hand holding a burrito in front of Lake 22 with snow-capped peaks behind",
        caption: "Lunch at 3,000 feet. The burrito tasted different up here.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/lake-22/IMG_9389.jpg",
        alt: "Arjun crouching on rocks at a forest waterfall",
        caption: "One of the smaller falls on the way back. Cold water, good light.",
        width: 4284,
        height: 5712,
      },
      {
        src: "/photos/lake-22/IMG_9391.jpg",
        alt: "Portrait of Arjun at rocky waterfall in old-growth forest",
        caption: "Pranoy was generous with his time behind the camera.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9399.jpg",
        alt: "Pranoy and Arjun at a forest waterfall",
        caption: "Pranoy took the best photos of the day. Here he is taking a selfie.",
        width: 2316,
        height: 3088,
      },
      {
        src: "/photos/lake-22/IMG_7727.jpg",
        alt: "Large bracket fungus on a red cedar trunk",
        caption: "Old cedar with a conk the size of a serving tray. The forest had character.",
        width: 1536,
        height: 2048,
      },
      {
        src: "/photos/lake-22/IMG_9402.jpg",
        alt: "Bright green clubmoss growing on the forest floor",
        caption: "Everything in that forest was aggressively green.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/photos/lake-22/IMG_9403.jpg",
        alt: "Carved tree stump face sculpture at a rural roadside property",
        caption: "Random roadside find on the drive out. Mountain town energy.",
        width: 6048,
        height: 8064,
      },
    ],
    story: [
      "Five hours of sleep and a 7am alarm is a combination best described as optimistic. I lay there staring at the ceiling, fully aware that five others were counting on me, and still could not move. Then Badri called. I could hear it in his voice — not anger, just quiet disappointment, which is somehow worse. Then Apoorva called and told me, very calmly, that she could no longer trust me with early morning hikes. That one landed. I was up in ten minutes.",
      "Coffee first. Always. We stopped at Café Hagen on 5th Ave in Lower Queen Anne, a Scandinavian-inspired spot that does serious coffee and even more serious pastries. I went with a black coffee and a ham and cheese croissant, and the guilt of almost bailing on five people pairs with both surprisingly well. Suitably caffeinated, we pointed the car north toward Granite Falls and the Mountain Loop Highway.",
      "Lake 22 sits in Mount Baker-Snoqualmie National Forest, about an hour and a half from Seattle. The trail winds through old-growth forest that smells like a rain cloud decided to stay permanently, with moss covering everything and waterfalls appearing every few hundred meters like the mountain just cannot help itself. Hundred Step Falls at 1.6 miles is the main event — glacial runoff from Mount Pilchuck dropping down the rock face in one long crash of white water. The parking lot was already full at 10:40am, which tells you everything about how popular this trail is on a Saturday.",
      "The first half is genuinely lovely. The second half is where the mountain gets honest with you — the trail exits the forest and climbs a rocky scree field, the kind that makes your ankles file a formal complaint. I had done this hike before and knew this part was coming. I looked over at Lavanya and saw the face of someone reconsidering life choices. I pointed at the mountains and told her to take it all in. It lightened her up. We also made a few stops for Ramya, who was filming content with the kind of commitment that suggested the trail was primarily a backdrop. Influencer life.",
      "The lake is worth every step. Tucked into a glacial basin with steep cliffs on three sides and waterfalls pouring down all of them, it is one of those places that makes you go quiet for a second before someone pulls out a Subway footlong. Grilled chicken, since you asked. Badri had jokes about the footlong. I will leave those where they belong. We sat there watching the water and eating chips and nobody wanted to leave.",
      "The descent was fast. Lavanya slipped on the way down, lost a nail, and earned a story she will be telling for years. Pranoy and I hopped off the trail to reach the base of a waterfall and attempted approximately eight seconds of meditation before our friends, from the trail above, started throwing stones in what I can only describe as targeted discouragement. End of yogic career. We made it back to the car in good time, drove home, and that was that.",
    ],
    gear: [
      {
        category: "Layers",
        items: ["Under Armour long sleeve", "Hiking pants", "Cap"],
      },
      {
        category: "Footwear",
        items: ["Hiking boots", "Hiking socks"],
      },
      {
        category: "Hydration",
        items: ["2L water"],
      },
      {
        category: "Nutrition",
        items: ["Chips", "Protein bar", "Subway footlong (grilled chicken)"],
      },
      {
        category: "Navigation",
        items: ["AllTrails offline map", "Strava"],
      },
      {
        category: "Safety & Extras",
        items: ["Sunscreen"],
      },
    ],
    route: {
      startCoords: [48.07722, -121.74920],
      endCoords: [48.07722, -121.74921],
      waypoints: [
        [48.07722, -121.74920],
        [48.07673, -121.74882],
        [48.07873, -121.75356],
        [48.07812, -121.75561],
        [48.07727, -121.75726],
        [48.07601, -121.75984],
        [48.07611, -121.76165],
        [48.07486, -121.76148],
        [48.07522, -121.76372],
        [48.07382, -121.76356],
        [48.07322, -121.76412],
        [48.07110, -121.76239],
        [48.07001, -121.76294],
        [48.06696, -121.76235],
        [48.06486, -121.76189],
        [48.06489, -121.76188],
        [48.06488, -121.76187],
        [48.06492, -121.76173],
        [48.06703, -121.76258],
        [48.07090, -121.76324],
        [48.07241, -121.76367],
        [48.07488, -121.76387],
        [48.07434, -121.76170],
        [48.07629, -121.76252],
        [48.07574, -121.76007],
        [48.07577, -121.76019],
        [48.07747, -121.75708],
        [48.07881, -121.75383],
        [48.07737, -121.74986],
        [48.07685, -121.74586],
        [48.07721, -121.74901],
      ],
      isLoop: false,
      elevationProfile: [
        [48.07722, -121.7492, 328.8, 0],
        [48.07703, -121.74613, 337.1, 329],
        [48.07673, -121.74704, 336.1, 551],
        [48.07693, -121.74959, 344.0, 793],
        [48.07775, -121.75118, 355.7, 1014],
        [48.07879, -121.75268, 364.3, 1223],
        [48.07871, -121.75449, 376.1, 1415],
        [48.07847, -121.75584, 392.4, 1589],
        [48.07811, -121.75559, 404.8, 1703],
        [48.0779, -121.75693, 423.8, 1927],
        [48.0777, -121.75691, 427.8, 1966],
        [48.07709, -121.75755, 443.1, 2118],
        [48.07662, -121.75834, 454.7, 2245],
        [48.0759, -121.75975, 476.5, 2449],
        [48.0761, -121.76034, 495.0, 2605],
        [48.07569, -121.76051, 510.0, 2735],
        [48.07608, -121.76161, 518.3, 2926],
        [48.07602, -121.76252, 532.7, 3120],
        [48.07542, -121.76202, 544.0, 3257],
        [48.07432, -121.76149, 561.3, 3459],
        [48.07462, -121.76254, 575.6, 3707],
        [48.07481, -121.76326, 583.3, 3806],
        [48.07535, -121.76388, 597.2, 3933],
        [48.07454, -121.76381, 611.4, 4055],
        [48.07382, -121.76356, 625.6, 4179],
        [48.07284, -121.76336, 645.2, 4328],
        [48.07288, -121.76365, 661.5, 4449],
        [48.07276, -121.76388, 679.9, 4684],
        [48.07206, -121.7634, 691.5, 4839],
        [48.07109, -121.76208, 706.7, 5092],
        [48.07108, -121.76319, 713.8, 5245],
        [48.07058, -121.76272, 725.2, 5439],
        [48.07012, -121.76291, 729.9, 5557],
        [48.06863, -121.76206, 737.8, 5782],
        [48.06744, -121.76241, 739.0, 5980],
        [48.06658, -121.76208, 737.8, 6157],
        [48.06557, -121.76191, 738.5, 6349],
        [48.06489, -121.76187, 739.8, 6498],
        [48.06488, -121.76188, 739.9, 6524],
        [48.06489, -121.76186, 740.2, 6563],
        [48.06489, -121.76188, 740.4, 6584],
        [48.06491, -121.76186, 740.9, 6633],
        [48.06489, -121.76185, 740.2, 6704],
        [48.06488, -121.76186, 740.0, 6728],
        [48.06488, -121.76184, 739.9, 6731],
        [48.06489, -121.76181, 739.9, 6733],
        [48.06539, -121.7618, 738.7, 6850],
        [48.06664, -121.76213, 737.8, 7053],
        [48.0669, -121.76244, 739.4, 7114],
        [48.06847, -121.76196, 739.9, 7368],
        [48.07003, -121.7629, 729.8, 7679],
        [48.07108, -121.76326, 718.1, 7943],
        [48.07105, -121.76219, 706.9, 8162],
        [48.07185, -121.76326, 692.0, 8425],
        [48.07337, -121.76417, 671.1, 8723],
        [48.07314, -121.76353, 647.2, 8966],
        [48.07491, -121.76399, 617.9, 9214],
        [48.07539, -121.76377, 597.9, 9403],
        [48.07458, -121.76242, 579.8, 9595],
        [48.07397, -121.76154, 566.3, 9822],
        [48.07505, -121.76151, 552.0, 10031],
        [48.07587, -121.76237, 539.7, 10229],
        [48.07624, -121.76226, 530.8, 10388],
        [48.07572, -121.76104, 519.3, 10588],
        [48.07575, -121.76016, 516.1, 10802],
        [48.07563, -121.76011, 502.6, 11010],
        [48.07559, -121.7601, 483.5, 11219],
        [48.0759, -121.76, 468.8, 11422],
        [48.07634, -121.75864, 449.5, 11674],
        [48.07707, -121.75757, 438.4, 11888],
        [48.07818, -121.75659, 417.9, 12156],
        [48.07834, -121.75551, 400.3, 12406],
        [48.07872, -121.75408, 380.5, 12664],
        [48.07878, -121.75251, 366.3, 12898],
        [48.07815, -121.75117, 357.2, 13099],
        [48.07725, -121.74968, 352.6, 13331],
        [48.07683, -121.7468, 337.6, 13629],
        [48.07672, -121.74588, 335.7, 13799],
        [48.07684, -121.74587, 337.6, 13889],
        [48.0771, -121.74603, 338.0, 14034],
        [48.07724, -121.7485, 329.0, 14340],
      ],
    },
    weather: "Mostly sunny, 16°C",
    weatherSnapshot: {
      tempC: 16,
      tempF: 61,
      condition: "Mainly Clear",
      icon: "🌤️",
    },
    tags: ["Lake 22", "North Cascades", "Alpine Lake", "Waterfalls", "Mountain Loop", "Group Hike"],
    hikers: [
      { name: "Arjun", instagram: "arjun_naren", avatar: "/avatars/arjun.jpg" },
      { name: "Badri", instagram: "badri9189", avatar: "/avatars/badri.jpg" },
      { name: "Ramya", instagram: "ramyayadav_01", avatar: "/avatars/ramya.jpg" },
      { name: "Pranoy", instagram: "thelikewordsuperhero", avatar: "/avatars/pranoy.jpg" },
      { name: "Apoorva", instagram: "apoorvadorai", avatar: "/avatars/apoorva.jpg" },
      { name: "Lavanya", instagram: "anya_kolh", avatar: "/avatars/lavanya.jpg" },
    ],
  },
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
