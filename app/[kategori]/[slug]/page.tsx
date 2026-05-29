import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, getProductBySlug, getProductsByKategori } from "@/data/products";
import { getKategoriBySlug } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";
import { WA_NUMBER, waLink, SITE_URL, SITE_NAME } from "@/lib/constants";

interface PageProps {
  params: Promise<{ kategori: string; slug: string }>;
}

// SSG: generate all product pages
export async function generateStaticParams() {
  return products.map((p) => ({
    kategori: p.main_kategori,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategori, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const cat = getKategoriBySlug(kategori);

  return {
    title: `${product.nama_produk} - ${product.model}`,
    description: product.deskripsi_singkat,
    openGraph: {
      title: `${product.nama_produk} | ${SITE_NAME}`,
      description: product.deskripsi_singkat,
      url: `${SITE_URL}/${kategori}/${slug}`,
      images: [
        {
          url: product.foto_utama.startsWith("http")
            ? product.foto_utama
            : `${SITE_URL}${product.foto_utama}`,
          width: 800,
          height: 600,
          alt: product.nama_produk,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/${kategori}/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { kategori, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.main_kategori !== kategori) notFound();

  const cat = getKategoriBySlug(kategori);
  const waMessage = `Halo Andis Lab, saya tertarik dengan produk:\n\n*${product.nama_produk}*\nModel: ${product.model}\n\nMohon informasi harga dan ketersediaan stok. Terima kasih.`;

  // Related products (same category, different product)
  const relatedProducts = getProductsByKategori(kategori)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // ── Structured Data: Product + BreadcrumbList ──
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.nama_produk,
    "description": product.deskripsi_panjang ?? product.deskripsi_singkat,
    "image": product.foto_utama.startsWith("http")
      ? product.foto_utama
      : `${SITE_URL}${product.foto_utama}`,
    "brand": {
      "@type": "Brand",
      "name": SITE_NAME,
    },
    "model": product.model,
    "category": cat?.label ?? kategori,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "IDR",
      "seller": {
        "@type": "Organization",
        "name": SITE_NAME,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": cat?.label ?? kategori,
        "item": `${SITE_URL}/${kategori}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.nama_produk,
        "item": `${SITE_URL}/${kategori}/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/${kategori}`} className="hover:text-teal-600 transition-colors">
              {cat?.label ?? kategori}
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-800 font-medium line-clamp-1 max-w-xs">
              {product.nama_produk}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Product main section */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="bg-slate-50 flex items-center justify-center p-10 min-h-[300px] md:min-h-[400px] border-b md:border-b-0 md:border-r border-slate-100">
              <Image
                src={product.foto_utama}
                alt={product.nama_produk}
                width={380}
                height={300}
                className="object-contain max-h-72 w-auto"
                priority
              />
            </div>

            {/* Detail side */}
            <div className="p-8 md:p-10 flex flex-col">
              {/* Category + Sub */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Link
                  href={`/${kategori}`}
                  className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-lg hover:bg-teal-100 transition-colors"
                >
                  {cat?.label}
                </Link>
                <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {product.sub_kategori}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight tracking-tight mb-2">
                {product.nama_produk}
              </h1>
              <p className="text-sm text-slate-500 mb-4">
                Model:{" "}
                <span className="font-bold text-slate-800 text-base">{product.model}</span>
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {product.deskripsi_panjang ?? product.deskripsi_singkat}
              </p>

              {/* Divider */}
              <div className="border-t border-slate-100 my-4" />

              {/* Call to Action */}
              <div className="space-y-3">
                <a
                  href={waLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-[#25D366]/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Tanya Harga via WhatsApp
                </a>

                <Link
                  href={`/${kategori}`}
                  className="flex items-center justify-center gap-2 w-full border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  ← Kembali ke {cat?.label}
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
                {["✓ Garansi Resmi", "✓ Stok Tersedia", "✓ Pengiriman Nasional"].map((badge) => (
                  <span
                    key={badge}
                    className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.spesifikasi && (
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-8">
            <div className="px-8 py-5 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-lg">Spesifikasi Teknis</h2>
            </div>
            <div className="px-8 py-6">
              <p className="text-slate-600 text-sm leading-relaxed">{product.spesifikasi}</p>
            </div>
          </div>
        )}

        {/* Features */}
        {product.fitur && product.fitur.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm mb-8">
            <div className="px-8 py-5 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-lg">Fitur Unggulan</h2>
            </div>
            <ul className="px-8 py-6 space-y-3">
              {product.fitur.map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900 text-xl">Produk Terkait</h2>
              <Link
                href={`/${kategori}`}
                className="text-sm text-teal-600 hover:text-teal-700 font-semibold transition-colors"
              >
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
