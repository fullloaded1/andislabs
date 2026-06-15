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
    href: "/lovibond",
    color: "text-teal-600",
    bg: "group-hover/brand:bg-teal-50",
  },
  {
    name: "Daihan Labtech",
    slug: "labtech",
    tagline: "General Lab Equipment",
    logo: "/images/logos/daihanlabtechlogo.png",
    href: "/daihan-labtech",
    color: "text-blue-600",
    bg: "group-hover/brand:bg-blue-50",
  },
  {
    name: "Pyrex®",
    slug: "pyrex",
    tagline: "Lab Glassware",
    logo: "/images/logos/pyrexlogo.png",
    href: "/pyrex",
    color: "text-indigo-600",
    bg: "group-hover/brand:bg-indigo-50",
  },
  {
    name: "Andislab Custom",
    slug: "andislab-custom",
    tagline: "Custom Lab Furniture",
    logo: "/logo.png",
    href: "/andislab-custom",
    color: "text-slate-700",
    bg: "group-hover/brand:bg-slate-100",
  },
];

// ─── Category SVG icons ───────────────────────────────────────────
const categoryIcons: Record<string, React.ReactNode> = {
  "daihan-labtech": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  "andislab-custom": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  "lovibond": (
    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  "pyrex": (
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
              src="/logo-transparent.png"
              alt="Andis Lab"
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain animate-pulse"
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


          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://andislab.com/ready-stock"
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-[13px] px-5 py-2.5 rounded-lg font-bold transition-colors shadow-sm"
            >
              Ready Stock
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


            <div className="px-4 py-2 pb-4">
              <a
                href="https://andislab.com/ready-stock"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors shadow-sm"
              >
                Ready Stock
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
