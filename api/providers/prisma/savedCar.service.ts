import { Prisma, PrismaClient, SavedCar } from '@prisma/client';
import { CreateSavedCarSchemaType } from 'models/savedCar/createSavedCar.schema';

export default class SavedCarPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a saved car.
  async createOne(data: CreateSavedCarSchemaType): Promise<SavedCar> {
    return await this.prisma.savedCar.create({
      data,
    });
  }

  // Delete all saved cars by matching car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.savedCar.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete all saved cars by matching user id.
  async deleteAllByUserId(userId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.savedCar.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Delete a saved car by id.
  async deleteOneById(id: string): Promise<SavedCar> {
    return await this.prisma.savedCar.delete({
      where: {
        id,
      },
    });
  }

  // Return all saved cars.
  async findAll(): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany({
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
  async findAllByCarId(carId: string): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany({
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
  async findAllByUserId(userId: string): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany({
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
  async findOneById(id: string): Promise<SavedCar | null> {
    return await this.prisma.savedCar.findUnique({
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
}
