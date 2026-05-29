import Link from "next/link";
import { waLink } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        {/* Animated 404 */}
        <div className="relative mb-6">
          <p className="text-[140px] sm:text-[180px] font-black text-slate-100 leading-none select-none">
            404
          </p>
          {/* Floating hexagon decoration */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-28 bg-teal-500/10 animate-pulse"
            style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-8 right-[20%] w-8 h-9 bg-blue-500/10 animate-bounce"
            style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", animationDelay: "0.5s" }}
            aria-hidden="true"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Halaman yang Anda cari tidak tersedia. Mungkin produk telah dihapus atau URL tidak valid.
        </p>

        {/* Suggestion links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { label: "General Lab", href: "/general-lab" },
            { label: "Custom Furniture", href: "/custom-lab-furnitur" },
            { label: "Reagent", href: "/reagent-consumable" },
            { label: "Glassware", href: "/glassware" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:text-teal-600 hover:border-teal-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Kembali ke Beranda
          </Link>
          <a
            href={waLink("Halo Andis Lab, saya tidak menemukan halaman yang saya cari...")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:bg-[#20b858] hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
