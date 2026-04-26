"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!isHome) { setBgOpacity(1); return; }
      const start = window.innerHeight * 0.7;
      const end = window.innerHeight * 1.0;
      const ratio = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
      setBgOpacity(ratio);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-sm"
      style={{
        background: `rgba(8, 8, 8, ${bgOpacity * 0.9})`,
        borderBottom: `1px solid rgba(255,255,255,${bgOpacity * 0.08})`,
      }}
    >
      <Link
        href="/"
        className="font-display text-sm tracking-[0.25em] uppercase text-cream/70 hover:text-gold transition-colors duration-300"
      >
        Trail Journal
      </Link>
      <div className="flex items-center gap-8">
        <Link
          href="/#hikes"
          className="text-xs tracking-[0.2em] uppercase text-muted hover:text-cream transition-colors duration-300"
        >
          Hikes
        </Link>
        <a
          href="https://arjunnarendran.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors duration-300"
        >
          Portfolio ↗
        </a>
      </div>
    </nav>
  );
}
