"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;
const HEADLINE_WORDS = ["Casa", "Jose", "Playa"];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-deep-ocean">
      {/* Background photography — fades in once, then drifts with a slow, continuous zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <div className={`absolute inset-0 ${reduced ? "" : "hero-zoom"}`}>
          <Image
            src="/images/beach-club-vertical.jpg"
            alt="Straw parasols and lounge beds along the shoreline at Casa Jose Playa, with the turquoise Atlantic rolling in"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </motion.div>

      {/* Cinematic grade — bottom-weighted for legibility, softly vignetted at the edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-charcoal/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_40%,rgba(31,35,32,0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-6 pb-20 md:px-12 md:pb-28">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="gold-rule mb-5 h-px w-12 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="eyebrow mb-5 text-warm-white/85"
        >
          A Beachfront Table &middot; Dar Bouazza, Casablanca
        </motion.p>

        <h1 className="font-display max-w-3xl text-[3rem] leading-[1.05] text-warm-white sm:text-[4rem] md:text-[5.5rem]">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word} className="mr-4 inline-block overflow-hidden pb-1 align-bottom md:mr-6">
              <motion.span
                className="inline-block"
                initial={{ y: reduced ? 0 : "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.45 + i * 0.12, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
          className="font-display mt-6 max-w-md text-xl italic text-warm-white/95 md:text-2xl"
        >
          Where the sea slows time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          className="mt-4 max-w-md text-base leading-relaxed text-warm-white/75"
        >
          Fire-cooked paella, oysters cracked to order, and a table set where
          the Atlantic meets the sand — Mediterranean seafood, unhurried.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Button
            href="/reservations"
            variant="ghost"
            className="border-soft-gold bg-soft-gold text-charcoal hover:border-warm-white hover:bg-warm-white hover:text-charcoal"
          >
            Reserve a Table
          </Button>

          <Link
            href="/menu"
            className="underline-hover text-[0.8rem] tracking-[0.12em] uppercase text-warm-white/90 transition-colors duration-300 hover:text-soft-gold"
          >
            Explore the Menu
          </Link>
        </motion.div>
      </div>

      {/* Signature teaser — a small editorial detail, desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
        className="absolute right-8 bottom-28 z-10 hidden w-[210px] border border-warm-white/25 bg-charcoal/10 backdrop-blur-[2px] lg:block xl:right-12"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/fire-kitchen-sardines.jpg"
            alt="Grilled sardines fresh off the fire, served beachside at Casa Jose Playa"
            fill
            priority
            sizes="210px"
            className="object-cover"
          />
        </div>
        <p className="eyebrow px-4 py-3 text-warm-white/80">
          Fire-Kissed, Off the Grill
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.8, ease: EASE }}
          className="block h-4 w-px origin-top bg-warm-white/50"
        />
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block text-[0.7rem] tracking-[0.2em] text-warm-white/70 uppercase"
        >
          Discover
        </motion.span>
      </motion.div>
    </section>
  );
}
