import { CarService } from 'api/providers/car.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car by its id.

export default async function deleteCarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car service.
    const carService = new CarService();

    // Delete car by id.
    await carService.deleteOneById(id);

    // Return response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car with id ${id}.`,
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