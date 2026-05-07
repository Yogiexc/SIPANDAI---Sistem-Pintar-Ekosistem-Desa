"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Star, 
  ArrowRight,
  ShoppingCart,
  Tag,
  Package,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Paving Plastik Daur Ulang",
    price: 45000,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400",
    category: "Bangunan",
    stock: 500
  },
  {
    id: 2,
    name: "Tas Anyaman Plastik",
    price: 35000,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1510255956795-3c1393699b86?auto=format&fit=crop&q=80&w=400",
    category: "Kerajinan",
    stock: 12
  },
  {
    id: 3,
    name: "Pupuk Cair Organik",
    price: 25000,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=400",
    category: "Kebun",
    stock: 45
  },
  {
    id: 4,
    name: "Organizer Meja Kertas",
    price: 15000,
    rating: 4.5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400",
    category: "Alat Tulis",
    stock: 20
  }
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-primary" />
            Pasar Eco Desa
          </h1>
          <p className="text-muted-foreground mt-1">Dukung ekonomi sirkular desa dengan membeli produk daur ulang.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Cari produk..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm focus:border-primary/50 focus:outline-none transition-all"
            />
          </div>
          <button className="relative p-3 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#030a10]">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Featured Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative h-72 rounded-[40px] overflow-hidden bg-gradient-to-r from-primary/30 via-slate-900 to-slate-950 border border-white/5 group shadow-2xl"
      >
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200" 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 p-10 md:p-14 flex flex-col justify-center h-full max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Koleksi Unggulan</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Paket Rumah <br /> Zero Waste</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Satu set peralatan dapur lengkap yang dibuat sepenuhnya dari limbah plastik desa yang diolah kembali.
          </p>
          <button className="flex items-center gap-3 bg-primary text-white font-black py-4 px-10 rounded-2xl w-fit hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group/btn">
            Beli Sekarang
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar no-scrollbar">
        {["Semua Produk", "Kerajinan", "Bangunan", "Kebun", "Furnitur", "Alat Tulis"].map((cat, i) => (
          <button 
            key={cat}
            className={cn(
              "px-8 py-3 rounded-2xl border text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all",
              i === 0 ? "bg-white text-black border-white shadow-lg" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card group rounded-[32px] overflow-hidden flex flex-col border-white/5 shadow-xl hover:border-primary/20 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-5 right-5">
                <button className="p-3 rounded-full bg-[#030a10]/60 backdrop-blur-md border border-white/10 hover:bg-white transition-all group/tag">
                  <Tag className="w-5 h-5 text-white group-hover/tag:text-black" />
                </button>
              </div>
              <div className="absolute bottom-5 left-5">
                <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-black text-white">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Harga</span>
                  <span className="text-2xl font-black text-white tracking-tight">Rp {product.price.toLocaleString()}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Stok</span>
                  <span className="text-xs font-black text-slate-300 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-primary" />
                    {product.stock}
                  </span>
                </div>
              </div>
              
              <button className="mt-auto w-full py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                <Plus className="w-5 h-5" />
                Tambah ke Keranjang
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
