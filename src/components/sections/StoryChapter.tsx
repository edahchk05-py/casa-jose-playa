import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

type StoryChapterProps = {
  numeral: string;
  label: string;
  headline: string;
  body: string;
  quote?: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  reverse?: boolean;
};

export function StoryChapter({
  numeral,
  label,
  headline,
  body,
  quote,
  cta,
  image,
  reverse = false,
}: StoryChapterProps) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-32">
      <Reveal>
        <p className="eyebrow mb-8 text-stone md:mb-12">
          {numeral} — {label}
        </p>
      </Reveal>

      <div
        className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <ImageReveal className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/11]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </ImageReveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl lg:text-[2.75rem]">
            {headline}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 md:text-lg">
            {body}
          </p>
          {quote && (
            <p className="font-display mt-6 max-w-md text-xl italic text-med-blue">
              “{quote}”
            </p>
          )}
          <Link
            href={cta.href}
            className="underline-hover mt-8 inline-block text-[0.8rem] tracking-[0.12em] uppercase text-soft-gold"
          >
            {cta.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
