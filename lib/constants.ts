// ─── Shared Constants ─────────────────────────────────────────────
// Single source of truth — imported by every component that needs them.

export const WA_NUMBER = "6282125523466";

export const WA_MESSAGE_DEFAULT =
  "Halo Andis Lab, saya ingin konsultasi mengenai peralatan laboratorium.";

export const SITE_NAME = "Andis Lab";
export const SITE_URL = "https://andislabs.com";
export const SITE_EMAIL = "info@andislab.com";
export const SITE_PHONE = "0821-2552-3466";
export const SITE_PHONE_RAW = "+6282125523466";

/** Build a wa.me link with pre-filled message */
export function waLink(message?: string): string {
  const msg = message ?? WA_MESSAGE_DEFAULT;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
