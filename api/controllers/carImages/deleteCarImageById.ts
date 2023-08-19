import { CarImageService } from 'api/providers/carImage.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car image by its id.

export default async function deleteCarImageById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car image service.
    const carImageService = new CarImageService();

    // Delete a car image by its id.
    await carImageService.deleteOneById(id);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car image with id ${id}.`,
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
