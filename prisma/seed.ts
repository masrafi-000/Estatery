import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  PropertyStatus,
  PropertyType,
  Role,
  UserStatus,
} from "./lib/generated/prisma/enums";

async function main() {
  console.log("🌱 Seeding database...");
  const hashedPassword = await bcrypt.hash("Password123!", 10);

  // Super Admin
  await prisma.user.upsert({
    where: { email: "superadmin@estatery.com" },
    update: {},
    create: {
      email: "superadmin@estatery.com",
      password: hashedPassword,
      role: Role.SUPER_ADMIN,
      status: UserStatus.APPROVED,
      profile: { create: { fullName: "Super Admin" } },
    },
  });

  // Agent User + Agent profile
  const agentUser = await prisma.user.upsert({
    where: { email: "agent@estatery.com" },
    update: {},
    create: {
      email: "agent@estatery.com",
      password: hashedPassword,
      role: Role.AGENT,
      status: UserStatus.APPROVED,
      profile: {
        create: {
          fullName: "John Agent",
          phone: "+8801700000000",
          address: "Dhaka, Bangladesh",
        },
      },
      agent: {
        create: {
          agencyName: "Prime Estates",
          licenseNo: "BD-AG-2025-001",
          verifiedAt: new Date(),
        },
      },
    },
    include: {
      agent: true,
    },
  });

  if (!agentUser.agent) {
    throw new Error("Agent record was not created");
  }

  // Regular User
  const regularUser = await prisma.user.upsert({
    where: { email: "user@estatery.com" },
    update: {},
    create: {
      email: "user@estatery.com",
      password: hashedPassword,
      role: Role.USER,
      status: UserStatus.APPROVED,
      profile: { create: { fullName: "Regular User" } },
    },
  });

  // Property
  await prisma.property.create({
    data: {
      title: "Modern 3 Bedroom Apartment",
      description: "A modern apartment in the heart of the city.",
      price: "12500000",
      type: PropertyType.BUY,
      status: PropertyStatus.AVAILABLE,

      address: "Road 12, House 45",
      city: "Dhaka",
      state: "Dhaka",
      zipCode: "1207",

      bedrooms: 3,
      bathrooms: 2,
      sqft: 1450,

      agentId: agentUser.agent.id,

      images: {
        create: [
          { url: "https://picsum.photos/800/600?1", order: 1 },
          { url: "https://picsum.photos/800/600?2", order: 2 },
        ],
      },
    },
  });

  console.log("✅ Seeding completed successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
