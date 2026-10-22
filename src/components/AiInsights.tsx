"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Loader2, Lightbulb, Target, ShieldCheck } from "lucide-react";

interface AiInsightsProps {
  insightText: string;
  isLoading: boolean;
}

export function AiInsights({ insightText, isLoading }: AiInsightsProps) {
  return (
    <section id="insight" className="w-full pt-10 pb-20">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Glow backdrop */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-blue-500/40 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

        <div className="relative glass-card p-7 sm:p-10 rounded-3xl border border-emerald-500/30 bg-slate-900/85 flex flex-col items-center text-center shadow-2xl">
          
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Decision Intelligence Core • Prescriptive Engine
          </div>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
            {isLoading ? (
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            ) : (
              <BrainCircuit className="w-8 h-8 text-emerald-400" />
            )}
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Rekomendasi Strategis AI untuk Perangkat Desa
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mb-8">
            Sintesis data real-time berbasis analisis multivariat untuk panduan perumusan APBDes dan alokasi dana desa.
          </p>
          
          <div className="min-h-[110px] w-full max-w-2xl bg-slate-950/70 rounded-2xl p-6 border border-white/10 shadow-inner flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                SIPANDAI-AI Engine Output
              </span>
            </div>
            
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans relative">
              {isLoading ? (
                <span className="text-slate-400 italic flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin inline" />
                  Mengkalkulasi rekomendasi kebijakan paling optimal...
                </span>
              ) : (
                insightText
              )}
              {!isLoading && (
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-emerald-400 ml-1.5 translate-y-0.5"
                />
              )}
            </p>
          </div>

          {/* Quick value badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-6 pt-6 border-t border-white/5 text-left">
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-800/40 border border-white/5">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-[11px]">
                <div className="font-semibold text-slate-200">Rekomendasi Preskriptif</div>
                <div className="text-slate-400">Bukan sekadar statistik visual</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-800/40 border border-white/5">
              <Target className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-[11px]">
                <div className="font-semibold text-slate-200">Efisiensi Anggaran</div>
                <div className="text-slate-400">Minimalkan trial-error APBDes</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-800/40 border border-white/5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="text-[11px]">
                <div className="font-semibold text-slate-200">Transparansi Publik</div>
                <div className="text-slate-400">Musrenbang berbasis data akurat</div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
