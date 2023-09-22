/*
  Warnings:

  - You are about to drop the column `verifyEmailToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verifyEmailTokenExpiry` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailVerificationToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_verifyEmailToken_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "verifyEmailToken",
DROP COLUMN "verifyEmailTokenExpiry",
ADD COLUMN     "emailVerificationToken" TEXT,
ADD COLUMN     "emailVerificationTokenExpiry" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailVerificationToken_key" ON "User"("emailVerificationToken");
