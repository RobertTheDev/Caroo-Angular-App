import CarImagePrismaService from 'api/providers/prisma/carImage.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car image by its id.

export default async function deleteCarImages(_req: Request, res: Response) {
  try {
    // Declare and use car image service.
    const carImagePrismaService = new CarImagePrismaService();

    // Delete all car images.
    await carImagePrismaService.deleteAll();

    // Return car image.
    res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car images.`,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car images:`, error);

    // Catch and return an error if found.
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
