import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { MenuContent } from "./MenuContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.menu.meta.title,
  description: t.menu.meta.description,
};

export default function MenuPage() {
  return <MenuContent />;
}
