import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets cars by their owner id.

export default async function getCarsByOwnerId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get owner id from params.
    const { ownerId } = req.params;

    // Declare and use car service.
    const carService = new CarService();

    // Find all cars by matched owner id.
    const data = await carService.findAllByOwnerId(ownerId);

    // Return cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found cars with owner id ${ownerId}.`,
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
