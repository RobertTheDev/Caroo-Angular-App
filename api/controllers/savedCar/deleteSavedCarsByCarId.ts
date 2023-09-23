import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes saved cars by their car id.

export default async function deleteSavedCarsByCarId(
  req: Request,
  res: Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Delete saved cars by car id.
    await savedCarPrismaService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted saved cars with car id ${carId}.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting saved cars by car id:`, error);

    // Catch and return an error if found.s
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
