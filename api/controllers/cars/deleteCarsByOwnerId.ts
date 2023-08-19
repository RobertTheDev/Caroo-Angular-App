import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes cars by their owner id.

export default async function deleteCarsByOwnerId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get owner id from params.
    const { ownerId } = req.params;

    // Declare and use car service.
    const carService = new CarService();

    // Delete all cars with matching owner id.
    await carService.deleteAllByOwnerId(ownerId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted cars with owner id ${ownerId}.`,
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
