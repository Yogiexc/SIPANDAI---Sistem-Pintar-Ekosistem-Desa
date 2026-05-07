"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Trash2, 
  TrendingUp, 
  Users, 
  Leaf, 
  ArrowUpRight, 
  Clock,
  CheckCircle2,
  Calendar,
  Zap,
  BrainCircuit,
  ChevronRight,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

const data = [
  { name: 'Sen', waste: 40, points: 240 },
  { name: 'Sel', waste: 30, points: 139 },
  { name: 'Rab', waste: 65, points: 980 },
  { name: 'Kam', waste: 45, points: 390 },
  { name: 'Jum', waste: 90, points: 480 },
  { name: 'Sab', waste: 70, points: 380 },
  { name: 'Min', waste: 55, points: 430 },
];

const stats = [
  { title: "Total Sampah Terkumpul", value: "1,284 kg", change: "+12.5%", icon: Trash2, color: "text-primary", bg: "bg-primary/10" },
  { title: "Warga Aktif", value: "342", change: "+5.2%", icon: Users, color: "text-secondary", bg: "bg-secondary/10" },
  { title: "Poin Eco Diraih", value: "42,900", change: "+18.3%", icon: Zap, color: "text-accent", bg: "bg-accent/10" },
  { title: "CO2 Tereduksi", value: "890 kg", change: "+10.1%", icon: Leaf, color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

const recentPickups = [
  { id: "PK-102", user: "Budi Santoso", type: "Plastik", weight: "5.2 kg", status: "Selesai", time: "2 jam yang lalu" },
  { id: "PK-103", user: "Siti Aminah", type: "Organik", weight: "12.0 kg", status: "Terjadwal", time: "Besok, 09:00" },
  { id: "PK-104", user: "Agus Pratama", type: "Kertas", weight: "3.5 kg", status: "Diajukan", time: "Baru saja" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight text-white"
          >
            Halo, Warga Desa! 👋
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-1"
          >
            Pantau kontribusi Anda dan kelola sampah dengan lebih cerdas.
          </motion.p>
        </div>
        
        <Link 
          href="/dashboard/pickup"
          className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg md:w-auto w-full group"
        >
          <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          Jemput Sampah Sekarang
        </Link>
      </div>

      {/* Stats Grid */}
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
              <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.title}</p>
              <h3 className="text-2xl font-black text-white mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts & AI Insight */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-[32px] border-white/5"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-white">Tren Koleksi Sampah</h3>
                <p className="text-sm text-muted-foreground">Volume sampah terkumpul di seluruh desa</p>
              </div>
              <div className="hidden sm:flex gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">Volume (kg)</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `${value}kg`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '16px',
                      color: '#fff'
                    }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="waste" 
                    stroke="#10b981" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorWaste)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel p-8 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-transparent border-primary/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Wawasan AI SIPANDAI</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Rekomendasi Cerdas</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-slate-200 leading-relaxed font-medium">
              "Sampah plastik desa naik <span className="text-primary font-bold">15%</span> minggu ini. Fokus kumpulkan plastik bersih untuk mempercepat kenaikan peringkat Anda ke <span className="text-accent font-bold">Juara</span>!"
            </p>
            
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs text-muted-foreground italic">Dianalisis hari ini pukul 08:00</span>
              <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                Lihat Semua Rekomendasi
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Gamification Sidebar */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel p-8 rounded-[32px] border-accent/20"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white">Status Peringkat</h3>
              <div className="p-2 rounded-xl bg-accent/10 text-accent">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-4">
                <div className="w-full h-full rounded-full bg-[#030a10] flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">Pejuang Eco</h4>
              <p className="text-xs text-muted-foreground mt-1">Level 4 • 2,450 Poin</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-widest">Progress ke Juara</span>
                <span className="text-white font-black">75%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <p className="text-[10px] text-center text-muted-foreground">Kumpulkan 550 poin lagi untuk naik level!</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-panel p-8 rounded-[32px]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Aktivitas Terakhir</h3>
              <Link href="/dashboard/pickup" className="text-xs font-bold text-primary hover:underline">Lihat Semua</Link>
            </div>
            
            <div className="space-y-4">
              {recentPickups.map((pickup) => (
                <div 
                  key={pickup.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      pickup.status === "Selesai" ? "bg-primary/10 text-primary" : "bg-blue-400/10 text-blue-400"
                    )}>
                      {pickup.status === "Selesai" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pickup.type}</h4>
                      <p className="text-[10px] text-muted-foreground">{pickup.weight} • {pickup.time}</p>
                    </div>
                  </div>
                  <div className={cn(
                    "text-[8px] font-black uppercase px-2 py-0.5 rounded-md",
                    pickup.status === "Selesai" ? "bg-primary/20 text-primary" : "bg-blue-400/20 text-blue-400"
                  )}>
                    {pickup.status}
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
