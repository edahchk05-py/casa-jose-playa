import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { AboutContent } from "./AboutContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.about.meta.title,
  description: t.about.meta.description,
};

export default function AboutPage() {
  return <AboutContent />;
}
