/*
  Warnings:

  - You are about to drop the column `userId` on the `Car` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
