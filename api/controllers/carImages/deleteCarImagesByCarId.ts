import { CarImageService } from 'api/providers/carImage.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes car images by their car id.

export default async function deleteCarImagesByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use car image service.
    const carImageService = new CarImageService();

    // Delete all car images by matching car id.
    await carImageService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car images with car id ${carId}.`,
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
