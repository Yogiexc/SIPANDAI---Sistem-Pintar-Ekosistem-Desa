"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShieldCheck,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { logout } from "@/lib/api";

const menuItems = [
  { name: "Beranda", icon: LayoutDashboard, href: "/admin" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } finally {
      router.replace("/login");
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#030a10]/80 backdrop-blur-xl border-r border-white/10 w-64 p-6">
      {/* Logo — sama persis dengan Sidebar user */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
          <ShieldCheck className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">
          SIPANDAI
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary" : "group-hover:text-white"
                  )}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="admin-active-pill"
                  className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Pengaturan & Keluar — sama strukturnya dengan Sidebar user */}
      <div className="pt-6 border-t border-white/5 mt-6 space-y-2">
        <Link
          href="/admin/settings"
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
            pathname === "/admin/settings"
              ? "bg-primary/10 text-primary border border-primary/20"
              : "text-muted-foreground hover:bg-white/5 hover:text-white"
          )}
        >
          <Settings
            className={cn(
              "w-5 h-5",
              pathname === "/admin/settings" ? "text-primary" : ""
            )}
          />
          <span className="font-medium">Pengaturan</span>
        </Link>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoggingOut ? (
            <div className="w-5 h-5 border-2 border-destructive/30 border-t-destructive rounded-full animate-spin" />
          ) : (
            <LogOut className="w-5 h-5" />
          )}
          <span className="font-medium">
            {isLoggingOut ? "Keluar..." : "Keluar"}
          </span>
        </button>
      </div>

      {/* Card bawah — ganti konten eco rank dengan badge admin */}
      <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10">
        <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">
          Hak Akses
        </p>
        <p className="text-lg font-bold text-white mb-2">Administrator</p>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-primary to-accent" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">
          Akses penuh ke semua fitur sistem
        </p>
      </div>
    </div>
  );
}
