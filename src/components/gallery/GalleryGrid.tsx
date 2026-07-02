"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageReveal } from "@/components/ui/Reveal";
import { Lightbox, type LightboxImage } from "@/components/ui/Lightbox";

type GalleryImage = LightboxImage & { tall?: boolean };

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-4">
        {images.map((img, i) => (
          <ImageReveal
            key={img.src + i}
            delay={(i % 6) * 0.05}
            className={`relative mb-3 w-full overflow-hidden md:mb-4 ${
              img.tall ? "aspect-[3/4]" : "aspect-square"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${img.alt} in full screen`}
              className="group absolute inset-0 h-full w-full cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/5" />
            </button>
          </ImageReveal>
        ))}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
