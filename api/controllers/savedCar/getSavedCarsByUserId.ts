import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets saved cars by their user id.

export default async function getSavedCarsByUserId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Find saved cars by user id.
    const data = await savedCarService.findAllByUserId(userId);

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found saved cars with user id ${userId}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
