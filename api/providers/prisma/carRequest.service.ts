import { CarRequest, Prisma } from '@prisma/client';
import { CreateCarRequestSchemaType } from 'models/carRequest/validators/createCarRequest.schema';
import { UpdateCarRequestSchemaType } from 'models/carRequest/validators/updateCarRequest.schema';
import prisma from 'api/utils/prisma';
import ICarRequest from 'models/carRequest/types/CarRequest';

// Create and return a new car request.
export async function createOneCarRequest(
  data: CreateCarRequestSchemaType,
): Promise<CarRequest> {
  return await prisma.carRequest.create({
    data,
  });
}

// Delete all car requests.
export async function deleteAllCarRequests(): Promise<Prisma.BatchPayload> {
  return await prisma.carRequest.deleteMany();
}

// Delete all car requests by matching car id.
export async function deleteAllCarRequestsByCarId(
  carId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.carRequest.deleteMany({
    where: {
      carId,
    },
  });
}

// Delete all car requests by matching user id.
export async function deleteAllCarRequestsByUserId(
  userId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.carRequest.deleteMany({
    where: {
      userId,
    },
  });
}

// Delete a car request by id.
export async function deleteOneCarRequestById(id: string): Promise<CarRequest> {
  return await prisma.carRequest.delete({
    where: {
      id,
    },
  });
}

// Return all car requests.
export async function findAllCarRequests(): Promise<CarRequest[]> {
  return await prisma.carRequest.findMany({
    include: {
      car: {
        include: {
          images: true,
        },
      },
      user: true,
    },
  });
}

// Find all car requests by matching car id.
export async function findAllCarRequestsByCarId(
  carId: string,
): Promise<CarRequest[]> {
  return await prisma.carRequest.findMany({
    where: {
      carId,
    },
    include: {
      car: {
        include: {
          images: true,
        },
      },
      user: true,
    },
  });
}

// Find all car requests by matching user id.
export async function findAllCarRequestsByUserId(
  userId: string,
): Promise<CarRequest[]> {
  return await prisma.carRequest.findMany({
    where: {
      userId,
    },
    include: {
      car: {
        include: {
          images: true,
        },
      },
      user: true,
    },
  });
}

// Find and return a car request by id.
export async function findOneCarRequestById(
  id: string,
): Promise<ICarRequest | null> {
  return (await prisma.carRequest.findUnique({
    include: {
      car: {
        include: {
          images: true,
        },
      },
      user: true,
    },
    where: {
      id,
    },
  })) as ICarRequest;
}

// Find and return a car request by user id and car id.
export async function findOneCarRequestByCarIdAndUserId(
  carId: string,
  userId: string,
): Promise<CarRequest | null> {
  return await prisma.carRequest.findFirst({
    where: {
      carId,
      userId,
    },
  });
}

// Update a car request by matching id.
export async function updateOneCarRequestById(
  data: UpdateCarRequestSchemaType,
  id: string,
): Promise<CarRequest> {
  return await prisma.carRequest.update({
    data,
    where: {
      id,
    },
  });
}
