import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all cars.

export default async function getCars(req: Request, res: Response) {
  try {
    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Find all cars.
    const data = await carPrismaService.findAll();

    // Return cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all cars.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting cars:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
