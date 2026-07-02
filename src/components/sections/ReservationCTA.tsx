"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ReservationCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory px-6 py-24 text-center md:py-32">
      <Reveal className="mx-auto max-w-xl">
        <Eyebrow className="mb-6 justify-center text-stone">{t.home.reservationCta.eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
          {t.home.reservationCta.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70">
          {t.home.reservationCta.body(t.common.hoursLabel, siteConfig.hours.range)}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/reservations" variant="filled">
            {t.home.reservationCta.ctaPrimary}
          </Button>
          <Button href={siteConfig.contact.whatsappHref} external>
            {t.home.reservationCta.ctaSecondary}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
