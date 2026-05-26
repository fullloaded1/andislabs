import Image from "next/image";
import { Download, FileText } from "lucide-react";

export default function KatalogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: General Lab */}
          <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-blue-600" />

            {/* Logo area */}
            <div className="flex items-center justify-center gap-10 px-8 py-8 bg-slate-50 border-b border-slate-100" style={{ minHeight: 96 }}>
              <img
                src="/images/logos/lovibond-logo.png"
                alt="Lovibond"
                style={{ height: 36, width: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.65, mixBlendMode: "multiply" }}
              />
              <div className="w-px h-8 bg-slate-200" />
              <img
                src="/images/logos/daihanlabtechlogo.png"
                alt="Daihan Labtech"
                style={{ height: 36, width: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.65, mixBlendMode: "multiply" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  General Lab
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Instrumen & Alat Ukur Presisi
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                Katalog lengkap instrumen presisi untuk kebutuhan analisis dan pengujian
                kualitas air, spektrofotometri, dan pengukuran parameter laboratorium dari
                Lovibond® dan Daihan Labtech.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center justify-center gap-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download Katalog General Lab
              </a>
            </div>
          </div>

          {/* Card 2: Custom Lab */}
          <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-slate-800" />

            {/* Logo area */}
            <div className="flex items-center justify-center px-8 py-8 bg-slate-50 border-b border-slate-100" style={{ minHeight: 96 }}>
              <img
                src="/logo.png"
                alt="Andislab"
                style={{ height: 40, width: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.65, mixBlendMode: "multiply" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <FileText className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  Custom Lab
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Furnitur Laboratorium Kustom
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                Portofolio perancangan dan instalasi furnitur laboratorium kustom —
                Island Bench, Wall Bench, Fume Hood, dan solusi ruang laboratorium
                terpadu sesuai standar keamanan internasional.
              </p>

              <a
                href="/Andislabkatalog.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 w-full bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download Portofolio Custom Lab
              </a>
            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Segera hadir — Katalog{" "}
            <span className="font-semibold text-slate-500">Pyrex</span> (Glassware) dan{" "}
            <span className="font-semibold text-slate-500">Merck</span> (Reagen)
          </p>
        </div>

      </div>
    </section>
  );
}
