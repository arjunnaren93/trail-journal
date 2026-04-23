"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "@/lib/hikes";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null || i === 0 ? photos.length - 1 : i - 1));
  }, [photos.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null || i === photos.length - 1 ? 0 : i + 1
    );
  }, [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group block w-full break-inside-avoid text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/80 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </div>
            {photo.caption && (
              <p className="text-[11px] text-muted mt-2 leading-snug px-0.5">
                {photo.caption}
              </p>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
            onClick={close}
          >
            {/* Counter */}
            <span className="absolute top-6 left-6 font-mono text-xs text-white/30 z-10">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </span>

            {/* Close */}
            <button
              className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors z-10"
              onClick={close}
            >
              Close ×
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                width={photos[lightboxIndex].width}
                height={photos[lightboxIndex].height}
                className="max-w-[88vw] max-h-[78vh] object-contain"
              />
              {photos[lightboxIndex].caption && (
                <p className="text-white/40 text-sm mt-4 text-center max-w-lg">
                  {photos[lightboxIndex].caption}
                </p>
              )}
            </motion.div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/10 hover:border-white/30 text-white/40 hover:text-white transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              ←
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/10 hover:border-white/30 text-white/40 hover:text-white transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
