import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";
import { AuthGuard } from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen bg-[#030a10] text-slate-100 overflow-hidden relative">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#030a10]/50 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Village Core</h2>
            <span className="text-white/20">/</span>
            <h1 className="text-sm font-bold text-white tracking-wide">Overview</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-tight">System Online</span>
            </div>
            
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
    </AuthGuard>
  );
}
