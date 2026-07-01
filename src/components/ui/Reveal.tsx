"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const EASE_CINEMATIC = [0.22, 1, 0.36, 1] as const;
const EASE_EDITORIAL = [0.65, 0, 0.35, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span";
};

/** Fades and lifts content into view on scroll. The default building block for editorial reveals. */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  y = 28,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = useMemo(
    () =>
      reduced
        ? {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4 } },
          }
        : {
            hidden: { opacity: 0, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, delay, ease: EASE_CINEMATIC },
            },
          },
    [reduced, y, duration, delay]
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Clip-path image reveal — the signature "editorial spread" entrance. */
export function ImageReveal({
  children,
  className,
  delay = 0,
  duration = 1.1,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = useMemo(
    () =>
      reduced
        ? {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4 } },
          }
        : {
            hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
            visible: {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              transition: { duration, delay, ease: EASE_EDITORIAL },
            },
          },
    [reduced, duration, delay]
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children (words/lines/cards) on scroll entrance. */
export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();

  const variants: Variants = useMemo(
    () =>
      reduced
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0, y },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: EASE_CINEMATIC },
            },
          },
    [reduced, y]
  );

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
