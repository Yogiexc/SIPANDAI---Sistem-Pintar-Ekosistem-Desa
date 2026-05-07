"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Trash2, 
  Leaf, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030a10] text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030a10]/50 backdrop-blur-xl border-b border-white/5 h-20 flex items-center px-6 lg:px-20 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <Trash2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">
            SIPANDAI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#fitur" className="hover:text-primary transition-colors">Fitur</Link>
          <Link href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</Link>
          <Link href="#kontak" className="hover:text-primary transition-colors">Kontak</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-bold text-slate-300 hover:text-white transition-colors px-4 py-2"
          >
            Masuk
          </Link>
          <Link 
            href="/register" 
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Daftar Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:px-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Sistem Pengelolaan Sampah Pintar #1 di Indonesia
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white mb-6">
              Ubah Sampah Menjadi <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Nilai Ekonomi</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Bergabunglah dengan ekosistem Bank Sampah Desa berbasis AI. Kelola sampah lebih mudah, raih poin, dan bantu lestarikan lingkungan desa kita.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/register" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg"
              >
                Mulai Sekarang
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-2xl transition-all flex items-center justify-center gap-2 text-lg">
                Lihat Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-2xl font-black text-white">1.2k+</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Warga Aktif</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">12.5 Ton</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Sampah Terolah</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">Rp 42M</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Poin Dibagikan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-panel p-4 rounded-[40px] border-white/10 shadow-2xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
                alt="Smart Waste" 
                className="w-full h-full object-cover rounded-[32px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030a10] via-transparent to-transparent" />
              
              {/* Floating Cards */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl border-primary/20 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold">Poin Terbaru</p>
                    <p className="text-lg font-black text-white">+550 Poin Berhasil Diraih!</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-3xl rotate-12 -z-0 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full -z-0 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="fitur" className="py-32 px-6 lg:px-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Fitur Unggulan</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white">Ekosistem Sampah Desa Digital</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Jemput Sampah Pintar", 
                desc: "Request jemput sampah langsung dari HP. Tim kolektor kami akan datang ke lokasi Anda.",
                icon: Trash2,
                color: "text-blue-400"
              },
              { 
                title: "Sistem Poin & Rank", 
                desc: "Dapatkan poin dari setiap sampah yang Anda setor dan tukarkan dengan berbagai voucher menarik.",
                icon: Zap,
                color: "text-yellow-400"
              },
              { 
                title: "Wawasan AI", 
                desc: "Analisis cerdas untuk membantu desa mengoptimalkan pengelolaan sampah secara efisien.",
                icon: ShieldCheck,
                color: "text-primary"
              },
              { 
                title: "Pasar Produk Daur Ulang", 
                desc: "Beli dan dukung produk kerajinan warga lokal yang dibuat dari bahan daur ulang.",
                icon: Users,
                color: "text-accent"
              },
              { 
                title: "Edukasi Lingkungan", 
                desc: "Pelajari cara memilah dan mengolah sampah melalui tutorial video dan artikel eksklusif.",
                icon: Leaf,
                color: "text-emerald-400"
              },
              { 
                title: "Keamanan Data", 
                desc: "Semua transaksi sampah dan poin tercatat aman dengan sistem database terintegrasi.",
                icon: ShieldCheck,
                color: "text-slate-400"
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-[32px] hover:border-primary/30 transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform", feature.color)}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <Trash2 className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              SIPANDAI
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2026 SIPANDAI - Sistem Pintar Ekosistem Desa. Hak Cipta Dilindungi.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
