import { findAllCarRequestsByCarId } from 'api/providers/prisma/carRequest.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// This controller gets car requests by their car id.

export default async function getCarRequestsByCarId(
  req: Request,
  res: Response,
) {
  try {
    // STEP 1: Get car id from params.
    const { carId } = req.params;
    // If no car id is provided return an error.
    if (!carId) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car id was provided.',
      });
    }

    // STEP 2: Find  and return car requests by car id.
    const carRequests = await findAllCarRequestsByCarId(carId);
    // Return car requests.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully found car requests.`,
      data: carRequests,
    });
  } catch (error: unknown) {
    // Catch and log any errors. If the error is of intance type Error we can add the error message.
    if (error instanceof Error) {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error.message}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error.message}`,
      });
    } else {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error}`,
      });
    }
  }
}
