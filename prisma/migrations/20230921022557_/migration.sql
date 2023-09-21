/*
  Warnings:

  - You are about to drop the column `engineSizeTotal` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `engineSizeUnit` on the `Car` table. All the data in the column will be lost.
  - Added the required column `engineSize` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "engineSizeTotal",
DROP COLUMN "engineSizeUnit",
ADD COLUMN     "engineSize" TEXT NOT NULL,
ALTER COLUMN "mileageUnit" SET DEFAULT 'litres';
