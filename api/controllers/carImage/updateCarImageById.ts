import updateCarImageSchema from 'models/carImage/validators/updateCarImage.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CarImagePrismaService from 'api/providers/prisma/carImage.service';
import winstonLogger from 'api/utils/winstonLogger';

// This controller updates a car image by its id.

export default async function updateCarImageById(req: Request, res: Response) {
  try {
    // Get request body.
    const { body } = req.body;

    // Get id from params.
    const { id } = req.params;

    // Declare and use car image service.
    const carImagePrismaService = new CarImagePrismaService();

    // Validate the body.
    const validation = await updateCarImageSchema.safeParseAsync(body);

    // If validation is successful update the car image by id.
    if (validation.success) {
      // Update the car image by id.
      const data = await carImagePrismaService.updateOneById(
        validation.data,
        id,
      );

      // Return the updated car image.
      return res.status(StatusCodes.OK).send({ data });
    } else {
      // If validation is unsuccessful return an error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error updating car image by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
