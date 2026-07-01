import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

const tiles = [
  { src: "/images/spread-navy-table-1.jpg", alt: "A full spread of grilled seafood and croquettes on a navy tablecloth", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/beach-club-vertical.jpg", alt: "Beach club dining table facing the turquoise Atlantic", span: "" },
  { src: "/images/fresh-oysters-driftwood.jpg", alt: "Oysters and white wine served on weathered driftwood", span: "" },
  { src: "/images/dish-shrimp-hand.jpg", alt: "A guest lifting a spoonful of garlic shrimp on the beach", span: "" },
  { src: "/images/beach-ambiance-palms.jpg", alt: "A shaded table beneath a palm-lined umbrella at Casa Jose Playa", span: "" },
];

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow mb-4 text-stone">V — The Gallery</p>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
            A Table Worth Photographing
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/gallery"
            className="underline-hover text-[0.8rem] tracking-[0.12em] uppercase text-soft-gold"
          >
            View Full Gallery →
          </Link>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {tiles.map((tile, i) => (
          <ImageReveal
            key={tile.src}
            delay={i * 0.06}
            className={`relative aspect-square overflow-hidden ${tile.span}`}
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
