import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-black text-slate-200 mb-4">404</p>
        <h1 className="text-2xl font-black text-slate-900 mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
          Halaman yang Anda cari tidak tersedia. Mungkin produk telah dihapus atau URL tidak valid.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-950 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors hover:bg-slate-800"
          >
            Kembali ke Beranda
          </Link>
          <a
            href="https://wa.me/6282125523466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors hover:bg-[#20b858]"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
