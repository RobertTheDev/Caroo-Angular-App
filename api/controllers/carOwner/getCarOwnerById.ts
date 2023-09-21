import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car owner by its id.

export default async function getCarOwnerById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Find car owner by id.
    const data = await carOwnerPrismaService.findOneById(id);

    // Return not found error if no car owner found.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `Car owner with id ${id} not found.`,
        data: null,
      });
    }

    // Return car owner by id.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owner with id ${id}.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting car owner by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
