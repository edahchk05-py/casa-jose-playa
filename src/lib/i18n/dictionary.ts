/**
 * Bilingual copy for the whole site. French is the primary, default
 * language; English is offered as a secondary, always-available option via
 * the header switch. Keep both versions editorial in tone — this is not a
 * literal, word-for-word translation but a natural adaptation.
 */

const fr = {
  nav: {
    home: "Accueil",
    about: "Notre Histoire",
    menu: "Menu",
    gallery: "Galerie",
    reservations: "Réservations",
    contact: "Contact",
    instagram: "Instagram",
    reserve: "Réserver",
  },
  footer: {
    tagline: "Fruits de mer méditerranéens. Une table face à l'océan. L'heure dorée, chaque jour.",
    reserveCta: "Réserver une table →",
    navigateLabel: "Naviguer",
    findUsLabel: "Nous Trouver",
    googleMaps: "Google Maps",
    copyright: (year: number) => `© ${year} Casa Jose Playa. Tous droits réservés.`,
    location: "Dar Bouazza, Casablanca",
  },
  common: {
    hoursLabel: "Ouvert toute la semaine",
    hoursNote: "Service du déjeuner, du coucher de soleil et du dîner tardif, sept jours sur sept.",
    reservationsNote:
      "Les réservations se font actuellement par téléphone et WhatsApp. La réservation en ligne arrive bientôt.",
    skipToContent: "Aller au contenu",
  },
  home: {
    meta: {
      title: "Casa Jose Playa — Fruits de Mer Méditerranéens sur la Plage, Dar Bouazza",
      description:
        "Casa Jose Playa est une table face à l'océan à Dar Bouazza, Casablanca, où paella cuite au feu de bois, huîtres fraîches et fruits de mer méditerranéens passent de la mer à la table.",
    },
    hero: {
      eyebrow: "Une Table Face à l'Océan · Dar Bouazza, Casablanca",
      tagline: "Là où la mer ralentit le temps.",
      description:
        "Paella cuite au feu de bois, huîtres ouvertes à la commande, et une table dressée là où l'Atlantique rencontre le sable — des fruits de mer méditerranéens, sans hâte.",
      ctaPrimary: "Réserver une Table",
      ctaSecondary: "Découvrir le Menu",
      signatureTeaser: "Juste Sorti du Feu",
      scrollCue: "Découvrir",
    },
    chapters: {
      sea: {
        numeral: "I",
        label: "Venu de la Mer",
        headline: "Chaque assiette commence avant l'aube, sur les quais.",
        body: "Nos pêcheurs ramènent la pêche du jour pendant que Casablanca dort encore. Le temps qu'elle arrive à votre table, elle n'aura parcouru que la distance de la marée.",
        quote: "Ce n'est pas nous qui choisissons la carte. C'est la mer.",
        ctaLabel: "Découvrir le Menu",
      },
      ingredients: {
        numeral: "II",
        label: "Des Produits Frais",
        headline: "Huîtres, agrumes, et rien derrière quoi se cacher.",
        body: "Ici, la simplicité est une discipline. Des huîtres bien fraîches, une bonne huile d'olive, un trait de citron — le genre de plats qui ne fonctionnent que lorsque chaque ingrédient est honnête.",
        ctaLabel: "Voir les Arrivages",
      },
      fire: {
        numeral: "III",
        label: "Au Feu de Bois",
        headline: "Un feu de bois, une large paellera, et beaucoup de patience.",
        body: "Notre paella est cuite à l'ancienne — à flamme vive, dans une fonte polie par des années de service. Aucun raccourci, aucune induction, aucune précipitation sur le riz.",
        quote: "La paella n'est pas une recette. C'est un rythme.",
        ctaLabel: "Découvrir la Cuisine",
      },
    },
    signatureDishes: {
      eyebrow: "IV — Nos Plats Signature",
      title: "Ce Qui Sort du Feu",
      dishes: [
        {
          title: "Paella Fruits de Mer",
          desc: "Riz bomba, safran, et tout ce que les bateaux ont ramené ce matin.",
        },
        {
          title: "Le Plateau Grillé",
          desc: "Rougets, calamars, gambas — passés au charbon, réveillés au citron vert.",
        },
        {
          title: "Huîtres, Vin Blanc Frais",
          desc: "Ouvertes à la commande. Idéales avec notre blanc de l'Atlantique.",
        },
        {
          title: "Poulpe à la Braise",
          desc: "Braisé lentement puis léché par les flammes. Fumé, tendre, sans hâte.",
        },
        {
          title: "Crevettes à l'Ail",
          desc: "Ail, brandy, flambées devant vous. Demandez-les en salle.",
        },
      ],
    },
    galleryPreview: {
      eyebrow: "V — La Galerie",
      title: "Une Table Qui Mérite d'Être Photographiée",
      cta: "Voir Toute la Galerie →",
    },
    beachLifestyle: {
      eyebrow: "VI — L'Heure Où la Lumière S'Adoucit",
      title: "Restez Après le Dernier Service",
      body: "Un verre à la main, le sable encore aux pieds, l'Atlantique qui fait le reste. C'est la partie de la soirée que personne ne presse.",
      cta: "Réservez Votre Table",
    },
    reservationCta: {
      eyebrow: "Réservations",
      title: "La Table Est Dressée. Rejoignez-Nous.",
      body: (hoursLabel: string, hoursRange: string) =>
        `${hoursLabel}, ${hoursRange}. Les visites sans réservation sont bienvenues, mais l'heure dorée se remplit vite — un appel ou un message vous garantit une place sur le sable.`,
      ctaPrimary: "Réserver une Table",
      ctaSecondary: "Écrivez-nous sur WhatsApp",
    },
    instagramStrip: {
      eyebrow: "Suivez-nous",
    },
  },
  about: {
    meta: {
      title: "Notre Histoire",
      description:
        "L'histoire de Casa Jose Playa — une cuisine face à l'océan à Dar Bouazza, bâtie sur la paella au feu de bois, les huîtres fraîches et l'art de vivre méditerranéen sans hâte.",
    },
    hero: {
      eyebrow: "Notre Histoire",
      title: "Une Maison Construite au Rythme des Marées",
    },
    intro: {
      lead: "Casa Jose Playa est née d'une idée simple : le meilleur restaurant de fruits de mer de Casablanca ne devrait pas ressembler à un restaurant. Il devrait ressembler au meilleur après-midi passé en Espagne, reconstruit sur une plage marocaine.",
      p1: "À Dar Bouazza, juste après le dernier rond-point avant que la route côtière ne s'ouvre, notre cuisine suit le même rythme que la marée. Les huîtres arrivent dès le matin. Les paelleras passent sur le feu de bois avant midi. Et quand la lumière devient dorée sur l'Atlantique, tout le beach club sent l'ail, les agrumes et le charbon de bois.",
      p2: "Nous servons des classiques méditerranéens à l'accent espagnol — paella, pil-pil, pêche du jour grillée — avec une hospitalité de beach club qui donne envie d'annuler ses plans du soir pour rester jusqu'au coucher du soleil.",
    },
    values: {
      eyebrow: "Ce En Quoi Nous Croyons",
      title: "Trois Règles Que Nous Ne Brisons Jamais",
      items: [
        {
          title: "La Pêche Décide",
          body: "Nous n'écrivons pas la carte autour d'un concept. Nous l'écrivons autour de ce que les bateaux ramènent le matin même.",
        },
        {
          title: "Le Feu, Jamais de Raccourci",
          body: "Chaque paella est cuite à flamme vive dans une fonte polie par des années de service — la voie lente, délibérément.",
        },
        {
          title: "Le Sable Fait Partie du Décor",
          body: "Notre salle n'a presque pas de murs. L'Atlantique sert de toile de fond, et l'heure dorée est à la carte.",
        },
      ],
    },
    closing: {
      title: "Venez Goûter la Différence du Feu",
      cta: "Réserver une Table",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Retrouvez Casa Jose Playa Rue de Tamaris, Dar Bouazza, Casablanca. Itinéraire, horaires et coordonnées.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Retrouvez-Nous sur la Route Côtière",
    },
    address: {
      label: "Adresse",
      directions: "Itinéraire →",
    },
    phone: {
      label: "Téléphone & WhatsApp",
    },
    hours: {
      label: "Horaires",
    },
    follow: {
      label: "Suivez-nous",
    },
    mapTitle: "Carte vers Casa Jose Playa",
  },
  gallery: {
    meta: {
      title: "Galerie",
      description:
        "Une visite en images de Casa Jose Playa — la plage, le feu, la pêche et la table, à Dar Bouazza, Casablanca.",
    },
    hero: {
      eyebrow: "La Galerie",
      title: "La Mer, le Feu, et la Table Entre les Deux",
    },
    lightbox: {
      close: "Fermer la galerie",
      prev: "Image précédente",
      next: "Image suivante",
    },
  },
  instagramPage: {
    meta: {
      title: "Instagram",
      description: (handle: string) =>
        `Suivez ${handle} pour la pêche du jour, l'heure dorée et les instants du beach club de Casa Jose Playa.`,
    },
    eyebrow: "Suivez-nous",
  },
  menu: {
    meta: {
      title: "Menu",
      description:
        "La carte complète de Casa Jose Playa — paella, huîtres, pêche du jour grillée et classiques méditerranéens. Prix en MAD.",
    },
    hero: {
      eyebrow: "La Carte",
      title: "Neuf Services, Un Seul Rythme",
      note: "Tous les prix sont en Dirham marocain (MAD). Les paellas sont cuisinées à la commande et servies à partir de deux personnes.",
    },
    categoriesAria: "Catégories du menu",
    footerNote: "Prix en MAD. Menu soumis à la disponibilité saisonnière de la pêche du jour.",
    cta: {
      title: "Prêt à venir goûter par vous-même ?",
      button: "Réserver une Table",
    },
  },
  reservations: {
    meta: {
      title: "Réservations",
      description:
        "Réservez une table à Casa Jose Playa à Dar Bouazza, Casablanca. Appelez-nous ou écrivez-nous sur WhatsApp pour garantir votre heure dorée sur la plage.",
    },
    hero: {
      eyebrow: "Réservations",
      title: "Réservez Votre Table sur le Sable",
      notePrivate:
        "Pour les groupes de plus de huit personnes, ou les événements privés, appelez à l'avance et nous dresserons la table nous-mêmes.",
    },
    whatsapp: { label: "WhatsApp" },
    call: { label: "Appelez-nous" },
    hoursLabel: "Horaires",
    locationLabel: "Emplacement",
  },
};

