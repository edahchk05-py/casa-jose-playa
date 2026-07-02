"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Wraps the homepage sections and drives a whole-page color grade — via the
 * `--tod` (time-of-day) CSS variable — that warms almost imperceptibly as
 * the visitor scrolls from the bright hero down toward the reservation
 * call-to-action, as if an afternoon at Casa Jose Playa were quietly
 * turning into golden hour.
 *
 * The grade itself lives entirely in two fixed, pointer-events-none overlay
 * layers styled with the site's existing gold/charcoal tokens. Progress is
 * written to a single CSS custom property on scroll (opacity-only, no
 * layout, no React re-renders), so it stays smooth and cheap. Users who
 * prefer reduced motion get a gentle static warmth instead of a
 * scroll-linked change.
 */
export function TimeOfDayGrade({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;

    if (reduced) {
      root.style.setProperty("--tod", "0.2");
      return () => {
        root.style.removeProperty("--tod");
      };
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - viewportHeight;

      const raw = scrollableDistance > 0 ? -rect.top / scrollableDistance : 0;
      const progress = Math.min(1, Math.max(0, raw));

      // Ease so the shift stays unnoticeable early and builds through the
      // back half of the page, landing near the reservation section.
      const eased = Math.pow(progress, 1.6);

      root.style.setProperty("--tod", eased.toFixed(4));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.style.removeProperty("--tod");
    };
  }, [reduced]);

  return (
    <div ref={containerRef}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30 bg-gradient-to-t from-[var(--soft-gold)] via-[var(--soft-gold)]/40 to-transparent mix-blend-soft-light"
        style={{ opacity: "calc(var(--tod, 0) * 0.35)", willChange: "opacity" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,var(--charcoal)_100%)] mix-blend-multiply"
        style={{ opacity: "calc(var(--tod, 0) * 0.3)", willChange: "opacity" }}
      />
      {children}
    </div>
  );
}
