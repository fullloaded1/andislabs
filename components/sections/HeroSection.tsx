"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER  = "6282125523466";
const WA_MESSAGE = "Halo Andis Lab, saya ingin konsultasi mengenai peralatan laboratorium.";
const DURATION   = 6000;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PromoSlideData {
  title: string;
  tagline: string;
  badge: string;
  hero_image: string;
}

interface Slide {
  id: number;
  image: string;
  eyebrow: string;
  headline1: string;
  headline2: string;
  sub: string;
  isPromo?: boolean;
  promoHref?: string;
}

const BASE_SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/hero-scientist.png",
    eyebrow: "Distributor Resmi Peralatan Laboratorium",
    headline1: "Mitra Terpercaya",
    headline2: "Laboratorium Indonesia",
    sub: "Solusi lengkap peralatan lab, furnitur custom, reagent dan glassware dari brand internasional terpercaya.",
  },
  {
    id: 2,
    image: "/images/hero-slide2.png",
    eyebrow: "Kualitas Terjamin & Bergaransi",
    headline1: "Peralatan Lab",
    headline2: "Standar Internasional",
    sub: "Semua produk berstandar ISO dan CE, bermitra langsung dengan principal brand terkemuka dunia.",
  },
  {
    id: 3,
    image: "/images/hero-slide3.png",
    eyebrow: "Konsultasi & After-Sales Terbaik",
    headline1: "Solusi Laboratorium",
    headline2: "Lengkap & Terpercaya",
    sub: "Dari pengadaan alat hingga custom furnitur lab, kami adalah one-stop solution untuk kebutuhan riset dan industri Anda.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface HeroSectionProps {
  /** Data promo dari Notion. Jika diisi, promo tampil sebagai slide PERTAMA. */
  promo?: PromoSlideData | null;
}

export default function HeroSection({ promo }: HeroSectionProps) {
  // Susun slides: promo di depan jika ada
  const slides: Slide[] = promo
    ? [
        {
          id: 0,
          image: promo.hero_image || "/images/promo-banner-bg.png",
          eyebrow: promo.badge || "Promo Spesial",
          headline1: promo.title.split(" ").slice(0, 2).join(" "),
          headline2: promo.title.split(" ").slice(2).join(" ") || promo.title,
          sub: promo.tagline,
          isPromo: true,
          promoHref: "/promo",
        },
        ...BASE_SLIDES,
      ]
    : BASE_SLIDES;

  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const t = setInterval(goNext, DURATION);
    return () => clearInterval(t);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden group"
      style={{ marginTop: 68, height: "calc(100vh - 68px)", minHeight: 520 }}
    >
      {/* ── Slide backgrounds ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0"
          style={{
            zIndex: i === current ? 10 : 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
          }}
        >
          <Image
            src={s.image}
            alt={s.headline1}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.82) 32%, rgba(255,255,255,0.18) 62%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      ))}

      {/* ── Text content ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div className="max-w-[540px]">

          {/* Eyebrow — hanya muncul di slide non-promo */}
          {!slide.isPromo && (
            <p
              key={`eyebrow-${current}`}
              className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.28em] mb-5"
              style={{ animation: "heroTextUp 0.65s ease 0.1s both" }}
            >
              {slide.eyebrow}
            </p>
          )}

          <h1
            key={`h1-${current}`}
            className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight mb-5"
            style={{ animation: "heroTextUp 0.7s ease 0.2s both" }}
          >
            {slide.headline1}
            <br />
            <span className="text-blue-600">{slide.headline2}</span>
          </h1>

          <p
            key={`sub-${current}`}
            className="text-slate-600 text-base leading-relaxed mb-9 max-w-md"
            style={{ animation: "heroTextUp 0.7s ease 0.32s both" }}
          >
            {slide.sub}
          </p>

          <div
            key={`cta-${current}`}
            className="flex flex-wrap gap-4"
            style={{ animation: "heroTextUp 0.7s ease 0.44s both" }}
          >
            {slide.isPromo ? (
              /* CTA khusus slide promo */
              <>
                <Link
                  href="/promo"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-200/60 text-sm"
                >
                  Lihat Promo Sekarang
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Andis Lab, saya tertarik dengan promo yang sedang berlangsung.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold px-7 py-3.5 rounded-lg transition-all text-sm bg-white/60 backdrop-blur-sm"
                >
                  Tanya via WhatsApp
                </a>
              </>
            ) : (
              /* CTA normal */
              <>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-200/60 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis
                </a>
                <Link
                  href="#kategori"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold px-7 py-3.5 rounded-lg transition-all text-sm bg-white/60 backdrop-blur-sm"
                >
                  Lihat Katalog
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
