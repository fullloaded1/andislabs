export type Kategori = {
  slug: string;
  label: string;
  labelEn: string;
  deskripsi: string;
  href: string;
};

export const categories: Kategori[] = [
  {
    slug: "general-lab",
    label: "General Lab",
    labelEn: "General Laboratory",
    deskripsi:
      "Instrumen analitik, magnetic stirrer, hotplate, sentrifuge, dan peralatan umum laboratorium dari brand terkemuka.",
    href: "/general-lab",
  },
  {
    slug: "custom-lab-furnitur",
    label: "Custom Lab & Furnitur",
    labelEn: "Custom Lab & Furniture",
    deskripsi:
      "Desain dan fabrikasi meja lab, lemari asam, lemari reagen, dan furnitur laboratorium custom sesuai spesifikasi.",
    href: "/custom-lab-furnitur",
  },
  {
    slug: "reagent-consumable",
    label: "Reagent & Consumable",
    labelEn: "Reagent & Consumable",
    deskripsi:
      "Bahan kimia reagen, pelarut organik, APD, tip pipet, dan habis pakai laboratorium dengan kualitas terjamin.",
    href: "/reagent-consumable",
  },
  {
    slug: "glassware",
    label: "Glassware",
    labelEn: "Laboratory Glassware",
    deskripsi:
      "Peralatan kaca borosilicate berkualitas tinggi: beaker, Erlenmeyer, labu ukur, pipet, dan lebih banyak lagi.",
    href: "/glassware",
  },
];

export function getKategoriBySlug(slug: string): Kategori | undefined {
  return categories.find((k) => k.slug === slug);
}
