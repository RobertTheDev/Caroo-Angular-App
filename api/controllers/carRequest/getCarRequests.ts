import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car requests.

export default async function getCarRequests(_req: Request, res: Response) {
  try {
    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Find car requests.
    const data = await carRequestPrismaService.findAll();

    // Return car requests.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car requests.`,
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
