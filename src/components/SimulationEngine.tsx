"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TimeProjection } from "@/lib/simulation";
import { Activity, BarChart3, Loader2 } from "lucide-react";

interface SimulationEngineProps {
  projections: TimeProjection[];
  isLoading: boolean;
}

export function SimulationEngine({ projections, isLoading }: SimulationEngineProps) {
  const data = projections;

  return (
    <section id="simulasi" className="w-full pt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Activity className="text-emerald-400" />
            Proyeksi 6 Bulan
            {isLoading && <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />}
          </h2>
          <p className="text-slate-400">Analisis prediktif berdasarkan kebijakan desa yang dipilih.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            Lingkungan
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            Ekonomi
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
            Tingkat Sampah
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {isLoading && (
          <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-[1px] flex items-center justify-center rounded-3xl" />
        )}

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 rounded-3xl border border-white/5"
        >
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEnv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="label" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '14px' }}
                />
                <Area type="monotone" dataKey="environment" name="Lingkungan" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorEnv)" />
                <Area type="monotone" dataKey="economy" name="Ekonomi" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEco)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-red-400 w-5 h-5" />
            <h3 className="text-white font-medium">Tren Akumulasi Sampah</h3>
          </div>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="label" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="waste" name="Tingkat Sampah" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
