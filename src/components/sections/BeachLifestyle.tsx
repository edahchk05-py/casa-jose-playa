"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function BeachLifestyle() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-deep-ocean">
      <Image
        src="/images/beach-cocktail.jpg"
        alt="A cocktail in hand overlooking the beach club at golden hour"
        fill
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
        <Reveal>
          <Eyebrow className="mb-6 text-warm-white/70">{t.home.beachLifestyle.eyebrow}</Eyebrow>
          <h2 className="font-display max-w-lg text-4xl leading-tight text-warm-white md:text-5xl">
            {t.home.beachLifestyle.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-warm-white/85">
            {t.home.beachLifestyle.body}
          </p>
          <Button
            href="/reservations"
            className="mt-10 border-warm-white/40 text-warm-white hover:border-soft-gold hover:text-soft-gold"
          >
            {t.home.beachLifestyle.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
