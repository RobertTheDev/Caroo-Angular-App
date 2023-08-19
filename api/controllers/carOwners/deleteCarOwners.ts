import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller delete all car owners.

export default async function deleteCarOwners(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Define car owner service.
    const carOwnerService = new CarOwnerService();

    // Declare and user car owner service.
    await carOwnerService.deleteAll();

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deletes all car owners.`,
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
