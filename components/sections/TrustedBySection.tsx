"use client";

const partners = [
  { name: "Universitas Indonesia",      icon: "🏛️" },
  { name: "Institut Teknologi Bandung", icon: "⚗️" },
  { name: "BRIN",                        icon: "🔬" },
  { name: "RS Cipto Mangunkusumo",      icon: "🏥" },
  { name: "PT Kalbe Farma",             icon: "💊" },
  { name: "LIPI",                        icon: "🧪" },
  { name: "Univ. Gadjah Mada",          icon: "🎓" },
  { name: "Kemenkes RI",                 icon: "🏢" },
  { name: "PT Kimia Farma",             icon: "⚕️" },
  { name: "Badan POM RI",              icon: "🔰" },
];

export default function TrustedBySection() {
  // Duplicate for seamless infinite loop
  const track = [...partners, ...partners];

  return (
    <section className="py-8 bg-white border-t border-slate-100">
      <div className="flex items-center gap-6 overflow-hidden">
        {/* Static label */}
        <div className="pl-6 md:pl-16 flex-shrink-0">
          <span className="text-[13px] font-bold text-blue-700 whitespace-nowrap tracking-wide">
            Trusted Partner:
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200 flex-shrink-0" />

        {/* Scrolling area */}
        <div className="flex-1 overflow-hidden relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Marquee track */}
          <div
            className="flex items-center gap-10 animate-marquee"
            style={{ width: "max-content" }}
          >
            {track.map((p, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors cursor-default">
                  <span className="text-base leading-none">{p.icon}</span>
                  <span className="text-[13px] font-semibold whitespace-nowrap">{p.name}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-slate-200 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-b border-slate-100" />
    </section>
  );
}
