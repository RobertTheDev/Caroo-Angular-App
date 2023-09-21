import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarOwnerSchema from 'models/carOwner/createCarOwner.schema';

// This controller creates a saved car.

export default async function createSavedCar(req: Request, res: Response) {
  try {
    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Validate the body.
    const validation = await createCarOwnerSchema.safeParseAsync(req.body);

    // If validation is successful then create a saved car.
    if (validation.success) {
      // Create saved car.
      const data = await savedCarPrismaService.createOne(validation.data);

      // Send response with the saved car.
      return res.status(StatusCodes.ACCEPTED).send({ data });
    } else {
      // If validation is unsuccessful send an error response with validation error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: ReasonPhrases.BAD_REQUEST,
        error: validation.error,
      });
    }
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
