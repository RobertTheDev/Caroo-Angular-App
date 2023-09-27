import { findAllCars } from 'api/providers/prisma/car.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// This controller gets all cars.

export default async function getCars(req: Request, res: Response) {
  try {
    // Step 1: Define the query params to filter all cars.
    const queryParams = req.query as {
      colour: string | null;
      driveType: string | null;
      engineSize: string | null;
      fuelType: string | null;
      gearbox: string | null;
      make: string | null;
      model: string | null;
      doors: string | null;
      seats: string | null;
      maxPriceTotal: string | null;
      minPriceTotal: string | null;
      maxYear: string | null;
      minYear: string | null;
      mileageTotal: string | null;
      priceTotal: string | null;
    };

    // Step 2: Find all cars using the query params.
    const data = await findAllCars(queryParams);
    // Return cars.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      message: `Successfully found all cars.`,
      data,
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
