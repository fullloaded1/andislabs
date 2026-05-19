import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Konsultasi & Pengadaan",
  description: "Layanan konsultasi spesifikasi alat lab dan pendampingan dokumen tender / e-katalog bersama tim ahli Andis Lab.",
};

export default function KonsultasiPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Konsultasi & Pengadaan</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
          <div className="w-16 h-16 bg-cyan-50 text-cyan-600 flex items-center justify-center rounded-2xl mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Konsultasi & Pengadaan Alat Lab
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Memilih spesifikasi alat laboratorium seringkali membingungkan. Kami hadir untuk membantu Anda merumuskan KAK (Kerangka Acuan Kerja), spesifikasi teknis, hingga estimasi RAB (Rencana Anggaran Biaya) secara akurat.
          </p>
          
          <div className="space-y-6 mt-8 border-t border-slate-100 pt-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Konsultasi Spesifikasi Gratis</h3>
              <p className="text-slate-600 leading-relaxed">
                Ceritakan jenis analisis atau pengujian yang akan Anda lakukan, dan tim spesialis kami akan merekomendasikan alat dengan spesifikasi yang *fit-for-purpose* (tidak *overkill* dan tidak kurang spek).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Pengadaan Melalui E-Katalog & SIPLah</h3>
              <p className="text-slate-600 leading-relaxed">
                Bagi instansi pemerintah dan lembaga pendidikan, Andis Lab sudah terdaftar sebagai penyedia resmi di platform E-Katalog LKPP dan SIPLah. Proses administrasi menjadi lebih transparan, mudah, dan sesuai regulasi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Pendampingan Dokumen Tender</h3>
              <p className="text-slate-600 leading-relaxed">
                Kami siap memberikan dukungan dokumen legalitas keagenan (Surat Dukungan Pabrikan), brosur asli, dan jaminan purna jual untuk memenuhi syarat kelengkapan tender proyek pengadaan laboratorium berskala besar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cyan-600 rounded-3xl p-8 md:p-10 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-3">Mari Diskusikan Kebutuhan Anda</h3>
          <p className="text-cyan-50 mb-8 max-w-xl">
            Jangan ragu untuk bertanya. Tim konsultan pengadaan kami selalu *online* dan siap merespons kebutuhan RAB Anda dengan cepat.
          </p>
          <a
            href="https://wa.me/6282125523466?text=Halo%20Andis%20Lab,%20saya%20butuh%20konsultasi%20spesifikasi%20untuk%20pengadaan%20alat%20lab."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cyan-700 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>
        
      </div>
    </div>
  );
}
