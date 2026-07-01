import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer className="bg-deep-ocean px-6 py-20 text-warm-white md:px-12">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.1em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-white/70">
              Mediterranean seafood. Beachfront dining. Golden hour, every day.
            </p>
            <Link
              href="/reservations"
              className="underline-hover mt-6 inline-block text-[0.8rem] tracking-[0.12em] uppercase text-soft-gold"
            >
              Reserve a table →
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="eyebrow mb-2 text-warm-white/50">Navigate</p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="underline-hover w-fit">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-warm-white/80">
            <p className="eyebrow mb-2 text-warm-white/50">Find Us</p>
            <p>{siteConfig.address.full}</p>
            <a href={siteConfig.contact.phoneHref} className="underline-hover w-fit">
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover w-fit"
            >
              {siteConfig.social.instagramHandle}
            </a>
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover w-fit"
            >
              Google Maps
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-warm-white/15 pt-6 text-xs text-warm-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Casa Jose Playa. Concept experience.</p>
          <p>Dar Bouazza, Casablanca</p>
        </div>
      </Reveal>
    </footer>
  );
}
