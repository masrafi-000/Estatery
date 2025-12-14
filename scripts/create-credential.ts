import prisma from "@/lib/prisma";

async function run() {
  const email = "admin123@gmail.com";

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    console.error("No user found with email", email);
    process.exit(1);
  }

  // Create an account record for credentials provider (minimal fields)
  await prisma.account.upsert({
    where: {
      provider_providerAccountId: {
        provider: "credentials",
        providerAccountId: email,
      },
    },
    update: {},
    create: {
      userId: user.id,
      type: "credentials",
      provider: "credentials",
      providerAccountId: email,
    },
  });

  console.log("Credential account created for", email);
}

run()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
