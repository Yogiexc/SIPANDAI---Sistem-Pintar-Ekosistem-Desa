import { NextResponse } from 'next/server';
import { runSimulation, SimulationConfig, BaseMetrics } from '@/lib/simulation';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const config: SimulationConfig = body.config;
    const baseMetrics: BaseMetrics = body.baseMetrics;
    const months = body.months || 6;
    const scenario = body.scenario || 'high-waste';

    // Run the robust Simulation Engine
    const projections = runSimulation(baseMetrics, config, months);

    // Attempt to log the simulation to the database
    const villageMapping: Record<string, string> = {
      'high-waste': 'Desa Sukamaju',
      'growing-economy': 'Desa Karangharja',
      'eco-village': 'Desa Hijau'
    };
    const villageName = villageMapping[scenario] || villageMapping['high-waste'];
    
    try {
      const village = await prisma.village.findFirst({ where: { name: villageName } });
      if (village) {
        // Save simulation config
        const sim = await prisma.simulation.create({
          data: {
            villageId: village.id,
            wasteBank: config.wasteBank,
            education: config.education,
            infrastructure: config.infrastructure
          }
        });
        
        // Save projections
        await prisma.simulationResult.createMany({
          data: projections.map(p => ({
            simulationId: sim.id,
            month: p.month,
            waste: p.waste,
            economy: p.economy,
            environment: p.environment
          }))
        });
      }
    } catch (dbError) {
      console.warn("DB logging failed, returning memory projection:", dbError);
    }

    return NextResponse.json({ projections });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
