import CarPrismaService from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car by its id.

export default async function getCarById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Find car by id.
    const data = await carPrismaService.findOneById(id);

    // Return car.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car with id ${id}.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
