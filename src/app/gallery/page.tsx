import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { GalleryContent } from "./GalleryContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.gallery.meta.title,
  description: t.gallery.meta.description,
};

export default function GalleryPage() {
  return <GalleryContent />;
}
