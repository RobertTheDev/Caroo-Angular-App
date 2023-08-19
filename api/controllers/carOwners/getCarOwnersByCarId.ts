import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners by their car id.

export default async function getCarOwnersByCarId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // Find car owners by car id.
    const data = await carOwnerService.findAllByCarId(carId);

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners with car id ${carId}.`,
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
