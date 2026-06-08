import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Katalog Produk Lovibond | Andis Lab",
  description:
    "Katalog lengkap produk Lovibond dari Andis Lab: alat pengujian kualitas air, BOD cabinet, COD thermoreactor, floc tester, SD hand-held series, cooling water test kit, dan lainnya.",
};

const year = new Date().getFullYear();

const lovibondKatalog = [
  {
    slug: "bod-cabinet",
    nama: "BOD – Thermostatic Cabinets",
    deskripsiKategori:
      "Incubator termostatik Lovibond untuk pengujian Biochemical Oxygen Demand (BOD). Rentang suhu 2–40°C, dapat digunakan di laboratorium, dairies, dan mikrobiologi.",
    produk: [
      {
        id: 1,
        nama: "BOD Thermostatic Cabinet",
        foto: "/images/lovibond/bod.PNG",
        deskripsi:
          "Incubator untuk inkubasi 2–40°C yang dapat digunakan untuk berbagai aplikasi termasuk dairies, laboratorium, dan mikrobiologi. Dilengkapi stop kontak internal untuk stirring unit dan peralatan listrik lainnya.",
        fitur: [
          "Rentang suhu 2°C hingga 40°C",
          "Adjustable steps 0,1°C",
          "20°C BOD determination",
          "4°C Storage of waste water samples",
          "25°C Enzyme activity (TTC test)",
          "37°C Colony count",
          "Backlite Display & CE approval",
        ],
        spesifikasi: {
          "Rentang Suhu": "2°C – 40°C",
          "Akurasi": "±0,1°C",
          Kapasitas: "TC 135 S / TC 140 G (3x BD 600)",
          Display: "Digital Backlit",
          Standar: "CE Approved",
        },
        model: [
          { kode: "TC 135 S", ukuran: "Compact", kapasitas: "3x BD 600 units", tipe: "Standard" },
          { kode: "TC 140 G", ukuran: "Large", kapasitas: "3x BD 600 units", tipe: "Glass Door" },
          { kode: "TC Series", ukuran: "Custom", kapasitas: "Up to 12 COD systems", tipe: "Extended" },
        ],
      },
    ],
  },
  {
    slug: "cod-thermoreactor",
    nama: "COD Determination – Thermoreactor RD 125",
    deskripsiKategori:
      "Unit digesti kompak untuk analisis tube test pada air limbah dan efluen. Thermoreactor RD 125 mendukung pengujian COD, TOC, Total Chromium, Total Nitrogen, dan Total Phosphate.",
    produk: [
      {
        id: 2,
        nama: "Thermoreactor RD 125",
        foto: "/images/lovibond/cod.PNG",
        deskripsi:
          "Unit digesti kompak dengan 24 x 16mm vial wells untuk analisis tube test. Mendukung 3 suhu preset (100/120/150°C) dan 3 waktu reaksi preset (30/60/120 menit). Otomatis mati setelah selesai dengan indikasi LED.",
        fitur: [
          "Tube test digestion COD (150°C), TOC (120°C), Total Chromium (100°C), Total Nitrogen (100°C), Total Phosphate (100°C)",
          "3 pre-set reaction times: 30/60/120 menit",
          "24 vial wells untuk 16mm diameter vials",
          "Auto shut-off dengan LED indication & buzzer",
          "Kompatibel 230V dan 115V",
        ],
        spesifikasi: {
          "Order Code": "2418940",
          "Suhu Operasi": "100°C / 120°C / 150°C",
          "Waktu Reaksi": "30 / 60 / 120 menit",
          "Kapasitas": "24 wells (Ø16mm)",
          Tegangan: "230V / 115V",
          "Auto Shut-off": "Ya, + LED + Buzzer",
        },
        model: [
          { kode: "RD 125", ukuran: "Compact Desktop", kapasitas: "24 x 16mm vials", tipe: "Standard" },
        ],
      },
    ],
  },
  {
    slug: "floc-tester",
    nama: "Floc Testers",
    deskripsiKategori:
      "Jar tester Lovibond untuk menguji efisiensi flokulasi dan pengendapan agen koagulasi/presipitasi. Tersedia model 4 dan 6 stirring places untuk laboratorium dan penggunaan portable lapangan.",
    produk: [
      {
        id: 3,
        nama: "Floc Tester ET Series",
        foto: "/images/lovibond/floc.PNG",
        deskripsi:
          "Jar tester dengan 4 atau 6 stirring places, kecepatan aduk yang dapat diatur terus-menerus, timer digital, panel belakang berilluminasi, dan opsi penyesuaian ketinggian batang pengaduk.",
        fitur: [
          "4 titik aduk tersusun melingkar di sekitar lampu",
          "Kecepatan aduk variabel terus-menerus",
          "Digital display RPM dan timer",
          "Panel belakang berilluminasi",
          "ET 730: portable, 4 stirring places (1000mL beaker)",
          "ET 740 & ET 750: 6 stirring places (1500mL beaker)",
        ],
        spesifikasi: {
          "Stirring Places": "4 (ET 730) / 6 (ET 740, ET 750)",
          Kecepatan: "Variabel terus-menerus",
          Timer: "Digital display",
          Beaker: "1000mL (ET 730) / 1500mL (ET 740/750)",
          Panel: "Berilluminasi",
        },
        model: [
          { kode: "ET 730", ukuran: "Portable / Field", kapasitas: "4 places, 1000mL", tipe: "Field Use" },
          { kode: "ET 740", ukuran: "Laboratory", kapasitas: "6 places, 1500mL", tipe: "Lab Use" },
          { kode: "ET 750", ukuran: "Laboratory", kapasitas: "6 places, 1500mL", tipe: "Lab Advanced" },
        ],
      },
    ],
  },
  {
    slug: "sd-handheld",
    nama: "SD Hand-held Series",
    deskripsiKategori:
      "Instrumen genggam kompak Lovibond seri SD untuk pengukuran cepat dan akurat parameter kualitas air: pH, ORP, Conductivity (EC), TDS, dan Salt. IP67 waterproof dan dust-tight.",
    produk: [
      {
        id: 4,
        nama: "SD Hand-held pH / ORP / EC / TDS / Salt Meter",
        foto: "/images/lovibond/sd-series.PNG",
        deskripsi:
          "Instrumen genggam kompak dengan casing IP67 waterproof dan dust-tight. Backlit display, 25 data set storage dengan date/time stamp, automatic switch off, dan fungsi Hold. Elektroda dapat diganti pengguna.",
        fitur: [
          "Pengukuran pH, ORP, Conductivity (EC), TDS, Salt",
          "IP67 waterproof dan dust-tight",
          "Backlit Display dengan scroll-bar",
          "25 data set storage dengan date/time stamp",
          "Auto switch off & Hold function",
          "User-replaceable electrodes",
        ],
        spesifikasi: {
          Parameter: "pH, ORP, EC, TDS, Salt",
          Proteksi: "IP67 Waterproof & Dust-tight",
          Storage: "25 data set + date/time",
          Display: "Backlit dengan scroll-bar",
          Elektroda: "User-replaceable",
        },
        model: [
          { kode: "SD 50", ukuran: "Hand-held", kapasitas: "pH / ORP", tipe: "Basic" },
          { kode: "SD 80", ukuran: "Hand-held", kapasitas: "EC / TDS / Salt", tipe: "Advanced" },
          { kode: "SD 70", ukuran: "Hand-held", kapasitas: "pH + EC combo", tipe: "Combo" },
        ],
      },
    ],
  },
  {
    slug: "cooling-water-kit",
    nama: "Cooling Water Test Kits",
    deskripsiKategori:
      "Test kit Lovibond untuk air pendingin sistem terbuka (open system cooling water). Memantau parameter kritis inhibitor secara cepat, aman, dan akurat untuk menjaga efisiensi sistem pendingin.",
    produk: [
      {
        id: 5,
        nama: "Cooling Water Test Kit (Open System)",
        foto: "/images/lovibond/cooling-kit.PNG",
        deskripsi:
          "Kit lengkap peralatan dan reagen uji untuk air pendingin. Kit 1 untuk analisis harian parameter inhibitor kritis. Kit 2 untuk service engineer dengan parameter kontrol lebih lengkap. Membantu mencegah kontaminasi mikrobiologi, scaling, dan korosi.",
        fitur: [
          "Monitor parameter inhibitor secara cepat dan akurat",
          "Kit 1: analisis harian tingkat inhibitor kritis",
          "Kit 2: parameter kontrol untuk service engineer",
          "Mencegah kontaminasi mikrobiologi pada heat exchanger",
          "Mencegah scaling dan korosi",
          "Kompak, portable, mudah digunakan",
        ],
        spesifikasi: {
          Tipe: "Open System Cooling Water",
          Aplikasi: "Monitoring inhibitor & kualitas air",
          Kit: "Kit 1 (Daily) / Kit 2 (Engineering)",
          "Order Code": "56K000301 (Kit 1)",
          Format: "Field Test Kit",
        },
        model: [
          { kode: "56K000301", ukuran: "Kit 1", kapasitas: "Daily checks", tipe: "Standard" },
          { kode: "Kit 2", ukuran: "Kit 2", kapasitas: "Engineering use", tipe: "Enhanced" },
        ],
      },
    ],
  },
];

