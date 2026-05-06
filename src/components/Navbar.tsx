"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Leaf, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full w-full max-w-5xl transition-all duration-500",
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-emerald-900/20"
            : "bg-slate-900/30 backdrop-blur-md border border-white/5"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 group-hover:bg-emerald-500/30 transition-colors">
            <Leaf className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Desa<span className="text-emerald-400">Sim</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#beranda" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">Beranda</a>
          <a href="#simulasi" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">Simulasi</a>
          <a href="#data-desa" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">Data Desa</a>
          <a href="#insight" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">Insight AI</a>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          Mulai Sekarang
        </button>
      </div>
    </motion.header>
  );
}
