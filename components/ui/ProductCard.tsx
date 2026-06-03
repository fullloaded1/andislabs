import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { waLink } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const waMessage = `Halo, saya tertarik dengan ${product.nama_produk} (${product.model}). Mohon info harga dan ketersediaannya.`;

  return (
    // Use article as card container to avoid nested <a> tags
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Clickable image */}
      <Link
        href={`/${product.main_kategori}/${product.slug}`}
        className="relative h-52 flex items-center justify-center p-6 overflow-hidden flex-shrink-0 block bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <Image
          src={product.foto_utama}
          alt={product.nama_produk}
          width={200}
          height={180}
          className="object-contain max-h-40 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-semibold px-2 py-1 rounded-lg">
            {product.sub_kategori}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Clickable title */}
        <Link href={`/${product.main_kategori}/${product.slug}`}>
          <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1 hover:text-teal-600 transition-colors line-clamp-2">
            {product.nama_produk}
          </h3>
        </Link>
        <p className="text-xs text-slate-500 mb-3">
          Model: <span className="font-semibold text-slate-700">{product.model}</span>
        </p>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-1">
          {product.deskripsi_singkat}
        </p>

        {/* Action buttons — standalone anchors, not nested inside Link */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/${product.main_kategori}/${product.slug}`}
            className="flex-1 flex items-center justify-center text-center border border-slate-200 hover:border-teal-300 hover:text-teal-600 text-slate-700 text-xs font-semibold py-2.5 rounded-xl transition-colors"
          >
            Detail
          </Link>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-950 hover:bg-teal-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya Harga
          </a>
        </div>
      </div>
    </article>
  );
}
