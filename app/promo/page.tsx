import { Metadata } from 'next';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import {
  queryNotionDatabase,
  getPlainText,
  isPromoActive,
  NOTION_API_KEY,
  NOTION_PROMO_DB_ID,
} from '@/lib/notion';
import PromoForm from './PromoForm';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Promo Spesial',
  description:
    'Dapatkan penawaran eksklusif produk laboratorium, reagen, dan furniture lab dari Andis Lab. Harga spesial, stok terbatas.',
  alternates: { canonical: 'https://andislabs.com/promo' },
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface PromoTheme {
  title: string;
  tagline: string;
  period: string;
  badge: string;
  /** URL gambar banner hero (dari Notion, opsional) */
  hero_image: string;
}

interface PromoProduct {
  id: string;
  name: string;
  category: string;
  discount_price: number;
  /** URL gambar produk (opsional — bisa dari Drive, Notion, dsb) */
  image_url?: string;
}

// ─── Data Fetching ────────────────────────────────────────────────────────────

async function getPromoTheme(): Promise<PromoTheme> {
  const MOCK: PromoTheme = {
    title: 'Promo Mid-Year 2025',
    tagline:
      'Diskon spesial alat lab, reagen, dan furniture lab pilihan. Stok terbatas, segera ajukan penawaran.',
    period: '1 Juni – 31 Juli 2025',
    badge: 'Penawaran Terbatas',
    hero_image: '',
  };

  if (!NOTION_API_KEY || !NOTION_PROMO_DB_ID) return MOCK;

  try {
    const res = await queryNotionDatabase(NOTION_PROMO_DB_ID, { page_size: 1 });
    const page = res.results[0];
    if (!page) return MOCK;

    // ✅ Jika tanggal promo sudah habis → kembalikan mock (halaman /promo tetap bisa diakses)
    if (!isPromoActive(page.properties['Periode Aktif'])) return MOCK;

    return {
      title:      getPlainText(page.properties['Judul'])      || MOCK.title,
      tagline:    getPlainText(page.properties['Tagline'])    || MOCK.tagline,
      period:     getPlainText(page.properties['Periode'])    || MOCK.period,
      badge:      getPlainText(page.properties['Badge'])      || MOCK.badge,
      hero_image: getPlainText(page.properties['Hero Image']) || '',
    };
  } catch (err) {
    console.error('[promo] Notion error:', err);
    return MOCK;
  }
}

