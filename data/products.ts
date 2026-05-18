export interface Product {
  id: number;
  nama_produk: string;
  slug: string;
  main_kategori: string; // slug format: "reagent-consumable", "glassware", etc.
  sub_kategori: string;
  model: string;
  deskripsi_singkat: string;
  deskripsi_panjang: string;
  spesifikasi: string;
  fitur: string[];
  foto_utama: string;
  foto_lainnya: string[];
  featured?: boolean;
}

export const products: Product[] = [
  // ==================== REAGENT & CONSUMABLE ====================
  {
    id: 1,
    nama_produk: "Merck 109248 Karl Fischer Reagent",
    slug: "merck-109248-karl-fischer",
    main_kategori: "reagent-consumable",
    sub_kategori: "Bahan Kimia Analitik",
    model: "109248",
    deskripsi_singkat: "Single Component Reagent with Pyridine 1 ml ≙ 5 mg H₂O",
    deskripsi_panjang: "Reagent Karl Fischer untuk penentuan kadar air dengan metode titrasi volumetri.",
    spesifikasi: "Cat.No: 109248 | Kepadatan: 1.13 g/cm³ | Titik api: 35°C | pH: 4–5",
    fitur: ["Kemurnian tinggi", "Mudah digunakan", "Standar analitik"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_140302-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 2,
    nama_produk: "Merck 109629 tert-Butanol EMSURE",
    slug: "merck-109629-tert-butanol",
    main_kategori: "reagent-consumable",
    sub_kategori: "Pelarut",
    model: "109629",
    deskripsi_singkat: "tert-Butanol untuk analisis EMSURE®",
    deskripsi_panjang: "Pelarut berkualitas tinggi kelas EMSURE® sesuai standar ACS dan Reag. Ph Eur.",
    spesifikasi: "Kemurnian ≥99.5% | Titik didih 81–83°C | CAS: 75-65-0",
    fitur: ["ACS & Reag. Ph Eur", "Kemurnian sangat tinggi"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_141653-removebg-preview__1_-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 3,
    nama_produk: "Merck 106574 di-Natrium hidrogen fosfat heptahidrat",
    slug: "merck-106574-na2hpo4-7h2o",
    main_kategori: "reagent-consumable",
    sub_kategori: "Garam",
    model: "106574",
    deskripsi_singkat: "di-Natrium hidrogen fosfat heptahidrat EMPROVE®",
    deskripsi_panjang: "Garam berkualitas DAC & USP untuk aplikasi laboratorium dan farmasi.",
    spesifikasi: "Kadar 98.0–100.5% | pH 9.0–9.3 | CAS: 7782-85-6",
    fitur: ["DAC & USP grade", "Kualitas tinggi"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_143820-removebg-preview.png",
    foto_lainnya: [],
  },
  {
    id: 4,
    nama_produk: "Merck 106579 di-Natrium hidrogen fosfat dodekahidrat",
    slug: "merck-106579-na2hpo4-12h2o",
    main_kategori: "reagent-consumable",
    sub_kategori: "Garam",
    model: "106579",
    deskripsi_singkat: "di-Natrium hidrogen fosfat dodekahidrat",
    deskripsi_panjang: "Garam ISO & Reag. Ph Eur berkualitas tinggi.",
    spesifikasi: "Kadar 99.0–102.0% | CAS: 10039-32-4",
    fitur: ["ISO grade", "Reag. Ph Eur"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_144618.png",
    foto_lainnya: [],
  },
  {
    id: 5,
    nama_produk: "Merck 105056 Kalium disulfit E 224",
    slug: "merck-105056-kalium-disulfit",
    main_kategori: "reagent-consumable",
    sub_kategori: "Garam / Pengawet",
    model: "105056",
    deskripsi_singkat: "Kalium disulfit E 224 Food & Pharma Grade",
    deskripsi_panjang: "Pengawet dan antioksidan berkualitas untuk aplikasi farmasi dan makanan.",
    spesifikasi: "pH 3.0–4.5 | CAS: 16731-55-8",
    fitur: ["E224 approved", "Food & Pharma grade"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_150943.png",
    foto_lainnya: [],
  },

  // ==================== GLASSWARE ====================
  {
    id: 6,
    nama_produk: "IWAKI Beaker Glass Tall Form",
    slug: "iwaki-beaker-tall-form",
    main_kategori: "glassware",
    sub_kategori: "Beaker",
    model: "Tall Form",
    deskripsi_singkat: "Gelas beker borosilikat tinggi",
    deskripsi_panjang: "Gelas kimia tall form dengan stabilitas termal dan ketahanan kimia tinggi.",
    spesifikasi: "Kapasitas 50–1000 mL | Borosilicate glass",
    fitur: ["Tahan panas", "Spout", "Graduasi jelas"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_100743-removebg-preview-1.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 7,
    nama_produk: "IWAKI Beaker Glass Low Form",
    slug: "iwaki-beaker-low-form",
    main_kategori: "glassware",
    sub_kategori: "Beaker",
    model: "Low Form",
    deskripsi_singkat: "Gelas beker borosilikat rendah",
    deskripsi_panjang: "Gelas kimia low form dengan desain stabil dan mudah dicampur.",
    spesifikasi: "Kapasitas 10–10000 mL",
    fitur: ["Graduasi putih", "Corong spout"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_102504-removebg-preview-1.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 8,
    nama_produk: "Erlenmeyer Flask IWAKI",
    slug: "iwaki-erlenmeyer-flask",
    main_kategori: "glassware",
    sub_kategori: "Erlenmeyer",
    model: "4980FK series",
    deskripsi_singkat: "Erlenmeyer Flask borosilikat",
    deskripsi_panjang: "Flask kerucut dengan leher sempit, ideal untuk titrasi dan pemanasan.",
    spesifikasi: "Kapasitas 10–5000 mL",
    fitur: ["Leher sempit", "Tahan panas"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_104445-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 9,
    nama_produk: "Measuring Cylinder IWAKI",
    slug: "iwaki-measuring-cylinder",
    main_kategori: "glassware",
    sub_kategori: "Gelas Ukur",
    model: "-",
    deskripsi_singkat: "Gelas ukur kaca borosilikat IWAKI",
    deskripsi_panjang: "Alat pengukur volume cairan dengan graduasi akurat.",
    spesifikasi: "Kapasitas 100–2000 mL",
    fitur: ["Graduasi presisi", "Tahan kimia"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_110401.png",
    foto_lainnya: [],
  },

  // ==================== GENERAL LAB ====================
  {
    id: 10,
    nama_produk: 'MS7-S 7" Square Magnetic Stirrer',
    slug: "ms7-s-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "MS7-S",
    deskripsi_singkat: "Magnetic Stirrer 7 inch dengan work plate glass ceramic",
    deskripsi_panjang: "Stirrer serbaguna dengan kapasitas 10 L dan kecepatan hingga 1500 rpm.",
    spesifikasi: "Speed range: 0-1500 rpm | Work plate: Glass Ceramic | Capacity: 10 L",
    fitur: ["Plate tahan korosi", "Kecepatan stabil"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-19_142810-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 11,
    nama_produk: "MS6-Pro LCD Digital Magnetic Stirrer",
    slug: "ms6-pro-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "MS6-Pro",
    deskripsi_singkat: "Magnetic Stirrer digital dengan layar LCD",
    deskripsi_panjang: "Stirrer digital presisi dengan kontrol suhu dan kecepatan.",
    spesifikasi: "LCD display | Digital control",
    fitur: ["Tampilan LCD", "Kontrol digital"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-19_151737-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 12,
    nama_produk: "MS-S Magnetic Stirrer",
    slug: "ms-s-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "MS-S",
    deskripsi_singkat: "Magnetic Stirrer ekonomis",
    deskripsi_panjang: "Stirrer andal dengan desain sederhana dan performa stabil.",
    spesifikasi: "Speed range: 0-1500 rpm",
    fitur: ["Harga terjangkau", "Performa stabil"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-19_153413-removebg-preview.png",
    foto_lainnya: [],
  },
  {
    id: 13,
    nama_produk: "MS-PA LED Digital Magnetic Stirrer",
    slug: "ms-pa-led-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "MS-PA",
    deskripsi_singkat: "Magnetic Stirrer dengan LED display",
    deskripsi_panjang: "Stirrer digital dengan indikator LED yang jelas.",
    spesifikasi: "LED display | Digital control",
    fitur: ["Tampilan LED", "Akurasi tinggi"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-19_154434-removebg-preview.png",
    foto_lainnya: [],
  },
  {
    id: 14,
    nama_produk: "DHP4-550 LCD Glass Ceramic Hotplate",
    slug: "dhp4-550-hotplate",
    main_kategori: "general-lab",
    sub_kategori: "Heating & Hotplate",
    model: "DHP4-550",
    deskripsi_singkat: "Hotplate digital dengan plate glass ceramic",
    deskripsi_panjang: "Pemanas laboratorium dengan kontrol suhu presisi.",
    spesifikasi: "LCD display | Glass Ceramic plate",
    fitur: ["Kontrol suhu presisi", "Plate tahan kimia"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-22_100608-removebg-preview.png",
    foto_lainnya: [],
    featured: true,
  },
  {
    id: 15,
    nama_produk: "MS-T-S15 15-Position Magnetic Stirrer",
    slug: "ms-t-s15-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "MS-T-S15",
    deskripsi_singkat: "Magnetic Stirrer 15 posisi",
    deskripsi_panjang: "Stirrer multi-posisi untuk pengadukan simultan hingga 15 beaker.",
    spesifikasi: "15 positions | Speed range 0-1500 rpm",
    fitur: ["Multi-posisi", "Efisiensi tinggi"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-22_105154-removebg-preview.png",
    foto_lainnya: [],
  },
  {
    id: 16,
    nama_produk: "FlatSpin Ultra-flat Compact Magnetic Stirrer",
    slug: "flatspin-magnetic-stirrer",
    main_kategori: "general-lab",
    sub_kategori: "Mixing & Stirring",
    model: "FlatSpin",
    deskripsi_singkat: "Magnetic Stirrer ultra-flat dan compact",
    deskripsi_panjang: "Stirrer tipis yang hemat tempat namun tetap powerful.",
    spesifikasi: "Ultra-flat design | Compact size",
    fitur: ["Desain sangat tipis", "Hemat tempat"],
    foto_utama: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-22_112456-removebg-preview.png",
    foto_lainnya: [],
  },
];

// ── Helper functions ─────────────────────────────────────────────
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByKategori(kategori: string): Product[] {
  return products.filter((p) => p.main_kategori === kategori);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const KATEGORI_SLUGS = [
  "general-lab",
  "custom-lab-furnitur",
  "reagent-consumable",
  "glassware",
] as const;

export type KategoriSlug = (typeof KATEGORI_SLUGS)[number];
