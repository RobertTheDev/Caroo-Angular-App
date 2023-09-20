import { CarImageService } from 'api/providers/carImage.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller creates car images.

export default async function createCarImages(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use car image service.
    const carImageService = new CarImageService();

    // Create the car images.
    const data = await carImageService.createOne(body);

    // Return the car images.
    return res.status(StatusCodes.CREATED).send({
      message: 'Successfully created car images.',
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
