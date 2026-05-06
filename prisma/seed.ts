import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. High Waste Village Scenario
  const highWaste = await prisma.village.create({
    data: {
      name: 'Desa Sukamakmur',
      description: 'A densely populated village facing critical waste accumulation issues.',
      type: 'High Waste',
      metrics: {
        create: {
          waste: 100, // 100% relative baseline or tons
          economy: 50,  // Base economy index
          environment: 40 // Poor environment score
        }
      }
    }
  });

  // 2. Growing Economy Village Scenario
  const growingEconomy = await prisma.village.create({
    data: {
      name: 'Desa Karangharja',
      description: 'An emerging SME hub requiring balanced infrastructure and eco-policies.',
      type: 'Growing Economy',
      metrics: {
        create: {
          waste: 60,
          economy: 85,
          environment: 65
        }
      }
    }
  });

  // 3. Eco Village Scenario
  const ecoVillage = await prisma.village.create({
    data: {
      name: 'Desa Hijau Lestari',
      description: 'A model village for environmental sustainability and renewable energy.',
      type: 'Eco Village',
      metrics: {
        create: {
          waste: 20,
          economy: 70,
          environment: 90
        }
      }
    }
  });

  console.log(`Seeded Village: ${highWaste.name} (${highWaste.type})`);
  console.log(`Seeded Village: ${growingEconomy.name} (${growingEconomy.type})`);
  console.log(`Seeded Village: ${ecoVillage.name} (${ecoVillage.type})`);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
