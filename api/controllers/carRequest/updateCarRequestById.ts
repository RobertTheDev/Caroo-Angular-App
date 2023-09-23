import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CarRequestPrismaService from 'api/providers/prisma/carRequest.service';
import updateCarRequestSchema from 'models/carRequest/validators/updateCarRequest.schema';
import winstonLogger from 'api/utils/winstonLogger';

// This controller updates a car request by its id.

export default async function updateCarRequestById(
  req: Request,
  res: Response,
) {
  try {
    // Get request body.
    const { body } = req.body;

    // Get id from params.
    const { id } = req.params;

    // Declare and use car request service.
    const carRequestPrismaService = new CarRequestPrismaService();

    // Validate the body.
    const validation = await updateCarRequestSchema.safeParseAsync(body);

    // If validation is successful update the car request by id.
    if (validation.success) {
      // Update the car request by id.
      const data = await carRequestPrismaService.updateCarRequestById(
        validation.data,
        id,
      );

      // Return the updated car request.
      return res.status(StatusCodes.OK).send({
        statusCode: StatusCodes.OK,
        statusMessage: `Successfully updated car request with id ${id}.`,
        data,
      });
    } else {
      // If validation is unsuccessful return an error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: ReasonPhrases.BAD_REQUEST,
        error: `The email you have entered does not have a match in our records.`,
      });
    }
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error updating car request by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
