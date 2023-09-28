-- DropForeignKey
ALTER TABLE "CarImage" DROP CONSTRAINT "CarImage_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarRequest" DROP CONSTRAINT "CarRequest_carId_fkey";

-- DropForeignKey
ALTER TABLE "CarRequestResponse" DROP CONSTRAINT "CarRequestResponse_carRequestId_fkey";

-- DropForeignKey
ALTER TABLE "SavedCar" DROP CONSTRAINT "SavedCar_carId_fkey";

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarRequest" ADD CONSTRAINT "CarRequest_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarRequestResponse" ADD CONSTRAINT "CarRequestResponse_carRequestId_fkey" FOREIGN KEY ("carRequestId") REFERENCES "CarRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedCar" ADD CONSTRAINT "SavedCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
