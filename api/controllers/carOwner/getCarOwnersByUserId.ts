import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners by their user id.

export default async function getCarOwnersByUserId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // Get car owners by user id.
    const data = await carOwnerService.findAllByUserId(userId);

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners with user id ${userId}.`,
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
