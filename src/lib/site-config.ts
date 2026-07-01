/**
 * Central source of truth for restaurant facts.
 * Fields marked TODO are placeholders pending confirmation from Casa Jose Playa
 * and should be swapped before this concept goes to production.
 */

export const siteConfig = {
  name: "Casa Jose Playa",
  shortName: "Casa Jose",
  tagline: "Where the sea slows time.",
  description:
    "Mediterranean seafood, paella, and oysters on the beach at Dar Bouazza, Casablanca. Casa Jose Playa is a beachfront table for golden hour, fresh catch, and slow Mediterranean living.",
  url: "https://casajoseplaya.com", // TODO: confirm production domain
  locale: "en_US",

  address: {
    street: "Rue de Tamaris",
    area: "Dar Bouazza",
    city: "Casablanca",
    country: "Morocco",
    full: "Rue de Tamaris, Dar Bouazza, Casablanca, Morocco",
    mapsUrl: "https://maps.app.goo.gl/46uZMLqrXEraSudN6",
    lat: 33.5822, // TODO: confirm precise coordinates
    lng: -7.8256,
  },

  contact: {
    phoneDisplay: "+212 6 37 84 24 42",
    phoneHref: "tel:+212637842442",
    whatsappHref: "https://wa.me/212637842442",
    email: "reservations@casajoseplaya.com", // TODO: confirm real reservations email
  },

  hours: {
    // Sourced from restaurant's own promotional material ("Nous sommes ouverts").
    label: "Open all week",
    range: "12:00 — 02:00",
    note: "Lunch, sunset, and late dinner service, seven days a week.", // TODO: confirm lunch/dinner split if applicable
  },

  reservations: {
    // TODO: confirm official booking platform (OpenTable / Resy / SevenRooms / phone-only)
    primaryMethod: "whatsapp" as const,
    note: "Reservations are currently handled by phone and WhatsApp. Online booking coming soon.",
  },

  social: {
    instagram: "https://www.instagram.com/casajoseplaya",
    instagramHandle: "@casajoseplaya",
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
  { label: "Instagram", href: "/instagram" },
];
