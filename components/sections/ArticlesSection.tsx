import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Edukasi & Artikel
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Wawasan Laboratorium
            </h2>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              Temukan panduan, tips, dan pengetahuan terbaru seputar penggunaan alat, bahan kimia, serta standar keamanan laboratorium.
            </p>
          </div>
          {/* We'll link to an upcoming /artikel page */}
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors flex-shrink-0 whitespace-nowrap"
          >
            Lihat Semua Artikel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link href={`/artikel/${article.slug}`} className="block relative h-56 overflow-hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-teal-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>
                <Link href={`/artikel/${article.slug}`}>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 hover:text-teal-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
                  {article.excerpt}
                </p>
                <Link
                  href={`/artikel/${article.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-teal-600 text-sm font-semibold hover:text-teal-700 transition-colors group/link"
                >
                  Baca Selengkapnya
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