const totalProduk = lovibondKatalog.reduce((acc, k) => acc + k.produk.length, 0);

export default function KatalogLovibondPage() {
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
              Katalog Produk Lovibond
            </h2>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "#6b7280" }}>
              {totalProduk} produk — Cetak atau simpan sebagai PDF
            </p>
          </div>
          <PrintButton />
        </div>

        {/* ═══════ COVER ═══════ */}
        <div className="kat-cover" style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center",
          padding: "60px 40px", textAlign: "center",
          background: "linear-gradient(160deg, #eff6ff 0%, #ffffff 50%, #f0f9ff 100%)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative circles */}
          <div style={{
            position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,87,168,0.07) 0%, transparent 70%)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,87,168,0.05) 0%, transparent 70%)", pointerEvents: "none",
          }} />

          {/* Andis Lab branding */}
          <div style={{ marginBottom: 32, position: "relative" }}>
            <div style={{
              width: 80, height: 80, background: "#fff", borderRadius: 20,
              boxShadow: "0 4px 24px rgba(0,87,168,0.14)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <Image src="/logo.png" alt="Andis Lab" width={60} height={60} style={{ objectFit: "contain" }} />
            </div>
            <h1 style={{ margin: 0, fontSize: 28, fontWeight: 900, color: "#111827", letterSpacing: -0.5 }}>
              ANDIS LAB
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: 12, color: "#0057A8", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600 }}>
              Distributor Resmi Lovibond® di Indonesia
            </p>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <div style={{ height: 1, width: 60, background: "#d1d5db" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0057A8" }} />
            <div style={{ height: 1, width: 60, background: "#d1d5db" }} />
          </div>

          {/* Catalog title */}
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#0057A8", letterSpacing: 3.5, textTransform: "uppercase" }}>
            Katalog Produk
          </p>
          <div style={{ margin: "12px 0 8px", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <Image
              src="/images/logos/lovibond-logo.png"
              alt="Lovibond"
              width={180}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 style={{ margin: "8px 0 8px", fontSize: 36, fontWeight: 900, color: "#111827", lineHeight: 1.15, letterSpacing: -0.8 }}>
            Water Quality Testing
          </h2>
          <p style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 600, color: "#374151" }}>
            & Laboratory Instruments
          </p>
          <p style={{ margin: "0 0 40px", fontSize: 13.5, color: "#6b7280", maxWidth: 460, lineHeight: 1.7 }}>
            BOD Thermostatic Cabinet · COD Thermoreactor · Floc Tester
            SD Hand-held Series · Cooling Water Test Kit
          </p>

          {/* Stats bar */}
          <div style={{
            display: "flex", gap: 0, background: "#fff", borderRadius: 14,
            boxShadow: "0 2px 20px rgba(0,0,0,0.07)", overflow: "hidden", border: "1px solid #f3f4f6",
          }}>
            {[
              { value: lovibondKatalog.length, label: "Kategori" },
              { value: totalProduk, label: "Produk" },
              { value: "ISO 9001", label: "Bersertifikasi" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "20px 32px", textAlign: "center",
                borderRight: i < 2 ? "1px solid #f3f4f6" : "none",
              }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#111827" }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ marginTop: 52, fontSize: 13, color: "#9ca3af" }}>
            <p style={{ margin: 0 }}>Tel: +62 821-2552-3466 &nbsp;·&nbsp; Email: sales@andislabs.com</p>
            <p style={{ margin: "6px 0 0", fontWeight: 700, color: "#0057A8", fontSize: 14 }}>www.andislabs.com</p>
            <p style={{ margin: "12px 0 0", fontSize: 11, color: "#d1d5db" }}>© {year} Andis Lab. All Rights Reserved.</p>
          </div>
        </div>

        {/* ═══════ DAFTAR ISI ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", padding: "60px 40px", background: "#fff",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ width: 4, height: 32, background: "#0057A8", borderRadius: 2 }} />
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827" }}>Daftar Isi</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {lovibondKatalog.map((kat, i) => (
              <div key={kat.slug} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px",
                background: i % 2 === 0 ? "#f8faff" : "#fff",
                borderRadius: 10,
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 800, color: "#0057A8",
                  minWidth: 36, height: 36, borderRadius: 8, background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#111827", flex: 1 }}>
                  {kat.nama}
                </span>
                <span style={{
                  fontSize: 11.5, color: "#0057A8", fontWeight: 600,
                  background: "#eff6ff", padding: "3px 12px", borderRadius: 20,
                }}>
                  {kat.produk.length} produk
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 40, padding: "20px 24px",
            background: "linear-gradient(135deg, #eff6ff, #f0f9ff)",
            borderRadius: 12, borderLeft: "4px solid #0057A8",
            fontSize: 13, lineHeight: 1.75, color: "#374151",
          }}>
            <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#0057A8", fontSize: 14 }}>
              Tentang Lovibond® di Andis Lab
            </p>
            Andis Lab adalah distributor resmi produk Lovibond® di Indonesia, menyediakan instrumen pengujian
            kualitas air untuk industri, laboratorium, lingkungan, dan water treatment.
            Semua produk dilengkapi garansi resmi, dukungan teknis, dan ketersediaan reagen/aksesori.
          </div>
        </div>

        {/* ═══════ HALAMAN KATEGORI ═══════ */}
        {lovibondKatalog.map((kat, catIdx) => (
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
                    background: "#0057A8", padding: "3px 10px", borderRadius: 6, letterSpacing: 1,
                  }}>
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                  <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#111827" }}>
                    {kat.nama}
                  </h2>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280", lineHeight: 1.6, maxWidth: 580 }}>
                  {kat.deskripsiKategori}
                </p>
              </div>
              {/* Lovibond logo badge */}
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                padding: "10px 14px", background: "#eff6ff", borderRadius: 10,
                border: "1px solid #bfdbfe", flexShrink: 0,
              }}>
                <Image
                  src="/images/logos/lovibond-logo.png"
                  alt="Lovibond"
                  width={80}
                  height={22}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: 8.5, fontWeight: 700, color: "#0057A8", letterSpacing: 1, textTransform: "uppercase" }}>
                  via Andis Lab
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
                    width: 160, minWidth: 160, height: 120,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#f8faff", borderRadius: 8, overflow: "hidden",
                    border: "1px solid #e0eaff",
                  }}>
                    <Image
                      src={p.foto} alt={p.nama}
                      width={150} height={110}
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

                    {/* Features */}
                    <ul style={{ margin: "0 0 8px", paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2 }}>
                      {p.fitur.slice(0, 4).map((f, fi) => (
                        <li key={fi} style={{ fontSize: 10.5, color: "#6b7280", lineHeight: 1.5 }}>{f}</li>
                      ))}
                    </ul>

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
                        <tr style={{ background: "#eff6ff" }}>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Model / Kode</th>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Ukuran / Tipe</th>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Kapasitas</th>
                          <th style={{ fontSize: 9.5, fontWeight: 700, color: "#374151", padding: "4px 8px", textAlign: "left" }}>Varian</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.model.map((m, mi) => (
                          <tr key={mi} style={{ borderBottom: "1px solid #f3f4f6" }}>
                            <td style={{ fontSize: 10, color: "#0057A8", fontWeight: 700, padding: "4px 8px" }}>{m.kode}</td>
                            <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.ukuran}</td>
                            <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.kapasitas}</td>
                            <td style={{ fontSize: 10, color: "#6b7280", padding: "4px 8px" }}>{m.tipe}</td>
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
              <span>Andis Lab — Katalog Lovibond® Water Quality Testing | www.andislabs.com</span>
              <span>Halaman {catIdx + 3}</span>
            </div>
          </div>
        ))}

        {/* ═══════ HALAMAN BELAKANG ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          padding: "60px 40px",
          background: "linear-gradient(160deg, #eff6ff 0%, #ffffff 60%, #f0f9ff 100%)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,87,168,0.07) 0%, transparent 70%)", pointerEvents: "none",
          }} />

          <div style={{ textAlign: "center", maxWidth: 480, position: "relative" }}>
            <div style={{
              width: 90, height: 90, background: "#fff", borderRadius: 22,
              boxShadow: "0 4px 28px rgba(0,87,168,0.13)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <Image src="/logo.png" alt="Andis Lab" width={68} height={68} style={{ objectFit: "contain" }} />
            </div>

            {/* Lovibond logo */}
            <div style={{ marginBottom: 16 }}>
              <Image
                src="/images/logos/lovibond-logo.png"
                alt="Lovibond"
                width={140}
                height={38}
                style={{ objectFit: "contain" }}
              />
            </div>

            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#111827" }}>Hubungi Kami</h2>
            <p style={{ margin: "10px 0 32px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
              Dapatkan harga terbaik, konsultasi teknis gratis,<br />
              dan dukungan purna jual produk Lovibond® resmi.
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
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#0057A8" }}>
                Distributor Resmi Lovibond® di Indonesia
              </p>
              <p style={{ margin: "10px 0 0", fontSize: 11, color: "#9ca3af" }}>
                © {year} Andis Lab. Spesifikasi produk dapat berubah tanpa pemberitahuan terlebih dahulu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
