import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller delete all car owners.

export default async function deleteCarOwners(req: Request, res: Response) {
  try {
    // Define car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Declare and user car owner service.
    await carOwnerPrismaService.deleteAll();

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deletes all car owners.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car owners:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
