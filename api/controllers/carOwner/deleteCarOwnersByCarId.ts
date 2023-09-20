import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car owners by their car id.

export default async function deleteCarOwnersByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // Delete cars owners by car id.
    await carOwnerService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car owners with car id ${carId}.`,
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
