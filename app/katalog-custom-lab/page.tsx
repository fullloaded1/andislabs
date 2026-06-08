import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Katalog Custom Lab & Furniture | Andis Lab",
  description:
    "Katalog lengkap produk Custom Lab & Furniture dari Andis Lab: lemari asam, flammable cabinet, corrosive cabinet, wet scrubber, laminar air flow, fume hood, dan flokulator portabel.",
};

const year = new Date().getFullYear();

const customLabKatalog = [
  {
    slug: "flammable-cabinet",
    nama: "Flammable Storage Cabinet",
    deskripsiKategori:
      "Lemari penyimpanan bahan mudah terbakar dengan konstruksi baja galvanis berdinding ganda. Dilengkapi penampung tumpahan 2 inci, 2 lubang ventilasi berpenutup, dan kunci Cargo Lock.",
    produk: [
      {
        id: 1,
        nama: "Flammable Storage Cabinet",
        foto: "/images/custom-lab-pdf/prod_flammable_cabinet.jpeg",
        deskripsi:
          "Lemari penyimpanan bahan mudah terbakar dengan konstruksi baja galvanis berdinding ganda. Terdapat penampung tumpahan 50mm di bagian bawah dan 2 lubang ventilasi berpenutup.",
        spesifikasi: {
          Material: "Galvanized Steel ketebalan 1 mm",
          Finishing: "Powder Coating",
          Warna: "Kuning",
          Ventilasi: "2 lubang dengan penutup",
          Pintu: "Swing Door, kunci Cargo Lock",
        },
        model: [
          { kode: "FS 1", ukuran: "435×435×560 mm", kapasitas: "4 galon / 15 L", desain: "1 pintu / 1 rak" },
          { kode: "FS 2", ukuran: "590×460×890 mm", kapasitas: "12 galon / 45 L", desain: "1 pintu / 1 rak" },
          { kode: "FS 3", ukuran: "590×460×1650 mm", kapasitas: "22 galon / 83 L", desain: "1 pintu / 3 rak" },
          { kode: "FS 4", ukuran: "890×640×890 mm", kapasitas: "22 galon / 83 L", desain: "2 pintu / 1 rak" },
          { kode: "FS 5", ukuran: "1090×450×1650 mm", kapasitas: "45 galon / 170 L", desain: "2 pintu / 2 rak" },
          { kode: "FS 6", ukuran: "865×865×1650 mm", kapasitas: "60 galon / 227 L", desain: "2 pintu / 2 rak" },
        ],
      },
    ],
  },
  {
    slug: "corrosive-cabinet",
    nama: "Corrosive Storage Cabinet",
    deskripsiKategori:
      "Lemari penyimpanan bahan korosif terbuat dari Polypropylene (PP) yang tahan korosi jangka panjang. Ideal untuk penyimpanan asam kuat, basa kuat, dan bahan pengoksidasi.",
    produk: [
      {
        id: 2,
        nama: "Corrosive Storage Cabinet",
        foto: "/images/custom-lab-pdf/prod_corrosive_cabinet.jpeg",
        deskripsi:
          "Terbuat dari Polypropylene (PP) tahan korosi dengan durabilitas tinggi terhadap uap air dan paparan bahan kimia. Ringan namun kuat, mudah dibersihkan. Ideal untuk asam kuat, basa kuat, dan bahan pengoksidasi.",
        spesifikasi: {
          Material: "Polypropylene (PP)",
          Ventilasi: "2 lubang dengan penutup",
          Pintu: "Swing Door, kunci Cargo Lock",
          Penampungan: "50 mm di bagian bawah",
          Aplikasi: "Asam Kuat, Basa Kuat, Pengoksidasi",
        },
        model: [
          { kode: "CS 1", ukuran: "435×435×560 mm", kapasitas: "4 galon / 15 L", desain: "1 pintu / 1 rak" },
          { kode: "CS 2", ukuran: "590×460×890 mm", kapasitas: "12 galon / 45 L", desain: "1 pintu / 1 rak" },
          { kode: "CS 3", ukuran: "590×460×1650 mm", kapasitas: "22 galon / 83 L", desain: "1 pintu / 3 rak" },
          { kode: "CS 4", ukuran: "890×640×890 mm", kapasitas: "22 galon / 83 L", desain: "2 pintu / 1 rak" },
          { kode: "CS 5", ukuran: "1090×450×1650 mm", kapasitas: "45 galon / 170 L", desain: "2 pintu / 2 rak" },
          { kode: "CS 6", ukuran: "865×865×1650 mm", kapasitas: "60 galon / 227 L", desain: "2 pintu / 2 rak" },
        ],
      },
    ],
  },
  {
    slug: "wet-scrubber",
    nama: "Wet Scrubber",
    deskripsiKategori:
      "Sistem pengolahan udara buangan laboratorium untuk menetralisir gas dan partikel bahan kimia berbahaya dari exhaust lemari asam sebelum dibuang ke atmosfer.",
    produk: [
      {
        id: 3,
        nama: "Wet Scrubber Laboratorium",
        foto: "/images/custom-lab-pdf/prod_wet_scrubber.jpeg",
        deskripsi:
          "Wet scrubber berbahan PVC (Polyvinyl Chloride) tahan bahan kimia korosif. Dilengkapi Nozzle Spray dan Pall Ring Polypropylene untuk distribusi air merata, dan Pompa Air Magnetic anti-korosi.",
        spesifikasi: {
          Dimensi: "600×600×1520 mm",
          "Material Utama": "PVC ketebalan ±8 mm",
          Pompa: "Magnetic Anti Korosi",
          "Daya Pompa": "1,5 kW",
          "Volume Air": "150 ± 5 liter",
          "Jalur Gas": "PVC Ø6–8 inchi",
          "Pengurai Kabut": "Demister Polypropylene",
        },
        model: [
          { kode: "WS-Standard", ukuran: "600×600×1520 mm", kapasitas: "150±5 L air", desain: "Single unit" },
          { kode: "WS-Custom", ukuran: "Sesuai permintaan", kapasitas: "Custom", desain: "Multi-hood" },
        ],
      },
    ],
  },
  {
    slug: "fume-hood",
    nama: "Fume Hood (Lemari Asam)",
    deskripsiKategori:
      "Lemari asam / fume hood tersedia dalam 4 material berbeda: Polypropylene (PP), Metal Galvanized (MG), Stainless Steel (SS), dan Plywood (P). Tersedia varian manual dan digital.",
    produk: [
      {
        id: 4,
        nama: "Fume Hood Polypropylene (FH PP)",
        foto: "/images/custom-lab-pdf/prod_fume_hood_pp.jpeg",
        deskripsi:
          "Fume hood berbahan Polypropylene tahan asam dan basa kuat. Tersedia varian standar dan digital dengan monitor face velocity.",
        spesifikasi: {
          Material: "Polypropylene (PP)",
          Dimensi: "P×L×T (mm)",
          Tinggi: "2300 mm",
          Kontrol: "Manual / Digital",
        },
        model: [
          { kode: "FH 900 PP", ukuran: "900×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1200 PP", ukuran: "1200×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1500 PP", ukuran: "1500×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1800 PP", ukuran: "1800×740×2300", kapasitas: "", desain: "Standar" },
        ],
      },
      {
        id: 5,
        nama: "Fume Hood Metal Galvanized (FH MG)",
        foto: "/images/custom-lab-pdf/prod_fume_hood_mg.jpeg",
        deskripsi:
          "Fume hood berbahan baja galvanis dengan finishing powder coating anti-karat. Cocok untuk pengerjaan bahan kimia umum di laboratorium.",
        spesifikasi: {
          Material: "Metal Galvanized",
          Dimensi: "P×L×T (mm)",
          Tinggi: "2300 mm",
          Kontrol: "Manual / Digital",
        },
        model: [
          { kode: "FH 900 MG", ukuran: "900×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1200 MG", ukuran: "1200×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1500 MG", ukuran: "1500×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1800 MG", ukuran: "1800×740×2300", kapasitas: "", desain: "Standar" },
        ],
      },
      {
        id: 6,
        nama: "Fume Hood Stainless Steel (FH SS)",
        foto: "/images/custom-lab-pdf/prod_fume_hood_ss.jpeg",
        deskripsi:
          "Fume hood premium berbahan stainless steel 304, tahan korosi dan mudah dibersihkan. Ideal untuk laboratorium farmasi, makanan, dan bioteknologi.",
        spesifikasi: {
          Material: "Stainless Steel 304",
          Dimensi: "P×L×T (mm)",
          Tinggi: "2300 mm",
          Kontrol: "Manual / Digital",
        },
        model: [
          { kode: "FH 900 SS", ukuran: "900×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1200 SS", ukuran: "1200×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1500 SS", ukuran: "1500×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1800 SS", ukuran: "1800×740×2300", kapasitas: "", desain: "Standar" },
        ],
      },
      {
        id: 7,
        nama: "Fume Hood Plywood (FH P)",
        foto: "/images/custom-lab-pdf/prod_fume_hood_p.jpeg",
        deskripsi:
          "Fume hood berbahan plywood berkualitas dengan lapisan HPL anti-kimia. Pilihan ekonomis untuk laboratorium pendidikan dan penelitian umum.",
        spesifikasi: {
          Material: "Plywood + HPL",
          Dimensi: "P×L×T (mm)",
          Tinggi: "2300 mm",
          Kontrol: "Manual / Digital",
        },
        model: [
          { kode: "FH 900 P", ukuran: "900×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1200 P", ukuran: "1200×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1500 P", ukuran: "1500×740×2300", kapasitas: "", desain: "Standar" },
          { kode: "FH 1800 P", ukuran: "1800×740×2300", kapasitas: "", desain: "Standar" },
        ],
      },
    ],
  },
  {
    slug: "flokulator",
    nama: "Flokulator Portabel",
    deskripsiKategori:
      "Alat uji simulasi proses koagulasi dan flokulasi pada pengolahan air atau air limbah skala laboratorium. Portabel dan dapat dibawa ke lokasi pengujian.",
    produk: [
      {
        id: 8,
        nama: "Flokulator Portabel FB-4S",
        foto: "/images/custom-lab-pdf/prod_flokulator.png",
        deskripsi:
          "Flokulator portabel dengan 4 spindel, kontrol digital LCD layar sentuh 4,3 inchi. Kecepatan 10–300 rpm, pengaturan waktu 1–999 detik/menit. 5 slot kustomisasi pengaturan.",
        spesifikasi: {
          Model: "FB-4S",
          Dimensi: "300×320×365 mm",
          "Material Utama": "Metal Galvanized + Powder Coating",
          "Batang Pengaduk": "Stainless Steel 304",
          "Sistem Kontrol": "LCD Layar Sentuh 4,3 inchi",
          "Kecepatan": "10–300 rpm",
          "Pengaturan Waktu": "1–999 detik/menit",
          "Jumlah Pengaduk": "4 posisi",
          Daya: "15 watt",
          Berat: "6 kg",
        },
        model: [
          { kode: "FB-4S", ukuran: "300×320×365 mm", kapasitas: "4 posisi pengadukan", desain: "Digital" },
        ],
      },
    ],
  },
  {
    slug: "laminar-air-flow",
    nama: "Laminar Air Flow Vertikal (LAF V)",
    deskripsiKategori:
      "Laminar Air Flow Cabinet vertikal untuk menciptakan area kerja steril. Tersedia 3 varian: LAF V PRIME (PLC+HMI 7 inci), LAF V Digital (Touchscreen 5 inci), dan LAF V Manual (Magnehelic Gauge).",
    produk: [
      {
        id: 9,
        nama: "LAF V PRIME",
        foto: "/images/custom-lab-pdf/prod_laf_prime.jpeg",
        deskripsi:
          "Laminar Air Flow vertikal varian tertinggi, dilengkapi Logic Panel pada PLC dan HMI Display Layar Sentuh 7 inchi untuk kontrol penuh aliran udara dan filter HEPA.",
        spesifikasi: {
          Kontrol: "PLC + HMI Touchscreen 7 inchi",
          Indikator: "HEPA Filter Digital",
          "Penggerak Sash": "Manual",
          Kalibrasi: "Internal / Lembaga KAN",
        },
        model: [
          { kode: "LAF Mini V PRIME", ukuran: "790×770×1820", kapasitas: "650×600×550 (dalam)", desain: "Prime" },
          { kode: "LAF 1000 V PRIME", ukuran: "1000×770×1820", kapasitas: "945×600×550 (dalam)", desain: "Prime" },
          { kode: "LAF 1400 V PRIME", ukuran: "1400×770×1820", kapasitas: "1250×600×550 (dalam)", desain: "Prime" },
          { kode: "LAF 1900 V PRIME", ukuran: "1900×770×1820", kapasitas: "1860×600×550 (dalam)", desain: "Prime" },
        ],
      },
      {
        id: 10,
        nama: "LAF V Digital",
        foto: "/images/custom-lab-pdf/prod_laf_digital.jpeg",
        deskripsi:
          "Laminar Air Flow vertikal dengan Display Layar Sentuh 5 inchi untuk pengaturan kecepatan aliran udara blower. Indikator tekanan HEPA filter ditampilkan di layar.",
        spesifikasi: {
          Kontrol: "Display Touchscreen 5 inchi",
          Indikator: "Nilai Tekanan pada Display",
          "Penggerak Sash": "Manual",
          Kalibrasi: "Internal / Lembaga KAN",
        },
        model: [
          { kode: "LAF Mini V Digital", ukuran: "790×770×1820", kapasitas: "650×600×550 (dalam)", desain: "Digital" },
          { kode: "LAF 1000 V Digital", ukuran: "1000×770×1820", kapasitas: "945×600×550 (dalam)", desain: "Digital" },
          { kode: "LAF 1400 V Digital", ukuran: "1400×770×1820", kapasitas: "1250×600×550 (dalam)", desain: "Digital" },
          { kode: "LAF 1900 V Digital", ukuran: "1900×770×1820", kapasitas: "1860×600×550 (dalam)", desain: "Digital" },
        ],
      },
      {
        id: 11,
        nama: "LAF V (Manual / Standard)",
        foto: "/images/custom-lab-pdf/prod_laf_standard.jpeg",
        deskripsi:
          "Laminar Air Flow vertikal standar dengan Magnehelic Pressure Gauge sebagai indikator kelaikan HEPA Filter dan Potensiometer Dimmer untuk mengatur aliran udara blower.",
        spesifikasi: {
          Kontrol: "Potensiometer Dimmer Berskala",
          Indikator: "Magnehelic Pressure Gauge",
          "Penggerak Sash": "Manual",
          Kalibrasi: "Internal / Lembaga KAN",
        },
        model: [
          { kode: "LAF Mini V", ukuran: "790×770×1820", kapasitas: "650×600×550 (dalam)", desain: "Manual" },
          { kode: "LAF 1000 V", ukuran: "1000×770×1820", kapasitas: "945×600×550 (dalam)", desain: "Manual" },
          { kode: "LAF 1400 V", ukuran: "1400×770×1820", kapasitas: "1250×600×550 (dalam)", desain: "Manual" },
          { kode: "LAF 1900 V", ukuran: "1900×770×1820", kapasitas: "1860×600×550 (dalam)", desain: "Manual" },
        ],
      },
    ],
  },
];

