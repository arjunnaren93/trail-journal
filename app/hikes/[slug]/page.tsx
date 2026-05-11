import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HIKES, getHike } from "@/lib/hikes";
import Navbar from "@/components/Navbar";
import StatsBar from "@/components/StatsBar";
import PhotoGallery from "@/components/PhotoGallery";
import RouteSection from "@/components/RouteSection";

export function generateStaticParams() {
  return HIKES.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hike = getHike(slug);
  if (!hike) return {};
  return {
    title: `${hike.name} — Trail Journal`,
    description: hike.tagline,
  };
}

export default async function HikePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hike = getHike(slug);
  if (!hike) notFound();

  const otherHikes = HIKES.filter((h) => h.slug !== hike.slug).slice(0, 2);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: "90vh" }}>
        <Image
          src={hike.heroImage}
          alt={hike.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />

        <Link
          href="/"
          className="absolute top-20 left-6 md:left-12 flex items-center gap-2 text-xs text-cream/50 hover:text-cream tracking-[0.2em] uppercase transition-colors duration-200 z-10"
        >
          ← All Hikes
        </Link>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-xs text-gold tracking-[0.35em] uppercase">
                {hike.date} · {hike.region}
              </p>
              {hike.upcoming && (
                <span className="text-[10px] tracking-[0.2em] uppercase bg-gold text-ink px-2.5 py-1 font-medium">
                  Upcoming
                </span>
              )}
            </div>
            <h1
              className="font-display text-cream leading-none tracking-tight mb-4"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
            >
              {hike.name}
            </h1>
            <p className="text-cream/50 text-lg max-w-lg">{hike.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <StatsBar hike={hike} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Story ── full-width editorial */}
        <div className="py-16 md:py-20 border-b border-border">
          <p className="text-xs text-gold tracking-[0.35em] uppercase mb-8">
            The Story
          </p>
          <div className="space-y-6">
            {hike.story.map((para, i) => (
              <p
                key={i}
                className={`leading-[1.9] text-cream/75 ${
                  i === 0 ? "drop-cap text-[1.05rem]" : "text-[0.9375rem]"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {hike.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted/60 hover:text-gold transition-colors duration-200 cursor-default">
                #{tag.toLowerCase().replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </div>

        {/* ── Hikers ── */}
        {hike.hikers && hike.hikers.length > 0 && (
          <div className="py-10 border-b border-border">
            <p className="text-[10px] text-muted tracking-[0.35em] uppercase mb-6">
              On This Hike
            </p>
            <div className="flex flex-wrap gap-6">
              {hike.hikers.map((hiker) => (
                <a
                  key={hiker.instagram}
                  href={`https://instagram.com/${hiker.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-gold transition-colors duration-300">
                    <img
                      src={hiker.avatar}
                      alt={hiker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] text-muted tracking-[0.1em] group-hover:text-gold transition-colors duration-300">
                    @{hiker.instagram}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Gear — compact horizontal grid ── */}
        <div className="py-14 border-b border-border">
          <p className="text-xs text-gold tracking-[0.35em] uppercase mb-8">
            What I Packed
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-border">
            {hike.gear.map((cat, i) => (
              <div
                key={cat.category}
                className={`p-5 ${
                  i < hike.gear.length - 1
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                } ${
                  i === 1 ? "md:border-b lg:border-b-0" : ""
                } ${
                  i === 2 || i === 3 ? "lg:border-b-0" : ""
                }`}
              >
                <p className="text-[10px] text-gold tracking-[0.2em] uppercase mb-3">
                  {cat.category}
                </p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-cream/55 leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Photos ── appear high up now */}
        <div className="py-14 border-b border-border">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="text-xs text-muted tracking-[0.35em] uppercase mb-2">
                {hike.photos.length} Photos
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-cream">
                From the Trail
              </h2>
            </div>
          </div>
          <PhotoGallery photos={hike.photos} />
        </div>

        {/* ── Route map ── */}
        <div className="py-14 border-b border-border">
          <p className="text-xs text-muted tracking-[0.35em] uppercase mb-2">
            Route
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
            The Route
          </h2>
          <RouteSection
            route={hike.route}
            distanceMi={parseFloat((hike.distanceKm * 0.621371).toFixed(1))}
            gainFt={Math.round(hike.elevationGainM * 3.28084)}
          />
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-forest" />
              <span className="text-xs text-muted">Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold" />
              <span className="text-xs text-muted">
                {hike.route.isLoop ? "End (loop)" : "Summit / End"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-xs text-muted">Trail</span>
            </div>
          </div>
        </div>

        {/* ── More hikes ── */}
        {otherHikes.length > 0 && (
          <div className="py-14">
            <p className="text-xs text-muted tracking-[0.35em] uppercase mb-8">
              More Hikes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherHikes.map((h) => (
                <Link
                  key={h.slug}
                  href={`/hikes/${h.slug}`}
                  className="group flex items-center gap-5 border border-border p-4 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="relative w-20 h-14 shrink-0 overflow-hidden">
                    <Image
                      src={h.heroImage}
                      alt={h.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted tracking-widest uppercase mb-1">
                      {h.date}
                    </p>
                    <p className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300">
                      {h.name}
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      {h.distanceKm} km · +{h.elevationGainM} m
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-border py-10 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xs text-muted tracking-widest uppercase hover:text-cream transition-colors duration-200"
        >
          ← Trail Journal
        </Link>
        <p className="text-xs text-muted">{hike.location}</p>
      </footer>
    </>
  );
}