async function getPromoProducts(): Promise<PromoProduct[]> {
  const MOCK: PromoProduct[] = [
    {
      id: '1', name: 'Analytical Balance 220g', category: 'Alat Lab',
      discount_price: 4_750_000,
      image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
    },
    {
      id: '2', name: 'pH Meter Digital Benchtop', category: 'Alat Lab',
      discount_price: 2_150_000,
      image_url: 'https://images.unsplash.com/photo-1587691592099-24045742c181?w=400&q=80',
    },
    {
      id: '3', name: 'Centrifuge 12-Slot 4000 RPM', category: 'Alat Lab',
      discount_price: 6_800_000,
      image_url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80',
    },
    {
      id: '4', name: 'Reagen HCl 37% (500 mL)', category: 'Reagen',
      discount_price: 185_000,
      image_url: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&q=80',
    },
    {
      id: '5', name: 'Reagen NaOH Pellet 98%', category: 'Reagen',
      discount_price: 145_000,
      image_url: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=400&q=80',
    },
    {
      id: '6', name: 'Lab Bench SS 150cm', category: 'Furniture Lab',
      discount_price: 3_200_000,
      image_url: 'https://images.unsplash.com/photo-1581093803997-5b4b2d0a9a3f?w=400&q=80',
    },
    {
      id: '7', name: 'Safety Cabinet Class II A2', category: 'Furniture Lab',
      discount_price: 28_500_000,
      image_url: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80',
    },
    {
      id: '8', name: 'Micropipette 0.5–10 µL', category: 'Alat Lab',
      discount_price: 1_350_000,
      image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80',
    },
  ];

  try {
    const { data, error } = await supabase
      .from('promo_products')
      .select('id, name, category, discount_price, image_url')
      .order('category', { ascending: true });

    if (error || !data || data.length === 0) return MOCK;
    return data as PromoProduct[];
  } catch {
    return MOCK;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatIDR = (v: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(v);

const CATEGORY_COLOR: Record<string, { pill: string; text: string; dot: string }> = {
  'Alat Lab':      { pill: 'bg-teal-50 text-teal-700',    text: 'text-teal-600',   dot: 'bg-teal-500' },
  'Reagen':        { pill: 'bg-blue-50 text-blue-700',    text: 'text-blue-600',   dot: 'bg-blue-500' },
  'Furniture Lab': { pill: 'bg-indigo-50 text-indigo-700', text: 'text-indigo-600', dot: 'bg-indigo-500' },
};
const getColor = (cat: string) =>
  CATEGORY_COLOR[cat] ?? { pill: 'bg-slate-100 text-slate-600', text: 'text-slate-600', dot: 'bg-slate-400' };

const WA_NUMBER  = '6282125523466';
const WA_MESSAGE = 'Halo Andis Lab, saya tertarik dengan promo yang sedang berlangsung. Boleh minta info lebih lanjut?';

// ─── Placeholder SVG jika tidak ada gambar ────────────────────────────────────

function ProductImagePlaceholder({ category }: { category: string }) {
  const c = getColor(category);
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center gap-2 ${c.pill}`}>
      <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
      <span className="text-[10px] font-bold uppercase tracking-wide opacity-50">{category}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PromoPage() {
  const [theme, products] = await Promise.all([getPromoTheme(), getPromoProducts()]);
  const productNames = products.map((p) => p.name);

  return (
    <div className="min-h-screen bg-white">

      {/* ══ Hero Section ══════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-0 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Left: teks */}
            <div className="pb-16">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {theme.badge}
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                {theme.title}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
                {theme.tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#rfq-form"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-md shadow-teal-100"
                >
                  Ajukan Penawaran
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Tanya via WhatsApp
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Berlaku: <span className="text-slate-600 font-medium">{theme.period}</span>
                &nbsp;·&nbsp; Stok terbatas.
              </p>
            </div>

            {/* Right: gambar hero (dari Notion) atau ilustrasi default */}
            <div className="relative h-72 lg:h-96 rounded-t-2xl overflow-hidden">
              {theme.hero_image ? (
                <Image
                  src={theme.hero_image}
                  alt={theme.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                /* Ilustrasi default jika belum ada gambar di Notion */
                <div className="w-full h-full bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-24 h-[108px] bg-teal-100 flex items-center justify-center mx-auto mb-4"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-xs font-medium">
                      Tambahkan gambar banner di Notion<br />
                      (property: <code className="bg-slate-200 px-1 rounded">Hero Image</code>)
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay gradient bawah agar blend ke bg */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ Product Grid ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Daftar Produk Promo
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Produk Unggulan Periode Ini
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Semua produk tersedia langsung dari distributor resmi dengan garansi purna jual.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const c = getColor(product.category);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {/* ── Gambar produk ── */}
                  <div className="relative h-44 bg-slate-50 flex-shrink-0">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    ) : (
                      <ProductImagePlaceholder category={product.category} />
                    )}

                    {/* Badge PROMO */}
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-md shadow-sm">
                      PROMO
                    </span>
                  </div>

                  {/* ── Info produk ── */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${c.pill} mb-3`}>
                      {product.category}
                    </span>

                    <h3 className="font-bold text-slate-900 text-sm leading-snug flex-1 mb-4 group-hover:text-teal-700 transition-colors">
                      {product.name}
                    </h3>

                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Harga promo mulai</p>
                      <p className={`text-lg font-black ${c.text}`}>{formatIDR(product.discount_price)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-xs text-slate-400">
            * Harga belum termasuk PPN 11%. Stok terbatas. Hubungi kami untuk konfirmasi ketersediaan.
          </p>
        </div>
      </section>

      {/* ══ RFQ Form ══════════════════════════════════════════════════════════ */}
      <PromoForm
        products={
          productNames.length > 0
            ? productNames
            : ['Alat Lab Umum', 'Reagen Kimia', 'Furniture Lab']
        }
      />
    </div>
  );
}
