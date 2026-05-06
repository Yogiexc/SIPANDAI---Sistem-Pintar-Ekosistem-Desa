"use client";

import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section className="w-full py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white leading-tight">
              Membangun Desa yang Lebih Cerdas, <br/>
              <span className="text-emerald-400">Dimulai dari Data.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Visi kami adalah memberdayakan setiap desa di Indonesia dengan teknologi Digital Twin. Dengan mensimulasikan dampak kebijakan sebelum diterapkan, perangkat desa dapat meminimalkan risiko dan memaksimalkan kesejahteraan warga.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">90%</span>
                <span className="text-slate-500 text-sm font-medium">Akurasi Prediksi</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">3x</span>
                <span className="text-slate-500 text-sm font-medium">Lebih Cepat</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-slate-500 text-sm font-medium">Analisis AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8a9ba332f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="z-10 p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Pantau Real-Time</h4>
                <p className="text-slate-300 text-sm">Integrasi IoT dan data sensor untuk akurasi Digital Twin yang lebih tinggi.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
