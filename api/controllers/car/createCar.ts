import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarSchema from 'api/validators/cars/createCar.schema';
import { CarService } from 'api/providers/car.service';

// This controller creates a new car.

export default async function createCar(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Declare and use car service.
    const carService = new CarService();

    // Validate the body.
    const validation = await createCarSchema.safeParseAsync(req.body);

    // If validation is successful then create a new car.
    if (validation.success) {
      // Create new car.
      const data = await carService.createOne(validation.data);

      // Send response with the created car.
      return res.status(StatusCodes.ACCEPTED).send({ data });
    } else {
      // If validation is unsuccessful send an error response with validation error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: ReasonPhrases.BAD_REQUEST,
        error: validation.error,
      });
    }
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
