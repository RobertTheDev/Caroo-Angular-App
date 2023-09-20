import { Car, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarSchemaType } from 'models/cars/validators/createCar.schema';
import { UpdateCarSchemaType } from 'models/cars/validators/updateCar.schema';

export class CarService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a car.
  async createOne(data: CreateCarSchemaType): Promise<Car> {
    return await this.prisma.car.create({
      data,
    });
  }

  // Return all cars.
  async findAll(): Promise<Car[]> {
    return await this.prisma.car.findMany({
      include: {
        images: true,
      },
    });
  }

  // Return all cars by owner id.
  async findAllByOwnerId(ownerId: string): Promise<Car[]> {
    return await this.prisma.car.findMany({
      include: {
        images: true,
      },
      where: { ownerId },
    });
  }

  // Find and return a car by id.
  async findOneById(id: string): Promise<Car | null> {
    return await this.prisma.car.findUnique({
      include: {
        images: true,
        owner: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          },
        },
      },
      where: {
        id,
      },
    });
  }

  // Update and return a car by id.
  async updateOneById(data: UpdateCarSchemaType, id: string): Promise<Car> {
    return await this.prisma.car.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete all cars.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.car.deleteMany();
  }

  // Delete all cars by id.
  async deleteAllByOwnerId(ownerId: string): Promise<Prisma.BatchPayload> {
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
