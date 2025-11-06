export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  description?: string;
}

export interface MenuCategory {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    slug: "te",
    title: "Nuestra Carta de Tés",
    description: "Descubre nuestra selección de tés de todo el mundo.",
    metaTitle: "Carta de Tés - La Tetería Elda",
    metaDescription:
      "Descubre nuestra amplia selección de tés de todo el mundo. Tés verdes, negros, blancos, rojos y más en La Tetería Elda.",
    keywords:
      "té, tés, infusiones, té verde, té negro, té blanco, té rojo, tetería elda",
    items: [],
  },
  {
    slug: "cafe",
    title: "Nuestra Carta de Cafés",
    description: "Disfruta de los mejores cafés preparados con amor.",
    metaTitle: "Carta de Cafés - La Tetería Elda",
    metaDescription:
      "Disfruta de los mejores cafés en La Tetería Elda. Café espresso, cappuccino, latte y más preparados con amor.",
    keywords: "café, cafés, espresso, cappuccino, latte, café elda, cafetería",
    items: [],
  },
  {
    slug: "bebidas",
    title: "Nuestras Bebidas",
    description: "Refréscate con nuestras deliciosas bebidas.",
    metaTitle: "Bebidas - La Tetería Elda",
    metaDescription:
      "Refréscate con nuestras deliciosas bebidas. Zumos naturales, batidos, refrescos y más en La Tetería Elda.",
    keywords: "bebidas, zumos, batidos, refrescos, bebidas naturales, elda",
    items: [],
  },
  {
    slug: "shishas",
    title: "Nuestras Shishas",
    description: "Relájate con nuestras shishas de sabores variados.",
    metaTitle: "Shishas - La Tetería Elda",
    metaDescription:
      "Relájate con nuestras shishas de sabores variados. La mejor experiencia de shisha en Elda.",
    keywords: "shisha, cachimba, hookah, sabores, shisha elda, tetería",
    items: [],
  },
  {
    slug: "desayunos",
    title: "Nuestros Desayunos",
    description: "Empieza el día con energía con nuestros desayunos.",
    metaTitle: "Desayunos - La Tetería Elda",
    metaDescription:
      "Empieza el día con energía con nuestros deliciosos desayunos. Tostadas, bollería, zumos y más en Elda.",
    keywords:
      "desayunos, desayuno elda, tostadas, bollería, café desayuno, tetería",
    items: [],
  },
  {
    slug: "meriendas",
    title: "Nuestras Meriendas",
    description: "Disfruta de una tarde perfecta con nuestras meriendas.",
    metaTitle: "Meriendas - La Tetería Elda",
    metaDescription:
      "Disfruta de una tarde perfecta con nuestras deliciosas meriendas. Pasteles, dulces y mucho más en La Tetería Elda.",
    keywords: "meriendas, merienda elda, pasteles, dulces, repostería, tetería",
    items: [],
  },
];

export function getMenuCategory(slug: string): MenuCategory | undefined {
  return menuCategories.find((category) => category.slug === slug);
}

export function getAllMenuSlugs(): string[] {
  return menuCategories.map((category) => category.slug);
}
