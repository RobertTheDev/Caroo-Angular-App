import { SavedCarService } from 'api/providers/savedCar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets saved cars by their car id.

export default async function getSavedCarsByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use saved car service.
    const savedCarService = new SavedCarService();

    // Get saved cars by car id.
    const data = await savedCarService.findAllByCarId(carId);

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found saved cars with car id ${carId}.`,
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
