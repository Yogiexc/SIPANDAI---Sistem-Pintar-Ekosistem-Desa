"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Trash2, 
  Mail, 
  Lock, 
  ArrowRight, 
  ChevronLeft,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating login
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030a10] text-slate-100 flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Visual/Branding */}
      <div className="hidden md:flex flex-col justify-between w-1/2 p-12 lg:p-20 relative overflow-hidden bg-gradient-to-br from-primary/20 via-slate-900 to-[#030a10]">
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <Trash2 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">SIPANDAI</span>
          </Link>
        </div>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black leading-tight text-white mb-6"
          >
            Selamat Datang <br /> Kembali, <span className="text-primary">Eco Hero!</span>
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-md leading-relaxed">
            Masuk untuk memantau poin, mengelola jemput sampah, dan melihat dampak lingkungan yang telah Anda buat.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 w-fit backdrop-blur-xl">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-slate-300">Data Anda terenkripsi & aman.</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-0" />
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-24 relative">
        <Link 
          href="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali
        </Link>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-black text-white mb-2">Masuk Akun</h1>
            <p className="text-muted-foreground">Silakan masukkan email dan kata sandi Anda.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  placeholder="nama@email.com"
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-bold text-slate-300">Kata Sandi</label>
                <Link href="#" className="text-xs font-bold text-primary hover:underline">Lupa Kata Sandi?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg mt-8"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Masuk Sekarang
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 p-4 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0" />
            <p className="text-xs text-yellow-500/80 leading-relaxed">
              Belum punya akun? Hubungi Admin Desa atau daftar mandiri melalui tombol daftar di bawah.
            </p>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline">Daftar Akun</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
