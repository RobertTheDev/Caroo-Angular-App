import { Car, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarSchemaType } from 'models/car/validators/createCar.schema';
import { UpdateCarSchemaType } from 'models/car/validators/updateCar.schema';
import { userReturnFields } from './auth.service';

export default class CarPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a new car.
  async createOne(data: CreateCarSchemaType): Promise<Car> {
    const { images, ...car } = data;

    // Create the car without images
    const createdCar = await this.prisma.car.create({
      data: car,
    });

    // Create car images and associate them with the car
    const createdCarImages = await Promise.all(
      images.map(async (imageData) => {
        const { alt, url } = imageData;
        return await this.prisma.carImage.create({
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
    const updatedCar = await this.prisma.car.update({
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
  async findAll(): Promise<Car[]> {
    return await this.prisma.car.findMany({
      include: {
        images: true,
        owner: {
          select: userReturnFields,
        },
      },
    });
  }

  // Return all cars by matching user id.
  async findAllByUserId(ownerId: string): Promise<Car[]> {
    return await this.prisma.car.findMany({
      where: {
        ownerId,
      },
      include: {
        images: true,
      },
    });
  }

  // Find and return a car by id.
  async findOneById(id: string): Promise<Car | null> {
    return await this.prisma.car.findUnique({
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

  async updateOneById(data: UpdateCarSchemaType, id: string): Promise<Car> {
    const { images, ...car } = data;

    // Create the car without images
    const createdCar = await this.prisma.car.update({
      data: car,
      where: { id },
    });

    // Create car images and associate them with the car
    const createdCarImages = await Promise.all(
      images.map(async (imageData) => {
        const { alt, url } = imageData;
        return await this.prisma.carImage.create({
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
    const updatedCar = await this.prisma.car.update({
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
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.car.deleteMany();
  }

  // Delete all cars by matching user id.
  async deleteAllByUserId(ownerId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.car.deleteMany({
      where: {
        ownerId,
      },
    });
  }

  // Delete a car by id.
  async deleteOneById(id: string): Promise<Car> {
    return await this.prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
