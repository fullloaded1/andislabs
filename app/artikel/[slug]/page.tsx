import { getArticleBySlug, articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import ReportView from "@/components/ui/ReportView";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://andislab.com/artikel/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Fetch real view count from Supabase
  const { data: viewData } = await supabase
    .from('article_views')
    .select('view_count')
    .eq('slug', article.slug)
    .single();

  const realViews = viewData?.view_count || article.views;

  // Helper function to parse Indonesian date strings (e.g. "12 Mei 2026") into ISO string
  const getIsoDate = (dateStr: string) => {
    try {
      const months: Record<string, string> = {
        "Januari": "01", "Februari": "02", "Maret": "03", "April": "04",
        "Mei": "05", "Juni": "06", "Juli": "07", "Agustus": "08",
        "September": "09", "Oktober": "10", "November": "11", "Desember": "12"
      };
      const parts = dateStr.split(' ');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        const monthNum = months[month] || "01";
        return new Date(`${year}-${monthNum}-${day.padStart(2, '0')}T00:00:00Z`).toISOString();
      }
      return new Date(dateStr).toISOString();
    } catch (e) {
      return new Date().toISOString(); // Fallback if all parsing fails
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.coverImage,
    "datePublished": getIsoDate(article.date),
    "author": [{
      "@type": "Organization",
      "name": "Andis Lab",
      "url": "https://andislab.com"
    }]
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReportView slug={article.slug} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/artikel" className="hover:text-teal-600 transition-colors">Artikel</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 truncate">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{article.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {realViews} views
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            {article.title}
          </h1>

          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-100">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </header>

        {/* Article Content */}
        <article 
          className="prose prose-slate prose-lg md:prose-xl max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-teal-600 hover:prose-a:text-teal-700
          prose-li:text-slate-600
          bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Article Footer CTA */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-3">Butuh Konsultasi Lebih Lanjut?</h3>
          <p className="text-slate-400 mb-8 max-w-xl">
            Tim ahli kami siap membantu Anda memilih instrumen dan bahan kimia yang tepat untuk lab Anda secara gratis.
          </p>
          <a
            href="https://wa.me/6282125523466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Hubungi Konsultan Kami
          </a>
        </div>
      </div>
    </div>
  );
}
