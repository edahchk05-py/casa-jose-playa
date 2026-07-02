import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { ContactContent } from "./ContactContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.contact.meta.title,
  description: t.contact.meta.description,
};

export default function ContactPage() {
  return <ContactContent />;
}
