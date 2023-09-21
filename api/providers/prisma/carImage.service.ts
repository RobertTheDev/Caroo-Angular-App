import { CarImage, Prisma, PrismaClient } from '@prisma/client';
import { CreateCarImageSchemaType } from 'models/carImage/validators/createCarImage.schema';
import { UpdateCarImageSchemaType } from 'models/carImage/validators/updateCarImage.schema';

export default class CarImagePrismaService {
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

  // Delete all car images by matching car id.
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

  // Return all car images.
  async findAll(): Promise<CarImage[]> {
    return await this.prisma.carImage.findMany({
      include: {
        car: {
          include: {
            images: true,
          },
        },
      },
    });
  }

  // Find and return all car images by matching car id.
  async findAllByCarId(carId: string): Promise<CarImage[]> {
    return await this.prisma.carImage.findMany({
      where: {
        carId,
      },
      include: {
        car: {
          include: {
            images: true,
          },
        },
      },
    });
  }

  // Find and return car image by id.
  async findOneById(id: string): Promise<CarImage | null> {
    return await this.prisma.carImage.findUnique({
      include: {
        car: {
          include: {
            images: true,
          },
        },
      },
      where: {
        id,
      },
    });
  }

  // Delete all saved cars by matching user id.
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
}
