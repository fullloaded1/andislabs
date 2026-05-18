"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Testimonial data ───────────────────────────────────────── */
const testimonials = [
  {
    name: "Dr. Arifin Kusuma",
    title: "Kepala Lab Penelitian, Universitas Indonesia",
    avatar: "AK",
    color: "teal",
    text: "Andis Lab selalu memastikan ketersediaan alat kami tepat waktu dengan kualitas prima. Tim teknisnya sangat responsif dan membantu kami menemukan solusi terbaik sesuai anggaran riset.",
    rating: 5,
  },
  {
    name: "Ir. Siti Rahma, M.T.",
    title: "Manajer QC, PT Kalbe Farma",
    avatar: "SR",
    color: "blue",
    text: "Sejak bermitra dengan Andis Lab, proses pengadaan alat lab kami jauh lebih efisien. Produknya original, bersertifikat, dan after-sales service-nya memuaskan.",
    rating: 5,
  },
  {
    name: "Dr. Bambang Santoso",
    title: "Direktur Laboratorium RSUP Fatmawati",
    avatar: "BS",
    color: "indigo",
    text: "Andis Lab berhasil mendesain dan memasang furnitur lab kami sesuai standar klinis. Kualitas materialnya sangat baik dan tim instalasinya profesional.",
    rating: 5,
  },
  {
    name: "Prof. Dr. Hendra Wijaya",
    title: "Dekan Fakultas MIPA, Universitas Negeri Jakarta",
    avatar: "HW",
    color: "teal",
    text: "Kebutuhan perlengkapan laboratorium kami selalu terpenuhi dengan baik oleh Andis Lab. Kualitas produk terjamin dan pengiriman selalu tepat waktu sesuai jadwal kami.",
    rating: 5,
  },
  {
    name: "Drh. Fitriani, M.Si.",
    title: "Kepala Unit Lab, Badan POM RI",
    avatar: "FT",
    color: "blue",
    text: "Kami sangat puas dengan layanan Andis Lab. Alat-alat yang kami dapatkan berkualitas tinggi dan memenuhi standar regulasi yang ketat dari Badan POM.",
    rating: 5,
  },
];

/* ── Logo list ─────────────────────────────────────────────── */
const logos = [
  { src: "/images/logos/ITB.png",          alt: "Institut Teknologi Bandung" },
  { src: "/images/logos/UI.png",           alt: "Universitas Indonesia" },
  { src: "/images/logos/ipb.png",          alt: "IPB University" },
  { src: "/images/logos/japfa.png",        alt: "Japfa" },
  { src: "/images/logos/sari roti.png",    alt: "Sari Roti" },
  { src: "/images/logos/usu.png",          alt: "Universitas Sumatera Utara" },
  { src: "/images/logos/vicmalab.png",     alt: "Vicma Lab" },
  { src: "/images/logos/Logo_Unjani.png",  alt: "Unjani" },
  { src: "/images/logos/images.jpg",       alt: "Mitra" },
  { src: "/images/logos/images.png",       alt: "Mitra" },
  { src: "/images/logos/sego lab.jpg",     alt: "Sego Lab" },
];

/* duplicate for seamless loop */
const testiTrack = [...testimonials, ...testimonials];
const logoTrack  = [...logos, ...logos];

/* ── Avatar color map ──────────────────────────────────────── */
const avatarStyle: Record<string, { bg: string; ring: string }> = {
  teal:   { bg: "from-teal-400 to-teal-600",     ring: "ring-teal-200" },
  blue:   { bg: "from-blue-400 to-blue-600",     ring: "ring-blue-200" },
  indigo: { bg: "from-indigo-400 to-indigo-600", ring: "ring-indigo-200" },
};

/* ── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ══════════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════════ */
export default function TestimonialsSection() {
  const headerReveal = useReveal(0.1);
  const testiReveal  = useReveal(0.05);
  const stripReveal  = useReveal(0.1);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══ Header ══════════════════════════════════════════ */}
        <div
          ref={headerReveal.ref}
          className={`text-center max-w-2xl mx-auto mb-14 ${
            headerReveal.visible ? "reveal-visible" : "reveal-hidden"
          }`}
        >
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Testimoni
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Kata Mereka
          </h2>

          <p className="text-slate-500 leading-relaxed">
            Kepercayaan klien adalah prioritas kami. Inilah yang dikatakan
            mitra-mitra terpercaya Andis Lab.
          </p>
        </div>
      </div>

        {/* ══ Testimonial Grid (static, staggered reveal) ═══════ */}
        <div
          ref={testiReveal.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, idx) => (
              <div
                key={t.name}
                className={`
                  relative bg-slate-50 border border-slate-100 rounded-2xl p-7
                  flex flex-col justify-between
                  hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300
                  ${testiReveal.visible ? "reveal-visible" : "reveal-hidden"}
                `}
                style={{ animationDelay: testiReveal.visible ? `${idx * 130}ms` : "0ms" }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{
                    background:
                      t.color === "teal"
                        ? "linear-gradient(90deg,#0d9488,#22d3ee)"
                        : t.color === "blue"
                        ? "linear-gradient(90deg,#3b82f6,#818cf8)"
                        : "linear-gradient(90deg,#6366f1,#a78bfa)",
                  }}
                />

                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4 mt-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <div
                    className={`w-11 h-[50px] bg-gradient-to-br ${avatarStyle[t.color]?.bg ?? "from-teal-400 to-teal-600"} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                    style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      {/* ══ Trusted-By Logo Marquee ══════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={stripReveal.ref}
          className={`mt-16 ${stripReveal.visible ? "reveal-fade" : "opacity-0"}`}
        >
          <p className="text-center text-slate-400 text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            Dipercaya oleh Institusi &amp; Perusahaan Terkemuka
          </p>

          <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 py-5">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

            {/* Scrolling track */}
            <div
              className="flex items-center animate-marquee"
              style={{ width: "max-content" }}
            >
              {logoTrack.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-10 flex items-center justify-center"
                  style={{ height: 52 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={48}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
