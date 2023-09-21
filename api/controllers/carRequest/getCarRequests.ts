import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car requests.

export default async function getCarRequests(_req: Request, res: Response) {
  try {
    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Find car requests.
    const data = await carRequestPrismaService.findAll();

    // Return car requests.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car requests.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car requests:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
