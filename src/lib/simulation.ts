export interface BaseMetrics {
  waste: number;
  economy: number;
  environment: number;
}

export interface SimulationConfig {
  wasteBank: boolean;
  education: boolean;
  infrastructure: boolean;
}

export interface TimeProjection {
  month: number;
  label: string;
  waste: number;
  economy: number;
  environment: number;
}

export function runSimulation(base: BaseMetrics, config: SimulationConfig, monthsToSimulate: number = 6): TimeProjection[] {
  const results: TimeProjection[] = [];

  // Month 0 is current state
  results.push({
    month: 0,
    label: "Sekarang",
    waste: Math.round(base.waste),
    economy: Math.round(base.economy),
    environment: Math.round(base.environment)
  });

  // Calculate gradual changes (linear interpolation for simplicity in MVP)
  for (let m = 1; m <= monthsToSimulate; m++) {
    const progress = m / 6; // Assume target is reached at month 6
    
    // Add some realistic non-linear bumps
    // Infrastructure takes longer to kick in, waste bank is faster
    const infraProgress = Math.pow(progress, 2); // Kicks in later
    const wasteProgress = Math.sqrt(progress); // Faster initial impact

    let currentWaste = base.waste;
    if (config.wasteBank) currentWaste -= (base.waste * 0.30) * wasteProgress;
    if (config.education) currentWaste -= (base.waste * 0.15) * progress;

    let currentEco = base.economy;
    if (config.wasteBank) currentEco += (base.economy * 0.10) * progress;
    if (config.infrastructure) currentEco += (base.economy * 0.20) * infraProgress;

    let currentEnv = base.environment;
    if (config.wasteBank) currentEnv += 15 * wasteProgress;
    if (config.education) currentEnv += 10 * progress;
    if (config.infrastructure) currentEnv -= 10 * progress; // Immediate environmental hit that persists

    // Clamp values
    currentWaste = Math.max(0, currentWaste);
    currentEnv = Math.min(100, Math.max(0, currentEnv));

    const monthLabels = ["Sekarang", "Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];
    
    results.push({
      month: m,
      label: monthLabels[m] || `B${m}`,
      waste: Math.round(currentWaste),
      economy: Math.round(currentEco),
      environment: Math.round(currentEnv)
    });
  }

  return results;
}
