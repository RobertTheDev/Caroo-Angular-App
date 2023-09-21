import { Prisma, PrismaClient, CarOwner } from '@prisma/client';
import { CreateSavedCarSchemaType } from 'models/savedCar/createSavedCar.schema';

export class CarOwnerPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a car owner.
  async createOne(data: CreateSavedCarSchemaType): Promise<CarOwner> {
    return await this.prisma.carOwner.create({
      data,
    });
  }

  // Delete all car owners by matching car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carOwner.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete all car owners by matching user id.
  async deleteAllByUserId(userId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carOwner.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Delete a car owner by id.
  async deleteOneById(id: string): Promise<CarOwner> {
    return await this.prisma.carOwner.delete({
      where: {
        id,
      },
    });
  }

  // Return all car owners.
  async findAll(): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany({
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

  // Find all car owner by matching car id.
  async findAllByCarId(carId: string): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany({
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

  // Find all car owners by matching user id.
  async findAllByUserId(userId: string): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany({
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

  // Find and return a car owner by id.
  async findOneById(id: string): Promise<CarOwner | null> {
    return await this.prisma.carOwner.findUnique({
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
