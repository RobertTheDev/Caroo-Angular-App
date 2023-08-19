import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes saved cars by their user id.

export default async function deleteSavedCarsByUserId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Delete saved cars by user id.
    await savedCarService.deleteAllByUserId(userId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted saved cars with user id ${userId}.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
