import CarPrismaService from 'api/providers/prisma/car.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car by its id.

export default async function deleteCarById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car service.
    const carPrismaService = new CarPrismaService();

    // Delete car by id.
    await carPrismaService.deleteOneById(id);

    // Return response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car with id ${id}.`,
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
