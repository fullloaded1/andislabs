import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SkipLink from "@/components/ui/SkipLink";
import { ToastProvider } from "@/components/ui/Toast";
import { SITE_NAME, SITE_URL, SITE_PHONE_RAW } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Mitra Terpercaya Laboratorium Indonesia`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Andis Lab adalah distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia. Konsultasi gratis, harga kompetitif, layanan purna jual.",
  keywords: [
    "peralatan laboratorium",
    "distributor lab",
    "furniture lab",
    "reagent kimia",
    "glassware lab",
    "andis lab",
    "andislab",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Mitra Terpercaya Laboratorium Indonesia`,
    description:
      "Distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Mitra Terpercaya Laboratorium Indonesia`,
    description:
      "Distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia.",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_NAME,
    "image": `${SITE_URL}/logo.png`,
    "description": "Distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia.",
    "url": SITE_URL,
    "telephone": SITE_PHONE_RAW,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID",
    },
  };

  return (
    <html lang="id" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipLink />
        <ToastProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </ToastProvider>
      </body>
    </html>
  );
}
