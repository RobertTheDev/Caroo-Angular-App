import { Prisma, SavedCar } from '@prisma/client';
import { CreateSavedCarSchemaType } from 'models/savedCar/createSavedCar.schema';
import prisma from 'api/utils/prisma';

// Create and return a saved car.
export async function createSavedCar(
  data: CreateSavedCarSchemaType,
): Promise<SavedCar> {
  return await prisma.savedCar.create({
    data,
  });
}

// Delete all saved cars by matching car id.
export async function deleteAllSavedCarsByCarId(
  carId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.savedCar.deleteMany({
    where: {
      carId,
    },
  });
}

// Delete all saved cars by matching user id.
export async function deleteAllSavedCarsByUserId(
  userId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.savedCar.deleteMany({
    where: {
      userId,
    },
  });
}

// Delete a saved car by id.
export async function deleteSavedCarById(id: string): Promise<SavedCar> {
  return await prisma.savedCar.delete({
    where: {
      id,
    },
  });
}

// Return all saved cars.
export async function findAllSavedCars(): Promise<SavedCar[]> {
  return await prisma.savedCar.findMany({
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

// Find all saved cars by matching car id.
export async function findAllSavedCarsByCarId(
  carId: string,
): Promise<SavedCar[]> {
  return await prisma.savedCar.findMany({
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

// Find all saved cars by matching user id.
export async function findAllSavedCarsByUserId(
  userId: string,
): Promise<SavedCar[]> {
  return await prisma.savedCar.findMany({
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

// Find and return a saved car by id.
export async function findSavedCarById(id: string): Promise<SavedCar | null> {
  return await prisma.savedCar.findUnique({
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
  });
}
