import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes saved cars by their user id.

export default async function deleteSavedCarsByUserId(
  req: Request,
  res: Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Delete saved cars by user id.
    await savedCarPrismaService.deleteAllByUserId(userId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted saved cars with user id ${userId}.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
