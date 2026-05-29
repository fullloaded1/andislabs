/**
 * Skip-to-content link for keyboard/screen reader users.
 * Hidden visually until focused via Tab key.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-2 focus:left-2 focus:z-[9999]
        focus:bg-teal-600 focus:text-white focus:px-5 focus:py-3
        focus:rounded-lg focus:text-sm focus:font-bold focus:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-white
      "
    >
      Langsung ke konten utama
    </a>
  );
}
