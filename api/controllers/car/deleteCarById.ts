import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car by its id.

export default async function deleteCarById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

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

    // Delete car by id.
    await carPrismaService.deleteOneById(id);

    // Return response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car with id ${id}.`,
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error deleting car by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
