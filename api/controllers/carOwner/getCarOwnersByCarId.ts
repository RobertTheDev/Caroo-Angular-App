import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners by their car id.

export default async function getCarOwnersByCarId(req: Request, res: Response) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Find car owners by car id.
    const data = await carOwnerPrismaService.findAllByCarId(carId);

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners with car id ${carId}.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car owners by car id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
