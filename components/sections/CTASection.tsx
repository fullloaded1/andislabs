// CTA Section — strong WhatsApp CTA, teal gradient background

import { WA_NUMBER, waLink, SITE_EMAIL, SITE_PHONE } from "@/lib/constants";

const WA_MESSAGE =
  "Halo Andis Lab, saya ingin berkonsultasi mengenai kebutuhan peralatan laboratorium kami.";

export default function CTASection() {
  return (
    <section className="py-20" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl text-center px-8 py-20 md:px-16"
          style={{
            background: "linear-gradient(135deg, #0f766e 0%, #0891b2 60%, #1d4ed8 100%)",
          }}
        >
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{
              backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Decorative hexagons */}
          <div
            className="absolute -top-10 -left-10 w-40 h-46 bg-white/5"
            aria-hidden="true"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div
            className="absolute -bottom-10 -right-10 w-56 h-64 bg-white/5"
            aria-hidden="true"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-teal-200 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Konsultasi 100% Gratis
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Siap Upgrade<br />
              Laboratorium Anda?
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Hubungi tim ahli kami sekarang. Kami akan membantu menemukan solusi peralatan
              laboratorium yang tepat sesuai kebutuhan dan anggaran Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={waLink(WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-teal-700 font-black px-10 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-xl text-sm min-w-[220px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Sekarang
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm min-w-[180px]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </div>

            <p className="text-white/50 text-xs">
              {SITE_PHONE} · {SITE_EMAIL} · Respons dalam 1 jam kerja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
