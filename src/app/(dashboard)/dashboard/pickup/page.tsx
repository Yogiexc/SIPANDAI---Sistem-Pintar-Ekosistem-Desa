"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  MapPin, 
  Weight, 
  Clock, 
  ChevronRight,
  Info,
  CheckCircle2,
  X,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const wasteTypes = [
  { id: "PLASTIK", name: "Plastik", icon: "🥤", color: "bg-blue-500/10 text-blue-500" },
  { id: "ORGANIK", name: "Organik", icon: "🍎", color: "bg-green-500/10 text-green-500" },
  { id: "KERTAS", name: "Kertas", icon: "📄", color: "bg-yellow-500/10 text-yellow-500" },
  { id: "LOGAM", name: "Logam", icon: "🥫", color: "bg-slate-500/10 text-slate-500" },
  { id: "KACA", name: "Kaca", icon: "🍾", color: "bg-cyan-500/10 text-cyan-500" },
  { id: "LAINNYA", name: "Lainnya", icon: "📦", color: "bg-purple-500/10 text-purple-500" },
];

export default function PickupPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");

  const pickups = [
    { id: "REQ-001", type: "Plastik", weight: "2.5kg", location: "RT 04 / RW 02", status: "Diajukan", date: "Hari ini" },
    { id: "REQ-002", type: "Organik", weight: "10kg", location: "RT 02 / RW 01", status: "Terjadwal", date: "Besok, 10:00" },
    { id: "REQ-003", type: "Logam", weight: "5kg", location: "RT 05 / RW 02", status: "Selesai", date: "Kemarin" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white">Jemput Sampah</h1>
          <p className="text-muted-foreground mt-1">Ajukan penjemputan dan raih poin eco desa.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-primary/20 w-full md:w-auto"
        >
          <Plus className="w-6 h-6" />
          Ajukan Jemput Baru
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Requests */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-bold text-white mb-2">Riwayat Pengajuan Saya</h2>
          <div className="space-y-4">
            {pickups.map((pickup, i) => (
              <motion.div
                key={pickup.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-[28px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/5 group-hover:scale-110 transition-transform">
                    {wasteTypes.find(t => t.name === pickup.type)?.icon || "📦"}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">Jemput {pickup.type}</h3>
                      <span className="text-[10px] text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase font-bold tracking-widest">{pickup.id}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Weight className="w-4 h-4 text-primary" /> {pickup.weight}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> {pickup.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <div className={cn(
                      "text-[10px] font-black uppercase px-3 py-1 rounded-full border inline-block",
                      pickup.status === "Diajukan" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
                      pickup.status === "Terjadwal" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                      "bg-primary/10 text-primary border-primary/20"
                    )}>
                      {pickup.status}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-2 flex items-center sm:justify-end gap-1.5">
                      <Clock className="w-3 h-3" /> {pickup.date}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors hidden sm:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-[32px] bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Cara Kerja
            </h3>
            <ul className="space-y-6">
              {[
                { title: "Pilah Sampah Anda", desc: "Pisahkan antara plastik, organik, dan lainnya." },
                { title: "Ajukan Penjemputan", desc: "Isi form dengan estimasi berat dan lokasi." },
                { title: "Dapatkan Poin Eco", desc: "Poin akan masuk setelah validasi oleh tim kolektor." },
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-sm font-black shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-[32px] border-accent/10">
            <h3 className="font-bold text-white mb-4">Panduan Poin</h3>
            <div className="space-y-4">
              {wasteTypes.slice(0, 4).map(type => (
                <div key={type.id} className="flex items-center justify-between text-sm">
                  <span className="text-slate-300 font-medium">{type.name}</span>
                  <span className="text-primary font-black">100 poin / kg</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-[#030a10]/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0f172a] border border-white/10 rounded-[40px] shadow-2xl p-8 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white">Ajukan Jemput Sampah</h2>
                <button 
                  onClick={() => setShowForm(false)}
                  className="p-3 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-300 ml-1">Jenis Sampah</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {wasteTypes.map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={cn(
                          "flex flex-col items-center justify-center gap-3 p-5 rounded-3xl border transition-all",
                          selectedType === type.id 
                            ? "bg-primary/10 border-primary shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                            : "bg-white/5 border-white/5 hover:border-white/10"
                        )}
                      >
                        <span className="text-3xl">{type.icon}</span>
                        <span className={cn("text-xs font-black uppercase tracking-widest", selectedType === type.id ? "text-primary" : "text-muted-foreground")}>
                          {type.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-300 ml-1">Estimasi Berat (kg)</label>
                    <div className="relative">
                      <Weight className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input 
                        type="number" 
                        placeholder="0.0"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-14 pr-4 text-white transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-300 ml-1">Tanggal Jemput</label>
                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-14 pr-4 text-white transition-all font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Lokasi Rumah / Alamat</label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Contoh: Blok A No 12, RT 04"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-14 pr-4 text-white transition-all font-bold"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[24px] transition-all shadow-xl shadow-primary/20 mt-4 flex items-center justify-center gap-3 text-lg"
                >
                  Konfirmasi Pengajuan
                  <CheckCircle2 className="w-6 h-6" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