const en: typeof fr = {
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    reservations: "Reservations",
    contact: "Contact",
    instagram: "Instagram",
    reserve: "Reserve",
  },
  footer: {
    tagline: "Mediterranean seafood. Beachfront dining. Golden hour, every day.",
    reserveCta: "Reserve a table →",
    navigateLabel: "Navigate",
    findUsLabel: "Find Us",
    googleMaps: "Google Maps",
    copyright: (year: number) => `© ${year} Casa Jose Playa. All rights reserved.`,
    location: "Dar Bouazza, Casablanca",
  },
  common: {
    hoursLabel: "Open all week",
    hoursNote: "Lunch, sunset, and late dinner service, seven days a week.",
    reservationsNote:
      "Reservations are currently handled by phone and WhatsApp. Online booking coming soon.",
    skipToContent: "Skip to content",
  },
  home: {
    meta: {
      title: "Casa Jose Playa — Mediterranean Seafood on the Beach, Dar Bouazza",
      description:
        "Casa Jose Playa is a beachfront table in Dar Bouazza, Casablanca, serving fire-cooked paella, fresh oysters, and Mediterranean seafood from sea to sand.",
    },
    hero: {
      eyebrow: "A Beachfront Table · Dar Bouazza, Casablanca",
      tagline: "Where the sea slows time.",
      description:
        "Fire-cooked paella, oysters cracked to order, and a table set where the Atlantic meets the sand — Mediterranean seafood, unhurried.",
      ctaPrimary: "Reserve a Table",
      ctaSecondary: "Explore the Menu",
      signatureTeaser: "Fire-Kissed, Off the Grill",
      scrollCue: "Discover",
    },
    chapters: {
      sea: {
        numeral: "I",
        label: "From the Sea",
        headline: "Every plate begins before sunrise, on the docks.",
        body: "Our fishermen bring in the day's catch while Casablanca still sleeps. By the time it reaches your table, it has traveled no further than the tide.",
        quote: "We don't choose the menu. The sea does.",
        ctaLabel: "Explore the Menu",
      },
      ingredients: {
        numeral: "II",
        label: "Fresh Ingredients",
        headline: "Oysters, citrus, and nothing to hide behind.",
        body: "Simplicity is a discipline here. Cold oysters, good olive oil, a squeeze of lemon — the kind of dishes that only work when every ingredient is honest.",
        ctaLabel: "See What's Fresh",
      },
      fire: {
        numeral: "III",
        label: "Into the Fire",
        headline: "A wood fire, a wide pan, and a lot of patience.",
        body: "Our paella is cooked the old way — over open flame, in cast iron worn smooth by years of service. No shortcuts, no induction, no rushing the rice.",
        quote: "Paella isn't a recipe. It's a rhythm.",
        ctaLabel: "Meet the Kitchen",
      },
    },
    signatureDishes: {
      eyebrow: "IV — Signature Dishes",
      title: "What Leaves the Fire",
      dishes: [
        {
          title: "Paella Fruits de Mer",
          desc: "Bomba rice, saffron, whatever the boats brought in this morning.",
        },
        {
          title: "The Grilled Platter",
          desc: "Red mullet, calamari, prawns — charcoal-kissed, lime-bright.",
        },
        {
          title: "Oysters, Chilled White",
          desc: "Shucked to order. Best with the house Atlantic white.",
        },
        {
          title: "Poulpe à la Braise",
          desc: "Slow-braised then licked by fire. Smoky, tender, unhurried.",
        },
        {
          title: "Crevettes à l'Ail",
          desc: "Garlic, brandy, a flambé at the table. Ask for it tableside.",
        },
      ],
    },
    galleryPreview: {
      eyebrow: "V — The Gallery",
      title: "A Table Worth Photographing",
      cta: "View Full Gallery →",
    },
    beachLifestyle: {
      eyebrow: "VI — The Hour the Light Turns Soft",
      title: "Stay Past the Last Course",
      body: "A glass in hand, sand still on your feet, the Atlantic doing the rest. This is the part of the evening no one rushes.",
      cta: "Reserve Your Table",
    },
    reservationCta: {
      eyebrow: "Reservations",
      title: "The Table Is Set. Join Us.",
      body: (hoursLabel: string, hoursRange: string) =>
        `${hoursLabel}, ${hoursRange}. Walk-ins are welcome, but golden hour fills quickly — a call or message secures your spot on the sand.`,
      ctaPrimary: "Reserve a Table",
      ctaSecondary: "WhatsApp Us",
    },
    instagramStrip: {
      eyebrow: "Follow Along",
    },
  },
  about: {
    meta: {
      title: "About",
      description:
        "The story of Casa Jose Playa — a beachfront kitchen in Dar Bouazza built on fire-cooked paella, fresh oysters, and unhurried Mediterranean living.",
    },
    hero: {
      eyebrow: "Our Story",
      title: "A House Built Around the Tide",
    },
    intro: {
      lead: "Casa Jose Playa began with a simple idea: the best seafood restaurant in Casablanca shouldn't feel like a restaurant at all. It should feel like the best afternoon you had in Spain, rebuilt on a Moroccan beach.",
      p1: "In Dar Bouazza, just past the last roundabout before the coast road opens up, our kitchen runs on the same rhythm as the tide. Oysters arrive by morning. The wood-fire paella pans go on before noon. And by the time the light turns gold over the Atlantic, the whole beach club smells like garlic, citrus, and charcoal.",
      p2: "We serve Mediterranean classics with a Spanish accent — paella, pil-pil, grilled catch of the day — alongside the kind of beach-club hospitality that makes people cancel their evening plans and stay for sunset instead.",
    },
    values: {
      eyebrow: "What We Believe",
      title: "Three Rules We Never Break",
      items: [
        {
          title: "The Catch Decides",
          body: "We don't write the menu around a concept. We write it around what the boats bring in that morning.",
        },
        {
          title: "Fire, Not Shortcuts",
          body: "Every paella is cooked over open flame in cast iron worn smooth by years of service — the slow way, on purpose.",
        },
        {
          title: "The Sand Is Part of the Room",
          body: "Our dining room has no walls to speak of. The Atlantic is the backdrop, and golden hour is on the menu.",
        },
      ],
    },
    closing: {
      title: "Come Taste the Difference Fire Makes",
      cta: "Reserve a Table",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Find Casa Jose Playa on Rue de Tamaris, Dar Bouazza, Casablanca. Get directions, hours, and contact details.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Find Us on the Coast Road",
    },
    address: {
      label: "Address",
      directions: "Get Directions →",
    },
    phone: {
      label: "Phone & WhatsApp",
    },
    hours: {
      label: "Hours",
    },
    follow: {
      label: "Follow",
    },
    mapTitle: "Map to Casa Jose Playa",
  },
  gallery: {
    meta: {
      title: "Gallery",
      description:
        "A visual tour of Casa Jose Playa — the beach, the fire, the catch, and the table, in Dar Bouazza, Casablanca.",
    },
    hero: {
      eyebrow: "The Gallery",
      title: "Sea, Fire, and the Table Between Them",
    },
    lightbox: {
      close: "Close gallery",
      prev: "Previous image",
      next: "Next image",
    },
  },
  instagramPage: {
    meta: {
      title: "Instagram",
      description: (handle: string) =>
        `Follow ${handle} for the daily catch, golden hour, and beach club moments from Casa Jose Playa.`,
    },
    eyebrow: "Follow Along",
  },
  menu: {
    meta: {
      title: "Menu",
      description:
        "The full Casa Jose Playa menu — paella, oysters, grilled catch of the day, and Mediterranean classics. Prices in MAD.",
    },
    hero: {
      eyebrow: "The Menu",
      title: "Nine Courses, One Rhythm",
      note: "All prices in Moroccan Dirham (MAD). Paellas are cooked to order and served for two or more.",
    },
    categoriesAria: "Menu categories",
    footerNote: "Prices in MAD. Menu subject to seasonal availability of the day's catch.",
    cta: {
      title: "Ready to taste it for yourself?",
      button: "Reserve a Table",
    },
  },
  reservations: {
    meta: {
      title: "Reservations",
      description:
        "Reserve a table at Casa Jose Playa in Dar Bouazza, Casablanca. Call or message us on WhatsApp to secure golden hour on the beach.",
    },
    hero: {
      eyebrow: "Reservations",
      title: "Secure Your Table on the Sand",
      notePrivate:
        "For parties larger than eight, or private events, call ahead and we'll set the table ourselves.",
    },
    whatsapp: { label: "WhatsApp" },
    call: { label: "Call Us" },
    hoursLabel: "Hours",
    locationLabel: "Location",
  },
};

export const dictionaries = { fr, en } as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof fr;

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";
