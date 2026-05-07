"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Truck,
  Weight,
  DollarSign,
  TrendingUp,
  Search,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const drivers = [
  { id: 1, name: "Budi Driver", pickups: 48, weight: "312 kg", earnings: "Rp 1.56 Jt", points: 31200, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=BudiDriver" },
  { id: 2, name: "Andi Kurniawan", pickups: 42, weight: "278 kg", earnings: "Rp 1.39 Jt", points: 27800, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi" },
  { id: 3, name: "Rudi Hartono", pickups: 38, weight: "245 kg", earnings: "Rp 1.22 Jt", points: 24500, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rudi" },
  { id: 4, name: "Slamet Riyadi", pickups: 31, weight: "198 kg", earnings: "Rp 990rb", points: 19800, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Slamet" },
  { id: 5, name: "Wahyu Santoso", pickups: 27, weight: "172 kg", earnings: "Rp 860rb", points: 17200, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wahyu" },
];

export default function DriverLeaderboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Peringkat Driver
          </h1>
          <p className="text-muted-foreground mt-1">Driver terbaik berdasarkan pickup, berat, dan pendapatan.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari driver..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-primary/50 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Podium top 3 */}
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
                <img src={drivers[1].image} alt={drivers[1].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-slate-900 border-4 border-[#0f172a]">
                <span className="text-sm font-black">2</span>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-bold text-white text-xl">{drivers[1].name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-1">Driver Andalan</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Pickup</p>
                  <p className="text-lg font-black text-white">{drivers[1].pickups}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Poin</p>
                  <p className="text-lg font-black text-primary">{drivers[1].points.toLocaleString()}</p>
                </div>
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
                <img src={drivers[0].image} alt={drivers[0].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-900 border-4 border-[#0f172a]">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            <div className="pt-14">
              <h3 className="font-bold text-white text-2xl">{drivers[0].name}</h3>
              <p className="text-xs text-yellow-500 uppercase tracking-widest font-black mt-1">Driver Terbaik</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Pickup</p>
                  <p className="text-2xl font-black text-white">{drivers[0].pickups}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Poin</p>
                  <p className="text-2xl font-black text-primary">{drivers[0].points.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase">
                <TrendingUp className="w-4 h-4" />
                +8% Bulan Ini
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
                <img src={drivers[2].image} alt={drivers[2].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 right-0 w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-orange-900 border-4 border-[#0f172a]">
                <span className="text-sm font-black">3</span>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-bold text-white text-xl">{drivers[2].name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-1">Driver Handal</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Pickup</p>
                  <p className="text-lg font-black text-white">{drivers[2].pickups}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Poin</p>
                  <p className="text-lg font-black text-primary">{drivers[2].points.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full list */}
      <div className="mt-16 glass-panel rounded-[40px] overflow-hidden border-white/5 shadow-2xl">
        <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <h3 className="font-black text-white uppercase tracking-widest">Peringkat Lengkap</h3>
          <div className="hidden sm:flex gap-8 text-[10px] font-black text-muted-foreground uppercase tracking-widest px-4">
            <span className="w-16 text-right">Pickup</span>
            <span className="w-20 text-right">Berat</span>
            <span className="w-24 text-right">Pendapatan</span>
            <span className="w-20 text-right">Poin</span>
          </div>
        </div>
        <div className="divide-y divide-white/5">
          {drivers.map((driver, i) => (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="p-6 md:p-8 flex items-center justify-between group hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className={cn(
                  "text-xl font-black w-6 text-center",
                  i < 3 ? "text-primary" : "text-white/20 group-hover:text-white"
                )}>
                  {i + 1}
                </span>
                <div className="w-14 h-14 rounded-full border border-white/10 overflow-hidden bg-slate-800 shadow-lg">
                  <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors text-lg">{driver.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                    <Truck className="w-3 h-3" /> Driver Aktif
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <div className="hidden sm:flex flex-col w-16 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Pickup</span>
                  <span className="text-sm font-black text-slate-300 flex items-center justify-end gap-1">
                    <Truck className="w-3 h-3 text-primary" />{driver.pickups}
                  </span>
                </div>
                <div className="hidden sm:flex flex-col w-20 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Berat</span>
                  <span className="text-sm font-black text-slate-300 flex items-center justify-end gap-1">
                    <Weight className="w-3 h-3 text-accent" />{driver.weight}
                  </span>
                </div>
                <div className="hidden sm:flex flex-col w-24 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Pendapatan</span>
                  <span className="text-sm font-black text-slate-300 flex items-center justify-end gap-1">
                    <DollarSign className="w-3 h-3 text-green-400" />{driver.earnings}
                  </span>
                </div>
                <div className="flex flex-col w-20 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Poin</span>
                  <span className="text-lg font-black text-primary">{driver.points.toLocaleString()}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
