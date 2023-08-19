import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes saved cars by their car id.

export default async function deleteSavedCarsByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Delete saved cars by car id.
    await savedCarService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted saved cars with car id ${carId}.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.s
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
