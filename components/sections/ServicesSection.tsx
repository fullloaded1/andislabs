"use client";

import { useReveal } from "@/hooks/useReveal";

/* ── Color tokens — matches WhyUsSection / site palette ── */
const iconBg: Record<string, string> = {
  teal:   "bg-teal-50 text-teal-600",
  blue:   "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  cyan:   "bg-cyan-50 text-cyan-600",
};
const dotColor: Record<string, string> = {
  teal:   "bg-teal-500",
  blue:   "bg-blue-500",
  indigo: "bg-indigo-500",
  cyan:   "bg-cyan-500",
};
const ctaColor: Record<string, string> = {
  teal:   "text-teal-600 hover:text-teal-700",
  blue:   "text-blue-600 hover:text-blue-700",
  indigo: "text-indigo-600 hover:text-indigo-700",
  cyan:   "text-cyan-600 hover:text-cyan-700",
};

/* ── Service data ───────────────────────────────────────────── */
const services = [
  {
    color: "teal",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Supply Alat Lab",
    description:
      "Pengadaan peralatan laboratorium dari brand internasional terkemuka untuk kebutuhan riset, klinis, dan industri dengan jaminan keaslian produk.",
    bullets: ["Instrument Analitik & Presisi", "Peralatan Umum Laboratorium", "Consumables & Reagent"],
    link: "#kategori",
  },
  {
    color: "blue",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Custom Lab & Furnitur",
    description:
      "Desain dan fabrikasi furnitur laboratorium custom sesuai standar GLP/GMP: meja lab, lemari asam, hingga sistem penyimpanan reagen.",
    bullets: ["Meja & Bench Lab Custom", "Lemari Asam & Ventilasi", "Lemari Reagen & Storage"],
    link: "/custom-lab-furnitur",
  },
  {
    color: "indigo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Garansi & Kalibrasi",
    description:
      "Dukungan purna jual lengkap: garansi resmi, kalibrasi berkala bersertifikat, dan pelatihan teknis penggunaan alat untuk SDM Anda.",
    bullets: ["Garansi Resmi Pabrikan", "Kalibrasi Berkala Bersertifikat", "Pelatihan Teknis & Operator"],
    link: "/garansi",
  },
  {
    color: "cyan",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Konsultasi & Pengadaan",
    description:
      "Tim ahli kami siap konsultasi spesifikasi gratis dan membantu proses pengadaan resmi untuk institusi pemerintah maupun swasta.",
    bullets: ["Konsultasi Spesifikasi Gratis", "Pengadaan Resmi & e-Katalog", "Pendampingan Dokumen Tender"],
    link: "/konsultasi",
  },
];

/* ══════════════════════════════════════════════════════════════ */
export default function ServicesSection() {
  const headerReveal = useReveal(0.1);
  const gridReveal   = useReveal(0.05);

  return (
    <section id="layanan" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          ref={headerReveal.ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${
            headerReveal.visible ? "reveal-visible" : "reveal-hidden"
          }`}
        >
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Layanan Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Solusi Laboratorium Lengkap
          </h2>

          <p className="text-slate-500 leading-relaxed">
            Dari pengadaan alat hingga desain ruang laboratorium,
            one-stop solution untuk semua kebutuhan lab Anda.
          </p>
        </div>

        {/* ── 2×2 Card Grid ── */}
        <div
          ref={gridReveal.ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`
                group bg-white border border-slate-100 rounded-2xl p-8
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 flex gap-6
                ${gridReveal.visible ? "reveal-visible" : "reveal-hidden"}
              `}
              style={{ animationDelay: gridReveal.visible ? `${idx * 100}ms` : "0ms" }}
            >
              {/* Hexagon icon — same style as WhyUsSection */}
              <div className="flex-shrink-0" aria-hidden="true">
                <div
                  className={`w-16 h-[72px] flex items-center justify-center ${iconBg[s.color]}`}
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
                >
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-teal-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor[s.color]}`} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href={s.link}
                    target={s.link.startsWith("http") ? "_blank" : undefined}
                    rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group/btn flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 ${ctaColor[s.color]}`}
                  >
                    Pelajari Lebih Lanjut
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
