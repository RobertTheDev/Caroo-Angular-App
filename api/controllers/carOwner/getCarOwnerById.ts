import { CarOwnerService } from 'api/providers/carOwner.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car owner by its id.

export default async function getCarOwnerById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // Find car owner by id.
    const data = await carOwnerService.findOneById(id);

    // Return not found error if no car owner found.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `Car owner with id ${id} not found.`,
        data: null,
      });
    }

    // Return car owner by id.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owner with id ${id}.`,
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
