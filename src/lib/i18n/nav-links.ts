import type { Dictionary } from "./dictionary";

export type NavLink = {
  label: string;
  href: string;
};

export function getNavLinks(t: Dictionary): NavLink[] {
  return [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.menu, href: "/menu" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.reservations, href: "/reservations" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.instagram, href: "/instagram" },
  ];
}
