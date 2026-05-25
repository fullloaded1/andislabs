import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import BrandPartnersSection from "@/components/sections/BrandPartnersSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import {
  queryNotionDatabase,
  getPlainText,
  isPromoActive,
  NOTION_API_KEY,
  NOTION_PROMO_DB_ID,
} from "@/lib/notion";
import type { PromoSlideData } from "@/components/sections/HeroSection";

// Fetch promo dari Notion. Return null jika:
// - Tidak ada key/DB ID
// - Tidak ada data
// - Tanggal promo belum mulai atau sudah selesai (otomatis!)
async function getPromoForHero(): Promise<PromoSlideData | null> {
  // ── CONTOH PROMO (aktif) — ganti dengan `return null;` untuk menyembunyikan ──
  return {
    title: "Promo Mid-Year 2025",
    tagline: "Diskon spesial alat lab, reagen, dan furniture lab pilihan. Stok terbatas!",
    badge: "🔥 Penawaran Terbatas",
    hero_image: "",
  };
  if (!NOTION_API_KEY || !NOTION_PROMO_DB_ID) return null;
  try {
    const res = await queryNotionDatabase(NOTION_PROMO_DB_ID, { page_size: 1 });
    const page = res.results[0];
    if (!page) return null;

    // ✅ Cek otomatis: apakah promo masih aktif berdasarkan tanggal di Notion?
    if (!isPromoActive(page.properties["Periode Aktif"])) return null;

    return {
      title:      getPlainText(page.properties["Judul"])      || "Promo Spesial",
      tagline:    getPlainText(page.properties["Tagline"])    || "",
      badge:      getPlainText(page.properties["Badge"])      || "Hot Promo",
      hero_image: getPlainText(page.properties["Hero Image"]) || "",
    };
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const promo = await getPromoForHero();

  return (
    <>
      <HeroSection promo={promo} />
      <BrandPartnersSection />
      <StatsSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
