import SavedCarPrismaService from 'api/providers/prisma/savedCar.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a saved car by its id.

export default async function getSavedCarById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use saved car service.
    const savedCarPrismaService = new SavedCarPrismaService();

    // Get saved car by id.
    await savedCarPrismaService.findOneById(id);

    // Return a response message confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted saved car with id ${id}.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
