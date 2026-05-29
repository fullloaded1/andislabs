"use client";

import { Download, FileText, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { waLink } from "@/lib/constants";

const brands = [
  {
    id: "lovibond",
    tag: "Water Analysis",
    title: "Lovibond®",
    subtitle: "Instrumen Analisis Kualitas Air",
    description:
      "Solusi lengkap untuk analisis kualitas air, mencakup fotometer, colorimeter, turbidimeter, dan kit pengujian presisi untuk laboratorium maupun lapangan.",
    logo: "/images/logos/lovibond-logo.png",
    accent: "blue" as const,
    href: waLink("Halo Andis Lab, saya tertarik dengan produk Lovibond. Boleh saya melihat katalog terbarunya?"),
    ctaLabel: "Lihat Katalog Lovibond",
    isExternal: true,
  },
  {
    id: "labtech",
    tag: "Lab Equipment",
    title: "Daihan Labtech",
    subtitle: "Peralatan Laboratorium Umum",
    description:
      "Oven, incubator, centrifuge, water bath, stirrer, dan peralatan pendukung laboratorium berkualitas tinggi untuk riset dan industri.",
    logo: "/images/logos/daihanlabtechlogo.png",
    accent: "teal" as const,
    href: "/katalog-pdf",
    ctaLabel: "Lihat Katalog Labtech",
    isExternal: false,
  },
  {
    id: "custom",
    tag: "Custom Lab",
    title: "Andislab Custom",
    subtitle: "Furnitur Laboratorium Kustom",
    description:
      "Perancangan dan instalasi furnitur laboratorium kustom meliputi Island Bench, Wall Bench, Fume Hood, serta solusi ruang lab terpadu sesuai standar keamanan internasional.",
    logo: "/logo.png",
    accent: "slate" as const,
    href: "/Andislabkatalog.pdf",
    ctaLabel: "Lihat Portofolio Custom Lab",
    isExternal: true,
  },
];

const comingSoon = [
  {
    name: "Pyrex",
    category: "Glassware",
    logo: "/images/logos/pyrexlogo.PNG",
  },
  {
    name: "Merck",
    category: "Reagen",
    logo: "/images/logos/images.png",
  },
];

const accentMap = {
  blue: {
    tag: "text-blue-600",
    tagBg: "bg-blue-50",
    icon: "text-blue-600",
    bar: "bg-blue-600",
    btn: "bg-blue-600 hover:bg-blue-700",
    ring: "group-hover:ring-blue-200",
    glow: "group-hover:shadow-blue-100/60",
  },
  teal: {
    tag: "text-teal-600",
    tagBg: "bg-teal-50",
    icon: "text-teal-600",
    bar: "bg-teal-600",
    btn: "bg-teal-600 hover:bg-teal-700",
    ring: "group-hover:ring-teal-200",
    glow: "group-hover:shadow-teal-100/60",
  },
  slate: {
    tag: "text-slate-700",
    tagBg: "bg-slate-100",
    icon: "text-slate-700",
    bar: "bg-slate-800",
    btn: "bg-slate-800 hover:bg-slate-700",
    ring: "group-hover:ring-slate-200",
    glow: "group-hover:shadow-slate-100/60",
  },
};

export default function KatalogSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="katalog" className="py-24 bg-gradient-to-b from-slate-50/60 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.28em] mb-3">
            Unduh Katalog
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Katalog Solusi Laboratorium
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-base">
            Unduh katalog terbaru kami untuk menemukan instrumen presisi dan
            solusi furnitur kustom sesuai kebutuhan laboratorium Anda.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {brands.map((brand) => {
            const colors = accentMap[brand.accent];
            const isHovered = hoveredCard === brand.id;

            return (
              <div
                key={brand.id}
                className={`group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-300 ease-out ring-1 ring-transparent ${colors.ring} ${colors.glow} ${
                  isHovered ? "shadow-xl -translate-y-1" : "shadow-sm"
                }`}
                onMouseEnter={() => setHoveredCard(brand.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top accent bar */}
                <div
                  className={`h-0.5 w-full ${colors.bar} transition-all duration-300 ${
                    isHovered ? "h-1" : ""
                  }`}
                />

                {/* Logo area */}
                <div className="flex items-center justify-center h-24 px-6 bg-slate-50/70 border-b border-slate-100/80">
                  <img
                    src={brand.logo}
                    alt={brand.title}
                    className="transition-all duration-300"
                    style={{
                      height: brand.id === "custom" ? 52 : 34,
                      width: "auto",
                      objectFit: "contain",
                      filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                      opacity: isHovered ? 1 : 0.65,
                      mixBlendMode: "multiply",
                      transform: brand.id === "custom" ? "scale(1.6)" : "none",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Tag */}
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${colors.tagBg} ${colors.tag}`}
                    >
                      <FileText className="w-3 h-3" />
                      {brand.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1 leading-tight">
                    {brand.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-5">
                    {brand.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={brand.href}
                    {...(brand.isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`inline-flex items-center justify-center gap-2 w-full text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 ${colors.btn}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {brand.ctaLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-10">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Segera Hadir
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {comingSoon.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-dashed border-slate-200 bg-white/70"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    height: 22,
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.4,
                    mixBlendMode: "multiply",
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400">{item.category}</span>
                </div>
                <Clock className="w-3.5 h-3.5 text-slate-300 ml-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
