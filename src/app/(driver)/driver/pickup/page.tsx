"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  MapPin,
  Weight,
  Clock,
  CheckCircle2,
  X,
  ChevronRight,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PickupStatus = "DIAJUKAN" | "DITERIMA" | "DIJEMPUT" | "SELESAI";

interface Pickup {
  id: string;
  user: string;
  type: string;
  estimatedWeight: string;
  actualWeight?: string;
  location: string;
  pickupDate: string;
  status: PickupStatus;
  earnings?: string;
}

const allPickups: Pickup[] = [
  { id: "PK-049", user: "Dewi Lestari", type: "Logam", estimatedWeight: "8 kg", location: "RT 01 / RW 03", pickupDate: "Hari ini, 14:00", status: "DIAJUKAN" },
  { id: "PK-050", user: "Eko Prasetyo", type: "Plastik", estimatedWeight: "3 kg", location: "RT 03 / RW 01", pickupDate: "Besok, 09:00", status: "DIAJUKAN" },
  { id: "PK-051", user: "Rina Wati", type: "Organik", estimatedWeight: "15 kg", location: "RT 06 / RW 02", pickupDate: "Besok, 11:00", status: "DIAJUKAN" },
  { id: "PK-048", user: "Budi Santoso", type: "Plastik", estimatedWeight: "5 kg", actualWeight: "5.2 kg", location: "RT 04 / RW 02", pickupDate: "Hari ini, 10:00", status: "SELESAI", earnings: "Rp 26.000" },
  { id: "PK-047", user: "Siti Aminah", type: "Organik", estimatedWeight: "12 kg", actualWeight: "12.0 kg", location: "RT 02 / RW 01", pickupDate: "Kemarin", status: "SELESAI", earnings: "Rp 36.000" },
];

const wasteEmoji: Record<string, string> = {
  Plastik: "🥤", Organik: "🍎", Kertas: "📄", Logam: "🥫", Kaca: "🍾", Lainnya: "📦",
};

const statusConfig: Record<PickupStatus, { label: string; color: string }> = {
  DIAJUKAN: { label: "Menunggu", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  DITERIMA: { label: "Diterima", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  DIJEMPUT: { label: "Dalam Perjalanan", color: "bg-accent/10 text-accent border-accent/20" },
  SELESAI: { label: "Selesai", color: "bg-primary/10 text-primary border-primary/20" },
};

export default function DriverPickupPage() {
  const [filter, setFilter] = useState<"SEMUA" | PickupStatus>("SEMUA");
  const [selectedPickup, setSelectedPickup] = useState<Pickup | null>(null);
  const [actualWeight, setActualWeight] = useState("");

  const filtered = filter === "SEMUA"
    ? allPickups
    : allPickups.filter((p) => p.status === filter);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Truck className="w-8 h-8 text-primary" />
            Antrian Pickup
          </h1>
          <p className="text-muted-foreground mt-1">Kelola dan selesaikan tugas penjemputan sampah.</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
          <Filter className="w-4 h-4 text-muted-foreground ml-2" />
          {(["SEMUA", "DIAJUKAN", "DITERIMA", "DIJEMPUT", "SELESAI"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all",
                filter === s ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
              )}
            >
              {s === "SEMUA" ? "Semua" : statusConfig[s].label}
            </button>
          ))}
        </div>
      </div>

      {/* Pickup list */}
      <div className="space-y-4">
        {filtered.map((pickup, i) => (
          <motion.div
            key={pickup.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 rounded-[28px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer"
            onClick={() => setSelectedPickup(pickup)}
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 transition-transform">
                {wasteEmoji[pickup.type] ?? "📦"}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-white">{pickup.user}</h3>
                  <span className="text-[10px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase font-bold tracking-widest">{pickup.id}</span>
                  <span className={cn("text-[10px] font-black uppercase px-2 py-0.5 rounded-full border", statusConfig[pickup.status].color)}>
                    {statusConfig[pickup.status].label}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Weight className="w-4 h-4 text-primary" />~{pickup.estimatedWeight}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" />{pickup.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-yellow-400" />{pickup.pickupDate}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {pickup.status === "SELESAI" && pickup.earnings && (
                <span className="text-sm font-black text-primary">{pickup.earnings}</span>
              )}
              {pickup.status === "DIAJUKAN" && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedPickup(pickup); }}
                  className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Ambil Tugas
                </button>
              )}
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="glass-panel p-16 rounded-[32px] text-center">
            <Truck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground font-medium">Tidak ada pickup dengan status ini</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPickup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPickup(null)}
              className="absolute inset-0 bg-[#030a10]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[40px] shadow-2xl p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white">Detail Pickup</h2>
                <button onClick={() => setSelectedPickup(null)} className="p-3 hover:bg-white/5 rounded-full transition-colors">
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-4xl">{wasteEmoji[selectedPickup.type] ?? "📦"}</div>
                  <div>
                    <p className="font-black text-white text-lg">{selectedPickup.user}</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{selectedPickup.id} • {selectedPickup.type}</p>
                  </div>
                </div>

                {[
                  { icon: MapPin, label: "Lokasi", value: selectedPickup.location, color: "text-accent" },
                  { icon: Clock, label: "Jadwal", value: selectedPickup.pickupDate, color: "text-yellow-400" },
                  { icon: Weight, label: "Est. Berat", value: selectedPickup.estimatedWeight, color: "text-primary" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <item.icon className={cn("w-5 h-5", item.color)} />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Actual weight input for completing pickup */}
                {(selectedPickup.status === "DITERIMA" || selectedPickup.status === "DIJEMPUT") && (
                  <div className="space-y-3 pt-2">
                    <label className="text-sm font-bold text-slate-300 ml-1">Berat Aktual (kg)</label>
                    <div className="relative">
                      <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="number"
                        placeholder="0.0"
                        value={actualWeight}
                        onChange={(e) => setActualWeight(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all font-bold"
                      />
                    </div>
                  </div>
                )}

                {selectedPickup.status === "SELESAI" && (
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-bold text-white">Pickup Selesai</p>
                      <p className="text-xs text-primary font-black">{selectedPickup.earnings} diterima</p>
                    </div>
                  </div>
                )}
              </div>

              {selectedPickup.status !== "SELESAI" && (
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setSelectedPickup(null)}
                    className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-black text-muted-foreground hover:bg-white/10 transition-all"
                  >
                    Tutup
                  </button>
                  <button
                    onClick={() => setSelectedPickup(null)}
                    className="flex-1 py-4 rounded-2xl bg-primary text-white font-black text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    {selectedPickup.status === "DIAJUKAN" ? "Ambil Tugas" : "Selesaikan"}
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
