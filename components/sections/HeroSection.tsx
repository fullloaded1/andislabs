"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "6282125523466";
const WA_MESSAGE = "Halo Andis Lab, saya ingin konsultasi mengenai peralatan laboratorium.";
const DURATION = 6000;

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
  isShowcase?: boolean;
  waMessage?: string;
  promoHref?: string;
}

const BASE_SLIDES: Slide[] = [
  {
    id: 98,
    image: "/images/lovibond.jpg",
    eyebrow: "Authorized Distributor • Since 1885",
    headline1: "Solusi Terbaik",
    headline2: "Lovibond® Indonesia",
    sub: "Andis Lab adalah distributor resmi Lovibond® di Indonesia untuk kebutuhan pengujian kualitas air industri, laboratorium, lingkungan, dan water treatment.",
    isShowcase: true,
    waMessage: "Halo Andis Lab, saya tertarik dengan produk Lovibond. Boleh minta informasi dan penawaran?",
  },
  {
    id: 99,
    image: "/images/pyrex100.png",
    eyebrow: "Authorized Distributor • Trusted Since 1915",
    headline1: "Glassware Terbaik",
    headline2: "Pyrex® Indonesia",
    sub: "Andis Lab adalah distributor resmi Pyrex® di Indonesia untuk kebutuhan glassware laboratorium berkualitas tinggi, riset ilmiah, industri, dan pendidikan.",
    isShowcase: true,
    waMessage: "Halo Andis Lab, saya tertarik dengan produk Pyrex. Boleh minta informasi dan penawaran?",
  },
  {
    id: 100,
    image: "/images/labtech.png",
    eyebrow: "Authorized Distributor • Daihan Labtech",
    headline1: "General Lab",
    headline2: "Daihan Labtech",
    sub: "Andis Lab adalah distributor resmi Daihan Labtech di Indonesia. Oven, centrifuge, water bath, magnetic stirrer, dan instrumen laboratorium lengkap berkualitas tinggi.",
    isShowcase: true,
    waMessage: "Halo Andis Lab, saya tertarik dengan produk Daihan Labtech. Boleh minta informasi dan penawaran?",
  },
  {
    id: 101,
    image: "/images/Andislabcustom.png",
    eyebrow: "Solusi Furnitur Lab • Andis Lab",
    headline1: "Custom Lab",
    headline2: "Furniture & Design",
    sub: "Andis Lab menyediakan solusi furnitur laboratorium kustom — Island Bench, Wall Bench, Fume Hood, dan perancangan ruang laboratorium terpadu sesuai standar keamanan internasional.",
    isShowcase: true,
    waMessage: "Halo Andis Lab, saya tertarik dengan layanan Custom Lab Furniture. Boleh minta informasi dan konsultasi?",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface HeroSectionProps {
  /** Data promo dari Notion. Jika diisi, promo tampil sebagai slide PERTAMA. */
  promo?: PromoSlideData | null;
}

export default function HeroSection({ promo }: HeroSectionProps) {
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


      {/* ── Showcase Slides (Lovibond & Pyrex) ── */}
      {slides.map((s, i) => {
        if (!s.isShowcase) return null;
        const active = i === current;

        const isPyrex      = s.id === 99;
        const isLabTech    = s.id === 100;
        const isCustomLab  = s.id === 101;

        const accentColor  = isPyrex ? "#C0392B" : isLabTech ? "#0369A1" : isCustomLab ? "#0D7A5F" : "#2563EB";
        const accentBorder = isPyrex ? "rgba(192,57,43,0.25)"  : isLabTech ? "rgba(3,105,161,0.25)"  : isCustomLab ? "rgba(13,122,95,0.25)"  : "rgba(37,99,235,0.25)";
        const accentBg     = isPyrex ? "rgba(192,57,43,0.07)"  : isLabTech ? "rgba(3,105,161,0.07)"  : isCustomLab ? "rgba(13,122,95,0.07)"  : "rgba(37,99,235,0.07)";
        const accentShadow = isPyrex ? "0 4px 20px rgba(192,57,43,0.28)" : isLabTech ? "0 4px 20px rgba(3,105,161,0.28)" : isCustomLab ? "0 4px 20px rgba(13,122,95,0.28)" : "0 4px 20px rgba(37,99,235,0.28)";
        const gradientBase = isPyrex ? "225,238,248" : isLabTech ? "240,248,255" : isCustomLab ? "236,247,243" : "244,248,252";
        const glowClass    = isPyrex ? "bg-red-400/20" : isLabTech ? "bg-sky-400/20" : isCustomLab ? "bg-teal-400/20" : "bg-blue-400/20";

        return (
          <div
            key={s.id}
            className="absolute inset-0"
            style={{
              zIndex: active ? 10 : 0,
              opacity: active ? 1 : 0,
              transition: "opacity 1.4s ease-in-out",
              pointerEvents: active ? "auto" : "none",
            }}
          >
            {/* Background */}
            <Image
              src={s.image}
              alt={s.headline2}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              unoptimized
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, rgba(${gradientBase},0.97) 0%, rgba(${gradientBase},0.85) 35%, rgba(${gradientBase},0.40) 60%, rgba(${gradientBase},0) 100%)`,
              }}
            />

            {/* Glow subtle */}
            <div className={`absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full ${glowClass} blur-3xl pointer-events-none`} />

            {/* Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
              <div className="max-w-[500px]">

                {/* Eyebrow */}
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.28em] mb-5"
                  style={{ color: accentColor, animation: active ? "heroTextUp 0.65s ease 0.1s both" : undefined }}
                >
                  {s.eyebrow}
                </p>

                {/* Headline */}
                <h1
                  className="text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mb-5"
                  style={{ color: "#0A2540", animation: active ? "heroTextUp 0.7s ease 0.2s both" : undefined }}
                >
                  {s.headline1}
                  <br />
                  <span style={{ color: accentColor }}>{s.headline2}</span>
                </h1>

                {/* Sub */}
                <p
                  className="text-base leading-relaxed mb-8 max-w-md"
                  style={{ color: "#4B6B8A", animation: active ? "heroTextUp 0.7s ease 0.32s both" : undefined }}
                >
                  {s.sub}
                </p>


                {/* CTAs */}
                <div
                  className="flex flex-wrap gap-4"
                  style={{ animation: active ? "heroTextUp 0.7s ease 0.44s both" : undefined }}
                >
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(s.waMessage || WA_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:opacity-90 shadow-lg"
                    style={{ background: accentColor, boxShadow: accentShadow }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Minta Penawaran Sekarang
                  </a>
                  <button
                    onClick={() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-lg border transition-all duration-200 hover:border-blue-400 hover:text-blue-700 bg-white/60 backdrop-blur-sm cursor-pointer"
                    style={{ color: "#0A2540", borderColor: "rgba(10,37,64,0.2)" }}
                  >
                    Lihat Katalog
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}




      {/* ── Dot indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
