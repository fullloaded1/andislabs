export type Kategori = {
  slug: string;
  label: string;
  labelEn: string;
  deskripsi: string;
  href: string;
};

export const categories: Kategori[] = [
  {
    slug: "daihan-labtech",
    label: "Daihan Labtech",
    labelEn: "Daihan Labtech",
    deskripsi:
      "General peralatan laboratorium umum yang sering dipakai. Magnetic stirrer, hotplate, sentrifuge, dan peralatan umum laboratorium.",
    href: "/daihan-labtech",
  },
  {
    slug: "andislab-custom",
    label: "Andislab Custom",
    labelEn: "Andislab Custom",
    deskripsi:
      "Custom lab dan furniture fabrikasi meja lab, lemari asam, biosafety cabinet, laminar air flow, flammable cabinet, acid cabinet, wet scrubber.",
    href: "/andislab-custom",
  },
  {
    slug: "lovibond",
    label: "Lovibond",
    labelEn: "Lovibond",
    deskripsi:
      "Kebutuhan pengujian kualitas air industri, laboratorium, lingkungan, dan water treatment berkualitas dari Lovibond®.",
    href: "/lovibond",
  },
  {
    slug: "pyrex",
    label: "Pyrex",
    labelEn: "Pyrex®",
    deskripsi:
      "Peralatan kaca borosilicate berkualitas tinggi: beaker, Erlenmeyer, labu ukur, pipet, dan kelengkapan glassware lab.",
    href: "/pyrex",
  },
  {
    slug: "yuasa",
    label: "Yuasa",
    labelEn: "Yuasa",
    deskripsi:
      "Baterai dan kelistrikan laboratorium yang andal dan berkualitas dari Yuasa.",
    href: "/yuasa",
  },
];

export function getKategoriBySlug(slug: string): Kategori | undefined {
  return categories.find((k) => k.slug === slug);
}
