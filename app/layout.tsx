import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Andis Lab — Mitra Terpercaya Laboratorium Indonesia",
    template: "%s | Andis Lab",
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
  authors: [{ name: "Andis Lab", url: "https://andislab.com" }],
  creator: "Andis Lab",
  metadataBase: new URL("https://andislab.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://andislab.com",
    siteName: "Andis Lab",
    title: "Andis Lab — Mitra Terpercaya Laboratorium Indonesia",
    description:
      "Distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andis Lab — Mitra Terpercaya Laboratorium Indonesia",
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
    canonical: "https://andislab.com",
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
    "name": "Andis Lab",
    "image": "https://andislab.com/logo.png",
    "description": "Distributor resmi peralatan laboratorium, furnitur lab custom, reagent, dan glassware terpercaya di Indonesia.",
    "url": "https://andislab.com",
    "telephone": "+6282125523466",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
