/*
  Warnings:

  - The `verifyEmailTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `passwordResetTokenExpiry` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "verifyEmailTokenExpiry",
ADD COLUMN     "verifyEmailTokenExpiry" TIMESTAMP(3),
DROP COLUMN "passwordResetTokenExpiry",
ADD COLUMN     "passwordResetTokenExpiry" TIMESTAMP(3);
