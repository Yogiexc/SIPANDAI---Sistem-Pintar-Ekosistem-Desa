import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { BaseMetrics } from '@/lib/simulation';

// Dummy fallback data matching the seed
const FALLBACK_METRICS: Record<string, BaseMetrics> = {
  'high-waste': { waste: 100, economy: 50, environment: 40 },
  'growing-economy': { waste: 60, economy: 85, environment: 65 },
  'eco-village': { waste: 20, economy: 70, environment: 90 }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const scenario = searchParams.get('scenario') || 'high-waste';
  
  const villageMapping: Record<string, string> = {
    'high-waste': 'Desa Sukamaju',
    'growing-economy': 'Desa Karangharja',
    'eco-village': 'Desa Hijau'
  };
  
  const villageName = villageMapping[scenario] || villageMapping['high-waste'];

  try {
    const village = await prisma.village.findFirst({
      where: { name: villageName },
      include: { metrics: true }
    });

    if (village && village.metrics.length > 0) {
      const dbMetrics = village.metrics[0];
      return NextResponse.json({
        waste: dbMetrics.waste,
        economy: dbMetrics.economy,
        environment: dbMetrics.environment
      });
    }
  } catch (error) {
    console.error('Database connection failed, using fallback metrics', error);
  }

  // Graceful fallback if DB fails or village not found
  return NextResponse.json(FALLBACK_METRICS[scenario] || FALLBACK_METRICS['high-waste']);
}
