import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all saved cars.

export default async function getSavedCars(req: Request, res: Response) {
  try {
    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Find all saved cars.
    const data = await savedCarPrismaService.findAll();

    // Return the saved cars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all saved cars.`,
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
