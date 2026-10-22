import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPANDAI | Sistem Pintar Ekosistem & AI Digital Twin Desa",
  description: "Platform AI Digital Twin Desa Cerdas (Smart Village) Indonesia untuk simulasi proyeksi kebijakan publik, tata kelola sampah, dan dampak ekonomi sebelum implementasi.",
  keywords: ["Smart Village", "Desa Cerdas", "Digital Twin", "Simulasi Kebijakan Desa", "Next.js", "AI Indonesia", "SIPANDAI"],
  authors: [{ name: "Bryan Yogie Saputra", url: "https://github.com/Yogiexc" }],
  openGraph: {
    title: "SIPANDAI - Sistem Pintar Ekosistem Desa",
    description: "Simulasi prediktif digital twin & insight AI untuk akselerasi ekosistem desa berkelanjutan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={cn("min-h-screen font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
