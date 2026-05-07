"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  BookOpen, 
  Search, 
  Filter, 
  ChevronRight,
  Clock,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const contents = [
  {
    id: 1,
    title: "Dasar-Dasar Pemilahan Sampah",
    description: "Pelajari cara efektif memisahkan sampah rumah tangga untuk memaksimalkan efisiensi daur ulang.",
    type: "Artikel",
    duration: "5 menit baca",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400",
    points: 50
  },
  {
    id: 2,
    title: "Masterclass Pengomposan",
    description: "Ubah limbah dapur organik Anda menjadi pupuk kaya nutrisi untuk kebun Anda.",
    type: "Video",
    duration: "12 menit",
    image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=400",
    points: 100
  },
  {
    id: 3,
    title: "Daur Ulang Botol Plastik",
    description: "Cara kreatif mengubah botol plastik menjadi dekorasi rumah yang indah dan fungsional.",
    type: "Video",
    duration: "8 menit",
    image: "https://images.unsplash.com/photo-1605600611284-19561ad7ddf1?auto=format&fit=crop&q=80&w=400",
    points: 80
  },
  {
    id: 4,
    title: "Memahami Ekonomi Sirkular",
    description: "Gambaran besar tentang bagaimana sampah menjadi sumber daya dalam ekosistem desa.",
    type: "Artikel",
    duration: "10 menit baca",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=400",
    points: 120
  }
];

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Pusat Edukasi Eco
          </h1>
          <p className="text-muted-foreground mt-1">Kuasai seni ekonomi sirkular dan raih poin tambahan.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Cari tutorial..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm focus:border-primary/50 focus:outline-none transition-all"
            />
          </div>
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10">
            <Filter className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="glass-panel p-8 rounded-[32px] bg-primary/5 border-primary/20 lg:col-span-1 h-fit">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-black text-white">Progres Belajar</h3>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">Anda telah menyelesaikan 2 dari 12 materi bulan ini.</p>
          
          <div className="mt-8 space-y-3">
            <div className="flex justify-between text-xs font-black uppercase tracking-widest">
              <span className="text-muted-foreground">Target Bulanan</span>
              <span className="text-primary">16%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "16%" }}
                className="h-full bg-primary" 
              />
            </div>
          </div>
          
          <div className="mt-10 space-y-3">
            <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Pencapaian Baru</h4>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center grayscale">🌱</div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center grayscale">♻️</div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center grayscale">🌏</div>
            </div>
          </div>

          <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-black hover:bg-white/10 transition-all uppercase tracking-widest text-white">
            Lihat Sertifikat
          </button>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {contents.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group overflow-hidden rounded-[32px] flex flex-col border-white/5 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-xl border shadow-2xl",
                    item.type === "Video" ? "bg-accent/30 text-accent border-accent/20" : "bg-primary/30 text-primary border-primary/20"
                  )}>
                    {item.type}
                  </span>
                </div>
                {item.type === "Video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-10 h-10 fill-current" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-primary uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    +{item.points} POIN
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-8">
                  {item.description}
                </p>
                <button className="mt-auto flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all font-black text-sm uppercase tracking-widest">
                  {item.type === "Video" ? "Tonton Sekarang" : "Baca Artikel"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
