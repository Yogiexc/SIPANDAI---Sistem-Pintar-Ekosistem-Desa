"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

interface InteractiveMapProps {
  currentWaste?: number;
  currentEconomy?: number;
}

const InteractiveMap = dynamic<InteractiveMapProps>(
  () => import("./InteractiveMap").then((mod) => mod.InteractiveMap),
  { 
    ssr: false, 
    loading: () => <div className="w-full h-full min-h-[600px] bg-[#0a0a0a] animate-pulse rounded-3xl" /> 
  }
);

interface MapWrapperProps {
  className?: string;
  currentWaste?: number;
  currentEconomy?: number;
}

export function MapWrapper({ className = "w-full h-full", currentWaste, currentEconomy }: MapWrapperProps) {
  return (
    <div className={cn(className, "flex-1")}>
      <InteractiveMap currentWaste={currentWaste} currentEconomy={currentEconomy} />
    </div>
  );
}
