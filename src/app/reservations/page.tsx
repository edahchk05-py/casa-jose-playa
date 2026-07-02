import type { Metadata } from "next";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";
import { ReservationsContent } from "./ReservationsContent";

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: t.reservations.meta.title,
  description: t.reservations.meta.description,
};

export default function ReservationsPage() {
  return <ReservationsContent />;
}
