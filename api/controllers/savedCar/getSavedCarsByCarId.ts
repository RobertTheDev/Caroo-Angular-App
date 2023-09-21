import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets saved cars by their car id.

export default async function getSavedCarsByCarId(req: Request, res: Response) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Get saved cars by car id.
    const data = await savedCarPrismaService.findAllByCarId(carId);

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found saved cars with car id ${carId}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
