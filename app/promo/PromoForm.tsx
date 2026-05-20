'use client';

import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadFormData {
  institution: string;
  contactName: string;
  whatsapp: string;
  product: string;
}

interface PromoFormProps {
  products: string[];
}

type Status = 'idle' | 'loading' | 'success' | 'error';

// ─── Component ────────────────────────────────────────────────────────────────

export default function PromoForm({ products }: PromoFormProps) {
  const [form, setForm] = useState<LeadFormData>({
    institution: '',
    contactName: '',
    whatsapp: '',
    product: products[0] ?? '',
  });
  const [status, setStatus]   = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error ?? 'Terjadi kesalahan. Silakan coba lagi.');
      }
      setStatus('success');
      setForm({ institution: '', contactName: '', whatsapp: '', product: products[0] ?? '' });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Terjadi kesalahan tidak terduga.');
      setStatus('error');
    }
  };

  return (
    <section
      id="rfq-form"
      className="py-24 md:py-32 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: penjelasan ─────────────────────────────────────────── */}
          <div>
            <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Request for Quotation
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Minta Penawaran Harga Sekarang
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Isi formulir dan tim kami akan menghubungi Anda dalam <strong className="text-slate-700">1×24 jam kerja</strong> dengan penawaran harga terbaik sesuai kebutuhan instansi Anda.
            </p>

            {/* Poin keuntungan */}
            <ul className="space-y-4">
              {[
                'Konsultasi kebutuhan 100% gratis',
                'Penawaran harga khusus untuk instansi',
                'Respon cepat via WhatsApp & Email',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form ──────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
            {status === 'success' ? (
              /* Success state */
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="w-16 h-[72px] flex items-center justify-center bg-teal-50"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900">Permintaan Terkirim!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Terima kasih. Tim Andis Lab akan segera menghubungi Anda dalam 1×24 jam kerja.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-4 transition-colors"
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Nama Instansi */}
                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nama Instansi <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="institution" name="institution" type="text" required
                    placeholder="Contoh: Universitas Indonesia / PT Maju Jaya"
                    value={form.institution} onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                {/* Nama Kontak */}
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nama Kontak (PIC) <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contactName" name="contactName" type="text" required
                    placeholder="Nama lengkap penanggung jawab"
                    value={form.contactName} onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nomor WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 text-sm pointer-events-none">+62</span>
                    <input
                      id="whatsapp" name="whatsapp" type="tel" required
                      placeholder="8xx-xxxx-xxxx"
                      value={form.whatsapp} onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Pilihan Produk */}
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Produk yang Diminati <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="product" name="product" required
                      value={form.product} onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition cursor-pointer"
                    >
                      {products.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                {/* Submit — warna teal sesuai site */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  id="rfq-submit-btn"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm py-3.5 px-6 transition-colors shadow-md shadow-teal-100 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Permintaan Penawaran
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
