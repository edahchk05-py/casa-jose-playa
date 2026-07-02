/**
 * Central source of truth for restaurant facts (names, numbers, coordinates).
 * All display copy lives in the bilingual dictionary under `src/lib/i18n`.
 */

export const siteConfig = {
  name: "Casa Jose Playa",
  shortName: "Casa Jose",
  url: "https://casajoseplaya.com",
  locale: "fr_FR",
  alternateLocale: "en_US",

  address: {
    street: "Rue de Tamaris",
    area: "Dar Bouazza",
    city: "Casablanca",
    country: "Morocco",
    full: "Rue de Tamaris, Dar Bouazza, Casablanca, Morocco",
    mapsUrl: "https://maps.app.goo.gl/46uZMLqrXEraSudN6",
    lat: 33.5822,
    lng: -7.8256,
  },

  contact: {
    phoneDisplay: "+212 6 37 84 24 42",
    phoneHref: "tel:+212637842442",
    whatsappHref: "https://wa.me/212637842442",
  },

  hours: {
    range: "12:00 — 02:00",
  },

  reservations: {
    primaryMethod: "whatsapp" as const,
  },

  social: {
    instagram: "https://www.instagram.com/casajoseplaya",
    instagramHandle: "@casajoseplaya",
  },
};
