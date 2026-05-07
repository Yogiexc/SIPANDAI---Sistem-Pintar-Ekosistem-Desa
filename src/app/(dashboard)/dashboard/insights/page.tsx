"use client";

import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  TrendingUp, 
  Lightbulb, 
  AlertTriangle, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    title: "Potensi Plastik Tinggi",
    category: "Ekonomi",
    description: "Volume sampah plastik desa mencapai 500kg bulan ini. Dengan mengolahnya menjadi material 'Paving Block', desa bisa meraih pendapatan sekitar Rp 5.000.000.",
    impact: "Tinggi",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Tren Sampah Organik",
    category: "Lingkungan",
    description: "Koleksi sampah organik turun 10%. Kemungkinan warga mulai mengompos mandiri, atau perlu optimasi rute koleksi di wilayah RT 03.",
    impact: "Sedang",
    icon: BarChart3,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    title: "Optimasi Poin Anda",
    category: "Personal",
    description: "Anda hanya butuh 50kg lagi untuk mencapai peringkat 'Juara'. Fokus pada pengumpulan kertas bersih dan logam untuk pengganda poin minggu ini.",
    impact: "Perlu Tindakan",
    icon: Sparkles,
    color: "text-accent",
    bg: "bg-accent/10"
  }
];

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-primary" />
            Wawasan AI Desa
          </h1>
          <p className="text-muted-foreground mt-1">Analisis cerdas untuk ekosistem sampah di desa Anda.</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest text-white">
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          Perbarui Wawasan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-10 rounded-[32px] group relative overflow-hidden border-white/5 shadow-2xl hover:border-primary/20 transition-all"
          >
            <div className="flex items-center justify-between mb-8">
              <div className={cn("p-4 rounded-[20px]", insight.bg)}>
                <insight.icon className={cn("w-7 h-7", insight.color)} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                {insight.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{insight.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              {insight.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">Dampak</span>
                <span className={cn(
                  "text-xs font-black uppercase tracking-wider",
                  insight.impact === "Tinggi" ? "text-primary" : 
                  insight.impact === "Perlu Tindakan" ? "text-accent" : "text-blue-400"
                )}>{insight.impact}</span>
              </div>
              <button className="p-3 rounded-2xl bg-white/5 hover:bg-primary/20 hover:text-primary transition-all group/btn">
                <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[40px] border-primary/20 bg-gradient-to-br from-primary/10 to-transparent shadow-2xl"
        >
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
            <div className="p-2 rounded-xl bg-primary/20 text-primary">
              <Globe className="w-6 h-6" />
            </div>
            Berita Ekonomi Sirkular
          </h3>
          <div className="space-y-6">
            {[
              "Regulasi baru tentang pembatasan plastik sekali pakai di tingkat kabupaten.",
              "Desa Sukamaju sukses mengubah sampah menjadi BUMDes yang menguntungkan.",
              "Harga serpihan plastik PET daur ulang naik 15% minggu ini."
            ].map((news, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group border border-transparent hover:border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                <p className="text-sm text-slate-200 leading-relaxed font-medium">{news}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[40px] border-accent/20 shadow-2xl"
        >
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
            <div className="p-2 rounded-xl bg-accent/20 text-accent">
              <AlertTriangle className="w-6 h-6" />
            </div>
            Analisis Risiko
          </h3>
          <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-20 h-20" />
            </div>
            <h4 className="text-lg font-black text-accent mb-3 uppercase tracking-widest">Peringatan Overflow</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Berdasarkan data historis, wilayah RT 02 memproduksi 20% lebih banyak sampah selama musim panen. Siapkan armada kolektor tambahan untuk minggu depan.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <span className="text-xs text-muted-foreground italic font-medium">Analisis terakhir: 2 jam yang lalu</span>
            <button className="text-sm font-black text-accent hover:underline uppercase tracking-widest">Lihat Laporan Lengkap</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
