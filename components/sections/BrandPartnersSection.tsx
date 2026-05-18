import Image from "next/image";

const brands = [
  { name: "Merck", logo: "https://andislab.com/wp-content/uploads/2026/02/merck.png" }, // I'll just use text fallbacks if no image
  { name: "IWAKI", logo: "https://andislab.com/wp-content/uploads/2026/02/iwaki.png" },
  { name: "DLAB", logo: "https://andislab.com/wp-content/uploads/2026/02/dlab.png" },
  { name: "Thermo Fisher", logo: "https://andislab.com/wp-content/uploads/2026/02/thermo.png" },
  { name: "Hanna Instruments", logo: "https://andislab.com/wp-content/uploads/2026/02/hanna.png" },
  { name: "Eppendorf", logo: "https://andislab.com/wp-content/uploads/2026/02/eppendorf.png" },
];

export default function BrandPartnersSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">
          Dipercaya oleh Brand Global Terkemuka
        </p>
        
        {/* Simple marquee effect with flex */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black text-slate-800 tracking-tighter">MERCK</div>
          <div className="text-2xl font-black text-red-700 tracking-wider">IWAKI</div>
          <div className="text-2xl font-bold text-blue-700">DLAB</div>
          <div className="text-2xl font-bold text-slate-800">ThermoFisher</div>
          <div className="text-2xl font-black text-orange-600">HANNA</div>
          <div className="text-2xl font-bold text-blue-600">eppendorf</div>
        </div>
      </div>
    </section>
  );
}
