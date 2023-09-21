import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car requests by their user id.

export default async function getCarRequestsByUserId(
  req: Request,
  res: Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Get car requests by user id.
    const data = await carRequestPrismaService.findAllByUserId(userId);

    // Return car requests.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car requests with user id ${userId}.`,
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
