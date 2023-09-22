import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners.

export default async function getCarOwners(_req: Request, res: Response) {
  try {
    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Find car owners.
    const data = await carOwnerPrismaService.findAll();

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car owners:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}