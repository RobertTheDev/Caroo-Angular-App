import { CarImage, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarImageSchemaType } from 'api/validators/carImages/createCarImage.schema';
import { UpdateCarImageSchemaType } from 'api/validators/carImages/updateCarImage.schema';

export class CarImageService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a car image.
  async createOne(data: CreateCarImageSchemaType): Promise<CarImage> {
    return await this.prisma.carImage.create({
      data,
    });
  }

  // Return all car images.
  async findAll(): Promise<CarImage[]> {
    return await this.prisma.carImage.findMany();
  }

  // Return all car images by car id.
  async findAllByCarId(carId: string): Promise<CarImage[]> {
    return await this.prisma.carImage.findMany({
      where: {
        carId,
      },
    });
  }

  // Find and return a car image by id.
  async findOneById(id: string): Promise<CarImage | null> {
    return await this.prisma.carImage.findUnique({
      where: {
        id,
      },
    });
  }

  // Update and return a car image by id.
  async updateOneById(
    data: UpdateCarImageSchemaType,
    id: string,
  ): Promise<CarImage> {
    return await this.prisma.carImage.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete all car images.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.carImage.deleteMany();
  }

  // Delete all car images by car id.
  async deleteAllByCarId(carId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.carImage.deleteMany({
      where: {
        carId,
      },
    });
  }

  // Delete a car image by id.
  async deleteOneById(id: string): Promise<CarImage> {
    return await this.prisma.carImage.delete({
      where: {
        id,
      },
    });
  }
}
