import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all cars.

export default async function getCars(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Declare and use car service.
    const carService = new CarService();

    // Find all cars.
    const data = await carService.findAll();

    // Return cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all cars.`,
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
