import { PrismaClient, Role, WasteType, PickupStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding SIPANDAI data...');

  // 1. Create Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sipandai.desa.id' },
    update: {},
    create: {
      email: 'admin@sipandai.desa.id',
      name: 'Admin Desa',
      password: 'password123', // In real app, hash this
      role: Role.ADMIN,
      points: 1000,
    },
  });

  const collector = await prisma.user.upsert({
    where: { email: 'collector1@sipandai.desa.id' },
    update: {},
    create: {
      email: 'collector1@sipandai.desa.id',
      name: 'Budi Collector',
      password: 'password123',
      role: Role.COLLECTOR,
    },
  });

  const resident = await prisma.user.upsert({
    where: { email: 'resident1@gmail.com' },
    update: {},
    create: {
      email: 'resident1@gmail.com',
      name: 'Yogie Resident',
      password: 'password123',
      role: Role.RESIDENT,
      points: 500,
      level: 'Active',
    },
  });

  // 2. Create Waste Pickups
  await prisma.wastePickup.create({
    data: {
      userId: resident.id,
      wasteType: WasteType.PLASTIC,
      estimatedWeight: 5.5,
      location: 'RT 04 / RW 02 No 12',
      status: PickupStatus.COMPLETED,
      pointsEarned: 550,
      completedAt: new Date(),
    },
  });

  await prisma.wastePickup.create({
    data: {
      userId: resident.id,
      wasteType: WasteType.ORGANIC,
      estimatedWeight: 12.0,
      location: 'RT 04 / RW 02 No 12',
      status: PickupStatus.SCHEDULED,
      collectorId: collector.id,
      scheduledAt: new Date(Date.now() + 86400000), // Tomorrow
    },
  });

  // 3. Create Education Content
  await prisma.educationContent.createMany({
    data: [
      {
        title: 'Sorting Waste 101',
        description: 'Learn how to effectively separate your household waste.',
        type: 'ARTICLE',
        content: 'Long content about waste sorting...',
        thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400',
      },
      {
        title: 'Composting Masterclass',
        description: 'Turn your organic kitchen waste into nutrient-rich gold.',
        type: 'VIDEO',
        videoUrl: 'https://youtube.com/...',
        thumbnail: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=400',
      },
    ],
  });

  // 4. Create Products
  await prisma.product.create({
    data: {
      sellerId: admin.id,
      name: 'Recycled Plastic Paving',
      description: 'Strong paving blocks made from 100% recycled village plastic.',
      price: 45000,
      stock: 500,
      imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400',
    },
  });

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
