import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const password = "admin@123";
  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email: "admin123@gmail.com" },
    update: {},
    create: {
      email: "admin123@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
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
