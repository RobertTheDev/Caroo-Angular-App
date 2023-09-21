import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes car owners by their user id.

export default async function deleteCarOwnersByUserId(
  req: Request,
  res: Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Delete car owners by user id.
    await carOwnerPrismaService.deleteAllByUserId(userId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car owners with user id ${userId}.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car owners by user id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
