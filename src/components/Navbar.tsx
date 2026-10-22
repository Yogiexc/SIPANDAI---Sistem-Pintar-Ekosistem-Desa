"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Activity, ShieldCheck, Compass, BarChart3, ChevronRight } from "lucide-react";
import { GitBranchIcon } from "./GitIcon";
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
    >
      <div
        className={cn(
          "flex items-center justify-between px-5 md:px-7 py-3 rounded-2xl w-full max-w-6xl transition-all duration-500",
          scrolled
            ? "bg-slate-950/85 backdrop-blur-2xl border border-emerald-500/20 shadow-xl shadow-emerald-950/30"
            : "bg-slate-900/40 backdrop-blur-md border border-white/10"
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-blue-500/30 flex items-center justify-center border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all">
            <Sparkles className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
              SIPANDAI <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 tracking-wider">AI Twin</span>
            </span>
            <span className="text-[11px] text-slate-400 -mt-1 hidden sm:block">Sistem Pintar Ekosistem Desa</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          <a href="#beranda" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-400/80" /> Beranda
          </a>
          <a href="#simulasi" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-blue-400/80" /> Proyeksi
          </a>
          <a href="#insight" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-400/80" /> Rekomendasi AI
          </a>
          <a href="#data-desa" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-purple-400/80" /> Komparasi
          </a>
          <a href="#arsitektur" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80" /> Arsitektur
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Yogiexc/SIPANDAI---Sistem-Pintar-Ekosistem-Desa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all"
            title="Lihat Source Code GitHub"
          >
            <GitBranchIcon className="w-4 h-4 text-emerald-400" />
            <span>GitHub</span>
          </a>

          <a 
            href="#simulasi"
            className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95"
          >
            <span>Eksplorasi</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
