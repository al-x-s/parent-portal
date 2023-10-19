const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const tahlia = await prisma.student.upsert({
    where: { id: "clnfcuca20006fjduyy77rrrf" },
    update: {},
    create: {
      firstName: "Tahlia",
      lastName: "Edwards",
      grade: 5,
      school: {
        create: {
          name: "OLQP",
          bands: [{ level: "training" }, { level: "concert" }],
        },
      },
      instrument: "Piano",
      hirePurchaseOptions: "hire",
      parent: {
        connect: {
          email: "martin@example.com",
        },
      },
      currentBook: {
        create: {
          name: "Accent on Achievement Book 2",
          numSongs: 134,
        },
      },
      currentSong: 57,
      compeltedBooks: [{ name: "Accent on Achievement Book 1" }],
    },
  });

  console.log({ tahlia });
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
