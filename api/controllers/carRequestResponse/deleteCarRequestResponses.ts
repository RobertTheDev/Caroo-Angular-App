import CarRequestResponsePrismaService from 'api/providers/prisma/carRequestResponse.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller delete all car requests.

export default async function deleteCarRequestResponses(
  _req: Request,
  res: Response,
) {
  try {
    // Define car request service.
    const carRequestResponsePrismaService =
      new CarRequestResponsePrismaService();

    // Declare and user car request service.
    await carRequestResponsePrismaService.deleteAll();

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted all car requests.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car requests:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}