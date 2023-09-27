import { findCarById } from 'api/providers/prisma/car.service';
import {
  createOneSavedCar,
  deleteOneSavedCarById,
  findOneSavedCarByCarIdAndUserId,
} from 'api/providers/prisma/savedCar.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// This controller saves and unsaves a car.
// We check to see if there is a saved car with matching user and car ids.
// We get user id from session and car id from params.
// If no saved car was found we save the car and vice-versa.

export default async function saveCar(req: Request, res: Response) {
  try {
    // STEP 1: Get car and user id.
    // Get the user from the session.
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

    // STEP 2: Get the car id from the params.
    const { carId } = req.params;
    if (!carId) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car id was provided.',
      });
    }

    // STEP 3: Check user is not the owner.
    const car = await findCarById(carId);
    if (!car) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car was found.',
      });
    }
    if (car.ownerId === user.id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'You cannot save this car as you are the owner.',
      });
    }

    // STEP 4: Check to see if a saved car with the user and car id exists.
    // Create saved car.
    const findSavedCar = await findOneSavedCarByCarIdAndUserId(carId, userId);

    // STEP 5: If saved car was found then unsave otherwise save the car.
    if (!findSavedCar) {
      // Save the car.
      const savedCar = await createOneSavedCar({
        carId,
        userId,
      });
      // Send response with the saved car.
      return res.status(StatusCodes.OK).send({
        statusCode: StatusCodes.OK,
        statusMessage: `Successfully saved the car.`,
        data: savedCar,
      });
    } else {
      // Unsave the car.
      const unsavedCar = await deleteOneSavedCarById(findSavedCar.id);

      // Send response with the unsaved car.
      return res.status(StatusCodes.OK).send({
        statusCode: StatusCodes.OK,
        statusMessage: `Successfully unsaved the car.`,
        data: unsavedCar,
      });
    }
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
