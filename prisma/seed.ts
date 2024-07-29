import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Alice",
      email: "alice@example.com",
      age: 42,
      createdAt: new Date(),
      updatedAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days later
    },
    {
      name: "Bob",
      email: "bob@example.com",
      age: 35,
      createdAt: new Date(),
      updatedAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days later
    },
    {
      name: "Charlie",
      email: "charlie@example.com",
      age: 28,
      createdAt: new Date(),
      updatedAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
