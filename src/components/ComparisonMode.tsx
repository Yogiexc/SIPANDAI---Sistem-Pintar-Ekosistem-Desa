"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, Scale, Layers } from "lucide-react";

export function ComparisonMode() {
  return (
    <section id="data-desa" className="w-full pt-16 pb-20 border-t border-white/5">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5" />
          Komparasi Skenario Kebijakan
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Status Quo vs Intervensi AI Digital Twin
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Mengapa pendekatan tebak-tebakan konvensional berisiko tinggi dibanding simulasi prediktif berbasis ekosistem cerdas SIPANDAI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Status Quo */}
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-red-500/20 bg-slate-900/60 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <XCircle className="w-32 h-32 text-red-500" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              Konvensional (Tanpa AI Twin)
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              Status Quo &amp; Risiko Kebijakan
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Pengambilan kebijakan hanya berbasis asumsi rapat tanpa permodelan spasial dan proyeksi data.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-red-500/15 border border-red-500/25 shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <span><strong>Overload Sampah:</strong> Akumulasi sampah tak terkontrol &gt;100 ton/bln mencemari sungai dan pemukiman warga.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-red-500/15 border border-red-500/25 shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <span><strong>Infrastruktur Mangkrak:</strong> Anggaran dana desa habis untuk fasilitas fisik yang tidak diiringi edukasi pemilahan warga.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-red-500/15 border border-red-500/25 shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <span><strong>Ekonomi Linear Merugi:</strong> Sampah dibakar atau dibuang mentah-mentah tanpa potensi nilai tukar sirkular.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-red-500/20 flex items-center justify-between text-xs text-red-400">
            <span>Tingkat Kepuasan Warga: Rendah</span>
            <span className="font-mono">Defisit Anggaran</span>
          </div>
        </motion.div>

        {/* AI Optimized */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-emerald-500/30 bg-slate-900/60 relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(16,185,129,0.1)]"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-emerald-500" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Modern (SIPANDAI Framework)
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Optimalisasi Berbasis Kembar Digital
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Sinergi simulasi data real-time, partisipasi warga, dan rekomendasi berbasis AI interaktif.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-emerald-500/15 border border-emerald-500/25 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span><strong>Reduksi Sampah Signifikan:</strong> Integrasi Bank Sampah &amp; logistik menurunkan beban timbulan hingga 40-60%.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-emerald-500/15 border border-emerald-500/25 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span><strong>Ekonomi Sirkular Desa:</strong> Daur ulang sampah organik menjadi pupuk &amp; anorganik menjadi komoditas kas BUMDes.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="p-1 rounded-lg bg-emerald-500/15 border border-emerald-500/25 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span><strong>Keputusan Transparan:</strong> Kepala Desa &amp; BPD dapat memperlihatkan simulasi dampak kepada warga saat Musdes.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-400 font-semibold">
            <span>Tingkat Kepuasan Warga: Tinggi</span>
            <span className="font-mono">Sustainable ROI</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <a 
          href="#simulasi"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-all group"
        >
          <span>Uji coba simulasi kebijakan di atas secara langsung</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
