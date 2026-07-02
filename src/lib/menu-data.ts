/**
 * Transcribed directly from Casa Jose Playa's official printed menu.
 * Prices are in MAD (Moroccan Dirham).
 */

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "entree",
    title: "Entrée",
    items: [
      { name: "Oeufs à la façon lucion", price: "70" },
      { name: "Sardines grillées", price: "70" },
      { name: "Tortilla espagnole", price: "70" },
      { name: "Anchois marinés façon Casa Jose", price: "90" },
      { name: "Champignons à l'ail", price: "90" },
      { name: "Tortilla aux crevettes ou thon", price: "90" },
      { name: "Gaspacho andalou", price: "90" },
      { name: "Solettes à la plancha", price: "110" },
      { name: "Oeufs de poissons à la plancha", price: "110" },
      { name: "Crevettes oeufs et champignon", price: "120" },
      { name: "Soupe de fruits de mer", price: "120" },
      { name: "Poulpe à la galicienne", price: "120" },
      { name: "Crevettes à la plancha", price: "130" },
      { name: "Palourdes à la marinière", price: "140" },
      { name: "Poulpe à la braise", price: "160" },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    items: [
      { name: "Cœurs de laitue, anchois marinés et échalote", price: "50" },
      { name: "Salade russe avec gambas", price: "90" },
      { name: "Salade de tomate, oignons et filet de thon", price: "110" },
      { name: "Salade de poulpe", price: "100" },
      { name: "Salade Casa Jose", price: "120" },
      { name: "Avocat crevettes sauce cocktail ou vinigrette", price: "120" },
      { name: "Salade aux fruits de mer", price: "160" },
    ],
  },
  {
    id: "friture",
    title: "Friture",
    items: [
      { name: "Frites", price: "40" },
      { name: "Pommes de terres sauce bravas", price: "70" },
      { name: "Anchois", price: "90" },
      { name: "Anchois au Citron", price: "90" },
      { name: "Friture de sardines à la marocaine", price: "80" },
      { name: "Petits piments doux de padron", price: "90" },
      { name: "Croquettes de poulets", price: "90" },
      { name: "Croquettes de poissons", price: "100" },
      { name: "Petits Rougets", price: "100" },
      { name: "Croquettes jambon de champs", price: "100" },
      { name: "Croquettes de crevettes", price: "120" },
      { name: "Croquettes de sépia à l'encre de seiche", price: "110" },
      { name: "Solettes", price: "110" },
      { name: "Merlans", price: "110" },
      { name: "Adobo de poisson", price: "110" },
      { name: "Petits calamars", price: "140" },
      { name: "Calamars", price: "160" },
      { name: "Eperlan", price: "110" },
      { name: "Pattes de calamar", price: "130" },
    ],
  },
  {
    id: "poissons",
    title: "Poissons",
    items: [
      {
        name: "Loup, dorade ou pageot",
        price: "85 / 100g",
        note: "à la plancha, grossel ou à la marocaine ou espagnol",
      },
      { name: "Gratin de fruits de mer", price: "160" },
      { name: "Espadon", price: "180" },
      { name: "Sole à la plancha", price: "210" },
      { name: "Calamar à la plancha", price: "210" },
      { name: "Brochettes de poisson", price: "190" },
      { name: "Filet loup bar", price: "200" },
      { name: "Filet dorade", price: "200" },
      { name: "Le caldero de rascasse", price: "200" },
      { name: "Saint Pierre sauce normande", price: "210" },
      { name: "Pavé de saumon à la sauce blanche", price: "230" },
      { name: "Crevettes Jumbo (7 pièces)", price: "250" },
    ],
  },
  {
    id: "cocotes",
    title: "Cocotes",
    items: [
      { name: "Oeufs de poissons Pil-Pil", price: "110" },
      { name: "Poulpe Pil-Pil", price: "110" },
      { name: "Crevettes Pil-Pil", price: "120" },
      { name: "Boulettes de merlans", price: "110" },
      { name: "Crevettes à l'ail flambées au brandy", price: "120" },
      {
        name: "Cassolette d'espadon",
        price: "160",
        note: "aux crevettes, pommes de terre, tomates et poivron",
      },
    ],
  },
  {
    id: "iberique",
    title: "Ibérique",
    items: [
      { name: "Chorizo", price: "110" },
      { name: "Fromage manchego", price: "120" },
      { name: "Jambon de bellota", price: "260" },
    ],
  },
  {
    id: "paellas",
    title: "Paellas",
    intro: "Cooked to order, in the traditional wide pan, over time and fire.",
    items: [
      {
        name: "Paella du gentleman",
        price: "330",
        note: "fruits de mer décortiqués",
      },
      { name: "Paella fruits de mer", price: "330" },
      { name: "Paella mixte", price: "330", note: "poulet / poisson" },
      { name: "Paella noire", price: "350" },
      { name: "Paella à la homard", price: "550" },
    ],
  },
  {
    id: "viandes",
    title: "Viandes",
    items: [
      { name: "Émincé de poulet sauce champignons", price: "130" },
      { name: "Brochettes de poulet", price: "130" },
      { name: "Escalope au poulet", price: "140" },
      { name: "Émincé de bœuf sauce champignons", price: "170" },
      { name: "Escalope de veau", price: "170" },
      { name: "Entrecôte grillée", price: "220" },
      { name: "Filet de bœuf au feu de bois", price: "250" },
      { name: "Côte de Boeuf (1kg)", price: "550" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Salade de fruits", price: "60" },
      { name: "Tarte au citron", price: "60" },
      { name: "Fruits de saison", price: "60" },
      { name: "Ananas frais", price: "60" },
      { name: "Assortiment de glaces au choix", price: "60" },
      { name: "Gâteau glacé", price: "60" },
      { name: "Crème brulée", price: "60" },
      { name: "Fondant au chocolat", price: "60" },
      { name: "Creme caramel", price: "60" },
      { name: "Pain perdu", price: "60" },
      { name: "Sorbet citron et vodka", price: "80" },
    ],
  },
];
