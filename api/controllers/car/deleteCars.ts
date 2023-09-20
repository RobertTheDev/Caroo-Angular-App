import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes all cars.

export default async function deleteCars(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Declare and use car service.
    const carService = new CarService();

    // Delete all cars.
    await carService.deleteAll();

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted all cars.`,
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
