/*
  Warnings:

  - You are about to drop the column `school` on the `Student` table. All the data in the column will be lost.
  - Added the required column `currentBookId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentSong` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "school",
ADD COLUMN     "compeltedBooks" JSONB[],
ADD COLUMN     "currentBookId" TEXT NOT NULL,
ADD COLUMN     "currentSong" INTEGER NOT NULL,
ADD COLUMN     "schoolId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MethodBook" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "numSongs" INTEGER NOT NULL,

    CONSTRAINT "MethodBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "finish" TIMESTAMP(3) NOT NULL,
    "details" TEXT,
    "schoolId" TEXT NOT NULL,
    "band" JSONB[],

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bands" JSONB[],

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_currentBookId_fkey" FOREIGN KEY ("currentBookId") REFERENCES "MethodBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
