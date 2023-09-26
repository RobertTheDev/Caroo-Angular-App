import CarPrismaService from 'api/providers/prisma/car.service';
import updateCarSchema from 'models/car/validators/updateCar.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

export default async function updateCarById(req: Request, res: Response) {
  try {
    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Get request body.
    const { body } = req.body;

    // Get id from params.
    const { id } = req.params;

    // Get user id from the params.

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
    const validation = await updateCarSchema.safeParseAsync(body);

    // If validation is unsuccessful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    const findCar = await carPrismaService.findOneById(id);

    if (!findCar) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'You are not authorised to perform this action.',
        data: null,
      });
    }

    if (findCar.ownerId === user.id) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
        data: null,
      });
    }

    // Update car by id.
    const data = await carPrismaService.updateOneById(validation.data, id);

    // Return updated car.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated car with id ${id}`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error updating car by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
