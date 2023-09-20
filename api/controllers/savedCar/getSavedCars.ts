import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all saved cars.

export default async function getSavedCars(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Find all saved cars.
    const data = await savedCarService.findAll();

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all saved cars.`,
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
