import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garansi & Kalibrasi",
  description: "Dukungan purna jual lengkap Andis Lab: garansi resmi, kalibrasi berkala bersertifikat, dan pelatihan teknis penggunaan alat.",
};

export default function GaransiPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Garansi & Kalibrasi</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Layanan Garansi & Kalibrasi
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Komitmen kami tidak berhenti setelah produk terkirim. Andis Lab menyediakan layanan purna jual yang komprehensif untuk memastikan semua instrumen Anda beroperasi dengan presisi maksimal dan memenuhi standar kualitas ISO/IEC 17025.
          </p>
          
          <div className="space-y-6 mt-8 border-t border-slate-100 pt-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Garansi Resmi Pabrikan</h3>
              <p className="text-slate-600 leading-relaxed">
                Semua instrumen utama yang kami supply dilengkapi dengan garansi resmi (1 hingga 3 tahun tergantung brand). Kami mengurus segala keperluan klaim suku cadang dan perbaikan secara langsung ke principal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Kalibrasi Berkala Bersertifikat</h3>
              <p className="text-slate-600 leading-relaxed">
                Akurasi adalah nyawa dari pengujian laboratorium. Tim kami bekerja sama dengan lembaga sertifikasi KAN (Komite Akreditasi Nasional) untuk layanan kalibrasi berkala agar alat analitik Anda selalu presisi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Pelatihan Operator & Instalasi</h3>
              <p className="text-slate-600 leading-relaxed">
                Untuk setiap pembelian instrumen kompleks, teknisi kami akan melakukan instalasi *on-site* sekaligus memberikan *training* operasional gratis kepada analis lab Anda.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-3">Butuh Servis atau Kalibrasi Alat?</h3>
          <p className="text-indigo-100 mb-8 max-w-xl">
            Hubungi tim teknisi kami sekarang. Kami siap menjadwalkan kunjungan teknis ke laboratorium Anda.
          </p>
          <a
            href="https://wa.me/6282125523466?text=Halo%20Andis%20Lab,%20saya%20ingin%20mengajukan%20perbaikan/kalibrasi%20alat."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1"
          >
            Hubungi Teknisi Kami
          </a>
        </div>
        
      </div>
    </div>
  );
}
