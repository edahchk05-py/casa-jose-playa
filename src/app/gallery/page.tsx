import type { Metadata } from "next";
import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of Casa Jose Playa — the beach, the fire, the catch, and the table, in Dar Bouazza, Casablanca.",
};

const images = [
  { src: "/images/hero-paella-table.jpg", alt: "Paella pan served at a white table with wine glasses", tall: true },
  { src: "/images/beach-club-vertical.jpg", alt: "Beach club table facing the turquoise Atlantic" },
  { src: "/images/spread-navy-table-1.jpg", alt: "A full spread of grilled seafood and croquettes on navy linen" },
  { src: "/images/from-the-sea-chef.jpg", alt: "A chef preparing fresh oysters and fish on ice", tall: true },
  { src: "/images/fire-kitchen-chef.jpg", alt: "Chef cooking paella over an open wood fire" },
  { src: "/images/fresh-oysters-driftwood.jpg", alt: "Oysters and white wine on weathered driftwood" },
  { src: "/images/dish-grilled-platter.jpg", alt: "Grilled fish and calamari platter", tall: true },
  { src: "/images/beach-umbrellas-wide.jpg", alt: "Rows of straw umbrellas and loungers on the beach" },
  { src: "/images/dish-shrimp-hand.jpg", alt: "A guest lifting a spoonful of garlic shrimp on the beach" },
  { src: "/images/spread-navy-table-2.jpg", alt: "Grilled fish, paella, and seafood salad on navy linen" },
  { src: "/images/beach-ambiance-palms.jpg", alt: "A shaded table beneath a palm-lined umbrella", tall: true },
  { src: "/images/dish-octopus.jpg", alt: "Grilled octopus with charred chili in a clay dish" },
  { src: "/images/fresh-oysters-wine.jpg", alt: "Fresh oysters on ice with chilled white wine" },
  { src: "/images/spread-onto-table.jpg", alt: "Overhead spread of tapas and paella" },
  { src: "/images/beach-cocktail.jpg", alt: "A cocktail in hand overlooking the beach club", tall: true },
  { src: "/images/dish-shrimp-tapas.jpg", alt: "Garlic prawn tapas beside a glass of white wine" },
  { src: "/images/fire-kitchen-sardines.jpg", alt: "Grilled sardines held on a plate with beach umbrellas behind" },
  { src: "/images/dish-paella-caption.jpg", alt: "Overhead view of paella fruits de mer" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-32 pb-10 md:px-12 md:pt-40 md:pb-16">
        <Reveal>
          <p className="eyebrow mb-5 text-stone">The Gallery</p>
          <h1 className="font-display max-w-xl text-4xl leading-tight text-charcoal md:text-6xl">
            Sea, Fire, and the Table Between Them
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-12">
        <div className="columns-2 gap-3 md:columns-3 md:gap-4">
          {images.map((img, i) => (
            <ImageReveal
              key={img.src + i}
              delay={(i % 6) * 0.05}
              className={`relative mb-3 w-full overflow-hidden md:mb-4 ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </ImageReveal>
          ))}
        </div>
      </section>
    </>
  );
}
