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
    name: "Yuasa Battery",
    logo: "/images/logos/yuasa_battery_cropped.jpg",
    multiply: false,
  },
  {
    name: "Daihan Labtech",
    logo: "/images/logos/daihanlabtechlogo.png",
    multiply: false,
  },
  {
    name: "Merck",
    logo: "/images/logos/Logo_Merck_KGaA_2015.svg.png",
    multiply: false,
  },
];

export default function BrandPartnersSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base md:text-lg font-bold text-slate-500 mb-12 uppercase tracking-[0.25em]">
          Authorized Distributor Resmi
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-16">
          {brands.map((b) => (
            <div
              key={b.name}
              className="w-28 sm:w-32 md:w-40 lg:w-48 h-16 md:h-20 flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              style={{
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
