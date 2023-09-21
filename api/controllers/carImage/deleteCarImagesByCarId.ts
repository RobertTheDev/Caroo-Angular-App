import CarImagePrismaService from 'api/providers/prisma/carImage.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes car images by their car id.

export default async function deleteCarImagesByCarId(
  req: Request,
  res: Response,
) {
  try {
    // Get car id from params.
    const { carId } = req.params;

    // Declare and use car image service.
    const carImagePrismaService = new CarImagePrismaService();

    // Delete all car images by matching car id.
    await carImagePrismaService.deleteAllByCarId(carId);

    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted car images with car id ${carId}.`,
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
