import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarOwnerSchema from 'api/validators/carOwners/createCarOwner.schema';
import { CarOwnerService } from 'api/providers/carOwner.service';

// This controller creates a new car owner.

export default async function createCarOwner(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Validate the body.
    const validation = await createCarOwnerSchema.safeParseAsync(req.body);

    // Declare and user car owner service.
    const carOwnerService = new CarOwnerService();

    // If validation is successful then create a car owner.
    if (validation.success) {
      // Create car owner.
      const data = await carOwnerService.createOne(validation.data);

      // Send response with the created car owner.
      return res.status(StatusCodes.ACCEPTED).send({
        message: `A car owner has been successfully created with id ${data.id}`,
        data,
      });
    }
    // If validation is unsuccessful send an error response with validation error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
