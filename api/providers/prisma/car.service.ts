import { Car, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarSchemaType } from 'models/car/validators/createCar.schema';
import { UpdateCarSchemaType } from 'models/car/validators/updateCar.schema';

export default class CarPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a new car.
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

  // Find and return a car by id.
  async findOneById(id: string): Promise<Car | null> {
    return await this.prisma.car.findUnique({
      include: {
        images: true,
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

  // Delete a car by id.
  async deleteOneById(id: string): Promise<Car> {
    return await this.prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
