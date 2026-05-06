"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Loader2 } from "lucide-react";

interface AiInsightsProps {
  insightText: string;
  isLoading: boolean;
}

export function AiInsights({ insightText, isLoading }: AiInsightsProps) {
  return (
    <section id="insight" className="w-full pt-12 pb-20">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 animate-pulse"></div>
        <div className="relative glass-card p-8 lg:p-12 rounded-3xl border border-white/10 flex flex-col items-center text-center">
          
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
            {isLoading ? (
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            ) : (
              <BrainCircuit className="w-8 h-8 text-emerald-400" />
            )}
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Analisis Dampak AI <Sparkles className="w-5 h-5 text-emerald-400" />
          </h2>
          
          <div className="min-h-[100px] w-full max-w-2xl">
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed font-mono relative">
              <span className="text-emerald-400 mr-2">{"System >"}</span>
              {isLoading ? "Menganalisis parameter simulasi..." : insightText}
              {!isLoading && (
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-5 bg-emerald-400 ml-1 translate-y-1"
                />
              )}
            </p>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
