"use client";

import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ReservationsContent() {
  const { t } = useLanguage();
  const { hero, whatsapp, call, hoursLabel, locationLabel } = t.reservations;

  return (
    <section className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
      <ImageReveal className="relative h-[45vh] md:h-full">
        <Image
          src="/images/beach-club-vertical.jpg"
          alt="A dining table set for two overlooking the beach club and the turquoise Atlantic"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </ImageReveal>

      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-0">
        <Reveal className="mx-auto w-full max-w-md">
          <Eyebrow className="mb-5 text-stone">{hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            {t.common.reservationsNote} {hero.notePrivate}
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-charcoal/15 px-6 py-5 transition-all duration-300 hover:border-soft-gold hover:shadow-[0_4px_20px_-8px_rgba(184,155,94,0.35)]"
            >
              <span>
                <span className="block text-[0.7rem] tracking-[0.14em] uppercase text-stone">
                  {whatsapp.label}
                </span>
                <span className="font-display text-lg text-charcoal">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </span>
              <span
                aria-hidden
                className="text-soft-gold transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            <a
              href={siteConfig.contact.phoneHref}
              className="group flex items-center justify-between border border-charcoal/15 px-6 py-5 transition-all duration-300 hover:border-soft-gold hover:shadow-[0_4px_20px_-8px_rgba(184,155,94,0.35)]"
            >
              <span>
                <span className="block text-[0.7rem] tracking-[0.14em] uppercase text-stone">
                  {call.label}
                </span>
                <span className="font-display text-lg text-charcoal">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </span>
              <span
                aria-hidden
                className="text-soft-gold transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="mt-10 border-t border-charcoal/10 pt-8 text-sm text-charcoal/60">
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-stone">{hoursLabel}</p>
            <p className="mt-2">
              {t.common.hoursLabel} · {siteConfig.hours.range}
            </p>
            <p className="mt-6 text-[0.7rem] tracking-[0.14em] uppercase text-stone">
              {locationLabel}
            </p>
            <p className="mt-2">{siteConfig.address.full}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
