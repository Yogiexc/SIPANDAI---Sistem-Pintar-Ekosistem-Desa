"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export function ComparisonMode() {
  return (
    <section id="data-desa" className="w-full pt-20 pb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Kondisi Saat Ini vs Optimal</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Bandingkan hasil dari kebijakan yang ada saat ini dengan skenario yang telah dioptimalkan oleh AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Status Quo */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-red-500/10 bg-red-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <XCircle className="w-24 h-24 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Status Quo <span className="text-red-400 text-sm font-normal">(Tanpa Intervensi)</span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-300">
              <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span>Akumulasi sampah terus meningkat di atas 100 ton/bulan.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span>Skor kualitas lingkungan menurun sebesar 15% setiap tahun.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
              <span>Ekonomi desa terbatas pada sektor tradisional tanpa sirkulasi nilai.</span>
            </li>
          </ul>
        </motion.div>

        {/* AI Optimized */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-emerald-500/10 bg-emerald-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <CheckCircle2 className="w-24 h-24 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Optimasi AI <span className="text-emerald-400 text-sm font-normal">(Rekomendasi Digital Twin)</span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <span>Sistem Bank Sampah menurunkan volume sampah hingga 40%.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <span>Skor lingkungan meningkat melalui edukasi dan tata kelola yang baik.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <span>Pertumbuhan ekonomi berkelanjutan sebesar 25% melalui pengolahan limbah.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 text-emerald-400 font-semibold hover:gap-4 transition-all group">
          Pelajari lebih lanjut tentang Metodologi Proyeksi <ArrowRight className="w-5 h-5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
