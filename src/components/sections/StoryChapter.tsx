"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type ChapterKey = "sea" | "ingredients" | "fire";

type StoryChapterProps = {
  chapterKey: ChapterKey;
  ctaHref: string;
  image: { src: string; alt: string };
  reverse?: boolean;
};

export function StoryChapter({ chapterKey, ctaHref, image, reverse = false }: StoryChapterProps) {
  const { t } = useLanguage();
  const chapter = t.home.chapters[chapterKey];

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-32">
      <Reveal>
        <Eyebrow className="mb-8 text-stone md:mb-12">
          {chapter.numeral} — {chapter.label}
        </Eyebrow>
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
            className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.035]"
          />
        </ImageReveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl lg:text-[2.75rem]">
            {chapter.headline}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 md:text-lg">
            {chapter.body}
          </p>
          {"quote" in chapter && chapter.quote && (
            <p className="font-display mt-6 max-w-md text-xl italic text-med-blue">
              “{chapter.quote}”
            </p>
          )}
          <Link
            href={ctaHref}
            className="underline-hover mt-8 inline-block text-[0.8rem] tracking-[0.12em] uppercase text-soft-gold"
          >
            {chapter.ctaLabel} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
