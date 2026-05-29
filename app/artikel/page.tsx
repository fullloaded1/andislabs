import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Artikel & Edukasi",
  description: "Kumpulan artikel, tips, dan panduan seputar alat laboratorium, bahan kimia, dan standar operasional lab dari Andis Lab.",
  alternates: {
    canonical: "https://andislabs.com/artikel",
  },
};

export default async function ArticlesPage() {
  const { data: viewsData } = await supabase.from('article_views').select('*');
  const viewsMap = viewsData?.reduce((acc, v) => ({ ...acc, [v.slug]: v.view_count }), {}) || {};

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Artikel & Edukasi
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Tingkatkan wawasan Anda dengan berbagai panduan teknis dan artikel edukasi dari tim ahli Andis Lab.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
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
                  loading="lazy"
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
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {viewsMap[article.slug] || article.views} views
                  </span>
                </div>
                <Link href={`/artikel/${article.slug}`}>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
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
    </div>
  );
}
