"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Trash2, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  Map as MapIcon,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const wasteData = [
  { name: 'Plastik', value: 450, color: '#3b82f6' },
  { name: 'Organik', value: 300, color: '#10b981' },
  { name: 'Kertas', value: 150, color: '#f59e0b' },
  { name: 'Logam', value: 100, color: '#64748b' },
];

const transactions = [
  { id: "TX-901", user: "Toko Desa", amount: "Rp 1.250.000", type: "Penjualan", date: "Hari ini" },
  { id: "TX-902", user: "Budi Santoso", amount: "-500 poin", type: "Penukaran", date: "Kemarin" },
  { id: "TX-903", user: "Hibah Pemkab", amount: "Rp 5.000.000", type: "Hibah", date: "2 hari lalu" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" />
            Pusat Komando Admin
          </h1>
          <p className="text-muted-foreground mt-1">Manajemen menyeluruh ekosistem sampah desa.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            2 Laporan Pending
          </div>
          <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
            Pengaturan Sistem
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Pendapatan (Bulanan)", value: "Rp 12.4M", icon: DollarSign, color: "text-green-400" },
          { title: "Total Warga", value: "1,240", icon: Users, color: "text-blue-400" },
          { title: "Tingkat Koleksi", value: "94%", icon: Trash2, color: "text-primary" },
          { title: "Kesehatan Sistem", value: "Optimal", icon: ShieldCheck, color: "text-accent" },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-[24px] border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.title}</p>
            <h3 className="text-2xl font-black text-white mt-1 tracking-tight">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-panel p-8 rounded-[32px] border-white/5">
          <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-widest">Analisis Komposisi Sampah</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip 
                  cursor={{fill: '#ffffff05'}}
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {wasteData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-[32px] flex flex-col border-white/5">
          <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-widest">Transaksi Terbaru</h3>
          <div className="space-y-8 flex-1">
            {transactions.map((tx, i) => (
              <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-widest",
                    tx.type === "Penjualan" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                  )}>
                    {tx.type[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">{tx.user}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-white">{tx.amount}</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{tx.type}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-black hover:bg-white/10 transition-all uppercase tracking-widest text-white">
            Lihat Semua Ledger
          </button>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-[32px] border-white/5">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white flex items-center gap-3 uppercase tracking-widest">
            <MapIcon className="w-6 h-6 text-primary" />
            Pelacakan Kolektor Langsung
          </h3>
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            3 Kolektor Aktif
          </span>
        </div>
        <div className="h-80 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden group shadow-inner">
           {/* Placeholder for Map or Visual */}
           <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i6418!3i4288!2m3!1e0!2sm!3i600000000!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover" />
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-6 h-6 bg-primary rounded-full animate-ping mb-4 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
             <p className="text-xs font-black text-white uppercase tracking-[0.3em] bg-[#030a10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">Feed Peta Real-time</p>
           </div>
        </div>
      </div>
    </div>
  );
}
