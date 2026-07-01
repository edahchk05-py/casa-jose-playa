import type { Metadata } from "next";
import Image from "next/image";
import { ImageReveal, Reveal, RevealStagger, RevealStaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Casa Jose Playa — a beachfront kitchen in Dar Bouazza built on fire-cooked paella, fresh oysters, and unhurried Mediterranean living.",
};

const values = [
  {
    title: "The Catch Decides",
    body: "We don't write the menu around a concept. We write it around what the boats bring in that morning.",
  },
  {
    title: "Fire, Not Shortcuts",
    body: "Every paella is cooked over open flame in cast iron worn smooth by years of service — the slow way, on purpose.",
  },
  {
    title: "The Sand Is Part of the Room",
    body: "Our dining room has no walls to speak of. The Atlantic is the backdrop, and golden hour is on the menu.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-deep-ocean">
        <Image
          src="/images/beach-ambiance-palms.jpg"
          alt="A shaded table beneath a palm-lined umbrella at Casa Jose Playa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-charcoal/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-12">
          <Reveal>
            <p className="eyebrow mb-5 text-warm-white/80">Our Story</p>
            <h1 className="font-display max-w-2xl text-4xl leading-tight text-warm-white md:text-6xl">
              A House Built Around the Tide
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-charcoal md:text-3xl">
              Casa Jose Playa began with a simple idea: the best seafood
              restaurant in Casablanca shouldn&rsquo;t feel like a restaurant
              at all. It should feel like the best afternoon you had in
              Spain, rebuilt on a Moroccan beach.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
              In Dar Bouazza, just past the last roundabout before the coast
              road opens up, our kitchen runs on the same rhythm as the tide.
              Oysters arrive by morning. The wood-fire paella pans go on
              before noon. And by the time the light turns gold over the
              Atlantic, the whole beach club smells like garlic, citrus, and
              charcoal.
            </p>
            <p className="mt-6 text-base leading-relaxed text-charcoal/75 md:text-lg">
              We serve Mediterranean classics with a Spanish accent — paella,
              pil-pil, grilled catch of the day — alongside the kind of
              beach-club hospitality that makes people cancel their evening
              plans and stay for sunset instead.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 md:h-[640px]">
        <ImageReveal className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <Image
            src="/images/from-the-sea-chef.jpg"
            alt="A chef selecting fresh oysters and fish on ice"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </ImageReveal>
        <ImageReveal delay={0.1} className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <Image
            src="/images/fire-kitchen-sardines.jpg"
            alt="Grilled sardines held on a plate with the beach umbrellas behind"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </ImageReveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <Reveal className="mb-12 max-w-lg">
          <p className="eyebrow mb-4 text-stone">What We Believe</p>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
            Three Rules We Never Break
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {values.map((value, i) => (
            <RevealStaggerItem key={value.title}>
              <span className="font-display text-sm text-soft-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-2xl text-charcoal">
                {value.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/70">
                {value.body}
              </p>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-deep-ocean px-6 py-20 text-center text-warm-white md:py-28">
        <Reveal className="mx-auto max-w-lg">
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            Come Taste the Difference Fire Makes
          </h2>
          <div className="mt-9">
            <Button
              href="/reservations"
              className="border-warm-white/40 text-warm-white hover:border-soft-gold hover:text-soft-gold"
            >
              Reserve a Table
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
