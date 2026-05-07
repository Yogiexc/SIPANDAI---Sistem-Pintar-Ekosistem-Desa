"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Trash2, 
  Mail, 
  Lock, 
  ArrowRight, 
  ChevronLeft,
  User,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030a10] text-slate-100 flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Visual/Branding */}
      <div className="hidden md:flex flex-col justify-between w-1/2 p-12 lg:p-20 relative overflow-hidden bg-gradient-to-br from-accent/20 via-slate-900 to-[#030a10]">
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
            Mulai Langkah <br /> Hijau Anda <span className="text-accent">Bersama Kami.</span>
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-md leading-relaxed">
            Dapatkan manfaat ekonomi dari setiap sampah yang Anda pilah. Bersama kita wujudkan Desa yang cerdas dan asri.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {[
            "Pendaftaran Gratis & Mudah",
            "Dukungan Penjemputan Sampah",
            "Tukar Poin dengan Voucher Menarik"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-slate-300">{item}</span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-0" />
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-24 relative">
        <button 
          onClick={() => step > 1 ? setStep(1) : router.push("/")}
          className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali
        </button>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <span className="text-xs font-black text-accent uppercase tracking-widest">Langkah {step} dari 2</span>
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Daftar Akun Baru</h1>
            <p className="text-muted-foreground">Bergabunglah dengan gerakan desa digital.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {step === 1 ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Nama Lengkap</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Masukkan nama lengkap"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <input 
                      type="email" 
                      placeholder="nama@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Alamat / RT RW</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Contoh: RT 04 / RW 02"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Kata Sandi</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none rounded-2xl py-4 pl-12 pr-4 text-white transition-all focus:ring-4 focus:ring-accent/10"
                    />
                  </div>
                </div>
              </>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground font-black py-4 rounded-2xl transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3 text-lg mt-8"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
              ) : (
                <>
                  {step === 1 ? "Lanjutkan" : "Daftar Sekarang"}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-accent font-bold hover:underline">Masuk Akun</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
