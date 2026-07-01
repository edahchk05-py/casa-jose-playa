"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-deep-ocean">
      <motion.div
        className="absolute inset-0"
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <Image
          src="/images/hero-paella-table.jpg"
          alt="A paella pan of fresh seafood served at a beachfront table at Casa Jose Playa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-charcoal/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-6 pb-20 md:px-12 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="eyebrow mb-5 text-warm-white/85"
        >
          Dar Bouazza · Casablanca
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          className="font-display max-w-2xl text-[3rem] leading-[1.05] text-warm-white sm:text-[4rem] md:text-[5.5rem]"
        >
          Casa Jose Playa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-6 max-w-md text-lg text-warm-white/90"
        >
          Where the sea slows time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10"
        >
          <Button href="/reservations" variant="ghost" className="border-warm-white/40 text-warm-white hover:border-soft-gold hover:text-soft-gold">
            Reserve a Table
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.7rem] tracking-[0.2em] uppercase text-warm-white/70"
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          Discover
        </motion.span>
      </motion.div>
    </section>
  );
}
