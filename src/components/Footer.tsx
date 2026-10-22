import { Sparkles, Globe, Mail, Heart, Layers, ExternalLink } from "lucide-react";
import { GitBranchIcon } from "./GitIcon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#02070c] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/30 to-blue-500/30 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                SIPANDAI <span className="text-emerald-400 font-semibold text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">AI Twin</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-4">
              Sistem Pintar Ekosistem Desa — Platform Kembar Digital (*Digital Twin*) &amp; Simulasi Kebijakan Cerdas untuk Desa Berkelanjutan di Indonesia.
            </p>
            
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>Dibangun dengan Next.js 16 • React 19 • Leaflet • Tailwind</span>
            </div>
          </div>
          
          {/* Navigasi Platform */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Fitur Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-emerald-400 transition-colors">Digital Twin Map</a>
              </li>
              <li>
                <a href="#simulasi" className="hover:text-emerald-400 transition-colors">Proyeksi Multivariat</a>
              </li>
              <li>
                <a href="#insight" className="hover:text-emerald-400 transition-colors">AI Prescriptive Policy</a>
              </li>
              <li>
                <a href="#data-desa" className="hover:text-emerald-400 transition-colors">Komparasi Skenario</a>
              </li>
              <li>
                <a href="#arsitektur" className="hover:text-emerald-400 transition-colors">Arsitektur Sistem</a>
              </li>
            </ul>
          </div>
          
          {/* Tautan Pengembang */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Pengembang</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/Yogiexc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <GitBranchIcon className="w-4 h-4 text-emerald-400" />
                <span>github.com/Yogiexc</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a 
                href="mailto:yogiexsaputra@gmail.com" 
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                <span>yogiexsaputra@gmail.com</span>
              </a>

              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Portfolio Project
                </span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} SIPANDAI (Sistem Pintar Ekosistem Desa). Dibuat oleh <strong className="text-slate-200">Bryan Yogie Saputra</strong>.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dirancang untuk kemajuan Desa Cerdas Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
