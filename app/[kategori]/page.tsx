import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  products,
  getProductsByKategori,
  KATEGORI_SLUGS,
} from "@/data/products";
import { getKategoriBySlug, categories } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";

interface PageProps {
  params: Promise<{ kategori: string }>;
}

// SSG: generate all 4 category pages
export async function generateStaticParams() {
  return KATEGORI_SLUGS.map((slug) => ({ kategori: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategori } = await params;
  const cat = getKategoriBySlug(kategori);
  if (!cat) return {};

  return {
    title: `${cat.label} — Katalog Andis Lab`,
    description: cat.deskripsi,
    alternates: {
      canonical: `https://andislab.com/${kategori}`,
    },
  };
}

const categoryBgHeader: Record<string, string> = {
  "general-lab": "from-blue-700 to-blue-950",
  "custom-lab-furnitur": "from-amber-600 to-amber-900",
  "reagent-consumable": "from-emerald-700 to-emerald-950",
  "glassware": "from-purple-700 to-purple-950",
};

export default async function KategoriPage({ params }: PageProps) {
  const { kategori } = await params;
  const cat = getKategoriBySlug(kategori);

  if (!cat) notFound();

  const categoryProducts = getProductsByKategori(kategori);

  // Get unique sub-categories
  const subKategoriList = [...new Set(categoryProducts.map((p) => p.sub_kategori))];

  const headerGradient = categoryBgHeader[kategori] || "from-slate-800 to-slate-950";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": categoryProducts.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": p.nama_produk,
        "description": p.deskripsi_singkat,
        "image": p.foto_utama,
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <div className={`bg-gradient-to-br ${headerGradient} py-14 md:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium">{cat.label}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                {cat.labelEn}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                {cat.deskripsi}
              </p>
            </div>
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center">
              <p className="text-white font-black text-2xl">{categoryProducts.length}</p>
              <p className="text-white/70 text-xs">Produk Tersedia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sticky top-24">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Sub Kategori
              </h3>
              <ul className="space-y-1">
                {subKategoriList.map((sub) => {
                  const count = categoryProducts.filter((p) => p.sub_kategori === sub).length;
                  return (
                    <li key={sub}>
                      <a
                        href={`#${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors text-sm"
                      >
                        <span>{sub}</span>
                        <span className="text-xs bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                          {count}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-800 mb-2">Butuh Bantuan?</p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  Tim kami siap bantu pilih produk yang tepat.
                </p>
                <a
                  href="https://wa.me/6282125523466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis
                </a>
              </div>

              {/* Other categories */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Kategori Lain
                </p>
                <ul className="space-y-1">
                  {categories
                    .filter((c) => c.slug !== kategori)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={c.href}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors text-xs"
                        >
                          <svg className="w-3 h-3 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product area */}
          <main className="flex-1">
            {subKategoriList.map((sub) => {
              const subProducts = categoryProducts.filter((p) => p.sub_kategori === sub);
              const anchorId = sub.toLowerCase().replace(/\s+/g, "-");

              return (
                <section
                  key={sub}
                  id={anchorId}
                  className="mb-12 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-teal-500 rounded-full" />
                    <h2 className="text-lg font-bold text-slate-900">{sub}</h2>
                    <span className="text-xs text-slate-400">({subProducts.length} produk)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {subProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
