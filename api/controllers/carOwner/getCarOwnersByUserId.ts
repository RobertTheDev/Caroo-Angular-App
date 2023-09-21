import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners by their user id.

export default async function getCarOwnersByUserId(
  req: Request,
  res: Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Get car owners by user id.
    const data = await carOwnerPrismaService.findAllByUserId(userId);

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners with user id ${userId}.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car owners by user id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
