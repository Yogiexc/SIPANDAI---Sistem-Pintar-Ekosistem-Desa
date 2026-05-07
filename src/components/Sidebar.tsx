"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Trash2, 
  Trophy, 
  GraduationCap, 
  Store, 
  BrainCircuit, 
  Settings,
  LogOut,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Beranda", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Jemput Sampah", icon: Trash2, href: "/dashboard/pickup" },
  { name: "Papan Peringkat", icon: Trophy, href: "/dashboard/leaderboard" },
  { name: "Edukasi", icon: GraduationCap, href: "/dashboard/education" },
  { name: "Pasar", icon: Store, href: "/dashboard/marketplace" },
  { name: "Wawasan AI", icon: BrainCircuit, href: "/dashboard/insights" },
  { name: "Panel Admin", icon: ShieldCheck, href: "/admin" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#030a10]/80 backdrop-blur-xl border-r border-white/10 w-64 p-6">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
          <Trash2 className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">
          SIPANDAI
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.iconComp || item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href || "#"}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                {typeof Icon !== 'string' && <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "group-hover:text-white")} />}
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-white/5 mt-6 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Pengaturan</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Keluar</span>
        </button>
      </div>

      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10">
        <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">Peringkat Eco Anda</p>
        <p className="text-lg font-bold text-white mb-2">Pejuang Lingkungan</p>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            className="h-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">350 poin menuju Juara</p>
      </div>
    </div>
  );
}
