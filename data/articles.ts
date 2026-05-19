export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown string for real apps, but we'll use simple text/html here
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Panduan Memilih Magnetic Stirrer yang Tepat untuk Laboratorium Anda",
    slug: "panduan-memilih-magnetic-stirrer",
    excerpt: "Pelajari faktor-faktor kunci dalam memilih magnetic stirrer, mulai dari kecepatan, kapasitas, hingga material pelat pemanas agar sesuai dengan kebutuhan lab Anda.",
    content: `
      <p>Memilih magnetic stirrer yang tepat sangat penting untuk efisiensi dan akurasi di laboratorium. Beberapa faktor utama yang perlu diperhatikan meliputi:</p>
      <ul>
        <li><strong>Kapasitas Pengadukan:</strong> Pastikan stirrer mampu mengaduk volume cairan yang biasa Anda tangani (misalnya 5L, 10L, atau lebih).</li>
        <li><strong>Material Pelat (Work Plate):</strong> Pelat berbahan glass ceramic sangat direkomendasikan karena tahan terhadap bahan kimia korosif dan mudah dibersihkan.</li>
        <li><strong>Fitur Pemanas (Hotplate):</strong> Jika Anda perlu memanaskan cairan saat mengaduk, pilihlah hotplate magnetic stirrer. Kontrol suhu digital dengan layar LCD memberikan akurasi yang lebih baik.</li>
      </ul>
      <p>Andis Lab menyediakan berbagai tipe Magnetic Stirrer seperti seri MS7-S dan MS6-Pro yang dirancang untuk durabilitas tinggi dan kepresisian.</p>
    `,
    coverImage: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-19_142810-removebg-preview.png",
    category: "Panduan Alat",
    date: "12 Mei 2026",
    readTime: "4 min read",
    views: 1245,
  },
  {
    id: 2,
    title: "Mengenal Grade Bahan Kimia: ACS, Reag. Ph Eur, dan Manfaatnya",
    slug: "mengenal-grade-bahan-kimia-acs-ph-eur",
    excerpt: "Bahan kimia hadir dalam berbagai tingkat kemurnian (grade). Memahami perbedaan antara ACS, USP, dan grade analitik lainnya mencegah kesalahan fatal dalam eksperimen.",
    content: `
      <p>Dalam analisis laboratorium, kemurnian reagen sangat krusial. Menggunakan grade yang salah dapat merusak hasil pengujian. Berikut adalah beberapa grade standar internasional:</p>
      <ul>
        <li><strong>ACS Grade:</strong> Bahan kimia yang memenuhi atau melampaui standar yang ditetapkan oleh American Chemical Society. Cocok untuk analisis umum.</li>
        <li><strong>Reag. Ph Eur / USP:</strong> Grade yang memenuhi standar Farmakope Eropa atau Amerika. Sangat penting untuk industri farmasi dan medis.</li>
        <li><strong>EMSURE® (Merck):</strong> Kategori reagen premium yang sering digunakan untuk analisis kritis karena tingkat kemurniannya yang luar biasa tinggi.</li>
      </ul>
      <p>Selalu periksa spesifikasi dan CoA (Certificate of Analysis) reagen yang Anda beli di Andis Lab untuk memastikan kesesuaiannya dengan metode kerja Anda.</p>
    `,
    coverImage: "https://andislab.com/wp-content/uploads/2026/02/Cuplikan_layar_2026-02-27_141653-removebg-preview__1_-removebg-preview.png",
    category: "Edukasi Reagen",
    date: "05 Mei 2026",
    readTime: "5 min read",
    views: 872,
  },
  {
    id: 3,
    title: "Mengapa Desain Custom Furniture Penting untuk Keamanan Lab?",
    slug: "pentingnya-desain-custom-furniture-lab",
    excerpt: "Lemari asam (fume hood) dan meja kerja lab (island bench) bukan sekadar meja biasa. Desain yang tepat menentukan keamanan pengguna dari paparan zat berbahaya.",
    content: `
      <p>Furniture laboratorium harus memenuhi standar keselamatan yang ketat. Lemari asam (Fume Hood), misalnya, merupakan garis pertahanan pertama bagi analis terhadap uap beracun.</p>
      <ul>
        <li><strong>Material Tahan Kimia:</strong> Penggunaan Epoxy Resin atau Phenolic Resin pada meja kerja memastikan ketahanan terhadap tumpahan asam, basa, atau pelarut organik kuat.</li>
        <li><strong>Aliran Udara:</strong> Lemari asam harus memiliki sistem ventilasi dan exhaust yang dihitung secara akurat agar sirkulasi udara optimal dan tidak membahayakan pernapasan.</li>
        <li><strong>Ergonomi:</strong> Island bench atau wall bench yang didesain secara custom akan memaksimalkan tata ruang lab, membuat alur kerja (workflow) menjadi lebih efisien.</li>
      </ul>
      <p>Tim ahli Andis Lab siap membantu Anda merancang dan memfabrikasi furniture lab sesuai dengan spesifikasi dan standar keamanan internasional.</p>
    `,
    coverImage: "http://andislab.com/wp-content/uploads/2026/04/82dd1f42-e993-417e-b5e8-0a37f4b1631b.png",
    category: "Infrastruktur Lab",
    date: "28 April 2026",
    readTime: "6 min read",
    views: 530,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
