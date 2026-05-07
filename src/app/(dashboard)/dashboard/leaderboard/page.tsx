"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  Medal, 
  TrendingUp, 
  Users, 
  ArrowUp,
  Leaf,
  ChevronRight,
  Search,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const leaders = [
  { id: 1, name: "Budi Santoso", points: 12450, rank: "Juara", waste: "254 kg", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" },
  { id: 2, name: "Siti Aminah", points: 10200, rank: "Juara", waste: "210 kg", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti" },
  { id: 3, name: "Agus Pratama", points: 9800, rank: "Pejuang Eco", waste: "185 kg", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agus" },
  { id: 4, name: "Dewi Lestari", points: 8500, rank: "Pejuang Eco", waste: "160 kg", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi" },
  { id: 5, name: "Eko Prasetyo", points: 7200, rank: "Pejuang Eco", waste: "142 kg", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eko" },
];

export default function LeaderboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Papan Peringkat Eco
          </h1>
          <p className="text-muted-foreground mt-1">Apresiasi untuk para pahlawan lingkungan desa kita.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Cari pahlawan..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-primary/50 focus:outline-none transition-all"
            />
          </div>
          <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-slate-300">
            Bulan Ini
          </button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 items-end px-4 md:px-0">
        {/* Perak */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="order-2 md:order-1"
        >
          <div className="glass-panel p-8 rounded-[32px] text-center border-slate-400/20 relative group hover:border-slate-400/40 transition-colors">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full border-4 border-slate-400 overflow-hidden shadow-2xl bg-slate-800">
                <img src={leaders[1].image} alt={leaders[1].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-slate-900 border-4 border-[#0f172a]">
                <span className="text-sm font-black">2</span>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-bold text-white text-xl">{leaders[1].name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-1">{leaders[1].rank}</p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="text-3xl font-black text-white">{leaders[1].points.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">poin</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emas */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="glass-panel p-10 rounded-[40px] text-center border-yellow-500/20 relative scale-110 shadow-2xl shadow-yellow-500/10 group hover:border-yellow-500/40 transition-colors bg-gradient-to-b from-yellow-500/5 to-transparent">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="relative w-28 h-28 rounded-full border-4 border-yellow-500 overflow-hidden shadow-2xl bg-slate-800">
                <img src={leaders[0].image} alt={leaders[0].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-900 border-4 border-[#0f172a]">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            <div className="pt-14">
              <h3 className="font-bold text-white text-2xl">{leaders[0].name}</h3>
              <p className="text-xs text-yellow-500 uppercase tracking-widest font-black mt-1">{leaders[0].rank}</p>
              <div className="mt-8 flex items-center justify-center gap-2">
                <span className="text-5xl font-black text-white">{leaders[0].points.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">poin</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase">
                <TrendingUp className="w-4 h-4" />
                +12% Bulan Ini
              </div>
            </div>
          </div>
        </motion.div>

        {/* Perunggu */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="order-3"
        >
          <div className="glass-panel p-8 rounded-[32px] text-center border-orange-400/20 relative group hover:border-orange-400/40 transition-colors">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full border-4 border-orange-400 overflow-hidden shadow-2xl bg-slate-800">
                <img src={leaders[2].image} alt={leaders[2].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-orange-900 border-4 border-[#0f172a]">
                <span className="text-sm font-black">3</span>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-bold text-white text-xl">{leaders[2].name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-1">{leaders[2].rank}</p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="text-3xl font-black text-white">{leaders[2].points.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">poin</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full List */}
      <div className="mt-16 glass-panel rounded-[40px] overflow-hidden border-white/5 shadow-2xl">
        <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <h3 className="font-black text-white uppercase tracking-widest">Peringkat Lengkap</h3>
          <div className="hidden sm:flex gap-12 text-[10px] font-black text-muted-foreground uppercase tracking-widest px-4">
            <span className="w-24 text-right">Sampah Terkumpul</span>
            <span className="w-24 text-right">Total Poin</span>
          </div>
        </div>
        <div className="divide-y divide-white/5">
          {leaders.map((leader, i) => (
            <motion.div 
              key={leader.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-6 md:p-8 flex items-center justify-between group hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className={cn(
                  "text-xl font-black transition-colors w-6 text-center",
                  i < 3 ? "text-primary" : "text-white/20 group-hover:text-white"
                )}>
                  {i + 1}
                </span>
                <div className="w-14 h-14 rounded-full border border-white/10 overflow-hidden bg-slate-800 shadow-lg">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors text-lg">{leader.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{leader.rank}</p>
                </div>
              </div>
              
              <div className="flex gap-12 items-center">
                <div className="hidden sm:flex flex-col w-24 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Volume</span>
                  <span className="text-sm font-black text-slate-300">{leader.waste}</span>
                </div>
                <div className="flex flex-col w-24 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Poin</span>
                  <span className="text-lg font-black text-primary">{leader.points.toLocaleString()}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors ml-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border-primary/20 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
              <Medal className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Program Hadiah</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-8">
            Tukarkan poin Eco Anda dengan berbagai voucher listrik, paket data, atau sembako di gerai Bank Sampah Desa. Setiap poin sangat berarti!
          </p>
          <button className="flex items-center justify-center gap-3 bg-primary text-white font-black py-4 px-8 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full md:w-auto">
            Tukarkan Poin Sekarang
            <Zap className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-[40px] bg-gradient-to-br from-accent/10 to-transparent border-accent/20 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Statistik Desa</h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Pahlawan Aktif</p>
              <p className="text-3xl font-black text-white tracking-tight">1.2k+</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Total Dampak</p>
              <p className="text-3xl font-black text-white tracking-tight">12.5 Ton</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Total Poin</p>
              <p className="text-3xl font-black text-white tracking-tight">4.2M</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Peringkat Global</p>
              <p className="text-3xl font-black text-white tracking-tight">#12 Kec.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
