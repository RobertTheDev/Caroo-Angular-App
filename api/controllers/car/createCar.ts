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

    const { user } = req.session;

    // If no user is session return unauthorized error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
        data: null,
      });
    }

    // Validate the body.
    const validation = await createCarSchema.safeParseAsync({
      ...req.body,
      ownerId: user.id,
    });

    // If validation is unsuccessful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // Create new car.
    const data = await carPrismaService.createOne(validation.data);

    // Send response with the created car.
    return res.status(StatusCodes.ACCEPTED).send({
      statusCode: StatusCodes.ACCEPTED,
      statusMessage: `Successfully created car with id ${data.id}`,
      data,
    });
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
