import { Leaf, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">DesaSim AI</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Membangun masa depan desa Indonesia yang lebih cerdas, berkelanjutan, dan berbasis data melalui simulasi Digital Twin.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</Link></li>
              <li><Link href="#simulation" className="hover:text-emerald-400 transition-colors">Simulation Engine</Link></li>
              <li><Link href="#insights" className="hover:text-emerald-400 transition-colors">AI Insights</Link></li>
              <li><Link href="#compare" className="hover:text-emerald-400 transition-colors">Comparison Mode</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-slate-400">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-slate-400">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-slate-400">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-slate-500">Contact us:</p>
              <a href="mailto:hello@desasim.id" className="text-emerald-400 hover:text-emerald-300">hello@desasim.id</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DesaSim Digital Twin Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
