"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Trash2, 
  Trophy, 
  GraduationCap, 
  Store
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Beranda", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Jemput", icon: Trash2, href: "/dashboard/pickup" },
  { name: "Poin", icon: Trophy, href: "/dashboard/leaderboard" },
  { name: "Edukasi", icon: GraduationCap, href: "/dashboard/education" },
  { name: "Pasar", icon: Store, href: "/dashboard/marketplace" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#030a10]/80 backdrop-blur-2xl border-t border-white/5 px-6 pt-2 pb-8 flex justify-between items-center">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className="relative flex flex-col items-center gap-1 group"
          >
            <div className={cn(
              "p-2 rounded-xl transition-all duration-300",
              isActive ? "bg-primary/10 text-primary scale-110" : "text-muted-foreground"
            )}>
              <item.icon className="w-6 h-6" />
            </div>
            <span className={cn(
              "text-[10px] font-bold tracking-tight",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              {item.name}
            </span>
            
            {isActive && (
              <motion.div 
                layoutId="bottom-nav-active"
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
