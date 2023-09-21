import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarOwnerSchema from 'models/carOwner/createCarOwner.schema';

// This controller creates a new car owner.

export default async function createCarOwner(req: Request, res: Response) {
  try {
    // Validate the body.
    const validation = await createCarOwnerSchema.safeParseAsync(req.body);

    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // If validation is successful then create a car owner.
    if (validation.success) {
      // Create car owner.
      const data = await carOwnerPrismaService.createOne(validation.data);

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
    // Log the error.
    winstonLogger.error(`Error creating car owner:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
