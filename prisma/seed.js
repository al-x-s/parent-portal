const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const jane = await prisma.student.upsert({
    where: { id: "lkdflkdflk" },
    update: {},
    create: {
      firstName: "Jane",
      lastName: "Doe",
      grade: 5,
      school: {
        create: {
          name: "OLQP",
          bands: [{ level: "training" }, { level: "concert" }],
          events: [
            {
              name: "Carols Night",
              day: "Saturday",
              date: "9th December 2023",
              time: "7:30pm",
              location: "School Hall",
            },
            {
              name: "Demo Concert",
              day: "Monday",
              date: "24th November 2023",
              time: "11:30am",
              location: "Learning Hub",
            },
          ],
        },
      },
      instrument: "Piano",
      hirePurchaseOptions: "hire",
      parent: {
        connect: {
          email: "demo@tsa.com.au",
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
      trophies: [
        { name: "Completed Accent on Achievement Book 1", image: "trophy1" },
        { name: "My First Concert", image: "trophy3" },
        { name: "Completed Accent on Achievement Book 2", image: "trophy2" },
      ],
    },
  });

  console.log({ jane });
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
