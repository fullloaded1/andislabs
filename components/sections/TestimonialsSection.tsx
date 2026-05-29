"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useReveal } from "@/hooks/useReveal";
import { useToast } from "@/components/ui/Toast";

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
const logoTrack  = [...logos, ...logos];

/* ── Avatar color map ──────────────────────────────────────── */
const avatarStyle: Record<string, { bg: string; ring: string }> = {
  teal:   { bg: "from-teal-400 to-teal-600",     ring: "ring-teal-200" },
  blue:   { bg: "from-blue-400 to-blue-600",     ring: "ring-blue-200" },
  indigo: { bg: "from-indigo-400 to-indigo-600", ring: "ring-indigo-200" },
};

/* ══════════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════════ */
export default function TestimonialsSection() {
  const headerReveal = useReveal(0.1);
  const testiReveal  = useReveal(0.05);
  const stripReveal  = useReveal(0.1);
  const { toast } = useToast();

  const [dbTestis, setDbTestis] = useState(testimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', title: '', text: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestis = async () => {
      const { data, error } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        const formatted = data.map(t => ({
           ...t,
           avatar: t.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase(),
           color: t.color || ['teal', 'blue', 'indigo'][Math.floor(Math.random()*3)]
        }));
        setDbTestis(formatted);
      }
    };
    fetchTestis();
  }, []);

  // Focus trap for modal
  useEffect(() => {
    if (!showForm) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowForm(false);
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    // Focus the first input
    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector<HTMLElement>("input");
      firstInput?.focus();
    }, 100);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const color = ['teal', 'blue', 'indigo'][Math.floor(Math.random()*3)];
    const { error } = await supabase.from('testimonials').insert([
      { name: formData.name, title: formData.title, text: formData.text, rating: formData.rating, color }
    ]);
    if (!error) {
      toast("Testimoni berhasil dikirim! Terima kasih atas feedback Anda. 🎉", "success");
      setShowForm(false);
      setFormData({ name: '', title: '', text: '', rating: 5 });
      const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
      if (data) {
        setDbTestis(data.map(t => ({...t, avatar: t.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase(), color: t.color || 'teal'})));
      }
    } else {
      toast("Gagal menyimpan testimoni. Silakan coba lagi nanti.", "error");
    }
    setIsSubmitting(false);
  }, [formData, toast]);

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

          <p className="text-slate-500 leading-relaxed mb-6">
            Kepercayaan klien adalah prioritas kami. Inilah yang dikatakan
            mitra-mitra terpercaya Andis Lab.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
          >
            + Tulis Testimoni
          </button>
        </div>
      </div>

      {/* ══ Form Modal — with focus trap ══════════════════════ */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-form-title"
          onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
        >
          <div ref={modalRef} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fade-up">
            <h3 id="testimonial-form-title" className="text-xl font-bold text-slate-900 mb-4">Tulis Testimoni</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="testi-name" className="block text-xs font-semibold text-slate-600 mb-1">Nama Lengkap</label>
                <input id="testi-name" required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20" placeholder="Misal: Dr. Arifin Kusuma" aria-required="true" />
              </div>
              <div>
                <label htmlFor="testi-title" className="block text-xs font-semibold text-slate-600 mb-1">Jabatan / Instansi</label>
                <input id="testi-title" required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20" placeholder="Misal: Kepala Lab, UI" aria-required="true" />
              </div>
              <div>
                <label htmlFor="testi-rating" className="block text-xs font-semibold text-slate-600 mb-1">Rating (1-5)</label>
                <input id="testi-rating" required type="number" min="1" max="5" value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20" aria-required="true" />
              </div>
              <div>
                <label htmlFor="testi-text" className="block text-xs font-semibold text-slate-600 mb-1">Pesan Testimoni</label>
                <textarea id="testi-text" required rows={4} value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 resize-none" placeholder="Pelayanan sangat memuaskan..." aria-required="true" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors">Batal</button>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2 text-sm font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-lg disabled:opacity-50 transition-colors">
                  {isSubmitting ? "Mengirim..." : "Kirim"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        {/* ══ Testimonial Grid (static, staggered reveal) ═══════ */}
        <div
          ref={testiReveal.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dbTestis.slice(0, 6).map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
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
                  aria-hidden="true"
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
                  <div className="flex items-center gap-0.5 mb-4 mt-2" aria-label={`Rating ${t.rating} dari 5`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
                    aria-hidden="true"
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
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" aria-hidden="true" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" aria-hidden="true" />

            {/* Scrolling track */}
            <div
              className="flex items-center animate-marquee"
              style={{ width: "max-content" }}
              aria-hidden="true"
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
                    loading="lazy"
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
