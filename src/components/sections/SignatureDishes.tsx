"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const dishes = [
  {
    src: "/images/dish-paella-overhead.jpg",
    alt: "Paella pan brimming with shrimp, clams, and mussels",
    title: "Paella Fruits de Mer",
    desc: "Bomba rice, saffron, whatever the boats brought in this morning.",
  },
  {
    src: "/images/dish-grilled-platter.jpg",
    alt: "Grilled red mullet, calamari, and prawns on a shared platter",
    title: "The Grilled Platter",
    desc: "Red mullet, calamari, prawns — charcoal-kissed, lime-bright.",
  },
  {
    src: "/images/fresh-oysters-wine.jpg",
    alt: "Fresh oysters on ice with a glass of chilled white wine",
    title: "Oysters, Chilled White",
    desc: "Shucked to order. Best with the house Atlantic white.",
  },
  {
    src: "/images/dish-octopus.jpg",
    alt: "Grilled octopus with charred chili in a clay dish",
    title: "Poulpe à la Braise",
    desc: "Slow-braised then licked by fire. Smoky, tender, unhurried.",
  },
  {
    src: "/images/dish-shrimp-tapas.jpg",
    alt: "Grilled prawns and garlic shrimp tapas on the table",
    title: "Crevettes à l'Ail",
    desc: "Garlic, brandy, a flambé at the table. Ask for it tableside.",
  },
];

export function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section className="bg-charcoal py-20 md:py-0">
      <div className="mx-auto max-w-[1440px] px-6 pt-0 md:hidden">
        <p className="eyebrow mb-8 text-warm-white/60">IV — Signature Dishes</p>
        <h2 className="font-display text-3xl text-warm-white">
          What Leaves the Fire
        </h2>
      </div>

      <div
        ref={sectionRef}
        className="relative h-auto overflow-hidden md:h-screen md:overflow-hidden"
      >
        <div className="hidden h-full flex-col justify-center px-12 md:absolute md:left-12 md:top-1/2 md:z-10 md:flex md:-translate-y-1/2">
          <Reveal>
            <p className="eyebrow mb-6 text-warm-white/60">IV — Signature Dishes</p>
            <h2 className="font-display max-w-xs text-4xl leading-tight text-warm-white">
              What Leaves the Fire
            </h2>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory md:h-full md:items-center md:overflow-x-visible md:pl-[28rem] md:pr-24 md:snap-none"
        >
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="group w-[78vw] shrink-0 snap-start md:w-[26rem]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  sizes="(min-width: 768px) 26rem, 78vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-5 text-xl text-warm-white">
                {dish.title}
              </h3>
              <p className="mt-2 text-sm text-warm-white/60">{dish.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
