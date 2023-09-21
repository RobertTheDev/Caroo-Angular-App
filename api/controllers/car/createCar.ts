import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createCarSchema from 'models/car/validators/createCar.schema';

// This controller creates a new car.

export default async function createCar(req: Request, res: Response) {
  try {
    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Validate the body.
    const validation = await createCarSchema.safeParseAsync(req.body);

    // If validation is successful then create a new car.
    if (validation.success) {
      // Create new car.
      const data = await carPrismaService.createOne(validation.data);

      // Send response with the created car.
      return res.status(StatusCodes.ACCEPTED).send({ data });
    } else {
      // If validation is unsuccessful send an error response with validation error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: ReasonPhrases.BAD_REQUEST,
        error: validation.error,
      });
    }
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error creating car:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
