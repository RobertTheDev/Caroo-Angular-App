import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a saved car by its id.

export default async function getSavedCarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Get saved car by id.
    await savedCarService.findOneById(id);

    // Return a response message confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted saved car with id ${id}.`,
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
