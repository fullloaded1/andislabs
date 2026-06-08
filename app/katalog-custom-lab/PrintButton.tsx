"use client";

export default function PrintButton() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => window.print()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 20px",
          background: "#0D7A5F",
          color: "#fff",
          border: "none",
          borderRadius: 7,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: 0.2,
        }}
        id="btn-print-custom-catalog"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        Cetak / Simpan PDF
      </button>
    </div>
  );
}
