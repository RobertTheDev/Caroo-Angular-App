import { CarRequest, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarRequestSchemaType } from 'models/carRequest/validators/createCarRequest.schema';
import { UpdateCarRequestSchemaType } from 'models/carRequest/validators/updateCarRequest.schema';

export default class CarRequestPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a new car request.
  async createOne(data: CreateCarRequestSchemaType): Promise<CarRequest> {
    return await this.prisma.carRequest.create({
      data,
    });
  }

  // Delete all car requests.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequest.deleteMany();
  }

  // Delete all car requests by matching car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequest.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete all car requests by matching user id.
  async deleteAllByUserId(userId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequest.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Delete a car request by id.
  async deleteOneById(id: string): Promise<CarRequest> {
    return await this.prisma.carRequest.delete({
      where: {
        id,
      },
    });
  }

  // Return all car requests.
  async findAll(): Promise<CarRequest[]> {
    return await this.prisma.carRequest.findMany({
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

  // Find all car requests by matching car id.
  async findAllByCarId(carId: string): Promise<CarRequest[]> {
    return await this.prisma.carRequest.findMany({
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

  // Find all car requests by matching user id.
  async findAllByUserId(userId: string): Promise<CarRequest[]> {
    return await this.prisma.carRequest.findMany({
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

  // Find and return a car request by id.
  async findOneById(id: string): Promise<CarRequest | null> {
    return await this.prisma.carRequest.findUnique({
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

  // Update a car request by matching id.
  async updateCarRequestById(
    data: UpdateCarRequestSchemaType,
    id: string,
  ): Promise<CarRequest> {
    return await this.prisma.carRequest.update({
      data,
      where: {
        id,
      },
    });
  }
}
