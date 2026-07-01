import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function BeachLifestyle() {
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
          <p className="eyebrow mb-6 text-warm-white/70">VI — The Hour the Light Turns Soft</p>
          <h2 className="font-display max-w-lg text-4xl leading-tight text-warm-white md:text-5xl">
            Stay Past the Last Course
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-warm-white/85">
            A glass in hand, sand still on your feet, the Atlantic doing the
            rest. This is the part of the evening no one rushes.
          </p>
          <Button
            href="/reservations"
            className="mt-10 border-warm-white/40 text-warm-white hover:border-soft-gold hover:text-soft-gold"
          >
            Reserve Your Table
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
