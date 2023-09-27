import { Car, Prisma } from '@prisma/client';
import { CreateCarSchemaType } from 'models/car/validators/createCar.schema';
import { UpdateCarSchemaType } from 'models/car/validators/updateCar.schema';
import { userReturnFields } from './auth.service';
import prisma from 'api/utils/prisma';

// Create and return a new car.
export async function createOneCar(data: CreateCarSchemaType): Promise<Car> {
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

// Return and filter cars.
export async function findAllCars(queryParams: {
  colour: string | null;
  driveType: string | null;
  engineSize: string | null;
  fuelType: string | null;
  gearbox: string | null;
  make: string | null;
  model: string | null;
  doors: string | null;
  seats: string | null;
  maxPriceTotal: string | null;
  minPriceTotal: string | null;
  maxYear: string | null;
  minYear: string | null;
  mileageTotal: string | null;
  priceTotal: string | null;
}): Promise<Car[]> {
  const colour = queryParams.colour
    ? { in: queryParams.colour.split(',') }
    : {};

  const driveType = queryParams.driveType
    ? { in: queryParams.driveType.split(',') }
    : {};

  const engineSize = queryParams.engineSize
    ? { in: queryParams.engineSize.split(',') }
    : {};

  const fuelType = queryParams.fuelType
    ? { in: queryParams.fuelType.split(',') }
    : {};

  const gearbox = queryParams.gearbox
    ? { in: queryParams.gearbox.split(',') }
    : {};

  const make = queryParams.make ? { in: queryParams.make.split(',') } : {};

  const model = queryParams.model ? { in: queryParams.model.split(',') } : {};

  const seats = queryParams.seats
    ? { in: queryParams.seats.split(',').map((seat: string) => parseInt(seat)) }
    : {};

  const doors = queryParams.doors
    ? { in: queryParams.doors.split(',').map((door: string) => parseInt(door)) }
    : {};

  const mileageTotal = queryParams.mileageTotal
    ? { gte: parseInt(queryParams.mileageTotal) }
    : {};

  let year = {};

  if (queryParams.minYear && queryParams.maxYear) {
    year = {
      gte: parseInt(queryParams.minYear),
      lte: parseInt(queryParams.maxYear),
    };
  } else if (queryParams.minYear) {
    year = {
      gte: parseInt(queryParams.minYear),
    };
  } else if (queryParams.maxYear) {
    year = {
      lte: parseInt(queryParams.maxYear),
    };
  }

  let priceTotal = {};

  if (queryParams.minPriceTotal && queryParams.maxPriceTotal) {
    priceTotal = {
      gte: parseInt(queryParams.minPriceTotal),
      lte: parseInt(queryParams.maxPriceTotal),
    };
  } else if (queryParams.minPriceTotal) {
    priceTotal = {
      gte: parseInt(queryParams.minPriceTotal),
    };
  } else if (queryParams.maxPriceTotal) {
    priceTotal = {
      lte: parseInt(queryParams.maxPriceTotal),
    };
  }

  return await prisma.car.findMany({
    where: {
      colour,
      doors,
      driveType,
      engineSize,
      fuelType,
      gearbox,
      make,
      model,
      seats,
      mileageTotal,
      priceTotal,
      year,
    },
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

export async function updateOneCarById(
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
export async function deleteOneCarById(id: string): Promise<Car> {
  return await prisma.car.delete({
    where: {
      id,
    },
  });
}
