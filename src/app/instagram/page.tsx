import type { Metadata } from "next";
import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Instagram",
  description: `Follow ${siteConfig.social.instagramHandle} for the daily catch, golden hour, and beach club moments from Casa Jose Playa.`,
};

const posts = [
  "/images/spread-onto-table.jpg",
  "/images/dish-paella-caption.jpg",
  "/images/beach-umbrellas-wide.jpg",
  "/images/spread-navy-table-2.jpg",
  "/images/hero-beach-umbrellas.jpg",
  "/images/dish-shrimp-tapas.jpg",
  "/images/beach-cocktail.jpg",
  "/images/fresh-oysters-driftwood.jpg",
  "/images/dish-shrimp-hand.jpg",
  "/images/from-the-sea-raw-platter.jpg",
  "/images/fire-kitchen-sardines.jpg",
  "/images/beach-ambiance-palms.jpg",
];

export default function InstagramPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-32 pb-24 md:px-12 md:pt-40">
      <Reveal className="mb-14 text-center">
        <p className="eyebrow mb-5 text-stone">Follow Along</p>
        <h1 className="font-display text-4xl text-charcoal md:text-6xl">
          Casa Jose Playa
        </h1>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover mt-4 inline-block text-lg text-med-blue"
        >
          {siteConfig.social.instagramHandle}
        </a>
      </Reveal>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {posts.map((src, i) => (
          <ImageReveal
            key={src}
            delay={(i % 4) * 0.05}
            className="relative aspect-square overflow-hidden"
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full w-full"
            >
              <Image
                src={src}
                alt="Casa Jose Playa on Instagram"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/30 group-hover:opacity-100">
                <span className="text-2xl text-warm-white">♥</span>
              </div>
            </a>
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
