import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function ReservationCTA() {
  return (
    <section className="bg-ivory px-6 py-24 text-center md:py-32">
      <Reveal className="mx-auto max-w-xl">
        <p className="eyebrow mb-6 text-stone">Reservations</p>
        <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
          The Table Is Set. Join Us.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70">
          {siteConfig.hours.label}, {siteConfig.hours.range}. Walk-ins are
          welcome, but golden hour fills quickly — a call or message secures
          your spot on the sand.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/reservations" variant="filled">
            Reserve a Table
          </Button>
          <Button href={siteConfig.contact.whatsappHref} external>
            WhatsApp Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
