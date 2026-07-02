"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { menuCategories } from "@/lib/menu-data";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function MenuContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-deep-ocean">
        <Image
          src="/images/dish-paella-caption.jpg"
          alt="Overhead view of a fresh paella fruits de mer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-charcoal/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-12">
          <Reveal>
            <Eyebrow className="mb-5 text-warm-white/80">{t.menu.hero.eyebrow}</Eyebrow>
            <h1 className="font-display max-w-xl text-4xl leading-tight text-warm-white md:text-6xl">
              {t.menu.hero.title}
            </h1>
            <p className="mt-5 max-w-md text-warm-white/85">{t.menu.hero.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-16 md:px-12 md:py-24">
        <nav
          aria-label={t.menu.categoriesAria}
          className="mb-16 flex flex-wrap gap-x-6 gap-y-2 border-b border-charcoal/10 pb-8 text-[0.78rem] tracking-[0.1em] uppercase text-charcoal/60"
        >
          {menuCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="underline-hover">
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-16 md:gap-20">
          {menuCategories.map((category) => (
            <Reveal key={category.id}>
              <div id={category.id} className="scroll-mt-28">
                <h2 className="font-display text-3xl text-charcoal md:text-4xl">
                  {category.title}
                </h2>
                {category.intro && (
                  <p className="mt-3 max-w-md text-sm italic text-charcoal/60">
                    {category.intro}
                  </p>
                )}
                <ul className="mt-8 flex flex-col gap-5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline gap-4 border-b border-dotted border-charcoal/15 pb-3 transition-colors duration-300 hover:border-soft-gold/50"
                    >
                      <div>
                        <p className="text-base text-charcoal md:text-lg">
                          {item.name}
                        </p>
                        {item.note && (
                          <p className="mt-1 text-sm text-charcoal/50">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <span className="ml-auto shrink-0 font-display text-lg text-med-blue">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-charcoal/40">{t.menu.footerNote}</p>
      </section>

      <section className="bg-ivory px-6 pb-24 text-center">
        <Reveal className="mx-auto max-w-md">
          <p className="font-display text-2xl text-charcoal">{t.menu.cta.title}</p>
          <div className="mt-8">
            <Button href="/reservations" variant="filled">
              {t.menu.cta.button}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
