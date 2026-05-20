import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadPayload {
  institution: string;
  contactName: string;
  whatsapp: string;
  product: string;
}

// ─── POST /api/leads ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // 1. Parse & validate request body
    const body = (await req.json()) as Partial<LeadPayload>;

    const { institution, contactName, whatsapp, product } = body;

    if (!institution || !contactName || !whatsapp || !product) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi.' },
        { status: 400 }
      );
    }

    // 2. Insert into Supabase `leads` table
    const { error } = await supabase.from('leads').insert([
      {
        institution,
        contact_name: contactName,
        whatsapp,
        product,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('[leads API] Supabase insert error:', error.message);
      return NextResponse.json(
        { error: 'Gagal menyimpan data. Silakan coba lagi.' },
        { status: 500 }
      );
    }

    // 3. Success
    return NextResponse.json(
      { message: 'Permintaan berhasil dikirim.' },
      { status: 200 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Internal server error';
    console.error('[leads API] Unexpected error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
