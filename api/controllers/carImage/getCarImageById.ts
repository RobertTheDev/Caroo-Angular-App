import CarImagePrismaService from 'api/providers/prisma/carImage.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a car image by its id.

export default async function getCarImageById(req: Request, res: Response) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use car image service.
    const carImagePrismaService = new CarImagePrismaService();

    // Find car image by id.
    const data = await carImagePrismaService.findOneById(id);

    // If no car image found return a not found error.
    if (!data) {
      res.status(StatusCodes.NOT_FOUND).send({
        message: `Could not find car image with id ${id}.`,
        data: null,
      });
    }

    // Return car image.
    res.status(StatusCodes.OK).send({
      message: `Successfully found car image with id ${id}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
