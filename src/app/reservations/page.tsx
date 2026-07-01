import type { Metadata } from "next";
import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Casa Jose Playa in Dar Bouazza, Casablanca. Call or message us on WhatsApp to secure golden hour on the beach.",
};

export default function ReservationsPage() {
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
          <p className="eyebrow mb-5 text-stone">Reservations</p>
          <h1 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Secure Your Table on the Sand
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            {siteConfig.reservations.note} For parties larger than eight, or
            private events, call ahead and we&rsquo;ll set the table
            ourselves.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-charcoal/15 px-6 py-5 transition-colors hover:border-soft-gold"
            >
              <span>
                <span className="block text-[0.7rem] tracking-[0.14em] uppercase text-stone">
                  WhatsApp
                </span>
                <span className="font-display text-lg text-charcoal">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </span>
              <span aria-hidden className="text-soft-gold">
                →
              </span>
            </a>

            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center justify-between border border-charcoal/15 px-6 py-5 transition-colors hover:border-soft-gold"
            >
              <span>
                <span className="block text-[0.7rem] tracking-[0.14em] uppercase text-stone">
                  Call Us
                </span>
                <span className="font-display text-lg text-charcoal">
                  {siteConfig.contact.phoneDisplay}
                </span>
              </span>
              <span aria-hidden className="text-soft-gold">
                →
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-between border border-charcoal/15 px-6 py-5 transition-colors hover:border-soft-gold"
            >
              <span>
                <span className="block text-[0.7rem] tracking-[0.14em] uppercase text-stone">
                  Email (TODO — confirm address)
                </span>
                <span className="font-display text-lg text-charcoal">
                  {siteConfig.contact.email}
                </span>
              </span>
              <span aria-hidden className="text-soft-gold">
                →
              </span>
            </a>
          </div>

          <div className="mt-10 border-t border-charcoal/10 pt-8 text-sm text-charcoal/60">
            <p className="text-[0.7rem] tracking-[0.14em] uppercase text-stone">
              Hours
            </p>
            <p className="mt-2">
              {siteConfig.hours.label} · {siteConfig.hours.range}
            </p>
            <p className="mt-6 text-[0.7rem] tracking-[0.14em] uppercase text-stone">
              Location
            </p>
            <p className="mt-2">{siteConfig.address.full}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