const totalProduk = customLabKatalog.reduce((acc, k) => acc + k.produk.length, 0);

export default function KatalogCustomLabPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @media print {
          nav, footer, .floating-wa, .no-print { display: none !important; }
          body { background: white !important; }
          main { padding: 0 !important; margin: 0 !important; }
          @page { size: A4; margin: 14mm 12mm 16mm 12mm; }
          .kat-cover { page-break-after: always; }
          .kat-section { page-break-before: always; }
          .kat-card { break-inside: avoid; }
          .kat-wrap { max-width: 100% !important; padding: 0 !important; }
          .screen-bar { display: none !important; }
        }
      `}</style>

      <div className="kat-wrap" style={{ maxWidth: 880, margin: "0 auto", fontFamily: "'Inter', sans-serif" }}>

        {/* ─── SCREEN ACTION BAR ─── */}
        <div className="screen-bar no-print" style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "#fff", padding: "14px 24px",
          borderBottom: "1px solid #e5e7eb",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111827" }}>
              Katalog Custom Lab & Furniture
            </h2>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "#6b7280" }}>
              {totalProduk} produk dari Andis Lab — Cetak atau simpan sebagai PDF
            </p>
          </div>
          <PrintButton />
        </div>

        {/* ═══════ COVER ═══════ */}
        <div className="kat-cover" style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center",
          padding: "60px 40px", textAlign: "center",
          background: "linear-gradient(160deg, #f0fdf8 0%, #ffffff 50%, #f0f9ff 100%)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,122,95,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -60, left: -60,
            width: 240, height: 240, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13,122,95,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ marginBottom: 48, position: "relative" }}>
            <div style={{
              width: 80, height: 80, background: "#fff", borderRadius: 20,
              boxShadow: "0 4px 24px rgba(13,122,95,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <Image src="/logo.png" alt="Andis Lab" width={60} height={60} style={{ objectFit: "contain" }} />
            </div>
            <h1 style={{ margin: 0, fontSize: 28, fontWeight: 900, color: "#111827", letterSpacing: -0.5 }}>
              ANDIS LAB
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: 12, color: "#0D7A5F", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600 }}>
              Solusi Terpadu Laboratorium Indonesia
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ height: 1, width: 60, background: "#d1d5db" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D7A5F" }} />
            <div style={{ height: 1, width: 60, background: "#d1d5db" }} />
          </div>

          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#0D7A5F", letterSpacing: 3.5, textTransform: "uppercase" }}>
            Katalog Produk
          </p>
          <h2 style={{ margin: "12px 0 8px", fontSize: 42, fontWeight: 900, color: "#111827", lineHeight: 1.1, letterSpacing: -1 }}>
            Custom Lab
          </h2>
          <h3 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 700, color: "#374151", letterSpacing: -0.3 }}>
            & Furniture Fabrikasi
          </h3>
          <p style={{ margin: "0 0 40px", fontSize: 13.5, color: "#6b7280", maxWidth: 440, lineHeight: 1.7 }}>
            Flammable Cabinet · Corrosive Cabinet · Wet Scrubber
            Fume Hood · Flokulator Portabel · Laminar Air Flow
          </p>

          <div style={{
            display: "flex", gap: 0, background: "#fff", borderRadius: 14,
            boxShadow: "0 2px 20px rgba(0,0,0,0.07)", overflow: "hidden",
            border: "1px solid #f3f4f6",
          }}>
            {[
              { value: customLabKatalog.length, label: "Kategori" },
              { value: totalProduk, label: "Produk" },
              { value: "Custom", label: "Ukuran" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "20px 32px", textAlign: "center",
                borderRight: i < 2 ? "1px solid #f3f4f6" : "none",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#111827" }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 52, fontSize: 13, color: "#9ca3af" }}>
            <p style={{ margin: 0 }}>Tel: +62 821-2552-3466 &nbsp;·&nbsp; Email: sales@andislabs.com</p>
            <p style={{ margin: "6px 0 0", fontWeight: 700, color: "#0D7A5F", fontSize: 14 }}>www.andislabs.com</p>
            <p style={{ margin: "12px 0 0", fontSize: 11, color: "#d1d5db" }}>© {year} Andis Lab. All Rights Reserved.</p>
          </div>
        </div>

        {/* ═══════ DAFTAR ISI ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", padding: "60px 40px", background: "#fff",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ width: 4, height: 32, background: "#0D7A5F", borderRadius: 2 }} />
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Daftar Isi</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {customLabKatalog.map((kat, i) => (
              <div key={kat.slug} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px",
                background: i % 2 === 0 ? "#fafafa" : "#fff",
                borderRadius: 10,
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 800, color: "#0D7A5F",
                  minWidth: 36, height: 36, borderRadius: 8,
                  background: "#f0fdf8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#111827", flex: 1 }}>
                  {kat.nama}
                </span>
                <span style={{
                  fontSize: 11.5, color: "#0D7A5F", fontWeight: 600,
                  background: "#f0fdf8", padding: "3px 12px", borderRadius: 20,
                }}>
                  {kat.produk.length} produk
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 40, padding: "20px 24px",
            background: "linear-gradient(135deg, #f0fdf8, #f0f9ff)",
            borderRadius: 12, borderLeft: "4px solid #0D7A5F",
            fontSize: 13, lineHeight: 1.75, color: "#374151",
          }}>
            <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#0D7A5F", fontSize: 14 }}>
              Tentang Andis Lab Custom
            </p>
            Andis Lab menyediakan layanan fabrikasi furniture dan peralatan laboratorium sesuai kebutuhan spesifik klien.
            Semua produk diproduksi dengan material berkualitas tinggi, bergaransi, dan dapat dikustomisasi ukurannya.
            Hubungi tim kami untuk konsultasi desain dan penawaran harga terbaik.
          </div>
        </div>

        {/* ═══════ HALAMAN KATEGORI ═══════ */}
        {customLabKatalog.map((kat, catIdx) => (
          <div key={kat.slug} className="kat-section" style={{ padding: "36px 28px", background: "#fff" }}>
            {/* Category Header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              marginBottom: 20, paddingBottom: 16, borderBottom: "2px solid #111827",
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 800, color: "#fff",
                    background: "#0D7A5F", padding: "3px 10px", borderRadius: 6, letterSpacing: 1,
                  }}>
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#111827" }}>
                    {kat.nama}
                  </h2>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280", lineHeight: 1.6, maxWidth: 600 }}>
                  {kat.deskripsiKategori}
                </p>
              </div>
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                padding: "8px 14px", background: "#f0fdf8", borderRadius: 10,
                border: "1px solid #d1fae5", flexShrink: 0,
              }}>
                <Image src="/logo.png" alt="Andis Lab" width={36} height={36} style={{ objectFit: "contain" }} />
                <span style={{ fontSize: 9, fontWeight: 700, color: "#0D7A5F", letterSpacing: 1, textTransform: "uppercase" }}>
                  Andis Lab
                </span>
              </div>
            </div>

            {/* Products */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {kat.produk.map((p, pIdx) => (
                <div key={p.id} className="kat-card" style={{
                  display: "flex", gap: 20, padding: "18px 0",
                  borderBottom: pIdx < kat.produk.length - 1 ? "1px solid #f3f4f6" : "none",
                }}>
                  {/* Photo */}
                  <div style={{
                    width: 140, minWidth: 140, height: 110,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#f9fafb", borderRadius: 8, overflow: "hidden",
                    border: "1px solid #f3f4f6",
                  }}>
                    <Image
                      src={p.foto} alt={p.nama}
                      width={130} height={100}
                      style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
                      {p.nama}
                    </h3>
                    <p style={{ margin: "4px 0 8px", fontSize: 11.5, color: "#4b5563", lineHeight: 1.6 }}>
                      {p.deskripsi}
                    </p>

                    {/* Specs */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 16px", marginBottom: 8 }}>
                      {Object.entries(p.spesifikasi).map(([k, v]) => (
                        <span key={k} style={{ fontSize: 10.5, color: "#6b7280" }}>
                          <span style={{ fontWeight: 700, color: "#374151" }}>{k}:</span> {v}
                        </span>
                      ))}
                    </div>

                    {/* Model table */}
                    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: 6 }}>
                      <thead>
                        <tr style={{ background: "#f3f4f6" }}>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left", borderRadius: "4px 0 0 0" }}>Model</th>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Ukuran (mm)</th>
                          {p.model[0]?.kapasitas && <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Kapasitas</th>}
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left", borderRadius: "0 4px 0 0" }}>Desain</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.model.map((m, mi) => (
                          <tr key={mi} style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ fontSize: 10, color: "#0D7A5F", fontWeight: 700, padding: "4px 8px" }}>{m.kode}</td>
                            <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.ukuran}</td>
                            {m.kapasitas && <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.kapasitas}</td>}
                            <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.desain}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Page footer */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              marginTop: 16, paddingTop: 10, borderTop: "1px solid #e5e7eb",
              fontSize: 10, color: "#9ca3af",
            }}>
              <span>Andis Lab — Katalog Custom Lab & Furniture | www.andislabs.com</span>
              <span>Halaman {catIdx + 3}</span>
            </div>
          </div>
        ))}

        {/* ═══════ HALAMAN BELAKANG ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          padding: "60px 40px",
          background: "linear-gradient(160deg, #f0fdf8 0%, #ffffff 60%, #f0f9ff 100%)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(13,122,95,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ textAlign: "center", maxWidth: 480, position: "relative" }}>
            <div style={{
              width: 90, height: 90, background: "#fff", borderRadius: 22,
              boxShadow: "0 4px 28px rgba(13,122,95,0.14)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <Image src="/logo.png" alt="Andis Lab" width={68} height={68} style={{ objectFit: "contain" }} />
            </div>

            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 900, color: "#111827" }}>Hubungi Kami</h2>
            <p style={{ margin: "10px 0 32px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
              Dapatkan konsultasi gratis, penawaran harga terbaik,<br />
              dan desain custom sesuai kebutuhan laboratorium Anda.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, textAlign: "left" }}>
              {[
                { label: "Telepon / WhatsApp", value: "+62 821-2552-3466" },
                { label: "Email", value: "sales@andislabs.com" },
                { label: "Website", value: "www.andislabs.com" },
                { label: "Lokasi", value: "Jakarta, Indonesia" },
              ].map((c) => (
                <div key={c.label} style={{
                  padding: "16px 18px", background: "#fff", borderRadius: 10,
                  border: "1px solid #e5e7eb", boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 5 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{c.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#0D7A5F" }}>
                Solusi Terpadu Laboratorium Indonesia
              </p>
              <p style={{ margin: "10px 0 0", fontSize: 11, color: "#9ca3af" }}>
                © {year} Andis Lab. Semua spesifikasi dapat berubah tanpa pemberitahuan terlebih dahulu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
