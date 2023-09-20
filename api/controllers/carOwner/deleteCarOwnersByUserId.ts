import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes car owners by their user id.

export default async function deleteCarOwnersByUserId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // Delete car owners by user id.
    await carOwnerService.deleteAllByUserId(userId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car owners with user id ${userId}.`,
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
