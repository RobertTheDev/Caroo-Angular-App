import { CarImage, Prisma } from '@prisma/client';
import { CreateCarImageSchemaType } from 'models/carImage/validators/createCarImage.schema';
import { UpdateCarImageSchemaType } from 'models/carImage/validators/updateCarImage.schema';
import prisma from 'api/utils/prisma';

// Create and return a car image.
export async function createCarImage(
  data: CreateCarImageSchemaType,
): Promise<CarImage> {
  return await prisma.carImage.create({
    data,
  });
}

// Delete all car images.
export async function deleteAllCarImages(): Promise<Prisma.BatchPayload> {
  return await prisma.carImage.deleteMany();
}

// Delete all car images by matching car id.
export async function deleteAllCarImagesByCarId(
  carId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.carImage.deleteMany({
    where: {
      carId,
    },
  });
}

// Delete a car image by id.
export async function deleteCarImageById(id: string): Promise<CarImage> {
  return await prisma.carImage.delete({
    where: {
      id,
    },
  });
}

// Return all car images.
export async function findAllCarImages(): Promise<CarImage[]> {
  return await prisma.carImage.findMany({
    include: {
      car: {
        include: {
          images: true,
        },
      },
    },
  });
}

// Find and return all car images by matching car id.
export async function findAllCarImagesByCarId(
  carId: string,
): Promise<CarImage[]> {
  return await prisma.carImage.findMany({
    where: {
      carId,
    },
    include: {
      car: {
        include: {
          images: true,
        },
      },
    },
  });
}

// Find and return car image by id.
export async function findCarImageById(id: string): Promise<CarImage | null> {
  return await prisma.carImage.findUnique({
    include: {
      car: {
        include: {
          images: true,
        },
      },
    },
    where: {
      id,
    },
  });
}

// Delete all saved cars by matching user id.
export async function updateCarImageById(
  data: UpdateCarImageSchemaType,
  id: string,
): Promise<CarImage> {
  return await prisma.carImage.update({
    data,
    where: {
      id,
    },
  });
}
