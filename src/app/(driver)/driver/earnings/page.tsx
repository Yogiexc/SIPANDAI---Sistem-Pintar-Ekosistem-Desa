"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Weight,
  Trophy,
  TrendingUp,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { name: "Sen", earnings: 45000, pickups: 3 },
  { name: "Sel", earnings: 72000, pickups: 5 },
  { name: "Rab", earnings: 36000, pickups: 2 },
  { name: "Kam", earnings: 90000, pickups: 6 },
  { name: "Jum", earnings: 54000, pickups: 4 },
  { name: "Sab", earnings: 108000, pickups: 7 },
  { name: "Min", earnings: 72500, pickups: 5 },
];

const transactions = [
  { id: "PK-048", user: "Budi Santoso", type: "Plastik", weight: "5.2 kg", earnings: 26000, points: 520, date: "Hari ini, 10:00" },
  { id: "PK-047", user: "Siti Aminah", type: "Organik", weight: "12.0 kg", earnings: 36000, points: 720, date: "Kemarin, 14:30" },
  { id: "PK-046", user: "Agus Pratama", type: "Kertas", weight: "3.5 kg", earnings: 10500, points: 210, date: "Kemarin, 09:00" },
  { id: "PK-045", user: "Dewi Lestari", type: "Logam", weight: "7.8 kg", earnings: 62400, points: 1248, date: "2 hari lalu" },
  { id: "PK-044", user: "Eko Prasetyo", type: "Plastik", weight: "4.1 kg", earnings: 20500, points: 410, date: "3 hari lalu" },
];

const wasteEmoji: Record<string, string> = {
  Plastik: "🥤", Organik: "🍎", Kertas: "📄", Logam: "🥫", Kaca: "🍾", Lainnya: "📦",
};

export default function DriverEarningsPage() {
  const totalWeekly = weeklyData.reduce((s, d) => s + d.earnings, 0);
  const totalPickups = weeklyData.reduce((s, d) => s + d.pickups, 0);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-primary" />
          Pendapatan Saya
        </h1>
        <p className="text-muted-foreground mt-1">Rincian penghasilan dan poin dari setiap pickup.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Pendapatan Minggu Ini", value: `Rp ${(totalWeekly / 1000).toFixed(0)}rb`, icon: DollarSign, color: "text-primary", bg: "bg-primary/10" },
          { title: "Total Pickup", value: String(totalPickups), icon: TrendingUp, color: "text-secondary", bg: "bg-secondary/10" },
          { title: "Total Berat", value: "32.6 kg", icon: Weight, color: "text-accent", bg: "bg-accent/10" },
          { title: "Eco Points", value: "+3.108", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-3xl"
          >
            <div className={cn("p-3 rounded-2xl w-fit mb-4", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.title}</p>
            <h3 className="text-2xl font-black text-white mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 glass-panel p-8 rounded-[32px]"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Tren Pendapatan</h3>
              <p className="text-sm text-muted-foreground">7 hari terakhir</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-bold text-muted-foreground">Minggu Ini</span>
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}rb`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", color: "#fff" }}
                  formatter={(v: number) => [`Rp ${v.toLocaleString("id-ID")}`, "Pendapatan"]}
                />
                <Area type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#earningsGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Rate breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-8 rounded-[32px]"
        >
          <h3 className="font-bold text-white mb-6">Komposisi Pickup</h3>
          <div className="space-y-4">
            {[
              { type: "Plastik", count: 18, pct: 38, color: "bg-blue-500" },
              { type: "Organik", count: 12, pct: 25, color: "bg-green-500" },
              { type: "Logam", count: 10, pct: 21, color: "bg-slate-400" },
              { type: "Kertas", count: 8, pct: 16, color: "bg-yellow-500" },
            ].map((item) => (
              <div key={item.type} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300 font-medium">{item.type}</span>
                  <span className="text-muted-foreground text-xs">{item.count}x • {item.pct}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.pct}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className={cn("h-full rounded-full", item.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Transaction history */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-panel rounded-[40px] overflow-hidden"
      >
        <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <h3 className="font-black text-white uppercase tracking-widest">Riwayat Transaksi</h3>
          <div className="hidden sm:flex gap-12 text-[10px] font-black text-muted-foreground uppercase tracking-widest px-4">
            <span className="w-20 text-right">Berat</span>
            <span className="w-24 text-right">Pendapatan</span>
            <span className="w-20 text-right">Poin</span>
          </div>
        </div>
        <div className="divide-y divide-white/5">
          {transactions.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="p-6 md:p-8 flex items-center justify-between group hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/5">
                  {wasteEmoji[tx.type] ?? "📦"}
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">{tx.user}</h4>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{tx.id} • {tx.date}</p>
                </div>
              </div>
              <div className="flex gap-8 sm:gap-12 items-center">
                <div className="hidden sm:flex flex-col w-20 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Berat</span>
                  <span className="text-sm font-black text-slate-300">{tx.weight}</span>
                </div>
                <div className="flex flex-col w-24 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Pendapatan</span>
                  <span className="text-sm font-black text-primary">Rp {tx.earnings.toLocaleString("id-ID")}</span>
                </div>
                <div className="hidden sm:flex flex-col w-20 text-right">
                  <span className="text-xs text-muted-foreground uppercase font-bold">Poin</span>
                  <span className="text-sm font-black text-yellow-400">+{tx.points}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-white transition-colors ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
