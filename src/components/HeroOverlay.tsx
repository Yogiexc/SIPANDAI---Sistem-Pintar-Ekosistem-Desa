"use client";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Trash2, TrendingUp, Leaf, Layers, Building, Play, Calendar, Zap, ArrowUpRight, ArrowDownRight, ShieldCheck, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SimulationConfig, BaseMetrics, TimeProjection } from "@/lib/simulation";

interface HeroOverlayProps {
  state: SimulationConfig;
  setState: React.Dispatch<React.SetStateAction<SimulationConfig>>;
  scenario: string;
  setScenario: (val: string) => void;
  baseMetrics: BaseMetrics | null;
  projections: TimeProjection[];
  isLoading: boolean;
  duration: number;
  setDuration: (val: number) => void;
  onRunSimulation: () => void;
  isDemoMode: boolean;
  setIsDemoMode: (val: boolean) => void;
  onApplyScenario: (config: SimulationConfig, months?: number) => void;
  onReset: () => void;
}

export function HeroOverlay({ 
  state, setState, scenario, setScenario, 
  baseMetrics, projections, isLoading, 
  duration, setDuration, onRunSimulation,
  isDemoMode, setIsDemoMode, onApplyScenario, onReset
}: HeroOverlayProps) {
  
  const currentProjection = projections.length > 0 ? projections[projections.length - 1] : null;
  
  const currentWaste = currentProjection?.waste ?? baseMetrics?.waste ?? 0;
  const currentEconomy = currentProjection?.economy ?? baseMetrics?.economy ?? 0;
  const currentEnvScore = currentProjection?.environment ?? baseMetrics?.environment ?? 0;

  const wasteTrend = currentProjection && baseMetrics ? currentProjection.waste - baseMetrics.waste : 0;
  const economyTrend = currentProjection && baseMetrics ? currentProjection.economy - baseMetrics.economy : 0;
  const envTrend = currentProjection && baseMetrics ? currentProjection.environment - baseMetrics.environment : 0;

  const toggle = (key: keyof SimulationConfig) => {
    setState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative z-10 pointer-events-none flex flex-col justify-between p-6 lg:p-12 pt-24 lg:pt-32 pb-12 w-full h-full min-h-[850px]">
      
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full pointer-events-auto">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Digital Twin Desa Indonesia - AI Powered
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Simulasikan Masa Depan Desa <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 text-glow">
              Sebelum Mengambil Keputusan.
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
            Platform berbasis AI untuk membantu desa di Indonesia mengambil keputusan yang lebih cerdas dan berdampak nyata bagi masyarakat.
          </p>
        </motion.div>

        {/* Demo Controls Area */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-3 rounded-xl flex items-center justify-between border-emerald-500/30 bg-emerald-500/5"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Mode Demo
            </div>
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={cn(
                "w-10 h-5 rounded-full p-1 transition-colors relative flex items-center ml-4",
                isDemoMode ? "bg-emerald-500" : "bg-slate-700"
              )}
            >
              <div className={cn("w-3 h-3 bg-white rounded-full transition-transform", isDemoMode ? "translate-x-5" : "translate-x-0")} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-4 rounded-2xl flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-slate-300 font-medium text-sm">
              <Building className="w-4 h-4 text-emerald-400" /> Pilih Desa:
            </div>
            <div className="flex gap-2 flex-wrap max-w-sm">
              <button 
                onClick={() => setScenario('high-waste')}
                className={cn("px-3 py-1.5 rounded-lg text-xs transition-all border", scenario === 'high-waste' ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-slate-800/50 border-white/10 text-slate-400 hover:bg-slate-800")}
              >
                Desa Sukamaju
              </button>
              <button 
                onClick={() => setScenario('eco-village')}
                className={cn("px-3 py-1.5 rounded-lg text-xs transition-all border", scenario === 'eco-village' ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-slate-800/50 border-white/10 text-slate-400 hover:bg-slate-800")}
              >
                Desa Hijau
              </button>
              <button 
                onClick={() => setScenario('growing-economy')}
                className={cn("px-3 py-1.5 rounded-lg text-xs transition-all border", scenario === 'growing-economy' ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-slate-800/50 border-white/10 text-slate-400 hover:bg-slate-800")}
              >
                Desa Karangharja
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="flex flex-col lg:flex-row gap-6 items-end justify-between pointer-events-auto w-full pb-8">
        
        {/* Live Data Cards */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={cn("flex flex-col sm:flex-row gap-4 w-full lg:w-auto transition-opacity duration-300", isLoading && "opacity-50")}
        >
          <DataCard 
            title="Tingkat Sampah" 
            value={currentWaste} 
            suffix=" Ton" 
            icon={<Trash2 className="w-5 h-5 text-red-400" />} 
            trend={wasteTrend} 
            inverseGood
            impact={wasteTrend < -15 ? "Dampak Tinggi" : wasteTrend < 0 ? "Moderat" : null}
          />
          <DataCard 
            title="Pertumbuhan Ekonomi" 
            value={currentEconomy} 
            suffix=" Poin" 
            icon={<TrendingUp className="w-5 h-5 text-blue-400" />} 
            trend={economyTrend} 
            impact={economyTrend > 15 ? "Sangat Cepat" : economyTrend > 0 ? "Stabil" : null}
          />
          <DataCard 
            title="Skor Lingkungan" 
            value={currentEnvScore} 
            suffix="/100" 
            icon={<Leaf className="w-5 h-5 text-emerald-400" />} 
            trend={envTrend} 
            impact={envTrend > 10 ? "Berkelanjutan" : null}
          />
        </motion.div>

        {/* Interaction Panel */}
        <div className="flex flex-col gap-4 w-full lg:w-[400px]">
          <AnimatePresence>
            {isDemoMode && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="glass-card p-4 rounded-xl border-emerald-500/20 bg-emerald-500/5 flex gap-2"
              >
                <button 
                  onClick={() => onApplyScenario({ wasteBank: true, education: true, infrastructure: false })}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold hover:bg-emerald-500/20 transition-all"
                >
                  <Zap className="w-3 h-3 fill-current" /> Skenario Desa Kotor
                </button>
                <button 
                  onClick={() => onApplyScenario({ wasteBank: false, education: false, infrastructure: true })}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold hover:bg-blue-500/20 transition-all"
                >
                  <TrendingUp className="w-3 h-3" /> Skenario Berkembang
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="text-white font-semibold text-lg">Unit Kontrol</h3>
              </div>
              
              <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <select 
                  value={duration} 
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value={1} className="bg-slate-900">1 Bulan</option>
                  <option value={3} className="bg-slate-900">3 Bulan</option>
                  <option value={6} className="bg-slate-900">6 Bulan</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <ToggleControl label="Bangun Bank Sampah" active={state.wasteBank} onClick={() => toggle('wasteBank')} />
              <ToggleControl label="Program Edukasi Warga" active={state.education} onClick={() => toggle('education')} />
              <ToggleControl label="Pembangunan Infrastruktur" active={state.infrastructure} onClick={() => toggle('infrastructure')} />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={onReset}
                disabled={isLoading}
                className="flex items-center justify-center p-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 hover:bg-slate-700 transition-all"
                title="Reset Simulasi"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button 
                onClick={onRunSimulation}
                disabled={isLoading}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold tracking-wide transition-all",
                  isLoading 
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed" 
                    : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
                )}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.div 
                      className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                    Proses...
                  </span>
                ) : (
                  <><Play className="w-4 h-4 fill-current" /> JALANKAN SIMULASI</>
                )}
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

function DataCard({ title, value, suffix, icon, trend, impact, inverseGood = false }: { title: string, value: number, suffix: string, icon: React.ReactNode, trend: number, impact?: string | null, inverseGood?: boolean }) {
  const isPositive = inverseGood ? trend <= 0 : trend >= 0;
  const trendColor = isPositive ? "text-emerald-400" : "text-red-400";
  
  return (
    <div className="glass-card p-5 rounded-2xl flex-1 min-w-[210px] relative overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div 
          key={value}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          className={cn("absolute inset-0 pointer-events-none", isPositive ? "bg-emerald-500/20" : "bg-red-500/20")}
        />
      </AnimatePresence>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-white/5">
            {icon}
          </div>
          <span className="text-slate-400 font-medium text-xs tracking-tight">{title}</span>
        </div>
        {impact && (
          <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase", isPositive ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400")}>
            {impact}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white tracking-tight">
          <CountUp end={value} duration={1.2} preserveValue />
        </span>
        <span className="text-slate-400 font-medium text-sm">{suffix}</span>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        {trend !== 0 && (
          <div className={cn("flex items-center gap-0.5 font-bold text-xs", trendColor)}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(Math.round(trend))}
          </div>
        )}
        <span className="text-slate-500 text-[9px] font-medium uppercase tracking-wider">vs baseline</span>
      </div>
    </div>
  );
}

function ToggleControl({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between p-3 rounded-xl border transition-all",
        active 
          ? "bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
          : "bg-slate-800/30 border-white/5 hover:border-white/10"
      )}
    >
      <span className={cn("text-xs font-medium transition-colors", active ? "text-white" : "text-slate-400")}>{label}</span>
      <div className={cn(
        "w-10 h-5 rounded-full p-1 transition-colors flex items-center",
        active ? "bg-emerald-500" : "bg-slate-700"
      )}>
        <motion.div 
          layout
          className="w-3 h-3 bg-white rounded-full"
          animate={{ x: active ? 20 : 0 }}
        />
      </div>
    </button>
  );
}
