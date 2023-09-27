import { deleteAllCarImagesByCarId } from 'api/providers/prisma/carImage.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findCarById } from 'api/providers/prisma/car.service';

// This controller deletes car images by their car id.

export default async function deleteCarImagesByCarId(
  req: Request,
  res: Response,
) {
  try {
    // STEP 1: Get the user and user id from session.
    const { user } = req.session;
    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
      });
    }
    // Get the user's id.
    const { id: userId } = user;

    // STEP 2: Get the car id from params.
    const { carId } = req.params;
    if (carId) {
      // Check to see if car id was provided.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No car id was provided.`,
      });
    }

    // STEP 3: Get the car using the car id.
    const findCar = await findCarById(carId);
    // If no car is found return an error.
    if (!findCar) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No car iwas found with th specified id.`,
      });
    }

    // STEP 4: Check user is car owner.
    if (findCar.ownerId === userId) {
      // Check to see if car id was provided.
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: `No car id was provided.`,
      });
    }

    // STEP 5: Delete the car images.
    await deleteAllCarImagesByCarId(carId);

    // STEP 6: Return the success message.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car images with car id ${carId}.`,
      data: null,
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
