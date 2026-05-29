// Categories section — Labozu-style, light bg, gradient cards with SVG icons

import Link from "next/link";
import Image from "next/image";

const categoryCards = [
  {
    slug: "general-lab",
    label: "General Lab",
    description:
      "Instrumen analitik, magnetic stirrer, hotplate, sentrifuge, dan peralatan umum laboratorium dari brand internasional terkemuka.",
    href: "/general-lab",
    image: "/images/cat-general-lab.png",
    gradient: "from-blue-600/80 to-blue-900/90",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    slug: "custom-lab-furnitur",
    label: "Custom Lab & Furnitur",
    description:
      "Desain dan fabrikasi meja lab, lemari asam, lemari reagen, dan furnitur laboratorium custom sesuai spesifikasi ruangan Anda.",
    href: "/custom-lab-furnitur",
    image: "/images/cat-custom-lab.png",
    gradient: "from-slate-700/80 to-slate-900/90",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    slug: "reagent-consumable",
    label: "Reagent & Consumable",
    description:
      "Bahan kimia reagen, pelarut organik, APD, tip pipet, dan consumable laboratorium berkualitas dengan jaminan kemurnian.",
    href: "/reagent-consumable",
    image: "/images/cat-reagent.png",
    gradient: "from-teal-600/80 to-teal-900/90",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    slug: "glassware",
    label: "Glassware",
    description:
      "Peralatan kaca borosilicate berkualitas tinggi: beaker, Erlenmeyer, labu ukur, pipet ukur, dan lengkap glassware lab.",
    href: "/glassware",
    image: "/images/cat-glassware.png",
    gradient: "from-indigo-600/80 to-indigo-900/90",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];


export default function CategoriesSection() {
  return (
    <section id="kategori" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Katalog Produk
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Kategori Produk Kami
          </h2>

          <p className="text-slate-500 leading-relaxed">
            Lengkapi kebutuhan laboratorium dari empat kategori utama yang mencakup
            ribuan item dari brand-brand internasional terpercaya.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryCards.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl min-h-[280px] flex flex-col justify-end cursor-pointer"
            >
              {/* Product photo background — zooms on hover */}
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay on top of photo */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`} aria-hidden="true" />

              {/* Subtle dot overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                aria-hidden="true"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Large icon — top right decorative */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300" aria-hidden="true">
                <div
                  className="w-28 h-32 bg-white/30 flex items-center justify-center text-white"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
                >
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Small icon */}
                <div
                  className="w-12 h-[54px] bg-white/20 border border-white/30 text-white flex items-center justify-center mb-5"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
                  aria-hidden="true"
                >
                  <div className="scale-75">{cat.icon}</div>
                </div>

                <h3 className="text-white font-black text-2xl mb-2">{cat.label}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  Lihat Produk
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
