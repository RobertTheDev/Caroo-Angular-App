import { CarOwner, Prisma, PrismaClient } from '@prisma/client';

export class CarOwnerService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a car owner.
  async createOne(data: CreateCarOwnerSchemaType): Promise<CarOwner> {
    return await this.prisma.carOwner.create({
      data,
    });
  }

  // Return all car owners.
  async findAll(): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany();
  }

  // Return all car owners by car id.
  async findAllByCarId(carId: string): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany({
      where: {
        carId,
      },
    });
  }

  // Return all car owners by user id.
  async findAllByUserId(userId: string): Promise<CarOwner[]> {
    return await this.prisma.carOwner.findMany({
      where: {
        userId,
      },
    });
  }

  // Find and return a car owner by id.
  async findOneById(id: string): Promise<CarOwner | null> {
    return await this.prisma.carOwner.findUnique({
      where: {
        id,
      },
    });
  }

  // Update and return a car owner by id.
  async updateOneById(
    data: UpdateCarOwnerSchemaType,
    id: string,
  ): Promise<CarOwner> {
    return await this.prisma.carOwner.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete all car owners.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.carOwner.deleteMany();
  }

  // Delete all car owners by car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carOwner.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete all car owners by user id.
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
}
