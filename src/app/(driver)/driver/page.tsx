"use client";

import { motion } from "framer-motion";
import {
  Truck,
  DollarSign,
  Weight,
  Trophy,
  ArrowUpRight,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const stats = [
  { title: "Total Pickup", value: "48", change: "+3 minggu ini", icon: Truck, color: "text-primary", bg: "bg-primary/10" },
  { title: "Total Berat", value: "312 kg", change: "+24 kg minggu ini", icon: Weight, color: "text-secondary", bg: "bg-secondary/10" },
  { title: "Pendapatan", value: "Rp 1.56 Jt", change: "+Rp 120rb minggu ini", icon: DollarSign, color: "text-accent", bg: "bg-accent/10" },
  { title: "Eco Points", value: "31,200", change: "+2,400 minggu ini", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
];

const recentPickups = [
  { id: "PK-048", user: "Budi Santoso", type: "Plastik", weight: "5.2 kg", location: "RT 04 / RW 02", status: "SELESAI", time: "2 jam lalu", earnings: "Rp 26.000" },
  { id: "PK-047", user: "Siti Aminah", type: "Organik", weight: "12.0 kg", location: "RT 02 / RW 01", status: "SELESAI", time: "Kemarin", earnings: "Rp 36.000" },
  { id: "PK-046", user: "Agus Pratama", type: "Kertas", weight: "3.5 kg", location: "RT 05 / RW 02", status: "SELESAI", time: "2 hari lalu", earnings: "Rp 10.500" },
];

const pendingPickups = [
  { id: "PK-049", user: "Dewi Lestari", type: "Logam", estimatedWeight: "8 kg", location: "RT 01 / RW 03", pickupDate: "Hari ini, 14:00" },
  { id: "PK-050", user: "Eko Prasetyo", type: "Plastik", estimatedWeight: "3 kg", location: "RT 03 / RW 01", pickupDate: "Besok, 09:00" },
];

const wasteEmoji: Record<string, string> = {
  Plastik: "🥤", Organik: "🍎", Kertas: "📄", Logam: "🥫", Kaca: "🍾", Lainnya: "📦",
};

export default function DriverDashboard() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight text-white"
          >
            Halo, Driver! 🚛
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-1"
          >
            Pantau pickup, pendapatan, dan peringkat Anda hari ini.
          </motion.p>
        </div>
        <Link
          href="/driver/pickup"
          className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg md:w-auto w-full group"
        >
          <Truck className="w-6 h-6" />
          Lihat Antrian Pickup
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-3xl relative overflow-hidden group"
          >
            <div className="flex items-start justify-between">
              <div className={cn("p-3 rounded-2xl", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.title}</p>
              <h3 className="text-2xl font-black text-white mt-1">{stat.value}</h3>
              <p className="text-[10px] text-primary mt-1 font-bold">{stat.change}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Pickups */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Pickup Menunggu</h2>
            <Link href="/driver/pickup" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Lihat Semua <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {pendingPickups.length === 0 ? (
            <div className="glass-panel p-12 rounded-[32px] text-center">
              <Truck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Tidak ada pickup menunggu</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingPickups.map((pickup, i) => (
                <motion.div
                  key={pickup.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-[28px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 transition-transform">
                      {wasteEmoji[pickup.type] ?? "📦"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white">{pickup.user}</h3>
                        <span className="text-[10px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase font-bold tracking-widest">{pickup.id}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Weight className="w-4 h-4 text-primary" />~{pickup.estimatedWeight}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" />{pickup.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-yellow-400" />{pickup.pickupDate}</span>
                      </div>
                    </div>
                  </div>
                  <button className="shrink-0 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Ambil Tugas
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Recent completed */}
          <div className="flex items-center justify-between mt-8">
            <h2 className="text-lg font-bold text-white">Riwayat Pickup</h2>
            <Link href="/driver/earnings" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Lihat Pendapatan <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentPickups.map((pickup, i) => (
              <motion.div
                key={pickup.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 rounded-[24px] flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl border border-primary/10">
                    {wasteEmoji[pickup.type] ?? "📦"}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{pickup.user}</h4>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5">
                      <Weight className="w-3 h-3" />{pickup.weight}
                      <MapPin className="w-3 h-3 ml-1" />{pickup.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-primary">{pickup.earnings}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{pickup.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="space-y-6">
          {/* Today summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-[32px] border-accent/20"
          >
            <h3 className="text-lg font-bold text-white mb-6">Ringkasan Hari Ini</h3>
            <div className="space-y-5">
              {[
                { label: "Pickup Selesai", value: "3", icon: CheckCircle2, color: "text-primary" },
                { label: "Total Berat", value: "20.7 kg", icon: Weight, color: "text-secondary" },
                { label: "Pendapatan", value: "Rp 72.500", icon: DollarSign, color: "text-accent" },
                { label: "Poin Diraih", value: "+2.070", icon: Trophy, color: "text-yellow-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-4 h-4", item.color)} />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-sm font-black text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rate card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel p-8 rounded-[32px]"
          >
            <h3 className="font-bold text-white mb-4">Tarif per Jenis Sampah</h3>
            <div className="space-y-3">
              {[
                { type: "Plastik", rate: "Rp 5.000/kg", points: "100 poin/kg" },
                { type: "Organik", rate: "Rp 3.000/kg", points: "60 poin/kg" },
                { type: "Kertas", rate: "Rp 3.000/kg", points: "60 poin/kg" },
                { type: "Logam", rate: "Rp 8.000/kg", points: "160 poin/kg" },
                { type: "Kaca", rate: "Rp 2.000/kg", points: "40 poin/kg" },
              ].map((item) => (
                <div key={item.type} className="flex items-center justify-between text-sm py-1 border-b border-white/5 last:border-0">
                  <span className="text-slate-300 font-medium">{item.type}</span>
                  <div className="text-right">
                    <p className="text-primary font-black text-xs">{item.rate}</p>
                    <p className="text-muted-foreground text-[10px]">{item.points}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
