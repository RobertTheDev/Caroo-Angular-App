-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "CarRequest" DROP CONSTRAINT "CarRequest_userId_fkey";

-- DropForeignKey
ALTER TABLE "CarRequestResponse" DROP CONSTRAINT "CarRequestResponse_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavedCar" DROP CONSTRAINT "SavedCar_userId_fkey";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarRequest" ADD CONSTRAINT "CarRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarRequestResponse" ADD CONSTRAINT "CarRequestResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedCar" ADD CONSTRAINT "SavedCar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
