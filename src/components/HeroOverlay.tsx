"use client";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { 
  Trash2, TrendingUp, Leaf, Layers, Building, Play, Calendar, Zap, 
  ArrowUpRight, ArrowDownRight, ShieldCheck, RotateCcw, Info, Sliders, Check
} from "lucide-react";
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

  const villageMeta: Record<string, { label: string; desc: string }> = {
    'high-waste': { label: 'Desa Sukamaju', desc: 'Beban sampah tinggi, potensi daur ulang besar' },
    'eco-village': { label: 'Desa Hijau', desc: 'Model percontohan konservasi mandiri' },
    'growing-economy': { label: 'Desa Karangharja', desc: 'Sentra UMKM berkembang, butuh tata kelola limbah' }
  };

  return (
    <div className="relative z-10 pointer-events-none flex flex-col justify-between p-6 lg:p-10 pt-20 lg:pt-28 pb-8 w-full h-full min-h-[850px]">
      
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full pointer-events-auto gap-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs font-semibold mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SIPANDAI • AI Digital Twin & Policy Simulator
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Simulasikan Dampak Kebijakan Desa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 text-glow">
              Sebelum Diterapkan Nyata.
            </span>
          </h1>

          <p className="text-slate-300/90 text-sm sm:text-base max-w-xl leading-relaxed">
            Platform kembar digital (*Digital Twin*) cerdas yang memadukan data spasial geospasial, model proyeksi dampak lingkungan, dan rekomendasi kebijakan preskriptif bertenaga AI.
          </p>
        </motion.div>

        {/* Demo Controls & Village Selector */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
          {/* Preset Mode Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-3 rounded-2xl flex items-center justify-between border-emerald-500/30 bg-slate-900/70"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Mode Eksperimen Interaktif
            </div>
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={cn(
                "w-11 h-6 rounded-full p-1 transition-all relative flex items-center ml-3 cursor-pointer",
                isDemoMode ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-700"
              )}
            >
              <div className={cn("w-4 h-4 bg-white rounded-full transition-transform", isDemoMode ? "translate-x-5" : "translate-x-0")} />
            </button>
          </motion.div>

          {/* Scenario Selector */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-4 rounded-2xl flex flex-col gap-2.5 bg-slate-900/70"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Building className="w-3.5 h-3.5 text-emerald-400" /> Lokasi Uji Coba:
              </span>
              <span className="text-[10px] text-emerald-400/80 font-mono">
                {villageMeta[scenario]?.desc || ''}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['high-waste', 'eco-village', 'growing-economy'] as const).map((key) => {
                const isActive = scenario === key;
                return (
                  <button 
                    key={key}
                    onClick={() => setScenario(key)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-center cursor-pointer",
                      isActive 
                        ? "bg-emerald-500/25 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]" 
                        : "bg-slate-800/60 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                    )}
                  >
                    {villageMeta[key]?.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="flex flex-col lg:flex-row gap-6 items-end justify-between pointer-events-auto w-full pt-8">
        
        {/* Live Data Metric Cards */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:max-w-3xl"
        >
          <DataCard 
            title="Volume Timbulan Sampah" 
            value={currentWaste} 
            suffix=" Ton/bln" 
            icon={<Trash2 className="w-5 h-5 text-red-400" />} 
            trend={wasteTrend} 
            impact={wasteTrend < 0 ? "Tereduksi" : "Kritis"} 
            inverseGood={true}
          />
          <DataCard 
            title="Indeks Sirkular Ekonomi" 
            value={currentEconomy} 
            suffix="/100" 
            icon={<TrendingUp className="w-5 h-5 text-blue-400" />} 
            trend={economyTrend} 
            impact={economyTrend > 0 ? "Tumbuh" : null}
          />
          <DataCard 
            title="Skor Mutu Lingkungan" 
            value={currentEnvScore} 
            suffix="/100" 
            icon={<Leaf className="w-5 h-5 text-emerald-400" />} 
            trend={envTrend} 
            impact={envTrend > 10 ? "Berkelanjutan" : null}
          />
        </motion.div>

        {/* Interactive Policy Simulation Control Panel */}
        <div className="flex flex-col gap-3 w-full lg:w-[410px]">
          <AnimatePresence>
            {isDemoMode && (
              <motion.div 
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                className="glass-card p-3 rounded-2xl border-emerald-500/20 bg-emerald-500/5 flex gap-2"
              >
                <button 
                  onClick={() => onApplyScenario({ wasteBank: true, education: true, infrastructure: false })}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold hover:bg-emerald-500/25 transition-all cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" /> Paket Kompos & Bank Sampah
                </button>
                <button 
                  onClick={() => onApplyScenario({ wasteBank: false, education: false, infrastructure: true })}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-bold hover:bg-blue-500/25 transition-all cursor-pointer"
                >
                  <TrendingUp className="w-3.5 h-3.5" /> Fokus Fisik Infrastruktur
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden bg-slate-900/80 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Kontrol Intervensi</h3>
                  <p className="text-[11px] text-slate-400">Pilih opsi kebijakan yang disimulasikan</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-xl border border-white/10 shadow-inner">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <select 
                  value={duration} 
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <option value={1} className="bg-slate-900 text-white">1 Bulan</option>
                  <option value={3} className="bg-slate-900 text-white">3 Bulan</option>
                  <option value={6} className="bg-slate-900 text-white">6 Bulan</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <ToggleControl 
                label="Bangun Bank Sampah & Logistik" 
                detail="Mereduksi sampah harian & menumbuhkan sirkular ekonomi warga"
                active={state.wasteBank} 
                onClick={() => toggle('wasteBank')} 
              />
              <ToggleControl 
                label="Program Edukasi & Pelatihan Warga" 
                detail="Meningkatkan partisipasi pemilahan sampah dari level rumah tangga"
                active={state.education} 
                onClick={() => toggle('education')} 
              />
              <ToggleControl 
                label="Pembangunan Fisik Infrastruktur TPS-3R" 
                detail="Fasilitas pengolahan terpadu berbasis teknologi modular"
                active={state.infrastructure} 
                onClick={() => toggle('infrastructure')} 
              />
            </div>

            <div className="flex gap-2.5">
              <button 
                onClick={onReset}
                disabled={isLoading}
                className="flex items-center justify-center p-3.5 rounded-xl bg-slate-800/90 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                title="Reset Skenario ke Baseline"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={onRunSimulation}
                disabled={isLoading}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer",
                  isLoading 
                    ? "bg-slate-800 text-slate-400 cursor-not-allowed" 
                    : "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-extrabold shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-[1.01] active:scale-95"
                )}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.div 
                      className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                    Menghitung Proyeksi...
                  </span>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Jalankan Simulasi AI
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

function DataCard({ title, value, suffix, icon, trend, impact, inverseGood = false }: { 
  title: string; 
  value: number; 
  suffix: string; 
  icon: React.ReactNode; 
  trend: number; 
  impact?: string | null; 
  inverseGood?: boolean;
}) {
  const isPositive = inverseGood ? trend <= 0 : trend >= 0;
  const trendColor = isPositive ? "text-emerald-400" : "text-red-400";
  
  return (
    <div className="glass-card p-5 rounded-2xl flex-1 min-w-[210px] relative overflow-hidden group bg-slate-900/75 border-white/10">
      <AnimatePresence mode="wait">
        <motion.div 
          key={value}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          className={cn("absolute inset-0 pointer-events-none", isPositive ? "bg-emerald-500/15" : "bg-red-500/15")}
        />
      </AnimatePresence>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-slate-800/90 border border-white/10 text-white shadow-inner">
            {icon}
          </div>
          <span className="text-slate-300 font-semibold text-xs tracking-tight">{title}</span>
        </div>
        {impact && (
          <span className={cn(
            "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border", 
            isPositive 
              ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" 
              : "bg-red-500/15 text-red-300 border-red-500/30"
          )}>
            {impact}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          <CountUp end={value} duration={1.2} preserveValue />
        </span>
        <span className="text-slate-400 font-medium text-xs sm:text-sm">{suffix}</span>
      </div>

      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          {trend !== 0 && (
            <div className={cn("flex items-center gap-0.5 font-bold text-xs", trendColor)}>
              {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
              {Math.abs(Math.round(trend))}
            </div>
          )}
          <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">
            {trend === 0 ? "Stabil baseline" : "vs Baseline"}
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400/70">Realtime</span>
      </div>
    </div>
  );
}

function ToggleControl({ label, detail, active, onClick }: { label: string; detail?: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between p-3 rounded-2xl border transition-all text-left cursor-pointer",
        active 
          ? "bg-emerald-500/15 border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.15)]" 
          : "bg-slate-800/40 border-white/5 hover:border-white/15 hover:bg-slate-800/60"
      )}
    >
      <div className="flex flex-col pr-3">
        <span className={cn("text-xs font-semibold transition-colors", active ? "text-emerald-300 font-bold" : "text-slate-200")}>
          {label}
        </span>
        {detail && (
          <span className="text-[10px] text-slate-400 mt-0.5 leading-snug line-clamp-1">{detail}</span>
        )}
      </div>

      <div className={cn(
        "w-11 h-6 rounded-full p-1 transition-all shrink-0 flex items-center",
        active ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" : "bg-slate-700"
      )}>
        <motion.div 
          layout
          className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md"
          animate={{ x: active ? 20 : 0 }}
        >
          {active && <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />}
        </motion.div>
      </div>
    </button>
  );
}
