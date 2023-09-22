/*
  Warnings:

  - You are about to drop the `CarOwner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `status` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CarOwner" DROP CONSTRAINT "CarOwner_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarOwner" DROP CONSTRAINT "CarOwner_userId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "CarOwner";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
