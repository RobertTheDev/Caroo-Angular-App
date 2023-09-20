import { CarService } from 'api/providers/car.service';
import updateCarSchema from 'api/validators/cars/updateCar.schema';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function updateCarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get request body.
    const { body } = req.body;

    // Get id from params.
    const { id } = req.params;

    // Declare and use car service.
    const carService = new CarService();

    // Validate the body.
    const validation = await updateCarSchema.safeParseAsync(body);

    // If validation is successful update a car by id.
    if (validation.success) {
      // Update car by id.
      const data = await carService.updateOneById(validation.data, id);

      // Return updated car.
      return res
        .status(StatusCodes.OK)
        .send({ message: `Successfully updated car with id ${id}`, data });
    }
    // If validation is unsuccessful return a bad request error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
