import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all cars by matching user id.

export default async function getCarsByUserId(req: Request, res: Response) {
  try {
    // Get user id from the params.
    const { userId } = req.params;

    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Find all cars.
    const data = await carPrismaService.findAllByUserId(userId);

    // Return cars.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      message: `Successfully found all cars.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting cars by user id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
