/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `currentSong` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_schoolId_fkey";

-- AlterTable
ALTER TABLE "School" ADD COLUMN     "events" JSONB[];

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "trophies" JSONB[],
ALTER COLUMN "currentSong" SET NOT NULL,
ALTER COLUMN "currentSong" SET DEFAULT 1;

-- DropTable
DROP TABLE "Event";
