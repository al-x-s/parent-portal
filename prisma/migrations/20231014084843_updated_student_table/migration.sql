-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_currentBookId_fkey";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "currentBookId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_currentBookId_fkey" FOREIGN KEY ("currentBookId") REFERENCES "MethodBook"("id") ON DELETE SET NULL ON UPDATE CASCADE;
