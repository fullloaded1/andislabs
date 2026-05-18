// WhyUs — Labozu style: light bg, 4 cards with hexagon icon shapes

const reasons = [
  {
    color: "teal",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Produk Berkualitas Tinggi",
    description:
      "Bermitra dengan brand internasional terpercaya. Semua produk berstandar ISO dan CE untuk menjamin akurasi serta keandalan di laboratorium Anda.",
  },
  {
    color: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Harga Kompetitif",
    description:
      "Sebagai distributor langsung, kami menawarkan harga terbaik tanpa mengorbankan kualitas. Penawaran khusus untuk pembelian volume besar.",
  },
  {
    color: "indigo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Konsultasi Gratis",
    description:
      "Tim teknis berpengalaman kami siap membantu memilih peralatan yang tepat sesuai kebutuhan dan anggaran, tanpa biaya konsultasi.",
  },
  {
    color: "cyan",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
      </svg>
    ),
    title: "Pengiriman Cepat & Aman",
    description:
      "Jaringan logistik ke seluruh Indonesia dengan pengemasan khusus untuk peralatan sensitif. Tepat waktu dan kondisi sempurna.",
  },
];

const iconBg: Record<string, string> = {
  teal: "bg-teal-50 text-teal-600",
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  cyan: "bg-cyan-50 text-cyan-600",
};

const hexBorder: Record<string, string> = {
  teal: "border-teal-200",
  blue: "border-blue-200",
  indigo: "border-indigo-200",
  cyan: "border-cyan-200",
};

export default function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Keunggulan Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Mengapa Memilih Andis Lab?
          </h2>

          <p className="text-slate-500 leading-relaxed">
            Kami bukan sekadar vendor. Kami adalah partner laboratorium jangka panjang yang
            berkomitmen penuh pada kualitas, kepercayaan, dan pelayanan prima.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
            >
              {/* Hexagon icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-16 h-[72px] flex items-center justify-center ${iconBg[r.color]}`}
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {r.icon}
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-3 group-hover:text-teal-700 transition-colors">
                {r.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
