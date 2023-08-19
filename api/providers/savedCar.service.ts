import { SavedCar, Prisma, PrismaClient } from '@prisma/client';
import { CreateSavedCarSchemaType } from 'api/validators/savedCars/createSavedCar.schema';
import { UpdateSavedCarSchemaType } from 'api/validators/savedCars/updateSavedCar.schema';

export class SavedCarService {
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

  // Return all saved cars.
  async findAll(): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany();
  }

  // Return all saved cars by car id.
  async findAllByCarId(carId: string): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany({ where: { carId } });
  }

  // Return all saved cars by user id.
  async findAllByUserId(userId: string): Promise<SavedCar[]> {
    return await this.prisma.savedCar.findMany({
      where: { userId },
    });
  }

  // Find and return a saved car by id.
  async findOneById(id: string): Promise<SavedCar | null> {
    return await this.prisma.savedCar.findUnique({
      where: {
        id,
      },
    });
  }

  // Update and return a saved car by id.
  async updateOneById(
    data: UpdateSavedCarSchemaType,
    id: string,
  ): Promise<SavedCar> {
    return await this.prisma.savedCar.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete all saved cars.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.savedCar.deleteMany();
  }

  // Delete all saved cars by car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.savedCar.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete all saved cars by user id.
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
}
