import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car request by its id.

export default async function getCarRequestById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Find car request by id.
    const data = await carRequestPrismaService.findOneById(id);

    // Return not found error if no car request found.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `Car request with id ${id} not found.`,
        data: null,
      });
    }

    // Return car owner by id.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car request with id ${id}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
