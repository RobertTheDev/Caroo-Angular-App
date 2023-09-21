import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car requests by their car id.

export default async function getCarRequestsByCarId(
  req: Request,
  res: Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Find car requests by car id.
    const data = await carRequestPrismaService.findAllByCarId(carId);

    // Return car requests.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car requests with car id ${carId}.`,
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
