import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StoryChapter } from "@/components/sections/StoryChapter";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BeachLifestyle } from "@/components/sections/BeachLifestyle";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { TimeOfDayGrade } from "@/components/effects/TimeOfDayGrade";

export const metadata: Metadata = {
  title: "Casa Jose Playa — Mediterranean Seafood on the Beach, Dar Bouazza",
  description:
    "Casa Jose Playa is a beachfront table in Dar Bouazza, Casablanca, serving fire-cooked paella, fresh oysters, and Mediterranean seafood from sea to sand.",
};

export default function Home() {
  return (
    <TimeOfDayGrade>
      <Hero />

      <StoryChapter
        numeral="I"
        label="From the Sea"
        headline="Every plate begins before sunrise, on the docks."
        body="Our fishermen bring in the day's catch while Casablanca still sleeps. By the time it reaches your table, it has traveled no further than the tide."
        quote="We don't choose the menu. The sea does."
        cta={{ label: "Explore the Menu", href: "/menu" }}
        image={{
          src: "/images/from-the-sea-raw-platter.jpg",
          alt: "A raw seafood platter of fish, lobster, and shellfish resting on the sand at the water's edge",
        }}
      />

      <StoryChapter
        numeral="II"
        label="Fresh Ingredients"
        headline="Oysters, citrus, and nothing to hide behind."
        body="Simplicity is a discipline here. Cold oysters, good olive oil, a squeeze of lemon — the kind of dishes that only work when every ingredient is honest."
        cta={{ label: "See What's Fresh", href: "/menu" }}
        image={{
          src: "/images/fresh-oysters-wine.jpg",
          alt: "Fresh oysters on ice beside a glass of chilled white wine on grey stone",
        }}
        reverse
      />

      <StoryChapter
        numeral="III"
        label="Into the Fire"
        headline="A wood fire, a wide pan, and a lot of patience."
        body="Our paella is cooked the old way — over open flame, in cast iron worn smooth by years of service. No shortcuts, no induction, no rushing the rice."
        quote="Paella isn't a recipe. It's a rhythm."
        cta={{ label: "Meet the Kitchen", href: "/about" }}
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
