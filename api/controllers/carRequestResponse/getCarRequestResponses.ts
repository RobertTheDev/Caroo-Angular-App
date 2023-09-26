import CarRequestResponsePrismaService from 'api/providers/prisma/carRequestResponse.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car requests.

export default async function getCarRequestResponses(
  _req: Request,
  res: Response,
) {
  try {
    // Declare and user car request service.
    const carRequestResponsePrismaService =
      new CarRequestResponsePrismaService();

    // Find car requests.
    const data = await carRequestResponsePrismaService.findAll();

    // Return car requests.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully found car requests.`,
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
