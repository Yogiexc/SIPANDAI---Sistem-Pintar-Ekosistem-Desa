"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TimeProjection } from "@/lib/simulation";
import { Activity, BarChart3, Loader2, Sparkles, TrendingUp, AlertTriangle } from "lucide-react";

interface SimulationEngineProps {
  projections: TimeProjection[];
  isLoading: boolean;
}

export function SimulationEngine({ projections, isLoading }: SimulationEngineProps) {
  const data = projections;

  const latest = data.length > 0 ? data[data.length - 1] : null;
  const initial = data.length > 0 ? data[0] : null;

  const wasteChange = latest && initial ? Math.round(latest.waste - initial.waste) : 0;
  const economyChange = latest && initial ? Math.round(latest.economy - initial.economy) : 0;
  const envChange = latest && initial ? Math.round(latest.environment - initial.environment) : 0;

  return (
    <section id="simulasi" className="w-full pt-16 pb-12">
      {/* Header & Badges */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Mesin Prediksi Dinamis Spasial
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <Activity className="text-emerald-400 w-7 h-7" />
            Proyeksi Pertumbuhan Multivariat
            {isLoading && <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Simulasi trajektori dampak intervensi terhadap kualitas lingkungan, kesehatan kas sirkular desa, dan akumulasi residu limbah.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 bg-slate-900/60 p-2.5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]"></span>
            Skor Lingkungan
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]"></span>
            Indeks Ekonomi
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-1 rounded-lg bg-red-500/10 border border-red-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.7)]"></span>
            Volume Sampah
          </div>
        </div>
      </div>

      {/* Snapshot summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 rounded-2xl flex items-center justify-between border-white/5 bg-slate-900/50">
          <div className="text-xs text-slate-400">Delta Sampah (Akhir Periode)</div>
          <div className={`text-sm font-bold ${wasteChange <= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {wasteChange > 0 ? `+${wasteChange}` : wasteChange} Ton
          </div>
        </div>
        <div className="glass-card p-4 rounded-2xl flex items-center justify-between border-white/5 bg-slate-900/50">
          <div className="text-xs text-slate-400">Pertumbuhan Ekonomi Desa</div>
          <div className={`text-sm font-bold ${economyChange >= 0 ? 'text-blue-400' : 'text-slate-400'}`}>
            {economyChange > 0 ? `+${economyChange}` : economyChange} Poin
          </div>
        </div>
        <div className="glass-card p-4 rounded-2xl flex items-center justify-between border-white/5 bg-slate-900/50">
          <div className="text-xs text-slate-400">Indeks Kelestarian Lingkungan</div>
          <div className={`text-sm font-bold ${envChange >= 0 ? 'text-teal-300' : 'text-amber-400'}`}>
            {envChange > 0 ? `+${envChange}` : envChange} Poin
          </div>
        </div>
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {isLoading && (
          <div className="absolute inset-0 z-10 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center rounded-3xl">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-sm font-semibold shadow-2xl">
              <Loader2 className="w-4 h-4 animate-spin" />
              Menghitung model proyeksi time-series...
            </div>
          </div>
        )}

        {/* Lingkungan & Ekonomi Area Chart */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-emerald-400 w-4 h-4" />
              <h3 className="text-white font-semibold text-sm">Simulasi Lingkungan vs Ekonomi</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Index Scale (0 - 100)</span>
          </div>

          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEnv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="label" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10, 18, 30, 0.95)', 
                    borderColor: 'rgba(16, 185, 129, 0.3)', 
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    color: '#f8fafc',
                    fontSize: '12px'
                  }}
                />
                <Area type="monotone" dataKey="environment" name="Mutu Lingkungan" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorEnv)" />
                <Area type="monotone" dataKey="economy" name="Indeks Ekonomi" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEco)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Sampah Bar Chart */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-red-400 w-4 h-4" />
              <h3 className="text-white font-semibold text-sm">Trajektori Residu Sampah (Ton/Bulan)</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Target: Turun &lt; 30T</span>
          </div>

          <div className="flex-1 w-full min-h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="label" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                  contentStyle={{ 
                    backgroundColor: 'rgba(10, 18, 30, 0.95)', 
                    borderColor: 'rgba(239, 68, 68, 0.3)', 
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    color: '#f8fafc',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="waste" 
                  name="Timbulan Sampah (Ton)" 
                  fill="#ef4444" 
                  radius={[8, 8, 2, 2]} 
                  barSize={36} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
