"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
        !isHome ? "bg-ink/90 backdrop-blur-sm border-b border-border" : ""
      }`}
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
        <span className="text-xs tracking-[0.2em] uppercase text-muted/40">
          2024
        </span>
      </div>
    </nav>
  );
}
