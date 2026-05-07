import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPANDAI | Smart Village Waste Management",
  description: "AI-powered waste management system for smart villages. Request pickups, earn points, and build a circular economy.",
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
