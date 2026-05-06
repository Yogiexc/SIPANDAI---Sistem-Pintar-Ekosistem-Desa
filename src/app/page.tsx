"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapWrapper } from "@/components/MapWrapper";
import { HeroOverlay } from "@/components/HeroOverlay";
import { SimulationEngine } from "@/components/SimulationEngine";
import { AiInsights } from "@/components/AiInsights";
import { ComparisonMode } from "@/components/ComparisonMode";
import { StorySection } from "@/components/StorySection";
import { SimulationConfig, BaseMetrics, TimeProjection } from "@/lib/simulation";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scenario, setScenario] = useState<string>("high-waste");
  const [baseMetrics, setBaseMetrics] = useState<BaseMetrics | null>(null);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true); 
  
  const [pendingState, setPendingState] = useState<SimulationConfig>({
    wasteBank: false,
    education: false,
    infrastructure: false,
  });
  const [duration, setDuration] = useState<number>(6);
  
  const [projections, setProjections] = useState<TimeProjection[]>([]);
  const [insightText, setInsightText] = useState<string>("Menunggu simulasi...");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runSim = useCallback(async (metrics: BaseMetrics | null, config: SimulationConfig, simDuration: number) => {
    if (!metrics) return;
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      const simRes = await fetch('/api/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: config,
          baseMetrics: metrics,
          scenario,
          months: simDuration
        })
      });
      const simData = await simRes.json();
      const newProjections = simData.projections;

      setProjections(newProjections);

      const aiRes = await fetch('/api/ai-insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: config,
          projections: newProjections,
          duration: simDuration
        })
      });
      const aiData = await aiRes.json();
      setInsightText(aiData.text);

    } catch (err) {
      console.error("Simulation failed", err);
    } finally {
      setIsLoading(false);
    }
  }, [scenario]);

  useEffect(() => {
    if (!mounted) return;
    let isMounted = true;
    const fetchMetrics = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/metrics?scenario=${scenario}`);
        const data = await res.json();
        if (isMounted) {
          setBaseMetrics(data);
          runSim(data, pendingState, duration);
        }
      } catch (err) {
        console.error("Failed to fetch metrics", err);
        if (isMounted) setIsLoading(false);
      }
    };
    fetchMetrics();
    return () => { isMounted = false; };
  }, [scenario, mounted, runSim]);

  const handleRunSimulation = () => {
    runSim(baseMetrics, pendingState, duration);
  };

  const handleReset = () => {
    const freshConfig = {
      wasteBank: false,
      education: false,
      infrastructure: false,
    };
    setPendingState(freshConfig);
    setDuration(6);
    runSim(baseMetrics, freshConfig, 6);
  };

  const applyScenario = (config: SimulationConfig, months: number = 6) => {
    setPendingState(config);
    setDuration(months);
    runSim(baseMetrics, config, months);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#030a10]" />;
  }

  const currentProjection = projections.length > 0 ? projections[projections.length - 1] : null;
  const currentWaste = currentProjection?.waste ?? baseMetrics?.waste ?? 0;
  const currentEconomy = currentProjection?.economy ?? baseMetrics?.economy ?? 0;

  return (
    <>
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-24 pb-24 px-4 lg:px-8 max-w-[1400px] mx-auto w-full min-h-screen">
        <section id="beranda" className="relative w-full rounded-3xl mt-20 shadow-2xl border border-white/5 overflow-hidden flex flex-col min-h-[850px]">
          {/* Background Map */}
          <div className="absolute inset-0 z-0">
            <MapWrapper currentWaste={currentWaste} currentEconomy={currentEconomy} />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 w-full h-full">
            <HeroOverlay 
              state={pendingState} 
              setState={setPendingState}
              scenario={scenario}
              setScenario={setScenario}
              baseMetrics={baseMetrics}
              projections={projections}
              isLoading={isLoading}
              duration={duration}
              setDuration={setDuration}
              onRunSimulation={handleRunSimulation}
              isDemoMode={isDemoMode}
              setIsDemoMode={setIsDemoMode}
              onApplyScenario={applyScenario}
              onReset={handleReset}
            />
          </div>
        </section>
        
        <SimulationEngine projections={projections} isLoading={isLoading} />
        <AiInsights insightText={insightText} isLoading={isLoading} />
        <ComparisonMode />
        <StorySection />
        
      </main>

      <Footer />
    </>
  );
}
