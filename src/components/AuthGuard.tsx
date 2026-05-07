"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAuthUser, type AuthUser } from "@/lib/api";

interface AuthGuardProps {
  children: React.ReactNode;
}

/**
 * Wraps protected pages. Checks if the user is authenticated via Laravel Sanctum.
 * - Redirects to /login if not authenticated.
 * - Redirects non-admin users away from /admin/* routes.
 * - Redirects admin users away from /dashboard/* to /admin.
 */
export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"loading" | "authorized" | "unauthorized">("loading");

  useEffect(() => {
    getAuthUser().then((user: AuthUser | null) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const isAdminRoute = pathname.startsWith("/admin");
      const isDashboardRoute = pathname.startsWith("/dashboard");
      const isDriverRoute = pathname.startsWith("/driver");

      if (isAdminRoute && user.role !== "admin") {
        router.replace(user.role === "driver" ? "/driver" : "/dashboard");
        return;
      }

      if (isDriverRoute && user.role !== "driver") {
        router.replace(user.role === "admin" ? "/admin" : "/dashboard");
        return;
      }

      if (isDashboardRoute && user.role !== "user") {
        router.replace(user.role === "admin" ? "/admin" : "/driver");
        return;
      }

      setStatus("authorized");
    });
  }, [router, pathname]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#030a10] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Memverifikasi sesi...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthorized") {
    return null;
  }

  return <>{children}</>;
}
