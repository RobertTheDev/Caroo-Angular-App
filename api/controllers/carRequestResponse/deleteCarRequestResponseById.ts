import CarRequestResponsePrismaService from 'api/providers/prisma/carRequestResponse.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car request by its id.

export default async function deleteCarRequestResponseById(
  req: Request,
  res: Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and user car request service.
    const carRequestResponsePrismaService =
      new CarRequestResponsePrismaService();

    // Delete car request by id.
    await carRequestResponsePrismaService.deleteOneById(id);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car request with id ${id}.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car request by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
