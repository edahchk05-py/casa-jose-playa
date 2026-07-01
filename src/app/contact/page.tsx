import type { Metadata } from "next";
import Image from "next/image";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Casa Jose Playa on Rue de Tamaris, Dar Bouazza, Casablanca. Get directions, hours, and contact details.",
};

export default function ContactPage() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.full
  )}&output=embed`;

  return (
    <>
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden bg-deep-ocean">
        <Image
          src="/images/beach-hours.jpg"
          alt="Casa Jose Playa entrance with fresh fish on ice"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-charcoal/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-12">
          <Reveal>
            <p className="eyebrow mb-5 text-warm-white/80">Contact</p>
            <h1 className="font-display max-w-lg text-4xl leading-tight text-warm-white md:text-6xl">
              Find Us on the Coast Road
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-10">
            <div>
              <p className="eyebrow mb-3 text-stone">Address</p>
              <p className="font-display text-2xl text-charcoal">
                {siteConfig.address.street}
              </p>
              <p className="mt-1 text-charcoal/70">
                {siteConfig.address.area}, {siteConfig.address.city}
              </p>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover mt-3 inline-block text-[0.8rem] tracking-[0.1em] uppercase text-soft-gold"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3 text-stone">Phone &amp; WhatsApp</p>
              <a
                href={siteConfig.contact.phoneHref}
                className="font-display underline-hover text-2xl text-charcoal"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3 text-stone">Hours</p>
              <p className="font-display text-2xl text-charcoal">
                {siteConfig.hours.label}
              </p>
              <p className="mt-1 text-charcoal/70">{siteConfig.hours.range}</p>
            </div>

            <div>
              <p className="eyebrow mb-3 text-stone">Follow</p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display underline-hover text-2xl text-charcoal"
              >
                {siteConfig.social.instagramHandle}
              </a>
            </div>
          </div>
        </Reveal>

        <ImageReveal delay={0.1} className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto">
          <iframe
            title="Map to Casa Jose Playa"
            src={mapEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ImageReveal>
      </section>
    </>
  );
}
