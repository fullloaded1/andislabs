"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { waLink } from "@/lib/constants";

// ─── Brand data for mega-menu ─────────────────────────────────────
const brands = [
  {
    name: "Lovibond",
    slug: "lovibond",
    tagline: "Water Quality Analysis",
    logo: "/images/logos/lovibond-logo.png",
    href: "/general-lab",
    color: "text-blue-600",
    bg: "group-hover/brand:bg-blue-50",
  },
  {
    name: "Daihan Labtech",
    slug: "labtech",
    tagline: "General Lab Equipment",
    logo: "/images/logos/daihanlabtechlogo.png",
    href: "/general-lab",
    color: "text-sky-600",
    bg: "group-hover/brand:bg-sky-50",
  },
  {
    name: "Pyrex® / IWAKI",
    slug: "pyrex",
    tagline: "Lab Glassware",
    logo: "/images/logos/pyrexlogo.png",
    href: "/glassware",
    color: "text-red-600",
    bg: "group-hover/brand:bg-red-50",
  },
  {
    name: "Merck",
    slug: "merck",
    tagline: "Reagent & Chemicals",
    logo: "/images/logos/Logo_Merck_KGaA_2015.svg.png",
    href: "/reagent-consumable",
    color: "text-indigo-600",
    bg: "group-hover/brand:bg-indigo-50",
  },
];

// ─── Category SVG icons ───────────────────────────────────────────
const categoryIcons: Record<string, React.ReactNode> = {
  "general-lab": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  "custom-lab-furnitur": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  "reagent-consumable": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "glassware": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Hover handlers with debounce to prevent flickering
  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Andis Lab — ke beranda">
            <Image
              src="/logo.png"
              alt="Andis Lab"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[13.5px] font-medium">
            <Link href="/" className="text-slate-600 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/#tentang" className="text-slate-600 hover:text-teal-600 transition-colors">
              Tentang Kami
            </Link>

            {/* ══ Katalog Produk — Mega Menu Trigger ══ */}
            <div
              className="relative"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <button
                className="flex items-center gap-1.5 text-slate-600 hover:text-teal-600 transition-colors py-2 focus:outline-none"
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Katalog Produk
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ── Mega Menu Panel ── */}
              <div
                className={`
                  absolute top-full -left-32 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 mt-0 z-50
                  transition-all duration-250 origin-top
                  ${megaOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                `}
                role="menu"
              >
                <div className="grid grid-cols-2 divide-x divide-slate-100">

                  {/* ── Left Column: Brands ── */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">
                      Brand Partner
                    </p>
                    <div className="space-y-1">
                      {brands.map((b) => (
                        <Link
                          key={b.slug}
                          href={b.href}
                          className={`group/brand flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-200 ${b.bg} hover:shadow-sm`}
                          role="menuitem"
                          onClick={() => setMegaOpen(false)}
                        >
                          <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-100 overflow-hidden group-hover/brand:border-slate-200 transition-colors">
                            <Image
                              src={b.logo}
                              alt={b.name}
                              width={32}
                              height={32}
                              className="w-7 h-7 object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-[13px] font-bold text-slate-800 group-hover/brand:${b.color} transition-colors leading-tight`}>
                              {b.name}
                            </p>
                            <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                              {b.tagline}
                            </p>
                          </div>
                          <svg
                            className="w-3.5 h-3.5 text-slate-300 ml-auto flex-shrink-0 opacity-0 group-hover/brand:opacity-100 group-hover/brand:translate-x-0.5 transition-all"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ── Right Column: Categories ── */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 px-1">
                      Kategori Produk
                    </p>
                    <div className="space-y-1">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={cat.href}
                          className="group/cat flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                          role="menuitem"
                          onClick={() => setMegaOpen(false)}
                        >
                          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/cat:bg-teal-50 transition-colors">
                            {categoryIcons[cat.slug]}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-semibold text-slate-800 group-hover/cat:text-teal-600 transition-colors leading-tight">
                              {cat.label}
                            </p>
                            <p className="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                              {cat.deskripsi.slice(0, 52)}…
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* View all CTA */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href="/#kategori"
                        className="flex items-center gap-2 text-[12px] font-semibold text-teal-600 hover:text-teal-700 px-3 py-1.5 transition-colors"
                        onClick={() => setMegaOpen(false)}
                      >
                        Lihat Semua Produk
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/artikel" className="text-slate-600 hover:text-teal-600 transition-colors">
              Artikel
            </Link>
            <Link href="/#kontak" className="text-slate-600 hover:text-teal-600 transition-colors">
              Kontak
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ══ Mobile Menu ══ */}
        <div
          id="mobile-menu"
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
          `}
          aria-hidden={!mobileOpen}
        >
          <div className="border-t border-slate-100 py-3 space-y-0.5 bg-white">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#tentang"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Tentang Kami
            </Link>

            {/* Mobile: Brand Partners */}
            <div className="px-4 pt-3 pb-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Brand Partner
              </p>
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={b.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-2.5 text-sm text-slate-700 hover:text-teal-600 transition-colors border-b border-slate-50 last:border-0"
                >
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain opacity-60"
                    loading="lazy"
                  />
                  <span className="font-medium">{b.name}</span>
                  <span className="text-[10px] text-slate-400 ml-auto">{b.tagline}</span>
                </Link>
              ))}
            </div>

            {/* Mobile: Categories */}
            <div className="px-4 pt-3 pb-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Kategori Produk
              </p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={cat.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 py-2.5 text-sm text-slate-700 hover:text-teal-600 transition-colors border-b border-slate-50 last:border-0"
                >
                  {categoryIcons[cat.slug]}
                  {cat.label}
                </Link>
              ))}
            </div>

            <Link
              href="/artikel"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Artikel
            </Link>
            <Link
              href="/#kontak"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Kontak
            </Link>

            <div className="px-4 pt-2 pb-1">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-sm font-semibold px-4 py-3 rounded-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
