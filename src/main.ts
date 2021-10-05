import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newItem = await prisma.item.create({
    data: {
      title: "test",
      url: "test",
      memo: "testdesu",
      ogp: "test",
      tags: [],
      private: false,
    },
  });
  console.log("Created new item", newItem);
  const allArtists = await prisma.item.findMany({});
  console.log("All artists: ");
  console.dir(allArtists, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
