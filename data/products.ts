export interface Product {
  id: number;
  nama_produk: string;
  slug: string;
  main_kategori: string;
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

import { prisma } from "@/lib/db";
import type { Product as PrismaProduct, ProductSpec } from "@prisma/client";

export const KATEGORI_SLUGS = [
  "daihan-labtech",
  "andislab-custom",
  "lovibond",
  "pyrex",
];

// Helper to map Prisma product to legacy Product interface
function mapToLegacyProduct(p: PrismaProduct & { specs?: ProductSpec[] }): Product {
  return {
    id: p.id as any, // Using string id in place of number
    nama_produk: p.name,
    slug: p.slug,
    main_kategori: p.category,
    sub_kategori: p.subcategory || "",
    model: p.model,
    deskripsi_singkat: p.description,
    deskripsi_panjang: p.description,
    spesifikasi: p.specs?.map(s => `${s.label}: ${s.value}`).join(' | ') || "",
    fitur: [], // Legacy interface requires string[], but not in DB
    foto_utama: p.image,
    foto_lainnya: [],
    // Simple logic for featured (e.g. price > 10M, or arbitrary logic based on ID for now)
    featured: p.price > 10000000, 
  };
}

export async function getProductsByKategori(kategoriSlug: string): Promise<Product[]> {
  const data = await prisma.product.findMany({
    where: { category: kategoriSlug },
    include: { specs: true }
  });
  return data.map(mapToLegacyProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const data = await prisma.product.findUnique({
    where: { slug },
    include: { specs: true }
  });
  return data ? mapToLegacyProduct(data) : undefined;
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    include: { specs: true }
  });
  return data.map(mapToLegacyProduct);
}

export async function getAllFeaturedProducts(): Promise<Product[]> {
  // Let's assume featured products are those with a high price for now as an example,
  // or we can fetch a specific subset
  const data = await prisma.product.findMany({
    take: 6,
    orderBy: { price: 'desc' },
    include: { specs: true }
  });
  return data.map(mapToLegacyProduct);
}