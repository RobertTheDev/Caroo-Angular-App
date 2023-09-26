import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all cars by matching user id.

export default async function getCarsByUserId(req: Request, res: Response) {
  // Get user id from the params.

  const { user } = req.session;

  // If no user is session return unauthorized error.
  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).send({
      statusCode: StatusCodes.UNAUTHORIZED,
      statusMessage: 'You are not authorised to perform this action.',
      data: null,
    });
  }
  try {
    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Find all cars.
    const data = await carPrismaService.findAllByUserId(user.id);

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
