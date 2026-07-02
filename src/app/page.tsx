import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StoryChapter } from "@/components/sections/StoryChapter";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BeachLifestyle } from "@/components/sections/BeachLifestyle";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { TimeOfDayGrade } from "@/components/effects/TimeOfDayGrade";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.home.meta.title,
  description: t.home.meta.description,
};

export default function Home() {
  return (
    <TimeOfDayGrade>
      <Hero />

      <StoryChapter
        chapterKey="sea"
        ctaHref="/menu"
        image={{
          src: "/images/from-the-sea-raw-platter.jpg",
          alt: "A raw seafood platter of fish, lobster, and shellfish resting on the sand at the water's edge",
        }}
      />

      <StoryChapter
        chapterKey="ingredients"
        ctaHref="/menu"
        image={{
          src: "/images/fresh-oysters-wine.jpg",
          alt: "Fresh oysters on ice beside a glass of chilled white wine on grey stone",
        }}
        reverse
      />

      <StoryChapter
        chapterKey="fire"
        ctaHref="/about"
        image={{
          src: "/images/fire-kitchen-chef.jpg",
          alt: "A chef cooking paella over an open wood fire in the kitchen",
        }}
      />

      <SignatureDishes />

      <GalleryPreview />

      <BeachLifestyle />

      <ReservationCTA />

      <InstagramStrip />
    </TimeOfDayGrade>
  );
}
