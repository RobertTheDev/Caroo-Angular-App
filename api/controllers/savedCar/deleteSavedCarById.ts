import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a saved car by its id.

export default async function deleteSavedCarById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Delete saved car by id.
    await savedCarPrismaService.deleteOneById(id);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted saved car with id ${id}.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting saved car by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
