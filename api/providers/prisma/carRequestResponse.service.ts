import { CarRequestResponse, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarRequestResponseSchemaType } from 'models/carRequestResponse/validators/createCarRequestResponse.schema';
import { UpdateCarRequestResponseSchemaType } from 'models/carRequestResponse/validators/updateCarRequestResponse.schema';

export default class CarRequestResponsePrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a new car request response.
  async createOne(
    data: CreateCarRequestResponseSchemaType,
  ): Promise<CarRequestResponse> {
    return await this.prisma.carRequestResponse.create({
      data,
    });
  }

  // Delete all car request responses.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequestResponse.deleteMany();
  }

  // Delete all car request responses by matching car id.
  async deleteAllByCarRequestId(
    carRequestId: string,
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequestResponse.deleteMany({
      where: {
        carRequestId,
      },
    });
  }

  // Delete all car request responses by matching user id.
  async deleteAllByUserId(userId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carRequestResponse.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Delete a car request response by id.
  async deleteOneById(id: string): Promise<CarRequestResponse> {
    return await this.prisma.carRequestResponse.delete({
      where: {
        id,
      },
    });
  }

  // Return all car request responses.
  async findAll(): Promise<CarRequestResponse[]> {
    return await this.prisma.carRequestResponse.findMany({
      include: {
        user: true,
      },
    });
  }

  // Find all car request responses by matching car id.
  async findAllByCarRequestId(
    carRequestId: string,
  ): Promise<CarRequestResponse[]> {
    return await this.prisma.carRequestResponse.findMany({
      where: {
        carRequestId,
      },
      include: {
        user: true,
      },
    });
  }

  // Find all car request responses by matching user id.
  async findAllByUserId(userId: string): Promise<CarRequestResponse[]> {
    return await this.prisma.carRequestResponse.findMany({
      where: {
        userId,
      },
    });
  }

  // Find and return a car request response by id.
  async findOneById(id: string): Promise<CarRequestResponse | null> {
    return await this.prisma.carRequestResponse.findUnique({
      include: {
        user: true,
      },
      where: {
        id,
      },
    });
  }

  // Update a car request response by matching id.
  async updateCarRequestById(
    data: UpdateCarRequestResponseSchemaType,
    id: string,
  ): Promise<CarRequestResponse> {
    return await this.prisma.carRequestResponse.update({
      data,
      where: {
        id,
      },
    });
  }
}
