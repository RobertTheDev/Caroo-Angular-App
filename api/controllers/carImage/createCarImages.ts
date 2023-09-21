import CarImagePrismaService from 'api/providers/prisma/carImage.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller creates car images.

export default async function createCarImages(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use car image service.
    const carImagePrismaService = new CarImagePrismaService();

    // Create the car images.
    const data = await carImagePrismaService.createOne(body);

    // Return the car images.
    return res.status(StatusCodes.CREATED).send({
      message: 'Successfully created car images.',
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error creating car:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
