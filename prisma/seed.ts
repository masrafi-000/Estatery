import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = "admin123@gmail.com";
  const password = "admin@123";
  const role = "ADMIN";

  const hashedPassword = await bcrypt.hash(password, 12);

  const existingAdmin = await prisma.user.findUnique({ where: { email } });
  if (existingAdmin) {
    console.log("Admin already exists.");
    return;
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
    },
  });

  console.log("Admin seeded successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
