import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car by its id.

export default async function getCarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car service.
    const carService = new CarService();

    // Find car by id.
    const data = await carService.findOneById(id);

    // Return car.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car with id ${id}.`,
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
