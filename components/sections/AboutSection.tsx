import Image from "next/image";

const highlights = [
  "Distributor resmi brand internasional terkemuka",
  "Tim teknis berpengalaman dan bersertifikasi",
  "Pengiriman ke seluruh wilayah Indonesia",
  "Garansi produk dan layanan purna jual",
  "Konsultasi spesifikasi gratis",
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Hexagon image composition ────────── */}
          <div className="relative flex items-center justify-center min-h-[480px] order-2 lg:order-1">
            {/* Background decorative circle */}
            <div className="absolute w-80 h-80 bg-blue-50 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Main hexagon — lab image */}
            <div
              className="relative z-10 overflow-hidden shadow-2xl"
              style={{
                width: 340,
                height: 390,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <Image
                src="/images/lab-about.png"
                alt="Laboratorium modern Andis Lab"
                width={340}
                height={390}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small hexagon — teal accent */}
            <div
              className="absolute z-20 overflow-hidden border-4 border-white shadow-lg"
              style={{
                width: 130,
                height: 150,
                bottom: "8%",
                right: "8%",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(135deg, #0d9488, #0891b2)",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-white">
                <p className="text-2xl font-black">10+</p>
                <p className="text-[10px] font-semibold text-center leading-tight px-3">
                  Tahun<br />Pengalaman
                </p>
              </div>
            </div>

            {/* Tiny decorative hexagons */}
            <div
              className="absolute top-4 right-4 w-12 h-14 bg-teal-100"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
            <div
              className="absolute bottom-8 left-4 w-16 h-18 bg-blue-100"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>

          {/* ── RIGHT: Text content ─────────────────────── */}
          <div className="order-1 lg:order-2">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Tentang Andis Lab
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-3">
              Siapa Kami
            </h2>


            <p className="text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">Andis Lab</strong> adalah perusahaan distributor
              peralatan laboratorium terpercaya yang telah melayani institusi riset, rumah sakit,
              industri farmasi, dan lembaga pendidikan di seluruh Indonesia selama lebih dari
              satu dekade.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Kami memberikan <strong className="text-slate-900">solusi laboratorium lengkap</strong>:
              dari konsultasi spesifikasi, pengadaan alat, desain furnitur lab custom, hingga
              layanan purna jual dan pelatihan teknis.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#kategori"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
            >
              Lihat Produk Kami
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
