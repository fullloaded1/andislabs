import type { Metadata } from "next";
import { daihanKatalog, getDaihanProductCount } from "@/data/daihan-products";
import Image from "next/image";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Katalog Produk General Lab | Daihan Labtech",
  description:
    "Katalog lengkap peralatan laboratorium General Lab dari Daihan Labtech. Water Bath, Oven, Incubator, Furnace, Hotplate, Shaker, dan lainnya.",
};

export default function KatalogPdfPage() {
  const totalProducts = getDaihanProductCount();
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
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
              Katalog Produk General Lab
            </h2>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "#6b7280" }}>
              {totalProducts} produk dari Daihan Labtech — Cetak atau simpan sebagai PDF
            </p>
          </div>
          <PrintButton />
        </div>

        {/* ═══════ COVER ═══════ */}
        <div className="kat-cover" style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center",
          padding: "60px 40px", textAlign: "center",
          background: "#fff",
        }}>
          {/* Company */}
          <div style={{ marginBottom: 48 }}>
            <Image src="/logo.png" alt="Andis Lab" width={64} height={64} style={{ objectFit: "contain", marginBottom: 16 }} />
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#111827", letterSpacing: -0.5 }}>
              ANDIS LAB
            </h1>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#6b7280", letterSpacing: 2, textTransform: "uppercase" }}>
              Mitra Terpercaya Laboratorium Indonesia
            </p>
          </div>

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: "#d1d5db", marginBottom: 48 }} />

          {/* Title */}
          <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: "#0B3D91", letterSpacing: 3, textTransform: "uppercase" }}>
            Katalog Produk
          </p>
          <h2 style={{ margin: "12px 0 16px", fontSize: 38, fontWeight: 800, color: "#111827", lineHeight: 1.15, letterSpacing: -0.5 }}>
            General Lab Equipment
          </h2>
          <Image
            src="/images/logos/daihanlabtechlogo.png"
            alt="Daihan LabTech"
            width={180}
            height={40}
            style={{ objectFit: "contain" }}
          />

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 40 }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: "#111827" }}>{daihanKatalog.length}</span>
              <br />
              <span style={{ fontSize: 11, color: "#9ca3af", letterSpacing: 1.5, textTransform: "uppercase" }}>Kategori</span>
            </div>
            <div style={{ width: 1, background: "#e5e7eb" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: "#111827" }}>{totalProducts}</span>
              <br />
              <span style={{ fontSize: 11, color: "#9ca3af", letterSpacing: 1.5, textTransform: "uppercase" }}>Produk</span>
            </div>
          </div>

          {/* Contact */}
          <div style={{ marginTop: 60, fontSize: 13, color: "#9ca3af" }}>
            <p style={{ margin: 0 }}>Tel: +62 821-2552-3466 &nbsp;&middot;&nbsp; Email: sales@andislabs.com</p>
            <p style={{ margin: "6px 0 0", fontWeight: 600, color: "#0B3D91" }}>www.andislabs.com</p>
          </div>
        </div>

        {/* ═══════ DAFTAR ISI ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", padding: "60px 40px",
          background: "#fff",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>Daftar Isi</h2>
          <div style={{ width: 40, height: 2, background: "#0B3D91", margin: "14px 0 32px" }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {daihanKatalog.map((kat, i) => (
              <div key={kat.slug} style={{
                display: "flex", alignItems: "baseline", gap: 14,
                padding: "14px 0",
                borderBottom: "1px solid #f3f4f6",
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0B3D91", minWidth: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#111827", flex: 1 }}>
                  {kat.nama}
                </span>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                  {kat.produk.length} produk
                </span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 36, padding: "16px 20px",
            background: "#f9fafb", borderRadius: 8,
            borderLeft: "3px solid #0B3D91",
            fontSize: 13, lineHeight: 1.7, color: "#6b7280",
          }}>
            Semua produk tersedia melalui <strong style={{ color: "#111827" }}>Andis Lab</strong> sebagai
            distributor resmi Daihan Labtech di Indonesia.
            Hubungi kami untuk penawaran harga dan konsultasi kebutuhan laboratorium Anda.
          </div>
        </div>

        {/* ═══════ HALAMAN KATEGORI ═══════ */}
        {daihanKatalog.map((kat, catIdx) => (
          <div key={kat.slug} className="kat-section" style={{
            padding: "36px 28px", background: "#fff",
          }}>
            {/* Category Header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              marginBottom: 8, paddingBottom: 14,
              borderBottom: "2px solid #111827",
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#0B3D91", letterSpacing: 1 }}>
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
              <Image
                src="/images/logos/daihanlabtechlogo.png"
                alt="Daihan LabTech"
                width={100}
                height={24}
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
            </div>

            {/* Products */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {kat.produk.map((p, pIdx) => (
                <div key={p.id} className="kat-card" style={{
                  display: "flex", gap: 18, padding: "18px 0",
                  borderBottom: pIdx < kat.produk.length - 1 ? "1px solid #f3f4f6" : "none",
                }}>
                  {/* Photo */}
                  <div style={{
                    width: 130, minWidth: 130, height: 100,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#f9fafb", borderRadius: 6, overflow: "hidden",
                    border: "1px solid #f3f4f6",
                  }}>
                    <Image
                      src={p.foto} alt={p.nama}
                      width={120} height={90}
                      style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>
                      {p.nama}
                    </h3>
                    <p style={{
                      margin: "4px 0 8px", fontSize: 11.5, color: "#4b5563",
                      lineHeight: 1.6,
                    }}>
                      {p.deskripsi}
                    </p>

                    {/* Specs row */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginBottom: 6 }}>
                      {Object.entries(p.spesifikasi).map(([k, v]) => (
                        <span key={k} style={{ fontSize: 10.5, color: "#6b7280" }}>
                          <span style={{ fontWeight: 600, color: "#374151" }}>{k}:</span> {v}
                        </span>
                      ))}
                    </div>

                    {/* Model */}
                    <div style={{ fontSize: 10.5 }}>
                      <span style={{ fontWeight: 600, color: "#374151" }}>Model: </span>
                      <span style={{ color: "#0B3D91" }}>{p.model.join(", ")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Page footer */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              marginTop: 16, paddingTop: 10,
              borderTop: "1px solid #e5e7eb",
              fontSize: 10, color: "#9ca3af",
            }}>
              <span>Andis Lab — Katalog General Lab Equipment</span>
              <span>Halaman {catIdx + 3}</span>
            </div>
          </div>
        ))}

        {/* ═══════ HALAMAN BELAKANG ═══════ */}
        <div className="kat-section" style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          padding: "60px 40px", background: "#fff",
        }}>
          <div style={{ textAlign: "center", maxWidth: 440 }}>
            <Image src="/logo.png" alt="Andis Lab" width={72} height={72}
              style={{ objectFit: "contain", marginBottom: 20 }} />
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>
              Hubungi Kami
            </h2>
            <p style={{ margin: "8px 0 28px", fontSize: 14, color: "#6b7280" }}>
              Konsultasi gratis dan penawaran harga terbaik
            </p>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
              textAlign: "left",
            }}>
              {[
                { label: "Telepon / WhatsApp", value: "+62 821-2552-3466" },
                { label: "Email", value: "sales@andislabs.com" },
                { label: "Website", value: "www.andislabs.com" },
                { label: "Lokasi", value: "Jakarta, Indonesia" },
              ].map((c) => (
                <div key={c.label} style={{
                  padding: "14px 16px", background: "#f9fafb",
                  borderRadius: 8, border: "1px solid #f3f4f6",
                }}>
                  <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#374151" }}>
                Mitra Terpercaya Laboratorium Indonesia
              </p>
              <p style={{ margin: "10px 0 0", fontSize: 10.5, color: "#9ca3af" }}>
                &copy; {year} Andis Lab. Spesifikasi dapat berubah tanpa pemberitahuan terlebih dahulu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
