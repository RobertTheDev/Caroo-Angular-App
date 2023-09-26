import { Car, Prisma } from '@prisma/client';
import { CreateCarSchemaType } from 'models/car/validators/createCar.schema';
import { UpdateCarSchemaType } from 'models/car/validators/updateCar.schema';
import { userReturnFields } from './auth.service';
import prisma from 'api/utils/prisma';

// Create and return a new car.
export async function createCar(data: CreateCarSchemaType): Promise<Car> {
  const { images, ...car } = data;

  // Create the car without images
  const createdCar = await prisma.car.create({
    data: car,
  });

  // Create car images and associate them with the car
  const createdCarImages = await Promise.all(
    images.map(async (imageData) => {
      const { alt, url } = imageData;
      return await prisma.carImage.create({
        data: {
          alt,
          url,
          car: {
            connect: {
              id: createdCar.id,
            },
          },
        },
      });
    }),
  );
  // Attach the created images to the car
  const updatedCar = await prisma.car.update({
    include: {
      owner: {
        select: userReturnFields,
      },
    },
    where: {
      id: createdCar.id,
    },
    data: {
      images: {
        connect: createdCarImages.map((image) => ({
          id: image.id,
        })),
      },
    },
  });

  return updatedCar;
}

// Return all cars.
export async function findAllCars(): Promise<Car[]> {
  return await prisma.car.findMany({
    include: {
      images: true,
      owner: {
        select: userReturnFields,
      },
    },
  });
}

// Return all cars by matching user id.
export async function findAllCarsByUserId(ownerId: string): Promise<Car[]> {
  return await prisma.car.findMany({
    where: {
      ownerId,
    },
    include: {
      images: true,
    },
  });
}

// Find and return a car by id.
export async function findCarById(id: string): Promise<Car | null> {
  return await prisma.car.findUnique({
    include: {
      images: true,
      owner: {
        select: userReturnFields,
      },
    },
    where: {
      id,
    },
  });
}

// Update and return a car by id.

export async function updateCarById(
  data: UpdateCarSchemaType,
  id: string,
): Promise<Car> {
  const { images, ...car } = data;

  // Create the car without images
  const createdCar = await prisma.car.update({
    data: car,
    where: { id },
  });

  // Create car images and associate them with the car
  const createdCarImages = await Promise.all(
    images.map(async (imageData) => {
      const { alt, url } = imageData;
      return await prisma.carImage.create({
        data: {
          alt,
          url,
          car: {
            connect: {
              id: createdCar.id,
            },
          },
        },
      });
    }),
  );
  // Attach the created images to the car
  const updatedCar = await prisma.car.update({
    include: {
      owner: {
        select: userReturnFields,
      },
    },
    where: {
      id: createdCar.id,
    },
    data: {
      images: {
        connect: createdCarImages.map((image) => ({
          id: image.id,
        })),
      },
    },
  });

  return updatedCar;
}

// Delete all cars.
export async function deleteAllCars(): Promise<Prisma.BatchPayload> {
  return await prisma.car.deleteMany();
}

// Delete all cars by matching user id.
export async function deleteAllCarsByUserId(
  ownerId: string,
): Promise<Prisma.BatchPayload> {
  return await prisma.car.deleteMany({
    where: {
      ownerId,
    },
  });
}

// Delete a car by id.
export async function deleteCarById(id: string): Promise<Car> {
  return await prisma.car.delete({
    where: {
      id,
    },
  });
}
