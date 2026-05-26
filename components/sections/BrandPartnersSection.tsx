const brands = [
  {
    name: "Lovibond",
    logo: "/images/logos/lovibond-logo.png",
    multiply: false,
  },
  {
    name: "Pyrex",
    logo: "/images/logos/pyrexlogo.png",
    multiply: true,
  },
  {
    name: "Daihan Labtech",
    logo: "/images/logos/daihanlabtechlogo.png",
    multiply: false,
  },
];

export default function BrandPartnersSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-10 uppercase tracking-widest">
          Authorized Distributor Resmi
        </p>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {brands.map((b) => (
            <div
              key={b.name}
              className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              style={{
                width: 160,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={b.logo}
                alt={b.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  mixBlendMode: b.multiply ? "multiply" : "normal",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
