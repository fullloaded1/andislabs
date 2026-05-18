"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah Andis Lab melayani pembelian untuk instansi pemerintah atau BUMN?",
    answer:
      "Ya, kami melayani pembelian dari berbagai instansi, baik swasta, BUMN, instansi pendidikan, maupun pemerintahan. Kami juga bisa memfasilitasi kelengkapan dokumen perusahaan yang dibutuhkan untuk proses administrasi.",
  },
  {
    question: "Apakah ada garansi untuk alat-alat yang dijual?",
    answer:
      "Setiap produk instrumen dan alat elektronik dilengkapi dengan garansi resmi dari pabrik/brand, umumnya selama 1 tahun untuk spare part dan jasa servis. Syarat dan ketentuan berlaku.",
  },
  {
    question: "Apakah Andis Lab menyediakan jasa instalasi dan training?",
    answer:
      "Ya, kami menyediakan layanan after-sales berupa instalasi alat dan training pengoperasian oleh teknisi kami yang berpengalaman untuk wilayah tertentu. Silakan hubungi tim sales kami untuk detailnya.",
  },
  {
    question: "Bagaimana cara meminta penawaran harga (Quotation)?",
    answer:
      "Anda bisa klik tombol 'Tanya Harga' pada produk yang diinginkan, atau menghubungi WhatsApp resmi kami di 0821-2552-3466. Cantumkan nama, instansi/perusahaan, dan daftar barang yang dibutuhkan.",
  },
  {
    question: "Apakah Andis Lab melayani pengiriman ke luar kota/pulau?",
    answer:
      "Tentu. Kami memiliki jaringan ekspedisi darat, laut, maupun udara yang aman untuk mengirim pesanan Anda ke seluruh wilayah di Indonesia dengan packing kayu (jika diperlukan) agar alat tiba dengan selamat.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Bantuan
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            Jawaban untuk beberapa pertanyaan yang sering diajukan oleh pelanggan kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-slate-50 border-teal-100 shadow-sm" : "bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <h3
                    className={`font-semibold pr-8 text-sm md:text-base transition-colors ${
                      isOpen ? "text-teal-700" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-teal-100 text-teal-700" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Punya pertanyaan lain?</p>
          <a
            href="https://wa.me/6282125523466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-teal-600 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
