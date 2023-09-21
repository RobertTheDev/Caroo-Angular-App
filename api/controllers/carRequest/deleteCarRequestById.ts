import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car request by its id.

export default async function deleteCarRequestById(
  req: Request,
  res: Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Delete car request by id.
    await carRequestPrismaService.deleteOneById(id);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car request with id ${id}.`,
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
