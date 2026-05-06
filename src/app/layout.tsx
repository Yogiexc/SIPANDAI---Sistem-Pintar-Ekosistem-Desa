import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesaSim | AI Digital Twin Desa",
  description: "Futuristic, interactive AI-powered Digital Twin platform for Smart Villages (Desa Cerdas) to simulate real-world conditions and predict decision impacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
