import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a car requests by their car id.

export default async function deleteCarRequestsByCarId(
  req: Request,
  res: Response,
) {
  try {
    // Get car  id from params.
    const { carId } = req.params;

    // Declare and user car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Delete cars requests by car id.
    await carRequestPrismaService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car requests with car id ${carId}.`,
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
