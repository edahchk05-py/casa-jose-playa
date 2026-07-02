import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { siteConfig } from "@/lib/site-config";
import { InstagramContent } from "./InstagramContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.instagramPage.meta.title,
  description: t.instagramPage.meta.description(siteConfig.social.instagramHandle),
};

export default function InstagramPage() {
  return <InstagramContent />;
}
