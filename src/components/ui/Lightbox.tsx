"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/** Fullscreen lightbox for the gallery grid — click a thumbnail, browse with arrows/keyboard. */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const { t } = useLanguage();
  const open = index !== null;
  const current = open ? images[index] : null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 md:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label={t.gallery.lightbox.close}
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-2xl text-warm-white/80 transition-all duration-300 hover:scale-110 hover:text-soft-gold md:right-8 md:top-8"
          >
            ×
          </button>

          <button
            type="button"
            aria-label={t.gallery.lightbox.prev}
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-warm-white/70 transition-all duration-300 hover:scale-110 hover:text-soft-gold md:left-6"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label={t.gallery.lightbox.next}
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-warm-white/70 transition-all duration-300 hover:scale-110 hover:text-soft-gold md:right-6"
          >
            ›
          </button>

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </motion.div>

          <p className="absolute bottom-6 left-0 right-0 text-center text-[0.8rem] tracking-[0.08em] text-warm-white/60">
            {current.alt}
            <span className="ml-3 text-warm-white/35">
              {index !== null ? index + 1 : 0} / {images.length}
            </span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
