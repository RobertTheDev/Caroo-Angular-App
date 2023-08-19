import { CarImageService } from 'api/providers/carImage.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car images by matching car id.

export default async function getCarImagesByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use car image service.
    const carImageService = new CarImageService();

    // Find all car images with matching car id.
    const data = await carImageService.findAllByCarId(carId);

    // Return car images.
    res.status(StatusCodes.OK).send({
      message: `Successfully found car images with car id ${carId}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
