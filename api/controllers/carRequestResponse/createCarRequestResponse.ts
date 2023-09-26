import CarRequestResponsePrismaService from 'api/providers/prisma/carRequestResponse.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarRequestResponseSchema from 'models/carRequestResponse/validators/createCarRequestResponse.schema';

// This controller creates a new car request.

export default async function createCarRequestResponse(
  req: Request,
  res: Response,
) {
  try {
    // Validate the body.
    const validation = await createCarRequestResponseSchema.safeParseAsync(
      req.body,
    );

    // Declare and user car request service.
    const carRequestResponsePrismaService =
      new CarRequestResponsePrismaService();

    // If validation is successful then create a car request.
    if (validation.success) {
      // Create car owner.
      const data = await carRequestResponsePrismaService.createOne(
        validation.data,
      );

      // Send response with the created car request.
      return res.status(StatusCodes.ACCEPTED).send({
        statusCode: StatusCodes.ACCEPTED,
        statusMessage: `A car request has been successfully created with id ${data.id}`,
        data,
      });
    }
    // If validation is unsuccessful send an error response with validation error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: validation.error.errors[0].message,
      error: validation.error,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error creating car request:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
