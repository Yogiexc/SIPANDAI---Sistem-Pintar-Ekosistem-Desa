"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, ArrowRight, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";

export function StorySection() {
  const steps = [
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "1. Agregasi Data & Sensor",
      desc: "Menghubungkan data demografi desa, volume timbulan sampah per RW, dan data ekonomi UMKM."
    },
    {
      icon: <Network className="w-5 h-5 text-blue-400" />,
      title: "2. Kembar Digital (Digital Twin)",
      desc: "Memodelkan replika virtual ekosistem desa secara matematis untuk mensimulasikan dinamika sistem nyata."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "3. Preskriptif AI Engine",
      desc: "Mengevaluasi trade-off anggaran dan merumuskan rekomendasi kebijakan terukur dalam hitungan detik."
    }
  ];

  return (
    <section id="arsitektur" className="w-full py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            Arsitektur Teknologi SIPANDAI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Bagaimana SIPANDAI Mengubah Pengambilan Kebijakan Desa
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Menghubungkan sains data modern dengan kebutuhan nyata 75.000+ desa di Indonesia demi mencapai target SDGs Desa Mandiri &amp; Berkelanjutan.
          </p>
        </div>

        {/* 3 Step Architecture cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-6 rounded-2xl border border-white/10 bg-slate-900/60 relative group hover:border-emerald-500/40"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Feature Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center glass-card p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-slate-900/50">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Akurasi Prediksi Tinggi, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Resiko Kebijakan Terkendali.
              </span>
            </h3>
            <p className="text-slate-300/90 text-sm leading-relaxed">
              Alih-alih menunggu 1 tahun untuk mengetahui apakah sebuah program lingkungan berhasil atau gagal, para pengambil keputusan desa kini bisa menguji coba skenario berkali-kali dalam hitungan detik.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">92%</div>
                <div className="text-slate-400 text-[11px] font-medium mt-1">Estimasi Akurasi Dampak</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">0 Detik</div>
                <div className="text-slate-400 text-[11px] font-medium mt-1">Latensi Hasil Simulasi</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-blue-400">100%</div>
                <div className="text-slate-400 text-[11px] font-medium mt-1">Transparansi Data</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Badge Box */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-slate-800/80 to-blue-500/10 border border-white/10 p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-mono text-emerald-400">SYSTEM HEALTH: OPTIMAL</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-slate-300">Modular Architecture</span>
                  <span className="text-emerald-400 font-mono">Next.js 16 + React 19</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-slate-300">Spatial Map Renderer</span>
                  <span className="text-teal-300 font-mono">Leaflet &amp; Carto Dark</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-slate-300">Fallback Intelligence</span>
                  <span className="text-blue-400 font-mono">OpenAI &amp; Local Rule Engine</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Siap diintegrasikan dengan Sistem Informasi Desa (SID) Nasional.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
