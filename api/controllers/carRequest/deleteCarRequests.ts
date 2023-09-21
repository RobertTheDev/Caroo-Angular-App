import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller delete all car requests.

export default async function deleteCarRequests(_req: Request, res: Response) {
  try {
    // Define car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Declare and user car request service.
    await carRequestPrismaService.deleteAll();

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted all car requests.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
