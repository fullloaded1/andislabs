"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ReportView({ slug }: { slug: string }) {
  useEffect(() => {
    const registerView = async () => {
      // Panggil fungsi RPC di Supabase untuk nambah 1 view secara aman
      await supabase.rpc('increment_view_count', { article_slug: slug });
    };

    registerView();
  }, [slug]);

  return null; // Komponen ini tidak merender apa-apa, hanya berjalan di background
}
