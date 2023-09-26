-- CreateTable
CREATE TABLE "CarRequestResponse" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT,
    "userId" TEXT NOT NULL,
    "carRequestId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CarRequestResponse_id_key" ON "CarRequestResponse"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CarRequestResponse_carRequestId_key" ON "CarRequestResponse"("carRequestId");

-- AddForeignKey
ALTER TABLE "CarRequestResponse" ADD CONSTRAINT "CarRequestResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarRequestResponse" ADD CONSTRAINT "CarRequestResponse_carRequestId_fkey" FOREIGN KEY ("carRequestId") REFERENCES "CarRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
