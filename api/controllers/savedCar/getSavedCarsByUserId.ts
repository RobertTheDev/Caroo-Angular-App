import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets saved cars by their user id.

export default async function getSavedCarsByUserId(
  req: Request,
  res: Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Find saved cars by user id.
    const data = await savedCarPrismaService.findAllByUserId(userId);

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found saved cars with user id ${userId}.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting saved cars by user id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
